import React from 'react';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='mb-8 bg-black flex flex-col lg:flex-row items-center h-screen'>
             <img className='w-full lg:w-[50%] mx-auto p-5' src={bannerImg} alt="" />
             <div className='flex flex-col gap-3 justify-center'>
                <h2 className='w-full text-white  text-center justify-center text-2xl font-semibold font-sans mx-auto p-8'>Unlock the rich flavors and diverse culinary <br /> traditions os India with our <br /> tantalizing quizzes and discover <br /> your inner foodie!</h2>
                <button className='bg-black hover:bg-yellow-600 hover:text-white text-xl border-2 border-yellow-700 text-yellow-700 font-semibold rounded p-2 mx-auto'>View Menu</button>
             </div>
             
        </div>
    );
};

export default Banner;