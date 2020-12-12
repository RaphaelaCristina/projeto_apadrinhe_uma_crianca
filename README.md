 <img src = "img/logo.png" width="410"> 

 ## Descrição:
  
Segundo dados fornecidos pelo IBGE, cerca de 25,3% da população brasileira se enquadra na condição de pobreza, o que equivale a 52,5 milhões de pessoas. Outros 6,5%, o equivalente a 13,5 milhões estão na linha de extrema pobreza (aqueles que têm renda de aproximadamente R$ 7,70) por dia.
Tendo em vista o cenário apresentado e pensando nas crianças que também compartilham dessa realidade e que muitas vezes gostariam de receber um presente, um item específico, etc. e pessoas que tem intenção de ajudá-las, mas que não sabem por onde começar, foi desenvolvido o projeto APADRINHE UMA CRIANÇA.

## Objetivo:
Este projeto visa conectar padrinho/madrinha e criança/família através de um sistema onde o responsável pela criança realiza seu cadastro, e o(a) padrinho/madrinha realiza uma busca e entra em contato com a família para realizar a doação da melhor forma possível.


## Ferramentas e Dependências utilizadas:
- :green_square: Nodemoon
- :green_square: Express
- :green_square: Cors
- :green_square: Dotenv
- :green_square: Mongoose
- :green_square: Npm
- :green_square: Git
- :green_square: Github
- :green_square: MongoDB
- :green_square: Visual Studio Code
- :green_square: Heroku

## Aprendizados:
Durante a realização do projeto, foram aplicados os conteúdos aprendidos ao longo das 18 semanas do curso
de Backend na {Reprograma}.
Alguns desses conceitos foram: Lógica de Programação, Banco de dados (MongoDB), Arquitetura MVC, CRUD, etc.

## Instruções para utilização da API através do POSTMAN:

### getIndex
Rota: https://projeto-apadrinhe-uma-crianca.herokuapp.com/

### addCrianca - POST
Rota: https://projeto-apadrinhe-uma-crianca.herokuapp.com/criancas/cadastrar

Exemplo de Postagem:
'''
{
    "responsavel": "Raphaela C O Britto",
    "nome": "Ekundayo O Ogumbiyi Bueno",  
    "idade": "2",
    "telefone": "123456788",
    "presente":"Massinha",
    "estado": "Sao Paulo",
    "cidade":"Guarulhos",
    "apadrinhada": false
}
'''

### getAll 
Rota: https://projeto-apadrinhe-uma-crianca.herokuapp.com/criancas


### getNaoApadrinhadas
Rota: https://projeto-apadrinhe-uma-crianca.herokuapp.com/criancas/lista

## getPorEstado
Rota: https://projeto-apadrinhe-uma-crianca.herokuapp.com/criancas/estado

Exemplo:  
<img src = "img/getPorEstado.png" width="410"> 

## getPorEstado
Rota: https://projeto-apadrinhe-uma-crianca.herokuapp.com/criancas/cidade

Exemplo:  
<img src = "img/getPorCidade.png" width="410"> 

## deletarCrianca
Rota: https://projeto-apadrinhe-uma-crianca.herokuapp.com/criancas/deletar/:id

Obs: inserir o ID desejado na rota 

## getById
Rota https://projeto-apadrinhe-uma-crianca.herokuapp.com/criancas/id

Exemplo:  
<img src = "img/getById.png" width="410"> 

## patchItem
Rota: https://projeto-apadrinhe-uma-crianca.herokuapp.com/criancas/atualizar/

Obs: inserir o ID desejado na rota 

Exemplo de atualização de itens:
<img src = "img/patchItem.png" width="410"> 

## Link do projeto no heroku
https://projeto-apadrinhe-uma-crianca.herokuapp.com/






