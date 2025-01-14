"use client"; // Mark this as a Client Component

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Address, CartItem } from '@/utils/types';
import { useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FaSpinner } from 'react-icons/fa';
import { getData } from 'country-list'; // Import the country list

// Load Stripe.js
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = ({
  cartItems,
  shippingAddress,
  setShippingAddress,
  email,
  setEmail,
  onSuccess,
}: {
  cartItems: CartItem[];
  shippingAddress: Address;
  setShippingAddress: (address: Address) => void;
  email: string;
  setEmail: (email: string) => void;
  onSuccess: () => void;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError('');

    try {
      // Step 1: Create a payment intent on the server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems: cartItems, // Pass the cart items
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Step 2: Confirm the payment
      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: shippingAddress.name,
            email: email,
            address: {
              line1: shippingAddress.address_line1,
              city: shippingAddress.city,
              state: shippingAddress.state,
              postal_code: shippingAddress.postal_code,
              country: shippingAddress.country,
            },
          },
        },
      });

      if (confirmError) {
        console.error('Payment Confirmation Error:', confirmError);
        throw new Error(confirmError.message);
      }

      // Step 3: On successful payment
      onSuccess();
    } catch (error) {
      console.error('Error during payment:', error);
      setError('An error occurred during payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={shippingAddress.name}
          onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select
          value={shippingAddress.country}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, country: e.target.value })
          }
          className="w-full p-2 border rounded mt-1"
          required
        >
          {getData().map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* Card Information */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Card Information</label>
        <div className="p-3 border rounded mt-1">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full mt-6 py-2 px-4 bg-[#029FAE] text-white font-semibold rounded-[30px] hover:bg-[#272343] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {loading ? <FaSpinner className="animate-spin mr-2" /> : null}
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default function CheckOut() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cart = searchParams.get('cart') || '[]'; // Default to '[]' if cart is null
  const cartItems: CartItem[] = JSON.parse(cart); // Now cart is always a string

  const [shippingAddress, setShippingAddress] = useState<Address>({
    name: '',
    address_line1: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'US',
  });
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Display Cart Items */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-4">
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">${item.price}</p>
            </div>
            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Payment Form */}
      <Elements stripe={stripePromise}>
        <CheckoutForm
          cartItems={cartItems}
          shippingAddress={shippingAddress}
          setShippingAddress={setShippingAddress}
          email={email}
          setEmail={setEmail}
          onSuccess={() => router.push('/thank-you')}
        />
      </Elements>

      {/* Powered By Section */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Powered by Stripe</p>
        <p className="mt-2">
          <a href="#" className="text-blue-600 hover:underline">
            Terms
          </a>{' '}
          |{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy
          </a>
        </p>
      </div>
    </div>
  );
}