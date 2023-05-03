import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const userImage = user?.photoURL ? user.photoURL : "";
    const userName = user?.displayName ? user.displayName : "";

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-yellow-300 add-font px-0 md:px-3">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-2xl md:text-4xl  text-gray-900 pl-0">MixedMasala</a>
                </div>
                <div className="navbar-center lg:flex gap-5">
                    <ul className="menu menu-horizontal px-1 text-xl text-gray-900">
                        <NavLink to="/" className="mr-4 md:mr-10 font-semibold" style={({ isActive }) => {
                            return {
                                color: isActive && "blue",
                            };
                        }}>Home</NavLink>
                        <NavLink to="/blogs" className="font-semibold text-gray-900" style={({ isActive }) => {
                            return {
                                color: isActive && "blue",
                            };
                        }}>Blog</NavLink>
                    </ul>
                </div>
               
                <div className="navbar-end">
               <Tooltip className='mr-1 font-semibold' id="my-tooltip" />
                    {
                        user &&
                            <div className="avatar mr-0 lg:mr-3 flex justify-end">
                                <div className="w-10 rounded-full " data-tooltip-id="my-tooltip" data-tooltip-content={userName}>
                                    <img src= {userImage} />
                                </div>
                            </div>
                    }
                    {
                        user ?
                            <Link onClick={handleLogOut} className="btn  bg-white text-gray-900 border-none hover:bg-yellow-600">Logout</Link> :
                            <Link to="/login" className="btn  bg-white text-gray-900 border-none hover:bg-yellow-600">Login</Link>
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default Header;