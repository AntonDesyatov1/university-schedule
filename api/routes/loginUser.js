var express = require("express");
var router = express.Router();
const database = require("../config/my-sql-connection");

const getUser = (password) =>
  new Promise((resolve, reject) =>
    database.query(
      `SELECT name,img,course,groupNumber FROM LETI_USERS where password ="${password}"`,
      (err, result, fields) => resolve(result),
    ),
  );

router.post("/", async function (req, res) {
  const { password } = req.body;
  const encodedPassword = new Buffer.from(password).toString("base64");
  const userData = await getUser(encodedPassword).then((user) => user);
  console.log(userData);
  return res.status(200).send(userData);
});

module.exports = router;
