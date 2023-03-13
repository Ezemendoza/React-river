import { deleteDoc, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { BsFillTrashFill,BsPencilSquare, BsTrash } from "react-icons/bs"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import PiePagina from "../../PiePagina/PiePagina"
import "../AdminProductosImg.css"
import { SubirImagen } from "../SubirImagen"
import OpcionesPedidosAdmin from "../OpcionesPedidos"
import InputEditar from "../InputEditar"

const IdProductos = ()=>{

    const [item, setItem]= useState()
    const {Adminid } = useParams()
    const [valor, setValor] = useState({barra:"0" ,img: null})
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
            const docRef = doc(db, "productos", Adminid)
            getDoc(docRef)
            .then((resp) => {
               setItem({ id:resp.id, ...resp.data()}
               ) })
            
    }, [editar])


    function borrarProducto (e){
        deleteDoc(doc(db, "productos", item.id));
        console.log("borrado")
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
        <thead class="lista-productos">
    
      <th className="text-center" >ID </th>
      <th  className="text-center" >Nombre</th>
      <th  className="text-center" >Color</th>
      <th className="text-center"  >Categoria</th>
      <th  className="text-center " >Marca</th>
      <th  className="text-center " >Modelo</th>
      <th  className="text-center " >Precio</th>
      <th  className="text-center " >Stock</th>
    
  </thead>
  
        
       
          <tbody className="lista-productos ">
         <td className=" text-center" > {Adminid}</td> 
            <td className="text-center" >{item.nombre}</td>
            <td className="text-center" >{item.color}</td>
            <td className="text-center" > {item.categoria}</td>
            <td className="text-center" > {item.marca}</td>
            <td className="text-center" > {item.modelo}</td>
            <td className="text-center" > $ {item.precio}</td>
            <td className="text-center" > {item.stock}</td> 
            <td onClick={e=> borrarProducto(e)}><button><BsTrash/></button></td>
            <td onClick={e=> editarProducto(e)}> <button><BsPencilSquare/></button></td>
            </tbody>
        
    
    </table>
         <table>


        <thead class="lista-productos">
        <th className="text-center" >imagen-1</th>
        <th  className="text-center" >imagen-2</th>
        </thead>
  
        
       
          <tbody className="lista-productos-imagen">
            <td className=" text-center" ><img src={item.img}  className="lista-productos-imagen"/></td>
            <td className=" text-center" > <img src={item.img2} className="lista-productos-imagen"/></td>
   
        </tbody>
      
    
         </table>


      <hr/>
 
      {(editar == true) &&
        <div className="plantilla editar">

    
        <SubirImagen value={setValor} valor={valor} item={item}/>
        <InputEditar valor={info} value={setInfo} item={item}/>
      
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

export default IdProductos