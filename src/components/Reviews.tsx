'use client'; // Ensure this is a client-side component

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

interface ReviewFormProps {
  id: string;
  onReviewSubmit: () => void; // Add onReviewSubmit to the props
}

function ReviewForm({ id, onReviewSubmit }: ReviewFormProps) {
  const { register, handleSubmit, reset } = useForm<ReviewFormData>();

  const onSubmit = async (data: ReviewFormData) => {
    try {
      console.log('Submitting review:', { ...data, id }); // Debugging
      console.log('Product ID:', id);

      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, id }),
      });

      console.log('API response:', response); // Debugging

      if (response.ok) {
        const result = await response.json();
        console.log('API result:', result); // Debugging

        // Show success toast
        toast.success('Review submitted successfully!');

        // Reset the form
        reset();

        // Trigger re-fetch of reviews in the parent component
        onReviewSubmit();
      } else {
        const errorData = await response.json();
        console.error('API error:', errorData); // Debugging

        // Show error toast
        toast.error('Failed to submit review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error); // Debugging

      // Show error toast
      toast.error('Failed to submit review. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <h3 className="text-4xl font-bold mb-4 text-[#272343]">Leave A Review</h3>
      <div className="space-y-4">
        <input
          {...register('name', { required: true })}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          {...register('email', { required: true })}
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <input
          {...register('rating', { required: true, min: 1, max: 5 })}
          type="number"
          placeholder="Rating (1-5)"
          className="w-full p-2 border rounded"
        />
        <textarea
          {...register('comment', { required: true })}
          placeholder="Your Review"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-[#029FAE] text-white p-3 font-semibold rounded">
          Submit Review
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;