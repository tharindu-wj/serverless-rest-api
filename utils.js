const apiResponse = (
  statusCode,
  body = {},
  headers = { "Content-Type": "application/json" }
) => ({
  headers,
  body: JSON.stringify(body),
  statusCode,
});

module.exports = {
  apiResponse,
};
