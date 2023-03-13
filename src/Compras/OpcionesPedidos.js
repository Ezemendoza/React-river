import { Link } from "react-router-dom"
import "./OpcionesPedidos.css"
const OpcionesPedidos = ({item}) => {

    return (
        <div >
        <ul className="contenedor-lista" >
       
        <Link to={"/perfil"}><li className="item-contenedor-lista">Mi Cuenta</li></Link>
        <Link to={"/miscompras"}> <li className="item-contenedor-lista">Mis Pedido</li></Link>
        <Link to={"/"}> <li className="item-contenedor-lista"> Inicio</li></Link>
   

    </ul>
  
        </div>
     
         )}
      
  

export default OpcionesPedidos