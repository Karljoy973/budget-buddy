const mysql = require("mysql");
const { credentials } = require('./index');

console.log(credentials.host)
const connexion = mysql.createConnection({
  host: credentials.host,
  user: credentials.user,
  password: credentials.password,
  logging: true,
  port: credentials.PORT,
});

module.exports = connexion;
