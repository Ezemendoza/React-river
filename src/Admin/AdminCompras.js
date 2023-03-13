import {  useParams } from "react-router-dom"
import ProductosAdmin from "./Productos/Productos";
import OrdenesAdmin from "./Ordenes/ordenes";
import UsuariosAdmin from "./Usuarios/UsuariosAdmin";
import UsuarioAdmin from "./Usuarios/UsuariosAdmin";
const AdminCompras = () => {
   
    const {seleccion} = useParams()
   
    return (<div>

       {(seleccion == "productos") &&
        <ProductosAdmin item={seleccion}/>
       }
        {(seleccion == "ordenes") &&
        <OrdenesAdmin/>
       }
       {(seleccion == "usuarios") &&
            <UsuarioAdmin/>
       }
    </div>
    )
}

export default AdminCompras