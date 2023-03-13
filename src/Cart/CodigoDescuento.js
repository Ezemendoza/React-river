import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { UserContext } from "../UserContext/UserContext"
import "./CodigoDescuento.css"

const CodigoDescuento= () => {
  
    const{codigo, setCodigo} = useContext(UserContext)
    const { setTotalDescuento,totalPrecio}=useContext(CartContext)
    const onChange = (e) => {
        
		setCodigo({campo: e.target.value});
	}

    const submit = (e)=>{
      
      if(codigo.campo==="365"){
        setCodigo({valido:"Cupon procesado exitosamente", booleano:"true"})
        setTotalDescuento(totalPrecio*0.15)
      }
      else{
        setCodigo({valido:"El cupon no se encuentra en el sistema, verifique si tu cupon es valido", booleano: "false"})
      }
      
    }
 
    return(
        <div>    
            <p className="mt-4"><strong>{codigo.valido && codigo.valido}</strong> </p>

           

            <div class="input-descuento">      
            <input className="input-codigo" type="text" value={codigo.campo} onChange={onChange}/>
            <label className="label-codigo">Introduci tu codigo de descuento</label>
            </div>
            {codigo.campo &&  <button onClick={submit} className="boton-compra" > Aplicar</button>} 
        </div>
    
        
    )
}
export default CodigoDescuento