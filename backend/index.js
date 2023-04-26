const { loadSampleData, connectToMongo } = require("./db");
const Sample = require("./models/Users");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const db = connectToMongo();

app.use(cors());
app.use(express.json());


//available routes 
app.use('/api/data', require('./routes/users'));


app.listen(port, () => {
    // loadSampleData();
  console.log(`Server running on http://localhost:${port}`);
});

