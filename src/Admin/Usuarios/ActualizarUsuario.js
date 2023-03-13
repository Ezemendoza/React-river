import {  doc, updateDoc} from "firebase/firestore";
import { db } from "../../firebase/config";
import "../AdminProductosImg.css"

const ActualizarUsuario = ({valor,value,item})=>{



    function aver(e){
        e.preventDefault()
        const washingtonRef = doc(db, "usuarios", item.id);

         updateDoc(washingtonRef, {
            nombre:e.target.nombre.value,
            apellido:e.target.apellido.value,
            usuario:e.target.usuario.value,
            telefono:e.target.telefono.value,
            nacimiento:e.target.nacimiento.value,
            email:e.target.email.value,
        
        });
        }  
        console.log(item)
        
    
        
    return (
    
            <form onSubmit={e=> aver(e)}>
                    <div className="plantilla-input">
                <div className="columna-input col-6">

        
            <div class="col-4">
            <input class="effect-1" type="text" placeholder="Nombre" name="nombre"/>
              <span class="focus-border"></span>
          </div>

          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Apellido" name="apellido"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="usuario" name="usuario"/>
              <span class="focus-border"></span>
          </div>
         
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="telefono" name="telefono"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Nacimiento" name="nacimiento"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Email" name="email"/>
              <span class="focus-border"></span>
          </div>
    
         
            </div>
            </div>
            <button className="btn btn-danger"> Aceptar</button>
            </form>

     
        
    )
}

export default ActualizarUsuario