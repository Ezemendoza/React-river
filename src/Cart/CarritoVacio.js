import { Link } from "react-router-dom"

const carritoVacio = () => {

    return (
        <div className="container my-5">
            <h2>Todavia no has comprado</h2>
            <hr/>

            <Link to="/" className="btn btn-primary">Ir a comprar</Link>
        </div>
    )
}

export default carritoVacio