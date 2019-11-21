var express = require("express");
var router = express.Router();
var db = require("../database.json");
// use child.stdout.setEncoding('utf8'); if you want text chunks
router.get("/", function(req, res, next) {
  res.json(db.images);
});

router.post("/", (req, res, next) => {
  console.log("Fetching images for user");

  res.json(getImagesForUser(JSON.parse(req.body).user));
});

const getImagesForUser = user =>
  db.images.filter(curr => user === curr.owner);
module.exports = router;
