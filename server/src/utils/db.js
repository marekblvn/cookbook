const mongoose = require("mongoose");

module.exports = () => {
  const db_uri = process.env.DB_URI;

  mongoose.connect(db_uri).then(() => console.log(`Connected to database`));
};
