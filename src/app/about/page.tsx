import React from 'react'
import Image from 'next/image'
import {  PiPlant } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaRegCheckCircle } from 'react-icons/fa'
import { VscFolder } from 'react-icons/vsc'
import Link from 'next/link'
const page = () => {
  return (
    <main className='mx-auto max-w-screen-2xl h-auto mb-[40px] px-7'>

 {/* about hero */}
 <div className='h-auto w-full flex flex-col lg:flex-row mt-[60px] gap-[20px]'>
  {/* About Us Section */}
  <div className="one flex-1 h-[500px] lg:h-[478px] bg-[#007580] text-white px-[20px] py-[20px]">
    <h2 className='text-[24px] lg:text-[32px] leading-[30px] lg:leading-[38px] font-bold mt-[20px] lg:mt-[40px]'>
      About Us - Comforty
    </h2>
    <p className='mt-[10px] lg:mt-[20px] text-[16px] lg:text-[18px] leading-[20px] lg:leading-[21px]'>
      At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
    </p>
    <button className='text-[#FFFFFF] h-[48px] lg:h-[56px] rounded-[4px] bg-[#438186] hover:bg-black w-[160px] lg:w-[179px] px-[20px] lg:px-[32px] py-[10px] lg:py-[16px] flex justify-center items-center leading-[22px] lg:leading-[24px] text-[14px] lg:text-[16px] mt-[20px] lg:mt-[130px]'>
      <Link href="/product"><span  className='text-white opacity-100'>View collection</span></Link>
    </button>
  </div>

  {/* Image Section */}
  <div className="two flex-1 h-[500px] lg:h-[478px]">
    <Image
      className='h-[500px] lg:h-[478px] w-full object-cover'
      height={500}
      width={500}
      src='/product1.png'
      alt='Img'
    />
  </div>
</div>



            
           {/* Above Card Section */}
<div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
  <h2 className='text-[24px] sm:text-[28px] lg:text-[32px] leading-[30px] sm:leading-[35px] text-[#272343] text-center'>
    What makes our Brand Different
  </h2>
  
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 h-auto w-full mt-[40px] lg:mt-[60px] px-[20px] lg:px-0">
    {/* Card 1 */}
    <div className="h-auto lg:h-[244px] w-full lg:w-[290px] border-[1px] text-[#007580] rounded-[4px] bg-[#F9F9F9] hover:bg-[#007580] p-[20px] lg:p-[30px] hover:text-white transition-all duration-300">
      <TbTruckDelivery className="h-[24px] w-[24px] mt-3" />
      <p className="text-[18px] lg:text-[20px] leading-[24px] lg:leading-[28px] mt-4">
        Next day as standard
      </p>
      <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] mt-4">
        Order before 3pm and get your order the next day as standard
      </p>
    </div>

    {/* Card 2 */}
    <div className="h-auto lg:h-[244px] w-full lg:w-[290px] border-[1px] text-[#007580] rounded-[4px] bg-[#F9F9F9] hover:bg-[#007580] p-[20px] lg:p-[30px] hover:text-white transition-all duration-300">
      <FaRegCheckCircle className="h-[24px] w-[24px] mt-3" />
      <p className="text-[18px] lg:text-[20px] leading-[24px] lg:leading-[28px] mt-4">
        Next day as standard
      </p>
      <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] mt-4">
        Order before 3pm and get your order the next day as standard
      </p>
    </div>

    {/* Card 3 */}
    <div className="h-auto lg:h-[244px] w-full lg:w-[290px] border-[1px] text-[#007580] rounded-[4px] bg-[#F9F9F9] hover:bg-[#007580] p-[20px] lg:p-[30px] hover:text-white transition-all duration-300">
      <VscFolder className="h-[24px] w-[24px] mt-3" />
      <p className="text-[18px] lg:text-[20px] leading-[24px] lg:leading-[28px] mt-4">
        Next day as standard
      </p>
      <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] mt-4">
        Order before 3pm and get your order the next day as standard
      </p>
    </div>

    {/* Card 4 */}
    <div className="h-auto lg:h-[244px] w-full lg:w-[290px] border-[1px] text-[#007580] rounded-[4px] bg-[#F9F9F9] hover:bg-[#007580] p-[20px] lg:p-[30px] hover:text-white transition-all duration-300">
      <PiPlant className="h-[24px] w-[24px] mt-3" />
      <p className="text-[18px] lg:text-[20px] leading-[24px] lg:leading-[28px] mt-4">
        Next day as standard
      </p>
      <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] mt-4">
        Order before 3pm and get your order the next day as standard
      </p>
    </div>
  </div>
</div>



{/* above popular products */}
<div className="px-[20px]  mt-[20px] h-auto">
  <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[30px] sm:leading-[35px] text-[#272343] ">
    Our Popular Products
  </h2>
  <div className="w-full h-auto flex flex-col lg:flex-row lg:gap-[15px] mt-[40px] lg:mt-[60px]">
    
    {/* Left Div */}
    <div className="h-auto lg:h-[462px] lg:w-[630px] flex-shrink-0 flex-grow md:w-full lg:max-w-[60%] mb-[20px] lg:mb-0">
      <Image
        className="h-[375px] w-full object-cover rounded-lg"
        height={500}
        width={500}
        src="/product2.png"
        alt="Img"
      />
      <p className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#2A254B] font-semibold mt-[10px]">
        The Poplar Suede Sofa
      </p>
      <p className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-[#2A254B]">
        $99.00
      </p>
    </div>

    {/* Right Div */}
    <div className="flex flex-col h-auto lg:h-[462px]  lg:flex-row lg:gap-[15px] w-full lg:max-w-[40%]">
      
      {/* Product 1 */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:w-[305px] lg:h-[375px] mb-[15px] lg:mb-0">
        <Image
          className="h-full w-full object-cover rounded-lg"
          height={500}
          width={500}
          src="/product3.png"
          alt="Img"
        />
        <p className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#2A254B] font-semibold mt-[10px]">
          The Poplar Suede Sofa
        </p>
        <p className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-[#2A254B]">
          $99.00
        </p>
      </div>

      {/* Product 2 */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:w-[305px] lg:h-[375px]">
        <Image
          className="h-full w-full object-cover rounded-lg"
          height={500}
          width={500}
          src="/product1.png"
          alt="Img"
        />
        <p className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[28px] text-[#2A254B] font-semibold mt-[10px]">
          The Poplar Suede Sofa
        </p>
        <p className="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-[#2A254B]">
          $99.00
        </p>
      </div>
    </div>
  </div>
</div>

    </main>
  )
}

export default page