import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import Image from 'next/image'
import { AiOutlineYoutube } from 'react-icons/ai'
import { RiLinkedinBoxLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <main className="max-w-screen-2xl mx-auto h-auto">
      <hr className='border-[#e3e2e2]'/>
    <div className="mt-[30px] ">
     
      {/* <hr className="mt-8 border-gray-700" /> */}
  
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row justify-between px-4 md:px-6 lg:px-8 py-8">
        {/* Company Info */}
        <div className="grid  mt-10 md:mt-20 lg:mt-0 grid-cols-3 gap-8 w-full lg:w-[70%]">
          <div>
          <Link href="/" className="font-bold text-black tracking-wide text-xl uppercase flex justify-start items-center gap-1">
        <Image
          src="/mainLogo.png"
          alt="mainLogo"
          height={35}
          width={35}
        />
        Conforty
      </Link>
            <p className='mt-7 text-[#272343] leading-[30px]'>
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus             </p>
            <div className="flex gap-2 mg:gap-4 mt-8 text-3xl">
              <div className='hover:border-[1px] p-2 flex justify-center items-center hover:border-cyan-600 h-[38px] w-[38px] rounded-full'>
              <FaInstagram className='hover:text-cyan-600 h-[18px] w-[18px]   hover:border-cyan-600 text-gray-600'/>
              </div>
              <div className='hover:border-[1px] p-2 flex justify-center items-center hover:border-cyan-600 h-[38px] w-[38px] rounded-full'>
            <TiSocialFacebookCircular className='hover:text-cyan-600 h-[18px] w-[18px]  text-gray-600'/>
            </div>
            <div className='hover:border-[1px] p-2 flex justify-center items-center hover:border-cyan-600 h-[38px] w-[38px] rounded-full'>
            <FaTwitter className='hover:text-cyan-600 h-[18px] w-[18px]  text-gray-600'/>
            </div>
            <div className='hover:border-[1px] p-2 flex justify-center items-center hover:border-cyan-600 h-[38px] w-[38px] rounded-full'>
            <AiOutlineYoutube className='hover:text-cyan-600 h-[18px] w-[18px]  text-gray-600'/>
            </div>
            <div className='hover:border-[1px] p-2 flex justify-center items-center hover:border-cyan-600 h-[38px] w-[38px] rounded-full'>
            <RiLinkedinBoxLine className='hover:text-cyan-600 h-[18px] w-[18px]  text-gray-600'/>
            </div>
            
             
          </div>
          </div>
          <div className='mt-14 sm:mt-2'>
            <p className="text-[#babbbd] "> Category</p>
            <p className="mt-2 hover:underline border-cyan-500 hover:text-cyan-500"><Link href='/'>Sofa</Link></p>
            <p className="mt-2 hover:underline border-cyan-500 hover:text-cyan-500"><Link href='/'>Arm Chair</Link></p>
            <p className="mt-2 hover:underline border-cyan-500 hover:text-cyan-500"><Link href='/'>Wing Chair</Link></p>
            <p className="mt-2 hover:underline border-cyan-500 hover:text-cyan-500"><Link href='/'>Desk Chair</Link></p>
            <p className="mt-2 hover:underline border-cyan-500 hover:text-cyan-500"><Link href='/'>Wooden Chair</Link></p>
            <p className="mt-2 hover:underline border-cyan-500 hover:text-cyan-500"><Link href='/'>Park Bench</Link></p>
          </div>
          <div className='mt-14 sm:mt-2'>
            <p className="text-[#babbbd] ">Suuport</p>
            <p className="mt-2   hover:text-cyan-500"><Link href='/'>Help & Support</Link></p>
            <p className="mt-2   hover:text-cyan-500"><Link href='/'>Tearms & Conditions</Link></p>
            <p className="mt-2   hover:text-cyan-500"><Link href='/'>Privacy Policy</Link></p>
            <p className="mt-2   hover:text-cyan-500"><Link href='/'>Help</Link></p>
          </div>
        </div>
  
        {/* Follow Us & Subscription */}
        <div className="mt-8 lg:mt-2 lg:w-[30%]">
          <h2 className=" dark:text-cyan-500 text-[#babbbd]  uppercase">NewsLetter</h2>
          <div className="flex mt-4 gap-4">
          <div className="relative w-full max-w-sm">
  <IoMailSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 z-10" />
  <input
    type="email"  // Use type="email" for better email handling
    placeholder="Enter your Email"
    className="w-full pl-12 p-3 bg-[#f4f5f5] text-[#333] focus:outline-none focus:border-[#029FAE] rounded-[8px-]"
  />
</div>

            <button className="p-3 bg-cyan-600 text-white font-bold rounded-[8px]">Subscribe</button>
          </div>
          <p className='text-gray-500 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>
  
      <hr className="border-[#e3e2e2]" />
  
      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm px-4 py-4">
        <p>
        @ 2021 - Blogy - Designed & Develop by <span className="font-bold">Umm e Habiba</span>
        </p>
        <Image
        className='h-[27px] w-[227px] object-cover'
        height={100}
        width={100}
        src='/footers.png'
        alt='footerImg'/>
      </div>
    </div>
  </main>
  
  )
}

export default Footer