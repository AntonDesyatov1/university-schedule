var express = require("express");
var router = express.Router();
var fs = require("fs");

var db = JSON.parse(fs.readFileSync("./database.json"));

// use child.stdout.setEncoding('utf8'); if you want text chunks

router.post("/", function(req, res, next) {
  const { login, password } = req.body;
  const newUser = createUser(login, password);
  db.users.push(newUser);
  fs.writeFileSync("./database.json", JSON.stringify(db));
  res.json(newUser);
});

const createUser = (login, password) => ({
  login,
  password,
  balance: 10000,
  images: [],
  name: ""
});

module.exports = router;
