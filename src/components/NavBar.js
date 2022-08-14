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
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/addProduct" activeClassName="active">
            Agregar Producto
          </NavLink>
          {/* <NavLink exact to="/listProduct" activeClassName="active">
            Lista de Producto
          </NavLink> */}
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
