const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Schema = mongoose.Schema

const criancasSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        required: true,
        auto: true
    },

    responsavel: {
        type: String,
        required: true
    },
    
    nome: {
        type: String,
        required: true,
        
    },
    
    idade: {
        type: String,
        required: true
    },

    telefone: {
        type: String,
        required: true,
    },
    

    presente: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true
    },

    cidade: {
        type: String,
        required: true
    },

    apadrinhada: {
        
        type: Boolean,
        default: false,
        required: true
    },

    padrinho: {
        type: String,
        required:false
        
    },

    madrinha: {
        type: String,
        required:false
    }


},

{
    collection: "criancas",
    versionKey: false
})

const criancasCollection = mongoose.model('criancas', criancasSchema)

module.exports = criancasCollection
