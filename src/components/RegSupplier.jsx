import { useEffect, useState } from "react"
import axios from "axios"
import uservalidation from "../uservalidation";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import swal from 'sweetalert';
import { Button } from "react-bootstrap";
import image from "../images/register.jpeg"
import cityData from "./StatesAndCities";

function RegSupplier() {

    const [seller, setSeller] = useState({

        "name": "",
        "city": "",
        "email": "",
        "phone": "",
        "password": "",
        "cpassword": ""

    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false)

    const handleInput = (event) => {

        setSeller({ ...seller, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        console.log(submitted);
        event.preventDefault()
        setErrors(uservalidation(seller))
        setSubmitted(true)
    }

    useEffect(() => {
        console.log(errors);
        console.log(submitted);
        console.log(Object.keys(errors).length);
        if (Object.keys(errors).length === 0 && submitted) {
            console.log(seller)

            axios.post("http://localhost:8080/api/sellers", seller)
                .then(resp => {
                    console.log(resp)
                    swal({
                        title: "Success!",
                        text: "Seller registered successfully",
                        icon: "success",
                        button: "OK",
                    });
                    navigate('/slogin');
                }).catch(error => {
                    console.log(error)
                    swal({
                        title: "Warning!",
                        text: "You already have an account! Please login !",
                        icon: "warning",
                        button: "OK",
                    });
                    setSeller({
                        ...seller,
                        "name": "",
                        "city": "",
                        "email": "",
                        "phone": "",
                        "password": "",
                        "cpassword": ""
                    })
                })
        }

    }, [errors])

    return (
        // <div className="container">
        //     <div className="card shadow bg-dark mt-3 text-white">
        //         <div className="card-body">
        //             <div className="row">
        //                 <div className="col-sm-6 mx-auto">
        //                     <h4 className="text-center p-2">
        //                         Seller Registration Form
        //                     </h4>
        //                     <form onSubmit={handleSubmit}>
        //                         <div className="form-group form-row">
        //                             <label className="col-sm-4 form-control-label"><i className="fa fa-user-circle-o pr-2"></i>Seller Name</label>
        //                             <div className="col-sm-8">
        //                                 <input type="text"
        //                                     name="name"
        //                                     value={seller.name}
        //                                     onChange={handleInput}
        //                                     className="form-control" />
        //                                 {errors.name && <medium className="text-danger float-right">{errors.name}</medium>}
        //                             </div>

        //                         </div>
        //                         <div className="form-group form-row">
        //                             <label className="col-sm-4 form-control-label"><i className="fa fa-address-card pr-2"></i>City</label>
        //                             <div className="col-sm-8">
        //                                 <input type="text"
        //                                     name="city"
        //                                     value={seller.city}
        //                                     onChange={handleInput}
        //                                     className="form-control" />
        //                                 {errors.city && <medium className="text-danger float-right">{errors.city}</medium>}
        //                             </div>
        //                         </div>

        //                         <div className="form-group form-row">
        //                             <label className="col-sm-4 form-control-label"><i className="fa fa-envelope pr-2"></i>Email</label>
        //                             <div className="col-sm-8">
        //                                 <input type="text"
        //                                     name="email"
        //                                     value={seller.email}
        //                                     onChange={handleInput}
        //                                     className="form-control" />
        //                                 {errors.email && <medium className="text-danger float-right">{errors.email}</medium>}
        //                             </div>

        //                         </div>
        //                         <div className="form-group form-row">
        //                             <label className="col-sm-4 form-control-label"><i className="fa fa-phone pr-2"></i>Phone</label>
        //                             <div className="col-sm-8">
        //                                 <input type="number"
        //                                     maxLength="10"
        //                                     minLength="10"
        //                                     name="phone"
        //                                     value={seller.phone}
        //                                     onChange={handleInput}
        //                                     className="form-control" />
        //                                 {errors.phone && <medium className="text-danger float-right">{errors.phone}</medium>}
        //                             </div>

        //                         </div>
        //                         <div className="form-group form-row">
        //                             <label className="col-sm-4 form-control-label"><i className="fa fa-unlock-alt pr-2"></i>Password</label>
        //                             <div className="col-sm-8">
        //                                 <input type="password"
        //                                     name="password"
        //                                     value={seller.password}
        //                                     onChange={handleInput}
        //                                     className="form-control" />
        //                                 {errors.password && <medium className="text-danger float-right">{errors.password}</medium>}
        //                             </div>
        //                         </div>
        //                         <div className="form-group form-row">
        //                             <label className="col-sm-4 form-control-label"><i className="fa fa-unlock pr-2"></i>Confirm Password</label>
        //                             <div className="col-sm-8">
        //                                 <input type="password"
        //                                     name="cpassword"
        //                                     value={seller.cpassword}
        //                                     onChange={handleInput}
        //                                     className="form-control" />
        //                                 {errors.cpassword && <medium className="text-danger float-right">{errors.cpassword}</medium>}
        //                             </div>

        //                         </div>
        //                         <div className="text-center ml-auto ">
        //                             <Link className="text-white" to="/slogin">Already have an account?</Link>
        //                         </div>
        //                         <button className="btn btn-primary w-100 mt-3">Register Now</button>

        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <>
      
      <div className="row d-flex justify-content-center align-items-center h-100 m-4">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img
                  src={image}
                  alt="Image Not found"
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: ".25rem",
                    borderBottomLeftRadius: ".25rem",
                    height: 600,
                    marginTop: 30,
                  }}
                />
              </div>
              <div className="col-xl-6">
                <form onSubmit={handleSubmit}>
                <div className="card-body p-md-5 text-black">
                  <h1 className="mb-5 text-uppercase">Seller Registration form</h1>
                  {/* <div className="col-md-6 mb-4">
                      <select className="select" style={{width: 600, height: 36.6, paddingLeft: 1}}
                      name="type" 
                      onChange={(e)=>setCustomer({...customer, as: e.target.value})}
                        >
                        <option value="1">Register As</option>
                        <option value="Customer">Customer</option>
                        <option value="Vendor">Vendor</option>
                      </select>
                    </div> */}
                  <div className="row">
                    <div className="col mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlhtmlFor="form3Example1m">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-md"
                          name="name"
                         value={seller.name}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                    {/* <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlhtmlFor="form3Example1n">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-md"
                          name="lastname"
                          onChange={(e)=>setCustomer({...customer, lname: e.target.value})}
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className="d-md-flex justify-content-start align-items-center mb-4" onChange={handleInput}>
                    <h6 className="mb-0 me-4">Gender:     </h6>

                    <div className="form-check form-check-inline mb-0 me-4" >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                        onChange={handleInput}
                      />
                      <label className="form-check-label" htmlhtmlFor="femaleGender">
                        Female
                      </label>
                    </div>

                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="Male"
                        onChange={handleInput}
                      />
                      <label className="form-check-label" htmlhtmlFor="maleGender">
                        Male
                      </label>
                    </div>

                    <div className="form-check form-check-inline mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="other"
                        value="Other"
                        onChange={handleInput}
                      />
                      <label className="form-check-label" htmlhtmlFor="otherGender">
                        Other
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6">
                      <select className="select" style={{width: 280, height: 36.6}} name="state"
                       onChange={handleInput}
                       >
                        <option value="1">State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        
                      </select>
                    </div>
                    <div className="col-xl-6 mb-4">
                      <select className="select" style={{width: 280, height: 36.6}} name="city"
                      //</div>
                      value={seller.city}
                      onChange={handleInput}
                      >
                        <option value="1">City</option>
                        {cityData.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                    </div></div>

                  <div className="row">
                    <div className="col-xl-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlhtmlFor="form3Example1m">
                          Email
                        </label>
                        <input
                          type="email"
                          id="cemail"
                          className="form-control form-control-md"
                          name="email"
                          value={seller.email}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlhtmlFor="form3Example1n">
                          Contact Number
                        </label>
                        <input
                          type="number"
                          id="form3Example1n"
                          className="form-control form-control-md"
                          maxLength="10"
                            minLength="10"
                        name="phone"
                        value={seller.phone}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlhtmlFor="form3Example1m">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example1m"
                          className="form-control form-control-md"
                          name="password"
                          value={seller.password}
                          onChange={handleInput}
                          />
                          {errors.password && <medium className="text-danger float-right">{errors.password}</medium>}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlhtmlFor="form3Example1n">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="form3Example1n"
                          className="form-control form-control-md"
                          name="cpassword"
                          value={seller.cpassword}
                          onChange={handleInput}
                        />
                        {errors.cpassword && <medium className="text-danger float-right">{errors.cpassword}</medium>}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <Button type="reset" className="btn btn-light btn-lg" >
                      Reset all
                    </Button>
                    <Button type="submit" className="btn btn-warning btn-lg ms-2" >
                      Submit form
                    </Button>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default RegSupplier;