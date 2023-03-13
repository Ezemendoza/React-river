import { Person } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import './navBar.css';
import {app} from "../firebase/config"
import { getAuth} from "firebase/auth";
import { UserContext } from '../UserContext/UserContext';
import { useContext} from 'react';

export const Perfil = ({}) => {
  const{setRegistrado} = useContext(UserContext)
  const{admin} = useContext(UserContext)
 const auth = getAuth(app)

const cerrar = ()=>{
      auth.signOut()
      .then(()=>{
    setRegistrado(false)
  })
}
 


    return (
      <div>

          <Dropdown>
                    <Dropdown.Toggle className='mt-4 btn boton-header'  >
                    <Person/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Link to={"/perfil"}><button className='dropdown-item'>Mi Perfil</button></Link>
                    {(admin==true) &&  <Link to={'/admin'}><button className='dropdown-item'>Admin</button></Link>}
                      <Link to={"/miscompras"}> <button className='dropdown-item'>Mis Compras </button></Link>
                      <button onClick={ ()=> cerrar(auth)} className="dropdown-item"> Cerrar Sesion</button>

                    </Dropdown.Menu>
                  </Dropdown>

      </div>
    )
}

