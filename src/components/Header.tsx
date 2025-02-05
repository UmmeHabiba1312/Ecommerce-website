'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsExclamationCircle } from 'react-icons/bs';
import { FaCheck, FaRegUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Inter } from 'next/font/google';
import { useShoppingCart } from 'use-shopping-cart';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'; // Import Clerk components

const inter = Inter({ subsets: ['latin'] });

const Header = (props: any) => {
  const { cartCount } = useShoppingCart();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Product', path: '/product' },
    { label: 'Pages', path: '/extrapages/slug' },
    { label: 'About', path: '/about' },
  ];

  return (
    <main className="w-full max-w-screen-2xl mx-auto overflow-x-hidden">
      {/* First Header Part */}
      <div className="bg-[#272343] h-[45px] flex items-center justify-between px-4 lg:px-8 text-white text-sm">
        {/* Orders */}
        <div className="text-[#FFFFFF] flex items-center gap-[8px] opacity-[70%]">
          <FaCheck />
          Free shipping on all orders over $50
        </div>

        {/* Select */}
        <div className="flex items-center gap-[16px] lg:gap-[24px] text-[#FFFFFF] opacity-[70%]">
          <Select>
            <SelectTrigger className="w-[67px] border-none">
              <SelectValue placeholder="Eng" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                <SelectItem value="urdu">Urdu</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="french">French</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Additional Links */}
          <div><Link href='/faqs'>Faqs</Link></div>
          <div className="flex items-center gap-[6px]">
           <Link href="/help" className='flex items-center gap-1'> <BsExclamationCircle /> Need Help</Link>
          </div>
        </div>
      </div>

      {/* Second Header Part */}
      <div className="h-[84px] bg-[#f0f2f3] w-full flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <div className="flex gap-[8px] items-center">
            <Image
              className="h-[40px] w-[40px]"
              height={100}
              width={100}
              src='/mainLogo.png'
              alt="logo"
            />
            <h1 className={`text-[26px] leading-[31px] text-[#272343] ${inter.className} font-medium`}>
              Comforty
            </h1>
          </div>
        </Link>

        {/* Cart and Sign In Buttons */}
        <div className="flex gap-[12px] items-center">
          {/* Cart */}
          <Link href='/cart'>
            <button className="flex gap-[12px] w-[120px] h-[44px] bg-white rounded-[4px] items-center justify-center border-[1px]">
              <FiShoppingCart className="h-[22px] w-[22px] text-[#272343]" />
              <span className="text-[#272343]">Cart</span>
              <span className="h-[20px] w-[20px] bg-[#007580] text-[10px] leading-[10px] flex justify-center items-center p-2 rounded-full text-[#FFFFFF]">
                {isClient ? cartCount || 0 : 0} {/* Display dynamic cart count */}
              </span>
            </button>
          </Link>

          {/* Sign In Button */}
          <SignedOut>
  <div className="bg-white p-2 text-[#272343] border-[1px] hover:text-white rounded-full hover:bg-[#007580]">
    <SignInButton>
      <FaRegUser className='text-xl'/>
    </SignInButton>
  </div>
</SignedOut>



          {/* User Button when Signed In */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Third Header Part */}
      <div className="h-[74px] w-full bg-[#FFFFFF] text-[#636270] flex justify-between items-center px-4 lg:px-8">
        {/* Menu */}
        <div className="hidden lg:flex gap-[16px] lg:gap-[32px]">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-[14px] leading-[15px] font-medium cursor-pointer hover:text-[#007580] ${
                isClient && window.location.pathname === item.path
                  ? 'text-[#007580]'
                  : 'text-[#636270]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <GiHamburgerMenu
            className="text-[#272343] text-[24px] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div className="absolute top-[74px] right-4 bg-white shadow-md rounded-lg p-4 w-[200px] flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-[#636270] hover:text-[#007580] text-[14px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex h-[15px] w-auto gap-[8px] leading-[15px] text-[14px]">
          <span className="text-[#636270]"><Link href='/contact'>Contact:</Link></span>
          <span className="text-[#272343]">{`0307-2502073`}</span>
        </div>
      </div>
    </main>
  );
};

export default Header;
