
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { BiArrowToRight, BiPerson } from "react-icons/bi";
// import { FaUserPlus } from "react-icons/fa";

function LoginRegisterMenu() {
    return (
        <ul className="navbar-nav" style={{marginLeft: "38rem"}}>
      <li className="nav-item dropdown-white">
        <NavDropdown
          title={
            <span style={{color: 'white'}}>
               Login
            </span>
          }
          id="basic-nav-dropdown"
        >
          <Link className="dropdown-item" to="/alogin">
            Admin
          </Link>
          <Link className="dropdown-item" to="/slogin">
            Seller
          </Link>
          <Link className="dropdown-item" to="/clogin">
            Customer
          </Link>
        </NavDropdown>
      </li>
      <li className="nav-item dropdown">
        <NavDropdown
          title={
            <span  style={{color: 'white'}}>
               Sign Up
              {/* <BiPerson className="icon" /> Sign Up */}
            </span>
          }
          id="basic-nav-dropdown"
          className="drop-left" 
        >
          <Link className="dropdown-item" to="/regsupplier">
            Seller
          </Link>
          <Link className="dropdown-item" to="/register">
            Customer
          </Link>
        </NavDropdown>
      </li>
    </ul>
    )
}

export default LoginRegisterMenu;