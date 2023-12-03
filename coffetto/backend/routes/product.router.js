const { Router } = require("express");
const { ProductModel } = require("../models/product.model");
const { UserModel } = require("../models/user.model");
const product_router = Router();
const { authetication } = require("../middlewares/middleware");
const { authorised } = require("../middlewares/adminmiddleware");
// get product .....

product_router.get("/", async (req, res) => {
  const result = await ProductModel.find();
  res.status(201).json(result);
});

//create product ...
console.log("Hello");
product_router.post("/create", authetication, authorised, async (req, res) => {
  const { title, price, category, image1, image2, image3, image4, details } =
    req.body;
  console.log(title);
  const creator_id = req.user_id;

  const user = await UserModel.findOne({ _id: creator_id });
  const new_product = new ProductModel({
    title,
    category,
    image1,
    image2,
    image3,
    image4,
    price,
    details,
    author: user.name,
  });
  await new_product.save();
  res.send("product created successfully.......");
});

// update product...
product_router.put("/edit/:productID", async (req, res) => {
  const product_id = req.params.productId;
  const payload = req.body;
  console.log(payload);
  const user_id = req.user_id;
  const isuser = await UserModel.findOne({ _id: user_id });
  const email = isuser.email;
  const product = await ProductModel.findOne({ _id: product_id });

  const product_creator = isuser.email;
  if (product_creator !== email) {
    res.send("you are not authorsised to update this product");
  } else {
    await ProductModel.findOneAndUpdate({ _id: product_id }, payload);
    res.send("product updated sucsessfully........");
  }
});

product_router.delete("/delete/:productId", async (req, res) => {
  const product_id = req.params.productId;

  const user_id = req.user_id;
  const isuser = await UserModel.findOne({ _id: user_id });
  const email = isuser.email;
  const product = await ProductModel.findOne({ _id: product_id });

  const product_creator = isuser.email;
  if (product_creator !== email) {
    res.send("you are not authorsised to delete this product");
  } else {
    await ProductModel.findOneAndDelete(product_id);
    res.send("Product deleted sucsessfully........");
  }
});

module.exports = { product_router };
