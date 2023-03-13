import { Boton, ContenedorTerminos, Formulario,  Label} from "./Elementos";
import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import "./User.css"
import ComponenteInput from "./Input";
import PiePagina from "../PiePagina/PiePagina";

export const User = () => {
    const{handlerCambios, registrarUsuario, usuario,cambiarUsuario, nombre,cambiarNombre, nacimiento,cambiarNacimiento, email,cambiarEmail, password,cambiarPassword,cambiarPassword2,password2, cambiarTerminos,terminos,cambiarFormularioValido, expresiones} = useContext(UserContext)


    const validarPassword = () =>{
      if(password2.campo !== password.campo){
         return cambiarPassword2({...password2 , valido: "false"})
      }
    }

    const onChangeTerminos = (e) => {
      cambiarTerminos(e.target.checked)
    }
    const submit = (e)=>{
      e.preventDefault()
      if(
        usuario.valido=== "true" &&
        nombre.valido === 'true' &&
        password.valido === 'true' &&
        password2.valido === 'true' &&
        email.valido === 'true' &&

        terminos
      ){
        cambiarFormularioValido(true);
        
        registrarUsuario(usuario.campo, nombre.campo, password.campo, email.campo,  nacimiento.campo)


      }
      else{
        cambiarFormularioValido(false)
      }
    }

    return (
      <div>

        <h1 className="text-center mt-4">Registrate</h1>
          <Formulario onClick={handlerCambios}>
            <ComponenteInput
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Nombre"
              placeholder="Nombre Completo"
              name="nombre"
              leyendaError="Tiene que ser de 4 a 16 dígitos y contener letras"
              expresionRegular={expresiones.nombre}
					      />
           
              <ComponenteInput
              estado={usuario}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Usuario"
              placeholder="Usuario"
              name="usuario"
              leyendaError="El usuario tiene que ser de 4 a 16 dígitos"
              expresionRegular={expresiones.usuario}
					      />
              
                  <ComponenteInput
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo="password"
              label="Contraseña"
              placeholder="Contraseña"
              name="password"
              leyendaError="La contraseña tiene que tener minimo 6 digitos"
              expresionRegular={expresiones.password}
              
					      />
            
                
              <ComponenteInput
              estado={password2}
              cambiarEstado={cambiarPassword2}
              tipo="password"
              label="Repetir Contraseña"
              placeholder="Repetir Contraseña"
              name="password 2"
              leyendaError="Las contraseñas no coinciden"
              expresionRegular={expresiones.password}
              funcion={validarPassword}
					      />
              <ComponenteInput
              estado={email}
              cambiarEstado={cambiarEmail}
              tipo="email"
              label="Email"
              placeholder="Email"
              name="email"
              leyendaError="Las contraseñas no coinciden"
              expresionRegular={expresiones.email}
					      />
              <ComponenteInput
              estado={nacimiento}
              cambiarEstado={cambiarNacimiento}
              tipo="nacimiento"
              label="Fecha de Nacimiento"
              placeholder="09/12/2000"
              name="nacimiento"
              leyendaError="Las contraseñas no coinciden"
              expresionRegular={expresiones.password}
              
					      />

              
              <ContenedorTerminos>
                <Label> 
                  <input type="checkbox" name="terminos" id="terminos" checked={terminos} onChange={onChangeTerminos} />
                  Acepto los Terminos y Condiciones
                </Label>
              </ContenedorTerminos>
      
                <Boton onClick={submit} className="btn" > Registrarte</Boton>

          </Formulario>
          <PiePagina/>
      </div>
    )
}
