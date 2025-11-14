import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/Home_p'
import Dashboard from './Pages/Dashboard/Dashboard'
import Chat from './Pages/Chat/Chat'
import TopLayout from './layout/toplayout/toplayout'
import Dash from './layout/Dash/Dash'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sign_in from './Pages/SignIn/Sign_in'
import Sign_up from './Pages/SignUp/Sign_up'
import { ClerkProvider } from '@clerk/clerk-react'
import Chatlist from './components/chatlist/chatlist'

const router = createBrowserRouter([
  {
    element: <TopLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in/*',
        element: <Sign_in />,
      },
      {
        path: '/sign-up/*',
        element: <Sign_up />,
      },

      {
        path: '/dashboard/chat/:id',
        element: <Chat />,
      },

      {
        element: <Dash />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />

          },

          {
            path: '/dashboard/chat/:id',
            element: <Chat />,
          }]
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
