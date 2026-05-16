import React from "react";
// @ts-ignore: allow importing CSS without type declarations
import "./Cart.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  increaseqty,
  decreaseqty,
  removefromcart,
  CartItem,
} from "../redux/CartSlice";

import { RootState } from "../redux/Store";

const Cart: React.FC = () => {

  const dispatch = useDispatch();

  const {
    cartitems,
    totalAmount,
    shipping,
  } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <>

      <Navbar />

      <section className="cart-page">

        <div className="container">

          {/* Heading */}
          <div className="cart-header">

            <div>

              <span className="cart-mini-title">
                Your Collection
              </span>

              <h1 className="cart-main-title">
                Shopping Cart
              </h1>

            </div>

            <div className="cart-count-box">

              {cartitems.length} Items

            </div>

          </div>

          <div className="row g-4">

            {/* LEFT SIDE */}
            <div className="col-lg-8">

              {cartitems.length === 0 ? (

                <div className="empty-cart">

                  <i className="bi bi-cart-x"></i>

                  <h3>
                    Your cart is empty
                  </h3>

                </div>

              ) : (

                <div className="cart-items-wrapper">

                  {cartitems.map(
                    (item: CartItem) => (

                      <div
                        className="cart-item-card"
                        key={item.id}
                      >

                        {/* Image */}
                        <div className="cart-image-box">

                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-product-img"
                          />

                        </div>

                        {/* Content */}
                        <div className="cart-content">

                          <div className="cart-top">

                            <div>

                              <h3 className="cart-product-name">
                                {item.name}
                              </h3>

                              <p className="cart-category">
                                Premium Poster
                              </p>

                            </div>

                            <i
                              className="bi bi-trash"
                              onClick={() =>
                                dispatch(
                                  removefromcart(item.id)
                                )
                              }
                            ></i>

                          </div>

                          <div className="cart-bottom">

                            {/* Quantity */}
                            <div className="qty-box">

                              <button
                                onClick={() =>
                                  dispatch(
                                    decreaseqty(item.id)
                                  )
                                }
                              >
                                -
                              </button>

                              <span>
                                {item.qty}
                              </span>

                              <button
                                onClick={() =>
                                  dispatch(
                                    increaseqty(item.id)
                                  )
                                }
                              >
                                +
                              </button>

                            </div>

                            {/* Price */}
                            <div className="cart-price-box">

                              <span>
                                ₹ {item.price}
                              </span>

                              <h4>
                                ₹ {item.price * item.qty}
                              </h4>

                            </div>

                          </div>

                        </div>

                      </div>
                    )
                  )}

                </div>
              )}

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4">

              <div className="summary-card">

                <h3 className="summary-title">
                  Order Summary
                </h3>

                <div className="summary-row">

                  <span>Subtotal</span>

                  <span>
                    ₹ {totalAmount}
                  </span>

                </div>

                <div className="summary-row">

                  <span>Shipping</span>

                  <span>
                    ₹ {shipping}
                  </span>

                </div>

                <div className="summary-row total-row">

                  <span>Total</span>

                  <span>
                    ₹ {totalAmount + shipping}
                  </span>

                </div>

                <button className="checkout-btn">

                  Proceed To Checkout

                </button>

                <button className="continue-btn">

                  Continue Shopping

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Cart;