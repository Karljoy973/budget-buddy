const app = require("./app/index");
const { pool } = require("./database/index");

require("dotenv").config();

const SV_PORT = process.env.SV_PORT;
const DB_PORT = process.env.DB_PORT;

pool.connect((error) => {
  if (error) console.warn(error);
  else console.log(`Database Connection Setup on port ${DB_PORT}`);
});

app.listen(SV_PORT, () =>
  console.log(
    `Server started on port ${SV_PORT}
whatch Server on localhost:${SV_PORT}`,
  ),
);
