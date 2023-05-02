import React, { useEffect, useState } from 'react';
import SingleChef from '../../SingleChef/SingleChef';

const ChefsSection = () => {
    const [allChefsData , setAllChefsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allchefsdata')
        .then(res => res.json())
        .then(data => setAllChefsData(data))
        .catch(error => console.log(error))
    } , [])
    return (
        <div className='mb-5'>
              <h2 className='text-center font-sans font-bold text-4xl text-gray-900 mb-3'>All Chefs</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {
                allChefsData.map(chefsData => <SingleChef key={chefsData.id} chefsData={chefsData}></SingleChef>)
              }
              </div>
        </div>
    );
};

export default ChefsSection;