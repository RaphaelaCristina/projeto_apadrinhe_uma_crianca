const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017/projeto"
const dotenv = require('dotenv');

const PORT = process.env.PORT || 200;

dotenv.config();


    mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true

    })
    const connection = mongoose.connection
    connection.on("error",()=> console.error("Erro ao conectar com o MongoDB"))
    connection.once("open",()=> console.log("API contectada com o MongoDB!"))



app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta http://localhost:${PORT}`)
});

