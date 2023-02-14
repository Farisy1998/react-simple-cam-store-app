import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-3">
      <span className="navbar-brand">
        <i className="fa fa-shopping-bag"></i>
      </span>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
