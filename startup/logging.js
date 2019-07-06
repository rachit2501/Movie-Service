const winston = require('winston');

require('winstein-mongodb');
require('express-async-errors');

module.exports = function()
{
  winston.handleException(
    new winston.transports.File({ filename :  'uncaughtException.log'}));
  process.on('unhandledRejection', (ex)=>
  {
    throw ex;
  });

  winston.add(winston.transports.File , {filename : 'logfile.log'});
  winston.add(winston.transports.MongoDB,
  {
    db: 'mongodb://localhost/vidly',
    level : 'info'
  });
}