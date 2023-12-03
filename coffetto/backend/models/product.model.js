const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String },
  image4: { type: String },
  author: { type: String },
  details: { type: String, required: true },
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = { ProductModel };
