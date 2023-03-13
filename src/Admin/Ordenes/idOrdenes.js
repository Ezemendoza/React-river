import {  doc, getDoc,updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { BsPencilSquare, BsTrash } from "react-icons/bs"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import PiePagina from "../../PiePagina/PiePagina"
import "../AdminProductosImg.css"
import OpcionesPedidosAdmin from "../OpcionesPedidos"
import InputEditarOrden from "./ActualizarOrden"

const IdOrdenes = ()=>{

    const [item, setItem]= useState()
    const {Adminid ,seleccion } = useParams()
    const [editar, setEditar] = useState(false)
    const [info , setInfo]= useState()

    useEffect(() => {
            const docRef = doc(db, "ordenes", Adminid)
            getDoc(docRef)
            .then((resp) => {
               setItem({ id:resp.id, ...resp.data()}
               ) })
            
    }, [info])

    function borrarProducto (e, rea){
        const borrar = item.items.filter((item) => item !== rea)
        console.log(borrar)
        
        const washingtonRef = doc(db, "ordenes", item.id);

         updateDoc(washingtonRef, {
       ...item,
       items:borrar
        });
     
    }
    function editarProducto (e, rea){
        if(editar == false){
            
            
            setInfo(rea)
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
        <th className="text-center" >Imagen </th>
      <th className="text-center" >ID </th>
      <th  className="text-center" >Nombre</th>
      <th  className="text-center" >Cantidad</th>
      <th className="text-center"  >Precio Unitario</th>
      <th  className="text-center " >Precio Total</th>

    
  </thead>
  
  {
        item.items.map( items =>
                    
             
              <tbody  >
                 <td  > <img src={items.img} className="item-compra-img"/></td> 
         <td > {items.id}</td> 
            <td >{items.nombre}</td>
            <td >{items.cantidad}</td>
            <td > $ {items.precio}</td>
            <td > $ {items.cantidad * items.precio}</td>
            <td onClick={e=> borrarProducto(e ,items)}><button><BsTrash/></button></td>
            <td onClick={e=> editarProducto(e, items)}> <button><BsPencilSquare/></button></td>
            </tbody>
            
                )
            }
    </table>
 
      <hr/>
      <ul>
        <div className="cuenta-pedidos">
         <li>SUBTOTAL</li>
         <li> $ {item.total}</li>
        </div>
            {(item.descuento == 15) &&
                    <div className="cuenta-pedidos">
                    <li>DESCUENTO</li>
                    <li>$ {item.total}</li>
                    </div>
            }

        <div className="cuenta-pedidos">
         <li>TOTAL</li>
         <li>$ {item.descuento !== "" ?    item.total : item.total - item.total * item.descuento /100 }</li>
        </div>
      </ul>
        
 
      {(editar == true) &&
        <div className="plantilla editar">

        <InputEditarOrden valor={info} value={setInfo} item={item}/>
      
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

export default IdOrdenes