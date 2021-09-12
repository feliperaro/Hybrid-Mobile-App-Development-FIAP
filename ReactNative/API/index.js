const express = require('express')
const app = express()

app.use(express.json())

let dados = []

app.get('/', (req, res) => {
    console.log('Requisição realizada');
    res.json(dados)
})

app.post('/', (req, res) => {
    let mensagem = req.body.mensagem
    if ( mensagem && mensagem.length > 0 ) {
        dados.push(mensagem)
        res.send("OK")
    } else {
        res.send("NOT OK")
    }
})

app.delete('/', (req, res) => {
    dados = []
    res.send("OK")
})

app.listen(3000, () => {
    console.log("Aplicação sendo executada na porta 3000");
})