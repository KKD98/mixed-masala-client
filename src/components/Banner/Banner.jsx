import React from 'react';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='my-5'>
             <img className='w-[70%] mx-auto' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;