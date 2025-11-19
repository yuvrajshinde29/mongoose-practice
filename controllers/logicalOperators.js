const User = require("../models/User");

//$and
exports.andOperator = async () => {
  /*   let user = await User.find({
    $and: [
      {
        name: "user ten",
      },
      {
        email: "userone@gmail.com",
      },
    ],
  }); */
  //   -----or-----
  let user = await User.find({
    name: "user ten",
    email: "userone@gmail.com",
  });
  console.log(user);
};

//$or
exports.orOperator = async () => {
  let user = await User.find({
    $or: [{ name: "user ten", email: "userone@gmail.com" }, { name: "abc" }],
  });
  console.log(user);
};

//$nor
exports.norOperator = async () => {
  let user = await User.find({
    $nor: [
      {
        name: {
          $in: ["abc", "user one"],
        },
      },
    ],
  });
  console.log(user);
};

//$not
exports.notOperator = async () => {
  let user = await User.find({
    name: {
      $not: {
        $in: ["user one"],
      },
    },
  });
  console.log(user);
};
