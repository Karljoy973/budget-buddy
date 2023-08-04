const mysql = require("mysql");
const credentials = require("./credentials");

const pool = mysql.createPool({
  host: credentials.host,
  user: credentials.user,
  password: credentials.password,
  logging: true,
  port: credentials.PORT,
});

pool.getConnection((error, connexion) => {
  if (error) console.warn(error);
  else {
    const data = {
      _id : 1,
      _name : "a",
      _family_name: "a",
      _password :"a",
      _email:1,
      _phone:"a"
    }
    console.log(`Database Connection Setup on port ${credentials.PORT}`)
    connexion.query(`INSERT INTO sys.user(
      _id, 
      _name, 
      _family_name, 
      _password, 
      _email, 
      _phone_number
      ) 
  VALUES (
      ${parseInt(data._id)}, 
      ${data._name.toString()}, 
      ${data._family_name.toString()}, 
      ${data._password.toString()}, 
      ${parseInt(data._email)}, 
      ${data._phone.toString()}
      );`);       
};

});

// const post_user = async () => {
//   await pool.getConnection((connexion, error)=>{
//       try {
//         connexion.query(insert_user);
//         connexion.release();
//       } catch (error) {
//         // res
//         // .send(400)
//         // .json({ msg: "An error happened while proceeding to your query", e });
//         console.log(error);
//       }  
//     })
// };

// post_user()

module.exports = pool;
