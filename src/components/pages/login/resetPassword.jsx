
import axios from 'axios';
import '../../../assets/styles/resetPassword.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export const ResetPassword = () => {

    const [passd, setPassd] = useState("");

    const params = new URLSearchParams(window.location.search);
    const tokenPath = params.get("token");
    console.log(tokenPath)

    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8080/api/v1/passd/auth/reset-password', {

            token: tokenPath,
            newPassword: passd

        }).then(response => {

            console.log(response.data)
            nav("/home/login")


        }).catch(error => {
            console.log("Error: ", error)
        })

    }


    return (
        <div className='card_padre'>
            <div class="login-card">
                <div class="card-header">
                    <h1>Restablecer contraseña</h1>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="password">Nueva contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="passd"
                                value={passd}
                                required=""
                                onChange={(e) => setPassd(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <button type="submit" class="login-button">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}