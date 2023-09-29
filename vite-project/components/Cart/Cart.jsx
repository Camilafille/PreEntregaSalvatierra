
import  { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';


const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);

    return (
        <div>
            <h1 className="text-center mb-4"> Carrito <i className="bi bi-cart-plus-fill"></i></h1>
            {cart.length >= 1 ? (
        cart.map((item) => (
            <div key={item.id} className="mt-3 ">
                <div className="d-flex align-items-center justify-content-center">
                    <img src={item.imageId} alt={item.description} />
                    <div className="m-5 p-3">
                        <h3 className="mb-4"> {item.title} </h3>
                        <p>Cantidad: {item.quantity} </p>
                        <p> Precio: $ {item.price} </p>
                </div>
                <button
                onClick={() => removeItem(item.id)} className="btn btn-danger  badge"> X </button>
                </div>
            </div>
        ))
        ) : 
        ( <h3 className="text-center">El carrito está vacío</h3> )}
        <div className="my-5 d-flex justify-content-center">
        {cart.length === 0 ? (
            <div>
            <Link to="/">
                {" "}
                <button className="btn btn-info m-3">Volver <i className="bi bi-arrow-left"></i></button>
            </Link>
            </div>
        ) : (
            <div>
            <button key="clear" className="btn btn-danger m-3" onClick={() => clear()}> Vaciar carrito </button>
            <Link to="/checkout" className="btn btn-info m-3"> Checkout
            </Link>
            </div>
            )}
            </div>
    </div>
    );
};

export default Cart;
