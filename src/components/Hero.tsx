import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

// Define the type for the props
interface HeroProps {
  data: any; // Replace `any` with the actual type of your data
}

const Hero = ({ data }: HeroProps) => {
  // Check if data.image1 exists and is a valid image URL
  const imageUrl = data?.image1 ? urlFor(data.image1).url() : null;

  return (
    <main className='h-auto lg:h-[850px] w-full rounded-bl-[50px] mx-auto max-w-screen-2xl overflow-x-hidden bg-[#f0f2f3] flex flex-col lg:flex-row items-center px-4 sm:px-10 lg:px-0'>
      {/* Left Section */}
      <div className='flex-1 flex flex-col justify-center text-center lg:text-left mt-3 lg:mt-0 lg:pl-7'>
        <h4 className={`${inter.className} text-[14px] leading-[100%] uppercase tracking-wider font-medium lg:pl-1  text-[#272343]`}>
          Welcome to Chairy
        </h4>
        <h2
          className={`${inter.className} text-[32px] sm:text-[45px] lg:text-[60px] leading-[36px] sm:leading-[50px] lg:leading-[66px] text-[#272343] mt-4`}
        >
          Best Furniture Collection for your interior.
        </h2>
        <button
          className='rounded-[8px] h-[52px] w-full sm:w-[171px] text-[#FFFFFF] mt-6 sm:mt-[30px] px-4 sm:px-[24px] py-2 flex justify-center items-center bg-[#029FAE] hover:bg-[#272343] text-[16px] leading-[17px]'
        >
          Shop Now <IoMdArrowForward className='ml-2' />
        </button>
      </div>

      {/* Right Section */}
      <div className='flex-1 h-auto w-auto flex justify-center items-center mt-6 lg:mt-0'>
        {imageUrl ? (
          <Image
            className='h-auto w-full sm:w-[404px] md:w-[554px] lg:h-[584px] lg:w-[434px]'
            height={100}
            width={434}
            src={imageUrl}
            alt='hero'
            priority
          />
        ) : (
          <div className="h-[584px] w-[434px] bg-gray-200 flex justify-center items-center">
            <span>Image not available</span>
          </div>
        )}
      </div>
    </main>
  );
};

export default Hero;
