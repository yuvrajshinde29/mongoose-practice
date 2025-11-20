const Product = require("../models/Product");
const User = require("../models/User");

exports.matchEx1 = async () => {
  let user = await User.aggregate([
    {
      $match: {
        name: {
          $in: ["Yuvraj"],
        },
        age: {
          $lt: 30,
          $gt: 20,
        },
      },
    },
  ]);
  console.log(user);
};

exports.projectEx1 = async () => {
  let user = await User.aggregate([
    {
      $project: {
        username: "$name", // rename field user to username
        email: 1,
        _id: 0,
        ageInMonths: { $multiply: ["$age", 12] }, //create computed fields
        isAdult: {
          $cond: [
            {
              $gt: ["$age", 18],
            },
            true,
            false,
          ],
        }, //conditional fields
      },
    },
  ]);
  console.log(user);
};

exports.addFieldsEx = async () => {
  let user = await User.aggregate([
    {
      $addFields: {
        nameWithEmail: { $concat: ["$name", " ", "$email"] }, // add new field

        age: {
          $add: ["$age", 1], //update existing field
        },
      },
    },
  ]);
  console.log(user);
};

exports.groupExample = async () => {
  let product = await Product.aggregate([
    {
      $group: {
        _id: "$category",
        totalPrice: { $sum: "$price" },
        arrayOfProducts: { $push: "$name" },
      },
    },
  ]);
  console.log(product);
};
