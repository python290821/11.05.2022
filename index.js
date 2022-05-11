//const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

a =  { x : 5, y: 10, z: 12 }
//const { x } = a; // x = a.x
//const x = a.x
const { x, y, z } = a;

const logConfiguration =  {
    format: combine(
        label({label: 'main module'}),
        timestamp(),
        prettyPrint()
    ),
    'transports': [
        // save to console
        new transports.Console( {level: 'error'} ),
        new transports.File({ filename: 'exmaple.log', level: 'debug' })
    ]
}

const logger = createLogger(logConfiguration);

logger.info('Hello Winston!');

logger.log({
    message: 'Hello Winston !',
    level: 'info'
});

logger.debug('do you see me?');
