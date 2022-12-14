import { NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ol>
        {/* <li>
          <span>Componentes Link</span>
          <Link to="/">Home</Link>
          <Link to="/addProduct">Agregar Producto</Link>
        </li> */}
        <li>
          <span>Componentes NavLink</span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "blue")}
          >
            Home
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
