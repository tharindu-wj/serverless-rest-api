const bunyan = require("bunyan");

/**
 * @desc Build common logger
 */
module.exports = bunyan.createLogger({
  name: "Serverless REST API",
  level: "debug",
});
