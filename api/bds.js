export default function handler(req, res) {
  res.status(200).json([
    {
      khu_vuc: "Đồng Bảng",
      gia_hien_tai: 22.4,
      gia_2023: 14,
      tang_truong: 60,
      tiem_nang: "A"
    }
  ]);
}
