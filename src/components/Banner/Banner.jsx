import React from 'react';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='my-5 bg-yellow-100 flex items-center'>
             <img className='w-[50%] mx-auto p-5' src={bannerImg} alt="" />
             <div>
                <h2 className='w-full text-gray-900 bg-yellow-300 text-center justify-center text-2xl font-semibold font-sans mx-auto p-8'>Unlock the rich flavors and diverse culinary <br /> traditions os India with our <br /> tantalizing quizzes and discover <br /> your inner foodie!</h2>
             </div>
        </div>
    );
};

export default Banner;