import {  Routes, Route, Navigate} from "react-router-dom"
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import {Checkout} from '../Checkout/Checkout'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Cart from '../Cart/cart';
import { Recuperarcontrasena } from "../User/RecuperarContrasena";
import Pagos from "../Pagos/Pagos";
import Tarjeta from "../Tarjeta/Tarjeta";
import Compras from "../Compras/Compras";
import ItemCompras from "../Compras/ItemCompras";
import Admin from "../Admin/Admin";

import { UserContext } from "../UserContext/UserContext";
import { useContext } from "react";
import AdminCompras from "../Admin/AdminCompras";
import AdminCompraSeleccion from "../Admin/AdminCompraSeleccion";
import Filtros from "../Filtros/Filtros";
import AgregarProductos from "../Admin/Productos/agregarProductos";


const RoutePrivado = () => {
  const{admin} = useContext(UserContext)

  return ( 
                  <>
                    
                            <Routes>
                            <Route path='/' element={ <ItemListContainer/>}/>     
                            <Route path='/cart' element={ <Cart/>}/>
                            <Route path='/checkout' element={<Checkout/>} />
                            <Route path='*' element={ <Navigate to="/"/>}/>
                            <Route path='/:filtro/:categoriaId' element={ <ItemListContainer/>}/>              
                            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
                            <Route path="/miscompras/" element={<Compras/>}/>
                            <Route path='/miscompras/:itemCompras' element={<ItemCompras/>} />
                            <Route path="/pagos" element={<Pagos/>}/>
                            <Route path="/tarjeta" element={<Tarjeta/>}/>
                            <Route path='/perfil' element={<Recuperarcontrasena/>}/>
                            {(admin==true) &&             
                            <> 
                             <Route path='/admin' element={<Admin/>}/>
                              <Route path='/admin/:seleccion' element={<AdminCompras/>}/>
                              <Route path='/admin/:seleccion/:Adminid' element={<AdminCompraSeleccion/>}/>
                              <Route path='/admin/productosagregar' element={<AgregarProductos/>}/>
                            </>}
              
                            </Routes>
                </>
                   

  );
}

export default RoutePrivado

