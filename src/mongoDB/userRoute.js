const express = require("express");
const router = express.Router();

const User = require("./userModel");

router.route("/adoptionform").post((req, res) => {
  const firstName = req.body.firstName;
  const surname = req.body.surname;
  const email = req.body.email;
  const address1 = req.body.address1;
  const city = req.body.city;
  const country = req.body.country;
  const code = req.body.code;
  const status = req.body.status;
  const routine = req.body.routine;
  console.log("req.body.firstName");
  console.log(req.body.firstName);
  const newUser = new User({
    firstName,
    surname,
    email,
    address1,
    city,
    country,
    code,
    status,
    routine,
  });
  newUser.save();
});
module.exports = router;
