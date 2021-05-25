import React, { Component } from "react";
import FirebaseTutorial from "./FirebaseTutorial";
class Technical extends Component {
  render() {
    return (
      <div className="div-technical">
        <h1 className="title-create-firebase" >
          Hướng dẫn tạo một website bằng firebase
        </h1>
        <h3 className="text-for-h3">Firebase là gì?</h3>
        <p className="text-content">
          Firebase là một nền tảng do google cung cấp hoạt động trên cơ sở
          <br /> đám mây- Cloud để phát triển ứng dụng di động và trang web,
          <br />
          bao gồm các API đơn giản và mạnh mẽ mà không cần backend hay server.
        </p>
        <h3 className="text-for-h3">
          Các bước để tạo một web app với firebase.
        </h3>
        <h4 className="text-for-h4">B1: Chuẩn bị</h4>
        <FirebaseTutorial content="1. Một tài khoản google" />
        <FirebaseTutorial
          content="2. Cài đặt nodejs tại đây:"
          url="http://nodejs.org/"
          nameUrl="nodejs.org"
          path="assets/img/firebaseImage/h1.png"
          imgName = "Hinh 1"
        />
        <FirebaseTutorial
          content='3. Cài đặc Firebase CLI bằng cách mở command line gõ lệnh "npm install
          -g firebase-tools".'
          path="assets/img/firebaseImage/h2.png"
          imgName = "Hinh 2"
        />
         <FirebaseTutorial
          content='Sau khi cài xong để kiểm tra chạy lệnh "firebase --version". nếu như hiện phiên bản như bên dưới hoặc cao hơn là đã thành công.'
          path="assets/img/firebaseImage/h3.png"
          imgName = "Hinh 3"
        />
        <h4 className="text-for-h4">B2: Tiến hành tạo một trang web</h4>
        <FirebaseTutorial
          content='1. Vào trang web '
          url = "https://firebase.google.com"
          nameUrl = "firebase.google.com"
        />
         <FirebaseTutorial
          content='2. Tiến hành đăng nhập vào firebase bằng tài khoản google.'
          path="assets/img/firebaseImage/h4.png"
          imgName = "Hinh 4"
        />
        <FirebaseTutorial
          content='3. Sau khi đăng nhập chọn get start.'
          path="assets/img/firebaseImage/h5.png"
          imgName = "Hinh 5"
        />
         <FirebaseTutorial
          content='4. Tạo một dự án mới.'
          path="assets/img/firebaseImage/h6.png"
          imgName = "Hinh 6"
        />
         <FirebaseTutorial
          content='5. Đặt tên cho dự án.'
          path="assets/img/firebaseImage/h7.png"
          imgName = "Hinh 7"
        />
         <FirebaseTutorial
          content='6. Chọn Carry on.'
          path="assets/img/firebaseImage/h8.png"
          imgName = "Hinh 8"
        />
         <FirebaseTutorial
          content='7. Chọn Default Account for Firebase.'
          path="assets/img/firebaseImage/h9.png"
          imgName = "Hinh 9"
        />
        <FirebaseTutorial
          content='8. Chọn vào đây để tạo website cho dự án của bạn.'
          path="assets/img/firebaseImage/h10.png"
          imgName = "Hinh 10"
        />
        <FirebaseTutorial
          content='9. Đặt tên cho website của bạn và chọn đăng ký.'
          path="assets/img/firebaseImage/h11.png"
          imgName = "Hinh 11"
        />
         <FirebaseTutorial
          content='10. Vậy là đã đăng ký thành công một web app trên firebase để chứa'
          path="assets/img/firebaseImage/h12.png"
          imgName = "Hinh 12"
        />
         <FirebaseTutorial
          content='11. Tiếp theo bạn cần tạo một thư mục trên máy tính của bạn để chứa dự'
          path="assets/img/firebaseImage/h13.png"
          imgName = "Hinh 13"
        />
         <FirebaseTutorial
          content='12. Mở cmd trong thư mục vừa tạo.'
          path="assets/img/firebaseImage/h14.png"
          imgName = "Hinh 14"
        />
        <FirebaseTutorial
          content='13. Đăng nhập vào firebase bằng lệnh "firebase login".'
          path="assets/img/firebaseImage/h15.png"
          imgName = "Hinh 15"
        />
        <FirebaseTutorial
          content='14. Tiếp tục gõ lệnh "firebase init hosting" để kết nối CLI tới tài
          khoản Firebase online.'
          path="assets/img/firebaseImage/h16.png"
          imgName = "Hinh 16"
        />
        <FirebaseTutorial
          content='15. Chọn "Use an existing project" và chọn tên dự án bạn đã tạo ở
          trên.'
          path="assets/img/firebaseImage/h17.png"
          imgName = "Hinh 17"
        />
        <FirebaseTutorial
          content='16. Trả lời các câu hỏi và chờ hiện ra "Firebase initialization
          complete!".'
          path="assets/img/firebaseImage/h18.png"
          imgName = "Hinh 18"
        />
        <FirebaseTutorial
          content='17. Tiếp theo cần gõ lệnh "firebase deploy" để đưa đưa code lên
          hosting của firebase là xong.'
          path="assets/img/firebaseImage/h19.png"
          imgName = "Hinh 19"
        />
        <FirebaseTutorial
          content='18. Truy cập vào đường link trong mục "Project console" hoặc "Hosting
          URL" để vào website của bạn.'
          path="assets/img/firebaseImage/h20.png"
          imgName = "Hinh 20"
        />
        <p>Xong rồi nhé tiến hành vào code trang web của bạn nào!</p>
      </div>
    );
  }
}

export default Technical;
