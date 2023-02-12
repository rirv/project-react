import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div>logo</div>
      <div>
        <ul className="options">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/category/hombre"
            >
              Hombre
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/category/mujer"
            >
              Mujer
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/category/accesorios"
            >
              Accesorios
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/cart" >
        <CartWidget />
        </Link>

      </div>
    </div>
  );
};

export default NavBar;
