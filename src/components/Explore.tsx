// import React from 'react';
// import Image from 'next/image';
// import { client } from "@/sanity/lib/client"; // Assuming you have a client set up to fetch data from Sanity

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   slug: string;
//   imageUrl: string;
// }

// // Fetch data from Sanity
// async function getData() {
//   const query = `*[_type == 'product'][3...8] | order(_createdAt asc) { 
//     _id,
//     name,
//     description,
//     price,
//     "slug":slug.current,
//     "imageUrl":Images[0].asset->url
//   }`;

//   const data = await client.fetch(query);
//   return data;
// }

// const Explore = async () => {
//   // Fetch data from Sanity
//   const products: Product[] = await getData();

//   return (
//     <main className="max-w-screen-2xl mx-auto overflow-x-hidden px-4 lg:px-8 h-auto mt-[140px] mb-[80px] flex flex-col lg:flex-row gap-[15px]">
//       {/* Left Section */}
//       <div className="left w-full lg:w-[50%]">
//         {/* Check if products exist and display the first product */}
//         {products.length > 0 && (
//           <Image
//             className="w-full h-auto lg:h-[648px] object-cover rounded-[10px]"
//             height={100}
//             width={100}
//             src={products[0].imageUrl}
//             alt={products[0].name}
//           />
//         )}
//       </div>

//       {/* Right Section */}
//       <div className="right w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
//         {/* Check if products exist and map through the remaining products */}
//         {products.slice(1).map((product) => (
//           <div key={product._id}>
//             <Image
//               className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
//               height={100}
//               width={100}
//               src={product.imageUrl}
//               alt={product.name}
//             />
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Explore;


import React from 'react';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  imageUrl: string;
}

// Static product data
const products: Product[] = [
  {
    _id: '1',
    name: 'Product 1',
    description: 'This is the description for Product 1.',
    price: 100,
    slug: 'product-1',
    imageUrl: '/product1.png', // Place this image in the public/images folder
  },
  {
    _id: '2',
    name: 'Product 2',
    description: 'This is the description for Product 2.',
    price: 150,
    slug: 'product-2',
    imageUrl: '/product2.png',
  },
  {
    _id: '3',
    name: 'Product 3',
    description: 'This is the description for Product 3.',
    price: 200,
    slug: 'product-3',
    imageUrl: '/product3.png',
  },
  {
    _id: '4',
    name: 'Product 4',
    description: 'This is the description for Product 4.',
    price: 250,
    slug: 'product-4',
    imageUrl: '/product4.png',
  },
  {
    _id: '5',
    name: 'Product 5',
    description: 'This is the description for Product 5.',
    price: 300,
    slug: '/cat.png',
    imageUrl: '/cat3.png',
  },
];

const Explore = () => {
  return (
    <main className="max-w-screen-2xl mx-auto overflow-x-hidden px-4 lg:px-8 h-auto mt-[140px] mb-[80px] flex flex-col lg:flex-row gap-[15px]">
      {/* Left Section */}
      <div className="left w-full lg:w-[50%]">
        {products.length > 0 && (
          <Image
            className="w-full h-auto lg:h-[648px] object-cover rounded-[10px]"
            height={648}
            width={600}
            src={products[0].imageUrl}
            alt={products[0].name}
          />
        )}
      </div>

      {/* Right Section */}
      <div className="right w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
        {products.slice(1).map((product) => (
          <div key={product._id}>
            <Image
              className="w-full h-auto sm:h-[300px] lg:h-[312px] object-cover rounded-[10px]"
              height={312}
              width={300}
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Explore;

