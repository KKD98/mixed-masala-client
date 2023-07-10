import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReviews = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleReview = (event) => {
    event.preventDefault();
    if (!name.trim() || !rating.trim() || !reviewText.trim()) {
      toast.error('Please fill in all required fields.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.success('Review Added Successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      setName('');
      setRating('');
      setImage('');
      setReviewText('');
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-center font-sans font-semibold text-3xl text-yellow-700 mb-3 mx-auto border-2 border-yellow-700 border-dotted w-[60%] lg:w-[25%] p-3">
        Add Reviews
      </h2>
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-center w-full lg:w-4/5 mx-auto">
        <div className="w-full flex flex-col justify-center items-center mx-auto">
          <p className="text-2xl text-gray-700 font-semibold">Follow Us On</p>
          <div className="flex gap-6 text-4xl text-gray-600 mx-auto py-5 justify-center">
            <FaFacebook className="text-yellow-700"></FaFacebook>
            <FaInstagram className="text-yellow-700"></FaInstagram>
            <FaTwitter className="text-yellow-700"></FaTwitter>
          </div>
        </div>

        <div className="w-full">
          <form className="bg-black border-2 border-yellow-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                required
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Image*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                required
                id="image"
                type="file"
                name="image"
                placeholder="Your image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                Rating*
              </label>
              <select
                className="shadow appearance-none border rounded w-full normal-case py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                name="rating"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select rating</option>
                <option>5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
                <option>2 Stars</option>
                <option>1 Star</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
                Review*
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                required
                id="review"
                placeholder="Write your review"
                name="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleReview}
                className="bg-black hover:bg-yellow-600 hover:text-white text-xl border-2 border-yellow-700 text-yellow-700 font-semibold rounded p-2 mx-auto"
                type="button"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default AddReviews;
