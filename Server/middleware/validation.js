// const validate = (req, res) => {
//   const valid = true;
//   const lack = [];
//   const data = req.body;
//   //improve it with json schema later on
//   if (!data._email) {
//     valid = false;
//     lack.append("email");
//   }
//   if (!data._family_name) {
//     valid = false;
//     lack.append("family name");
//   }
//   if (!data._name) {
//     valid = false;
//     lack.append("first name");
//   }
//   if (!data._password) {
//     valid = false;
//     lack.append("password");
//   }
//   if (!data._phone) {
//     valid = false;
//     lack.append("phone number");
//   }
//   if (!valid) {
//     const message = "please include : ";
//     lack.forEach((v) => message + v + " - ");
//     res.send(400).json({ message });
//   }
// };
