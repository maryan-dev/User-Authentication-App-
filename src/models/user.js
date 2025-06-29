const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Image: { 
    type: String, 
    default: "https://crxsuper.com/wp-content/uploads/2021/03/placeholder.jpg" 
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
