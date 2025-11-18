const connectDB = require("./config/dbConfig");
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

//mongoDB connection
connectDB().then(() => {
    query8();
});
