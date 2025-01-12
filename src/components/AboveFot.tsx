import React from 'react'
import Image from 'next/image'

const BeforFoter = () => {
  return (
    <main className="mt-[60px] w-full">
      <div className="flex justify-center w-full h-auto items-center  ">
        <div className="max-w-screen-xl w-full h-auto sm:h-[270px] items-center bg-[#F4F4F4] grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-16 py-8">
          
            {/* High Quality */}
            <div className="flex items-center gap-4  justify-start  lg:justify-center">
              <Image
                className="h-[60px] w-[60px]"
                height={60}
                width={60}
                src="/abf1.png"
                alt="iconImage"
              />
              <div>
                <h2 className="font-bold text-lg">High Quality</h2>
                <p className="text-sm text-gray-600">Crafted from top materials</p>
              </div>
            </div>

            {/* Warranty Protection */}
            <div className="flex items-center gap-4  justify-start  lg:justify-center">
              <Image
                className="h-[60px] w-[60px]"
                height={60}
                width={60}
                src="/abf2.png"
                alt="iconImage"
              />
              <div>
                <h2 className="font-bold text-lg">Warranty Protection</h2>
                <p className="text-sm text-gray-600">Over 2 years</p>
              </div>
            </div>

            {/* 24 / 7 Support */}
            <div className="flex items-center gap-4 justify-start  lg:justify-center">
              <Image
                className="h-[60px] w-[60px]"
                height={60}
                width={60}
                src="/abf3.png"
                alt="iconImage"
              />
              <div>
                <h2 className="font-bold text-lg">24 / 7 Support</h2>
                <p className="text-sm text-gray-600">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      
    </main>
  )
}

export default BeforFoter
