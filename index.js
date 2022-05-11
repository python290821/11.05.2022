const winston = require('winston');

const logConfiguration =  {
    'transports': [
        // save to console
        new winston.transports.Console()
    ]
}

const logger = winston.createLogger(logConfiguration);

logger.info('Hello Winston!');

logger.log({
    message: 'Hello Winston !',
    level: 'info'
});

logger.debug('do you see me?');
