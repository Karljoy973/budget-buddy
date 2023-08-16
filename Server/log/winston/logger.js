const expressWinston = require('express-winston');
const winston = require('winston');
const Format = require('./Format');


const logger = expressWinston.logger({
    transports : [
        new winston.transports.Console(),
        new winston.transports.File({
            level : "info",
            filename : "./log/combined.log"}),
            
    ], 
    format : winston.format.combine(
        winston.format.json(),
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.prettyPrint(),
        Format
    ),
    statusLevels: true
}
);

module.exports = logger;

