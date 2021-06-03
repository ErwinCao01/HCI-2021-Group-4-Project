import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="masthead" style={{ backgroundImage: 'url("assets/img/team/anhnhom.jpg")' }}>
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in"><span>WELCOME TO OUR WEBSITE !</span></div>
              <div className="intro-heading text-uppercase"><span>Have a great day!</span></div>
              <a class="btn btn-primary btn-xl text-uppercase" role="button" href="https://projectteam4.tk/" target="_blank">Go to Project</a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;