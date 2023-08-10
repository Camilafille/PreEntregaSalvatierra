const Cart = () => {
    return(
        <div className="cartStyle"> 
            <button className="btn btn-outline position-relative" >
            <i className="bi bi-cart3"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0
            <span className="visually-hidden">productos en el cart</span>
            </span>
            </button>

        </div>
    )
}
export default Cart;