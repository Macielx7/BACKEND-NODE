const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){
    
    const {n1, n2, n3, n4} = req.body

    const media = (n1 + n2 + n3 + n4) / 4

    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado'

    res.json({media, mensagem})
})

router.post('/ex2', function(req, res){

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = brancos + nulos + validos
    
    let retorno = {}
    if(soma > total){

        retorno = {
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores" 
        }

        res.status(400).json(retorno)
        
    } else {
        const percBranco = brancos / total * 100
        const percNulos = nulos / total * 100
        const percValidos = validos / total * 100

        retorno = {percBranco, percNulos, percValidos}

        res.status(200).json(retorno)
    }

})

router.post('/ex3', function(req, res){
    
    let {salario, reajuste} = req.body
    salario = Number(salario)
    const reajuste2 = reajuste/100
    const novoSalario = Number(salario + (salario*reajuste2))

    res.json({novoSalario})
})


router.post('/ex4', function (req, res) {

    let custo = Number(req.body.custo)

    let imposto = custo * 0.45;
    let distribuidor = custo * 0.28;
    let tudo = custo + imposto + distribuidor

    res.json({ resposta: 'valor total:', tudo })



    res.json({ Resposta: 'Lista 1 --> Ex 4' })
})
router.post('/ex5', function (req, res) {

    let fabrica = Number(req.body.fabrica)
    let imposto = Number(req.body.imposto)
    let distribuidor = Number(req.body.distribuidor)

    let pocentagemimp = imposto / 100;
    let pocentagemdis = distribuidor / 100;
    let tudo = fabrica + (fabrica * (pocentagemimp + pocentagemdis))

    res.json({ resposta: 'valor total', tudo })




    res.json({ Resposta: 'Lista 1 --> Ex 5' })
})
router.post('/ex6', function (req, res) {
    let salariofixo = Number(req.body.salariofixo)
    let comisao = Number(req.body.comisao)
    let carros = Number(req.body.carros)
    let vendas = Number(req.body.vendas)

    let cauc = vendas * 0.05
    let total = comisao * carros
    let valortotal = salariofixo + total + cauc

    res.json({ resposta: "o salario e dé: ", valortotal, resposta: "o numero de carros vendidos são", carros })




    res.json({ Resposta: 'Lista 1 --> Ex 6' })
})
router.post('/ex7', function (req, res) {

    let nota1 = Number(req.body.nota1)
    let nota2 = Number(req.body.nota2)

    let pesonota1 = 4;
    let pesonota2 = 6;

    let media = ((nota1 * pesonota1) + (nota2 * pesonota2)) / (pesonota1 + pesonota2);



    res.json({ media })



    res.json({ Resposta: 'Lista 1 --> Ex 7' })
})
router.post('/ex8', function (req, res) {

    let raio = Number(req.body.raio)
    let altura = Number(req.body.altura)

    let pi = (raio / 2) * altura;

    res.json({ pi })


    res.json({ Resposta: 'Lista 1 --> Ex 8' })
})

router.post('/ex9', function (req, res) {


    let n1 = Number(req.body.n1)
    let n2 = Number(req.body.n2)

    let soma = n1 + n2
    let mult = soma * n1

    res.json({ mult })



    res.json({ Resposta: 'Lista 1 --> Ex 9' })
})

module.exports = router