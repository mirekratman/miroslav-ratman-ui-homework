require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

//INFO - Only for testing purposes - disable cache
const nocache = require("nocache");

const app = express();
const port = process.env.API_PORT;
let cors = require("cors");
const responseTimeout = 0.3; //in seconds
const packageJSON = require("../package.json");
const dataDir = path.join(__dirname, "./data");
const rootDirname = path.resolve();
const imageDir = path.join(rootDirname, process.env.DATA_DIR);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//INFO - Only for testing purposes - disable cache
app.use(nocache());

/************** Endpoints **************/
// Main endpoint
app.get("/", (req, res) => {
  res.send(packageJSON.name + " " + packageJSON.version);
});

app.get("/health", (req, res) => {
  res.send("ok");
});

/**
 * Apps mocked endpoint
 */
app.get("/apps*", (req, res) => {
  const articleJson = fs.readFileSync(`${dataDir}/apps.json`, {
    encoding: "utf8",
    flag: "r",
  });
  res.setHeader("Content-Type", "application/json");

  const apiDelay = setTimeout(() => {
    res.send(articleJson);
  }, responseTimeout * 1000);
});

/******* Start server *******/
app.listen(port, () => {
  console.log(`Mocked API listening on port ${port}`);
});

module.exports = app;
