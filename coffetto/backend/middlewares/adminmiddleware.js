const { UserModel } = require("../models/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const authorised = async (req, res, next) => {

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
            }
        });

        const ID = req.user_id;
        const user = await UserModel.findOne({ _id: ID });
        
        if (user.role == "admin") {
            next();
        } else {
            res.send("Only admin Allowed Chutiye");
        }
    };
}
module.exports = { authorised };


