
import { Header } from "../../general/header/header.jsx"
import { GridCategoriaFiltro } from "../../general/body/gridCategoriaFiltro.jsx"
import { useParams } from "react-router-dom"

export const SeccionCategoria = () => {

    const { id } = useParams();
    const id_cat = parseInt(id, 10);
    console.log(id_cat)
    return (
        <div>
            <Header />
            <div className="bodyTerror">
                <GridCategoriaFiltro id={id_cat}/> 
            </div>
        </div>
    )
}





