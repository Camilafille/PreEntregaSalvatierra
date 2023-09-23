
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemListContainer/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";
import {CartProvider} from "../components/Context/CartContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "../components/Cart/Cart";
import CheckOut from "../components/CheckOut/CheckOut"
function App() {
  
  return (
    
  <div>

      <CartProvider>
      <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        
        <ToastContainer />
    </CartProvider>
    
  </div>



  );
}

export default App;
