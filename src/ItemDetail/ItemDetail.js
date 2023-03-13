import { Link } from "react-router-dom"
import "./ItemDetail.css"
import Descarga from "../img/descarga.png"
const ItemDetail = ({item}) => {


    return (
        
        <div className="card-item-lista  menu mt-4">
        <Link to={`/item/${item.id}`} className="card-item-estilo">
        {item.stock== 0 && <img src={Descarga} className="sin-stock"/>}
    
        
        <img src={item.img} className="img-item-lista mt-2" alt="imagen-detail"/>
   
        
            <p className=" mb-0 categoria-item-detail mb-1 mt-1"><strong>{item.categoria}</strong></p></Link>
        <p className="text-muted categoria-item-detail mb-1"><strog>{item.nombre}</strog></p>
        <p className="text-muted id-item-detail mb-0"> ID:{item.id}</p>
        <h6 className="precio-item-detail text-start">${item.precio}</h6>
        
    </div>
    )
}

export default ItemDetail