const middy = require("@middy/core");
const apiResponse = require("../../utils/apiResponse");
const { getNotes } = require("../../services/notes");
const errorHandler = require("../../middlewares/errorHandler");

/**
 * @desc Get notes
 * @route GET /notes
 * @access Public
 */
const flow = async (event) => {
  log.info("Handler triggered");
  log.debug(event, "Full event");

  const items = await getNotes();
  
  log.info("Handler completed");
  return apiResponse(200, { data: items });
};

const handler = middy(flow).use(errorHandler());

module.exports = {
  handler,
};
