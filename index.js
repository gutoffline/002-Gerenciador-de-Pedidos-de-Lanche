const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("funciona")
})


let listaDePedidos = [
    {
        "id":1,
        "cliente":"Guto Xavier",
        "id_cliente":100,
        "produto":"X-Bacon",
        "valor":29.9
    },
    {
        "id":2,
        "cliente":"Guto Xavier",
        "id_cliente":100,
        "produto":"X-Salada",
        "valor":25.9
    },
    {
        "id":3,
        "cliente":"Keila",
        "id_cliente":85,
        "produto":"X-Fominha",
        "valor":39.9
    }
]

//listar
app.get("/listarpedidos", function(req, res){
    res.send(listaDePedidos)
})

//listar um
app.get("/listarpedido/:id",function(req, res){
    let idInformado = req.params.id
    if(idInformado > listaDePedidos.length){
        res.send("Pedido inválido")
    }else{
        res.send(listaDePedidos[idInformado-1])
    }
})



app.listen(3000)
// localhost:3000