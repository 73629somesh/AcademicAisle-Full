import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import swal from 'sweetalert';
import catPhoto from '../images/CatPhoto.jpg'
import { useDispatch } from "react-redux";

function AddCategory() {

    const [category, setcategory] = useState({
        "categoryName": "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInput = (event) => {

        setcategory({ ...category, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(category)

        axios.post("http://localhost:8080/api/category/addcategory", category)
            .then(resp => {
                console.log(resp)
                swal({
                    title: "Success!",
                    text: "Category added successfully",
                    icon: "success",
                    button: "OK",
                });
                navigate('/');
            }).catch(error => {
                console.log(error)
                swal({
                    title: "Error!",
                    text: "Failed to add category!",
                    icon: "error",
                    button: "OK",
                });
                setcategory({
                    ...category,
                    "categoryName": "",
                })
            })
    }

    window.onbeforeunload = function () {
        sessionStorage.setItem("addCategory", window.location.href);
    }

    window.onload = function () {
        if (window.location.href === sessionStorage.getItem("addCategory")) {
            dispatch({ type: 'IsLoggedIn' })
        }
    }

    return (
        <div className="container-fluid mt-5 login-component addCat-container" >
            <div className="row shadow bg-transparent border rounded">
                <div className="col-4 ">
                    <img
                        src={catPhoto}
                        className="rounded-start img-fluid mt-5 mb-3"
                        style={{ width: "100%", height: '70%' }} alt="category" />
                </div>

                <div className="col-8">
                    <div className="border border-0 rounded p-2">
                        <h2 className="fw-bold mb-2 mt-2 text-uppercase myheader text-center mb-4"> Add Category</h2>

                        <div className="mt-5">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3 ">
                                    <input
                                        type="text"
                                        name="categoryName"
                                        value={category.categoryName}
                                        onChange={handleInput}
                                        className="form-control  mt-2"
                                        placeholder="Category Name"
                                    />
                                </div>
                                <button className="btn btn-success mt-2 float-right">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory;