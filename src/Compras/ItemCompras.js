import {  useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import  "./Compras.css"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase/config';
import InfoCompra from "./InfoCompra"
import OpcionesPedidos from "./OpcionesPedidos";
import { Link } from "react-router-dom"
import PiePagina from "../PiePagina/PiePagina";
const ItemCompras = () => {
   
    const [item, setItem] = useState(null)
    const {itemCompras} = useParams()
   

    useEffect(() => {
 

            const docRef = doc(db, "ordenes", itemCompras)
            getDoc(docRef)
            .then((resp) => {
               setItem({ id:resp.id, ...resp.data()}
               ) })
            
            .catch((error) => {
                console.log('ERROR', error)
            })
            
    }, [])
              


    return (<div>
        {(item !== null) &&

            <div className="">
        <div className="item-compras">
        <h4>Pedido : #  {itemCompras}</h4>
        <p>Fecha de pedido: {item.fecha}</p>
        </div>
        <div className="plantilla-pedidos col-12">
        <div className="col-3 posicion-info-pedidos">
        <OpcionesPedidos/>
        </div>
        <div className="menu-info-pedido col-8" >
        <h5><strong>Listado de Productos Comprados</strong></h5>
        <hr/>
   <table>
        <thead class="lista-pedidos col-10">
    
      <th className="col-2   text-center" >Imagen</th>
      <th  className="col-3   text-center" >Nombre del Producto</th>
      <th  className="col-2 text-center" >ID</th>
      <th className="col-2   text-center"  >Cantidad</th>
      <th  className="col-2  text-center " >Precio</th>
    
  </thead>
  
        {
            item.items.map( el =>
                
         
        <tbody className="lista-pedidos col-10">
            <td className="col-2 text-center" ><img src={el.img} className="img-item-lista-pedidos" alt="imagen-detail"/></td>
            <td className="col-3 text-center" >{el.nombre}</td>
            <td className="col-2 text-center" >{el.id}</td>
            <td className="col-2 text-center" >{el.cantidad}</td>
            <td className="col-2 text-center" >$ {el.precio}</td>
            
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

        <div className="cuenta-pedidos">
         <li>DESCUENTO</li>
         <li>$ {item.total * 15 /100 }</li>
        </div>
        <div className="cuenta-pedidos">
         <li>TOTAL</li>
         <li> $ { item.total - item.total * 15 /100 }</li>
        </div>
      </ul>
      <div>
      <Link to={`/miscompras/`} >Volver a mis pedidos</Link> 
      </div>
      <InfoCompra item={item}/>
    </div>

    </div>
    </div>
           }
        <PiePagina/>
    </div>
    )
}

export default ItemCompras