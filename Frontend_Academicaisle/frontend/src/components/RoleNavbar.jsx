import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginRegisterMenu from "./LoginRegisterMenu";
import { useEffect } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

const RoleNavbar = ({ isLoggedIn }) => {
  const logout = (e) => {
    dispatch({ type: "LogOut" });
    sessionStorage.clear();
    console.log("Logged in");
    navigate("/");
  };


  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(sessionStorage.getItem("role"), isLoggedIn);

  if (!isLoggedIn) {
    return <LoginRegisterMenu />;
  } else if (sessionStorage.getItem("role") === "customer") {
    return (
      <ul className="navbar-nav ml-auto">
        <NavDropdown
          title={
            <span style={{color: 'white'}}>
              Welcome {state.loggedin.Username}
            </span>
          }
          id="basic-nav-dropdown"
        >
          <Link className="nav-link " to="/wishlist">
              My Wishlist
            {state.cart.length !== 0 && (
              <span className="badge badge-success p-2">
                {state.cart
                  .map((x) => x.qty)
                  .reduce((a, b) => parseInt(a) + parseInt(b))}
              </span>
            )}
          </Link>
          <Link className="nav-link " to="/cprofile">
            My Profile
          </Link>
          <Link className="nav-link " to="/feedback">
            Feedback
          </Link>
          <Link className="nav-link "onClick={logout} to="/" >
            Logout
          </Link>
        </NavDropdown>
 
      </ul>
    );
  } else if (sessionStorage.getItem("role") === "seller") {
    return (
      <ul className="navbar-nav ml-auto ">

<NavDropdown
          title={
            <span style={{color: 'white'}}>
              Welcome {state.loggedin.Username}
            </span>
          }
          id="basic-nav-dropdown"
        >
          <Link className="nav-link " to="/sprofile" >
            My Profile
          </Link>
          <Link className="nav-link " to="/add-product">
            Add Product
          </Link>
          <Link className="nav-link " to="/myproducts">
            My Products
          </Link>
          <Link className="nav-link " onClick={logout} to="/">
            Logout
          </Link>
        </NavDropdown>

        
      </ul>
    );
  }
  return (
    <ul className="navbar-nav ml-auto ">
      <NavDropdown
          title={
            <span style={{color: 'white'}}>
              Welcome {state.loggedin.Username}
            </span>
          }
          id="basic-nav-dropdown"
        >
         
        <Link className="nav-link " to="/addcategory">
            Add Category
          </Link>
        <Link className="nav-link " to="/sellers">
          Sellers
        </Link>
        <Link className="nav-link " to="/viewfeedback">
          Feedbacks
        </Link>
        <Link className="nav-link " to="/customers">
          Customers
        </Link>
        <Link className="nav-link " to="/allProduct">
          All Products
        </Link>
        <Link className="nav-link " to="/aprofile">
          My Profile
        </Link>
        <Link className="nav-link logout-button" onClick={logout} to="/">
          Logout
        </Link>
        </NavDropdown>
      
    </ul>
  );
};

export default RoleNavbar;
