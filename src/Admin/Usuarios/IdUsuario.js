import { deleteDoc, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { BsPencilSquare, BsTrash } from "react-icons/bs"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import PiePagina from "../../PiePagina/PiePagina"
import OpcionesPedidosAdmin from "../OpcionesPedidos"
import ActualizarUsuario from "./ActualizarUsuario"


const IdUsuario= () =>{
    const [item, setItem]= useState()
    const {Adminid } = useParams()
    const [editar, setEditar] = useState(false)
    const [info , setInfo]= useState({
        nombre:"",
        color:"",
        marca:"",
        categoria:"",
        modelo:"",
        precio:"",
        stock:"",
        img:"",
        img2:"",
    })

   
    useEffect(() => {
            const docRef = doc(db, "usuarios", Adminid)
            getDoc(docRef)
            .then((resp) => {
               setItem({ id:resp.id, ...resp.data()}
               ) })
            
    }, [info])

    function borrarProducto (e){
        deleteDoc(doc(db, "usuarios", item.id));
    }
    function editarProducto (e){
        if(editar == false){
            setEditar(true)
        }else{
            setEditar(false)
        }
            }

    return(<div className="fondo">
        
        <div>
        {(item !== undefined) &&

            <div className="">
     
        <div className="plantilla-pedidos col-12">
        <div className="col-3 posicion-info-pedidos">
       <OpcionesPedidosAdmin/>
        </div>
        <div className="menu-info-pedido col-9 mt-5" >

        <hr/>
        <table>
            <thead >
            <td> <strong>ID</strong></td> 
            <td><strong>Nombre</strong></td>
            <td><strong>Apellido</strong></td>
            <td> <strong>Usuario</strong></td>
            <td > <strong>Telefono</strong></td>
            <td > <strong>Email</strong></td>
 
        
      </thead>

                    
             
              <tbody  >
         <td  > {item.id}</td> 
            <td >{item.nombre}</td>
            <td >{item.apellido}</td>
            <td > {item.usuario}</td>
            <td > {item.telefono}</td>
            <td className="text-center" > {item.email}</td>
            <td onClick={e=> borrarProducto(e)}><button><BsTrash/></button></td>
            <td onClick={e=> editarProducto(e)}> <button><BsPencilSquare/></button></td>
   
            </tbody>
            
                
            
             </table>
          <hr/>
    



      <hr/>
 
      {(editar == true) &&
        <div className="plantilla editar">

    
        <ActualizarUsuario valor={info} value={setInfo} item={item}/>
      
        </div>
   
         
           
      } 
   
   
    </div>
            
    </div>
    </div>
           }
        
    </div>
    
            <PiePagina/>
       </div>
)
}

export default IdUsuario