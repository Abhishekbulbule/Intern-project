const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoUri = process.env.MongoDb;
const data = require("./sample_data.json");
const Sample = require("./models/Users");

//To clear data and load data into the database
const loadSampleData = async () => {
  try {
    await Sample.deleteMany();
    await Sample.insertMany(data);

    //now removing $ character from income field
    const d = mongoose.connection.db.collection("samples");

    await d
      .aggregate([{ $project: { income: 1 } }])
      .forEach(function (doc, Index) {
        doc.income = doc.income.replace(/[$]/g, "");
        d.updateMany({ _id: doc._id }, { $set: { income: doc.income } });
      });
  } catch (error) {
    console.error("Currently unavailable");
  }
};

// db connection
console.log("run url is ", mongoUri)
const connectToMongo = async () => {
  try {
    const db = await mongoose.connect(`${mongoUri}`);
    //connection done\
    await loadSampleData();
  } catch (error) {
    console.error("Something went Wrong!!");
  }
};
module.exports = { loadSampleData, connectToMongo };
