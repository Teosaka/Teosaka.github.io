'use strict';

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const multer = require("multer");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());

app.get('/test', async(req, res) => {
  console.log('hi');
});

app.use(express.static('public'));
const PORT = process.env.PORT || DEFAULT_JS_LINTER_HATES_NUMBERS_PORT;
app.listen(PORT);