const middy = require("@middy/core");
const apiResponse = require("../../utils/apiResponse");
const { getNote } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");

const flow = async (event) => {
  const item = await getNote(event.pathParameters.noteId);
  return apiResponse(200, { data: item });
};

const handler = middy(flow).use(errorHandler());

module.exports = {
  handler,
};
