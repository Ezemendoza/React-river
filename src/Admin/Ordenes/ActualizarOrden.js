import {  doc, updateDoc} from "firebase/firestore";
import { db } from "../../firebase/config";
import "../AdminProductosImg.css"

const InputEditarOrden = ({valor,value,item})=>{



    function aver(e){
        e.preventDefault()
        valor.nombre=e.target.nombre.value;
        valor.precio=e.target.precio.value;
        valor.cantidad=e.target.cantidad.value;

        const  elementIndex = item.items.findIndex((obj => obj.id == valor.id));
        item.items[elementIndex] = valor;

          const total= item.items.map(precio => precio.precio *precio.cantidad).reduce((prev, curr) => prev + curr, 0);
        console.log(item)
        const washingtonRef = doc(db, "ordenes", item.id)
            updateDoc(washingtonRef,{  
                   ...item,
                   total:total,
                }  ) }  
        
    
        
    return (
    
            <form onSubmit={e=> aver(e)}>
                    <div className="plantilla-input">
                <div className="columna-input col-6">

        
            <div class="col-4">
            <input class="effect-1" type="text" placeholder="Nombre" name="nombre"/>
              <span class="focus-border"></span>
          </div>

          <div class="col-4">
            <input class="effect-1" type="number" placeholder="Cantidad" name="cantidad"/>
              <span class="focus-border"></span>
          </div>
         
          <div class="col-4">
            <input class="effect-1" type="number" placeholder="Precio" name="precio"/>
              <span class="focus-border"></span>
          </div>
    
         
            </div>
            </div>
            <button className="btn btn-danger"> Aceptar</button>
            </form>

     
        
    )
}

export default InputEditarOrden