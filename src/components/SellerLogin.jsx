import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import loginvalidation from "../loginvalidation"
import { Link } from "react-router-dom";
import image1 from "../images/Login image.jpeg";
import { ToastContainer } from "react-toastify";
import swal from 'sweetalert';


function SellerLogin() {
    const dispatch=useDispatch()
    const [user, setUser] = useState({
        "email": "",
        "password": ""
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate();

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(loginvalidation(user))
        setSubmitted(true)
    }

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && submitted) {
            console.log(user)
            axios.post("http://localhost:8080/api/sellers/validate", user)
                .then(resp => {
                    let result = resp.data.data;
                    console.log(resp.data.data)
                    sessionStorage.setItem("email", result.email)
                    sessionStorage.setItem("uname", result.name)
                    sessionStorage.setItem("role", "seller")
                    sessionStorage.setItem("id", result.id)
                    dispatch({type:'IsLoggedIn'})
                    swal({
                        title: "Success!",
                        text: "Logged in successfully",
                        icon: "success",
                        button: "OK",
                    });
                    //toast.success("Logged in successfully");
                    navigate('/');
                })
                .catch(error => {
                    console.log("Error", error);
                    //toast.error("Invalid username or password");
                    swal({
                        title: "Error!",
                        text: "Invalid username or password",
                        icon: "warning",
                        button: "OK",
                    });
                })
        }
    }, [errors])


    return (
        <>
      <div class="container">
        <div class="row">
          <div class="col-7">
            <img src={image1} alt="Not Found" height={700}></img>
          </div>
          <div
            className="col-5 d-flex flex-column justify-content-center align-items-center col-md-4 bg-light"
            style={{ width: "525px" }}
          >
            <div className="mydiv">
            <h4 className="text-center">Seller Login</h4>
              <h1>Academic Aisle</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter your email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                />
              </div>

              <div className="row g-1">
                <div className="text-center mb-2 pl-3">
                  <Link to="/forgetPasswordCustomer" className="link-primary">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button type="submit" class="btn btn-primary mt-2 mb-2">
                Submit
              </button>
              <br></br>
              <a href="/RegSupplier">Don't have a account? Register here</a>
            </form>
          </div>
        </div>
      </div>
    </>
    );
}

export default SellerLogin;


