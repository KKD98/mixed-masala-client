import React, { useEffect, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';

const ChefsSection = () => {
    const [allChefsData , setAllChefsData] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        fetch('https://chef-recipe-hunting-assignment-server-side.vercel.app/allchefsdata')
        .then(res => res.json())
        .then(data => {
            setAllChefsData(data);
            setLoading(false)
        })
        .catch(error => console.log(error))
    } , [])
    return (
        <div className='mb-5'>
              <h2 className='text-center font-sans font-bold text-4xl text-gray-900 mb-3'>All Chefs</h2>
              {
                loading ? 
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                 <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                 </div> : ""
              }
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {
                allChefsData.map(chefsData => <SingleChef key={chefsData.id} chefsData={chefsData}></SingleChef>)
              }
              </div>
        </div>
    );
};

export default ChefsSection;