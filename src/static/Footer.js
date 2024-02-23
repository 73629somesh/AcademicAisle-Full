import React from "react";
import './Footer.css'
function Footer() {
    return (
        <>
            <div id="page-content">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-7 mt-4">
                            {/* <h1 className="fw-light mt-4 text-white">
                                WoodWorks
                            </h1> */}
                            {/* <p className="lead text-white-50">
                                Use just two Bootstrap utility classes and three custom CSS rules
                                and you will have a flexbox enabled sticky footer for your website!
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
            <footer
                id="sticky-footer"
                className="flex-shrink-0 py-4 bg-dark text-white-50"
            >
                <div className="container text-center">
                {/* <img src="./images/logo1.png" width="200" alt="" className="d-inline-block align-middle mr-2"/> */}
                    <small>©️ 2024. ClothStore.com All rights reserved</small>
                    <div> Use of this site constitutes acceptance of our User
                        Agreement and Privacy Policy and Cookie Statement and Your Indian Privacy Rights. <br />
                        The citizen may earn a portion of sales from products that are purchased through our
                        site as part of our Affiliate Partnerships with retailers. <br />The material on this site may not
                        be reproduced, distributed, transmitted, cached .    </div>
                </div>
            </footer>
        </>

    );
}

export default Footer