import { NextResponse } from 'next/server';
import axios from 'axios';

interface CreateLabelRequest {
  orderId: string;
  address: {
    name: string;
    company_name: string;
    phone: string;
    address_line1: string;
    city_locality: string;
    state_province: string;
    postal_code: string;
    country_code: string;
  };
}

export async function POST(request: Request) {
  try {
    const { orderId, address } = (await request.json()) as CreateLabelRequest;

    // Call ShipEngine API to create a label
    const response = await axios.post(
      'https://api.shipengine.com/v1/labels',
      {
        shipment: {
          service_code: 'usps_priority_mail', // Example service code
          ship_to: address,
          ship_from: {
            // Your warehouse address
            name: 'Your Warehouse',
            company_name: 'Your Company',
            phone: '123-456-7890',
            address_line1: '123 Main St',
            city_locality: 'Austin',
            state_province: 'TX',
            postal_code: '78756',
            country_code: 'US',
          },
          packages: [
            {
              weight: {
                value: 1, // Package weight in pounds
                unit: 'pound',
              },
            },
          ],
        },
      },
      {
        headers: {
          'API-Key': process.env.SHIPENGINE_API_KEY,
        },
      }
    );

    // Return the shipping label and tracking number
    return NextResponse.json({
      labelUrl: response.data.label_download.pdf,
      trackingNumber: response.data.tracking_number,
    });
  } catch (err) {
    console.error('Error creating shipping label:', err);
    return NextResponse.json({ error: 'Failed to create shipping label' }, { status: 500 });
  }
}





// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function POST(request: Request) {
//   try {
//     const { orderId, address } = await request.json();

//     // Call ShipEngine API to create a shipping label
//     const response = await axios.post(
//       'https://api.shipengine.com/v1/labels',
//       {
//         shipment: {
//           service_code: 'usps_priority_mail', // Example service code
//           ship_to: address,
//           ship_from: {
//             // Your warehouse address
//             name: 'Your Warehouse',
//             company_name: 'Your Company',
//             phone: '123-456-7890',
//             address_line1: '123 Main St',
//             city_locality: 'Austin',
//             state_province: 'TX',
//             postal_code: '78756',
//             country_code: 'US',
//           },
//           packages: [
//             {
//               weight: {
//                 value: 1, // Package weight in pounds
//                 unit: 'pound',
//               },
//             },
//           ],
//         },
//       },
//       {
//         headers: {
//           'API-Key': process.env.SHIPENGINE_API_KEY,
//         },
//       }
//     );

//     // Return the shipping label and tracking number
//     return NextResponse.json({
//       labelUrl: response.data.label_download.pdf,
//       trackingNumber: response.data.tracking_number,
//     });
//   } catch (err) {
//     console.error('Error creating shipping label:', err);
//     return NextResponse.json({ error: 'Failed to create shipping label' }, { status: 500 });
//   }
// }