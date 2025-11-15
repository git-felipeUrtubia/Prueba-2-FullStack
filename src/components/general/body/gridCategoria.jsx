
import '../../../assets/styles/gridCategorias.css'
import { useEffect, useState } from 'react'

export let prodSelect = []

export const GridCategoria = () => {
    const [prod, setProd] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/productos")
            .then(response => response.json())
            .then(data => {
                setProd(data);
            })
            .catch(error => console.error("Error al obtener productos:", error));
    }, []);

    const handleClick = (e) => {
        let id = e.currentTarget.dataset.id;
        prodSelect.push(id)
        console.log(prodSelect)
    }

    return (
        <div className='content-categorias'>

            <div className='grid-categorias'>
                {prod.map((p) => (
                    <div key={p.id_producto} className='card'>
                        <img src={p.posterProducto} alt={p.nomProducto} className='card-img-top' />
                        <div className='card-body'>
                            <h5 className='card-title'>{p.nomProducto}</h5>
                            <p className='card-text'>{p.descProducto}</p>
                            <span>${p.precioProducto}</span>
                            <button
                                className='btn btn-primary add-carro'
                                data-id={p.id_producto}
                                onClick={handleClick}
                            >Añadir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

