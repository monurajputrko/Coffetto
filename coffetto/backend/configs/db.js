const mongoose = require("mongoose");

require("dotenv").config();

const connect = mongoose.connect(process.env.CONNECTING_URL);

module.exports = { connect };
