const { UserModel } = require("../models/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const authetication = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.send("please login first");
  } else {
    jwt.verify(token, process.env.SECRET_KEY, async function (err, decoded) {
      if (err) {
        res.send("please login first");
      } else {
        const user_id = decoded.user_id;
        req.user_id = user_id;
        next();
      }
    });
  }
};
module.exports = { authetication };
