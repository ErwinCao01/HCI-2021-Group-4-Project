/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class StyleGuide extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="style-guide-div">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active result-page"
                  id="pills-Typography-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Typography"
                  type="button"
                  role="tab"
                  aria-controls="pills-Typography"
                  aria-selected="true"
                >
                  Typography
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link result-page"
                  id="pills-Component-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Component"
                  type="button"
                  role="tab"
                  aria-controls="pills-Component"
                  aria-selected="false"
                >
                  Component
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link result-page"
                  id="pills-ColorPalette-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ColorPalette"
                  type="button"
                  role="tab"
                  aria-controls="pills-ColorPalette"
                  aria-selected="false"
                >
                  Color palette
                </button>
              </li>

              <li className="nav-item result-page" role="presentation">
                <button
                  className="nav-link"
                  id="pills-ImageAndIcon-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ImageAndIcon"
                  type="button"
                  role="tab"
                  aria-controls="pills-ImageAndIcon"
                  aria-selected="false"
                >
                  Image and icon
                </button>
              </li>
              <li className="nav-item result-page" role="presentation">
                <button
                  className="nav-link"
                  id="pills-FileAndDirectory-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-FileAndDirectory"
                  type="button"
                  role="tab"
                  aria-controls="pills-FileAndDirectory"
                  aria-selected="false"
                >
                  File and directory
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-Typography"
                role="tabpanel"
                aria-labelledby="pills-Typography-tab"
              >
                <h2>Typography of website group and project.</h2>
                <hr />
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <p>Paragraph</p>
                <p className="text-danger">Danger text</p>
                <p className="text-warning">Warning text</p>
                <p className="text-success">Success text</p>
                <p className="text-dark">Dark text</p>
              </div>
              <div
                className="tab-pane fade"
                id="pills-Component"
                role="tabpanel"
                aria-labelledby="pills-Component-tab"
              >
                <h2>Button</h2>
                <hr />
                <button className="btn btn-primary-login" type="button">
                  <strong>Login button</strong>
                </button>
                <button className="btn btn-outline-info" type="button">
                  <strong>Control button</strong>
                </button>
                <button className="btn btn-secondary" type="button">
                  <strong>Secondary button</strong>
                </button>
                <hr />
                <h2>Table of content</h2>
                <br />
                <table className="table">
                  <thead>
                    <tr
                      style={{
                        textAlign: "center",
                        borderWidth: "0px",
                        borderStyle: "none",
                      }}
                    >
                      <th>STT</th>
                      <th>MSSV</th>
                      <th>Họ tên</th>
                      <th>Công việc được giao</th>
                      <th>Kết quả</th>
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "center" }}>
                    <tr>
                      <td>1</td>
                      <td>19130215</td>
                      <td>
                        Lê Quốc Thịnh
                        <br />
                      </td>
                      <td>Tìm hiểu về firebase</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>19130120</td>
                      <td>Cao Huy Tấn Lộc</td>
                      <td>Tìm hiểu về firebase</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>19130128</td>
                      <td>Nguyễn Dũy Long</td>
                      <td>Tìm hiểu về firebase</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>19130131</td>
                      <td>Lương Hữu Luân</td>
                      <td>Tìm hiểu về firebase</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>19130172</td>
                      <td>Nguyễn Công Phúc</td>
                      <td>Tìm hiểu về firebase</td>
                      <td>100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="pills-ColorPalette"
                role="tabpanel"
                aria-labelledby="pills-ColorPalette-tab"
              >
                <h2>Color palette</h2>
                <hr />
                <div>
                  <div>
                    <h3>Group website primary color</h3>
                    <p>
                      Color: <strong>#212529</strong>
                    </p>
                    <span
                      className="swatch-preview"
                      style={{ backgroundColor: "#212529" }}
                    />
                  </div>
                  <br />
                  <div>
                    <h3>Group website secondary color</h3>
                    <p>
                      Color: <strong>#FEC503</strong>
                    </p>
                    <span
                      className="swatch-preview"
                      style={{ backgroundColor: "#fec503" }}
                    />
                  </div>
                  <br />
                  <div>
                    <h3>Project website primary color</h3>
                    <p>
                      Color: <strong>#009CD7</strong>
                    </p>
                    <span
                      className="swatch-preview"
                      style={{ backgroundColor: "#009cd7" }}
                    />
                  </div>
                  <br />
                  <div>
                    <h3>Project website secondary color</h3>
                    <p>
                      Color: <strong>#f77f00</strong>
                    </p>
                    <span
                      className="swatch-preview"
                      style={{ backgroundColor: "#f77f00" }}
                    />
                  </div>
                </div>
                <br />
                <h2>Text color of group website</h2>
                <li style={{ color: "#212529" }}>
                  Normal text: <strong>#212529</strong>
                </li>
                <li style={{ color: "#fed136" }}>
                  Text hoover: <strong>#fed136</strong>
                </li>
                <br />
                <h2>Text color of project website</h2>
                <li style={{ color: "#212529" }}>
                  Normal text: <strong> #212529</strong>
                </li>
                <li style={{ color: "#003893" }}>
                  Link: <strong>#003893</strong>
                </li>
                <li style={{ color: "#ff0000" }}>
                  Link hoover: <strong>#FF0000</strong>
                </li>
              </div>

              <div
                className="tab-pane fade"
                id="pills-ImageAndIcon"
                role="tabpanel"
                aria-labelledby="pills-ImageAndIcon-tab"
              >
                <h2>Image and icon</h2>
                <h3>Social icon</h3>
                <div className="social-icon-styleGuide">
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#" target="_blank">
                        <i className="fa fa-link" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" target="_blank">
                        <i className="fa fa-github" />
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Logo</h3>
                <div className="div-container-logo">
                  <img
                    className="img-icon"
                    src="assets/img/logoWebsite.png"
                    alt="logoWebsite"
                  />
                  <div className="div-icon">
                    <p className="t-center">100x100</p>
                  </div>
                </div>
                <h3>Small avatar</h3>
                <div className="rounded-circle mx-auto small-avt div-icon">
                  <p className="t-center">
                    {" "}
                    100x100 <br />
                    boder radius: 50%
                  </p>
                </div>
                <h3>Large avatar</h3>
                <div className="rounded-circle mx-auto large-avt div-icon">
                  <p className="t-center">
                    {" "}
                    225x225 <br />
                    boder radius: 50%
                  </p>
                </div>
                <h3>technical image</h3>
                <div className="mx-auto img-large div-icon">
                  <p className="t-center">
                    {" "}
                    225x225 <br />
                    boder radius: 50%
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-FileAndDirectory"
                role="tabpanel"
                aria-labelledby="pills-FileAndDirectory-tab"
              >
                <div className="mx-auto img-large ">
                  <p>Tree Diagram Web Project</p>
                  <img src="assets/img/tree.jpg" />
                </div>
                <div style={{ marginTop: "400px" }}>
                  <div className="mx-auto img-large ">
                  <p>Tree Diagram Web Nhóm</p>
                    <img src="assets/img/TREE2.PNG" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default StyleGuide;
