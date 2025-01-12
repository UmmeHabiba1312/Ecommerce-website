"use client"
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

// Define the type for the props
interface LogosProps {
  data: {
    image1: {
      asset: {
        _ref: string;
      };
    };
  }[];
}

const Logos = ({ data }: LogosProps) => {
  // Debug: Log the data received

  return (
    <main className='max-w-screen-2xl overflow-x-hidden mx-auto mt-[60px] mb-[60px] px-4 sm:px-8 lg:px-16'>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 items-center">
        {data.map((logo, index) => {
          // Generate the image URL and log it
          const imageUrl = urlFor(logo.image1).url();
          console.log("Image URL: ", imageUrl); // Debug log

          return (
            <div key={index}>
              {imageUrl ? (
                <Image
                  className='w-[85px] h-[87px] object-cover'
                  height={100}
                  width={100}
                  src={imageUrl}
                  alt='logo'
                  onError={() => console.log("Error loading image")} // Error fallback
                />
              ) : (
                <p>No image available</p> // Fallback when image is missing
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Logos;
