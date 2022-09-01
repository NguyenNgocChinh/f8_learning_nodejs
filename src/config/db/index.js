const mongoose = require("mongoose");

async function connect() {
  try {
    console.log("Connecting to database...");
    console.log(process.env.DB_CONNECT_STRING);
    await mongoose.connect(process.env.DB_CONNECT_STRING);
    console.log("Connected to database!!!");
  } catch (error) {
    console.error("Fail to connect database...");
    console.error(error);
  }
}

module.exports = { connect };
