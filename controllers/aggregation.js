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
          $gt :20
        },
      },
    },
  ]);
  console.log(user)
};
