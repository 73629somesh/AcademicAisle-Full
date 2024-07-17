import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await axios.get("http://localhost:8080/api/products/");
        console.log("Data:", response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);


  const deleteProduct = (id) => {
    let response = window.confirm(
      "Are you sure you want to delete this Product?"
    );
    if (response) {
      console.log(id);
      axios.delete("http://localhost:8080/api/sellers/" + id)
          .then(resp => {
              axios.get("http://localhost:8080/api/sellers" + id)
                  .then(resp => {
                  
                  })
          })
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="text-dark p-2 text-center myheader">All Products</h4>

      <table className="table table-bordered table-light table-striped table-hover">
        <thead className="table-dark">
          <tr className="text-center">
            <th>Sr. No.</th>
            <th>Product Id</th>
            <th>Category</th>
            <th>Product</th>
            {/* <th>Product Type</th>
                            <th>Price</th> */}
            <th>Seller</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((x, index) => (
            <tr key={x.productId} className="text-center">
              <td>{index + 1}</td>
              <td>{x.productId}</td>
              <td>{x.categoryName}</td>
              <td>
                <img
                  className="mr-2 float-left"
                  src={"http://localhost:8080/" + x.photo}
                  width="150"
                  height="100"
                ></img>
                <b>{x.pname}</b>
                <br></br>
                Product Type : {x.brand} <br></br>
                Price : {x.price}
              </td>
              {/* <td>{x.brand}</td>
                                <td>{x.price}</td> */}
              <td>{x.sellerName}</td>
              <td>
                <button
                  onClick={(e) => deleteProduct(x.productId)}
                  className="btn btn-danger outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
