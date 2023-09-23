/* eslint-disable react/prop-types */

const ItemCounter = ({ stock, onChange, quantity }) => {
    const increment = () => {
      if (quantity < stock) {
        onChange(quantity + 1);
      }
    };
  
    const decrement = () => {
      if (quantity > 1) {
        onChange(quantity - 1);
      }
    };

    return (
        <div >
          <div className="d-flex justify-content-between">
          <button  type="button"  className="btn btn-info" onClick={decrement}>
            {" "}
            - {" "}
          </button>
              <h5>Cantidad: {quantity}</h5>
          <button type="button"  className="btn btn-info" onClick={increment}>
            {" "}
            +{" "}
          </button>
          </div>
        </div>
    );
  };
  export default ItemCounter;