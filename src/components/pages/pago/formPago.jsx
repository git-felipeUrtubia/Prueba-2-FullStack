import { useEffect, useState } from 'react';
import '../../../assets/styles/pago/FormPago.css'
import axios from "axios"



export const FormPago = () => {

    const [monto, setMonto] = useState(0);
    const [fechaPago, setFechaPago] = useState("");
    const [metodoPago, setMetodoPago] = useState("");
    const [checkForm, setCheckForm] = useState(false);

    const total = localStorage.getItem("total");
    // console.log("TOTAL A PAGAR:", total);

    const productos = JSON.parse(localStorage.getItem("productos"));
    // console.log(productos);



    useEffect(() => {

        setMonto(total);
        setFechaPago(new Date().toLocaleDateString("es-CL"));

    }, [total])

    const prodJson = productos.map(p => ({
        id_prod: p.id_producto,
        cant: p.cant_producto
    }));

    const [formCli, setFormCli] = useState({
        "first_name_cli": "",
        "last_name_cli": ""
    })

    const [form, setForm] = useState({
        "num_tarjeta": "",
        "exp_tarjeta": "",
        "cvv_tarjeta": ""
    })

    const handleChangeCli = (e) => {
        const { name, value } = e.target;
        setFormCli({
            ...formCli,
            [name]: value.trim()
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value.trim()
        })
    }

    const checkMetodoPago = () => {
        if(metodoPago == "") {
            alert("Debes seleccionar una opción: crédito o débito.")
            return false
        }
        return true
    }

    const checkNumTrajeta = (form) => {
        const { num_tarjeta } = form;
        const regex = /^[0-9]+$/;
        console.log(num_tarjeta.length)

        if (!regex.test(num_tarjeta)) {
            alert("Ingrese solo valores numericos")
            return true;
        }

        if (num_tarjeta.length != 16) {
            alert("Revisa tu número de tarjeta, debe contener 16 dígitos.")
            return true;
        }
    }

    const checkExpTarjeta = (form) => {
        const { exp_tarjeta } = form;
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;

        if (!regex.test(exp_tarjeta)) {
            alert("Formato inválido. Use MM/YY.")
            return true;
        }
    }

    const checkCVVTarjeta = (form) => {
        const { cvv_tarjeta } = form;
        const regex = /^[0-9]{3}$/;
        if (!regex.test(cvv_tarjeta)) {
            alert("Ups, revisa tu CVV. Debe tener 3 números.");
            return true;
        }
    }


    const submitForm = (e) => {
        e.preventDefault();

        // console.log(form)

        if (checkNumTrajeta(form)) {
            return
        }else if(!checkMetodoPago()) {
            return
        } else if (checkExpTarjeta(form)) {
            return
        } else if (checkCVVTarjeta(form)) {
            return
        } else {
            setCheckForm(true)
        }

    }

    const checkCamposVaciosNameCli = (form) => {
        for (let i of Object.values(form)) {
            if (!i) {
                return false;
            }
        }
        return true;
    }

    const submitFormCli = (e) => {

        e.preventDefault();

        if (!checkCamposVaciosNameCli(formCli)) {
            alert("Todos los campos son obligatorios");
            return
        }

    }

    console.log(productos)
    console.log(prodJson)

    console.log({
        "cliente": {
            "first_name_cli": formCli.first_name_cli,
            "last_name_cli": formCli.last_name_cli
        },
        "detalle_pedidos": prodJson,
        "pago": [
            {
                "monto_total": parseInt(monto),
                "fecha_pago": fechaPago,
                "metodo_pago": metodoPago
            }
        ]
    })

    const onClickPagar = () => {

        if (checkForm) {

            axios.post("http://localhost:8080/api/v1/pedidos", {

                cliente: {
                    "first_name_cli": formCli.first_name_cli,
                    "last_name_cli": formCli.last_name_cli
                },
                detalle_pedidos: prodJson,
                pago: [
                    {
                        "monto_total": parseInt(monto),
                        "fecha_pago": fechaPago,
                        "metodo_pago": metodoPago
                    }
                ]

            })
                .then(response => {
                    console.log("OK:", response.data);

                    alert("Pago realizado con éxito.");

                    localStorage.setItem("total", 0);
                    localStorage.setItem("productos", JSON.stringify([]));
                })
                .catch(error => {
                    console.error("Error:", error);
                });

        }
    }

    return (
        <>
            <div className='content-volver'>
                <a href="/home/shopping"
                    onClick={() => {
                        localStorage.setItem("total", 0);
                        localStorage.setItem("productos", JSON.stringify([]));
                    }}
                >volver</a>
            </div>
            <div className="main">
                <div className="header"></div>
                <div className="card">
                    <div className="card__title">Completa tu Pago</div>
                    <form className="content-cart" onSubmit={submitFormCli}>

                        <div className='content-buttons-cart'>
                            <div className={`metodo ${metodoPago == "debito" ? "active" : ""}`} onClick={() => setMetodoPago("debito")}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffff" className="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1" />
                                </svg>
                                debit

                            </div>

                            <div className={`metodo ${metodoPago == "credito" ? "active" : ""}`} onClick={() => setMetodoPago("credito")}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffff" className="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                                    <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                                </svg>
                                credit

                            </div>
                        </div>

                        <div className='contents-inputs-cliente'>

                            <input className="field field--card input-cliente" type="text"
                                placeholder='Nombre'
                                required
                                name='first_name_cli'
                                value={formCli.first_name_cli}
                                onChange={handleChangeCli}
                            />

                            <input className="field field--card input-cliente" type="text"
                                placeholder='Apellido'
                                required
                                name='last_name_cli'
                                value={formCli.last_name_cli}
                                onChange={handleChangeCli}
                            />

                        </div>


                    </form>
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
                        <button type="submit" className="btn btn-outline-primary"
                            style={{ borderColor: "blue" }}
                            onClick={onClickPagar}
                        >Pagar</button>
                    </form>
                    <p className="agreement">Al continuar aceptas nuestros<a className='btn-terminos' href="www.google.com"> Términos y Condiciones</a></p>
                </div>
            </div>
        </>
    )
}
