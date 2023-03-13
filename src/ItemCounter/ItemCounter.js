import {  useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import TerminarCompra from "./TerminarCompra"



const ItemCounter = ({item, agregar, descripcion,counter, setCounter}) => {
    const{cart} = useContext(CartContext)

    const incrementar = ()=>{
      if(counter<item)setCounter(counter=counter+1)
  }
  const restar = ()=>{
   if(counter>1)setCounter(counter=counter-1)
  
  }
    const sisi = cart.some((el)=>el.id=== descripcion.id)
  
          return (
               <div className="div-counter mt-5">
              <div className=" item-counter">
                  <button className="boton-compra-galeria-input" onClick={restar}>-</button>
                                                        <input type ="number" value={counter}/> {item.cantidad}
                                                        <button className="boton-compra-galeria-input" onClick={incrementar}>+</button>  
                   </div>
                   
                    <div className="item-comprar">
                    {sisi ? <TerminarCompra/>: <button className="boton-compra" onClick={agregar}> Comprar</button>}
                    </div>
           
                    </div>

    )
}

export default ItemCounter