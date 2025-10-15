
import { useState } from 'react'
import '../../../assets/styles/createSign.css'

export const CreateSign = () => {

    const [form, setForm] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "passd": "" ,
        "passd_conf": ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            first_name: name == "first_name" ? value : form.first_name,
            last_name: name == "last_name" ? value : form.last_name,
            email: name == "email" ? value : form.email,
            passd: name == "passd" ? value : form.passd,
            passd_conf: name == "passd_conf" ? value : form.passd_conf
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // evita que se recargue la página

        // Mostrar valores de manera explícita
        console.log("Nombre:", form.first_name);
        console.log("Apellido:", form.last_name);
        console.log("Email:", form.email);
        console.log("Password:", form.passd);
        console.log("Confirmación Password:", form.passd_conf);

        // Guardar en Local Storage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        if (!form.first_name || !form.last_name || !form.email) {
            alert("Todos los campos son obligatorios");
            return;
        }

        if (form.passd !== form.passd_conf) {
            alert("Las contraseñas no coinciden");
            return;
        }

        usuarios.push({
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            passd: form.passd,
            passd_conf: form.passd_conf
        });

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Usuario registrado con éxito ✅");

        // Reiniciar formulario
        setForm({
            first_name: "",
            last_name: "",
            email: "",
            passd: "",
            passd_conf: ""
        });
    };


    return (
        <div className='contain-create-sign'>
        
            <form class="form" onSubmit={handleSubmit}>
                <p class="title">Register </p>
                <p class="message">Signup now and get full access to our app. </p>
                    <div class="flex">
                    <label>
                        <input required="" placeholder="" type="text" name='first_name' value={form.first_name} onChange={handleChange} class="input" />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" name='last_name' value={form.last_name} onChange={handleChange} class="input" />
                        <span>Lastname</span>
                    </label>
                </div>  
                        
                <label>
                    <input required="" placeholder="" type="email" name='email' value={form.email} onChange={handleChange} class="input" />
                    <span>Email</span>
                </label> 
                    
                <label>
                    <input required="" placeholder="" type="password" name='passd' value={form.passd} onChange={handleChange} class="input" />
                    <span>Password</span>
                </label>
                <label>
                    <input required="" placeholder="" type="password" name="passd_conf" value={form.passd_conf} onChange={handleChange} class="input" />
                    <span>Confirm password</span>
                </label>
                <button class="submit">Submit</button>
                <p class="signin">Already have an acount ? <a href="/home/login">Signin</a> </p>
            </form>

        </div>
    )
}
