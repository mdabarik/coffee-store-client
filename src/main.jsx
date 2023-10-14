import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCofee from './components/AddCoffee'
import UpdateCoffee from './components/UpdateCoffee'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'addCoffee',
        element: <AddCofee></AddCofee>
      },
      {
        path: 'updateCoffee',
        element: <UpdateCoffee></UpdateCoffee>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
