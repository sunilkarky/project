const mongoose = require("mongoose");

//connecting database
exports.connectDatabase = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Database connection success");
};
