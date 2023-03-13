import { useContext } from "react"
import { Pen } from "react-bootstrap-icons";
import { UserContext } from "../UserContext/UserContext";
import "./DetalleCarrito.css"
import { Link } from 'react-router-dom';

const DetalleCarrito = () =>{

    const{ email, calleEntrega,nombreEntrega, apellidoEntrega, departamentoEntrega, cpEntrega,  provinciaEntrega,localidadEntrega, telefonoEntrega,} = useContext(UserContext)

  

    return(
        <div className="detalle-carrito-envio">
               
        <div className="productos-detalle-carrito-envio">
              
            <div className="border-resumen">
                <div>
            <h3 className="mb-4"><strong>Detalles del envio</strong>  <Link to={"/pagos"}><Pen/></Link></h3></div>
            <p>{nombreEntrega.campo} {apellidoEntrega.campo}</p>
            <p>{calleEntrega.campo} {departamentoEntrega.campo}, {cpEntrega.campo}</p>
            <p> {localidadEntrega.campo}{provinciaEntrega.campo}</p>
            
            <p>Correo:<strong>{email.campo}</strong></p>
            <p>Telefono:<strong>{telefonoEntrega.campo}</strong></p>
        
            <div className="productos-detalle-carrito-total" >
           
            </div>
         
                
        
            </div>
            </div>
            </div>

    )

}
export default DetalleCarrito