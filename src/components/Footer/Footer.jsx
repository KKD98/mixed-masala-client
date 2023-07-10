import React from 'react';
import { FaFacebook, FaInstagram , FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black-300 mb-4 border-t-2 border-t-slate-900'>
            <div className='flex gap-6 text-4xl text-gray-600 mx-auto py-5 justify-center'>
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
                <FaTwitter></FaTwitter>
            </div>
            <div className='flex gap-3 text-xl justify-center text-gray-600 pb-3 font-semibold'>
                <a className='hover:text-blue-800' href="">Terms of Use</a>
                <a className='hover:text-blue-800' href="">Privacy Policy</a>
            </div>
            <p className='text-center  text-md text-gray-600 pb-4 mb-0'>© 2023 MixedMasala</p>
        </div>
    );
};

export default Footer;