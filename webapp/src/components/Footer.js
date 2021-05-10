import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4"><span className="copyright">Copyright&nbsp;© Group 4 Nong Lam University</span></div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item" title="Go to project"><a href="#"><i className="fa fa-link" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="list-inline-item"><a href="https://github.com/ErwinCao01/HCI-2021-Group-4-Project"><i className="fa fa-github" /></a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item" />
                  <li className="list-inline-item"><a href="#">Good to see you !</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;