import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from './NavBar.module.css';
function NavBar() {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary colorNavBar">
            <div className="container-fluid p-2 text-white">
            <div>
            
                <Link className="navbar-brand fs-6 fw-lighter fst-italic info logo" to="/"><img src="/icono.jpg" className="logo"/>VasoPosa</Link>
            </div>
                <ul className={`navbar-nav p-3 justify-content-center nav-underline ${styles.navItemsB}`}>
                    <li className={`nav-item align-middle justify-content-center ${styles.navItemB}`}>
                        <Link className="nav-link active text-center align-middle fs-3" to="/">Inicio</Link>
                    </li>
                    <li className={`nav-item p-3 ${styles.navItemB}`}>
                        <NavLink to="/category/Emoticones" className="nav-link fs-5">Emoticones</NavLink>
                    </li>
                    <li className={`nav-item p-3 ${styles.navItemB}`}>
                        <NavLink to="/category/Flores" className="nav-link  fs-5">Flores</NavLink>
                    </li>
                    <li className={`nav-item p-3 ${styles.navItemB}`}>
                        <NavLink to="/category/Milagritos"  className="nav-link  fs-5">Milagritos</NavLink>
                    </li>
                    <li className={`nav-item p-3 ${styles.navItemB}`}>
                        <NavLink to="/category/Juegos" className="nav-link fs-5">Juegos</NavLink>
                    </li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    );

}

export default NavBar;