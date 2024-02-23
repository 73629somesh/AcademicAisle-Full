import { Link, useLocation } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import RoleNavbar from "./RoleNavbar"
import { useSelector } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../images/Main_Logo.png';
import Logo1 from '../images/MainLogo3.png';

function NavBar() {
    const state = useSelector((state) => state);
    console.log("LoggedIn ", state.loggedin)
    console.log("Cart ", state.cart)
    const location = useLocation()

    const [category, setCategory] = useState([]);

    useEffect(() => {
        console.log("Welcome to NavBar");

        axios.get("http://localhost:8080/api/category/getallcategory")
            .then(resp => {
                console.log(resp);
                setCategory(resp.data);
                console.log("GetAllCategory");
            }).catch(error => {
                toast.error("Category unable to fetch")
            }, [])

    }, [location]);


    return (
        <Navbar bg="dark" expand="lg" className="position-sticky" style={{ top: 0, zIndex: "1000", color: "black", fontWeight: '600', fontSize: '18px' }}>
        <div className="d-flex justify-content-between align-items-center" style={{width: "40%"}}>
    
            {/* <Link className="navbar-brand" to='/'>
            <img height={'80px'} width={'150px'} style={{ cursor: 'pointer', marginTop: '10px' }} src={Logo} />
          </Link> */}
          <Link className="navbar-brand" to='/'>
            <img height={'20px'} width={'200px'} style={{ cursor: 'pointer', marginTop: '10px' }} src={Logo1} />
          </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="" style={{width: "30%"}}> 
                <Link className="nav-link" to="/" style={{color:'white'}}>Home</Link>
                <NavDropdown title={<span style={{color:'white'}}>Category</span>} id="basic-nav-dropdown" >
                    <NavDropdown.Item>
                        {category.map(cat => (
                            <Link key={cat.categoryId} className="dropdown-item" to={`/cats?cat=${cat.categoryName}`} style={{color:'black'}}>
                                {cat.categoryName}
                            </Link>
                        ))}
                    </NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="/aboutUs" style={{color:'white'}}>About Us</Link>
            </Nav>
            <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;


