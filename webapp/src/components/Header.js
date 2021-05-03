import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style={{ backgroundImage: 'url("assets/img/header-bg.jpg")' }}>
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in"><span>WELCOME TO OUR WEBSITE !</span></div>
            <div className="intro-heading text-uppercase"><span>Have a great day!</span></div><a className="btn btn-primary btn-xl text-uppercase" role="button" href="#services">LEt's go</a>
          </div>
        </div>
      </header>
            </div>
        );
    }
}

export default Header;