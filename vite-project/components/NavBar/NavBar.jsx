import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary colorNavBar">
            <div className="container-fluid p-2 text-white">
            <div>
                <img src="icono.jpg" className="logo"/>
                <Link className="navbar-brand " to="/">VasoPosa</Link>
            </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="navbar-brand " to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Emoticones" className="nav-link active ">Emoticones</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Flores" className="nav-link active ">Flores</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Milagritos"  className="nav-link active ">Milagritos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Juegos" className="nav-link active ">Juegos</NavLink>
                    </li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    );

}

export default NavBar;