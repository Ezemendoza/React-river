import logo from '../img/footer.png';
import './navBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Perfil } from './perfil';
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from '../UserContext/UserContext';
import logos from '../img/footer.png';
import { BsWhatsapp } from "react-icons/bs";
import {BsTruck} from "react-icons/bs"
import {BsTelephoneFill} from "react-icons/bs"
import  {BsFillInfoCircleFill} from "react-icons/bs"
const Menu = () => {
    const{cart} = useContext(CartContext)
    const {registrado} = useContext(UserContext)

    return (<div>
      <div className='headers'>
      <div className='container'>
        <div className='columna-header'>
        <div className='columnas-iconos-header'>
           <img src={logo} className="header-logo"/>
        </div>
        <div >
           <p className='columnas-iconos-header'><BsTelephoneFill className="social-svg-header"/> 0800-222-0720</p>
        </div>
        <div >
           <p className='columnas-iconos-header'><BsTruck className="social-svg-header"/> Envio gratis a partir de $10.000</p>
        </div>
        <div >
          <Link to={"/defensaconsumidor"}><p className='columnas-iconos-header'><BsFillInfoCircleFill className="social-svg-header"/> Defensa al consumidor</p></Link> 
        </div>
        <div >
           <p className='columnas-iconos-header'><BsWhatsapp className="social-svg-header"/> 1121664682</p>
        </div>
        </div>
      </div>
      </div>

      <div className='container header'>
      <Link to={"/"} > <img src={logos} className="logos-header" /></Link>
      <Nav className='datos-navbar col-2'>
                     
      {(registrado == true) && 
                          <>
                                <Link to={"/cart"} className="mt-3 contenedor-carritos "><li className='mr-4'> 
                                { (cart.length!==0) && <CartWidget/>  }</li></Link>
                                <Perfil/>
                           </>
                                }
                                </Nav>
      </div>
      
      
                
       

                     
                    <div className='nav-bar'>
                       <  div  className='navbar-columna col-12'>
                                   
                       <div className='navbar-div col-3'><Link to={"/"} className="mt-3 contenedor-carrito "> TODOS LOS PRODUCTOS </Link> </div>
                                   <div className='navbar-div col-3'><Link to={"/categoria/futbol"} className="mt-3 contenedor-carrito "> FUTBOL </Link> </div>
                                <div  className='navbar-div col-3'><Link to={"/categoria/tiempo libre"} className="mt-3 contenedor-carrito "> TIEMPO LIBRE</Link> </div>
                                <div className='navbar-div col-3'><Link to={"/categoria/basquet"} className="mt-3 contenedor-carrito "> BASQUET</Link> </div>
                              

                    
                          </div>
                          </div>
                            
       
      
        </div>
 
    )

 }

export default Menu    
