require("dotenv").config();
const { product } = require("./product_seeder");

async function dbseed() {
  await product();
  console.log("data generate successfull");
}

dbseed();
