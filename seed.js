const mongoose = require("mongoose");
const initData = require(".//init/data.js");
const Listing = require("./models/listing.js");
require("dotenv").config();

mongoose.set("strictQuery", false);

async function main() {
  await mongoose.connect(process.env.ATLAS_DB_URL);
  console.log("Connected to Atlas");
}

main().then(initDB).catch(err => console.log(err));

async function initDB() {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data inserted into Atlas");
  process.exit();
}