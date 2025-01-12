import { client } from '@/sanity/lib/client';

// Function to fetch updated hero data
export async function getHeroData() {
  const query = "*[_type == 'heroImage'][0]";
  console.log(query);
  
  const data = await client.fetch(query, {}, { cache: 'no-cache' });
  return data;
}
