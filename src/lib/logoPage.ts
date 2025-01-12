import { client } from '@/sanity/lib/client';

// Define the type for the logo data
interface LogoData {
  image1: {
    asset: {
      _ref: string;
    };
  };
}

// Function to fetch logo data
export async function getLogoData(): Promise<LogoData[]> {
  const query = "*[_type == 'logoImage'] | order(_updatedAt asc)[0...7]";
  const data = await client.fetch(query, {}, { cache: 'no-cache' });
  return data;
}
