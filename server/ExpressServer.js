const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const credentials = require('./credentials.json');
const { response } = require("express");

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

var textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: credentials.apikey }),
  url: credentials.url
});

connection.connect((err) => {
  if (err) throw err;
  connection.query(`
  CREATE DATABASE IF NOT EXISTS teste_tecnico_watson;
  USE teste_tecnico_watson;
  CREATE TABLE IF NOT EXISTS comments (id INT AUTO_INCREMENT PRIMARY KEY, sentence VARCHAR(255), timestamp VARCHAR(255));
  `, (err, result) => {
    if (err) throw err;
    
    app.post("/insert", (request, response) => {
      var timestamp = new Date().getTime();
      var params = {
        text: request.query.sentence,
        voice: 'pt-BR_IsabelaV3Voice',
        accept: 'audio/mp3'
      };
      const synthesizeStream = textToSpeech.synthesizeUsingWebSocket(params);
      var writeStream = fs.createWriteStream(`./audios/audio-${timestamp}.mp3`);
      synthesizeStream.pipe(writeStream);
      writeStream.on('finish',()=>{
        //Arquivo gravado
      });
      let query = `INSERT INTO comments (sentence, timestamp) VALUES ('${request.query.sentence}', '${timestamp.toString()}')`;
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

    app.get("/audios", (request, response) => {
      response.sendFile(__dirname + `/audios/audio-${request.query.timestamp}.mp3`);
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
      //Servidor rodando na porta selecionada
    });
  });
});