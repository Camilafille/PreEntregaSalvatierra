const Cart = () => {
    return(
        <div> 
            <button className="btn btn-outline position-relative" >
            <i className="bi bi-cart3"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">productos en el cart</span>
            </span>
            </button>

        </div>
    )
}
export default Cart;