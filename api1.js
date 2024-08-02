import express from 'express'
const servidor = express()
servidor.listen (5000, () => console.log('subiu'))

servidor.get('/calculadora/somar/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let soma = n1 + n2
    resp.send({soma : soma})
})





