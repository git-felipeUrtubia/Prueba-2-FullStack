
import { useEffect } from 'react';
import '../../../assets/styles/perfil.css';
import axios from 'axios';

export const Perfil = () => {
    const data = JSON.parse(localStorage.getItem("token"));

    const handleClickPedidos = () => {
        const token = JSON.parse(localStorage.getItem("token"))
        axios.get(`http://localhost:8080/api/v1/pedidos/${token.token}`)
            .then(response => {

                const data = response.data;
                localStorage.setItem("data_pedidos", JSON.stringify(data))

            }).catch(error => {
                console.log("Error: ", error)
            })
    }


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
                    <a href="/home/perfil/pedidos" onClick={ handleClickPedidos() }>ver pedidos</a>
                </div>
            </div>
            
            <footer className="footer-card-perfil">
                <p class="footer-copy">© 2025 LevelUp Store — Todos los derechos reservados.</p>
            </footer>
        </section>
    )
}





