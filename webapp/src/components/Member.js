/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class Member extends Component {
  render() {
    return (
      <div>
        <section className="bg-light" id="member">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member"><img className="rounded-circle mx-auto" src="assets/img/team/thinhngu.jpg" />
                  <h4>Le Quoc Thinh</h4>
                  <p className="text-muted">Leader</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item"><a href="https://19130215hci2021.tk" target="_blank"><i className="fa fa-link" /></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/unlocker0808" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="https://github.com/unlocker0808" target="_blank"><i className="fa fa-github" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member"><img className="rounded-circle mx-auto" src="assets/img/team/tanloc.jpg" />
                  <h4>Cao Huy Tan Loc</h4>
                  <p className="text-muted">Designing UX/UI</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item"><a href="https://19130120.tk" target="_blank"><i className="fa fa-link" /></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/Ya.Tanloc/" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="https://github.com/ErwinCao01" target="_blank"><i className="fa fa-github" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member"><img className="rounded-circle mx-auto" src="assets/img/team/138299251_440090247175658_4216634827208895764_n.jpg" />
                  <h4>Nguyen Duy Long</h4>
                  <p className="text-muted">Lead Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item"><a href="https://19130128.tk" target="_blank"><i className="fa fa-link" /></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=100035240593106" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="https://github.com/NguyenDuyLong1973" target="_blank"><i className="fa fa-github" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-4">
                <div className="team-member"><img className="rounded-circle mx-auto" src="assets/img/team/z2418551337261_1a7021614956dab0f80794d7f4d18401.jpg" />
                  <h4>Luong Huu Luan</h4>
                  <p className="text-muted">Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item"><a href="https://19130131.tk" target="_blank"><i className="fa fa-link" style={{ textShadow: '0px 0px' }} /></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/tuiluanne" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="https://github.com/luongluanmpt" target="_blank"><i className="fa fa-github" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member"><img className="rounded-circle mx-auto" src="assets/img/team/175707224_205212954495101_3489952911742350797_n.jpg" />
                  <h4>Nguyen Cong Phuc</h4>
                  <p className="text-muted">Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item"><a href="https://19130172.tk" target="_blank"><i className="fa fa-link" /></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/NCP.NCQN" target="_blank"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="https://github.com/ncp204" target="_blank"><i className="fa fa-github" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Member;