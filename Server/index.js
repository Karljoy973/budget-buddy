const app = require("./app/index");
require("dotenv").config();

const SV_PORT = process.env.SV_PORT;

app.listen(SV_PORT, () =>
  console.log(
    `Server started on port ${SV_PORT}
whatch Server on localhost:${SV_PORT}`,
  ),
);
