const uuid = require("uuid").v4;

const insert_user = (req, res) => {
  const data = req.body;
  return `INSERT INTO sys.user(
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
};

module.exports = {
  insert_user,
};
