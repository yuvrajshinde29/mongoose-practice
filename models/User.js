const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: {
    type: String,
    get: function (val) {
      return val.toUpperCase();
    },
    set: (val) => val.toUpperCase(),
  },
});

// userSchema.set("toJSON", { getters: true });
// userSchema.set("toObject", { getters: true });

userSchema.index({ name: "text", email: "text" });

module.exports = mongoose.model("User", userSchema);
