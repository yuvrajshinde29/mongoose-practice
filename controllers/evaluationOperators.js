const User = require("../models/User");

//search operation---------------------
exports.textOperator = async () => {
  // step 1 : define index

  let user = await User.find({
    $text: {
      $search: "one",
    },
  });
  console.log(user);
};

exports.regexOperator = async()=>{
    let user = await User.find({
        name : {
            $regex : /^Use..o..$/i  //i -> case insensitive
        }
    })
    console.log(user)
}