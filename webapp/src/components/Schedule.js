import React, { Component } from 'react';

class Schedule extends Component {
    render() {
        return (
            <div>
                <section id="schedule" style={{height: '700px'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center" style={{height: '87px', margin: '-9px'}}>
                <h2 className="text-uppercase section-heading">Schedule</h2>
                <h3 className="text-muted section-subheading" />
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs" role="tablist">
                  <li className="nav-item"><a className="nav-link active" id="item-1-1-tab" role="tab" aria-controls="item-1-1" aria-selected="true" href="#item-1-1" data-bs-toggle="tab">Week 1</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-2-tab" role="tab" aria-controls="item-1-2" aria-selected="false" href="#item-1-2" data-bs-toggle="tab">Week 2</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-3-tab" role="tab" aria-controls="item-1-3" aria-selected="false" href="#item-1-3" data-bs-toggle="tab">Week 3</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-4-tab" role="tab" aria-controls="item-1-4" aria-selected="false" href="#item-1-4" data-bs-toggle="tab">Week 4</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-5-tab" role="tab" aria-controls="item-1-5" aria-selected="false" href="#item-1-5" data-bs-toggle="tab">Week 5</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-6-tab" role="tab" aria-controls="item-1-6" aria-selected="false" href="#item-1-6" data-bs-toggle="tab">Week 6</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-7-tab" role="tab" aria-controls="item-1-7" aria-selected="false" href="#item-1-7" data-bs-toggle="tab">Week 7</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-8-tab" role="tab" aria-controls="item-1-8" aria-selected="false" href="#item-1-8" data-bs-toggle="tab">Week 8</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-9-tab" role="tab" aria-controls="item-1-9" aria-selected="false" href="#item-1-9" data-bs-toggle="tab">Week 9</a></li>
                  <li className="nav-item"><a className="nav-link" id="item-1-10-tab" role="tab" aria-controls="item-1-10" aria-selected="false" href="#item-1-10" data-bs-toggle="tab">Week 10</a></li>
                </ul>
              </div>
              <div className="card-body">
                <div id="nav-tabContent" className="tab-content">
                  <div id="item-1-1" className="tab-pane fade show active" role="tabpanel" aria-labelledby="item-1-1-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>T??m hi???u v??? firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>T??m hi???u v??? firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>T??m hi???u v??? firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>T??m hi???u v??? firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>T??m hi???u v??? firebase</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-2" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-2-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>T??m hi???u v??? ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>T??m hi???u v??? ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>T??m hi???u v??? ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>T??m hi???u v??? ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>T??m hi???u v??? ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-3" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-3-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>Ho??n th??nh ch???nh s???a trang member</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>Thi???t k??? logo, ch???n template cho nh??m</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>Ho??n th??nh ch???nh s???a trang about</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>Vi???t trang Technical</td>
                            <td>60%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>Ch???nh s???a v?? chuy???n web nh??m sang react</td>
                            <td>50%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-4" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-4-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>T???o tab ??a c???p cho trang Schedule</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>Ch???n ch??? ????? web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>Ch???nh s???a trang Picture</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>Vi???t trang Technical</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>Ch???nh s???a v?? chuy???n web nh??m sang react</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-5" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-5-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>Ho??n th??nh ch???nh s???a l???i c???a web nh??m</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>Ho??n th??nh ch???nh s???a l???i c???a web nh??m</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>Ho??n th??nh ch???nh s???a l???i c???a web nh??m</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>Ho??n th??nh ch???nh s???a l???i c???a web nh??m</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>Ho??n th??nh ch???nh s???a l???i c???a web nh??m</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-6" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-6-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>Vi???t ph???n khung, thanh menu, footer c???a web project</td>
                            <td>70%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>Vi???t trang th??? gi???i c???a web project</td>
                            <td>40%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>Vi???t trang vaccin c???a web project</td>
                            <td>50%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>Vi???t trang Vi???t Nam c???a web project</td>
                            <td>65%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>Vi???t trang home c???a web project</td>
                            <td>60%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-7" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-7-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                        <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>Vi???t ph???n khung, thanh menu, footer c???a web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>Vi???t trang th??? gi???i c???a web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>Vi???t trang vaccin c???a web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>Vi???t trang Vi???t Nam c???a web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>Vi???t trang home c???a web project</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-8" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-8-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>Vi???t ph???n login, sign up</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>Ki???m tra, deploy web nh??m l??n firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>Gh??p code trang project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>Gh??p code trang project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>Gh??p code trang project</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-9" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-9-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>Chuy???n web project qua react</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>Chuy???n web project qua react</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>Chuy???n web project qua react</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>Chuy???n web project qua react</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>Chuy???n web project qua react</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="item-1-10" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-10-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{textAlign: 'center', borderWidth: '0px', borderStyle: 'none'}}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>H??? t??n</th>
                            <th>C??ng vi???c ???????c giao</th>
                            <th>K???t qu???</th>
                          </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>L?? Qu???c Th???nh<br /></td>
                            <td>Ch???nh s???a, ho??n th??nh, deploy web project l??n firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy T???n L???c</td>
                            <td>Ch???nh s???a, ho??n th??nh web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguy???n D??y Long</td>
                            <td>Ch???nh s???a, ho??n th??nh web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>L????ng H???u Lu??n</td>
                            <td>Ch???nh s???a, ho??n th??nh web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguy???n C??ng Ph??c</td>
                            <td>Ch???nh s???a, ho??n th??nh web project</td>
                            <td>100%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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

export default Schedule;