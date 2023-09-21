import  {useContext} from 'react';
import { CartContext } from '../Context/CartContext';


    const getCartQuantity = (cart) => {
    
    let count = 0;
    
    cart.forEach((item) => {
    count += item.quantity;
    });

    return count;
    };
    const CartWidget = () => {
        const { cart } = useContext(CartContext);
        const quantity = getCartQuantity(cart);

        return <div>CartWidget {quantity > 0 ? quantity : ""}</div>;
       





 
}

export default CartWidget;