const apiResponse = require("../../utils/apiResponse");
const { createNote } = require("../../services/notes");

module.exports = {
  handler: async (event) => {
    try {
      const body = JSON.parse(event.body);
      const result = await createNote(body);
      return apiResponse(201, { data: result });
    } catch (error) {
      return apiResponse(500, { message: error.message });
    }
  },
};
