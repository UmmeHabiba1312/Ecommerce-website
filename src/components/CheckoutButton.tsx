// components/CheckoutButton.tsx
import { useShoppingCart } from 'use-shopping-cart'; // Replace with your cart logic
import { CartItem } from '../utils/types';

const CheckoutButton = () => {
  const { cartDetails } = useShoppingCart();

  const handleCheckout = async () => {
    // Step 1: Check if cartDetails is defined
    if (!cartDetails) {
      alert('Your cart is empty.');
      return;
    }

    // Step 2: Get cart details
    const cartItems: CartItem[] = Object.values(cartDetails);

    // Step 3: Redirect to checkout page with cart data
    window.location.href = `/checkout?cart=${encodeURIComponent(JSON.stringify(cartItems))}`;
  };

  return (
    <button
      className="w-full mt-6 py-2 px-4 bg-[#029FAE] text-white font-semibold rounded-[30px] hover:bg-[#272343]"
      onClick={handleCheckout}
    >
      Member Checkout
    </button>
  );
};

export default CheckoutButton;