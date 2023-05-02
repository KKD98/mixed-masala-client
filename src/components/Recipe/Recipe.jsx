import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Recipe = ({ recipe }) => {
    const { recipeName, ingredients, cookingMethod, rating } = recipe;
    return (
        <div>
            <div className="card w-full bg-yellow-100 shadow-xl mb-5 p-3">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-sans mx-auto mb-4  bg-yellow-400  p-3  font-bold text-gray-900 rounded">{recipeName}</h2>
                    <p className='text-xl font-semibold text-gray-900 mb-4'>Ingredients: {ingredients}</p>
                    <p className='text-xl font-semibold text-gray-900 mb-3'>Cooking Method: {cookingMethod}</p>
                    <div className="card-actions flex justify-between items-center">
                        <div className='text-yellow-500 text-2xl'>
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                        </div>
                        <button className="btn bg-yellow-400 text-gray-900 border-none hover:bg-yellow-600">Add to Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;