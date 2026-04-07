export default function handler(req, res) {
  const data = [
    {
      area: "Ba Vì",
      price: "12 triệu/m2",
      old_price: "10 triệu/m2",
      growth: "20",
      potential: "Gần khu du lịch",
      link: "https://giadatbavi2026.vercel.app/"
    },
    {
      area: "Vân Hòa",
      price: "15 triệu/m2",
      old_price: "12 triệu/m2",
      growth: "25",
      potential: "Quy hoạch mạnh",
      link: ""
    }
  ];

  res.status(200).json(data);
}
