import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="text-uppercase">About</h2>
                <h3 className="text-muted section-subheading">Timeline of our project</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-group timeline">
                  <li className="list-group-item d-xl-flex justify-content-xl-start">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" /></div>
                    <div className="text-end timeline-panel">
                      <div className="timeline-heading">
                        <h4>Early 3-2021</h4>
                        <h4 className="subheading">Our Humble Beginnings</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">We start to learn Human-Computer Interaction and access to Web Programming</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item d-xl-flex justify-content-xl-end">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" /></div>
                    <div className="text-start timeline-panel" style={{marginLeft: '560px', textAlign: 'left'}}>
                      <div className="timeline-heading">
                        <h4>December 2012</h4>
                        <h4 className="subheading">Transition to Full Service</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item d-xl-flex justify-content-xl-start timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" /></div>
                    <div className="text-end timeline-panel" style={{textAlign: 'left', marginRight: '0px'}}>
                      <div className="timeline-heading">
                        <h4>July 2014</h4>
                        <h4 className="subheading">Phase Two Expansion</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item timeline-inverted">
                    <div className="timeline-image">
                      <h4>Be Part<br />&nbsp;Of Our<br />&nbsp;Story!</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
            </div>
        );
    }
}

export default About;