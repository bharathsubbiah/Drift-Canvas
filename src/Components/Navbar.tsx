import React, {
  useEffect,
  useState,
} from "react";

import "./Navbar.css";

import Logo from "../Images/Logo.png";

import {
  Link,
  NavLink,
} from "react-router-dom";

import { useSelector } from "react-redux";

import { RootState } from "../redux/Store";

const Navbar: React.FC = () => {

  const { cartitems } = useSelector(
    (state: RootState) => state.cart
  );

  const cartCount = cartitems.reduce(
    (total, item) => total + item.qty,
    0
  );

  // Cart Animation
  const [animateCart, setAnimateCart] =
    useState(false);

  useEffect(() => {

    if (cartCount > 0) {

      setAnimateCart(true);

      const timer = setTimeout(() => {

        setAnimateCart(false);

      }, 700);

      return () =>
        clearTimeout(timer);

    }

  }, [cartCount]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">

      <div className="container-fluid px-lg-5">

        {/* Logo */}
        <Link
          className="navbar-brand"
          to="/"
        >

          <img
            src={Logo}
            alt="logo"
            className="logo"
          />

        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav mx-auto gap-lg-4 text-center">

            {/* Home */}
            <li className="nav-item">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </NavLink>

            </li>

            {/* Audi */}
            <li className="nav-item">

              <NavLink
                to="/audi"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Audi
              </NavLink>

            </li>

            {/* BMW */}
            <li className="nav-item">

              <NavLink
                to="/bmw"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                BMW
              </NavLink>

            </li>

            {/* Lamborghini */}
            <li className="nav-item">

              <NavLink
                to="/lamborghini"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Lamborghini
              </NavLink>

            </li>

            {/* Porsche */}
            <li className="nav-item">

              <NavLink
                to="/gtr"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Porsche
              </NavLink>

            </li>

            {/* Contact */}
            <li className="nav-item">

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </NavLink>

            </li>

          </ul>

          {/* Icons */}
          <div className="d-flex align-items-center gap-4 icons justify-content-center">

            {/* Search */}
            <Link
              to="/"
              className="icon-link"
            >

              <i className="bi bi-search"></i>

            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="icon-link"
            >

              <i className="bi bi-person"></i>

            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="cart-icon"
            >

              <div
                className={
                  animateCart
                    ? "cart-wrapper cart-bounce"
                    : "cart-wrapper"
                }
              >

                <i className="bi bi-cart3"></i>

                {cartCount > 0 && (

                  <span className="cart-count">

                    {cartCount}

                  </span>

                )}

              </div>

            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;