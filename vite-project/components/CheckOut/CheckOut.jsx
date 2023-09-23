import  {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import{getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore';
import Field from "./Field";


 const cartTotal = (cart) => cart.reduce((acc, item) => acc + item.quantity * item.id.price, 0);

const mapCartToToOrderItems = (cart) => {
    return cart.map(item => ({
        id: item.id.id,
        quantity: item.quantity,
        price: item.id.price,
        title: item.id.name,
    }));
};




const Checkout = () => {

  const [orderId, setOrderId] = useState("");
  const [formState, setFormState] = useState({
  name: "",
  email: "",
  phone: "",
  });
  const { name, email, phone } = formState;

  const { cart, clear } = useContext(CartContext);

      const onChange = (event) => {
      setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      });
  };

  const isFormValid = name && email && phone;

  
  const createOrder = (event) => {
      event.preventDefault();

      if (isFormValid) {
          const order = {
              buyer: formState,
              items: mapCartToToOrderItems(cart),
              total,
              date: serverTimestamp(),
          };

          const db = getFirestore();

          const orderCollection = collection(db, "orders");

          addDoc(orderCollection, order)
              .then((docRef) => {
                  setOrderId(docRef.id)
                  console.log("Orden Creada con ID", docRef.id);
              })
              .catch((err) => {
                  console.log("Error al crear la orden:", err)
              })
          clear();
      }
  };

  if (orderId) {
      return <h2 > Orden generada con el id: {orderId}</h2>
  }


  const total = cartTotal(cart);


  return (
      
      <div>
          <Link to="/cart">
              <button  className="btn btn-light m-1"> Volver </button>
          </Link>

          <form className="container">
              <h2 className="text-center mt-3">Ingresa tus datos para completar la compra</h2>
              <div className="container p-2  ">
                  <div className="d-flex justify-content-center">
                      <Field label="Nombre:" name="name" type="text" placeholder="Nombre" onChange={onChange} />
                      <Field label="Apellido:" name="apellido" type="text" placeholder="Apellido" onChange={onChange} />
                  </div>
                  <div className="d-flex justify-content-center">

                      <Field label="Email:" name="email" type="email" placeholder="email@gmail.com" onChange={onChange} />
                      <Field label="Telefono:" name="phone" type="tel" placeholder="phone-number" onChange={onChange} />
                  </div>
                  <div className="d-flex justify-content-center mt-4 d-grid">
                      <button onClick={createOrder} className="btn btn-info w-25 mx-auto" disabled={!isFormValid} type="submit"> Crear orden </button>
                  </div>
                  
              </div>
              
          </form>

          <ul className="">
              {cart.map(item => (
                  <li  key={item.id}>
                      <div key={item.id} className="mt-4">
                          <div className="d-flex align-items-center justify-content-center">
                              <img src={item.imageId}  alt={item.description}  />
                              <div className="mx-5">
                                  <h4 className="mb-4">{item.title}</h4>
                                  <p>Cantidad: {item.quantity}</p>
                                  <p> <span>Precio:</span> $ {item.price}</p>
                              </div>
                              <h3 className="mx-auto my-3">Total de la Compra: $ {total}</h3>
                          </div>
                      </div>
                  </li>
              ))}
          </ul>
          

          
          
      </div>
  );
};

export default Checkout;