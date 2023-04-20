const apiResponse = require("../utils/apiResponse");

module.exports = () => ({
  onError: (request) => {
    const { error } = request;
    console.error(error.message);
    request.response = apiResponse(error.statusCode || 500, {
      message: error.message,
    });
  },
});
