
import '../../assets/styles/header.css';




export const Header = () => {
    return (
        <div className='contain-header'>
            <div className='contain-bar-and-buttons'>
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
                <button>Home</button>
                <button>
                    <span>Categorias</span>
                    <span>icon</span>
                </button>
                <button>Ofertas</button>
                <button>Nosotros</button>
                <button>Blog</button>
                <button>Contacto</button>
                <button>
                    <span>icon</span>
                    <span>Carrito</span>
                    <span>$5.00</span>
                </button>
            </div>
        </div>
    )
}


