// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { FiShoppingCart } from 'react-icons/fi'
// import ProFooter from '@/components/ProFooter'

// const Product = () => {
//   return (
//     <>
//       <main className="max-w-screen-2xl mx-auto mt-[80px] lg:px-8 px-4">
//         <h2 className="text-[32px] font-semibold leading-[35px] text-[#272343]">
//           All Products
//         </h2>
//           {/* line 1 */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] mt-[80px]">
//           {/* Product 1 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <button className="absolute left-2 top-2 bg-[#01AD5A] text-white px-4 py-2 rounded-[4px] text-sm">
//                 New
//               </button>
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product1.png"
//                 alt="product1"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <button className="absolute left-4 top-4 bg-[#F5813F] text-white px-4 py-2 rounded-[4px] text-sm">
//                 Sales
//               </button>
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product2.png"
//                 alt="product2"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580] flex gap-2 items-center">
//                   {'20$'}
//                   <span className="text-[#9A9CAA] text-[14px] leading-[15px] line-through">{`20$`}</span>
//                 </div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 3 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product3.png"
//                 alt="product3"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 4 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product4.png"
//                 alt="product4"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="group-hover:bg-[#029FAE] bg-gray-200 rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* line 2 */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] mt-[80px]">
//           {/* Product 1 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <button className="absolute left-2 top-2 bg-[#01AD5A] text-white px-4 py-2 rounded-[4px] text-sm">
//                 New
//               </button>
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product4.png"
//                 alt="product1"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <button className="absolute left-4 top-4 bg-[#F5813F] text-white px-4 py-2 rounded-[4px] text-sm">
//                 Sales
//               </button>
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product3.png"
//                 alt="product2"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580] flex gap-2 items-center">
//                   {'20$'}
//                   <span className="text-[#9A9CAA] text-[14px] leading-[15px] line-through">{`20$`}</span>
//                 </div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 3 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product2.png"
//                 alt="product3"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 4 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product1.png"
//                 alt="product4"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="group-hover:bg-[#029FAE] bg-gray-200 rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* line3 */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] mt-[80px]">
//           {/* Product 1 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <button className="absolute left-2 top-2 bg-[#01AD5A] text-white px-4 py-2 rounded-[4px] text-sm">
//                 New
//               </button>
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product1.png"
//                 alt="product1"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <button className="absolute left-4 top-4 bg-[#F5813F] text-white px-4 py-2 rounded-[4px] text-sm">
//                 Sales
//               </button>
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product2.png"
//                 alt="product2"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580] flex gap-2 items-center">
//                   {'20$'}
//                   <span className="text-[#9A9CAA] text-[14px] leading-[15px] line-through">{`20$`}</span>
//                 </div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 3 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product3.png"
//                 alt="product3"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product 4 */}
//           <div className="group overflow-hidden rounded-[6px] bg-white hover:shadow-xl transition-all duration-300">
//             <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
//               <Image
//                 className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
//                 height={250}
//                 width={250}
//                 src="/product4.png"
//                 alt="product4"
//               />
//             </div>
//             <div className="flex items-center justify-between pt-3 px-1">
//               <div>
//                 <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">{'Library Stool Chair'}</div>
//                 <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">{'20$'}</div>
//               </div>

//               <div className="flex justify-center pb-4">
//                 <div className="group-hover:bg-[#029FAE] bg-gray-200 rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
//                   <FiShoppingCart className="h-[24px] w-[24px]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </main>

//       <ProFooter />
//     </>
//   )
// }

// export default Product
import React from 'react';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

type simplifiedProduct = {
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
};

async function getData() {
  const query = `*[_type == "product"] {
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

  const data = await client.fetch(query);
  return data;
}

const Product = async () => {
  const data: simplifiedProduct[] = await getData();

  // Debugging: Log the data to inspect its structure
  console.log(JSON.stringify(data, null, 2));

  return (
    <>
      <main className="max-w-screen-2xl mx-auto mt-[80px] lg:px-8 px-4 mb-10">
        <h2 className="text-[32px] font-semibold leading-[35px] text-[#272343]">
          All Products
        </h2>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[35px] mt-[30px]">
        {data.map((product, index) => {
  // Filter out images with null assets
  const validImages = product.image.filter(img => img.asset !== null);

  return (
    <div
      key={product._id}
      className="group overflow-hidden rounded-[6px] bg-white sm:mt-8 md:mt-12 transition-all duration-300"
    >
      <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
        {/* Conditional Rendering for Buttons */}
        {[0, 4, 8].includes(index) && ( // Green button for indexes 1, 5, and 9
          <button
            className="absolute left-2 top-2 text-white px-4 py-2 rounded-[4px] text-sm bg-[#01AD5A]"
          >
            New
          </button>
        )}

        {[1, 5, 9].includes(index) && ( // Orange button for indexes 2, 6, and 10
          <button
            className="absolute left-2 top-2 text-white px-4 py-2 rounded-[4px] text-sm bg-[#F5813F]"
          >
            Sales
          </button>
        )}

        {/* Image */}
        {validImages.length > 0 ? (
          <Image
            className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
            height={250}
            width={250}
            src={validImages[0].asset.url} // Use the first valid image
            alt={product.name}
          />
        ) : (
          <div className="w-full sm:h-[250px] h-[300px] bg-gray-200 rounded-[6px] flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 px-1">
        <div>
          {/* Product Name */}
          <div className="text-black text-[16px] font-medium group-hover:text-[#007580]">
            <Link href={`/extrapages/${product.slug}`}>{product.name}</Link>
          </div>

          {/* Price Section */}
          {index === 1 ? (
            <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580] flex gap-2 items-center">
              ${product.price}
              <span className="text-[#9A9CAA] text-[14px] leading-[15px] line-through">
                $30
              </span>
            </div>
          ) : (
            <div className="text-[#272343] text-[18px] font-semibold group-hover:text-[#007580]">
              ${product.price}
            </div>
          )}
        </div>

        <div className="flex justify-center pb-4">
          {/* Cart Icon */}
          <div className="bg-gray-200 group-hover:bg-[#007580] rounded-[8px] h-[44px] w-[44px] text-black group-hover:text-white flex items-center justify-center">
            <FiShoppingCart className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
})}
        </div>
      </main>
    </>
  );
};

export default Product;