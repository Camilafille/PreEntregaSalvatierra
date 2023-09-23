import propTypes from "prop-types";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import  { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ItemList = ({ items, isLoading }) => {

  const { addItem, cart } = useContext(CartContext);

  const [quantityToAdd, setQuantityToAdd] = useState(1);


  const handleAddToCart = (e) => {
    addItem(items, quantityToAdd);
    e.preventDefault();
    toast('Producto agregado correctamente', {
      position: "top-right",
      autoClose: 1000,
      theme: "light",
      closeOnClick: true,
    });
  };
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  const cartNotEmpty = cart.length > 0;
  return (
    <div>
      <div className="text-center bg-primary-subtle p-4">
        <h1 className="fs-2">Bienvenidos a VasoPosa: Elegancia Tejida en Cada Posavasos</h1>
        <p className="fs-5 fw-light">Ya sea que estés buscando un regalo especial o desees elevar tu propia colección de posavasos, en VasoPosa encontrarás la perfección tejida en cada detalle. <br/>
          Explora nuestro catálogo y permite que la belleza tejida de VasoPosa adorne tus momentos más preciados.</p>
      </div>
          
        <ul className="row">
          {items.map((item) => (
            <li  className="col-3 p-3" key={item.id}>
              
              <Link to={`/item/${item.id}`}>
                <div className="container">
                <div className="card text-center">
                  <div className="card-body">
                    <img src={item.imageId} alt={item.imageId} className="card-img-top" />
                    
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">Precio $ {item.price}</p>
                    <p className="card-text">Categoria: {item.categoryId}</p>
                  
                  <ItemCounter initial={1} stock={item.stock} quantity={quantityToAdd} onChange={setQuantityToAdd}/>
                    
                  <div className="d-flex align-items-center justify-content-center">
                      <button className="btn btn-light m-3 "  onClick={handleAddToCart}>Agregar al carrito</button>
                  </div>
                  <Link to='/Cart'>
                      <button className="btn btn-info  m-3">Ir al carrito</button>
                  </Link>
                
              </div>
            </div>
          </div>
          </Link>
          
            </li>
          ))}
        </ul>
      <div className="p-4">
        <h5>Para finalizar la compra:</h5>
        {cartNotEmpty ? (
          <Link to="/checkout">
            <button className="btn btn-info m-2">Ir a finalizar compra</button>
          </Link>
        ) : (
          <p>No hay artículos en el carrito</p>
        )}
        
      </div>
        
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;