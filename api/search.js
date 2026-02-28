export default function handler(req, res) {
    // 1. Cấu hình CORS và Header
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // 2. DANH SÁCH 31 XÃ VÀ CÁC THÔN (Dữ liệu gốc của bạn)
    const danhSachToanHuyen = [
        { xa: "Thị trấn Tây Đằng", thon: ["Đông", "Đoài", "Nam", "Bắc", "Lai Bồ", "Cao Nhang", "Phú Mỹ"] },
        { xa: "Vạn Thắng", thon: ["Mai Trai", "La Xuyên", "Quang Ngọc", "Hậu Trạch", "Nhuận Trạch", "Tám Xuyên", "Chợ Mơ"] },
        { xa: "Vật Lại", thon: ["Vật Phụ", "Yên Thành", "Yên Bồ", "Vật Lại 1", "Vật Lại 2", "Vật Lại 3"] },
        { xa: "Phú Sơn", thon: ["Phú Hữu", "Yên Kỳ", "Lương Tụ", "Quy Mông", "Phú Mỹ"] },
        { xa: "Tản Hồng", thon: ["Vân Sa", "La Phẩm", "La Thượng"] },
        { xa: "Thái Hòa", thon: ["Thuận An", "Phú An", "Phú Nhiêu", "Trung Hà", "Cộng Hoà"] },
        { xa: "Cam Thượng", thon: ["Cam Đà", "Văn Minh", "Thăng Thắc", "Bài Nha"] },
        { xa: "Đông Quang", thon: ["Đông Viên", "Quang Húc", "Cao Cương"] },
        { xa: "Chu Minh", thon: ["Chu Quyến", "Vĩnh Phệ"] },
        { xa: "Phú Châu", thon: ["Liễu Châu", "Phú Xuyên", "Phong Châu"] },
        { xa: "Đồng Thái", thon: ["Đồng Bảng", "Thái Bình", "Tăng Cấu", "Tri Lai"] },
        { xa: "Tòng Bạt", thon: ["Tòng Thái", "Tòng Lệnh", "Thái Bạt"] },
        { xa: "Cẩm Lĩnh", thon: ["Cẩm Tân", "Bằng Tạ", "Ngọc Nhị", "Cẩm An", "An Thái", "Đầm Long"] },
        { xa: "Thụy An", thon: ["Đông An", "Liên Minh", "Thụy Phiêu", "Duyên Lãm"] },
        { xa: "Tiên Phong", thon: ["Kim Bí", "Thanh Lũng", "Đông Kỳ"] },
        { xa: "Ba Trại", thon: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
        { xa: "Tản Lĩnh", thon: ["Yên Thành", "Cua Chu", "Việt Long", "Hiệu Lực", "Bát Đầm", "Cẩm Phương", "Gò Sống", "Mỹ Đức", "Hát Giang", "Tam Mỹ"] },
        { xa: "Vân Hòa", thon: ["Bặn", "Muồng Phú Vàng", "Muồng Cháu", "Xuân Hoà", "Việt Hoà", "Bơn", "Xoan", "Nghe", "Đa Cuống"] },
        { xa: "Yên Bài", thon: ["Chóng", "Mít", "Muỗi", "Quảng Phúc", "Chóng", "Phúc Yên", "Hoà Thuận", "Quýt", "Bài"] },
        { xa: "Khánh Thượng", thon: ["Khánh Chúc Đồi", "Chẹ", "Gò Đình Muôn", "Bưởi", "Khánh Chúc Bãi", "Hương canh"] },
        { xa: "Minh Quang", thon: ["Đá Chông", "Minh Hồng", "Đần Sản", "Vip", "Pheo", "Mộc", "Lặt", "Sổ", "Phú Lội", "Đồng Tâm"] },
        { xa: "Ba Vì", thon: ["Hợp Nhất", "Hợp Sơn", "Yên Sơn"] },
        { xa: "Sơn Đà", thon: ["Khê Thượng", "Đan Thê", "Trí phú", "Yên Thịnh"] },
        { xa: "Thuần Mỹ", thon: ["Lương Phú", "Thuần Mỹ"] },
        { xa: "Phong Vân", thon: ["Vân Hội", "Tân Phong"] },
        { xa: "Cổ Đô", thon: ["Cổ Đô", "Kiều Mộc", "U Chu", "Vu Chu"] },
        { xa: "Phú Cường", thon: ["Thanh Chiểu", "Phú Thịnh"] },
        { xa: "Phú Đông", thon: ["Phú Nghĩa", "Đông Lâu", "Đồng Phú"] },
        { xa: "Phú Phương", thon: ["Phương Châu", "Phương Khê"] },
        { xa: "Châu Sơn", thon: ["Hạc Sơn", "Hoắc Châu"] },
        { xa: "Minh Châu", thon: ["Chu Châu", "Chu Chàng"] }
    ];

    const trucChinh = [
        { ten: "Quốc Lộ 32", gia: 45000000 },
        { ten: "Tỉnh Lộ 411", gia: 35000000 },
        { ten: "Tỉnh Lộ 412", gia: 28000000 },
        { ten: "Tỉnh Lộ 414", gia: 25000000 },
        { ten: "Đường đê Sông Hồng", gia: 12000000 }
    ];

    // 3. SINH DỮ LIỆU ĐỘNG (Logic tối ưu)
    let finalData = [];

    // Nạp trục chính
    trucChinh.forEach(t => {
        finalData.push({
            duong: t.ten,
            gia_2026_du_kien: t.gia * 3
        });
    });

    // Nạp các thôn xã
    danhSachToanHuyen.forEach(item => {
        let giaCoSo = 8000000;
        if (item.xa.includes("Tây Đằng")) giaCoSo = 20000000;
        else if (["Vạn Thắng", "Chu Minh", "Vật Lại"].includes(item.xa)) giaCoSo = 16000000;
        else if (["Tản Lĩnh", "Vân Hòa", "Yên Bài"].includes(item.xa)) giaCoSo = 14000000;
        else if (["Khánh Thượng", "Minh Châu"].includes(item.xa)) giaCoSo = 6000000;

        item.thon.forEach(t => {
            // Thôn mặt đường
            finalData.push({
                duong: `Thôn ${t} (Xã ${item.xa})`,
                gia_2026_du_kien: Math.round(giaCoSo * 2.8)
            });
            // Ngõ ô tô
            finalData.push({
                duong: `Ngõ ô tô thôn ${t} (Xã ${item.xa})`,
                gia_2026_du_kien: Math.round(giaCoSo * 0.7 * 2.5)
            });
        });
    });

   // Hàm hỗ trợ loại bỏ dấu tiếng Việt
function removeAccents(str) {
  return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

// 4. XỬ LÝ TÌM KIẾM THÔNG MINH
const { q } = req.query;
if (!q) return res.status(200).json([]);

const searchKey = removeAccents(q.toLowerCase());

const result = finalData.filter(item => {
  // Chuyển tên gốc trong data sang không dấu để so sánh
  const nameNoAccent = removeAccents(item.duong.toLowerCase());
  return nameNoAccent.includes(searchKey);
});

// Trả về kết quả (Giới hạn 10 để mượt giao diện)
res.status(200).json(result.slice(0, 10));
