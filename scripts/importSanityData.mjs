import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

/**
 * Uploads an image to Sanity and returns the asset reference ID.
 * @param {string} imageUrl - The URL of the image to upload.
 * @returns {string|null} - The Sanity asset reference ID or null if upload fails.
 */
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(), // Use the image filename from the URL
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id; // Return the asset reference ID
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

/**
 * Fetches products from the mock API and imports them into Sanity.
 */
async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get('https://678277f9c51d092c3dcf9c9b.mockapi.io/products');
    console.log('API Response:', response.data); // Check the structure of the API response
    const products = response.data;
    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.name}`);

      // Upload image if available
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Create the product document for Sanity
      const sanityProduct = {
        _type: 'product',
        name: product.name,
        description: product.description,
        price: product.price,
        price_id: '', // Assuming no Stripe Price ID available
        stock: 0, // Assuming stock is not available
        slug: {
          _type: 'slug',
          current: product.name.toLowerCase().replace(/\s+/g, '-'), // Generate slug from name
        },
        image: imageRef
          ? [
              {
                _key: `image-${Date.now()}`, // Add a unique _key
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageRef, // Use the uploaded image asset reference
                },
              },
            ]
          : [], // Set to an empty array if no image is available
      };

      console.log('Uploading product to Sanity:', sanityProduct.name);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }
    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the import function
importData();


// import sanityClient from '@sanity/client';
// import axios from 'axios';

// // // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31',
// });

// // Fetch data from mock API
// const fetchData = async () => {
//   try {
//     const response = await axios.get('https://678277f9c51d092c3dcf9c9b.mockapi.io/products');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// // Insert data into Sanity
// const insertData = async () => {
//   const products = await fetchData();

//   products.forEach(async (product) => {
//     const doc = {
//       _type: 'product',
//       name: product.name,
//       price: product.price,
//       description: product.description,
//       image: {
//         _type: 'image',
//         asset: {
//           _type: 'reference',
//           _ref: product.image, // Assuming the mock API provides image URLs
//         },
//       },
//     };

//     try {
//       await client.create(doc);
//       console.log(`Product ${product.name} inserted successfully!`);
//     } catch (error) {
//       console.error(`Error inserting product ${product.name}:`, error);
//     }
//   });
// };

// insertData();





















