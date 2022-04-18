const express = require('express');
const { send } = require('express/lib/response');
const server = express();

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

server.get('/usuarios/', (req, res) => {
    res.send(usuarios)
})

server.get('/usuarios/:id', (req, res) => {
    const {id} = req.params

    const aux = usuarios.find(usuario => usuario.id == id)

    res.send(aux)
})



console.log('Servidor rodando na porta 3k')

server.listen(3000)