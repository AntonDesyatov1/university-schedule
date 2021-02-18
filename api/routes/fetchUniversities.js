var express = require("express");
var router = express.Router();
const connect = require("../config/my-sql-connection");
const database = connect();

const GET_UNIVERSITIES_QUERY = "SELECT * FROM universities";
const getUniversityTable = new Promise((resolve, reject) =>
  database.connect((err) => {
    err
      ? console.log(err)
      : database.query(GET_UNIVERSITIES_QUERY, (err, result, fields) =>
          resolve(result),
        );
  }),
);

router.get("/", (req, res, next) =>
  getUniversityTable.then((universities) => res.status(200).send(universities)),
);

module.exports = router;
