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
            <div className="navbar bg-black add-font px-0 md:px-3">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-2xl md:text-4xl  text-yellow-700 pl-0">MixedMasala</a>
                </div>
                <div className="navbar-center lg:flex gap-5">
                    <ul className="menu menu-horizontal px-1 text-xl text-white">
                        <NavLink to="/" className="mr-4 md:mr-10 font-semibold" style={({ isActive }) => {
                            return {
                                color: isActive && "#b25900",
                            };
                        }}>Home</NavLink>
                        <NavLink to="/blogs" className="font-semibold text-white" style={({ isActive }) => {
                            return {
                                color: isActive && "#b25900",
                            };
                        }}>Blog</NavLink>
                    </ul>
                </div>
               
                <div className="navbar-end">
               <Tooltip className='mr-1 font-semibold' id="my-tooltip" />
                   <div>
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
                            <Link onClick={handleLogOut} className="bg-black hover:bg-yellow-600 hover:text-white text-xl border-2 border-yellow-700 text-yellow-700 font-semibold rounded p-2 mx-auto">Logout</Link> :
                            <Link to="/login" className="bg-black hover:bg-yellow-600 hover:text-white text-xl border-2 border-yellow-700 text-yellow-700 font-semibold rounded p-2 mx-auto">Login</Link>
                    }
                   </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Header;