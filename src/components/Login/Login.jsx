import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const [error, setError] = useState("");
    const { signIn, handleGoogleSignIn , handleGithubSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        setError("");
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const handleGoogleLogin = () => {
        setError("");
        handleGoogleSignIn();
        navigate(from, { replace: true });
    }

    const handleGithubLogin = () => {
        setError("");
        handleGithubSignIn();
        navigate(from, { replace: true });
    }
    return (
        <div className=' my-5 py-5'>
            <div className='bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 w-full lg:w-[40%] py-5 mx-auto'>
                <p className='text-center text-2xl text-gray-900 font-semibold mb-3'>Please Login</p>
                <div className=' flex justify-center'>
                    <div className="w-full max-w-xs ">
                        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' required placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name='password' required placeholder="Your Password" />
                            </div>
                            {
                                error && <p className='text-red-700'>{error}</p>
                            }
                            <div className="flex flex-col items-center justify-between">
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Sign In
                                </button>

                                <Link to="/register" className="my-2 inline-block align-baseline font-bold text-sm text-yellow-700 hover:text-yellow-900">
                                    Don't Have an Account? Please Register!!!</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <button onClick={handleGoogleLogin} className="bg-white hover:bg-yellow-700 my-3 w-[50%] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    <span className='flex items-center gap-1 justify-center'>Sign in with Google <FaGoogle className='text-blue-700'></FaGoogle></span>
                </button>
                <button onClick={handleGithubLogin} className="bg-white hover:bg-yellow-700 mb-3 w-[50%] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    <span className='flex items-center gap-1 justify-center'>Sign in with Github <FaGithub></FaGithub></span>
                </button>
                </div>
            </div>
        </div>
    );
};

export default Login;