import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {
    const { recipeName, ingredients, cookingMethod, rating , id} = recipe;
    const [disabled, setDisabled] = useState(false);
    const handleToast = () => {
                toast('🤩 Added to Favorites!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    toastId: "ttttttttt"
                    });
                    setDisabled(true);
    }
    return (
        <div>
        
            <div className="card w-full bg-black shadow-xl mb-5 p-3">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-sans mx-auto mb-4  bg-black  p-3  font-bold text-yellow-700 rounded">{recipeName}</h2>
                    <p className='text-xl font-semibold text-gray-400 mb-4'>Ingredients: {ingredients}</p>
                    <p className='text-xl font-semibold text-gray-400 mb-3'>Cooking Method: {cookingMethod}</p>
                    <div className="card-actions flex justify-between items-center">
                        <div className='text-yellow-700 text-2xl'>
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </div>

                        <button disabled={disabled} onClick={handleToast} className="bg-yellow-700 hover:bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add to Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;