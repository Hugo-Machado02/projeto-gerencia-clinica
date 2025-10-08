import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Login from './pages/Login/Login'
import Medico from './pages/Medico/Medico'
import Paciente from './pages/Paciente/Paciente'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/medico",
    element: <Medico />
  },
  {
    path: "/paciente",
    element: <Paciente />
  },
  {
    path: "/development",
    element: <App />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
