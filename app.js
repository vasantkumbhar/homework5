let express = require("express");
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
let db = require("./json-server");

const app = express();
app.use(bodyParser.json())

exports.appConst = {
  app,
  db,
  jwt
};
