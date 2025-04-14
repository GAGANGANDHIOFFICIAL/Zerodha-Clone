import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
      <nav className="navbar navbar-expand navbar-light bg-light">
       <div className="container">
        <Link className="navbar-brand "to="/">
          <img
            src="media\images\images\logo.svg"
            style={{ width: "20%" }}
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          id="navbarNav"
        >
          <ul className="navbar-nav">
          <li className="nav-item active">
              <Link className="nav-link" to="/signup">
              Signup <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
              Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
        </div>
        
      </nav>
      
  );
}
