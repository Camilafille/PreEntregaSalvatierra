
import Cart from "../Cart/Cart";
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    VasoPosa
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link active">Emoticones</a></li>
                    <li className="nav-item"><a href="#" className="nav-link active">Flores</a></li>
                    <li className="nav-item"><a href="#" className="nav-link active">Milagritos</a></li>
                    <li className="nav-item"><a href="#" className="nav-link active">Juegos</a></li>
                </ul>

                <Cart />
            </div>
        </nav>
    );

}

export default NavBar;