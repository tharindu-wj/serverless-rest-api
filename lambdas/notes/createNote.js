const { apiResponse } = require("../../utils");

module.exports = {
  handler: async (event) => {
    try {
      return apiResponse(201, {});
    } catch (error) {
      return apiResponse(500, {});
    }
  },
};
