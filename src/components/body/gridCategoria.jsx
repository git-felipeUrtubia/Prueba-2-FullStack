
import '../../assets/styles/gridCategorias.css'
import { useEffect, useState } from 'react'
import data from '../../../public/data/prod.json'


export const GridCategoria = () => {
    const [prod, setProd] = useState([])

    useEffect(() => {
        setProd(data);
    },[])

    return (
        <div className='content-categorias'>

            <div className='grid-categorias'>
                {prod.map((p) => (
                    <div key={p.id} className='card'>
                        <img src={p.poster} alt={p.titulo} className='card-img-top'/>
                        <div className='card-body'>
                            <h5 className='card-title'>{p.titulo}</h5>
                            <p className='card-text'>{p.desc}</p>
                            <span>${p.precio}</span>
                            <a href="#" className='btn btn-primary add-carro'>Añadir</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

