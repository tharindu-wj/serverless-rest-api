const middy = require("@middy/core");
const jsonBodyParser = require("@middy/http-json-body-parser");
const apiResponse = require("../../utils/apiResponse");
const { createNote } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");
const log = require("../../utils/logger");

/**
 * @desc Create note
 * @route POST /notes
 * @access Public
 */
const flow = async (event) => {
  log.info("Handler triggered");
  log.debug(event, "Full event");

  const body = event.body;
  const result = await createNote(body);
  log.info("Note created");

  log.info("Handler completed");
  return apiResponse(201, { data: result });
};

const handler = middy(flow).use(jsonBodyParser()).use(errorHandler());

module.exports = {
  handler,
};
