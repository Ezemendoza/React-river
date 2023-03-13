import IdProductos from "./Productos/IdProductos"
import IdOrdenes from "./Ordenes/idOrdenes"
import IdUsuario from "./Usuarios/IdUsuario"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { db } from "../firebase/config"

const AdminCompraSeleccion = ()=>{
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
    return (<div>

        {(seleccion == "productos") &&
         <IdProductos/>
        }
         {(seleccion == "ordenes") &&
         <IdOrdenes/>
        }
        {(seleccion == "usuarios") &&
             <IdUsuario/>
        }
     </div>
     )
 }
 export default AdminCompraSeleccion
