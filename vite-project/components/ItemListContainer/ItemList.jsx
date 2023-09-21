import propTypes from "prop-types";
import { Link } from "react-router-dom";
import ItemCounter from "./ItemCounter"
const ItemList = ({ items, isLoading }) => {

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <Link to="/checkout">Ir a finalizar compra</Link>
      
        <ul className="row">
          {items.map((item) => (
            <li  className="col-3 p-3" key={item.id}>
              <Link to={`/item/${item.id}`}>
              <div className="card">
                  <div className="card-body">
                  <img src={item.imageId} alt={item.imageId} className="card-img-top" />
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">${item.price}</p>
                    <p className="card-text">{item.categoryId}</p>
                  <ItemCounter/>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;