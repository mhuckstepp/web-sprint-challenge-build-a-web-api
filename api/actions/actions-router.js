// Write your "actions" router here!
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json("Hello from Actions Router");
});

module.exports = router;
