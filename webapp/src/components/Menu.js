import React, { Component } from 'react';

class Menu extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark font-monospace text-nowrap text-center d-lg-flex justify-content-lg-center" id="mainNav" style={{ height: '110px' }}>
        <div className="container"><a className="navbar-brand d-xl-flex justify-content-xl-center" href="#root" style={{ marginRight: '0px', padding: '0px', height: '100px', width: '100px' }}><br />
          <picture style={{ height: '100px', width: '100px', marginLeft: '0px' }}><img src="assets/img/about/logo%20Website.png" width={150} height={150} style={{ width: '100px', height: '100px', textAlign: 'center', margin: '0px', marginTop: '0px' }} /></picture>
        </a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto text-uppercase">
              {this.props.sections.map((sections) => (
                  <li key={sections.id} className="nav-item">
                    <a className="nav-link" href={sections.url}>{sections.title}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
            </div>
        );
    }
}

export default Menu;