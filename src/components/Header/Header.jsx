import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-yellow-300 add-font md: px-3">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-2xl md:text-4xl text-gray-900 pl-0">MixedMasala</a>
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
                    <a className="btn  bg-white text-gray-900 border-none hover:bg-yellow-600">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;