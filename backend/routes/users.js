const express = require("express");
const router = express.Router();
const { loadSampleData, connectToMongo } = require("../db");
const Sample = require("../models/Users");

//Fetch all data
router.get("/fetchAll", async (req, res) => {
  const data = await Sample.find();
  res.send(data);
});

//fetch first query:1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

router.get("/fetchOne", async (req, res) => {
  try {
    const data = await Sample.find({
      income: { $lt: "5" },
      car: { $in: ["Mercedes-Benz", "BMW"] },
    });
    res.send(data);
    
  } catch (error) {
    res.send(error);
  }
});

// fetch 2nd : 2. Male Users which have phone price greater than 10,000.
router.get("/fetchTwo", async (req, res) => {
  try {
    const data = await Sample.find({
      gender: "Male",
      $expr: { $gt: [{ $toInt: "$phone_price" }, 10000] },
    });
    res.send(data);
    
  } catch (error) {
    res.send(error);
  }
});

// fetch 3rd: Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name

router.get("/fetchThree", async (req, res) => {
  try {
    const data = await Sample.find({
      last_name: { $regex: /^M/i },
      quote: { $regex: /.{15}/ },
      email: { $regex: /M$/i },
    });
    res.send(data);
  } catch (error) {
    res.json(error);
  }
});

// fetch 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get("/fetchFour", async (req, res) => {
  try {
    const data = await Sample.find({
      car: { $in: ["BMW", "Mercedes", "Audi"] },
      email: { $not: /\d/ },
    });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

// fetch 5. Show the data of top 10 cities which have the highest number of users and their average income.
router.get("/fetchFive", async (req, res) => {
  try {
    //fetchdata according to query
    const cities = await Sample.aggregate([
      {
        $group: {
          _id: '$city',
          count: { $sum: 1 },
          avg_income: { $avg: { $toDouble: "$income" } },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);
    res.send(cities);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
