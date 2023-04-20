const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient({});

/**
 * @desc Build DynamoDB client
 */
module.exports = client;
