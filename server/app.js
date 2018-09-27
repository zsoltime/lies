'use strict';

const express = require('express');
const path = require('path');

const { port } = require('./config');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', port);

app.use(routes);

module.exports = app;
