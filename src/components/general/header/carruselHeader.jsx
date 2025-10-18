
import '../../../assets/styles/carruselHeader.css'
import cof from '../../../../public/img/callOfDuty.jpeg'
import elden from '../../../../public/img/eldenRing.jpg'
import silent from '../../../../public/img/silentHill.jpg'

export const CarruselHeader = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={cof} className="d-block w-100" alt="img 1"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Call Of Duty</h5>
                        <p>Acción bélica intensa con combates en primera persona.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={silent} className="d-block w-100" alt="img 2"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Silent Hill</h5>
                        <p>Horror psicológico en una ciudad cubierta de niebla y misterio.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={elden} className="d-block w-100" alt="img 3"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Elden Ring</h5>
                        <p>Un mundo abierto desafiante y lleno de fantasía oscura.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

