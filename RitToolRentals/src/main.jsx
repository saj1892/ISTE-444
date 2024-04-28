import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import Login from './components/Login.jsx'
import Mylistings from './components/Mylistings.jsx'

/*
  Path: "/" section is for the BODY of the DOM, this will include stuff that is on every page 
*/
const router = createBrowserRouter(
  [
    {
      path: "/",
      // element: <Login />,
      element: <App />
      // children: [
      //   {},
      //   {}
      // ]
    },
    {
      path: "/Home",
      element: <Homepage />
    },
    {
      path: "/Mylistings",
      element: <Mylistings />
    }
  ]
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
