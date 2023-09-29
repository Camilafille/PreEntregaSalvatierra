import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ item, isLoading }) => {
  const { addItem } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const handleAddToCart = () => {
    if (item.stock < quantityToAdd) {
      toast("No hay suficiente stock", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
        closeOnClick: true,
      });
    } else {
      addItem(item, quantityToAdd);
      toast("Producto agregado correctamente", {
        position: "top-right",
        autoClose: 1000,
        theme: "light",
        closeOnClick: true,
      });
    }
  };

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!item) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="d-flex justify-content-around">
      <div className="col-3 p-3">
        <div className="card">
          <div className="card-body">
            <img src={item.imageId} alt={item.imageId} className="card-img-top" />
            <h2 className="card-title">{item.title}</h2>
            <p className="card-text">Precio: $ {item.price}</p>
            <p className="card-text">Categoria: {item.categoryId}</p>
            <p className="card-text">{item.description}</p>

            <ItemCounter initial={1} stock={item.stock} quantity={quantityToAdd} onChange={setQuantityToAdd} />

            <div className="d-flex align-items-center justify-content-center">
              <button className="btn btn-light m-3" onClick={handleAddToCart}>
                Agregar al carrito <i className="bi bi-cart-plus-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5 pt-5">
        <h2 className="card-title text-start">{item.title}</h2>
        <p>{item.description}</p>
        <Link to="/">
          <button className="btn btn-info m-3">Volver</button>
        </Link>
        <Link to="/Cart">
          <button className="btn btn-info m-3">Ir al carrito</button>
        </Link>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;
