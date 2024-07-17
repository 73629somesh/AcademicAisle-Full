import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginvalidation from "../loginvalidation";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import image1 from "../images/Login image.jpeg";


function CustomerLogin() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginvalidation(user));
    setSubmitted(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(user);
      axios
        .post("http://localhost:8080/api/customers/validate", user)
        .then((resp) => {
          let result = resp.data.data;
          console.log(resp.data.data);
          sessionStorage.setItem("email", result.email);
          sessionStorage.setItem("uname", result.name);
          sessionStorage.setItem("role", "customer");
          sessionStorage.setItem("id", result.id);
          swal({
            title: "Success!",
            text: "Logged in successfully",
            icon: "success",
            button: "OK",
          });
          dispatch({ type: "IsLoggedIn" });
          navigate("/");
        })
        .catch((error) => {
          console.log("Error", error);
          // alert("Invalid username or password");
          swal({
            title: "Error!",
            text: "Invalid username or password",
            icon: "warning",
            button: "OK",
          });
        });
    }
  }, [errors]);

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
              <h4 className="text-center">Customer Login</h4>
              <h1>Academic Aisle</h1>

            </div>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  id="exampleInputEmail1"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  className="form-control form-control-sm"
                  placeholder="name@example.com"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  id="exampleInputPassword1"
                  className="form-control form-control-sm"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="password"
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
              <a href="/register">Don't have a account? Register here</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerLogin;
