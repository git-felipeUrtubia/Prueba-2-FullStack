
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'
import { ChevronDown } from 'lucide-react';
import '../../../assets/styles/header.css';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [titulo, setTitulo] = useState("");
    const [btnCategoria, setBtnCategoria] = useState(0);
    const [rowRotate, setRowRotate] = useState(0);
    const [prod, setProd] = useState([]);

    useEffect(() => {
        document.documentElement.style.setProperty("--btnCategoria", btnCategoria)
    },[btnCategoria, rowRotate])

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/productos")
            .then(response => response.json())
            .then(data => {
                setProd(data);
            })
            .catch(error => console.error("Error al obtener productos:", error));
    }, []);

    const handleBtnCategoria = () => {
        setBtnCategoria(prev => (prev == 0 ? 1 : 0))
        setRowRotate(prev => (prev == 0 ? 180 : 0))
    }

    const nav = useNavigate();

    const NavCat = (id) => {
        nav(`/categoria/${id}`);
    }

    const NavHome = () => {
        nav("/home");
    }

    const NavPago = () => {
        nav("/home/shopping")
    }

    const NavLogin = () => {
        nav("/home/login");
    }

    const NavRegistro = () => {
        nav("/home/login/registro");
    }

    const NavBlog = () => {
        nav("/home/blog")
    }

    const NavContacto = () => {
        nav("/home/contacto")
    }

    const handleChange = (e) => {
        setTitulo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const titulo_limpio = titulo.trim().toLowerCase();
        if (!titulo_limpio) return;

        const p = prod.find(x => x.nomProducto.trim().toLowerCase() == titulo_limpio);
        if (p) {
            alert(
                `*** ENCONTRADO ***\n` +
                `Título: ${p.nomProducto}\n` +
                `Precio: ${p.precioProducto}\n` +
                `Id: ${p.id_producto}`
            );
        }else {
            alert("No se encontró ningún título con ese nombre.");
        }
    }
    


    return (

        <div className='contain-header'>

            <div className='contain-bar-and-buttons'>

                <div className='content-logo'>
                    <h4>🎮 Level-Up Gamer</h4>
                </div>

                <div className='contain-bar-search'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={titulo} onChange={handleChange} placeholder='Buscar'/>
                        <button type='submit' className='btn-buscar'>Buscar</button>
                    </form>
                </div>

                <div className='contain-buttons-sesion'>
                    <button className='btn btn-outline-primary' onClick={NavLogin}>Iniciar Sesión</button>
                    <button className='btn btn-outline-primary' onClick={NavRegistro}>Crear Cuenta</button>
                </div>

            </div>




            <div className='contain-botones-header'>
                <button className='btn home' onClick={NavHome}><b>Home</b></button>

                
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
                        <div className='option 1' onClick={() => {NavCat(1)}}>
                            <span>suspenso</span>
                        </div>
                        <div className='option 2' onClick={() => {NavCat(2)}}>
                            <span>rpg</span>
                        </div>
                        <div className='option 3' onClick={() => {NavCat(3)}}>
                            <span>shooter</span>
                        </div>
                    </div>
                </div>

                <button className='btn blog' style={{color: "gray"}} onClick={NavBlog}>Blog</button>

                <button className='btn contacto' style={{color: "gray"}} onClick={NavContacto}>Contacto</button>


                <button className='btn carrito' onClick={NavPago}>
                    <span><ShoppingCart style={{color: "white"}}/></span>
                </button>
            </div>

        </div>
    )
}


