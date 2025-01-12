import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className=''>
        <h2 className='text-gray-300 mt-[60px]'>home / <span className='text-black'>404 Error</span></h2>
        <h3 className='text-7xl font-bold flex justify-center mt-[80px]'>404 Not Found</h3>
        <p className='flex justify-center mt-[20px]'>Your visited page not found. You may go home page.</p>
<Link href='/' className='flex justify-center'>        
<Button variant="outline" className='bg-[#029FAE] h-[60px]   w-[188px] mt-10 flex justify-center items-center text-white font-bold hover:text-white hover:bg-black rounded-[6px] mb-[40px]'>Back to home page</Button>   
</Link>
    </main>
  )
}

export default NotFound