import  {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import{getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore';




 const createOrder = (orden) => {
    const db = getFirestore();
  
    const ordersCollection = collection(db, "orders");
  
    return addDoc(ordersCollection, orden);
  };

  const getCartTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const mapCart = (cart) => {
    return cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      price: item.price,
      title: item.title,
    }));
  };
    
  
  
  const CheckOut = () => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, clear } = useContext(CartContext);
  
    const total = getCartTotal(cart);
  
    const handleCheckout = () => {
      const order = {
        buyer: {
          name: "John",
          phone: "123456789",
          email: "john@gmail.com",
        },
        items: mapCart(cart),
        total,
        date: serverTimestamp(),
      };
  
      setIsLoading(true);
      createOrder(order).then((docRef) => {
        setOrderId(docRef.id);
        setIsLoading(false);
        clear();
      });
    };
  
    return (
      <div>
        
        <h1>Checkout</h1>
  
        <h2>Resumen de la compra</h2>
  
        {orderId && <p>El id de la orden es: {orderId}</p>}
  
        {!orderId && (
          <>
            <div>
              <h4>Formulario de contacto</h4>
              {/* TODO: Formulario */}
            </div>
  
            <div>
              <h4>Productos</h4>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <p>{item.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio por unidad: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                  </li>
                ))}
              </ul>
            </div>
  
            <p>Total de la compra: {total}</p>
  
            <button onClick={handleCheckout}>Finalizar compra</button>
  
            {isLoading && <p>Procesando compra...</p>}
          </>
        )}
      </div>
    );
  };

export default CheckOut;