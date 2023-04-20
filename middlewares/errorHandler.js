const apiResponse = require("../utils/apiResponse");
const log = require("../utils/logger");

/**
 * @desc Catch all the errors from the lambda and send valid http response
 */
module.exports = () => ({
  onError: (request) => {
    const { error } = request;
    log.debug(error.stack, "Error stack");
    log.error(error.message);
    request.response = apiResponse(error.statusCode || 500, {
      message: error.message,
    });
  },
});
