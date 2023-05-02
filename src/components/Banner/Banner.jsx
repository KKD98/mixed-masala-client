import React from 'react';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='my-5 bg-yellow-100 flex flex-col lg:flex-row items-center'>
             <img className='w-full lg:w-[50%] mx-auto p-5' src={bannerImg} alt="" />
             <div className='flex flex-col gap-3 justify-center'>
                <h2 className='w-full text-gray-900 bg-yellow-300 text-center justify-center text-2xl font-semibold font-sans mx-auto p-8'>Unlock the rich flavors and diverse culinary <br /> traditions os India with our <br /> tantalizing quizzes and discover <br /> your inner foodie!</h2>
                <button className='bg-yellow-300 hover:bg-yellow-600 text-xl text-gray-900 font-semibold rounded p-3 mx-auto'>View Menu</button>
             </div>
             
        </div>
    );
};

export default Banner;