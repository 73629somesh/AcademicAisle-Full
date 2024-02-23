import axios from "axios"
import { useState } from "react"
import swal from 'sweetalert';
import { toast } from "react-toastify";
import {Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdminProfile() {
    const email = sessionStorage.getItem("email")
    const uname = sessionStorage.getItem("uname")
    const navigate =useNavigate();
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({});

    const [user, setUser] = useState({
        "uname": uname,
        "email": email,
        "password": ""
    })

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    window.onbeforeunload = function(){
        sessionStorage.setItem("origin", window.location.href);
    }

    window.onload = function(){
        if(window.location.href == sessionStorage.getItem("origin")){
            dispatch({ type: 'IsLoggedIn' })
            //sessionStorage.clear();
            //navigate("/alogin");
        }
    }

    const handleSubmit = (e) => {

        if (user.uname === "") {
            setErrors(errors.name = "Name is required")
            toast.error("Name cannot be Empty")
        } else if (user.uname.search(/^[a-zA-Z ]{2,40}$/)) {
            setErrors(errors.name = "Enter valid name")
            toast.error("Enter valid Name")
        }
        e.preventDefault()
        if (Object.keys(errors).length === 0) {axios.post("http://localhost:8080/api/admin", user)
            .then(resp => {
                console.log(resp)
                swal({
                    title: "Success!",
                    text: "Profile updated successfully!",
                    icon: "success",
                    button: "OK",
                });
                sessionStorage.setItem("uname", user.uname)
            })
            .catch(error => {
                console.log("Error", error)
                swal({
                    title: "Error!",
                    text: "Update Failed!",
                    icon: "error",
                    button: "OK",
                });
            })
    }}

    return (
        <div className="container mt-1 text-black d-flex justify-content-center align-items-center bg-light" style={{height: "80vh"}}>
        <div className="row " style={{width: "100%"}}>
            <div className="col-sm-7 mx-auto" style={{ width:"100%"}} >
                <div className="card shadow bg-transparent mt-3" style={{ width:"100%", backgroundColor: "white"}}>
                    <div className="card-body" style={{width: "100%"}}>

                        <h4 className="p-2 text-center text-dark">Welcome Admin! {uname}</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label"><i className="fa fa-user-circle-o pr-2"></i>Name :</label>
                                <div className="col-sm-8">
                                    <input type="text" name="name" value={user.uname} onChange={handleInput} className="form-control" />
                                </div>
                                {errors.uname && <medium className="text-danger float-right">{errors.uname}</medium>}
                            </div>
                                                        
                            {/* </div> */}
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label"><i className="fa fa-envelope pr-2"></i>Email :</label>
                                <div className="col-sm-8">
                                    <input type="email" name="email" value={user.email} onChange={handleInput} className="form-control" readonly/>
                                </div>

                            </div>
                           
                            <div className="form-group form-row">
                                <label className="col-sm-4 form-control-label"><i className="fa fa-unlock pr-2"></i>Password :</label>
                                <div className="col-sm-8">
                                    {/* <input type="password" name="password" value={user.password} onChange={handleInput} className="form-control" /> */}
                            <Link to="/forgetPasswordCustomer">Change Password</Link>
                                </div>
                            </div>
                            <button className="btn btn-primary float-right">Update Profile</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default AdminProfile;
