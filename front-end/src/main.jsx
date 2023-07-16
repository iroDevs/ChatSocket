import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserProvider from './context/UserProvider.jsx'

import Login from './pages/Login/Login.jsx'
import WebChat from './pages/WebChat/WebChat.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />,
  },
  {
    path:"/chat",
    element: <WebChat />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
