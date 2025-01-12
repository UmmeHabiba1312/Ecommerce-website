// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { FiShoppingCart } from 'react-icons/fi'
// import { useParams, useSearchParams } from 'next/navigation';
// import { client } from '@/sanity/lib/client';
// import { Slug } from 'sanity';
// import ImageGallery from '@/components/ImageGallery';
// import Link from 'next/link';
// import AddToCart from '@/components/AddToCart';
// import Shop from '@/app/cart/page';

// interface fullProduct {
//   _id: string;
//   Images:any;
//   price: number;
//   name: string;
//   description: string;
//   slug: string;
//   price_id: string;

// }

// async function getData(slug: string | null){
//   const query = `*[_type == "product" && slug.current == "${slug}"][0]{
//   _id,
//   Images,
//   price,
//   name,
//   description,
//   "slug":slug.current,
//   price_id,
// }`;

// const defaultQuery = `*[_type == "product"][0]{
//   _id,
//   Images,
//   price,
//   name,
//   description,
//   "slug":slug.current,
//   price_id,
// }`;

// if (slug) {
//   const data = await client.fetch(query, { slug });
//   if (data) return data;
// }
// // Fallback to the default product
// return client.fetch(defaultQuery);
// }

// const page = async ({ params }: { params: { slug?: string } }) => {
// const data: fullProduct = await getData(params?.slug || null);
//   // const params = useParams();
//   // const searchParams = useSearchParams();
//    // Access parameters from the URL
//   // Default data for when no query parameters are provided
//   // const defaultData = {
//   //   id: '0',
//   //   title: 'Library Stool Chair',
//   //   price: '10$',
//   //   image: '/product4.png', // Add a default image in your `public` folder
//   //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.',
//   // };

//   // Extract parameters or fallback to default values
//   // const title = searchParams.get('title') || defaultData.title;
//   // const price = searchParams.get('price') || defaultData.price;
//   // const image = searchParams.get('image') || defaultData.image;
//   // const description = searchParams.get('description') || defaultData.description;

//    // Ensure `image` is a valid string
//   //  const imageSrc = typeof image === 'string' ? image : '/fallback-image.png'; // Fallback image if undefined



   
//   return (
//     <main className='max-w-screen-2xl mx-auto h-auto w-full mb-[80px] px-8'>
//       {/* pages hero */}
//       <div className='h-auto w-auto mt-[60px] mb-[60px] lg:flex '>
//         <ImageGallery Images={data.Images}/>
//         <div className="two h-auto flex-1 lg:pl-[80px] pl-[6px] pt-[80px] lg:pt-14">
//           <h2 className='text-[#272343] text-[40px] sm:text-[60px] leading-[70px] font-bold'>{data.name}</h2>
//           <button className='h-[44px] w-[144px] bg-[#029FAE] rounded-full text-white mt-[40px]'>{data.price}$</button>
//           <hr className='mt-[30px]'/>
//           <p className='text-[22px] leading-[33px] text-[#272343] mt-[60px]'>{data.description}</p>
//           <Link href='/cart'>
//           <AddToCart
//           id={data._id}
//           name={data.name}
//           price={data.price}
//           key={data._id}
//           description={data.description}
//           currency='USD'
//           price_id={data.price_id}
//           image={data.Images[0]}/>
//           </Link>
         
//         </div>
//       </div>


//       {/* Feature products */}
//       <div className='h-auto w-full'>
//       <div className='flex justify-between '>
//         <h2 className='text-[28px] leading-[34px] text-[#000000]'>Featured Products</h2>
//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="border-b-2 hover:border-[#029FAE] border-[#000000] text-gray-900 focus:border-[#029FAE] focus:outline-none transition-all duration-300 px-4"
//         >
//          <Link href="/product" className='hover:text-[#029FAE]'> View All</Link>
//         </button>
//         </div>

// {/* cards  */}
// <div className='h-auto w-full grid gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-[100px]  '>
//   {/* one */}
//  <div >
//  <Image
//   className='h-[286px] sm:w-auto w-full rounded-[6px]'
//   height={100}
//   width={100}
//   src='/insta1.png'
//   alt='ProductImg'/>
//   <div className='flex justify-between sm:w-auto w-full  h-auto mt-3'>
//     <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
//     <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
//   </div>
//  </div>

//   {/* two */}
//   <div >
//  <Image
//   className='h-[286px] sm:w-auto w-full rounded-[6px]'
//   height={100}
//   width={100}
//   src='/insta2.png'
//   alt='ProductImg'/>
//   <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
//     <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
//     <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
//   </div>
//  </div>


// {/* threee */}
// <div>
//  <Image
//   className='h-[286px] sm:w-auto w-full rounded-[6px]'
//   height={100}
//   width={100}
//   src='/product4.png'
//   alt='ProductImg'/>
//   <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
//     <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
//     <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
//   </div>
//  </div>

// {/* four */}
// <div>
//  <Image
//   className='h-[286px] sm:w-auto w-full rounded-[6px]'
//   height={100}
//   width={100}
//   src='/product1.png'
//   alt='ProductImg'/>
//  <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
//     <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
//     <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
//   </div>
//  </div>


// {/* five */}
// <div>
//  <Image
//   className='h-[286px] sm:w-auto w-full rounded-[6px]'
//   height={100}
//   width={100}
//   src='/cat3.png'
//   alt='ProductImg'/>
//   <div className='flex justify-between sm:w-auto w-full h-auto mt-3'>
//     <span className='text-[16px] leading-[20px]'>Library Stool Chair</span>
//     <span className='text-[#0000000] tet-[14px] leading-[17px]'>{`$99`}</span>
//   </div>
//  </div>


// </div>
//       </div>
//     </main>
//   )
// }

import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import ImageGallery from '@/components/ImageGallery';
import AddToCart from '@/components/AddToCart';

// Define the FullProduct interface
interface FullProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    price_id: string;
    stock: number;
    slug: string;
    image: {
      _key: string;
      asset: {
        _id: string;
        url: string;
      };
    }[];
}

// Fetch product data based on the slug
async function getData(slug: string): Promise<FullProduct | null> {
  const query = `*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  description,
  price,
  price_id,
  stock,
  "slug": slug.current,
  image[] {
    _key,
    asset-> {
      _id,
      url
    }
  }
}`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Fetch product data
  const data: FullProduct | null = await getData(params.slug);

  // If product not found, display a message
  if (!data) {
    return <div>Product not found</div>;
  }

  console.log('Product Data:', data); // Log the fetched data

  return (
    <main className="max-w-screen-2xl mx-auto h-auto w-full mb-[80px] px-8">
      {/* Product Details */}
      <div className="h-auto w-auto mt-[60px] mb-[60px] lg:flex">
        {/* Image Gallery */}
        <ImageGallery Images={data.image || []} />

        {/* Product Information */}
        <div className="two h-auto flex-1 lg:pl-[80px] pl-[6px] pt-[80px] lg:pt-14">
          <h2 className="text-[#272343] text-[40px] sm:text-[60px] leading-[70px] font-bold">
            {data.name}
          </h2>
          <button className="h-[44px] w-[144px] bg-[#029FAE] rounded-full text-white mt-[40px]">
            {data.price}$
          </button>
          <hr className="mt-[30px]" />
          <p className="text-[22px] leading-[33px] text-[#272343] mt-[60px]">
            {data.description}
          </p>

          {/* Add to Cart Button */}
          <AddToCart
            id={data._id}
            name={data.name}
            price={data.price}
            key={data._id}
            description={data.description}
            currency="USD"
            price_id={data.price_id}
            image={data.image && data.image.length > 0 ? data.image[0] : null}
          />
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="h-auto w-full">
        <div className="flex justify-between">
          <h2 className="text-[28px] leading-[34px] text-[#000000]">
            Featured Products
          </h2>
          <button
            type="submit"
            className="border-b-2 hover:border-[#029FAE] border-[#000000] text-gray-900 focus:border-[#029FAE] focus:outline-none transition-all duration-300 px-4"
          >
            <Link href="/product" className="hover:text-[#029FAE]">
              View All
            </Link>
          </button>
        </div>

        {/* Featured Product Cards */}
        <div className="h-auto w-full grid gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[100px]">
          {/* Product Card 1 */}
          <div>
            <Image
              className="h-[286px] sm:w-auto w-full rounded-[6px]"
              height={100}
              width={100}
              src="/insta1.png"
              alt="ProductImg"
            />
            <div className="flex justify-between sm:w-auto w-full h-auto mt-3">
              <span className="text-[16px] leading-[20px]">
                Library Stool Chair
              </span>
              <span className="text-[#0000000] text-[14px] leading-[17px]">
                $99
              </span>
            </div>
          </div>

          {/* Product Card 2 */}
          <div>
            <Image
              className="h-[286px] sm:w-auto w-full rounded-[6px]"
              height={100}
              width={100}
              src="/insta2.png"
              alt="ProductImg"
            />
            <div className="flex justify-between sm:w-auto w-full h-auto mt-3">
              <span className="text-[16px] leading-[20px]">
                Library Stool Chair
              </span>
              <span className="text-[#0000000] text-[14px] leading-[17px]">
                $99
              </span>
            </div>
          </div>

          {/* Product Card 3 */}
          <div>
            <Image
              className="h-[286px] sm:w-auto w-full rounded-[6px]"
              height={100}
              width={100}
              src="/product4.png"
              alt="ProductImg"
            />
            <div className="flex justify-between sm:w-auto w-full h-auto mt-3">
              <span className="text-[16px] leading-[20px]">
                Library Stool Chair
              </span>
              <span className="text-[#0000000] text-[14px] leading-[17px]">
                $99
              </span>
            </div>
          </div>

          {/* Product Card 4 */}
          <div>
            <Image
              className="h-[286px] sm:w-auto w-full rounded-[6px]"
              height={100}
              width={100}
              src="/product1.png"
              alt="ProductImg"
            />
            <div className="flex justify-between sm:w-auto w-full h-auto mt-3">
              <span className="text-[16px] leading-[20px]">
                Library Stool Chair
              </span>
              <span className="text-[#0000000] text-[14px] leading-[17px]">
                $99
              </span>
            </div>
          </div>

          {/* Product Card 5 */}
          <div>
            <Image
              className="h-[286px] sm:w-auto w-full rounded-[6px]"
              height={100}
              width={100}
              src="/cat3.png"
              alt="ProductImg"
            />
            <div className="flex justify-between sm:w-auto w-full h-auto mt-3">
              <span className="text-[16px] leading-[20px]">
                Library Stool Chair
              </span>
              <span className="text-[#0000000] text-[14px] leading-[17px]">
                $99
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}