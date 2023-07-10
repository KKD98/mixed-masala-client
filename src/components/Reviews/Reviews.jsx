import React from 'react';
import img1 from '../../assets/clientone.jpg';
import img2 from '../../assets/clientwo.jpg';
import img3 from '../../assets/clientthree.jpg';
import { FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
    return (
        <div className='mb-8'>
             <h2 className='text-center font-sans font-semibold text-3xl text-yellow-700 mb-4  mx-auto border-2 border-yellow-700 border-dotted w-[60%] lg:w-[20%] p-3'>Reviews</h2>
             <div className='w-full lg:w-4/5 mx-auto flex flex-col lg:flex-row gap-3 p-2 lg:p-0'>
             <div className='w-full border-2 border-yellow-700 shadow-lg shadow-gray-900 flex flex-col gap-2 justify-center items-center p-4'>
                <img src={img1} alt=""  className='rounded-full w-[75px] h-[75px]'/>
                <div>
                <FaQuoteLeft className='text-4xl text-yellow-700'></FaQuoteLeft>
                <p className='text-gray-700'>This recipe website is an absolute game-changer! The diverse range of recipes caters to all tastes and dietary preferences. The clear instructions and helpful tips ensure a seamless cooking experience. A must-visit for any food enthusiast!</p>
                </div>
                
             </div>
             <div className='w-full border-2 border-yellow-700 shadow-lg shadow-gray-900 flex flex-col gap-2 justify-center items-center p-4'>
                <img src={img2} alt=""  className='rounded-full  w-[75px] h-[75px]'/>
                <div>
                <FaQuoteLeft className='text-4xl text-yellow-700'></FaQuoteLeft>
                <p className='text-gray-700'>Wow! This recipe website is a game-changer. It has revolutionized my cooking experience with its easy-to-follow recipes and mouthwatering results. Highly recommended for both beginners and seasoned chefs!</p>
             </div>
             </div>
             <div className='w-full border-2 border-yellow-700 shadow-lg shadow-gray-900 flex flex-col gap-2 justify-center items-center p-4'>
                <img src={img3} alt=""  className='rounded-full  w-[75px] h-[75px]'/>
                <div>
                <FaQuoteLeft className='text-4xl text-yellow-700'></FaQuoteLeft>
                <p className='text-gray-700'>An incredible recipe website that never fails to inspire and deliver amazing dishes. The user-friendly interface and detailed instructions make cooking a joyous experience.</p>
                </div>
             </div>
             </div>
        </div>
    );
};

export default Reviews;