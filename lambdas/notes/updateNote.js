const middy = require("@middy/core");
const jsonBodyParser = require("@middy/http-json-body-parser");
const apiResponse = require("../../utils/apiResponse");
const { updateNote } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");

const flow = async (event) => {
  const body = event.body;
  const result = await updateNote(event.pathParameters.noteId, body);
  return apiResponse(200, { data: result });
};

const handler = middy(flow).use(jsonBodyParser()).use(errorHandler());

module.exports = {
  handler,
};
