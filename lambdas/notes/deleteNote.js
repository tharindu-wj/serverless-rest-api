const apiResponse = require("../../utils/apiResponse");
const { deleteNote } = require("../../services/notes");

module.exports = {
  handler: async (event) => {
    try {
      const result = deleteNote(event.pathParameters.noteId);
      return apiResponse(200, { data: result });
    } catch (error) {
      return apiResponse(500, {});
    }
  },
};
