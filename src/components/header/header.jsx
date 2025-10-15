

import { ShoppingCart } from 'lucide-react'
import { ChevronDown } from 'lucide-react';
import '../../assets/styles/header.css';




export const Header = () => {
    return (
        <div className='contain-header'>

            <div className='contain-bar-and-buttons'>
                <div className='content-logo'>40x40</div>
                <div className='contain-bar-search'>
                    <input type="text" placeholder='Buscar'/>
                    <button className='btn-buscar'>Buscar</button>
                </div>
                <div className='contain-buttons-sesion'>
                    <button>Iniciar Sesión</button>
                    <button>Crear Cuenta</button>
                </div>
            </div>

            <div className='contain-botones-header'>
                <button className='btn home'><b>Home</b></button>
                <button className='btn categorias'>
                    <span style={{color: "gray"}}>Categorias </span>
                    <span><ChevronDown style={{color: "grey"}}/></span>
                </button>
                <button className='btn ofertas' style={{color: "gray"}}>Ofertas</button>
                <button className='btn nosotros' style={{color: "gray"}}>Nosotros</button>
                <button className='btn blog' style={{color: "gray"}}>Blog</button>
                <button className='btn contacto' style={{color: "gray"}}>Contacto</button>
                <button className='btn carrito' style={{color: "gray"}}>
                    <span><ShoppingCart style={{color: "white"}}/></span>
                    <span>Carrito</span>
                    <span>$5.00</span>
                </button>
            </div>

        </div>
    )
}


