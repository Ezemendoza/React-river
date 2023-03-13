import {BsFillTrashFill} from "react-icons/bs";
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext";
import "./cart.css"
import metodos from '../img/metodos-pagos.webp'
import {BsArrowRight} from "react-icons/bs";
import { Link } from 'react-router-dom';
import ResumenCarrito from "../ResumenCarrito/ResumenCarrito";
import PiePagina from "../PiePagina/PiePagina";


const Cart = ({}) => {
    const{cart, totalPrecio, carritoVacio, removeItem} = useContext(CartContext)


    if(cart.length===0){
       return  <div className="descripcion-carrito-columnas-vacio">
                <div className="descripcion-carrito">
                    <h1><strong>TU CARRITO ESTA VACIO</strong></h1>
                    <p className="mt-3">Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</p>
                    <Link to={"/"}><button className="boton-compra" >Empezar<div><BsArrowRight/></div></button></Link>
                     </div>
                     <div className="detalle-carrito-total col-3">
                         
                        <div className="productos-detalle-carrito-vacio">
                            <div className="metodos-pagos-row">
                                    <p><strong>OPCIONES DE PAGOS</strong></p>
                                   <img src={metodos} className="metodos-pagos" alt="pagos"/>
                            </div>
                        </div>
                    </div>
                </div>
            
    }
    else
    return (

        <div >
            <div className="descripcion-carrito-columnas">
         <div className="descripcion-carrito">
                <h1><strong>TU CARRITO</strong></h1>
                <div>TOTAL ({cart.length} productos) <strong>$ {totalPrecio()}</strong> </div>
                <p className="mt-3">Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.</p>
                <div className="coutas-carrito">
                    <h4 className="titulo-coutas-carrito">¡COMPRÁ AHORA Y PAGÁ EN 6 CUOTAS! </h4>
                    <p>Podés pagar con tus tarjetas Visa, MasterCard o American Express, al hacerlo, podrás pagar hasta en 6 cuotas sin interés.</p>
                </div>
         
       <div className="resumen-carrito" >
     
            <div className="division-carrito">
         
      { 
             cart.map((item) => ( 
              
             <div key={item.id} className="columna-productos-carritos">
                        <div className="carritoDiv">
                                    <img src={item.img} className="img-carrito" alt="carrito"/>
                           
                                     
                                        <p className="titulo-carrito"><strong> {item.nombre}</strong> 
                                        <p className="titulo-carrito "><strong> SKU</strong>  {item.id}</p>
                                        
                                        <p className="titulo-carrito bg-white"><strong> Cantidad :</strong>   {item.cantidad} </p>
                                        <p className="titulo-carrito "><strong> Precio unitario</strong> $ {item.precio}</p>
                                      
                                       </p>
                                    <div className="ml-4">
                                        <p className="titulo-carrito">$ {item.precio*item.cantidad}</p>
                                     </div>
                                    
                                    <div className="titulo-carrito">
                                             <button className="boton-carrito" onClick={() => removeItem(item.id)}>X</button>
                                    </div>
                               
                                    
                           

                        </div>
                         
                                 
            </div>
  
      ))
      }
      
       <Link to={"/pagos"}> <button className="boton-compra">A pagar <BsArrowRight/> </button></Link>
      <button className="boton-compra bg-danger mt-4" onClick={carritoVacio}>Vaciar carrito <BsFillTrashFill/></button>

       
             </div>
                 </div>
                 </div>
               <ResumenCarrito/>
            
        </div>
        <PiePagina/>
        </div>
    )
}

export default Cart