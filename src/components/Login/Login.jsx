import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' my-5 py-5'>
        <div className='bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 w-full lg:w-[40%] py-5 mx-auto'>
        <p className='text-center text-2xl text-gray-900 font-semibold mb-3'>Please Login</p>
            <div className=' flex justify-center'>
                <div className="w-full max-w-xs ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' required placeholder="Your Email"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name='password' required placeholder="Your Password"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="photo">
                                Photo URL
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="photo" type="text" name='photo' placeholder="Your Photo URL"/>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <Link to="/register" className="my-2 inline-block align-baseline font-bold text-sm text-yellow-700 hover:text-yellow-900">
                                Don't Have an Account? Please Register!!!</Link>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;