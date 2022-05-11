//const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logConfiguration =  {
    format: combine(
        label({label: 'main module'}),
        timestamp(),
        prettyPrint()
    ),
    'transports': [
        // save to console
        new transports.Console({ level: 'debug' }),
        new transports.File({ filename: 'exmaple.log', level: 'debug' })
    ]
}

const logger = createLogger(logConfiguration);

module.exports.logger = logger