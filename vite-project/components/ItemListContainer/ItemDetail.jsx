import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {


  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="col-3 p-3">
        <div className="card">
            <div className="card-body">
              <img src={item.imageId} alt={item.imageId} className="card-img-top" />
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">${item.price}</p>
              <p className="card-text">{item.categoryId}</p>
              <p className="card-text">{item.description}</p>
              
            </div>
        </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;












