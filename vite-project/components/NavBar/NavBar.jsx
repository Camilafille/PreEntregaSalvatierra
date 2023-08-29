import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary colorNavBar">
            <div className="container-fluid p-2 text-white">
            <Link className="navbar-brand " to="/">VasoPosa</Link>
            
                <ul className="navbar-nav">
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

                <Cart />
            </div>
        </nav>
    );

}

export default NavBar;