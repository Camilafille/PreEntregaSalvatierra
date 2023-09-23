import  {useContext} from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart } = useContext(CartContext); 
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
    <div>
        <div className="m-3  bg-primary-subtle">
        <Link to={'/cart'}>
            <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart"/> 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalQuantity > 0 && totalQuantity}
                </span>
            </button>
            </Link>
        </div>
    </div>
    );
};

export default CartWidget;