const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/repository')
database.connect()


app.use(cors());
app.use(express.json());


const index = require('./routes/index');
const criancas = require('./routes/criancas');


app.use('/', index);
app.use('/criancas', criancas);


module.exports = app;