
import { useEffect } from 'react';
import '../../../assets/styles/perfil.css';

export const Perfil = () => {
        const data = JSON.parse(localStorage.getItem("token"));


    return (
        <section className="card-perfil">
            <div className="header-card-perfil">
                <div className="img-card-perfil">
                    <img src="" alt="" />
                </div>
                <div className="titles-card-perfil">
                    <span className="email-card-perfil">{`Email: ${data.user.emailUser}`}</span>
                    <span className="role-card-perfil">{`Role: ${data.user.rolUser}`}</span>
                </div>
                <div className='buttons-card-perfil'>
                    <a href="/home">¿ir al catalogo?</a>
                    <a href="/home" onClick={() => localStorage.clear()}>Cerrar Sesión</a>
                    <a href="#">ver pedidos</a>
                </div>
            </div>
            <div className="body-card-perfil">
                Historial de compras
            </div>
            <footer className="footer-card-perfil">
                Algun color de fondo
            </footer>
        </section>
    )
}





