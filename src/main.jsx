import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Code from './Components/Code.jsx'
import RitualsPage from './Components/RitualsPage.jsx'
import JoinUS from './Components/JoinUs.jsx'
import Home from './Components/Home.jsx'
import { createHashRouter, HashRouter, RouterProvider, Navigate } from 'react-router-dom'



const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'code',
        element: <Code />
      },
      {
        path: 'ritual', 
        element: <RitualsPage />
      },
      {
        path: 'join_us',
        element: <JoinUS />
      }
    ] 
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
