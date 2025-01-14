// // src/app/api/shipping/route.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import fetch from 'node-fetch'; // For making HTTP requests to ShipEngine

// // Ensure that ShipEngine API key is available
// const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY;

// if (!SHIPENGINE_API_KEY) {
//   throw new Error('ShipEngine API key is missing');
// }

// // Handle POST request for creating a shipment and getting rates
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { shippingDetails } = req.body;

//     // Check if shippingDetails are provided
//     if (!shippingDetails) {
//       return res.status(400).json({ error: 'Missing shipping details' });
//     }

//     // Prepare ShipEngine API request payload for getting rates
//     const shipmentRequestPayload = {
//       shipment: {
//         ship_from: {
//           country: 'US',
//           state: 'CA',
//           city: 'Los Angeles',
//           postal_code: '90001',
//         },
//         ship_to: {
//           country: shippingDetails.country,
//           state: shippingDetails.state,
//           city: shippingDetails.city,
//           postal_code: shippingDetails.postal_code,
//         },
//         packages: [
//           {
//             weight: { value: 1, unit: 'pound' },  // Assuming a package weight of 1 pound
//             dimensions: { length: 10, width: 5, height: 5, unit: 'inch' },
//           },
//         ],
//       },
//     };

//     // Call ShipEngine API to get shipping rates
//     const shipEngineResponse = await fetch('https://api.shipengine.com/v1/shipments/rates', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': SHIPENGINE_API_KEY,  // Now TypeScript knows it's a string
//       } as HeadersInit, // Explicitly cast headers to HeadersInit
//       body: JSON.stringify(shipmentRequestPayload),
//     });

//     const shipEngineData = await shipEngineResponse.json();

//     if (!shipEngineResponse.ok) {
//       throw new Error(`ShipEngine Error: ${shipEngineData.message}`);
//     }

//     // Return the shipping rates from ShipEngine
//     return res.status(200).json({ rates: shipEngineData });
//   } catch (error: unknown) {
//     // Narrow the type of the error to `Error` to access its properties
//     if (error instanceof Error) {
//       console.error(error);  // Log the error for debugging
//       return res.status(500).json({ error: 'Failed to fetch shipping rates', details: error.message });
//     } else {
//       // If error is not an instance of Error, handle it here
//       return res.status(500).json({ error: 'Unknown error occurred', details: 'An unknown error occurred' });
//     }
//   }
// }

// // Handle GET request (method not allowed)
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   return res.status(405).json({ error: 'Method Not Allowed' });
// }
