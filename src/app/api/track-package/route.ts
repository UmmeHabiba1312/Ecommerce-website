import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const { trackingNumber } = await request.json();

    // Call ShipEngine API to track the package
    const response = await axios.get(
      `https://api.shipengine.com/v1/tracking?tracking_number=${trackingNumber}`,
      {
        headers: {
          'API-Key': process.env.SHIPENGINE_API_KEY,
        },
      }
    );

    // Return the tracking details
    return NextResponse.json(response.data);
  } catch (err) {
    console.error('Error tracking package:', err);
    return NextResponse.json({ error: 'Failed to track package' }, { status: 500 });
  }
}