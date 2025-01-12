import { client } from '@/sanity/lib/client';

// Define the type for the product data
interface SimplifiedProduct {
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

// Function to fetch product data
export async function getProductData(): Promise<SimplifiedProduct[]> {
  const query = `*[_type == 'product'][0...4] | order(_createdAt asc) {
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