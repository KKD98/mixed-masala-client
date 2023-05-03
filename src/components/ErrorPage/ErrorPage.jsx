import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/error.jpg'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <div id="error-page" className='text-center text-2xl font-bold mt-8'>
                <h1>Oops!</h1>
                <img className='mx-auto w-64 my-4' src={errorImg} alt="" />
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/"><button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold my-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Go to HomePage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;