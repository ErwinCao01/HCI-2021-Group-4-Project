import React, { Component } from 'react';

class Technology extends Component {
    render() {
        return (
            <div>
                 <section className="bg-light" id="technology">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="text-uppercase section-heading">TEchnology applied to this project</h2>
                <h3 className="text-muted section-subheading">"Coding with 100% passion"</h3>
              </div>
            </div>
            <div className="row text-center justify-content-center">
              <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal1" data-bs-toggle="modal">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                  </div><img className="img-fluid" src="assets/img/portfolio/react-logo.png" />
                </a>
                <div className="portfolio-caption">
                  <h4>ReactJS</h4>
                  <p className="text-muted">Open-source Javascript library</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal2" data-bs-toggle="modal">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                  </div><img className="img-fluid" src="assets/img/portfolio/2-thumbnail.jpg" />
                </a>
                <div className="portfolio-caption">
                  <h4>HTML5/CSS3</h4>
                  <p className="text-muted">UI/UX design</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal3" data-bs-toggle="modal">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                  </div><img className="img-fluid" src="assets/img/portfolio/3-thumbnail.jpg" />
                </a>
                <div className="portfolio-caption">
                  <h4>Git</h4>
                  <p className="text-muted">Code Management</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal4" data-bs-toggle="modal">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                  </div><img className="img-fluid" src="assets/img/portfolio/4-thumbnail.jpg" />
                </a>
                <div className="portfolio-caption">
                  <h4>Bootstrap 5</h4>
                  <p className="text-muted">Template desgining</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal5" data-bs-toggle="modal">
                  <div className="text-center portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                  </div><img className="img-fluid" src="assets/img/portfolio/5-thumbnail.jpg" />
                </a>
                <div className="portfolio-caption">
                  <h4>Google Font</h4>
                  <p className="text-muted">Free font provider</p>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        );
    }
}

export default Technology;