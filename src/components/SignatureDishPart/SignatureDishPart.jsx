import React from 'react';
import ranveersItem from '../../assets/ranbirdumbiriyani.jpg';
import sanjeevsItem from '../../assets/sanjeevprawncurry.jpg';
import shilpasItem from '../../assets/shilpapanipuri.jpg';
import bikassItem from '../../assets/bikasaloopuri.jpg';
import nitasItem from '../../assets/nitabutterchicken.jpg';
import atulsItem from '../../assets/atulmasaladosa.jpg';

const SignatureDishPart = () => {
    return (
        <div className='my-2'>
            <p className='text-4xl text-center text-gray-900 font-sans font-bold mb-2'>Signature Dishes of Chef's</p>
            <div className='flex flex-col lg:flex-row gap-3 lg:gap-2 p-4 lg:p-2'>
                <div className='bg-yellow-300 w-full lg:w-[85%] flex flex-col justify-center lg:ml-5 p-2 lg:p-1'>
                    <p className='text-2xl text-center text-gray-900 font-sans font-bold'>Ranveer Brar's</p>
                    <p className='text-xl text-center text-gray-900 font-sans font-bold'>Dum Biriyani</p>
                    <img className='w-full p-3' src={ranveersItem} alt="" />
                </div>
                <div className='bg-yellow-300 w-full lg:w-[85%] flex flex-col justify-center p-2 lg:p-1'>
                    <p className='text-2xl text-center text-gray-900 font-sans font-bold'>Sanjeev Kapoor's</p>
                    <p className='text-xl text-center text-gray-900 font-sans font-bold'>Prawn Curry</p>
                    <img className='w-full p-3' src={sanjeevsItem} alt="" />
                </div>
                <div className='bg-yellow-300 w-full lg:w-[85%] flex flex-col justify-center p-2 lg:p-1'>
                    <p className='text-2xl text-center text-gray-900 font-sans font-bold'>Shipra Khanna's</p>
                    <p className='text-xl text-center text-gray-900 font-sans font-bold'>Pani Puri</p>
                    <img className='w-full p-3' src={shilpasItem} alt="" />
                </div>
                <div className='bg-yellow-300 w-full lg:w-[85%] flex flex-col justify-center p-2 lg:p-1'>
                    <p className='text-2xl text-center text-gray-900 font-sans font-bold'>Vikas Khanna's</p>
                    <p className='text-xl text-center text-gray-900 font-sans font-bold'>Aloo Puri</p>
                    <img className='w-full p-3' src={bikassItem} alt="" />
                </div>
                <div className='bg-yellow-300 w-full lg:w-[85%] flex flex-col justify-center p-2 lg:p-1'>
                    <p className='text-2xl text-center text-gray-900 font-sans font-bold'>Nita Mehta's</p>
                    <p className='text-xl text-center text-gray-900 font-sans font-bold'>Butter Chicken</p>
                    <img className='w-full p-3' src={nitasItem} alt="" />
                </div>
                <div className='bg-yellow-300 w-full lg:w-[85%] flex flex-col justify-center p-2 lg:p-1'>
                    <p className='text-2xl text-center text-gray-900 font-sans font-bold'>Atul Kochhar's</p>
                    <p className='text-xl text-center text-gray-900 font-sans font-bold'>Masala Dosa</p>
                    <img className='w-full p-3' src={atulsItem} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignatureDishPart;