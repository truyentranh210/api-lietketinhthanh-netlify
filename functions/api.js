const express = require("express");
const serverless = require("serverless-http");
const app = express();

const tinhThanh = {
  1: { ten: "Hà Nội", mien: "Bắc", danSo: 8120000 },
  2: { ten: "Hà Giang", mien: "Bắc", danSo: 870000 },
  4: { ten: "Cao Bằng", mien: "Bắc", danSo: 530000 },
  6: { ten: "Bắc Kạn", mien: "Bắc", danSo: 320000 },
  8: { ten: "Tuyên Quang", mien: "Bắc", danSo: 800000 },
  10: { ten: "Lào Cai", mien: "Bắc", danSo: 760000 },
  11: { ten: "Điện Biên", mien: "Bắc", danSo: 610000 },
  12: { ten: "Lai Châu", mien: "Bắc", danSo: 480000 },
  14: { ten: "Sơn La", mien: "Bắc", danSo: 1280000 },
  15: { ten: "Yên Bái", mien: "Bắc", danSo: 820000 },
  17: { ten: "Hòa Bình", mien: "Bắc", danSo: 870000 },
  19: { ten: "Thái Nguyên", mien: "Bắc", danSo: 1280000 },
  20: { ten: "Lạng Sơn", mien: "Bắc", danSo: 790000 },
  22: { ten: "Quảng Ninh", mien: "Bắc", danSo: 1340000 },
  24: { ten: "Bắc Giang", mien: "Bắc", danSo: 1900000 },
  25: { ten: "Phú Thọ", mien: "Bắc", danSo: 1450000 },
  26: { ten: "Vĩnh Phúc", mien: "Bắc", danSo: 1220000 },
  27: { ten: "Bắc Ninh", mien: "Bắc", danSo: 1600000 },
  30: { ten: "Hải Dương", mien: "Bắc", danSo: 1900000 },
  31: { ten: "Hải Phòng", mien: "Bắc", danSo: 2200000 },
  33: { ten: "Hưng Yên", mien: "Bắc", danSo: 1240000 },
  34: { ten: "Thái Bình", mien: "Bắc", danSo: 1800000 },
  35: { ten: "Hà Nam", mien: "Bắc", danSo: 880000 },
  36: { ten: "Nam Định", mien: "Bắc", danSo: 1850000 },
  37: { ten: "Ninh Bình", mien: "Bắc", danSo: 990000 },
  38: { ten: "Thanh Hóa", mien: "Trung", danSo: 3500000 },
  40: { ten: "Nghệ An", mien: "Trung", danSo: 3300000 },
  42: { ten: "Hà Tĩnh", mien: "Trung", danSo: 1300000 },
  44: { ten: "Quảng Bình", mien: "Trung", danSo: 900000 },
  45: { ten: "Quảng Trị", mien: "Trung", danSo: 640000 },
  46: { ten: "Thừa Thiên Huế", mien: "Trung", danSo: 1130000 },
  48: { ten: "Đà Nẵng", mien: "Trung", danSo: 1200000 },
  49: { ten: "Quảng Nam", mien: "Trung", danSo: 1500000 },
  51: { ten: "Quảng Ngãi", mien: "Trung", danSo: 1300000 },
  52: { ten: "Bình Định", mien: "Trung", danSo: 1500000 },
  54: { ten: "Phú Yên", mien: "Trung", danSo: 890000 },
  56: { ten: "Khánh Hòa", mien: "Trung", danSo: 1220000 },
  58: { ten: "Ninh Thuận", mien: "Trung", danSo: 600000 },
  60: { ten: "Bình Thuận", mien: "Trung", danSo: 1250000 },
  62: { ten: "Kon Tum", mien: "Trung", danSo: 540000 },
  64: { ten: "Gia Lai", mien: "Trung", danSo: 1600000 },
  66: { ten: "Đắk Lắk", mien: "Trung", danSo: 1950000 },
  67: { ten: "Đắk Nông", mien: "Trung", danSo: 750000 },
  68: { ten: "Lâm Đồng", mien: "Trung", danSo: 1300000 },
  70: { ten: "Bình Phước", mien: "Nam", danSo: 1100000 },
  72: { ten: "Tây Ninh", mien: "Nam", danSo: 1200000 },
  74: { ten: "Bình Dương", mien: "Nam", danSo: 2600000 },
  75: { ten: "Đồng Nai", mien: "Nam", danSo: 3200000 },
  77: { ten: "Bà Rịa - Vũng Tàu", mien: "Nam", danSo: 1200000 },
  79: { ten: "TP. Hồ Chí Minh", mien: "Nam", danSo: 9200000 },
  80: { ten: "Long An", mien: "Nam", danSo: 1700000 },
  82: { ten: "Tiền Giang", mien: "Nam", danSo: 1800000 },
  83: { ten: "Bến Tre", mien: "Nam", danSo: 1300000 },
  84: { ten: "Trà Vinh", mien: "Nam", danSo: 1000000 },
  86: { ten: "Vĩnh Long", mien: "Nam", danSo: 1020000 },
  87: { ten: "Đồng Tháp", mien: "Nam", danSo: 1600000 },
  89: { ten: "An Giang", mien: "Nam", danSo: 1900000 },
  91: { ten: "Kiên Giang", mien: "Nam", danSo: 1900000 },
  92: { ten: "Cần Thơ", mien: "Nam", danSo: 1250000 },
  93: { ten: "Hậu Giang", mien: "Nam", danSo: 750000 },
  94: { ten: "Sóc Trăng", mien: "Nam", danSo: 1200000 },
  95: { ten: "Bạc Liêu", mien: "Nam", danSo: 900000 },
  96: { ten: "Cà Mau", mien: "Nam", danSo: 1200000 }
};

// Trang hướng dẫn
app.get("/home", (req, res) => {
  res.json({
    message: "🇻🇳 API Tỉnh Thành Việt Nam (chuẩn mã, có dân số & miền)",
    huongDan: {
      "/home": "Hiển thị hướng dẫn",
      "/tinhthanh?so={mã tỉnh}": "Tra cứu tỉnh theo mã. Ví dụ: /tinhthanh?so=40",
      "/all": "Xem toàn bộ danh sách"
    }
  });
});

// Tra cứu tỉnh
app.get("/tinhthanh", (req, res) => {
  const so = parseInt(req.query.so);
  if (!so || !tinhThanh[so]) {
    return res.status(400).json({
      error: "Không tìm thấy mã tỉnh này. Hãy nhập mã hợp lệ (1–96)."
    });
  }
  res.json({ ma: so, ...tinhThanh[so] });
});

// Toàn bộ
app.get("/all", (req, res) => {
  res.json(tinhThanh);
});

module.exports.handler = serverless(app);
