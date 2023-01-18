const express = require("express");

const router = express.Router();
const User = require("../models/User");
router.get("/allUsers", (req, res) => {
  User.find();
  (err, data) => {
    if (err) throw err;
    else res.json(data);
  };
});
router.post("/addUser", (req, res) => {
  const newUser = new User(req.body);
  newUser.save();
  (err, data) => {
    if (err) throw err;
    else res.json(data);
  };
});
router.put("/user/update/:userId", (req, res) => {
  User.findByIdAndUpdate(req.params.userId, req.body);
  (err, data) => {
    if (err) throw err;
    else res.json(data);
  };
});
router.delete("/user/delete/:userId", (req, res) => {
  User.findByIdAndRemove(req.params.userId);
  (err, data) => {
    if (err) throw err;
    else res.json(data);
  };
});
module.exports = router;
