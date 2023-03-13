import { UserContext } from "../UserContext/UserContext";
import { useContext,   useState } from "react";
import ComponenteInput from "./Input";
import { Label, Formulario,  } from "./Elementos";
import { collection,  getDocs, query, where, writeBatch} from "firebase/firestore";
import { db } from "../firebase/config";
import OpcionesPedidos from "../Compras/OpcionesPedidos";
import PiePagina from "../PiePagina/PiePagina";
import { Link } from "react-bootstrap-icons";




export const Recuperarcontrasena = () => {
  const{ email,cambiarEmail,expresiones, nombre, usuario, cambiarNombre,cambiarUsuario, password, cambiarPassword} = useContext(UserContext)
  

const [editar, setEditar] = useState(false)

const sisi =()=>{
  const batch = writeBatch(db)
  const productos= collection(db, "usuarios")
  const q = query(productos, where("email", "==", email)) 
  getDocs(q)
      .then((resp)=>{    
      resp.forEach((el)=>{
      
    if(el.data().email === email.campo){

      batch.update(el.ref,{nombre:nombre.campo,
      usuario:usuario.campo,
    password:password.campo})
     
    }

    if(editar===false){
      setEditar(true)
  
    }else{
      setEditar(false)
    }
      })
      batch.commit()
      })

}

        



      
  return (


    <div className="fondo">
        
    <div>


        <div className="">
 
    <div className="plantilla-pedidos col-12">
    <div className="col-3 posicion-info-pedidos">
    <OpcionesPedidos/>
    </div>
    <div className="menu-info-pedido col-8 mt-5" >


    <Formulario>
            <ComponenteInput
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Nombre"
              placeholder="Nombre completo"
              name="nombre"
              leyendaError="Introduce tu nombre"
              expresionRegular={expresiones.nombre}
              required="required" 
					      />
           
              <ComponenteInput
              estado={usuario}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Usuario"
              placeholder="Usuario"
              name="apellido"
              leyendaError="Introduce tu usuario"
              expresionRegular={expresiones.nombre}
              required="required" 
					      />
                

       

          
            <ComponenteInput
              estado={email}
              cambiarEstado={cambiarEmail}
              tipo="text"
              label="Nombre"
              placeholder="Email"
              name="email"
              leyendaError="Introduce tu email"
              expresionRegular={expresiones.email}
              required="required" 
					      />
       
       
        
              <ComponenteInput
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo="password"
              label="Contraseña"
              placeholder="Contraseña"
              name="apellido"
              leyendaError="Contraseña invalida"
              expresionRegular={expresiones.password}
              
					      />
            
                
           
                            
                <button className="boton-compra mt-4" onClick={sisi}>{editar ? "Editar mi perfil":"Confirmar"}</button>
                </Formulario>


 

</div>
        
</div>

</div>
       
    
</div>

        <PiePagina/>
   </div>
                
);
}

