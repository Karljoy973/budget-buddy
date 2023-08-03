const { pool } = require("../index");
const { insert_user } = require('../../controller/index')

const post_user = async () => {
  pool
    .getConnection()
    .then((connexion) => {
      connexion.query(insert_user);
    })
    .catch((e) => res.send(400).json({ msg: new Error(e) }))
    .release();
};

module.exports = {
  post_user,
};
