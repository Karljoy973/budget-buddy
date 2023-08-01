const moment = require('moment');
const logger = (req, res, next) =>{
    console.log(`sent request ${req.body} - ${moment().format()}
    ${req.protocol} - ${req.get('host')} - ${req.originalUrl} `);
    next();
}

module.exports = logger;