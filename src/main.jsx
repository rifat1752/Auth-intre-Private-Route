import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Routes/PrivateRoute';
import Profile from './Components/profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path:'/Orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
   <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
