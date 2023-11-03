import React from 'react'
import { Row, Container,Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-center text-white">
    
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
        <a className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
        </a>
        <a className="me-4 text-reset">
            <i className="fab fa-twitter" />
        </a>
        <a className="me-4 text-reset">
            <i className="fab fa-google" />
        </a>
        <a className="me-4 text-reset">
            <i className="fab fa-instagram" />
        </a>
        <a className="me-4 text-reset">
            <i className="fab fa-linkedin" />
        </a>
        <a className="me-4 text-reset">
            <i className="fab fa-github" />
        </a>
        </div>
        {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"/> Marriott
            </h6>
            <p>
            We Are Marriott International Travel with us as we expand our world, improve the communities we serve and open doors to new opportunities.
            </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
   
            <h6 className="text-uppercase fw-bold mb-4">
            Top Destinations
            </h6>
            <p>
                <a href="#!" className="text-reset">Singapur Hotels</a>
            </p>
            <p>
                <a href="#!" className="text-reset">New York Hotels</a>
            </p>
            <p>
                <a href="#!" className="text-reset">Paris Hotels</a>
            </p>
            <p>
                <a href="#!" className="text-reset">Boston Hotels</a>
            </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
                For guests
            </h6>
            <p>
                <a href="#!" className="text-reset">Best Rate Guarantee</a>
            </p>
            <p>
                <a href="#!" className="text-reset">Pay when you stay</a>
            </p>
            <p>
                <a href="#!" className="text-reset">Your room, your way</a>
            </p>
            <p>
                <a href="#!" className="text-reset">Help</a>
            </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3" /> Singapur, SGP 090001, SGP</p>
            <p>
                <i className="fas fa-envelope me-3" />
                info@marriott.com.sgp
            </p>
            <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
            <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
            </div>

        </div>

        </div>
    </section>

    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        <p>© 2021 Copyright: Marriott International, Inc. </p>
        <p>All rights reserved. Marriott Proprietary Information</p>
    </div>
    </footer>

 
  );
  
}

export default Footer
