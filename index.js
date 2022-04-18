const express = require('express');//framework para rotas
const bodyParser = require('body-parser');
const { send } = require('express/lib/response');
const server = express();
const jsonParser = bodyParser.json()

const usuarios = [{
        id:1,
        nome: "Rodrigo",
        sobrenome: "Costa",
    },
    {
        id:2,
        nome: "Elaine",
        sobrenome: "Araujo",
    },
    {
        id:3,
        nome: "Yoshi",
        sobrenome: "Araujo Costa",
    }
]
//CRUD//


server.get('/usuarios/', (req, res) => {
    res.send(usuarios)
})

server.get('/usuarios/:id', (req, res) => {
    const {id} = req.params

    const aux = usuarios.find(usuario => usuario.id == id)

    res.send(aux)
})
//adiciona 
server.post('/usuarios/', jsonParser, (req, res) => {
    console.log(req.body)
    const newUser = req.body
    usuarios.push(newUser)
    res.send(usuarios)
} )
//deleta
server.delete('/usuarios/:index', (req, res) => {
    const {index} = req.params
    usuarios.splice(index, 1)
    res.send(usuarios)
    
} )




console.log('Servidor rodando na porta 3k')

server.listen(3000)