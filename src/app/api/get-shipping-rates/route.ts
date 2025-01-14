import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Simulate fetching shipping rates
    const shippingRates = [
      {
        rate_id: 'se-123456',
        carrier: 'UPS',
        service_type: 'UPS Next Day Air®',
        shipping_amount: {
          amount: 379.39,
          currency: 'USD',
        },
      },
      {
        rate_id: 'se-123457',
        carrier: 'UPS',
        service_type: 'UPS Next Day Air® Early',
        shipping_amount: {
          amount: 469.39,
          currency: 'USD',
        },
      },
      {
        rate_id: 'se-123458',
        carrier: 'UPS',
        service_type: 'UPS Next Day Air Saver®',
        shipping_amount: {
          amount: 342.61,
          currency: 'USD',
        },
      },
      {
        rate_id: 'se-123459',
        carrier: 'UPS',
        service_type: 'UPS 2nd Day Air®',
        shipping_amount: {
          amount: 165.3,
          currency: 'USD',
        },
      },
      {
        rate_id: 'se-123460',
        carrier: 'UPS',
        service_type: 'UPS 2nd Day Air AM®',
        shipping_amount: {
          amount: 190.09,
          currency: 'USD',
        },
      },
      {
        rate_id: 'se-123461',
        carrier: 'UPS',
        service_type: 'UPS 3 Day Select®',
        shipping_amount: {
          amount: 141.79,
          currency: 'USD',
        },
      },
      {
        rate_id: 'se-123462',
        carrier: 'UPS',
        service_type: 'UPS® Ground',
        shipping_amount: {
          amount: 49.92,
          currency: 'USD',
        },
      },
    ];

    // Return the shipping rates
    return NextResponse.json({ rates: shippingRates });
  } catch (err: any) {
    console.error('Error fetching shipping rates:', err);
    return NextResponse.json(
      {
        error: 'Failed to fetch shipping rates',
        details: err.message,
      },
      { status: 500 }
    );
  }
}