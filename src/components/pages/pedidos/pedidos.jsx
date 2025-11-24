import '../../../assets/styles/pedidos.css'






export const Pedidos = () => {


    const data_pedidos = JSON.parse(localStorage.getItem("data_pedidos")); 

    return (
        <section className="sec-pedidos">
            {data_pedidos.map((pedido, index) => (

                <div className="table_pedidos">
                    <h3>N° Pedido: {index + 1} ({pedido.estado})</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">N°</th>
                                <th scope="col">Produto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cant</th>
                                <th scope="col">Categoría</th>
                            </tr>
                        </thead>
                        <tbody>

                            {pedido.detalle.map((det) =>
                                det.producto.map((prod, i) => (

                                    <tr>
                                        <td scope="row">{i + 1}</td>

                                        <td>{prod.nomProducto}</td>
                                        <td>{prod.precioProducto}</td>
                                        <td>{det.cantidad}</td>
                                        <td>{prod.catProducto}</td>
                                    </tr>

                                )))}


                        </tbody>
                    </table>
                </div>
            ))}

            <a href="/home/perfil">Volver</a>
        </section>
    )

}