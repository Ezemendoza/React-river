import { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { UserContext } from '../UserContext/UserContext';
import OpcionesPedidos from "./OpcionesPedidos";
import { Link } from "react-router-dom"
import PiePagina from '../PiePagina/PiePagina';
const Compras = () => {
    const [item, setItems] = useState([])
    const {email} = useContext(UserContext)


    useEffect( () => {
        const productos= collection(db, "ordenes")
        const q = query(productos, where("email", "==", email.campo)) 
        getDocs(q)
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
        <thead class="lista-pedidos col-10">
    
      <th className="col-2   text-center" >Orden </th>
      <th  className="col-3   text-center" >Fecha</th>
      <th  className="col-2 text-center" >Enviado a</th>
      <th className="col-2   text-center"  >Cantidad</th>
      <th  className="col-2  text-center " >Pedidos</th>
    
  </thead>
  
        {
            item.map( items =>
                
         
          <tbody className="lista-pedidos col-10">
            <td className="col-2 text-center" > {items.id}</td>
            <td className="col-2 text-center" >{items.NombreEntrega}</td>
            <td className="col-2 text-center" >{items.NombreEntrega}</td>
            <td className="col-2 text-center" > $ {items.total - items.total * 15 /100 }</td>
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

export default Compras