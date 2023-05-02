import React from 'react';
import { Link } from 'react-router-dom';

const SingleChef = ({ chefsData }) => {
    const { name, picture, description, experience, likes, number_of_recipes } = chefsData;
    console.log(chefsData)
    return (
        <div className='h-[70%]'>
           
        </div>
    );
};

export default SingleChef;