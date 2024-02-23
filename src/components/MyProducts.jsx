import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function MyProducts() {
    const sellerId = sessionStorage.getItem("id");
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:8080/api/products?sellerId=" + sellerId)
            .then(resp => {
                console.log(resp.data)
                setProducts(resp.data.data)
                console.log(products)
            })
    }, [])

    window.onbeforeunload = function () {
        sessionStorage.setItem("origin", window.location.href);
    }

    window.onload = function () {
        if (window.location.href == sessionStorage.getItem("origin")) {
            dispatch({ type: 'IsLoggedIn' })
        }
    }

    const deleteProduct = (productId) => {
        let resp = window.confirm('Are you sure you want to delete this product ?');
        if (resp) {
            axios.delete("http://localhost:8080/api/sellers/" + productId)
                .then(resp => {
                    // alert("Product deleted successfully")
                    toast.success("Product Deleted Successfully")
                    axios.get("http://localhost:8080/api/products?sellerId=" + sellerId)
                        .then(resp => {
                            console.log(resp.data)
                            setProducts(resp.data.data)
                            console.log(products)
                        })
                })
        }
    }

    return (
        <div className="container mt-4">
            <div className="card shadow bg-light text-white">
                <div className="card-body">
                    <h4 className="text-dark text-center myheader">My Products</h4>
                    <table className="table table-bordered table-striped table-hover">
                        <thead className="table-dark">
                            <tr className="text-center">
                                <th>Name</th>
                                <th>Category</th>
                                <th>Product Type</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(x => (
                                <tr key={x.productId} className="text-center">
                                    <td><img width="100" src={"http://localhost:8080/" + x.photo} className="img-thumnail float-left text-center" />{x.pname}</td>
                                    <td >{x.categoryName}</td>
                                    <td>{x.brand}</td>
                                    <td>{x.price}</td>
                                    <td>
                                        <Link to={"/edit/" + x.productId} className="btn btn-primary btn-sm mr-2">Edit</Link>
                                        <button onClick={()=>deleteProduct(x.productId)} className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default MyProducts;