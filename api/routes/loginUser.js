var express = require("express");
var router = express.Router();
var fs = require("fs");

var db = JSON.parse(fs.readFileSync("./database.json"));

router.post("/", function(req, res, next) {
  const { login, password } = req.body;
  const user = db.users.find(user => user.login === login);
  if (!user) {
    return res.status(401).json(generateErrorLogin(login));
  }
  if (user.password !== password) {
    return res.status(402).json(generateErrorPassword(login));
  }
  return res.status(200).send(user);
});

const generateErrorLogin = login => {
  return { error: `There is no user with login '${login}'!` };
};

const generateErrorPassword = login => {
  return { error: `Password for user '${login} did not match!` };
};
module.exports = router;
