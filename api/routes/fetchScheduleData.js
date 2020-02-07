var express = require("express");
var router = express.Router();
var fs = require("fs");

var db = JSON.parse(fs.readFileSync("./databases/database.json"));

router.post("/", function(req, res, next) {
  const { university } = req.body;
  return res.status(200).send(db.universities[university]);
});

module.exports = router;
