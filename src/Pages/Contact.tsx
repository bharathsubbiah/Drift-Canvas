import { FormEvent } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// @ts-ignore: allow side-effect CSS import when no typings are present
import "./Contact.css";



const handleSubmit = (
  e: FormEvent<HTMLFormElement>
): void => {

  e.preventDefault();

  alert("Message Sent Successfully!");

};

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">

        {/* Hero Section */}
        <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">

          <div>

            <h1 className="fw-bold display-4">
              Get in Touch
            </h1>

            <p className="lead">
              We’re here to help you 24/7
            </p>

          </div>

        </div>

        {/* Contact Section */}
        <div className="container my-5">

          <div className="row g-4">

            {/* Form */}
            <div className="col-lg-6">

              <div className="card p-4">

                <h4 className="mb-4 fw-bold">
                  Send Message
                </h4>

                <form onSubmit={handleSubmit}>

                  {/* Name */}
                  <div className="mb-3 input-group">

                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />

                  </div>

                  {/* Email */}
                  <div className="mb-3 input-group">

                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />

                  </div>

                  {/* Message */}
                  <div className="mb-3 input-group">

                    <span className="input-group-text">
                      <i className="bi bi-chat-dots"></i>
                    </span>

                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Your Message"
                      required
                    ></textarea>

                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="btn btn-send w-100"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

            {/* Contact Info */}
            <div className="col-lg-6">

              <div className="card p-4 h-100">

                <h4 className="mb-4 fw-bold">
                  Contact Info
                </h4>

                {/* Address */}
                <div className="info-item">

                  <i className="bi bi-geo-alt-fill"></i>

                  <p>
                    Drift Canvas, Coimbatore,
                    Tamil Nadu
                  </p>

                </div>

                {/* Phone */}
                <div className="info-item">

                  <i className="bi bi-telephone-fill"></i>

                  <p>
                    +91 XXXXX XXXXX
                  </p>

                </div>

                {/* Email */}
                <div className="info-item">

                  <i className="bi bi-envelope-fill"></i>

                  <p>
                    support@driftcanvas.com
                  </p>

                </div>

                {/* Time */}
                <div className="info-item">

                  <i className="bi bi-clock-fill"></i>

                  <p>
                    Mon - Sat: 10 AM - 7 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Map */}
          <div className="row mt-5">

            <div className="col-lg-12">

              <div className="map-card">

                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.5134688553!2d76.88483286798547!3d11.01395778797012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1778903211708!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>

              </div>

            </div>

          </div>

        </div>

      </div>
      <Footer />

    </>
  );
}

export default Contact
