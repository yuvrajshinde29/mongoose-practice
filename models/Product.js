const { default: mongoose } = require("mongoose");

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    minlength: 2,
    maxlength: 50,
    trim:true,
  },
  price: {
    type: Number,
    default: 100,
    min: 1,
    max: 1000,
    validate: {
      validator: (val) => {
        if (val > 1 && val <= 1000) {
          return true;
        }
        return false;
      },
      message: "Invalid prince",
    },
  },
  category: {
    type: String,
    enum: ["electronics", "food", "clothing"],
  },
});

module.exports = mongoose.model("Product", productSchema);
