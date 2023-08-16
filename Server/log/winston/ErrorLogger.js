const expressWinston = require('express-winston');
const winston = require('winston');
const Format = require('./Format');

const errorLogger = expressWinston.errorLogger(
    {
        transports : [
            new winston.transports.File({
                level: "warn",
                filename : "./log/combined.log"}),
            new winston.transports.File({
                level : "error",
                filename : "./log/combined.log"})

    ],
    format : winston.format.combine(
        winston.format.json(),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
        Format
    ),
    statusLevels : true
}
)

module.exports = errorLogger;