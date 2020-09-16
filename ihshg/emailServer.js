require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express();

const apiKey = process.env.REACT_APP_SENDGRID_API_KEY;

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api', (req, res, next) => {
  res.send('API Status: Running...')
});

app.post('/api/email', (req, res, next) => {

  console.log(req.body);

  sendGrid.setApiKey(apiKey);

  const msg = {
    to: 'jonathanpalma89@gmail.com',
    from: 'jonathanpalma89@gmail.com',
    subject: 'REPORT ALERT! Heritage in Danger.',
    text: `Summary Report: \n${JSON.stringify(req.body.report)}`
  };

  sendGrid.send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(401).json({
        success: false
      });
    });
});

app.listen(8080, '0.0.0.0');
