import React from "react";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand navbar-light bg-light">
       <div className="container">
        <a className="navbar-brand "href="/">
          <img
            src="media\images\images\logo.svg"
            style={{ width: "20%" }}
          ></img>
        </a>
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
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        </div>
        
      </nav>
      
  );
}
