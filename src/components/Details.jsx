import React from 'react'
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import '../styles/details.css';
export default function Details() {
  return (
    <div>
         <section className="details-section">
      <div className="container">
        <h2 
          className="text-center details-title"
          data-aos="fade-up"
        >
          Contact Details
        </h2>

        <div className="row justify-content-center mt-5">

          <div 
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="detail-card">
              <FaUser className="detail-icon" />
              <h5>Name</h5>
              <p>John Doe</p>
            </div>
          </div>

          <div 
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="detail-card">
              <FaEnvelope className="detail-icon" />
              <h5>Email</h5>
              <p>johndoe@gmail.com</p>
            </div>
          </div>

          <div 
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="detail-card">
              <FaPhone className="detail-icon" />
              <h5>Phone</h5>
              <p>+91 98765 43210</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}
