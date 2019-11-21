var express = require("express");
var router = express.Router();
var fs = require("fs");

var db = JSON.parse(fs.readFileSync("./database.json"));

router.post("/", function(req, res, next) {
  const { login } = req.body;
  const user = db.users.find(user => user.login === login);
  return res.status(200).send(user);
});

module.exports = router;
