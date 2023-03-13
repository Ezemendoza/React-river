import { useContext} from "react"
import { CartContext } from "../CartContext/CartContext"
import "./Checkout.css"
import { UserContext } from "../UserContext/UserContext"
import check from '../img/check.png'
import { Link } from "react-router-dom"
import PiePagina from "../PiePagina/PiePagina"



export const Checkout =()=>{

    const {cart, setCart, totalPrecio,orderId,cuota} =  useContext(CartContext)

    const{codigo, nombreEntrega, apellidoEntrega,calleEntrega, cpEntrega, localidadEntrega, provinciaEntrega} = useContext(UserContext)

const borrar = ()=>{
    setCart((null))

}
   
    
    

    return(
        <div>


        <div className="columnas-checkout">
             <div className="col-1">   <img src={check} className="img-check"/></div>
            <div className="texto-checkout"><h2><strong>     ! Gracias Por Su Compra!</strong>      </h2>
                        <h5 className="mt-3 mb-3">La compra fue confirmada</h5>
         
               <p className="texto-boton-checkout">Su orden de compra es: <strong>{orderId}</strong></p>
               <p className="texto-boton-checkout">El pedido sera entregado en <strong>{calleEntrega.campo}</strong>, su codigo postal es <strong>{cpEntrega.campo}</strong> en la localidad de <strong>{localidadEntrega.campo}</strong> en la provincia de <strong>{provinciaEntrega.campo} </strong> a nombre de <strong>{nombreEntrega.campo} {apellidoEntrega.campo}</strong></p>
              <p className="texto-boton-checkout">El total de la compra fue de  $ <strong>{codigo.booleano=="true" ? -totalPrecio()*0.15+totalPrecio():totalPrecio()}</strong> en <strong>{cuota.value}</strong> cuotas</p>
              <Link to={"/"} onClick={borrar} ><button className="boton-compra mt-4" >Seguir comprando</button></Link>
              </div>
            
        </div>
        <PiePagina/>
        </div>
    )


}
