import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import PiePagina from "../../PiePagina/PiePagina"
import "../AdminProductosImg.css"
import OpcionesPedidosAdmin from "../OpcionesPedidos"


const AdminProductos = ()=>{

    const [item, setItem] = useState(null)
        const {seleccion, AdminId} = useParams()
       

        useEffect( () => {
            const productos= collection(db, seleccion)
            getDocs(productos)
                .then((resp)=>{
                    const newItem= resp.docs.map((el)=> {return{
                        id:el.id,
                        ...el.data()
                    }
                        
                    })
                   setItem(newItem)})
                  
        }, [])

    return (
    
       
            <div className="fondo">
            <div>
            {(item !== null) &&
    
                <div className="">
         
            <div className="plantilla-pedidos col-12">
            
            <div className="col-3 posicion-info-pedidos">
           <OpcionesPedidosAdmin/>
            </div>
            <div className="menu-info-pedido col-8 mt-5" >
                <Link to={"/admin/productosagregar"}><button className="btn btn-success">Agregar productos</button></Link>
            <hr/>
       <table>
            <thead >
            <td> <strong>ID</strong></td> 
            <td><strong>Nombre</strong></td>
            <td><strong>Categoria</strong></td>
            <td> <strong>Modelo</strong></td>
            <td > <strong>Marca</strong></td>
            <td > <strong>Color</strong></td>
            <td > <strong>Precio</strong></td>
            <td > <strong>Stock</strong></td> 
        
      </thead>
      
            {
                item.map( items =>
                    
    
              <tbody  >
         <td  > {items.id}</td> 
            <td >{items.nombre}</td>
            <td >{items.categoria}</td>
            <td > {items.modelo}</td>
            <td > {items.marca}</td>
            <td > {items.color}</td>
            <td className="text-center" > ${items.precio}</td>
            <td > {items.stock}</td> 
                  <Link to={`/admin/${seleccion}/${items.id}`}>Ver Producto</Link> 
            </tbody>
            
                )
            }
             </table>
          <hr/>
     
         
       
        </div>
                
        </div>
        <div>
       <Link to={`/admin`}>VOLVER</Link> 
        </div>
     
        </div>
               }
            
        </div>
        
                <PiePagina/>
           </div>
        )
    }

export default AdminProductos