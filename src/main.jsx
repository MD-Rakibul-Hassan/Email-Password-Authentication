import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import Login from './components/pages/Login/Login.jsx';
import SignUp from './components/pages/SignUp/SignUp.jsx';
const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element:<Home />
      },
      {
        path: '/login',
        element:<Login />
      },
      {
        path: '/signup',
        element:<SignUp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}/>
)
