import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefInRecipe = ({ chef }) => {
    const { id, name, picture, description, experience, likes, number_of_recipes } = chef;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <LazyLoadImage delayTime="500" effect="blur" src={picture} alt="" className="rounded-xl mx-auto w-[30%] h-[30%]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl font-sans text-gray-900">{name}</h2>
                    <p className='text-2xl font-sans font-semibold text-gray-900'>{description}</p>
                    <p className='text-xl font-semibold font-sans text-gray-900'>Experience of {experience}</p>
                    <p className='text-xl font-semibold font-sans text-gray-900'>Number of Recipes: {number_of_recipes}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefInRecipe;