const uuid = require("uuid").v4;
const { pool } = require("../index").pool;

const post = async (data) => {
  const query = `INSERT INTO sys.user
        (
            _id, 
            _name, 
            _family_name, 
            _password, 
            _email, 
            _phone_number
            ) 
        VALUES (
            ${parseInt(uuid())}, 
            ${data._name.toString()}, 
            ${data._family_name.toString()}, 
            ${data._password.toString()}, 
            ${parseInt(data._email)}, 
            ${data._phone.toString()}
            );`;

  pool
    .getConnection()
    .then((connexion) => {
      connexion.query(query);
    })
    .catch((e) => res.send(400).json({ msg: new Error(e) }))
    .release();
};

module.exports = {
  post,
};
