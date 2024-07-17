import React from 'react';
import '../static/About.css';
import FacPhoto from "../images/Facebook.png";
import InsPhoto from "../images/instagram.png"

function About() {
    return (
        <>
       
        
        <body>
            <div class="responsive-container-block bigContainer">
                <div class="responsive-container-block Container">
                  <p class="text-blk heading">
                    About Us
                  </p>
                  <p class="text-blk subHeading">
                    Welcome to Academic Aisle - Your Hub for Affordable Learning!<br/>
        
        At Academic Aisle, we're dedicated to making quality education accessible to all. From textbooks to study guides, we offer new and pre-owned options, promoting sustainability and affordability. Join us in building a community that values accessible and eco-friendly learning. Thank you for choosing Academic Aisle – where education meets affordability!
                  </p>
                  <div class="social-icons-container">
                    
                    <a href="https://www.facebook.com/profile.php?id=61556331105954">
                     <img src={FacPhoto} alt="Facebook"/>
                    </a>
                     
                    <a href="https://www.instagram.com/academic_aisle/">
                     <img src={InsPhoto} alt="Instagram" style={{  marginLeft: '20px' }}/>
                    </a>
                    
                  </div>
                </div>
              </div>
        </body>
        
        </>
    );
}

export default About;