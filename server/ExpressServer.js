const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

console.log("ok");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

var connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "password",
  multipleStatements: true
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conexão ok.");
  connection.query(`
  CREATE DATABASE IF NOT EXISTS teste_tecnico_watson;
  USE teste_tecnico_watson;
  CREATE TABLE IF NOT EXISTS comments (id INT AUTO_INCREMENT PRIMARY KEY, sentence VARCHAR(255));
  `, (err, result) => {
    if (err) throw err;
    
    app.post("/insert", (request, response) => {
      let query = `INSERT INTO comments (sentence) VALUES ('${request.query.sentence}')`;
      connection.query(query, function (err, result) {
          if (err) {
            response.send({
              check: false,
              res: err
            });
          }
          response.send({
            check: true,
            res: result
          });
      });
    });

    app.get("/", (request, response) => {
      let query = "SELECT * FROM  comments";
      connection.query(query, function (err, result) {
        if (err) {
          response.send({
            check: false,
            res: err
          });
        }
        response.send({
          check: true,
          res: result
        });
      });
    });
    
    app.listen("8080", () => {
      console.log(`Foi`);
    });
  });
});