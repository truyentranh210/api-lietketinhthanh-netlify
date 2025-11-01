const express = require("express");
const serverless = require("serverless-http");
const app = express();

const tinhThanh = [
  "Hà Nội","Hà Giang","Cao Bằng","Bắc Kạn","Tuyên Quang","Lào Cai","Điện Biên","Lai Châu","Sơn La","Yên Bái",
  "Hoà Bình","Thái Nguyên","Lạng Sơn","Quảng Ninh","Bắc Giang","Phú Thọ","Vĩnh Phúc","Bắc Ninh","Hải Dương","Hải Phòng",
  "Hưng Yên","Thái Bình","Hà Nam","Nam Định","Ninh Bình","Thanh Hóa","Nghệ An","Hà Tĩnh","Quảng Bình","Quảng Trị",
  "Thừa Thiên Huế","Đà Nẵng","Quảng Nam","Quảng Ngãi","Bình Định","Phú Yên","Khánh Hòa","Ninh Thuận","Bình Thuận","Kon Tum",
  "Gia Lai","Đắk Lắk","Đắk Nông","Lâm Đồng","Bình Phước","Tây Ninh","Bình Dương","Đồng Nai","Bà Rịa - Vũng Tàu","TP. Hồ Chí Minh",
  "Long An","Tiền Giang","Bến Tre","Trà Vinh","Vĩnh Long","Đồng Tháp","An Giang","Kiên Giang","Cần Thơ","Hậu Giang",
  "Sóc Trăng","Bạc Liêu","Cà Mau"
];

app.get("/home", (req, res) => {
  res.json({
    message: "🇻🇳 API Tỉnh Thành Việt Nam",
    huongDan: {
      "/home": "Hiển thị hướng dẫn API",
      "/tinhthanh?so={1-63}": "Nhập số để xem tên tỉnh. Ví dụ: /tinhthanh?so=37"
    }
  });
});

app.get("/tinhthanh", (req, res) => {
  const so = parseInt(req.query.so);
  if (!so || so < 1 || so > tinhThanh.length) {
    return res.status(400).json({ error: `Nhập số từ 1 đến ${tinhThanh.length}` });
  }
  res.json({ so, tenTinh: tinhThanh[so - 1] });
});

module.exports.handler = serverless(app);
