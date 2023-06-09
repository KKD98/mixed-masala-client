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
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
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
      element: <PrivateRoute><ViewAllRecipes></ViewAllRecipes></PrivateRoute>
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
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
