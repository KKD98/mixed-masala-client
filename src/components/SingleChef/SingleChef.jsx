import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";

const SingleChef = ({ chefsData }) => {
    const {id , name, picture, description, experience, likes, number_of_recipes } = chefsData;
    return (
        <div className='h-[70%]'>
            <div className=" shadow-xl shadow-gray-900 flex flex-col justify-center items-center gap-3 mx-3 lg:mx-0 p-5 border-2 border-yellow-700">
                <figure className='w-[50%] h-[50%] my-auto  px-3'><img src={picture} alt="Movie" className='rounded-full border-2 border-yellow-700'/></figure>
                <div className=" w-full">
                    <h2 className=" mb-3 text-2xl font-sans text-gray-500 font-bold">{name}</h2>
                    <p className='mb-1 text-xl font-sans text-gray-600 font-semibold'>Experience: {experience}</p>
                    <p className='mb-3 text-xl font-sans text-gray-600 font-semibold'>Number of recipes: {number_of_recipes}</p>
                    <div className=" flex justify-between items-center">
                    <div className='flex items-center gap-2'>
                    <span className='text-blue-700'><FaThumbsUp></FaThumbsUp></span>
                        <p className='text-xl font-sans text-gray-600 font-semibold'>{likes}</p>
                    </div>
                       <Link to={`/viewrecipes/${id}`}> <button className="bg-black btn-sm hover:bg-yellow-600 hover:text-white text-sm border-2 border-yellow-700 text-yellow-700 font-semibold rounded  mx-auto">View recipes</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;

