import { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { UserContext } from '../UserContext/UserContext';
import OpcionesPedidos from "./OpcionesPedidos";
import { Link } from "react-router-dom"
import PiePagina from '../PiePagina/PiePagina';

const Admin = () => {
    const [item, setItems] = useState([])



    useEffect( () => {
        const productos= collection(db, "ordenes")
        getDocs(productos)
            .then((resp)=>{
                const newItem= resp.docs.map((el)=> {return{
                    id:el.id,
                    ...el.data()
                }
                    
                })
               setItems(newItem)})
              
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
        <thead class=" col-10">
    
      <th className="col-2   " >Orden </th>
      <th  className="col-2  " >Fecha</th>
      <th  className="col-2 " >Enviado a</th>
      <th className="col-2   "  >Cantidad</th>
      <th  className="col-2   " >Pedidos</th>
    
  </thead>
  
        {
            item.map( items =>
                
         
          <tbody className=" col-10">
            <td className="col-2 " > {items.id}</td>
            <td className="col-2 " >{items.NombreEntrega}</td>
            <td className="col-2 " >{items.NombreEntrega}</td>
            <td className="col-2 " > $ {items.total - items.total * 15 /100 }</td>
            <Link to={`/miscompras/${items.id}`}>  <td className="col-2 text-center" >Ver pedido</td></Link>
            
        </tbody>
            )
        }
         </table>
      <hr/>
 
     
   
    </div>
            
    </div>
    <div>
   <Link to={`/`}>VOLVER</Link> 
    </div>
 
    </div>
           }
        
    </div>
    
            <PiePagina/>
       </div>
    )
}

export default Admin