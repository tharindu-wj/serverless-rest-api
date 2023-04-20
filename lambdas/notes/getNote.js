const middy = require("@middy/core");
const apiResponse = require("../../utils/apiResponse");
const { getNote } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");

/**
 * @desc Get note
 * @route GET /notes/{noteId}
 * @access Public
 */
const flow = async (event) => {
  log.info("Handler triggered");
  log.debug(event, "Full event");

  const item = await getNote(event.pathParameters.noteId);
  
  log.info("Handler completed");
  return apiResponse(200, { data: item });
};

const handler = middy(flow).use(errorHandler());

module.exports = {
  handler,
};
