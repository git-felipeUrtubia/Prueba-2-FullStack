

import { ShoppingCart } from 'lucide-react'
import { ChevronDown } from 'lucide-react';
import '../../assets/styles/header.css';
import { useEffect, useState } from 'react';

export const Header = () => {

    const [btnCategoria, setBtnCategoria] = useState(0);
    const [rowRotate, setRowRotate] = useState(0);

    useEffect(() => {
        document.documentElement.style.setProperty("--btnCategoria", btnCategoria)
    },[btnCategoria, rowRotate])

    const handleBtnCategoria = () => {
        setBtnCategoria(prev => (prev == 0 ? 1 : 0))
        setRowRotate(prev => (prev == 0 ? 180 : 0))
    }


    return (
        <div className='contain-header'>

            <div className='contain-bar-and-buttons'>
                <div className='content-logo'>40x40</div>
                <div className='contain-bar-search'>
                    <input type="text" placeholder='Buscar'/>
                    <button className='btn-buscar'>Buscar</button>
                </div>
                <div className='contain-buttons-sesion'>
                    <button className='btn btn-outline-primary'>Iniciar Sesión</button>
                    <button className='btn btn-outline-primary'>Crear Cuenta</button>
                </div>
            </div>




            <div className='contain-botones-header'>
                <button className='btn home'><b>Home</b></button>

                
                <div className='contain-btn-categoria'>
                    <button className='btn categorias' onClick={handleBtnCategoria}>
                        <span style={{color: "gray"}}>Categorias </span>
                        <span><ChevronDown style={{
                            color: "grey", 
                            transform: `rotate(${rowRotate}deg)`,
                            transition: ".3s ease"
                        }}/></span>
                    </button>
                    <div className='options'>
                        <div className='option 1'>
                            <span>Opcion 1</span>
                        </div>
                        <div className='option 2'>
                            <span>Opcion 2</span>
                        </div>
                        <div className='option 3'>
                            <span>Opcion 3</span>
                        </div>
                    </div>
                </div>


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


