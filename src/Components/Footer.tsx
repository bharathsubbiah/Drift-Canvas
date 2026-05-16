import { FormEvent } from "react";
import "./Footer.css";
import Logo from "../Images/Logo.png";

import { Link } from "react-router-dom";


const Footer: React.FC = () => {


  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    alert("Subscribed Successfully!");
  };

  return (
    <>
      <footer className="footer-section">

        <div className="container">

          <div className="row gy-5">

            {/* Logo & About */}
            <div className="col-lg-4 col-md-6">

              <div className="footer-logo-box">

                <img
                  src={Logo}
                  alt="logo"
                  className="footer-logo"
                />

                <p className="footer-text">
                  Premium automotive posters designed for
                  true car enthusiasts. Transform your walls
                  with luxury car artwork.
                </p>

              </div>

            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">

              <div className="footer-links">

                <h4>Quick Links</h4>

                <ul>

                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/login">Login</Link>
                  </li>

                  <li>
                    <Link to="/signup">
                      Signup
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>

                </ul>

              </div>

            </div>

            {/* Brands */}
            <div className="col-lg-2 col-md-6">

              <div className="footer-links">

                <h4>Brands</h4>

                <ul>

                  <li>
                    <Link to="/audi">Audi</Link>
                  </li>

                  <li>
                    <Link to="/bmw">BMW</Link>
                  </li>

                  <li>
                    <Link to="/porsche">Porsche</Link>
                  </li>

                  <li>
                    <Link to="/lamborghini">
                      Lamborghini
                    </Link>
                  </li>

                </ul>

              </div>

            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-6">

              <div className="newsletter-box">

                <h4>Newsletter</h4>

                <p>
                  Subscribe to get updates on latest posters,
                  offers and exclusive collections.
                </p>

                <form
                  className="newsletter-form"
                  onSubmit={handleSubmit}
                >

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                  <button type="submit">
                    Subscribe
                  </button>

                </form>

              </div>

            </div>

          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom">

            <p>
              © 2026 DriftCanvas. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;