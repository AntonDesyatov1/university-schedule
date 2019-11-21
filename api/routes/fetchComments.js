var express = require("express");
var router = express.Router();
var fs = require("fs");

var db = JSON.parse(fs.readFileSync("./database.json"))

// use child.stdout.setEncoding('utf8'); if you want text chunks
router.get("/", function(req, res, next) {
  console.log(db)
   res.json(db.comments);
});

router.post("/", function(req, res, next) {
  console.log("Caught post request");
  console.log(req.body);
  db.images.find(image => image.title == req.body.name).comments.push({ author: "anon", comment: req.body.comment });
  fs.writeFileSync("./database.json", JSON.stringify(db));
  // res.end("done");
  res.json(db.images);
});

const getImagesForUser = user => db.images.filter(curr => user === curr.owner);
module.exports = router;
