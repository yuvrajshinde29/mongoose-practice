require("dotenv").config();
const connectDB = require("./config/dbConfig");
const { matchEx1, projectEx1, addFieldsEx, groupExample } = require("./controllers/aggregation");
const {
  create,
  createUsingNew,
  insertManyDocuments,
  readModel,
  readOneModel,
  findUserById,
  findOneAndUpdateDocument,
  findOneAndDeleteDoc,
  query1,
  query2,
  query3,
  query4,
  query5,
  query6,
  query7,
  query8,
} = require("./controllers/crudMethods");
const {
  textOperator,
  regexOperator,
} = require("./controllers/evaluationOperators");
const {
  andOperator,
  orOperator,
  norOperator,
  notOperator,
} = require("./controllers/logicalOperators");

//mongoDB connection
connectDB().then(() => {
  groupExample();
});
