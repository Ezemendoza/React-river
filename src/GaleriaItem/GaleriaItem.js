import { useContext, useEffect, useState } from "react";
import  "./GaleriaItem.css"
import DetalleGaleriaItem from "./DetalleGaleria/DetalleGaleria";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import camion from '../img/camion.png'
import tarjeta from '../img/tarjeta.png'
import { CartContext } from "../CartContext/CartContext";

const GaleriaItem = ({item}) => {
  const [contador, setCantidad]=useState(1)
  
  const {addCart} = useContext(CartContext)

    useEffect(()=>{
        const fotoLista = document.querySelectorAll(".thumbnails-list li");

        const fotoPrincipal = document.querySelector(".product-gallery-featured img");
    
        fotoLista.forEach((item) => {
          item.addEventListener("mouseover",  ()=> {
            let imagen = item.children[0].src;
            fotoPrincipal.src = imagen;
          });
        }, [fotoPrincipal]);
    
    })
    const cuota = Math.round(item.precio/6)
    const stock= item.stock-contador

    const agregar= () => {
      const itemCart={ ...item,
        cantidad:contador,}  
      addCart(itemCart, contador)
}
  
    return (
      
        <div className="container">
          <div className="col-lg-12">
            <div className="card mb-10">
              <div className="card-header">
                <nav className="header-navigation">
                  <a href="#" className="btn btn-link"></a>
                 
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Inicio</Link></li>
                    <li className="breadcrumb-item"> <Link to={`/categoria/${item.categoria}`}>{item.categoria}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{item.nombre}</li>
                  </ol>
  
                </nav>
              <div className="card-body store-body ">
                <div className="product-info col-8">
                  <div className="product-gallery ">
                    <div className="product-gallery-thumbnails">
                      <ol className="thumbnails-list list-unstyled">
                        <li><img src={item.img} alt=""/></li>
                        <li><img src={item.img2} alt=""/></li>
                        <li><img src={item.img3} alt=""/></li>
                      </ol>
                    </div>
                    <div className="product-gallery-featured">
                      <img src={item.img} alt="" className="imagen__galeria"/>
                    </div>
                  </div>
                   <DetalleGaleriaItem item={item}/>
                   
                              </div>
  <div className="col-5">
        <div className="product-detail">
                  <h3 className="titulo-producto">{item.nombre}</h3>
                
                  <h4>$ {item.precio}</h4>
                  <div className="columnas-detail">
                  <div className="item-tarjeta"><img src={tarjeta}/> 6x cuotas sin interes de  ${cuota}</div>
                  <img src={camion}/> Envios a todo Buenos Aires</div>
                  <p className="text-muted">Aproximadamente en 72 horas en tu casa</p>
                  {item.stock<= 0 ? <strong><p>No hay stock de este producto</p> </strong>: <strong><p>Ultimos {stock} disponible!</p></strong>}
                  <div className=" input-detail"></div> 
      </div>
      {item.stock > 0 &&    <ItemCounter item={item.stock}counter={contador} setCounter={setCantidad} agregar={agregar} descripcion={item} />}
   </div>
                          
            </div>
                                
             </div>
                </div>
                              
                    </div>
                    
                         </div>
                          
                    
                              
    )
}

export default GaleriaItem

