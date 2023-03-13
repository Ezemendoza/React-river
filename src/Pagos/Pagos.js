import React, { useContext } from "react";
import { Boton, ContenedorTerminos, Label} from "../User/Elementos";
import ComponenteInput from "../User/Input";
import { UserContext } from "../UserContext/UserContext";
import {BsArrowRight} from "react-icons/bs";
import "./Pagos.css"
import ResumenCarrito from "../ResumenCarrito/ResumenCarrito";
import { Link } from 'react-router-dom';

const Pagos =() =>{
    const{ cambiarTerminos,terminos,cambiarFormularioValido, expresiones,nombreEntrega, setNombreEntrega,apellidoEntrega, setApellidoEntrega, calleEntrega, setCalleEntrega,
        departamentoEntrega, setDepartamentoEntrega,cpEntrega, setCpEntrega, provinciaEntrega, setProvinciaEntrega,localidadEntrega, setLocalidadEntrega,telefonoEntrega, setTelefonoEntrega} = useContext(UserContext)
        const onChangeTerminos = (e) => {
            cambiarTerminos(e.target.checked)
          }
      const submit = (e)=>{
        e.preventDefault()
  
     
        if(
          nombreEntrega.valido=== "true" &&
          apellidoEntrega.valido === 'true' &&
          calleEntrega.valido === 'true' &&
          cpEntrega.valido === 'true' &&
          provinciaEntrega.valido === 'true' &&
          localidadEntrega.valido === 'true' &&
          telefonoEntrega.valido === 'true' &&
          terminos
        ){
          cambiarFormularioValido(true);
     
        }
        else{
          cambiarFormularioValido(false)

        }
      }
      
  
    return(
    <div>

      <h2  className="informacion-pagos"><strong>INFORMACION DE ENTREGA</strong></h2>
    <div className="division-entregas">
    <div className="div-contacto col-7">
       
         <div className="grupo-contacto">
            <ComponenteInput
              estado={nombreEntrega}
              cambiarEstado={setNombreEntrega}
              tipo="text"
              label="Nombre"
              placeholder="Ezequiel"
              name="nombre"
              leyendaError="Introduce tu nombre"
              expresionRegular={expresiones.nombre}
              required="required" 
					      />
           
              <ComponenteInput
              estado={apellidoEntrega}
              cambiarEstado={setApellidoEntrega}
              tipo="text"
              label="Apellido"
              placeholder="Ezemendoza"
              name="apellido"
              leyendaError="Introduce tu apellido"
              expresionRegular={expresiones.nombre}
              required="required" 
					      />
      </div>
            <div className="grupo-contacto ">
                 <ComponenteInput
              estado={calleEntrega}
              cambiarEstado={setCalleEntrega}
              tipo="text"
              label="calle"
              placeholder="Siempre viva 123"
              name="calle"
              leyendaError="Introduci la direccion de la entrega"
              expresionRegular={expresiones.calle}
					      />
          <ComponenteInput
              estado={departamentoEntrega}
              cambiarEstado={setDepartamentoEntrega}
              tipo="departamento"
              label="Departamento / Piso"
              placeholder="Ej 1"
              name="Departamento / Piso"
					      />
                         </div>
            <div className="grupo-contacto ">
              
      
                          
                <ComponenteInput
              estado={cpEntrega}
              cambiarEstado={setCpEntrega}
              tipo="codigo Postal"
              label="Codigo Postal"
              placeholder="Codigo Postal"
              name="CodigoPostal"
              leyendaError="Introduci tu codigo postal"
              expresionRegular={expresiones.codigopostal}
					      />
                          
                     <ComponenteInput
              estado={provinciaEntrega}
              cambiarEstado={setProvinciaEntrega}
              tipo="provincia"
              label="Provincia"
              placeholder="Provincia"
              name="Provincia"
              leyendaError="Introduci tu provincia"
              expresionRegular={expresiones.nombre}
					      />
        </div>
 
               <div className="grupo-contacto">             

                 <ComponenteInput
              estado={localidadEntrega}
              cambiarEstado={setLocalidadEntrega}
              tipo="localidad"
              label="Localidad"
              placeholder="Localidad"
              name="Localidad"
              leyendaError="Introduci tu localidad"
              expresionRegular={expresiones.nombre}
              
					      />
                                  <ComponenteInput
              estado={telefonoEntrega}
              cambiarEstado={setTelefonoEntrega}
              tipo="telefono"
              label="Telefono"
              placeholder="Telefono"
              name="Telefono"
              leyendaError="Introduci tu telefono"
              expresionRegular={expresiones.telefono}
					      />
               </div>
               
               <div className="grupo-contacto-checkbox">
              
              <ContenedorTerminos>
                <Label> 
                  <input type="checkbox" name="terminos" id="terminos" checked={terminos} onChange={onChangeTerminos} />
                  Acepto los Terminos y Condiciones
                </Label>
              </ContenedorTerminos>
           <div className="w-100 ">
           {terminos && <Boton onClick={submit} ><Link to={"/tarjeta"} className="text-white">  Finalizar compra <BsArrowRight/></Link>  </Boton>}
           </div>
           
                </div>
          </div>
            <ResumenCarrito className="col-4"/>


             </div>
             </div>
    )
}
export default Pagos