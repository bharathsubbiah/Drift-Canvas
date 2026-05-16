import  { FormEvent } from "react";
// @ts-ignore: Allow CSS side-effect import without module declarations
import "./Login.css";

import { Link } from "react-router-dom";



const handleLogin = (
  e: FormEvent<HTMLFormElement>
): void => {

  e.preventDefault();

  alert("Login Successful!");

};



const Login: React.FC = () => {

  return (
    <>
      <section className="auth-page">

        <div className="container">

          <div className="row justify-content-center align-items-center min-vh-100">

            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10 col-12">

              <div className="auth-card">

                {/* Heading */}
                <div className="text-center mb-4">

                  <h1 className="auth-title">
                    Welcome Back
                  </h1>

                  <p className="auth-subtitle">
                    Login to continue shopping
                  </p>

                </div>

                {/* Form */}
                <form onSubmit={handleLogin}>

                  {/* Email */}
                  <div className="mb-3">

                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control auth-input"
                      placeholder="Enter your email"
                      required
                    />

                  </div>

                  {/* Password */}
                  <div className="mb-4">

                    <label className="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control auth-input"
                      placeholder="Enter your password"
                      required
                    />

                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="auth-btn"
                  >
                    Login
                  </button>

                </form>

                {/* Bottom */}
                <div className="auth-bottom">

                  <p>
                    Don’t have an account?
                  </p>

                  <Link to="/signup">
                    Sign Up
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Login;