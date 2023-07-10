import React from 'react';
import ranveersItem from '../../assets/ranbirdumbiriyani.jpg';
import sanjeevsItem from '../../assets/sanjeevprawncurry.jpg';
import shilpasItem from '../../assets/shilpapanipuri.jpg';
import bikassItem from '../../assets/bikasaloopuri.jpg';
import nitasItem from '../../assets/nitabutterchicken.jpg';
import atulsItem from '../../assets/atulmasaladosa.jpg';

const SignatureDishPart = () => {
    return (
        <div className='mb-8'>
         <h2 className='text-center font-sans font-semibold text-3xl text-yellow-700 mb-6  mx-auto border-2 border-yellow-700 border-dotted w-[80%] lg:w-[35%] p-3'> Signature Dishes of Chef's </h2>
           
            <div className='grid grid-cols-1 lg:grid-cols-3 w-full lg:w-4/5 gap-3 mx-auto px-2 lg:px-0'>
                <div className='flex flex-col gap-2 items-center border-2 border-yellow-700 w-full lg:w-[95%]'>
                    <p className='text-2xl text-center text-gray-600 font-sans font-bold pt-3'>Ranveer Brar's</p>
                    <p className='text-xl text-center text-gray-600 font-sans font-bold'>Dum Biriyani</p>
                    <img className='w-full p-3' src={ranveersItem} alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center border-2 border-yellow-700 w-full lg:w-[95%]'>
                    <p className='text-2xl text-center text-gray-600 font-sans font-bold  pt-3'>Sanjeev Kapoor's</p>
                    <p className='text-xl text-center text-gray-600 font-sans font-bold'>Prawn Curry</p>
                    <img className='w-full p-3' src={sanjeevsItem} alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center border-2 border-yellow-700 w-full lg:w-[95%]'>
                    <p className='text-2xl text-center text-gray-600 font-sans font-bold  pt-3'>Shipra Khanna's</p>
                    <p className='text-xl text-center text-gray-600 font-sans font-bold'>Pani Puri</p>
                    <img className='w-full p-3' src={shilpasItem} alt="" />
                </div> 
                 <div className='flex flex-col gap-2 items-center border-2 border-yellow-700 w-full lg:w-[95%]'>
                    <p className='text-2xl text-center text-gray-600 font-sans font-bold  pt-3'>Vikas Khanna's</p>
                    <p className='text-xl text-center text-gray-600 font-sans font-bold'>Aloo Puri</p>
                    <img className='w-full p-3' src={bikassItem} alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center border-2 border-yellow-700 w-full lg:w-[95%]'>
                    <p className='text-2xl text-center text-gray-600 font-sans font-bold  pt-3'>Nita Mehta's</p>
                    <p className='text-xl text-center text-gray-600 font-sans font-bold'>Butter Chicken</p>
                    <img className='w-full p-3' src={nitasItem} alt="" />
                </div>
                <div className='flex flex-col gap-2 items-center border-2 border-yellow-700 w-full lg:w-[95%]'>
                    <p className='text-2xl text-center text-gray-600 font-sans font-bold  pt-3'>Atul Kochhar's</p>
                    <p className='text-xl text-center text-gray-600 font-sans font-bold'>Masala Dosa</p>
                    <img className='w-full p-3' src={atulsItem} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignatureDishPart;