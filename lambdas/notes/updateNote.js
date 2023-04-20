const middy = require("@middy/core");
const jsonBodyParser = require("@middy/http-json-body-parser");
const apiResponse = require("../../utils/apiResponse");
const { updateNote } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");
const log = require("../../utils/logger");

/**
 * @desc Update note
 * @route PUT /notes/{noteId}
 * @access Public
 */
const flow = async (event) => {
  log.info("Handler triggered");
  log.debug(event, "Full event");

  const body = event.body;
  const result = await updateNote(event.pathParameters.noteId, body);
  log.info("Note updated");

  log.info("Handler completed");
  return apiResponse(200, { data: result });
};

const handler = middy(flow).use(jsonBodyParser()).use(errorHandler());

module.exports = {
  handler,
};
