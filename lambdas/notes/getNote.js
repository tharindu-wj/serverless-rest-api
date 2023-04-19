const apiResponse = require("../../utils/apiResponse");
const { getNote } = require("../../services/notes");

module.exports = {
  handler: async (event) => {
    try {
      const item = await getNote(event.pathParameters.noteId);
      return apiResponse(200, { data: item });
    } catch (error) {
      return apiResponse(500, {});
    }
  },
};
