const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");

//uri from mongoDB connection
const uri =
  "mongodb+srv://shelter:shelter@shelter.b0ped9k.mongodb.net/shelter2";
mongoose.connect(uri);

app.use("/", require("./userRoute"));

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
