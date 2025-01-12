import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const inter = Inter({ subsets: ["latin"] });


interface simplifiedProduct {
  _id: string;
  title: string;
  productCount: number;
  slug: string;
  imageUrl: string;
}
async function getData() {
const query = `*[_type == "category"][0...3] | order(_createdAt asc) {
  _id,
  title,
  productCount,
  "slug": slug.current,
  "imageUrl":image[0].asset->url
}`;

const data = await client.fetch(query);
return data;
}


const Categories = async() => {
  const data:simplifiedProduct[] = await getData();
  return (
    <main className="max-w-screen-2xl overflow-x-hidden mx-auto w-full mt-[60px] px-4 sm:px-6 lg:px-8 mb-[60px]">
      <h2
        className={`${inter.className} text-[32px] font-medium leading-[35px] text-[#272343] mt-[50px]`}
      >
        Top Categories
      </h2>

      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {
          data.map((category, index)=>{
            return(
            <div key={category._id} className="group w-full h-[424px] rounded-[10px] overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
               <Image
            className="h-full w-full object-cover rounded-[10px]"  
            height={100}
            width={100}
            src={category.imageUrl}
            alt={category.title}
          />
           {/* Hover Info */}
           <div className="absolute bottom-0 left-0 w-full bg-black text-white pl-10 py-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="font-bold">{category.title}</span> <br />
            <span>{category.productCount} Products</span>
          </div>

            </div>
            )
          })
          
        }
        {/* <div className="group w-full h-[424px] rounded-[10px] overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            className="h-full w-full object-cover rounded-[10px]"  
            height={100}
            width={100}
            src="/cat.png"
            alt="category1"
          /> */}
          {/* Hover Info */}
          {/* <div className="absolute bottom-0 left-0 w-full bg-black text-white pl-10 py-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="font-bold">Wing Chair</span> <br />
            <span>3,584 Products</span>
          </div>
        </div> */}

        {/* Category 2 */}
        {/* <div className="group w-full h-[424px] rounded-[10px] overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            className="h-full w-full object-cover rounded-[10px]" 
            height={100}
            width={100}
            src="/cat2.png"
            alt="category2"
          /> */}
          {/* Hover Info */}
          {/* <div className="absolute bottom-0 left-0 w-full bg-black text-white pl-10 py-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="font-bold">Wing Chair</span> <br />
            <span>3,584 Products</span>
          </div>
        </div> */}

        {/* Category 3 */}
        {/* <div className="group w-full h-[424px] rounded-[10px] overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-300">
          <Image
            className="h-full w-full object-cover rounded-[10px]"  
            height={100}
            width={100}
            src="/cat3.png"
            alt="category3"
          /> */}
          {/* Hover Info */}
          {/* <div className="absolute bottom-0 left-0 w-full bg-black text-white pl-10 py-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="font-bold">Wing Chair</span> <br />
            <span>3,584 Products</span>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Categories;
