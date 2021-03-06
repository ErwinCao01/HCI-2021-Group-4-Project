import React, { Component } from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark font-monospace text-nowrap text-center d-lg-flex justify-content-lg-center"
          id="mainNav"
          style={{ height: "110px" }}
        >
          <div className="container">
            <a
              className="navbar-brand d-xl-flex justify-content-xl-center"
              href="/"
              style={{
                marginRight: "0px",
                padding: "0px",
                height: "100px",
                width: "100px",
              }}
            >
              <br />
                <img
                  src="assets/img/logoWebsite.png"
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />
            </a>
            <button
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              className="navbar-toggler navbar-toggler-right"
              type="button"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto text-uppercase">
                {this.props.sections.map((sections) => (
                  <li key={sections.id} className="nav-item">
                    <a className="nav-link" href={sections.url} target = {sections.target}>
                      {sections.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a class="btn btn-primary" role="button" href="https://projectteam4.tk/" target="_blank">PROJECT</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
