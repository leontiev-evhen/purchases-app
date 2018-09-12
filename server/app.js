var express = require('express');
var app = express();
var cors = require('cors')
var db = require('./db');

app.use(cors({
    origin: 'http://localhost:8080',
    credentials : true
}));

var PurchaseController = require('./purchase/PurchaseController');
app.use('/purchases', PurchaseController);

module.exports = app;