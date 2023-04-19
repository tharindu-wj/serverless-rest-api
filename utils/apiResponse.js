module.exports = (
  statusCode,
  body = {},
  headers = { "Content-Type": "application/json" }
) => ({
  headers,
  body: JSON.stringify(body),
  statusCode,
});
