import React, { useState } from 'react';


const Blogs = () => {
   
    return (
        <div>
        
      
           <h2 className='text-2xl font-sans font-bold text-gray-900 text-center p-3 my-3'>Question & Answer Section</h2>
           <div className='flex flex-col gap-3 w-[60%] mx-auto'>
           <div className='bg-yellow-300 p-3 my-3'>
            <h2 className='text-xl font-sans font-bold text-gray-900 my-3'>Question-1: Tell us the differences between uncontrolled and controlled components.</h2>
            <h2 className='text-xl font-sans font-semibold text-gray-900 mb-3'>Answer: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h2>
           </div>
           <div className='bg-yellow-300 p-3 my-3'>
            <h2 className='text-xl font-sans font-bold text-gray-900 my-3'>Question-2: How to validate React props using PropTypes</h2>
            <h2 className='text-xl font-sans font-semibold text-gray-900 mb-3'>Answer: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h2>
           </div>
           <div className='bg-yellow-300 p-3 my-3'>
            <h2 className='text-xl font-sans font-bold text-gray-900 my-3'>Question-2: How to validate React props using PropTypes</h2>
            <h2 className='text-xl font-sans font-semibold text-gray-900 mb-3'>Answer: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h2>
           </div>
           <div className='bg-yellow-300 p-3 my-3'>
            <h2 className='text-xl font-sans font-bold text-gray-900 my-3'>Question-2: How to validate React props using PropTypes</h2>
            <h2 className='text-xl font-sans font-semibold text-gray-900 mb-3'>Answer: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h2>
           </div>
           </div>
         <div className='flex justify-center'>  <button className='p-3 text-gray-900 text-xl font-semibold bg-yellow-300 mb-3 rounded' type='submit'>Download Pdf</button></div>
        </div>
    );
};

export default Blogs;