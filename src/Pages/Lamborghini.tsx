import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


import { useDispatch } from "react-redux";

import { addtocart } from "../redux/CartSlice";

// Images
import Product1 from "../Images/Product Images/Lamborgini/1.jpg";
import Product2 from "../Images/Product Images/Lamborgini/2.jpg";
import Product3 from "../Images/Product Images/Lamborgini/3.jpg";
import Product4 from "../Images/Product Images/Lamborgini/4.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  qty: number;
}

const products: Product[] = [

  {
    id: 1,
    name: "Lambo Revuelto",
    price: 100,
    image: Product1,
    category: "Lamborghini",
    qty: 1,
  },

  {
    id: 2,
    name: "Lambo Aventador",
    price: 150,
    image: Product2,
    category: "Lamborghini",
    qty: 1,
  },

  {
    id: 3,
    name: "Lambo Urus",
    price: 200,
    image: Product3,
    category: "Lamborghini",
    qty: 1,
  },

  {
    id: 4,
    name: "Lambo Aventador SV",
    price: 250,
    image: Product4,
    category: "Lamborghini",
    qty: 1,
  },

];

const Lamborghini: React.FC = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (
    product: Product
  ) => {

    dispatch(
      addtocart(product)
    );

  };

  return (
    <>

      <Navbar />

      <section className="products-page">

        <div className="container">

          {/* Header */}
          <div className="products-header text-center">

            <span className="mini-title">
              Premium Collection
            </span>

            <h1 className="main-title">
              Lamborghini Posters
            </h1>

            <p className="sub-title">
              Explore luxury automotive wall art
              crafted for true car enthusiasts.
            </p>

          </div>

          {/* Top Bar */}
          <div className="products-topbar">

            <p className="product-count">
              {products.length} Products Available
            </p>

            <div className="sort-box">

              <label className="sort-label">
                Sort By :
              </label>

              <select className="custom-select">

                <option>
                  Alphabetically, A-Z
                </option>

                <option>
                  Alphabetically, Z-A
                </option>

                <option>
                  Price Low To High
                </option>

                <option>
                  Price High To Low
                </option>

              </select>

            </div>

          </div>

          {/* Product Cards */}
          <div className="row g-4">

            {products.map((product) => (

              <div
                className="col-lg-3 col-md-6 col-12"
                key={product.id}
              >

                <div className="modern-card">

                  {/* Image */}
                  <div className="card-image-box">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-image"
                    />

                    <span className="category-badge">
                      {product.category}
                    </span>

                  </div>

                  {/* Content */}
                  <div className="card-content">

                    <h3 className="card-title">
                      {product.name}
                    </h3>

                    <div className="price-row">

                      <h4 className="card-price">
                        ₹ {product.price}
                      </h4>

                      <button
                        type="button"
                        className="cart-btn"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                      >
                        Add
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Lamborghini;