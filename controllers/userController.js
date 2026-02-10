const db = require("../config/db");

// GET semua user
exports.getAllUsers = (req, res) => {
  const sql = "SELECT id, nama, username, role FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(result);
  });
};

// LOGIN user
exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM users WHERE username=? AND password=?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length > 0) {
      res.json({
        message: "Login berhasil",
        user: result[0],
      });
    } else {
      res.status(401).json({
        message: "Username atau password salah",
      });
    }
  });
};
