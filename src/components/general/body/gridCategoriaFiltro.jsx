
import '../../../assets/styles/gridCategorias.css'
import '../../../assets/styles/gridCategoriaFiltro.css'
import { useEffect, useState } from 'react'


export const GridCategoriaFiltro = ({ id }) => {
    const [prod, setProd] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/productos")
            .then(response => response.json())
            .then(data => {
                setProd(data);
            })
            .catch(error => console.error("Error al obtener productos:", error));
    }, []);

    let prodFilter = []
    let cat = ""
    switch(id) {
        case 1 : 
            prodFilter = prod.filter((p) => p.catProducto == "suspenso")
            cat = "Suspenso"
            break;
        case 2 : 
            prodFilter = prod.filter((p) => p.catProducto == "RPG")
            cat = "RPG"
            break;
        case 3 :
            prodFilter = prod.filter((p) => p.catProducto == "shooter")
            cat = "Shooter"
            break;
        default :
            return <h2>No hay Titulos para esta categoria</h2>
    }
    
    return (
        <div className='content-categorias'>
            <div className='title-cat-filter'>
                <h2>{cat}</h2>
            </div>
            <div className='grid-categorias'>
                {prodFilter.map((p) => (
                    <div key={p.id_producto} className='card'>
                        <img src={p.posterProducto} alt={p.nomProducto} className='card-img-top'/>
                        <div className='card-body'>
                            <h5 className='card-title'>{p.nomProducto}</h5>
                            <p className='card-text'>{p.descProducto}</p>
                            <span>${p.precioProducto}</span>
                            <a href="#" className='btn btn-primary add-carro'>Añadir</a>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

