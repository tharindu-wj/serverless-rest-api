const middy = require("@middy/core");
const apiResponse = require("../../utils/apiResponse");
const { deleteNote } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");

const flow = async (event) => {
  const result = deleteNote(event.pathParameters.noteId);
  return apiResponse(200, { data: result });
};

const handler = middy(flow).use(errorHandler());

module.exports = {
  handler,
};
