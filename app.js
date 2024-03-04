const express = require("express")
const app = express()

var porta = 8081

app.listen(porta, function(){
    console.log("Servidor Ativo!")
    console.log("Rodando na porta "+porta)
})

app.get("/", function(req, res){
    res.sendFile(__dirname+"/src/index.html")
})

app.get("/cadastrar/:produto", function(req, res){
    res.send("O produto "+req.params.produto+" foi cadastrado com sucesso!")
})

app.get("/contato/:sac/:produto", function(req, res){
    res.send("O produto "+req.params.produto+" tem um canal de atendimento SAC no número "+req.params.sac)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.send("A pesquisa resultou em "+req.params.produto+" "+req.params.modelo)
})
