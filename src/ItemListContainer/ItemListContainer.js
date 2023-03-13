import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { Spinner } from "react-bootstrap";
import {Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import PiePagina from '../PiePagina/PiePagina';

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const[loading, setLoading]=useState(true)
    const {filtro, categoriaId} = useParams();

    useEffect(() => {
        setLoading(true)
            const productos= collection(db, "productos")
            const q = filtro ? query(productos, where(filtro, "==", categoriaId)) : productos
            getDocs(q)
                .then((resp)=>{
                    const newItem= resp.docs.map((el)=> {return{
                        id:el.id,
                        ...el.data()
                    }
                        
                    })
                   setItems(newItem)})
          .finally(()=>{
            setLoading(false)
          })
    }, [categoriaId])
   

    return (
        <div className="fondo">
        
        <div>
   

            <div className="">
     
        <div className="plantilla-pedidos-menu-principal col-12">
   
        <div className="menu-filtros mt-5">
                <p className="Titulo-menu-filtro">FILTRA TU BUSQUEDA POR :</p>
                <p className="subtitulo-menu-filtro mb-0 mt-4">DEPORTE</p>
                <hr/>
               <Link to={`/categoria/futbol`}><p className="text-muted subtitulo-menu-filtro">FUTBOL</p></Link>
               <Link to={`/categoria/tiempo%20libre`}><p className="text-muted subtitulo-menu-filtro">TIEMPO LIBRE</p></Link>
               <Link to={`/categoria/basquet`}><p className="text-muted subtitulo-menu-filtro">BASQUET</p></Link>
  

                <p className="subtitulo-menu-filtro mt-4 mb-0">CATEGORIA</p>
                <hr/>
               <Link to={`/modelo/accesorios`}><p className="text-muted subtitulo-menu-filtro">ACCESORIOS</p></Link>
               <Link to={`/modelo/camiseta`}><p className="text-muted subtitulo-menu-filtro">CAMISETA</p></Link>
               <Link to={`/modelo/camperon`}><p className="text-muted subtitulo-menu-filtro">CAMPERON</p></Link>
               <Link to={`/modelo/campera`}><p className="text-muted subtitulo-menu-filtro">CAMPERA</p></Link>
               <Link to={`/modelo/remera`}><p className="text-muted subtitulo-menu-filtro">REMERA</p></Link>
               <Link to={`/modelo/pantalon`}><p className="text-muted subtitulo-menu-filtro">PANTALON</p></Link>
               <Link to={`/modelo/short`}><p className="text-muted subtitulo-menu-filtro">SHORT</p></Link>
               <Link to={`/modelo/musculosa`}><p className="text-muted subtitulo-menu-filtro">MUSCULOSA</p></Link>
               <Link to={`/modelo/buzo`}><p className="text-muted subtitulo-menu-filtro">BUZO</p></Link>
               <Link to={`/modelo/calzado`}><p className="text-muted subtitulo-menu-filtro">CALZADO</p></Link>
               <p className="subtitulo-menu-filtro mt-4 mb-0">COLOR</p>
                <hr/>
            <div className='menu-color'>
            <Link to={`/color/rojo`}><div className='circulo-rojo'></div></Link>
            <Link to={`/color/negro`}><div className='circulo-black'></div></Link>
            <Link to={`/color/gris`}><div className='circulo-gris'></div></Link>
            <Link to={`/color/blanco`}><div className='circulo-white'></div></Link>
            <Link to={`/color/naranja`}><div className='circulo-naranja'></div></Link>
            </div>
             
             </div>

      
        <div className="mt-5 previsualizacion col-10" >

     {loading
     ?
    <Spinner animation="border" role="status" className='spinning'>
    <p className="visually-hidden">Loading...</p>
    </Spinner>
     :<ItemList items={items}/>
        }


 
     
   
    </div>
            
    </div>
 
 
    </div>
           
        
    </div>
    
            <PiePagina/>
       </div>
    )
}


export default ItemListContainer


