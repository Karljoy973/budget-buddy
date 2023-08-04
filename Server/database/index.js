const { pool } = require("./connexion");
const { post_user } = require("./write/user");

module.exports = {
  pool,
  post_user,
};
