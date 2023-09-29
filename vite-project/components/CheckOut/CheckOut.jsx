/* eslint-disable no-undef */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import  CartContext  from '../Context/CartContext';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Field from "./Field";

const mapCart = (cart) => {
    return cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        title: item.title,
    }));
};

const Checkout = () => {
    const [formState, setFormState] = useState({
        name: "",
        apellido: "",
        email: "",
        phone: "",
    });
    const { name, apellido, email, phone } = formState;
    const [orderId, setOrderId] = useState("");
    const { cart, clear } = useContext(CartContext);

    const onChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const isFormValid = name && apellido && email && phone;

    const createOrder = (event) => {
        event.preventDefault();

        if (isFormValid) {
            const order = {
                buyer: formState,
                items: mapCart(cart),
                total,
                date: serverTimestamp(),
            };

            const db = getFirestore();

            const orderCollection = collection(db, "orders");

            addDoc(orderCollection, order)
                .then((docRef) => {
                    setOrderId(docRef.id);
                    console.log("Orden Creada con ID", docRef.id);
                })
                .catch((err) => {
                    console.log(err);
                });
            clear();
        }
    };

    if (orderId) {
        return <h2>Orden generada con el id: {orderId}</h2>;
    }

    const cartTotal = (cart) => {
        let total = 0;

        cart.forEach((item) => {
            if (!isNaN(item.price) && !isNaN(item.quantity)) {
                total += item.quantity * item.price;
            }
        });
        return total;
    };
    const total= cartTotal(cart);

    return (
        <div>
            <Link to="/cart">
                <button className="btn btn-light m-1">Volver <i className="bi bi-arrow-left"></i></button>
            </Link>
            <form className="container">
                <h2 className="text-center mt-3">Ingresa tus datos para completar la compra <i className="bi bi-bag-heart-fill"></i></h2>
                <div className="container p-2">
                    <div className="d-flex justify-content-center">
                        <Field label="Nombre:" name="name" type="text" placeholder="Nombre" onChange={onChange} />
                        <Field label="Apellido:" name="apellido" type="text" placeholder="Apellido" onChange={onChange} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Field label="Email:" name="email" type="email" placeholder="email@gmail.com" onChange={onChange} />
                        <Field label="Telefono:" name="phone" type="tel" placeholder="phone-number" onChange={onChange} />
                    </div>
                    <div className="d-flex justify-content-center mt-4 d-grid">
                        <button onClick={createOrder} className="btn btn-info w-25 mx-auto" disabled={!isFormValid} type="submit">Finalizar compra</button>
                    </div>
                </div>
            </form>

            <h2 className="p-3">Resumen de la compra</h2>
            <ul>
    {cart.map((item) => (
        <li key={item.id}>
            <div>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={item.imageId} alt={item.description} />
                    <div className="mx-5">
                        <h4 className="mb-4">{item.title}</h4>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio por unidad: $ {item.price}</p>
                    </div>
                    
                </div>
            </div>
        </li>
    ))}
</ul>

<div className="text-center mt-4">
    <h2 className=" m-5">Compra Total: $ {total}</h2>
</div>






        </div>
    );
};

export default Checkout;