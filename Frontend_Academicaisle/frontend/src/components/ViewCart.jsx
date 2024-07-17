import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Modal, Button } from "react-bootstrap";

function ViewCart() {
    const [showPopup, setShowPopup] = useState({});
    const handleClosePopup = () => {
      setShowPopup(false);
      navigate("/");
    };
    const handleShowPopup = () => setShowPopup(true);
    const handleAddPopup = () => {
      navigate("/");
    };
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  
  const deleteItem = (item) => {
    let resp = window.confirm("Are you sure you want to delete this Product ?");
    if (resp) {
      dispatch({ type: "RemoveItem", payload: item });
      let amount = state.cart.reduce((a, b) => a + b.price, 0);
      console.log("Amount ", amount);
    }
  };
  

  
  window.onbeforeunload = function () {
    sessionStorage.setItem("origin", window.location.href);
  };

  window.onload = function () {
    if (window.location.href == sessionStorage.getItem("origin")) {
      dispatch({ type: "IsLoggedIn" });
    }
  };

  

  useEffect(() => {
    // Check if the cart is empty and show the popup if needed
    if (state.cart.length === 0) {
      handleShowPopup();
    }
  }, []); 

  const handleSubmit = (id, e) => {
    e.preventDefault();

    let data = {
      cart: state.cart,
      address: address,
      customerId: sessionStorage.getItem("id"),
      productId: id, // Add product ID to the data
      customerEmail: sessionStorage.getItem("email"), // Add customer's email ID to the data
    };
    console.log(data);
    axios.post("http://localhost:8080/api/orders", data).then((resp) => {
      console.log(resp);
      dispatch({ type: "Clear" });
      console.log("dataaaaaaaaa", data)
      
    });
    axios.get(`http://localhost:8080/api/sellers/contactseller/${data.productId}/${data.customerEmail}`, data).then((resp) => {
      console.log(resp);
      dispatch({ type: "Clear" });
      swal({
        title: "Success!",
        text: "Email has been sent with Vendor Details",
        icon: "success",
        button: "OK",
      });
      console.log("dataaaaaaaaa", data)
      navigate("/");
    })
    .catch((error)=>{
      swal({
        title: "Error",
        text: "Some error Occured",
        icon: "warning",
        button: "OK",
      });
    })
  };
  
  return (
    <div className="container-fluid text-white">
      {state.cart.length > 0 ? (
        <div className="row">
          <div className="col">
            <h2 className="p-2 text-dark text-center">My Wishlist</h2>
            <table className="table table-bordered table-light table-striped text-center align-middle">
              <thead className="text-dark">
                <tr className="text-center">
                  <th>Sr. no</th>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {state.cart.map((item, index) => (
                  <tr key={item.productId} className="text-center align-middle">
                    <td>{index+1}</td>
                    <td>{item.productId}</td>
                    <td>
                      <img  
                        className="mr-2 float-left"
                        src={"http://localhost:8080/" + item.photo}
                        width="100"
                      />
                      {item.pname}
                    </td>
                    <td>&#8377; {item.price}</td>
                   
                    <td>
                      <button
                        onClick={(e) => deleteItem(item)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <button
                         onClick={(e) => handleSubmit(item.productId, e)}
                        className="btn btn-success outline"
                      >
                        Connect To Seller
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>

                </tr>
              </tfoot>
            </table>
          </div>
         
        </div>
      ) : (<>
        <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>No Products Yet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You have not added anything in your wishlist yet{" "}
            <i
              className="bi bi-emoji-frown-fill"
              style={{
                color: "yellow",
                backgroundColor: "black",
                fontSize: "22px",
              }}
            ></i>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClosePopup}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddPopup}>
            Start Shopping
          </Button>
        </Modal.Footer>
      </Modal></>
      )}
      {/* </div> */}

      {/*  */}
    </div>
  );
}

export default ViewCart;
