import React from 'react';
import foodimage from '../../assets/food-cover.jpg'

const FoodBanner = () => {
    return (
        <div className='mb-16 relative'>
        <img src={foodimage} alt="cover" className='h-screen w-full'/>
        <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="mt-8 lg:mt-0 slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <p className='text-xl lg:text-3xl font-bold'>Subscribe to our Newsletter</p>
            <p  className='my-2 lg:mt-4 lg:mb-6 font-bold text-xl lg:text-xl'>"Delight your taste buds with our mouthwatering recipes!"</p>
            <button className="bg-black hover:bg-yellow-600 hover:text-white text-xl border-2 border-yellow-700 text-yellow-700 font-semibold rounded p-2 mx-auto">Subscribe</button>
        </div>
    </div>
    );
};

export default FoodBanner;