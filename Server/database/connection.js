const mysql = require("mysql");
require("dotenv/config");

const PORT = 3306;
const connexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Y+4-p7?yP#QdYpAu&d_j8W^tskXfh",
  logging: true,
  port: PORT,
});

module.exports = connexion;
