import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : "root",
  password : "password",
  multipleStatements: true
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conexão ok.");
  connection.query(`
  CREATE DATABASE IF NOT EXISTS teste-tecnico-watson;
  USE teste-tecnico-watson;
  CREATE TABLE IF NOT EXISTS comments (id INT AUTO_INCREMENT PRIMARY KEY, sentence VARCHAR(255));
  `, (err, result) => {
    if (err) throw err;
    console.log("Database ok.");

    app.get("/", (req, res) => {
      let query = "SELECT * FROM  sentence";
      connection.query(query, function (err, result) {
          if (err) throw err;
          console.log(result);
          res.json({ result });
      });
    });
    
    app.post("/create", (req, res) => {
      let query = `INSERT INTO comments (sentence) VALUES ('${req.query.frase}')`;
      connection.query(query, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
          res.json({ status: "Texto adicionado com sucesso" });
      });
    });
    
    app.listen(8080, () => {
      console.log(`Example app listening at http://localhost:8080`);
    });
  });
}); 

