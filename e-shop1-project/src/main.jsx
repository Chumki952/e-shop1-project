import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={routes}>
  <App />
  </RouterProvider>
  </React.StrictMode>,
)
