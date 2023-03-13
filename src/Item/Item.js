
import GaleriaItem from "../GaleriaItem/GaleriaItem"



const Item = ({item}) => {
    return (
       <div className="row contaner col-12">
          <GaleriaItem item={item} />
          
          </div>
    )
}

export default Item