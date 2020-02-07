var express = require("express");
var router = express.Router();
var fs = require("fs");

var db = JSON.parse(fs.readFileSync("./databases/universitiesDB.json"));

router.get("/", function(req, res, next) {
  console.log("Got request");
  return res.status(200).send(db.universities);
});

module.exports = router;
