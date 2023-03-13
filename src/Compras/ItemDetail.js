import { Link } from "react-router-dom"


const ItemCompra = ({item}) => {

        return (
           <div className="row contaner col-12">
         <Link to={`/miscompras/${item.id}`} className="card-item-estilo">
          
          <p className=" mb-0 categoria-item-detail">{item.id}</p></Link>
             </div>
             )}
          
      

export default ItemCompra