import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
        </div>
    );
};

export default HomePage;