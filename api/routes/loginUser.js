var express = require("express");
const { addListener } = require("../config/my-sql-connection");
var router = express.Router();
const database = require("../config/my-sql-connection");

const ERROR_MESSAGE = "ID or password is incorrect!";
const getUser = (login, password, university) =>
  new Promise((resolve, reject) =>
    database.query(
      `SELECT name,img,course,groupNumber FROM ${university}_USERS where password ="${password}" AND name="${login}"`,
      (err, result, fields) => {
        if (!result.length) {
          reject(ERROR_MESSAGE);
        }
        resolve(result);
      },
    ),
  );

router.get("/", async function (req, res, next) {
  const { login, password, university } = req.headers;
  const encodedPassword = new Buffer.from(password).toString("base64");
  try {
    const userData = await getUser(login, encodedPassword, university).then(
      (user) => {
        res.status(200);
        return user[0];
      },
      (error) => {
        throw { message: error };
      },
    );
    res.send(userData);
  } catch (error) {
    res.status(400);
    res.send(error);
  }
});

module.exports = router;
