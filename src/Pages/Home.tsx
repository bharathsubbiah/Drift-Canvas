import React from "react";
// @ts-ignore: CSS module declaration not found in project types
import "./Home.css";

import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { useDispatch } from "react-redux";

import { addtocart } from "../redux/CartSlice";

import BannerImg from "../Images/Home Banner.png";

import Audi from "../Images/Shop By Brands/Audi.jpg";
import BMW from "../Images/Shop By Brands/BMW.jpg";
import Lamborghini from "../Images/Shop By Brands/Lamborghini.jpg";
import GTR from "../Images/Shop By Brands/GTR.jpg";

// Audi Images
import Audi1 from "../Images/Product Images/Audi/1.jpg";
import Audi2 from "../Images/Product Images/Audi/2.jpg";
import Audi3 from "../Images/Product Images/Audi/3.jpg";
import Audi4 from "../Images/Product Images/Audi/4.jpg";

// BMW Images
import Bmw1 from "../Images/Product Images/Bmw/1.jpg";
import Bmw2 from "../Images/Product Images/Bmw/2.jpg";
import Bmw3 from "../Images/Product Images/Bmw/3.jpg";
import Bmw4 from "../Images/Product Images/Bmw/4.jpg";

// Lamborghini Images
import lambo1 from "../Images/Product Images/Lamborgini/1.jpg";
import lambo2 from "../Images/Product Images/Lamborgini/2.jpg";
import lambo3 from "../Images/Product Images/Lamborgini/3.jpg";
import lambo4 from "../Images/Product Images/Lamborgini/4.jpg";

// Porsche Images
import gtr1 from "../Images/Product Images/Gtr/1.jpg";
import gtr2 from "../Images/Product Images/Gtr/2.jpg";
import gtr3 from "../Images/Product Images/Gtr/3.jpg";
import gtr4 from "../Images/Product Images/Gtr/4.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  qty: number;
}

interface Brand {
  id: number;
  name: string;
  image: string;
  link: string;
}

const brands: Brand[] = [

  {
    id: 1,
    name: "Audi",
    image: Audi,
    link: "/audi",
  },

  {
    id: 2,
    name: "BMW",
    image: BMW,
    link: "/bmw",
  },

  {
    id: 3,
    name: "Lamborghini",
    image: Lamborghini,
    link: "/lamborghini",
  },

  {
    id: 4,
    name: "Porsche",
    image: GTR,
    link: "/gtr",
  },

];

const audi: Product[] = [

  {
    id: 1,
    name: "Audi RS3",
    price: 100,
    image: Audi1,
    category: "Audi",
    qty: 1,
  },

  {
    id: 2,
    name: "Audi RS6 C8",
    price: 150,
    image: Audi2,
    category: "Audi",
    qty: 1,
  },

  {
    id: 3,
    name: "Audi RS6 C7",
    price: 200,
    image: Audi3,
    category: "Audi",
    qty: 1,
  },

  {
    id: 4,
    name: "Audi RS6 Build Edition",
    price: 250,
    image: Audi4,
    category: "Audi",
    qty: 1,
  },

];

const bmw: Product[] = [

  {
    id: 5,
    name: "BMW E30 M2",
    price: 100,
    image: Bmw1,
    category: "BMW",
    qty: 1,
  },

  {
    id: 6,
    name: "BMW E80 M3C",
    price: 150,
    image: Bmw2,
    category: "BMW",
    qty: 1,
  },

  {
    id: 7,
    name: "BMW F87 M2C",
    price: 200,
    image: Bmw3,
    category: "BMW",
    qty: 1,
  },

  {
    id: 8,
    name: "BMW G87 M2",
    price: 250,
    image: Bmw4,
    category: "BMW",
    qty: 1,
  },

];

const lamborghini: Product[] = [

  {
    id: 9,
    name: "Lambo Revuelto",
    price: 100,
    image: lambo1,
    category: "Lamborghini",
    qty: 1,
  },

  {
    id: 10,
    name: "Lambo Aventador",
    price: 150,
    image: lambo2,
    category: "Lamborghini",
    qty: 1,
  },

  {
    id: 11,
    name: "Lambo Urus",
    price: 200,
    image: lambo3,
    category: "Lamborghini",
    qty: 1,
  },

  {
    id: 12,
    name: "Lambo Aventador SV",
    price: 250,
    image: lambo4,
    category: "Lamborghini",
    qty: 1,
  },

];

const gtr: Product[] = [

  {
    id: 13,
    name: "Porsche GTR RS",
    price: 100,
    image: gtr1,
    category: "Porsche",
    qty: 1,
  },

  {
    id: 14,
    name: "Porsche 918 Spyder",
    price: 150,
    image: gtr2,
    category: "Porsche",
    qty: 1,
  },

  {
    id: 15,
    name: "Porsche GT3 RS",
    price: 200,
    image: gtr3,
    category: "Porsche",
    qty: 1,
  },

  {
    id: 16,
    name: "Porsche Turbo S",
    price: 250,
    image: gtr4,
    category: "Porsche",
    qty: 1,
  },

];

const Home: React.FC = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (
    product: Product
  ) => {

    dispatch(
      addtocart(product)
    );

  };

  const renderProducts = (
    products: Product[]
  ) => {

    return products.map((product) => (

      <div
        className="col-lg-3 col-md-6 col-12"
        key={product.id}
      >

        <div className="product-card">

          <div className="product-image-box">

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

          </div>

          <div className="product-content">

            <h3 className="product-name">
              {product.name}
            </h3>

            <div className="product-bottom">

              <h4 className="product-price">
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

    ));

  };

  return (
    <>

      <Navbar />

      {/* Banner */}
      <section className="home-banner">

        <img
          src={BannerImg}
          alt="Banner"
          className="banner-img"
        />

      </section>

      {/* Brand Section */}
      <section className="brand-section">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="brand-title">
              Shop Your Car Brand
            </h2>

          </div>

          <div className="row g-4">

            {brands.map((brand) => (

              <div
                className="col-lg-3 col-md-6 col-12"
                key={brand.id}
              >

                <Link
                  to={brand.link}
                  className="brand-card"
                >

                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="brand-image"
                  />

                  <div className="brand-overlay">

                    <h3>{brand.name}</h3>

                    <button
                      type="button"
                      className="btn shop-btn"
                    >
                      Shop Now
                    </button>

                  </div>

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Audi */}
      <section className="collection-section">

        <div className="container">

          <div className="collection-header">

            <div>

              <span className="collection-subtitle">
                Featured Collection
              </span>

              <h2 className="collection-title">
                Audi Posters
              </h2>

            </div>

            <Link
              to="/audi"
              className="collection-view-btn"
            >
              View All
            </Link>

          </div>

          <div className="row g-4">
            {renderProducts(audi)}
          </div>

        </div>

      </section>

      {/* BMW */}
      <section className="collection-section">

        <div className="container">

          <div className="collection-header">

            <div>

              <span className="collection-subtitle">
                Featured Collection
              </span>

              <h2 className="collection-title">
                BMW Posters
              </h2>

            </div>

            <Link
              to="/bmw"
              className="collection-view-btn"
            >
              View All
            </Link>

          </div>

          <div className="row g-4">
            {renderProducts(bmw)}
          </div>

        </div>

      </section>

      {/* Lamborghini */}
      <section className="collection-section">

        <div className="container">

          <div className="collection-header">

            <div>

              <span className="collection-subtitle">
                Featured Collection
              </span>

              <h2 className="collection-title">
                Lamborghini Posters
              </h2>

            </div>

            <Link
              to="/lamborghini"
              className="collection-view-btn"
            >
              View All
            </Link>

          </div>

          <div className="row g-4">
            {renderProducts(lamborghini)}
          </div>

        </div>

      </section>

      {/* Porsche */}
      <section className="collection-section">

        <div className="container">

          <div className="collection-header">

            <div>

              <span className="collection-subtitle">
                Featured Collection
              </span>

              <h2 className="collection-title">
                Porsche Posters
              </h2>

            </div>

            <Link
              to="/gtr"
              className="collection-view-btn"
            >
              View All
            </Link>

          </div>

          <div className="row g-4">
            {renderProducts(gtr)}
          </div>

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Home;