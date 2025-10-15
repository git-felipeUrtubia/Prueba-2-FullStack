
import '../../assets/styles/gridCategorias.css'
import '../../assets/styles/gridCategoriaFiltro.css'
import { useEffect, useState } from 'react'
import data from '../../../public/data/prod.json'


export const GridCategoriaFiltro = ({ id }) => {
    const [prod, setProd] = useState([])

    useEffect(() => {
        setProd(data);
    },[])

    let prodFilter = []
    let cat = ""
    switch(id) {
        case 1 : 
            prodFilter = prod.filter((p) => p.cat == "suspenso")
            cat = "Suspenso"
            break;
        case 2 : 
            prodFilter = prod.filter((p) => p.cat == "RPG")
            cat = "RPG"
            break;
        case 3 :
            prodFilter = prod.filter((p) => p.cat == "shooter")
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

                 
                {/*
                <div className="card">
                    <img src={cof} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">Call of Duty</h5>

                        <p className="card-text">Una popular franquicia de videojuegos de disparos en primera persona (FPS). Originalmente ambientada en la Segunda Guerra Mundial, con el tiempo se expandió a conflictos modernos, futuristas y hasta temáticas bélicas ficticias. Es famosa por su campaña cinematográfica y, sobre todo, por su modo multijugador competitivo.</p>
                        <span>$80.590</span>
                        <a href="#" className="btn btn-primary add-carro">Añadir</a>
                    </div>
                </div> */}


            </div>
        </div>
    )
}

