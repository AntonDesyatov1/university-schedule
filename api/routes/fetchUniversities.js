var express = require("express");
var router = express.Router();
const database = require("../config/my-sql-connection");

const GET_UNIVERSITIES_QUERY = "SELECT * FROM universities";
const getUniversityTable = new Promise((resolve, reject) =>
  database.query(GET_UNIVERSITIES_QUERY, (err, result, fields) =>
    resolve(result),
  ),
);

router.get("/", (req, res, next) =>
  getUniversityTable.then((universities) => res.status(200).send(universities)),
);

module.exports = router;
