import React from 'react';

const Recipe = ({ recipe }) => {
    const { recipeName, ingredients, cookingMethod, rating } = recipe;
    return (
        <div>
            <div className="card w-full bg-yellow-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-sans mx-auto mb-4  bg-yellow-400  p-3  font-bold text-gray-900 rounded">{recipeName}</h2>
                    <p className='text-xl font-semibold text-gray-900 mb-4'>Ingredients: {ingredients}</p>
                    <p className='text-xl font-semibold text-gray-900 mb-3'>Cooking Method: {cookingMethod}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-yellow-400 text-gray-900 border-none hover:bg-yellow-600">Add to Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;