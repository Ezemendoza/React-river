import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import {BsTelephoneFill} from "react-icons/bs"
import "./PiePagina.css"
import promo from '../img/promo.png';
const PiePagina = ()=>{
    
    return(<div className="mt-5" >
       
        <img src={promo} className="promo"/>
        
 
    <div className="pt-3 background-footer">
        
  
    <div className="row col-12">
  
      <div className="col-3">
        <h5 className="titulo-lista-footer">Nosotros</h5>
        <ul>
            <li className="lista-footer">Acerca de Nosotros</li>
            <li  className="lista-footer">Nuestro Sucursal</li>
        </ul>
      </div>
     
      <div className="col-3">
      <h5 className="titulo-lista-footer">Informacion</h5>
        <ul className="footer-links">
          <li className="lista-footer">Talles</li>

          <li className="lista-footer">Promociones de Compras</li>
          <li className="lista-footer">Garantias</li>
          <li className="lista-footer">Politicas de cambio</li>
          <li className="lista-footer">Defensa al Consumidor</li>
      
        </ul>
        
       <p className="titulo-lista-footer"><BsTelephoneFill className="social-svg"/> CONTACTO: 0800-222-0720</p>
        </div>
        
 <div className="col-3">
    <h5 className="titulo-lista-footer">Clientes</h5>
        <ul>
            <li className="lista-footer">Ingresa o registrate</li>
            <li className="lista-footer">Mi cuenta</li>
            <li className="lista-footer">Mis pedidos</li>
            
        </ul>

 </div>
 <div className="col-3">

     
        <h5 className="titulo-lista-footer">Seguinos</h5>
        <div className="social mt-4">
            <a href="https://www.facebook.com/riverplateoficial" ><BsFacebook className="social-svg"/></a>
            <a href="https://twitter.com/RiverPlate"> <BsTwitter className="social-svg"/></a>
            <a href="https://www.instagram.com/riverplate/?hl=es-la"><BsInstagram className="social-svg"/></a>
            <a href="wa.me/5491121664682"><BsWhatsapp className="social-svg"/></a>
      
      </div>
      <h6 className="titulo-lista-footer mt-5">COMPRA 100% SEGURA</h6>
      <p>Nuestro sitio posee toda la seguridad para tu compra.</p>
      </div>
 
 </div>

  </div>

  <div className="container mt-4">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">2022 Todos los derechos reservados
        </p>
      </div>

    </div>
  </div>
  </div>
  )

}

export default PiePagina