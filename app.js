'use strict';

const express = require('express');
const app = express();

const DEFAULT_JS_LINTER_HATES_NUMBERS_PORT = 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('Docs'));
const PORT = process.env.PORT || DEFAULT_JS_LINTER_HATES_NUMBERS_PORT;
app.listen(PORT);