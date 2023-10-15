import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCofee from './components/AddCoffee'
import UpdateCoffee from './components/UpdateCoffee'
import App from './App'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AuthProvider from './provider/AuthProvider'
import Users from './components/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://coffe-store-server-i5oa0h9ho-mdabarik.vercel.app/all')
      },
      {
        path: '/addCoffee',
        element: <AddCofee></AddCofee>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffe-store-server-i5oa0h9ho-mdabarik.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'signin',
        element: <Login></Login>
      },
      {
        path: '/user',
        element: <Users></Users>,
        loader: ({ params }) => fetch('https://coffe-store-server-i5oa0h9ho-mdabarik.vercel.app/user')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
