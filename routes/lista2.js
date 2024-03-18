const express = require('express');
const router = express.Router()

router.post('/ex1', function (req, res) {

    const quantidadeMinima = Number(req.body.quantidadeMinima)
    const quantidadeMaxima = Number(req.body.quantidadeMaxima)

    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

    res.json({ quantidadeMedia })
})

router.post('/ex2', function (req, res) {

    const { nome, horasTrabalhadas, valorHora, filhos } = req.body

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * filhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

    res.json({ salarioBruto, bonificacaoFilhos, salarioFinal })

})

router.post('/ex3', function (req, res) {

    const anos = Number(req.body.anos)
    const meses = Number(req.body.meses)
    const dias = Number(req.body.dias)

    let anosDias = anos * 365
    let mesesDias = meses * 30
    let idadeEmDias = dias + anosDias + mesesDias

    res.json({ idadeEmDias })
})

router.post('/ex4', function (req, res) {

    const dias = Number(req.body.dias)

    let anos = dias / 365
    let diasRestantes = dias % 365

    let meses = diasRestantes / 30
    let diasFinal = diasRestantes % 30

    res.json({
        anos: Math.trunc(anos),
        meses: Math.trunc(meses),
        dias: Math.trunc(diasFinal)
    })

})

router.post('/ex5', function (req, res) {

    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)

    let notaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10

    res.json({ notaFinal })
})

router.post('/ex6', function (req, res) {

    const segundos = Number(req.body.segundos)

    let horas = segundos / 3600
    let segundosRestantes = segundos % 3600

    let minutos = segundosRestantes / 60
    let segundosFinal = segundosRestantes % 60

    res.json({
        horas: Math.trunc(horas),
        minutos: Math.trunc(minutos),
        segundos: Math.trunc(segundosFinal)
    })
})

router.post('/ex7', function (req, res) {

    const nome = req.body.nome
    const salarioFixo = Number(req.body.salarioFixo)
    const totalVendas = Number(req.body.totalVendas)
    const percentualVendas = Number(req.body.percentualVendas)

    let salarioFinal = salarioFixo + (totalVendas * (salarioFixo * (percentualVendas / 100)))

    res.json({ nome, salarioFinal })
})

router.post('/ex8', function (req, res) {

    const { nome, distancia, tempo } = req.body

    let velocidadeMedia = distancia / tempo

    res.json({
        mensagem: `A velocidade média do ${nome} foi ${velocidadeMedia}km/h`
    })
})

router.post('/ex9', function (req, res) {

    const salario = Number(req.body.salario)

    if(salario < 1000){
        let salarioReajustado = salario + (salario * 0.3)
        
        res.json({salarioReajustado})
    }else{
        res.json({mensagem: 'Aumento apenas para funcionarios que recebem menos de R$1.000'})
    }
})

module.exports = router