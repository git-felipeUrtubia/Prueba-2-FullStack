import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../../assets/styles/sign.css'
import axios from "axios"


export const Sign = () => {

    const nav = useNavigate();

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
        for (let element of Object.values(form)) {
            if (!element) {
                return true;
            }
        }
        return false;
    }

    const handleLogin = (e) => {

        e.preventDefault();

        if (checkCamposVaciosLogin(form)) {
            alert("Todos los campos son obligatorios");
            return
        }



        axios.get(`http://localhost:8080/api/v1/tokens/${form.email}/${form.passd}`)

            .then(response => {

                if (response.data) {
                    alert("Iniciando sesión... ✅");
                    localStorage.setItem("token", JSON.stringify(response.data));
                    nav("/home");
                } else {
                    alert("Email o contraseña incorrectos ❌");
                }       

            }).catch(error => {
                console.log("Error: ", error)
            })

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

                    <div className='contain-reset-passd'>
                        <span>
                            <a href="/home/perfil/password">¿Olvidaste contraseña?</a>
                        </span>
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
