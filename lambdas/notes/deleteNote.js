const middy = require("@middy/core");
const apiResponse = require("../../utils/apiResponse");
const { deleteNote } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");


/**
 * @desc Delete note
 * @route DELETE /notes{noteId}
 * @access Public
 */
const flow = async (event) => {
  log.info("Handler triggered");
  log.debug(event, "Full event");

  const result = deleteNote(event.pathParameters.noteId);
  log.info("Note deleted");
  
  log.info("Handler completed");
  return apiResponse(200, { data: result });
};

const handler = middy(flow).use(errorHandler());

module.exports = {
  handler,
};
