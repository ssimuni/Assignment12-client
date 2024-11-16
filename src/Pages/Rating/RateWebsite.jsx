import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const RateWebsite = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const axiosPublic = useAxiosPublic();

    const handleRatingSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (rating < 1 || rating > 5) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Rating',
                text: 'Please select a rating between 1 and 5.',
            });
            setIsSubmitting(false);
            return;
        }

        const ratingData = {
            rating,
            comment,
            date: new Date().toISOString(),
        };

        try {
            const res = await axiosPublic.post('/rating', ratingData);
            if (res.data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank You!',
                    text: 'Your feedback has been submitted successfully.',
                });
                setRating(0);
                setComment('');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: error.message,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4">Rate Our Website</h1>
                <form onSubmit={handleRatingSubmit}>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                            Select a Rating (1 to 5)
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            min="1"
                            max="5"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                            Add a Comment (optional)
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            rows="4"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-4 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 disabled:bg-gray-400"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Rating'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RateWebsite;
