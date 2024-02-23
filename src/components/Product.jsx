function Product(props) {
  const { x, showModal } = props;
  return (
    <>
    {/* <h1>Our products</h1> */}
    <div className="col-md-4" key={x.productId} style={{marginBottom: '2rem',  width: "90%", maxHeight: "20rem",minHeight: "15rem"}}>
      <div
        className="card text-center h-100 product-card"
        style={{ boxShadow: "0 0 3px 3px white", margin:'2%'}}
      >
        <div className="card-header p-1 border-bottom border-white">
          <h5>{x.pname}</h5>
        </div>
        <div className="card-body py-1" onClick={(e) => showModal(x)} >
          <div className="card-myimg" style={{height: '80%', margin: "5px 0px 15px 0px"}}>
          <img
            style={{ width: "90%", height: '225px'}}
            src={"http://localhost:8080/" + x.photo}
            className="img-thumnail"
          /></div>
          <div className="card-text">
          <h6 className="float-left">Product Type : {x.brand}</h6>
          <h6 className="float-right">Price :  &#8377; {x.price}</h6></div>
        </div>
        {/* <div className="card-footer p-1">
          <button
            onClick={(e) => showModal(x)}
            className="btn btn-primary btn-sm"
          >
            Buy Now
          </button> */}
        {/* </div> */}
      </div>

      {/* <div className="product-item col-md-3" onClick={(e) => showModal(x)}>
        <img src={"http://localhost:8080/" + x.photo} 
        alt="Product 1" className="product-image" />
        <div className="product-info">
          <p>{x.pname}</p>
          <p>
            <i className="bi bi-currency-rupee"></i>{x.price}
          </p>
        </div>
      </div>*/}
    </div> </>
  );
}

export default Product;
