const { response, request } = require('express')
const criancasCollection = require('../models/criancasSchema')

//GET CRIANCAS
const getAll = (request, response) => {
    console.log(request.url)

    criancasCollection.find((error, criancas) => {
        if(error){
          return  response.status(400).send(error)
        }else {
            return response.status(200).send({
                mensagem: "Lista de todas as crianças cadastradas no projeto",
                criancas
                
            })
        }
    })
}


//GET LISTA

const getNaoApadrinhadas = (request, response) => {
   
    criancasCollection.find({apadrinhada:"false"},(error,crianca)=>{
      if (error){
        return response.status(400).send(error)
      } else if (crianca == "") {
            return response.status(404).send("Não existem crianças para serem apadrinhadas")
           
        } else {
            return response.status(200).send({
                mensagem: "Crianças que ainda estão aguardando um padrinho/madrinha",
                crianca
            })
        }
     
    })
  
}


//GET POR ESTADO

const getPorEstado = (request, response) => {
    const estadoParams = request.query.estado
    
    criancasCollection.find({estado:{$eq:estadoParams}, apadrinhada: {$eq:false}},(error, crianca)=>{
        if (error){
            return response.status(400)
            if (crianca == ""){
                response.status(404).send({
                    mensagem: "Não existem crianças para ser apadrinhadas no estado escolhido."
                })
            } else {
                response.status(200).send({
                    mensagem: "Lista de crianças para serem apadrinhadas no estado escolhido: ",
                    crianca
                })
            }
        }

    })
    
}

//GET POR CIDADE
const getPorCidade = (request, response) => {
    const cidadeParams = request.query.cidade
    
    criancasCollection.find({cidade:{$eq:cidadeParams}, apadrinhada: {$eq: false}},(error, crianca)=>{
        if (error){
            return response.status(400).send(error)
        } else {
            if (crianca == ""){
                response.status(404).send({
                    mensagem: "Não existem crianças para ser apadrinhadas na cidade escolhida."
                })
            } else {
                response.status(200).send({
                    mensagem: "Lista de crianças para serem apadrinhadas na cidade escolhida: ",
                    crianca
                })
            }
        }

    })
    
}

//GET BYID
const getById = (request, response) => {
    idParams = request.query.id
   criancasCollection.findById(idParams,(error, crianca)=>{
        if(error){
            return response.status(400).send(error)
        }else {
            if(crianca == ""){
                return response.status(404).send({
                    mensagem: "Criança não encontrado!"
                })
            } else {
                return response.status(200).send({
                    mensagem: "GET realizado com sucesso",
                    crianca
                })
            }
        }
    })
}


//POST CRIANCA
const addCrianca = (request, response) => {
    const {nome, responsavel, idade, telefone, presente, estado, cidade, apadrinhada} = request.body
    const crianca = request.body
    const novaCrianca = new criancasCollection(crianca)
    
    novaCrianca.save((error)=> {
        if(error){
            return response.status(400).send(error)
        } else {
            return response.status(200).send({
                mensagem: "POST realizado com sucesso.",
                novaCrianca
            })
        }
    })
    
}


//DELETAR POR ID
const deleteID = (request, response) => {
    idParam = request.params.id
    criancasCollection.findByIdAndDelete(idParam, (error,crianca)=>{
        if(error){
            return response.status(400).send(error)
        } else {
            if(crianca){
                return response.status(200).send("Criança deletada com sucesso!")
            } else {
                return response.status(404).send("Criança não encontrada, verifique o ID e tente novamente.")
            }
        }
    })
}

//GET UPDATE - patch
//atualização parcial

const patchItem = (request, response) => { 
    const idParam = request.params.id
    const criancaDoBody = request.body
    const novo = {new: true}

    criancasCollection.findByIdAndUpdate(idParam, criancaDoBody, novo, (error, crianca)=>{
        if(error){
            response.status(400).send(error)
        }else {
            if (crianca == ""){
                response.status(404).send({
                    mensagem: "ID não encontrado!"
                })
            } else {
                return response.status(200).send({
                    mensagem: "Informação(ões) atualizada(s) com sucesso!",
                    crianca
                })
            }
        }   
    })

   
}
   




module.exports = {
    getAll,
    getNaoApadrinhadas,
    getPorEstado,
    getPorCidade,
    getById,
    addCrianca,
    patchItem,
    deleteID
}