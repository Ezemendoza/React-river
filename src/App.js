import { CartProvider } from './CartContext/CartContext';
import RouteGeneral from "./Routes/RouteGeneral";
import { UserProvider } from './UserContext/UserContext';

function App() {


  return ( 
   <UserProvider>
        <CartProvider>
                 <RouteGeneral/>
        </CartProvider>
   </UserProvider>
  );
}

export default App;
