const { v4: uuidv4 } = require("uuid");
const {
  GetItemCommand,
  PutItemCommand,
  DeleteItemCommand,
  ScanCommand,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
const db = require("../utils/db");

/**
 * @desc Create Note in DynamoDB table
 */
const createNote = async (item) => {
  const itemToBeCreated = {
    noteId: uuidv4(),
    title: item.title,
    content: item.content,
  };

  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Item: marshall(itemToBeCreated),
  };

  return await db.send(new PutItemCommand(params));
};

/**
 * @desc Get all Notes in DynamoDB table by scanning
 */
const getNotes = async () => {
  const { Items } = await db.send(
    new ScanCommand({ TableName: process.env.DYNAMODB_TABLE_NAME })
  );

  return Items.map((item) => unmarshall(item));
};

/**
 * @desc Get single Note in DynamoDB table by noteId
 */
const getNote = async (noteId) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Key: marshall({ noteId }),
  };

  const { Item } = await db.send(new GetItemCommand(params));
  return Item ? unmarshall(Item) : {};
};

/**
 * @desc Update single Note in DynamoDB table
 */
const updateNote = async (noteId, item) => {
  const objKeys = Object.keys(item);
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Key: marshall({ noteId }),
    UpdateExpression: `SET ${objKeys
      .map((_, index) => `#key${index} = :value${index}`)
      .join(", ")}`,
    ExpressionAttributeNames: objKeys.reduce(
      (acc, key, index) => ({
        ...acc,
        [`#key${index}`]: key,
      }),
      {}
    ),
    ExpressionAttributeValues: marshall(
      objKeys.reduce(
        (acc, key, index) => ({
          ...acc,
          [`:value${index}`]: item[key],
        }),
        {}
      )
    ),
  };

  return await db.send(new UpdateItemCommand(params));
};

/**
 * @desc Delete single Note in DynamoDB table
 */
const deleteNote = async (noteId) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Key: marshall({ noteId }),
  };
  
  return await db.send(new DeleteItemCommand(params));
};

module.exports = {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
};
