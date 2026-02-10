const db = require("../config/db");

// GET
exports.getAllLogbook = (req, res) => {
  const sql = "SELECT * FROM logbook ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("GET ERROR:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(result);
  });
};

// POST
exports.createLogbook = (req, res) => {
  console.log("BODY DITERIMA:", req.body); // penting debug

  const { tanggal, deskripsi, foto } = req.body;

  if (!tanggal || !deskripsi) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const sql = "INSERT INTO logbook (tanggal, deskripsi, foto) VALUES (?,?,?)";

  db.query(sql, [tanggal, deskripsi, foto], (err, result) => {
    if (err) {
      console.log("INSERT ERROR:", err);
      return res.status(500).json({ message: "Gagal simpan logbook" });
    }

    res.json({ message: "Logbook berhasil disimpan" });
  });
};
