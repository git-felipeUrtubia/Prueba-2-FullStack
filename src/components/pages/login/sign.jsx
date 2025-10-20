
import { useState } from 'react';
import '../../../assets/styles/sign.css'

export const Sign = () => {

    const [form, setForm] = useState({
        "email": "",
        "passd": ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value.trim()
        })
    }

    const checkCamposVaciosLogin = (form) => {
        for(let element of Object.values(form)) {
            if(!element) {
                return true;
            }
        }
        return false;
    }

    const checkLogin = (form, usuarios) => {
        const {email, passd} = form;

        if(usuarios.length == 0) {
            alert("Usuario no existe ❌")
            return false;
        }

        const user = usuarios.find(
            (u) => u.email == email && u.passd == passd
        )
        if(user) {
            alert("Iniciando sesión... ✅");
            return true;
        }else {
            alert("Email o contraseña incorrectos ❌");
            return false;
        }

    }


    const handleLogin = (e) => {

        e.preventDefault();

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        if(checkCamposVaciosLogin(form)) {
            alert("Todos los campos son obligatorios");
            return
        }else if(checkLogin(form, usuarios)) {
            return
        }

    }

    return (
        <div className='contain-form'>
            <section className='section-header'>
                <a href="/home"> ir a Home</a>
            </section>

            <section className='section-body'>
                <form className="form" onSubmit={handleLogin}>
                    <p className="form-title">Sign in to your account</p>
                        <div className="input-container">
                        <input 
                            type="email" 
                            placeholder="Enter email" 
                            name='email' 
                            value={form.email}
                            onChange={handleChange}
                        />
                        <span>
                        </span>
                    </div>
                    <div className="input-container">
                        <input 
                            type="password" 
                            placeholder="Enter password" 
                            name='passd' 
                            value={form.passd}
                            onChange={handleChange}
                        />
                        </div>
                        <button type="submit" className="submit">Sign in</button>

                    <p className="signup-link">
                        No account?
                        <a href="/home/login/registro">Sign up</a>
                    </p>
                </form>
            </section>

        </div>
    )
}
