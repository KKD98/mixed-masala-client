import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const HomePage = () => {
    return (
        <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
         <ToastContainer/>
        </div>
    );
};

export default HomePage;