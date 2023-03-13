import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import "./AdminProductosImg.css"

const InputEditar = ({valor,value,item})=>{

    function aver(e){
        e.preventDefault()
        const washingtonRef = doc(db, "productos", item.id);

         updateDoc(washingtonRef, {
            nombre:e.target.nombre.value,
            color:e.target.color.value,
            categoria:e.target.categoria.value,
            marca:e.target.marca.value,
            precio:e.target.precio.value,
            stock:e.target.stock.value,
            modelo:e.target.modelo.value,
        });
        
    }
    
    return (
    
            <form onSubmit={e=> aver(e)}>
                    <div className="plantilla-input">
                <div className="columna-input col-6">

        
            <div class="col-4">
            <input class="effect-1" type="text" placeholder="Nombre" name="nombre"/>
              <span class="focus-border"></span>
          </div>

          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Color" name="color"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Categoria" name="categoria"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Marca" name="marca"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Modelo" name="modelo"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="number" placeholder="Stock" name="stock"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="number" placeholder="Coloque precio sin comas" name="precio"/>
              <span class="focus-border"></span>
        
          </div>
         
            </div>
            </div>
            <button className="btn btn-danger"> Aceptar</button>
            </form>

     
        
    )
}

export default InputEditar