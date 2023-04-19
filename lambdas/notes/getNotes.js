const { apiResponse } = require("../../utils");

module.exports = {
  handler: async (event) => {
    try {
      return apiResponse(200, {});
    } catch (error) {
      return apiResponse(500, {});
    }
  },
};
