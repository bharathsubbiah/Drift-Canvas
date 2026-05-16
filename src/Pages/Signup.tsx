import React from "react";
// @ts-ignore: CSS module without type declarations
import "./Signup.css";

import { Link } from "react-router-dom";
import { FormEvent } from "react";

const handleSignup = (
  e: FormEvent<HTMLFormElement>
): void => {

  e.preventDefault();

  alert("Account Created Successfully!");

};


const Signup: React.FC = () => {

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
                    Create Account
                  </h1>

                  <p className="auth-subtitle">
                    Join our premium collection
                  </p>

                </div>

                {/* Form */}
                <form onSubmit={handleSignup}>

                  {/* Name */}
                  <div className="mb-3">

                    <label className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control auth-input"
                      placeholder="Enter your name"
                      required
                    />

                  </div>

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
                      placeholder="Create password"
                      required
                    />

                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="auth-btn"
                  >
                    Sign Up
                  </button>

                </form>

                {/* Bottom */}
                <div className="auth-bottom">

                  <p>
                    Already have an account?
                  </p>

                  <Link to="/login">
                    Login
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

export default Signup;