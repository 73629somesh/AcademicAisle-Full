import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginvalidation from "../loginvalidation";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import image1 from "../images/Login image.jpeg";

function AdminLogin() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
 
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginvalidation(user));
    setSubmitted(true);
  };

  window.onbeforeunload = function () {
    sessionStorage.setItem("origin", window.location.href);
  };

  window.onload = function () {
    console.log("In onLoad Event");
    if (window.location.href == sessionStorage.getItem("origin")) {
      dispatch({ type: "LogOut" });
      
      
    }
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(user);
      axios
        .post("http://localhost:8080/api/admin/validate", user)
        .then((resp) => {
          let result = resp.data.data;
          console.log(resp.data.data);
          sessionStorage.setItem("email", result.email);
          sessionStorage.setItem("uname", result.uname);
          sessionStorage.setItem("role", "admin");
          swal({
            title: "Success!",
            text: "Login Successful!",
            icon: "success",
            button: "OK",
          });
          dispatch({ type: "IsLoggedIn" });
          navigate("/");
        })
        .catch((error) => {
          console.log("Error", error);
          
          swal({
            title: "Error!",
            text: "Invalid username or password",
            icon: "error",
            button: "OK",
          });
        });
    }
  }, [errors]);

  return (
    
    <>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img src={image1} alt="Not Found" height={700}></img>
          </div>
          <div
            className="col-5 d-flex flex-column justify-content-center align-items-center col-md-4 bg-light h-60"
            
          >
            <div className="mydiv">
              <h4 className="text-center">Admin Login</h4>
              <h1>Academic Aisle</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  className="form-control "
                  placeholder="Enter Your email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control "
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2 mb-2">
                Submit
              </button>
              <br></br>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
