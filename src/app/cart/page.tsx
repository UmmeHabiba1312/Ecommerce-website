"use client"; // Mark this as a Client Component

import React from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter } from 'next/navigation';

const Shop = () => {
  const { cartCount, cartDetails, removeItem, totalPrice, setItemQuantity } = useShoppingCart();
  const router = useRouter();

  const handleQuantityChange = (id: string, currentQuantity: number, isIncrement: boolean) => {
    const newQuantity = isIncrement ? currentQuantity + 1 : currentQuantity - 1;
    // Ensure quantity doesn't go below 1
    if (newQuantity >= 1) {
      setItemQuantity(id, newQuantity);
    }
  };

  const handleCheckout = async () => {
    // Step 1: Check if cartDetails is defined
    if (!cartDetails) {
      alert('Your cart is empty.');
      return;
    }

    // Step 2: Get cart details
    const cartItems = Object.values(cartDetails);

    // Step 3: Redirect to checkout page with cart data
    router.push(`/checkout?cart=${encodeURIComponent(JSON.stringify(cartItems))}`);
  };

  return (
    <main className="mt-[40px] mb-[60px] px-4 lg:px-8">
      {cartCount && cartCount > 0 ? (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Render cart items */}
          <div className="flex-1">
            {Object.values(cartDetails ?? {}).map((entry: any) => (
              <div
                key={entry.id}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-28 border-b pb-6 mb-6"
              >
                <div className="w-full md:w-[70%] flex gap-4 md:gap-6">
                  <div className="w-full md:w-1/4">
                    <Image
                      className="w-full sm:w-[135%] md:w-full max-w-full rounded-lg h-[140px] object-cover"
                      height={100}
                      width={100}
                      src={entry.image as string}
                      alt="photo"
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-[16px] font-medium tracking-wider text-[#272343]">
                      {entry.name}
                    </h3>
                    <p className="text-sm text-[#757575] line-clamp-1 mt-1 md:mt-7">
                      {entry.description}
                    </p>
                    <div className="flex gap-4 text-sm mt-1 md:mt-3 items-center">
                      <p>Size: {entry.size}L</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(entry.id, entry.quantity, false)
                          } // For decrement
                          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <p>Quantity: {entry.quantity}</p>
                        <button
                          onClick={() =>
                            handleQuantityChange(entry.id, entry.quantity, true)
                          } // For increment
                          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-5">
                      <button className="text-gray-500 hover:text-red-700">
                        <FaHeart />
                      </button>
                      <button
                        onClick={() => removeItem(entry.id)}
                        type="button"
                        className="text-gray-500 hover:text-red-500"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/4 text-right">
                    <p className="text-sm font-medium text-gray-700">
                      MRP: ${entry.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-[30%] hover:bg-gray-100 rounded-lg p-6 h-fit mb-10 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">
                Estimated Delivery & Handling
              </p>
              <p className="text-sm font-medium">Free</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <p className="text-base font-semibold">Total</p>
              <p>${totalPrice}</p>
            </div>
            <button
              className="w-full mt-6 py-2 px-4 bg-[#029FAE] text-white font-semibold rounded-[30px] hover:bg-[#272343]"
              onClick={handleCheckout} // Add this onClick handler
            >
              Member Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-lg">No items in your cart</p>
      )}
    </main>
  );
};

export default Shop;