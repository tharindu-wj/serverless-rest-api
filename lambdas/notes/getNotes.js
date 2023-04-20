const middy = require("@middy/core");
const apiResponse = require("../../utils/apiResponse");
const { getNotes } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");

const flow = async (event) => {
  const items = await getNotes();
  return apiResponse(200, { data: items });
};

const handler = middy(flow).use(errorHandler());

module.exports = {
  handler,
};
