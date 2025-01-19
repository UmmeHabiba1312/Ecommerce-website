import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

async function getProductById(id: string) {
  const query = `*[_type == "product" && _id == $id][0]{
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

  const product = await client.fetch(query, { id });
  return product;
}

export async function POST(request: Request) {
  try {
    const { name, email, rating, comment, id } = await request.json();

    console.log('Received data:', { name, email, rating, comment, id });

    // Validate required fields
    if (!name || !email || !rating || !comment || !id) {
      console.error('Missing required fields');
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Ensure rating is a number
    const ratingNumber = Number(rating);
    if (isNaN(ratingNumber)) {
      return NextResponse.json(
        { message: 'Rating must be a number.' },
        { status: 400 }
      );
    }

    // Verify productId
    const product = await getProductById(id);
    if (!product) {
      console.error('Invalid productId:', id);
      return NextResponse.json(
        { message: 'Invalid product ID.' },
        { status: 400 }
      );
    }

    console.log('Product found:', product);

    const review = {
      _type: 'review',
      product: {
        _type: 'reference',
        _ref: id,
      },
      name,
      email,
      rating: ratingNumber, // Use the validated number
      comment,
      approved: false,
    };

    console.log('Creating review in Sanity:', review);

    const createdReview = await client.create(review);
    console.log('Review created successfully:', createdReview);

    return NextResponse.json(
      { message: 'Review submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json(
      { message: 'Failed to submit review.' },
      { status: 500 }
    );
  }
}