/* eslint-disable react/prop-types */

const ItemCount = ({ stock, onChange, quantity }) => {
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
        <div className="row">
          <button  type="button"  className="btn btn-info" onClick={decrement}>
            {" "}
            -{" "}
          </button>
          <h5 >{quantity}</h5>
          <button type="button"  className="btn btn-info" onClick={increment}>
            {" "}
            +{" "}
          </button>
        </div>
    );
  };
  export default ItemCount;