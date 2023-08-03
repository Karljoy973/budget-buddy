const moment = require("moment");
const logger = (req, res, next) => {
  if (req.body === undefined) console.warn("\nrequest is undefined \n");
  console.log(`sent request ${req.body} - ${moment().format()}
protocol : ${req.protocol} - adress : ${req.get("host")} \nendpoint : ${
    req.originalUrl
  } `);
  next();
};

module.exports = logger;
