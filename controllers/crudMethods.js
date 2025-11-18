//------------------CREATE----------------------------
const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const Product = require("../models/Product");
//create dcument
exports.create = async () => {
  let user = await User.create({
    name: "user one",
    email: "userone@gmail.com",
    password: "pass@123",
  });

  console.log(user);
};

// cretate document using: new + save()
exports.createUsingNew = async () => {
  let user = new User({
    name: "user one",
    email: "userone@gmail.com",
    password: "121212",
  });
  console.log(user);
};

// create many documents
exports.insertManyDocuments = async () => {
  let user = await User.insertMany([
    {
      name: "user one",
      email: "userone@gmail.com",
      password: "121212",
    },
    {
      name: "user one",
      email: "userone@gmail.com",
      password: "121212",
    },
  ]);
  console.log(user);
};

//------------------READ----------------------------
//find()
//findOne()
//findById()
//findOneAndUpdate
//findOneAndDelete

exports.readModel = async () => {
  let user = await User.find();
  console.log(user);
//   return user;
};

exports.readOneModel = async () => {
  let user = await User.findOne({ email: "userone@gmail.com" });
  console.log(user);
};

exports.findUserById = async () => {
  let user = await User.findById("691c0880814547675fdba506");
  console.log(user);
};

exports.findOneAndUpdateDocument = async () => {
  let user = await User.findOneAndUpdate(
    { email: "userone@gmail.com" },
    {
      $set: {
        name: "user updated second",
      },
    },
    { returnDocument: "after" }
  );
  console.log(user);
};

exports.findOneAndDeleteDoc = async () => {
  let user = await User.findOneAndDelete(
    { email: "userone@gmail.com" },
    { projection: { name: 1, email: 1 }, returnDocument: "after" }
  );
  console.log(user);
};

//updateOne
//updateMany
//findOneAndUpdate
//findByIdAndUpdate

//updateOne
exports.query1 = async () => {
  let user = await User.updateOne(
    { email: "userone@gmail.com" },
    {
      $set: {
        password: "new password",
      },
    }
  );
  console.log(user);
};

//update many
exports.query2 = async () => {
  let result = await User.updateMany(
    { _id: "691c05423a48237e9e610231" },
    {
      $set: {
        name: "abc",
        eamil: "email@gmail.com",
        password: "passs",
      },
    }
  );
  console.log(result);
};

//find one and update
exports.query3 = async () => {
  let user = await User.findOneAndUpdate(
    { name: "user one" },
    {
      $set: {
        name: "user two",
        email: "usertwo@gmail.com",
      },
    },
    {
      returnDocument: "after",
    }
  );
  console.log(user);
};

//findbyIdAndUpdate
exports.query4 = async () => {
  let user = await User.findByIdAndUpdate(
    "691c0880814547675fdba506",
    {
      $set: {
        name: "user ten",
      },
    },
    {
      returnDocument: "before",
    }
  );
  console.log(user);
};

//deleteOne
//deleteMany
//findOneAndDelete
//findByIdAndDelete

//delete one
exports.query5 = async () => {
  let result = await User.deleteOne({ name: "user two" });
  console.log(result);
};

// findAndDeleteOne
exports.query6 = async () => {
  let user = await User.findOneAndDelete({
    _id: '691c0880814547675fdba505',
  });
  console.log(user);
};

// validation check--------------------------------------------------
exports.query7 = async () => {
    try {
        let product = await Product.insertOne({
            name:'aa',
            price:'2000',
            category:"aaaaaa"
        })
        console.log(product)
    } catch (error) {
        console.log(error)
    }
};

//comparision operators
exports.query8 = async () => {
    let user = await User.find({
        email: {
            // $ne : "userone@gmail.com"
            $in : ["userone@gmail.com","usertwo@gmail.com"]
        }
    })
    console.log(user)
};

exports.query9 = async () => {};

exports.query10 = async () => {};

exports.query11 = async () => {};

exports.query12 = async () => {};

exports.query13 = async () => {};

exports.query14 = async () => {};
