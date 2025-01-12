'use client';

import React from 'react';
import { Button } from './ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { FiShoppingCart } from 'react-icons/fi';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation'; // Import useRouter

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  image: any; // Sanity image object
  currency: string;
  id: string; // Unique identifier for the product
  price_id?: string;
}

const AddToCart = ({
  currency,
  description,
  name,
  price,
  image,
  id,
  price_id,
}: ProductCart) => {
  const { cartDetails, addItem, setItemQuantity } = useShoppingCart();
  const router = useRouter(); // Initialize useRouter

  // Prepare the product object for the cart
  const product = {
    id, // Unique identifier for the product
    name,
    description,
    price,
    image: image ? urlFor(image).url() : '', // Use urlFor to get the image URL
    currency,
    price_id,
  };

  const handleAddToCart = () => {
    // Check if the item already exists in the cart
    const existingItem = cartDetails?.[id];

    if (existingItem) {
      // Increment the quantity if it exists
      setItemQuantity(id, existingItem.quantity + 1);
    } else {
      // Add a new item if it doesn't exist
      addItem(product);
    }

    // Redirect to the cart page
    router.push('/cart'); // Use router.push to navigate to the cart page
  };

  return (
    <Button
      onClick={handleAddToCart}
      className="h-[63px] hover:bg-[#272343] w-[212px] rounded-[8px] bg-[#029FAE] text-white flex justify-center items-center mt-[40px] gap-3"
    >
      <FiShoppingCart className="h-[29px] w-[29px]" /> Add To Cart
    </Button>
  );
};

export default AddToCart;