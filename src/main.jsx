import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App.jsx'
import { Sign } from './components/pages/login/sign.jsx';
import { CreateSign } from './components/pages/login/createSign.jsx';
import { SeccionCategoria } from './components/pages/categoria/seccionCategoria.jsx';
import { SeccionCarrito } from './components/pages/pago/seccionCarrito.jsx';
import { FormPago } from './components/pages/pago/formPago.jsx';
import { Blog } from './components/pages/w-osorio/pages/Blog.jsx'; 
import { Contacto } from './components/pages/w-osorio/pages/Contacto.jsx';
import { Perfil } from './components/pages/login/perfil.jsx';
import { Pedidos } from './components/pages/pedidos/pedidos.jsx';
import { UpdatePassd } from './components/pages/login/updatePassd.jsx';
import { ResetPassword } from './components/pages/login/resetPassword.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<App />} />
        <Route path="/categoria/:id" element={<SeccionCategoria />} />
        <Route path="/home/shopping" element={<SeccionCarrito />} />
        <Route path="/home/login" element={<Sign />} />
        <Route path="/home/login/registro" element={<CreateSign />} />
        <Route path="/home/perfil" element={<Perfil />} />
        <Route path="/home/shopping/pago" element={<FormPago />} />
        <Route path="/home/blog" element={<Blog />} />
        <Route path="/home/contacto" element={<Contacto />} />
        <Route path="/home/perfil/pedidos" element={<Pedidos />} />
        <Route path="/home/perfil/password" element={<UpdatePassd />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)



