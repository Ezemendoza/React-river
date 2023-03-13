import { createContext, useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import {db} from "../firebase/config"



export const CartContext = createContext()
export const CartProvider =({children})=>{

    const [cart, setCart]=useState([])
    const{nombreEntrega, apellidoEntrega, calleEntrega, departamentoEntrega, cpEntrega, localidadEntrega, provinciaEntrega, telefono,email,codigo} = useContext(UserContext)
    const [orderId, setOrderId] = useState(null)
    const [cuota, setCuota] = useState({value:"", precio:""})
    const horario = new Date
    const nuevaOrden = async () =>{
        
        const orden ={
            items: cart.map(({id,cantidad,nombre,precio,img})=>({id,cantidad,nombre,precio,img})),
            total:totalPrecio(),
            NombreEntrega:nombreEntrega.campo,
            apellidoEntrega:apellidoEntrega.campo,
            calle:calleEntrega.campo,
            Departamento:departamentoEntrega.campo,
            CP:cpEntrega.campo,
            Localidad:localidadEntrega.campo,
            Pronvincia:provinciaEntrega.campo,
            telefono:telefono.campo,
            email:email.campo,
            fecha:horario.toLocaleDateString(),
     
            
        }

    const batch = writeBatch(db)
    const ordersRef = collection (db, "ordenes")
    const productosRef= collection(db, "productos")
    const q= query(productosRef,where(documentId(), `in`, cart.map((el)=>el.id)))
    
    const sinStock= []
    const productos = await getDocs(q)

    productos.docs.forEach((doc)=>{
        const agregarProductos =cart.find(prod=>prod.id===doc.id)
        if((doc.data().stock - agregarProductos.stock) >= 0){
            batch.update(doc.ref,{stock:doc.data().stock-agregarProductos.cantidad})
            
        }
        else{
            sinStock.push(agregarProductos)
        }
    })


if(sinStock.length===0){
    addDoc(ordersRef,orden)
         .then((doc)=>{
          
            setOrderId(doc.id)
              batch.commit()
           
    })
}
else{
    console.log("sin stock")
}

}
const addCart = (item)=>{

    const igual = retorno()
 const ok= sumar(item)

 if(cart.length===0){setCart([ ...cart, item])} else{
 
     if(igual !==true){setCart([ ...cart, item])}
     else{ cart.map((el)=>{if(el.cantidad>item.stock) { return el.cantidad=item.stock } else if(el.id===ok.id){ return el.cantidad= el.cantidad+item.cantidad}})}
  
}
function retorno() {
    return cart.some((el)=>el.id===item.id)
}
}

const totalPrecio =()=>{
    return cart.reduce((acc, prod)=>acc+=(prod.cantidad*prod.precio),0)
}


const carritoVacio= () => {
    setCart( [] )
  }

const removeItem = (id) => {
      setCart( cart.filter((prod) => prod.id !== id) )
  }


function sumar(item){
    return cart.find((el)=>el.id===item.id)
}



    return(<CartContext.Provider value={{ cart ,addCart, totalPrecio, carritoVacio, removeItem, orderId, nuevaOrden,cuota, setCuota}}>
                 {children}
    </CartContext.Provider>)
}