import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia', // Update to the latest version if needed
});

// Define the CartItem type
interface CartItem {
  id: string;
  name: string;
  price: number; // Price in dollars (e.g., 10.00 for $10.00)
  quantity: number;
}

// Handle POST requests
export async function POST(request: Request) {
  try {
    // Parse the request body
    const { cartItems } = await request.json() as { cartItems: CartItem[] };

    // Calculate the total price of the cart
    const totalAmount = cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100, // Stripe accepts the amount in the smallest currency unit (cents)
      currency: 'usd',
      metadata: { integration_check: 'accept_a_payment' },
    });

    // Return the client secret
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    }, { status: 200 });
  } catch (err) {
    console.error('Error creating PaymentIntent:', err);
    return NextResponse.json({ error: 'Payment failed' }, { status: 500 });
  }
}

// Handle other HTTP methods (optional)
export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}