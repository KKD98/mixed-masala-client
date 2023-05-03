import React from 'react';



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
                    <h2 className='text-xl font-sans font-bold text-gray-900 my-3'>Question-2: How to validate React props using PropTypes?</h2>
                    <h2 className='text-xl font-sans font-semibold text-gray-900 mb-3'>Answer: To validate React props using PropTypes, import the PropTypes library and define the PropTypes for your component by adding a propTypes object as a static property on your component. Specify the type, and whether it's required or optional. When your component is rendered, React will automatically validate the props against their defined propTypes. If any of the props are invalid, a warning will be logged in the console. Note that PropTypes validation is a best-effort, meaning they will help catch errors and wrong uses, but you should always be aware of the data you are passing to the components.</h2>
                </div>
                <div className='bg-yellow-300 p-3 my-3'>
                    <h2 className='text-xl font-sans font-bold text-gray-900 my-3'>Question-3: Tell us the difference between nodejs and express js.</h2>
                    <h2 className='text-xl font-sans font-semibold text-gray-900 mb-3'>Answer: Node.js is a runtime environment for executing JavaScript code on the server side, while Express.js is a web framework built on top of Node.js that provides a set of tools for building web applications. Node.js provides low-level APIs for working with system-level resources, while Express.js provides a higher-level API for handling HTTP requests, routing, and middleware.</h2>
                </div>
                <div className='bg-yellow-300 p-3 my-3'>
                    <h2 className='text-xl font-sans font-bold text-gray-900 my-3'>Question-4: What is a custom hook, and why will you create a custom hook?</h2>
                    <h2 className='text-xl font-sans font-semibold text-gray-900 mb-3'>Answer: A custom hook is a function in React that allows you to extract logic and stateful behavior from a component to be reused across multiple components. You can create a custom hook to abstract common stateful logic to avoid code duplication and simplify components, resulting in a more organized and reusable codebase.</h2>
                </div>
            </div>
            <div className='flex justify-center'>  <button className='p-3 text-gray-900 text-xl font-semibold bg-yellow-300 mb-3 rounded' type='submit'>Download Pdf</button></div>
        </div>
    );
};

export default Blogs;