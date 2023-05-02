import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Blogs from './components/Blogs/Blogs';
import HomeBody from './components/HomeBody/HomeBody';
import ViewAllRecipes from './components/ViewAllRecipes/ViewAllRecipes';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/",
        element: <HomeBody></HomeBody>
      },
      {
      path: "blogs",
      element: <Blogs></Blogs>
    },
    {
      path: "viewrecipes/:id",
      element: <ViewAllRecipes></ViewAllRecipes>
    },
    {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "register",
      element: <Register></Register>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
