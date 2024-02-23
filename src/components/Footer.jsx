import React from "react";
// import "../css/home.css";
import { Link } from "react-router-dom";
import FacPhoto from "../images/Facebook.png";
import InsPhoto from "../images/instagram.png"


const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us :</h5>
            <a href="/aboutUs">About Us </a>
            {/* <p>Your one-stop destination for buying and selling educational materials. Explore a wide range of textbooks, study guides, and more.</p> */}
          </div>
          <div className="col-md-4">
            <h5>Contact Us :</h5>
            <div>
            <h7>Email: </h7>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmzbGDXDvJBLxLZPtZlHmnkQkLXHpxpzJVHnpCJGVtRtGScNKPbgnltlQLBVjbpgGzdPMW">
            AcademicAisle17@gmail.com
                    </a></div> <br></br>  
            <p>Phone: +91 7888009991</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us :</h5>
            <p>Stay connected with us on social media for the latest updates and promotions.</p>
            <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61556331105954">
                     <img src={FacPhoto} alt="Facebook" style={{ width: '30px', height: '30px' }}/> 
                    </a>
                    
                    <a href="https://www.instagram.com/academic_aisle/">
                     <img src={InsPhoto} alt="Instagram" style={{ width: '30px', height: '30px', marginLeft: '20px' }}/>
                    </a>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-2" />
        <div className="text-center">
          <p>&copy; 2024 Academic Aisle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
