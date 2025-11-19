
import { useState } from 'react'
import '../../../assets/styles/createSign.css'
import axios from "axios"

export const CreateSign = () => {

    const [form, setForm] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "passd": "",
        "passd_conf": ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const checkCamposVacios = (form) => {
        for (let element of Object.values(form)) {
            if (!element) {
                return true;
            }
        }
        return false;
    }

    const checkPassdNoCoincide = (form) => {
        const { passd, passd_conf } = form;
        if (passd != passd_conf) {
            return true
        }
        return false
    }

    const checkFormatoEmail = (form) => {
        let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        const { email } = form
        if (!regex.test(email)) {
            return true
        }
        return false
    }

    const checkFirsAndLastName = () => {
        const regex = /^[a-zA-Z\s]+$/;
        const { first_name, last_name } = form;

        if (!regex.test(first_name)) {
            alert("El nombre no puede contener números ni caracteres especiales");
            return true;
        }

        if (!regex.test(last_name)) {
            alert("El apellido no puede contener números ni caracteres especiales");
            return true;
        }

        return false;
    }

    const checkLengthPassd = (form) => {
        const { passd } = form;
        if (passd.length < 5) {
            alert("La contraseña debe tener minimo 5 caracteres")
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Nombre:", form.first_name);
        console.log("Apellido:", form.last_name);
        console.log("Email:", form.email);
        console.log("Password:", form.passd);
        console.log("Confirmación Password:", form.passd_conf);


        if (form.passd != form.passd_conf) {
            alert("Las contraseñas no coinciden");
            return;
        }


        if (checkCamposVacios(form)) {
            alert("Todos los campos son obligatorios");
            return
        } else if (checkPassdNoCoincide(form)) {
            alert("Contraseñas no coinciden")
            return
        } else if (checkFormatoEmail(form)) {
            alert("Ingrese un formato de email valido")
            return
        } else if (checkFirsAndLastName(form)) {
            return
        } else if (checkLengthPassd(form)) {
            return
        }


        // *********************************************************


        axios.post("http://localhost:8080/api/v1/users", {

            firstNameUser : "",
            lastNameUser: "",
            emailUser: form.email,
            passwordUser: form.passd,
            rolUser: "user",
            cliente: {
                firstName: form.first_name,
                lastName: form.last_name
            }

        })
            .then(response => {
                console.log("OK:", response.data);
                alert("Usuario registrado con éxito ✅");
                setForm({
                    first_name: "",
                    last_name: "",
                    email: "",
                    passd: "",
                    passd_conf: ""
                });
            })
            .catch(error => {
                console.error("Error:", error);
            });


    };


    return (
        <div className='contain-create-sign'>

            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                    <label>
                        <input required="" placeholder="" type="text" name='first_name' value={form.first_name} onChange={handleChange} className="input" />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" name='last_name' value={form.last_name} onChange={handleChange} className="input" />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input
                        required=""
                        placeholder=""
                        type="email"
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        className="input" />
                    <span>Email</span>
                </label>

                <label>
                    <input required="" placeholder="" type="password" name='passd' value={form.passd} onChange={handleChange} className="input" />
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" name="passd_conf" value={form.passd_conf} onChange={handleChange} className="input" />
                    <span>Confirm password</span>
                </label>

                <button className="submit" type='submit' >Submit</button>

                <p className="signin">Already have an acount ? <a href="/home/login">Signin</a> </p>
            </form>

        </div>
    )
}
