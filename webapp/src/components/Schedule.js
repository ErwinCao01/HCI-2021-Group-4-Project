import React, { Component } from 'react';

class Schedule extends Component {
  render() {
    return (
      <div>
        <section id="schedule" style={{ height: '700px' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center" style={{ height: '87px', margin: '-9px' }}>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
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
                  </div>
                  <div id="item-1-2" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-2-tab">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Tìm hiểu về ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Tìm hiểu về ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Tìm hiểu về ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Tìm hiểu về ReactJS, Firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Tìm hiểu về ReactJS, Firebase</td>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Hoàn thành chỉnh sửa trang member</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Thiết kế logo, chọn template cho nhóm</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Hoàn thành chỉnh sửa trang about</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Viết trang Technical</td>
                            <td>60%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Chỉnh sửa và chuyển web nhóm sang react</td>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Tạo tab đa cấp cho trang Schedule</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Chọn chủ đề web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Chỉnh sửa trang Picture</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Viết trang Technical</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Chỉnh sửa và chuyển web nhóm sang react</td>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Hoàn thành chỉnh sửa lỗi của web nhóm</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Hoàn thành chỉnh sửa lỗi của web nhóm</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Hoàn thành chỉnh sửa lỗi của web nhóm</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Hoàn thành chỉnh sửa lỗi của web nhóm</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Hoàn thành chỉnh sửa lỗi của web nhóm</td>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Viết phần khung, thanh menu, footer của web project</td>
                            <td>70%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Viết trang thế giới của web project</td>
                            <td>40%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Viết trang vaccin của web project</td>
                            <td>50%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Viết trang Việt Nam của web project</td>
                            <td>65%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Viết trang home của web project</td>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Viết phần khung, thanh menu, footer của web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Viết trang thế giới của web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Viết trang vaccin của web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Viết trang Việt Nam của web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Viết trang home của web project</td>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Viết phần login, sign up</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Kiểm tra, deploy web nhóm lên firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Ghép code trang project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Ghép code trang project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Ghép code trang project</td>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Chuyển web project qua react</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Chuyển web project qua react</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Chuyển web project qua react</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Chuyển web project qua react</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Chuyển web project qua react</td>
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
                          <tr style={{ textAlign: 'center', borderWidth: '0px', borderStyle: 'none' }}>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Họ tên</th>
                            <th>Công việc được giao</th>
                            <th>Kết quả</th>
                          </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                          <tr>
                            <td>1</td>
                            <td>19130215</td>
                            <td>Lê Quốc Thịnh<br /></td>
                            <td>Chỉnh sửa, hoàn thành, deploy web project lên firebase</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>19130120</td>
                            <td>Cao Huy Tấn Lộc</td>
                            <td>Chỉnh sửa, hoàn thành web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>19130128</td>
                            <td>Nguyễn Dũy Long</td>
                            <td>Chỉnh sửa, hoàn thành web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>19130131</td>
                            <td>Lương Hữu Luân</td>
                            <td>Chỉnh sửa, hoàn thành web project</td>
                            <td>100%</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>19130172</td>
                            <td>Nguyễn Công Phúc</td>
                            <td>Chỉnh sửa, hoàn thành web project</td>
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