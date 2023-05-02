import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";

const SingleChef = ({ chefsData }) => {
    const {id , name, picture, description, experience, likes, number_of_recipes } = chefsData;
    return (
        <div className='h-[70%]'>
            <div className="card card-side  shadow-xl flex gap-0">
                <figure className='w-[40%] h-[50%] my-auto px-3'><img src={picture} alt="Movie" /></figure>
                <div className="card-body w-full">
                    <h2 className="card-title mb-3 text-2xl font-sans text-gray-900 font-bold">{name}</h2>
                    <p className='mb-1 text-xl font-sans text-gray-900 font-semibold'>Experience: {experience}</p>
                    <p className='mb-3 text-xl font-sans text-gray-900 font-semibold'>Number of recipes: {number_of_recipes}</p>
                    <div className="card-actions flex justify-between items-center">
                    <div className='flex items-center gap-2'>
                    <span className='text-blue-700'><FaThumbsUp></FaThumbsUp></span>
                        <p className='text-xl font-sans text-gray-900 font-semibold'>{likes}</p>
                    </div>
                       <Link to={`/viewrecipes/${id}`}> <button className="btn bg-yellow-300 text-gray-900 text-md font-semibold border-none hover:bg-yellow-500">View recipes</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;

