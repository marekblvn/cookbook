const mongoose = require("mongoose");
const { string } = require("zod");

module.exports = () => string().refine((id) => mongoose.isValidObjectId(id));
