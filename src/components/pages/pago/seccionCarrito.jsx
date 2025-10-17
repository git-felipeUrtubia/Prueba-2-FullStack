import { prodSelect } from '../../body/gridCategoria';
import prodJson from '../../../../public/data/prod.json';
import '../../../assets/styles/pago/seccionCarrito.css'
import { useEffect, useState } from 'react';

// CartTemplate.jsx
export const SeccionCarrito = () => {

    const [prod, setProd] = useState([]);
    const [cantidad, setCantidad] = useState({})
    
    let productos = []
    for(let i of prodSelect) {
        productos.push(parseInt(i))
    }

    useEffect(() => {
        setProd(prodJson)
    },[])

    let prodFilter = prod.filter((p) => productos.includes(p.id))

    // console.log("productos recibidos: ", productos)
    // console.log("lista filtrada: ", prodFilter)

    const calcularIva = (precio) => {
        return precio = precio * 0.19
    }

    const calcularTotal = () => {
        let total = 0
        prodFilter.forEach((p) => {
            // console.log(p.precio)
            total = total + p.precio
        })
        return total;
    }


    useEffect(() => {
        setCantidad((prev) => {
            console.log("prev: ", prev)
            const next = {...prev};
            console.log("prev copiado (next): ", next)
            for(const p of prodFilter) {
                console.log("next[p.id] es: ", next[p.id])

                if(next[p.id] == null) next[p.id] = 1;
                console.log("next[p.id] es: ", next[p.id])

            }
            return next
        })
    },[prod]);

    const Increment = (id) => {
        setCantidad((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    }

    const Decrement = (id) => {
        setCantidad((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) - 1
        }));
    }


  return (
    <div className="cart">

        <h1 className="cart__title">Carrito de Compras</h1>

        <div className="cart__table">
            <div className="cart__row cart__row--head">
            <div className="cell cell--img">Imagen</div>
            <div className="cell cell--name">Nombre</div>
            <div className="cell cell--price">Precio</div>
            <div className="cell cell--qty">Cantidad</div>
            <div className="cell cell--subtotal">Iva</div>
            <div className="cell cell--actions">Acciones</div>
        </div>



        {prodFilter.map((p) => {
            const count = cantidad[p.id] || 1;
            return (
                <div id='container' className="cart__row" key={p.id}>
                    <div className="cell cell--img">
                        <img className="thumb" aria-hidden src={p.poster}/>
                    </div>
                    <div className="cell cell--name">{p.titulo}</div>
                    <div className="cell cell--price">${p.precio}</div>
                    <div className="cell cell--qty">
                        <div className="qty producto">
                            <button className="qty__btn" aria-label="Disminuir" onClick={() => Decrement(p.id)}>-</button>
                            <span className="qty__span"> {count} </span>
                            <button className="qty__btn" aria-label="Aumentar" onClick={() => Increment(p.id)}>+</button>
                        </div>
                    </div>
                    <div className="cell cell--subtotal">${calcularIva(p.precio)}</div>
                    <div className="cell cell--actions">
                        <button className="btn btn--danger">Eliminar</button>
                    </div>
                </div>
            )
        })}
            




        <div className="cart__row cart__row--foot">
            <div className="cell cell--totalLabel" aria-hidden />
            <div className="cell cell--totalLabel" aria-hidden />
            <div className="cell cell--totalLabel" aria-hidden />
            <div className="cell cell--totalLabel">Total</div>
            <div className="cell cell--totalValue">${calcularTotal()}</div>
            <div className="cell" aria-hidden /></div>
        </div>

        <div className="cart__actions">
            <button className="btn btn--ghost">Limpiar</button>
            <button className="btn btn--primary">Comprar ahora</button>
        </div>
    </div>
  );
}














