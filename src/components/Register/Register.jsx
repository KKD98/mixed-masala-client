import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [error , setError] = useState("");
    const {createUser , updateUser} = useContext(AuthContext);
    const navigate = useNavigate();
   
    const handleRegister = event => {
        setError("");
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(userName , email , password , photo);
        if(password < 6){
            return setError("Password length must be more than 6 characters.")
        }
        createUser(email , password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            updateUser(userName , photo)
            .then(data => console.log(data))
            .catch(error => console.log(error))
            navigate('/login');
        })
        .catch(error => {
            console.log(error.message)
            return setError("Password length must be more than 6 characters.")
        })
    }
    return (
        <div className=' my-5 py-5'>
        <div className='bg-black border-2 border-yellow-700 w-[40%] py-5 mx-auto'>
        <p className='text-center text-2xl text-gray-500 font-semibold mb-3'>Please Register</p>
            <div className=' flex justify-center'>
                <div className="w-full max-w-xs ">
                    <form  onSubmit={handleRegister} className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="userName">
                                User Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="userName" type="text" name='userName' placeholder="Your Name"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' required placeholder="Your Email"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name='password' required placeholder="Your Password"/>
                            {
                                error && <p className='text-red-700'>{error}</p>
                            }
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="photo">
                                Photo URL
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="photo" type="text" name='photo' placeholder="Your Photo URL"/>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <button onSubmit={handleRegister} className="bg-yellow-700 hover:bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign Up
                            </button>
                           
                            <Link to="/login" className="my-2 inline-block align-baseline font-bold text-sm text-yellow-700 hover:text-yellow-900">
                                Already Have an Account? Please Login!!!</Link>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;