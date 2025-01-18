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
  const query = `*[_type == 'product'][0...8] | order(_createdAt asc) {
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

const OurProduct = async () => {
  const data: simplifiedProduct[] = await getData();

  // Debugging: Log the data to inspect its structure
  console.log(JSON.stringify(data, null, 2));

  return (
    <main className="max-w-screen-2xl overflow-x-hidden mx-auto mt-[60px] mb-[80px] px-4 sm:px-6 lg:px-8">
      <h2 className="text-[32px] leading-[35px] text-[#272343] font-medium flex justify-center">
        Our Products
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[35px] mt-[80px]">
        {data.map((product, index) => {
          // Debugging: Log the image for each product
          console.log(product.image);

          return (
            <div
              key={product._id}
              className="group overflow-hidden rounded-[6px] bg-white transition-all duration-300"
            >
              <div className="relative w-full h-[auto] sm:h-[250px] flex justify-center items-center">
                {/* Conditional Rendering for Buttons */}
                {index < 2 && (
                  <button
                    className={`absolute left-2 top-2 text-white px-4 py-2 rounded-[4px] text-sm ${
                      index === 0 ? 'bg-[#01AD5A]' : 'bg-[#F5813F]'
                    }`}
                  >
                    {index === 0 ? 'New' : 'Sales'}
                  </button>
                )}

                {/* Image */}
                {product.image?.[0]?.asset?.url ? (
                  <Image
                    className="w-full sm:h-[250px] h-[300px] object-cover rounded-[6px]"
                    height={250}
                    width={250}
                    src={product.image[0].asset.url}
                    alt={product.name}
                  />
                ) : (
                  <div className="w-full sm:h-[250px] h-[300px] bg-gray-200 rounded-[6px] flex items-center justify-center">
                    <p>No image available</p>
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
  );
};

export default OurProduct;