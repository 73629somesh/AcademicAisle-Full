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
          {/* <Link className="nav-link " to="/myorders">
            Contacted Vendors
          </Link> */}
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
        {/* <li className="nav-item active">
          <Link className="nav-link " to="/myorders">
            Contacted Products
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link"
            to="/wishlist"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Wishlist"
          >
            <IoIosHeart style={{ color: "red", fontSize: "2rem" }} />
            {state.cart.length !== 0 && (
              <span className="badge badge-success p-2">
                {state.cart
                  .map((x) => x.qty)
                  .reduce((a, b) => parseInt(a) + parseInt(b))}
              </span>
            )}
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link"
            to="/cprofile"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Profile"
          >
            <CgProfile style={{ color: "black", fontSize: "2rem" }} />
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link"
            to="/feedback"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Feedback"
          >
            <MdFeedback style={{ color: "blue", fontSize: "2rem" }} />
          </Link>
        </li>
        <li className="nav-item active">
          <Link
            className="nav-link logout-button"
            onClick={logout}
            to="/"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Logout"
          >
            <TbLogout style={{ color: "gold", fontSize: "2rem" }} />
          </Link>
        </li> */}
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

        {/* <li className="nav-item active">
          <Link className="nav-link " to="/sprofile">
            My Profile
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link " to="/addcategory">
            ADD CATEGORY
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link " to="/add-product">
            Add Product
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link " to="/myproducts">
            My Products
          </Link>
        </li>
        <li className="nav-item active logout-button">
          <Link className="nav-link " onClick={logout} to="/">
            Logout
          </Link>
        </li> */}
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
        {/* <Link className="nav-link " to="/orders">
          All Orders
        </Link> */}
        <Link className="nav-link " to="/aprofile">
          My Profile
        </Link>
        <Link className="nav-link logout-button" onClick={logout} to="/">
          Logout
        </Link>
        </NavDropdown>
      {/* <li className="nav-item active ">
        <Link className="nav-link " to="/aprofile">
          My Profile
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link " to="/sellers">
          Vendors
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link " to="/viewfeedback">
          Feedbacks
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link " to="/customers">
          Customers
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link " to="/orders">
          All Orders
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link logout-button" onClick={logout} to="/">
          Logout
        </Link>
      </li> */}
    </ul>
  );
};

export default RoleNavbar;
