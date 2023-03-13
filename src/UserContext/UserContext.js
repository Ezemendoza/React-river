import { createContext, useState } from "react";
import {app, db} from "../firebase/config"
import { getAuth,  createUserWithEmailAndPassword} from "firebase/auth";
import { collection, getDocs, query, where,doc, setDoc } from 'firebase/firestore';



export const UserContext = createContext()

export const UserProvider =({children})=>{
const auth=getAuth(app)


const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
const [nombre, cambiarNombre] = useState({campo: '', valido: null});
const [password, cambiarPassword] = useState({campo: '', valido: null});
const [password2, cambiarPassword2] = useState({campo: '', valido: null});
const [email, cambiarEmail] = useState({campo: '', valido: null});
const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
const [nacimiento, cambiarNacimiento] = useState({campo: '', valido: null});
const [terminos, cambiarTerminos] = useState(false);
const [formularioValido, cambiarFormularioValido] = useState(null);
const [registrado, setRegistrado] = useState(false)
const [codigo, setCodigo] =useState({campo:'', valido:null})
const [nombreEntrega, setNombreEntrega] =useState({campo:'', valido:null})
const [apellidoEntrega, setApellidoEntrega] =useState({campo:'', valido:null})
const [calleEntrega, setCalleEntrega] =useState({campo:'', valido:null})
const [departamentoEntrega, setDepartamentoEntrega] =useState({campo:'', valido:null})
const [cpEntrega, setCpEntrega] =useState({campo:'', valido:null})
const [provinciaEntrega, setProvinciaEntrega] =useState({campo:'', valido:null})
const [localidadEntrega, setLocalidadEntrega] =useState({campo:'', valido:null})
const [telefonoEntrega, setTelefonoEntrega] =useState({campo:'', valido:null})
const [numeroTarjeta, setnumeroTarjeta] =useState({campo:'', valido:null})
const [titularTarjeta, settitularTarjeta] =useState({campo:'', valido:null})
const [vencimientoTarjeta, setvencimientoTarjeta] =useState({campo:'', valido:null})
const [cvvTarjeta, setcvvTarjeta] =useState({campo:'', valido:null})
const [admin, setAdmin] = useState(false)
const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, 
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    calle: /^[a-zA-ZÀ-ÿ\s]+[0-9]{1,40}$/, 
    password: /^.{4,12}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ ,
    codigopostal: /^\d{4}$/ ,
    nacimiento:/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    numero:/^[a-zA-Z0-9_-]{16}$/,
    vencimiento:/^\d{2}\/\d{2}$/,
    cvv:/^\d{3}$/ ,
  }

  const productos= collection(db, "usuarios")
  const q = query(productos, where("email", "==", email.campo)) 
  getDocs(q)
      .then((resp)=>{
          const newItem= resp.docs.map(el=> {
            if(el.data().admin=="si"){
                setAdmin(true)
            }
            else{
                setAdmin(false)
            }
       
          })
      })


const registrarUsuario = async (usuario, nombre, password, email , telefono)=>{

        const firestore = collection(db, "usuarios")
  
    const info= await createUserWithEmailAndPassword(
        auth,
        email,
        password
 
     ).then((usuario)=>{
     
            return usuario
           
        })
    
        const docRef= doc(firestore, `${info.user.uid}`)
        setDoc(docRef,{ email:email, password:password, usuario: usuario, nombre: nombre,  telefono: telefono, nacimiento: nacimiento.campo, admin:""})
        setRegistrado(true)
         }
         


    return(
    <UserContext.Provider value={{registrarUsuario,registrado, auth, setRegistrado, usuario,cambiarUsuario, nombre,cambiarNombre, telefono,cambiarTelefono, nacimiento,cambiarNacimiento, email,cambiarEmail,
         password,cambiarPassword,cambiarPassword2,password2, cambiarTerminos,terminos,formularioValido,cambiarFormularioValido, expresiones, codigo, setCodigo,nombreEntrega, setNombreEntrega,apellidoEntrega, setApellidoEntrega, calleEntrega, setCalleEntrega,
        departamentoEntrega, setDepartamentoEntrega,cpEntrega, setCpEntrega, provinciaEntrega, setProvinciaEntrega,localidadEntrega, setLocalidadEntrega,telefonoEntrega, setTelefonoEntrega ,numeroTarjeta, setnumeroTarjeta,titularTarjeta, settitularTarjeta,vencimientoTarjeta, setvencimientoTarjeta,cvvTarjeta, setcvvTarjeta, admin}}>
        {children}
    </UserContext.Provider>
    
)
}
