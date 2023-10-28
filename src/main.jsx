import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import Layout from './Layout/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>,
)
