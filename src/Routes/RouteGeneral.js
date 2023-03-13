import {BrowserRouter } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import RoutePublico from './RoutePublico';
import Menu from '../navBar/navBar';
import RoutePrivado from './RoutePrivado';


const RouteGeneral = () => {
    const{registrado} = useContext(UserContext)


    return (
        <BrowserRouter>
                       <Menu/>
        {registrado ? <RoutePrivado/>:<RoutePublico/>
            
        } 
                     
                            
        </BrowserRouter>
    
    )
}

export default RouteGeneral