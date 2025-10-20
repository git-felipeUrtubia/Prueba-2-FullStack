

import { useState } from 'react';
import '../../../assets/styles/pago/FormPago.css'


export const FormPago = () => {

    const [form, setForm] = useState({
        "num_tarjeta": "",
        "exp_tarjeta": "",
        "cvv_tarjeta": ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value.trim()
        })
    }

    const checkNumTrajeta = (form) => {
        const { num_tarjeta } = form;
        const regex = /^[0-9]+$/;
        console.log(num_tarjeta.length)
        
        if(!regex.test(num_tarjeta)) {
            alert("Ingrese solo valores numericos")
            return true;
        } 

        if(num_tarjeta.length != 16) {
            alert("Revisa tu número de tarjeta, debe contener 16 dígitos.")
            return true;
        }
    }

    const checkExpTarjeta = (form) => {
        const { exp_tarjeta } = form;
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        
        if(!regex.test(exp_tarjeta)) {
            alert("Formato inválido. Use MM/YY.")
            return true;
        }
    }

    const checkCVVTarjeta = (form) => {
        const { cvv_tarjeta } = form;
        const regex = /^[0-9]{3}$/;
        if(!regex.test(cvv_tarjeta)) {
            alert("Ups, revisa tu CVV. Debe tener 3 números.");
            return true;
        }
    }


    const submitForm = (e) => {
        e.preventDefault();
        
        // console.log(form)

        if(checkNumTrajeta(form)) {
            return
        }else if(checkExpTarjeta(form)) {
            return
        }else if(checkCVVTarjeta(form)) {
            return
        }else {
            alert("Pago realizado con éxito.");
        }

    }

    return (
        <>
            <div className='content-volver'>
                <a href="/home/shopping">volver</a>
            </div>
            <div className="main">
                <div className="header"></div>
                <div className="card">
                    <div className="card__title">Completa tu Pago</div> 
                    <form className="card__form" onSubmit={submitForm}>

                        <input className="field field--card" 
                            placeholder='Numero de tarjeta' 
                            name='num_tarjeta' 
                            value={form.num_tarjeta} 
                            onChange={handleChange}
                        />

                        <input className="field field--estimate" 
                            placeholder='Expiracion' 
                            name='exp_tarjeta' 
                            value={form.exp_tarjeta}
                            onChange={handleChange}
                        />

                        <input className="field field--code" 
                            placeholder='CVV' 
                            name='cvv_tarjeta' 
                            value={form.cvv_tarjeta} 
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-outline-primary" style={{borderColor: "blue"}}>Pagar</button>
                    </form>
                    <p className="agreement">Al continuar aceptas nuestros<a className='btn-terminos' href="www.google.com"> Términos y Condiciones</a></p>
                </div>
            </div>
        </>
    )
};
