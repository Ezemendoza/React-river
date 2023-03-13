import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import PiePagina from "../../PiePagina/PiePagina"
import OpcionesPedidos from "../OpcionesPedidos"

const OrdenesAdmin = ()=>{
    const [item, setItem] = useState(null)
        const {seleccion} = useParams()
       
    
    
    
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
           <OpcionesPedidos/>
            </div>
            <div className="menu-info-pedido col-8 mt-5" >
    
            <hr/>
       <table>
            <thead >
            <td> <strong>ID</strong></td> 
            <td><strong>Fecha</strong></td>
            <td><strong>Nombre</strong></td>
            <td> <strong>Calle</strong></td>
            <td > <strong>Localidad</strong></td>
            <td > <strong>Provincia</strong></td>
            <td > <strong>Email</strong></td>
            <td > <strong>Total</strong></td> 
        
      </thead>
      
            {
                item.map( items =>
                    
             
              <tbody  >
         <td  > {items.id}</td> 
            <td >{items.fecha}</td>
            <td >{items.NombreEntrega}</td>
            <td > {items.calle}</td>
            <td > {items.Localidad}</td>
            <td > {items.Pronvincia}</td>
            <td className="text-center" > {items.email}</td>
            <td > ${items.total}</td> 
                  <Link to={`/admin/ordenes/${items.id}`}>Ver orden</Link> 
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

export default OrdenesAdmin