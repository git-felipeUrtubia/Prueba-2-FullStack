
import '../../assets/styles/gridCategorias.css'
import { useEffect, useState } from 'react'
import data from '../../../public/data/prod.json'

export let prodSelect = []

export const GridCategoria = () => {
    const [prod, setProd] = useState([])

    useEffect(() => {
        setProd(data);
    },[])

    const handleClick = (e) => {
        let id = e.currentTarget.dataset.id;
        prodSelect.push(id)
        console.log(prodSelect)
    }

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
                            <button 
                                className='btn btn-primary add-carro'
                                data-id={p.id}
                                onClick={ handleClick }
                            >Añadir</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

