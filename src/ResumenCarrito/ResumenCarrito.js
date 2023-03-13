import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext";
import metodos from '../img/metodos-pagos.webp'
import { UserContext } from "../UserContext/UserContext";
import CodigoDescuento from "../Cart/CodigoDescuento"
import DetalleCarrito from "./DetalleCarrito"
const ResumenCarrito = ()=>{
    const{cart, totalPrecio} = useContext(CartContext)
    const{codigo,terminos} = useContext(UserContext)
   

return(
    <div className="detalle-carrito-total col-3">
               
<div className="productos-detalle-carrito">
      
    <div className="border-resumen">
    <h3 className="mb-4"><strong>Resumen del Pedido</strong></h3>
    

    <div className="productos-detalle-carrito-total" >
        <p>{cart.length} Productos</p>
        <p >  $ {totalPrecio()}</p>
    </div>
    <div className="productos-detalle-carrito-total" >
        <p>Entrega</p>
        <p >  Gratis</p>
    </div>
        {codigo.booleano === "true" && 
            <div className="productos-detalle-carrito-total" >
                <p>Descuento 15%</p>
                <p > ${totalPrecio()*0.15}</p>
            </div>}
    <div className="productos-detalle-carrito-total" >
        <div className="column">
             <p className="detalles-productos-carrito-total"><strong>Total de compra</strong></p>
             <p className="detalles-productos-carrito-iva">(Incluye iva $ {totalPrecio()* 0.21})</p>
            </div>
        
        <p ><strong> $ {codigo.booleano==="true" ? -totalPrecio()*0.15+totalPrecio():totalPrecio()}</strong> </p>
    </div>
    
         
    

     </div>
     
     <CodigoDescuento/>
 
    {terminos && <DetalleCarrito/>}

     <div className="metodos-pagos-row">
            <p><strong>OPCIONES DE PAGOS</strong></p>
           <img src={metodos} className="metodos-pagos"/>
    </div>


</div>

</div>


)
}

export default ResumenCarrito