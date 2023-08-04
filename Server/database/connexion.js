const mysql = require("mysql");
const credentials = require("./credentials");

const pool = mysql.createPool({
  host: credentials.host,
  user: credentials.user,
  password: credentials.password,
  logging: true,
  port: credentials.PORT,
});

module.exports = { pool };
