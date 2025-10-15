import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.jsx'
import { Sign } from './components/pages/login/sign.jsx';
import { CreateSign } from './components/pages/login/createSign.jsx';
import { SeccionCategoria } from './components/pages/categoria/seccionCategoria.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/categoria/:id" element={<SeccionCategoria />} />
        <Route path="/home/login" element={<Sign />} />
        <Route path="/home/login/registro" element={<CreateSign />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
