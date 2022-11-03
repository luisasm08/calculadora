const express = require ('express')
const cors = require('cors')
const { json } = require('body-parser')
const path = require('path');

const app = express()
app.use(cors())
app.use(json())
app.listen('5500')
const url = "https://localhost:5500"

app.use(express.static('public'))

function calculating(corpo){
let numero1 = corpo.numero1
let numero2 = corpo.numero2
let operador = corpo.operador
let resultado
    switch(operador) {
        case 'soma':
            resultado = parseInt(numero1) + parseInt(numero2);
            break;
        case 'diminuir':
            resultado = parseInt(numero1) - parseInt(numero2);
            break;
        case 'multiplicar':
            resultado = parseInt(numero1) * parseInt(numero2);
            break;
        case 'dividir':
            resultado = parseInt(numero1) / parseInt(numero2);
            break;
    }
    return (resultado)
}


app.route('/').post((req, res)=>{
    res.json(calculating(req.body))
})
