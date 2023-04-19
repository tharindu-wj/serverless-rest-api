const apiResponse = require("../../utils/apiResponse");
const { updateNote } = require("../../services/notes");

module.exports = {
  handler: async (event) => {
    try {
      const body = JSON.parse(event.body);
      const result = await updateNote(event.pathParameters.noteId, body);
      return apiResponse(200, { data: result });
    } catch (error) {
      return apiResponse(500, {});
    }
  },
};
