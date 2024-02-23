import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "./Product";
import queryString from "query-string";
import TopSlider from "./TopSlider";
import { toast } from "react-toastify";
import swal from "sweetalert";

function AllProduct() {
    const [products, setProducts] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const state = useSelector((state) => state);
    const location = useLocation()
    const [item, setItem] = useState({})
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showDialog, setShowDialog] = useState("modal fade")
    const [display, setDisplay] = useState("none")

    const showModal = (prod) => {
        setShowDialog("modal fade show")
        setDisplay("block")
        setItem(prod)
    }

    const checkItem = (productId) => {
        return state.cart.findIndex(x => x.productId === productId) < 0
    }

    const closeDialog = () => {
        setShowDialog("modal fade")
        setDisplay("none")
    }

    const loadDataFromServer = (page = 0, pagesize = 8) => {
        axios.get("http://localhost:8080/api/products/paginated?page=" + page + "&pagesize=" + pagesize)
            .then(resp => {
                console.log(resp.data.data.total)
                setProducts(resp.data.data.plist)
                setTotalPage(Math.ceil(resp.data.data.total / pagesize))
                console.log(products)
            })
    }



    useEffect(() => {
        console.log("I am here cat", location.search)
        let pcat = queryString.parse(location.search)
        console.log(pcat.cat)
        if (pcat.cat !== undefined ) {
            console.log("useEffect if part")
            axios.get("http://localhost:8080/api/products/category?cat=" + pcat.cat)
                .then(resp => {
                    console.log(resp.data)
                    setProducts(resp.data.data)
                    console.log(products)
                })
        }
        else {
            loadDataFromServer()
        }
    }, [location])

    const addToCart = item => {
        if (sessionStorage.getItem("email") == null) {
            toast.error("Please login first",
                { position: toast.POSITION.TOP_RIGHT })
            navigate("/clogin")
        }
        else if (sessionStorage.getItem("role") !== "customer") {
            toast.error("Only a customer can buy product",
                { position: toast.POSITION.TOP_RIGHT })
        }
        else {
            if (checkItem(item.productId)) {
                showModal()
                setDisplay("none")
                setShowDialog("modal fade")
                item.qty = qty
                dispatch({ type: 'AddItem', payload: item })
                swal({
                    title: "Success!",
                    text: "Product added to Wishlist successfully",
                    icon: "success",
                    button: "OK",
                });
            }
            else {
                swal({
                    title: "Error!",
                    text: "Product already in cart",
                    icon: "error",
                    button: "OK",
                });
            }
        }
    }


    const handlePageClick = ({ selected: selectedPage }) => {
        loadDataFromServer(selectedPage)
    }

    return (
        <>
            <div className="container-fluid p-2">
                <TopSlider />
            </div>
            <div className="container-fluid" style={{ width: "92%" }}>
                <div className="card shadow bg-transparent">
                    <div className="card-body">

                            <h1 className="text-center mt-2 mb-5" style={{fontSize: '4rem'}}>Our Products</h1>
                        <div className="row">
                            {products.map(x => (
                                <Product key={x.productId} x={x} showModal={showModal} />
                            ))}
                        </div>

                    </div>
                </div>
                {display == "block" ? (
                    <div className={showDialog} style={{ zIndex: "1000", display: display }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5>Product Information</h5>
                                    <button onClick={closeDialog} className="close">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="d-flex">
                                        <img src={"http://localhost:8080/" + item.photo} style={{ width: "200px" }} />
                                        <div className="ml-3">
                                            <h4 className="p-2 text-warning">{item.pname}</h4>
                                            <h5 className="px-2">Product Type: {item.brand}</h5>
                                            <h5 className="px-2">Category: {item.categoryName}</h5>
                                            <h5 className="px-2">Seller: {item.sellerName}</h5>
                                            <h5 className="px-2">Price: &#8377; {item.price}</h5>
                                            {/* <input type="number" value={qty} onChange={e => setQty(e.target.value)} readOnly /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={e => addToCart(item)} className="btn btn-success btn">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>) : ""}
                <ReactPaginate
  previousLabel={"← Prev"}
  nextLabel={"Next →"}
  containerClassName={"pagination"}
  pageCount={totalPage}
  onPageChange={handlePageClick}
  previousLinkClassName={"pagination__link"}
  nextLinkClassName={"pagination__link"}
  disabledClassName={"pagination__link--disabled"}
  activeClassName={"pagination__link--active"}
/>
          <div >
            <div style={{padding:"0.5%",justifyContent:"center",alignItems:"center", margin:"20px",height:"3px"}}>
        <header>
            <h2 style={{padding:"10px",marginLeft:'100px', fontWeight: "bold" }}>Why Choose Us?</h2>
            <h5 style={{marginLeft:'111px'}}>Quality meets value in a platform designed to elevate your educational experience with accessible and sustainable options.</h5></header>
            </div>
            <div style={{display:"flex", height:"50%", padding:"50px", margin:"20px",justifyContent:"center",alignItems:"center"}}>
            
                <div  style={{padding:"0.5%"}}>
                    
                        <div style={{padding:"10%"}}>
                            <h3>Trusted by Many</h3>
                            <div>
                                <h5>With a robust and growing community, join countless others who have made Academic Aisle their go-to academic resource destination.</h5>
                            </div>
                            </div>
                            </div>
                            <div>
                                
                                    <div style={{padding:"10%"}}>
                                        <h3>Satisfaction Plus</h3>
                                        <div>
                                           <h5> Enjoy a seamless shopping experience with our satisfaction guarantee, ensuring you're happy with every purchase.</h5>
                                            </div>
                                            </div>
                                            </div>
                                            <div>
                                                
                                                    <div style={{padding:"10%"}}>
                                                        <h3>Eco-Friendly</h3>
                                                        <div>
                                                            <h5>Participate in a sustainable learning cycle with our environmentally-conscious resell and reuse model.</h5>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
            </div>
        </>
    )
}

export default AllProduct;