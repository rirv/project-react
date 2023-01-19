import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

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
              to="/category/men's clothing"
            >
              Hombre
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/category/women's clothing"
            >
              Mujer
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/category/jewelery"
            >
              Joyas
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
