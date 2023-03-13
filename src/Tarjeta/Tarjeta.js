import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import ResumenCarrito from "../ResumenCarrito/ResumenCarrito"
import ComponenteInput from "../User/Input"
import { UserContext } from "../UserContext/UserContext"
import "./Tarjeta.css"
import { Link } from "react-router-dom"
import { Label } from "../User/Elementos"
import PiePagina from "../PiePagina/PiePagina"

const Tarjeta = ()=>{

    const{totalPrecio, nuevaOrden, setCuota } = useContext(CartContext)
    const{cambiarTerminos, terminos, codigo,expresiones, numeroTarjeta, setnumeroTarjeta,titularTarjeta, settitularTarjeta,vencimientoTarjeta, setvencimientoTarjeta,cvvTarjeta, setcvvTarjeta} = useContext(UserContext)

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked)
      }
        const handerChange=(e)=>{
      if(codigo.booleano==="true"){
            setCuota({value:e.target.value, precio:-totalPrecio()*0.15+totalPrecio()})
         }else{
            setCuota({value:e.target.value, precio:totalPrecio()})
         }
               
            
        }


    return(
      <div>
    <div className="descripcion-tarjeta-columnas">
        
         <div className="descripcion-tarjeta">
         <div className="info-carrito">
                   
            <p>Ten en cuenta que podemos procesar tu pago con tu tarjeta débito. Solo verifica que tu tarjeta física tenga los 3 dígitos de seguridad al respaldo. Haz tu compra ahora mismo.</p>
                </div>
                <h3 className="titulo-tarjeta"><strong>METODO DE PAGO</strong></h3>
                <p className="parrafo-tarjeta">Todas las transacciones se realizan de manera segura</p>
         
                <hr/>
                <div className="descripcion-datos-columnas">
   
       <div className="grupo-contacto">


           <select onChange={(e)=>handerChange(e)} >
               <option>Elegi las cuotas</option>
               <option value={1}>1 x $ {codigo.booleano==="true" ? (-totalPrecio()*0.15+totalPrecio()):totalPrecio()}</option>
               <option value={3}>3 x $ {codigo.booleano==="true" ? (-totalPrecio()*0.15+totalPrecio())/3:totalPrecio()/3}</option>
               <option value={6}>6 x $ {codigo.booleano==="true" ? (-totalPrecio()*0.15+totalPrecio())/6:totalPrecio()/6}</option>
           </select>
        </div>

           <div className="div-input-datos">
           <ComponenteInput
                estado={numeroTarjeta}
                cambiarEstado={setnumeroTarjeta}
                tipo="number"
                label="Numero de tarjeta"
                placeholder="Numero de tarjeta"
                name="nombre"
                leyendaError="Numero de tarjeta no valida"
                expresionRegular={expresiones.numero}
           />
             <ComponenteInput
                estado={titularTarjeta}
                cambiarEstado={settitularTarjeta}
                tipo="text"
                label="Titular de la tarjeta"
                placeholder="Titular de la tarjeta"
                name="nombre"
                leyendaError="Titular de la tarjeta no valida"
                expresionRegular={expresiones.nombre}
           />
            <div className="grupo-contacto-tarjeta">
            <ComponenteInput
              estado={vencimientoTarjeta}
              cambiarEstado={setvencimientoTarjeta}
              tipo="text"
              label="Vencimiento"
              placeholder="Vencimiento"
              name="Vencimiento"
              leyendaError="Vencimiento incorrecto"
              expresionRegular={expresiones.vencimiento}
					      />
           
              <ComponenteInput
              estado={cvvTarjeta}
              cambiarEstado={setcvvTarjeta}
              tipo="text"
              label="CVV"
              placeholder="CVV"
              name="CVV"
              leyendaError="Introduce tu apellido"
              expresionRegular={expresiones.cvv}
					      />
            </div>


        </div>

        <Label> 
                  <input type="checkbox" name="terminos" id="terminos" checked={terminos} onChange={onChangeTerminos} />
                  Acepto los Terminos y Condiciones
                </Label>
          
                    
           </div>
           <div className="checkout-tarjeta">
           <Link to={"/checkout"}><button className="boton-compra" onClick={nuevaOrden}> Finalizar compra</button></Link>
           <p className="mt-3">Al finalizar se estara aceptando las <strong>bases y condiciones</strong></p>
           </div>
          
           </div>
            <ResumenCarrito/>
            
        
    </div>
    <PiePagina/>
</div>

    )
}
export default Tarjeta