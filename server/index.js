/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const con = require('../database');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const upload = multer();
const path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use('/shoes/:id', express.static(path.join(__dirname, '../public/dist')));

app.get('/shoes/:id/reviews', (req, res) => {
  const productid = req.params.id;
  con.getAllReviews(productid, (err, result) => {
    if (err) {
      console.log('ERROR HERE', err);
    } else {
      res.status(200).json(result);
    }
  });
});

// SUBMIT REVIEW
app.post('/shoes/:id/reviews', upload.none(), (req, res) => {
  const formbody = req.body;
  const productid = req.params.id;
  con.postReview(productid, formbody, (err, formbody) => {
    if (err) {
      console.log('DATA ADD ERROR', err);
    } else {
      console.log('RETURN FROM DATABASE', formbody);
      res.status(200).json(formbody);
    }
  });
});

const port = process.env.PORT || 7000;
app.listen(port, (err, result) => {
  if (err) {
    console.log('SERVER.JS LINE 10 ERROR');
  } else {
    console.log(`SERVER.JS LINE 13 LISTENING ON ${port}`);
  }
});
