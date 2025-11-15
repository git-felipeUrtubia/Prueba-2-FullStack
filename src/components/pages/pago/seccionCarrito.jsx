import { prodSelect } from '../../general/body/gridCategoria';
import '../../../assets/styles/pago/seccionCarrito.css'
import { useEffect, useState } from 'react';

export const calcularIva = (precio, cant) => {
    return precio * cant * 0.19
}

export const calcularTotal = (prodFilter, cantidad) => {
    let total = 0
    for(let p of prodFilter) {
        let cant = cantidad[p.id_producto] || 1     
        total = total + p.precioProducto * cant         
    }
    return total;
}

export const calcularPrecioProd = (precio, cantidad) => {
    console.log(precio, cantidad)
    precio = precio * cantidad
    return precio
}

export const SeccionCarrito = () => {

    const [prod, setProd] = useState([]);
    const [cantidad, setCantidad] = useState({})
    
    let productos = []
    for(let i of prodSelect) {
        productos.push(parseInt(i))
    }

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/productos")
            .then(response => response.json())
            .then(data => {
                setProd(data);
            })
            .catch(error => console.error("Error al obtener productos:", error));
    }, []);


    let prodFilter = prod.filter((p) => productos.includes(p.id_producto))

    useEffect(() => {
        setCantidad((prev) => {
            const next = {...prev};
            for(const p of prodFilter) {
                if(next[p.id_producto] == null) next[p.id_producto] = 1;
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

    const EliminarProd = (id) => {
        const nuevaLista = prod.filter((p) => p.id_producto !== id)
        setProd(nuevaLista)
    }

    const LocalStorage = (total) => {
        localStorage.setItem("total", total);
        const sinDuplicados = [...new Set(Productos)];
        localStorage.setItem("productos", JSON.stringify(sinDuplicados));
    }
    
    const Productos = JSON.parse(localStorage.getItem("productos")) || [];

  return (
    <div className="cart">
        <a href="/home">ir a home</a>

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
            const count = cantidad[p.id_producto] || 1;
            const iva = calcularIva(p.precioProducto, count);
            const precio = calcularPrecioProd(p.precioProducto, cantidad[p.id_producto]);

            const prodSubmit = {
                "id_producto": p.id_producto,
                "cant_producto": count
            }
            Productos.push(prodSubmit)

            console.log("este es el precio: " + precio)

            return (
                <div id='container' className="cart__row" key={p.id_producto}>
                    <div className="cell cell--img">
                        <img className="thumb" aria-hidden src={p.posterProducto}/>
                    </div>
                    <div className="cell cell--name">{p.nomProducto}</div>
                    <div className="cell cell--price">${precio}</div>
                    <div className="cell cell--qty">
                        <div className="qty producto">
                            <button className="qty__btn" aria-label="Disminuir" onClick={() => Decrement(p.id_producto)}>-</button>
                            <span className="qty__span"> {count} </span>
                            <button className="qty__btn" aria-label="Aumentar" onClick={() => Increment(p.id_producto)}>+</button>
                        </div>
                    </div>
                    <div className="cell cell--subtotal">${iva}</div>
                    <div className="cell cell--actions">
                        <button className="btn btn--danger" onClick={() => EliminarProd(p.id_producto)}>Eliminar</button>
                    </div>
                </div>
            )
        })}
            




        <div className="cart__row cart__row--foot">
            <div className="cell cell--totalLabel" aria-hidden />
            <div className="cell cell--totalLabel" aria-hidden />
            <div className="cell cell--totalLabel" aria-hidden />
            <div className="cell cell--totalLabel">Total</div>
            <div className="cell cell--totalValue">${calcularTotal(prodFilter, cantidad)}</div>
            <div className="cell" aria-hidden /></div>
        </div>

        <div className="cart__actions">
            <a href='/home/shopping/pago' className="btn btn--primary" onClick={() => LocalStorage( calcularTotal(prodFilter, cantidad) )}>Comprar ahora</a>
        </div>
    </div>
  );
}














