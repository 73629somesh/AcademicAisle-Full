function Product(props) {
  const { x, showModal } = props;
  return (
    <>
    
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
            style={{ width: "90%", height: '225px', padding:'0px 30px'}}
            src={"http://localhost:8080/" + x.photo}
            className="img-thumnail"
          /></div>
          <div className="card-text">
          <h6 className="float-left">Product Type : {x.brand}</h6>
          <h6 className="float-right">Price :  &#8377; {x.price}</h6></div>
        </div>
        
      </div>
    </div> </>
  );
}

export default Product;
