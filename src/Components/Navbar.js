import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/general"
              style={{ fontSize: "25px" }}
            >
              News.Az
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ">
                <Link className="nav-link" to="/general">
                  general
                </Link>
                <Link className="nav-link" to="/business">
                  business
                </Link>
                <Link className="nav-link" to="/entertainment">
                  entertainment
                </Link>
                <Link className="nav-link" to="/health">
                  health
                </Link>
                <Link className="nav-link" to="/science">
                  science
                </Link>
                <Link className="nav-link" to="/sports">
                  sports
                </Link>
                <Link className="nav-link" to="/technology">
                  technology
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
