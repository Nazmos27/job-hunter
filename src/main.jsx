import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import Application from './Components/Application/Application';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch("category.json")
        },
        {
          path: 'statistics',
          element:<Statistics></Statistics>,
        },
        {
          path:'appliedjobs',
          element:<AppliedJobs></AppliedJobs>
        },
        {
          path:'blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'applying',
          element:<Application></Application>
        },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)