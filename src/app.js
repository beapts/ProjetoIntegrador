const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


const mainRouter = require('./routes/main');  

app.use('/', mainRouter);

module.exports = app;
