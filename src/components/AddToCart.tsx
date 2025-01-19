'use client';

import React from 'react';
import { Button } from './ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { FiShoppingCart } from 'react-icons/fi';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  image: any;
  currency: string;
  id: string;
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
  const router = useRouter();

  const product = {
    id,
    name,
    description,
    price,
    image: image ? urlFor(image).url() : '',
    currency,
    price_id,
  };

  const handleAddToCart = () => {
    try {
      const existingItem = cartDetails?.[id];

      if (existingItem) {
        setItemQuantity(id, existingItem.quantity + 1);
        console.log('Item quantity updated:', name); // Debugging
        toast.success(`${name} quantity updated in cart!`);
      } else {
        addItem(product);
        console.log('Item added to cart:', name); // Debugging
        toast.success(`${name} added to cart successfully!`);
      }

      // Delay the redirect to allow the toast to display
      setTimeout(() => {
        router.push('/cart');
      }, 1000); // 1-second delay
    } catch (error) {
      console.error('Error adding to cart:', error); // Debugging
      toast.error('Failed to add item to cart. Please try again.');
    }
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