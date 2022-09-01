const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  title: { type: String },
  description: { type: String },
  category: { type: String },
  image: { type: String },
  price: { type: Number },
  price_discount: { type: Number },
  is_new: { type: Boolean },
  rating: { type: Object },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", Product);
