'use client';

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface ImageType {
  _key: string;
  asset: {
    _id: string;
    url: string;
  };
}

interface ImageGalleryProps {
  Images: ImageType[] | null;
}

export default function ImageGallery({ Images }: ImageGalleryProps) {
  console.log('Images Prop:', Images); // Log the Images prop

  if (!Images || Images.length === 0) {
    return (
      <div className="h-[607px] sm:w-[675px] w-auto md:w-full lg:w-[675px] md:px-6 lg:px-0 rounded-[10px] bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">No Images Available</span>
      </div>
    );
  }

  return (
    <div className="h-auto w-auto mt-[60px] mb-[60px] lg:flex">
      {Images.map((image, index) => {
        const imageUrl = urlFor(image).url();
        console.log('Image URL:', imageUrl); // Log the image URL

        return (
          <div key={image._key} className="one flex-1 h-auto">
            <Image
              className="h-[607px] sm:w-[675px] w-auto md:w-full lg:w-[675px] md:px-6 lg:px-0 rounded-[10px] object-cover cursor-pointer"
              src={imageUrl}
              alt={`Product Image ${index + 1}`}
              height={607}
              width={675}
              priority // Add this if the image is above the fold
            />
          </div>
        );
      })}
    </div>
  );
}