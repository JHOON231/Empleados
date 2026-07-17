import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Empleados from './pages/Empleados.jsx'
import data from "./data/empleados";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Empleados empleados={data} />
  </StrictMode>
)
