'use strict';

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const multer = require("multer");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());

app.use(express.static('public'));
const PORT = 8000;
app.listen(PORT, function() {
  console.log('Express server listening on 8000')
});