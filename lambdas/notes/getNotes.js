const apiResponse = require("../../utils/apiResponse");
const { getNotes } = require("../../services/notes");

module.exports = {
  handler: async (event) => {
    try {
      const items = await getNotes();
      return apiResponse(200, { data: items });
    } catch (error) {
      return apiResponse(500, {});
    }
  },
};
