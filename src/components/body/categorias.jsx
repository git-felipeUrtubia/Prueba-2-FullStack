
import '../../assets/styles/categorias.css'
import cof from '../../../public/callOfDuty.jpeg'
import elden from '../../../public/eldenRing.jpg'
import silent from '../../../public/silentHill.jpg'



export const Categorias = () => {
    return (
        <div className='content-categorias'>
            <h1>Categorías</h1>
            <div className='grid-categorias'>
                <div className="card">
                    <img src={elden} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">Elden Ring</h5>

                        <p className="card-text">Un RPG de acción en mundo abierto desarrollado por FromSoftware y publicado por Bandai Namco. Combina el estilo de combate desafiante de la saga Dark Souls con un enorme mundo de exploración lleno de castillos, mazmorras y criaturas fantásticas. La historia fue creada en colaboración con George R. R. Martin.</p>
                        <span>$69.990</span>
                        <a href="#" className="btn btn-primary add-carro">Añadir</a>
                    </div>
                </div>
                <div className="card">
                    <img src={silent} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">Silent hill</h5>

                        <p className="card-text">Una serie de videojuegos de terror psicológico y supervivencia creada por Konami. Es conocida por su atmósfera opresiva, acertijos inquietantes y criaturas grotescas que representan traumas y miedos. El jugador suele recorrer la misteriosa y neblinosa ciudad de Silent Hill, enfrentando horrores tanto físicos como psicológicos.</p>
                        <span>$25.990</span>
                        <a href="#" className="btn btn-primary add-carro">Añadir</a>
                    </div>
                </div>
                <div className="card">
                    <img src={cof} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">Call of Duty</h5>

                        <p className="card-text">Una popular franquicia de videojuegos de disparos en primera persona (FPS). Originalmente ambientada en la Segunda Guerra Mundial, con el tiempo se expandió a conflictos modernos, futuristas y hasta temáticas bélicas ficticias. Es famosa por su campaña cinematográfica y, sobre todo, por su modo multijugador competitivo.</p>
                        <span>$80.590</span>
                        <a href="#" className="btn btn-primary add-carro">Añadir</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

