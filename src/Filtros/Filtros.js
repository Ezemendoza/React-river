import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "../Compras/OpcionesPedidos.css"
import { db } from "../firebase/config"
import ItemList from "../ItemList/ItemList"

const Filtros = ({item}) => {
    const [items, setItems] = useState([])
    const {filtro,elemento, categoriaId} = useParams()

    useEffect(() => {

            const productos= collection(db, "productos")
            const q = categoriaId ? query(productos, where("categoria", "==", categoriaId)) : productos
            getDocs(q)
                .then((resp)=>{
                    const newItem= resp.docs.map((el)=> {return{
                        id:el.id,
                        ...el.data()
                    }
                        
                    })
                   setItems(newItem)})
    }, [categoriaId])
    return (
        <div >
            <div className="menu-filtros">
                <p className="Titulo-menu-filtro">FILTRA TU BUSQUEDA POR :</p>
                <p className="subtitulo-menu-filtro">CATEGORIA</p>
                <hr/>
               <Link to={"/categoria/futbol"}><p className="text-muted subtitulo-menu-filtro">FUTBOL</p></Link>
            </div>

            <ItemList items={items}/>
        </div>
     
         )}
      
  

export default Filtros

{/* <Link to={`/color/rojo`}> <li className="item-contenedor-lista">Color</li></Link>
<Link to={`/categoria/futbol`}><li className="item-contenedor-lista">usuarios</li></Link> */}