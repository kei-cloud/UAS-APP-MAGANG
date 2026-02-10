const mysql = require("mysql2");

// buat koneksi
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        
  password: "pancasari1",        
  database: "magang_db", 
});

// cek koneksi
db.connect((err) => {
  if (err) {
    console.log("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

module.exports = db;
