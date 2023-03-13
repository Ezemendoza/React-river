import { Link } from "react-router-dom"

const OpcionesPedidosAdmin = ({}) => {

    return (
        <div >
        <ul className="contenedor-lista" >
       
        <Link to={"/admin/productos"}><li className="item-contenedor-lista">Productos</li></Link>
        <Link to={"/admin/usuarios"}> <li className="item-contenedor-lista">usuarios</li></Link>
        <Link to={"/admin/ordenes"}> <li className="item-contenedor-lista"> Ordenes</li></Link>

    </ul>
  
        </div>
     
         )}
      
  

export default OpcionesPedidosAdmin