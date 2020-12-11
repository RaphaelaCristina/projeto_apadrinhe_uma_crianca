const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/projeto"

const PORT = process.env.PORT || 800;

const index = require('./src/routes/index');
const criancas = require('./src/routes/criancas');


dotenv.config();


    mongoose.connect(MONGO_URI, 
    {useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true

    })
    const connection = mongoose.connection
    connection.on("error",()=> console.error("Erro ao conectar com o MongoDB"))
    connection.once("open",()=> console.log("API contectada com o MongoDB!"))


    app.use(express.json());

    app.use('/', index);
    app.use('/criancas', criancas);

    app.use((error, request, response, next)=> {
        console.error(error)
        response.status(500).send("Server Error")
    })

    app.listen(PORT, () => {
        console.log(`Está rodando`)
    });


module.exports = app