import { useContext } from 'react'
import carrito from '../carrito.png'
import { CartContext } from '../CartContext/CartContext'

const CartWidget = () => {
const{cart} = useContext(CartContext)


    return (
   <div><img src={carrito} alt="carrito"/><span className='contador-carrito'>{cart.reduce((acc, prod)=>acc+=(prod.cantidad),0)}</span></div>

   
        
 )}

export default CartWidget