const { pool } = require("../connection");

const get_user = (req, res) => {
  const { id } = req.params;
  pool.query(`SELECT * FROM user WHERE id = ${id}`, (err, results) => {
    if (err) {
      res.status(400).json({ message: `No user with id ${id} found` }, err);
    }
    res.status(200).json(results);
  });
};

module.exports = {
  get_user,
};
