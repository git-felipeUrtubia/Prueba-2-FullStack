
import '../../assets/styles/header.css';




export const Header = () => {
    return (
        <div className='contain-header'>

            <div className='contain-bar-and-buttons'>
                <div className='content-logo'><img src="" alt="logo" /></div>
                <div className='contain-bar-search'>
                    <input type="text" />
                    <button>Buscar</button>
                </div>
                <div className='contain-buttons-sesion'>
                    <button>Iniciar Sesión</button>
                    <button>Crear Cuenta</button>
                </div>
            </div>

            <div className='contain-botones-header'>
                <button className='btn '><b>Home</b></button>
                <button className='btn '>
                    <span>Categorias </span>
                    <span>icon</span>
                </button>
                <button className='btn ofertas'>Ofertas</button>
                <button className='btn nosotros'>Nosotros</button>
                <button className='btn blog'>Blog</button>
                <button className='btn contacto'>Contacto</button>
                <button className='btn carrito'>
                    <span>icon</span>
                    <span> Carrito</span>
                    <span>$5.00</span>
                </button>
            </div>

        </div>
    )
}


