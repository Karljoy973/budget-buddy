const winston = require('winston');

const Format = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });

module.exports = Format;