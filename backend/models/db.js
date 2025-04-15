const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 8889,
});

db.connect((err) => {
  if (err) console.log("Erreur de connexion DB:", err);
  else console.log("Connecté à MySQL !");
});

module.exports = db;
