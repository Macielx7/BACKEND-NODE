const express = require('express');
const router = express.Router();

router.post('/ex1', function (req, res) {

    const salario = Number(req.body.salario)

    if (salario == 0 || salario == NaN) {
        res.status(400).json({ erro: 'Insira um salario' })
    } else {
        let salarioReajustado = 0
        if (salario <= 2000) {
            salarioReajustado = salario + (salario * 0.5)

            res.json({ salarioReajustado })
        } else {
            salarioReajustado = salario + (salario * 0.3)

            res.json({ salarioReajustado })
        }
    }
})

router.post('/ex2', function (req, res) {

    const { n1, n2, n3 } = req.body

    if (n1 > n2 && n1 > n3) {
        res.json({ n1 })
    } else if (n2 > n3) {
        res.json({ n2 })
    } else {
        res.json({ n3 })
    }
})

router.post('/ex3', function (req, res) {

    const { nPessoas, nChopps, nPizzas, nCoberturas } = req.body

    let precoTotal = (nPizzas * 17.00) + (nChopps * 4.80) + (nCoberturas * 1.50)
    let precoFinal = precoTotal + (precoTotal * 0.1)
    let precoDivididoPessoas = precoFinal / nPessoas

    res.json({ precoFinal, precoDivididoPessoas })
})

router.post('/ex4', function (req, res) {

    const { salarioMin, horasTrabalhadas, horasExtras, dependentes } = req.body

    let valorHora = salarioMin / 5
    let salarioMes = valorHora * horasTrabalhadas
    let valorDependentes = 32 * dependentes
    let valorHoraExtra = valorHora * 1.5 * horasExtras

    let salarioBruto = salarioMes + valorDependentes + valorHoraExtra

    //Aqui calcula o salario liquido com base nos valores do IRRF
    let salarioLiquido = salarioBruto
    if (salarioBruto >= 2000 && salarioBruto <= 5000) {
        salarioLiquido = salarioBruto - (salarioBruto * 0.1)
    } else if (salarioBruto > 5000) {
        salarioLiquido = salarioBruto - (salarioBruto * 0.2)
    }

    let gratificacao = salarioLiquido < 3500 ? 1000 : 500

    let salarioReceber = salarioLiquido + gratificacao

    res.json({ salarioReceber })
})

router.post('/ex5', function (req, res) {

    const nome = req.body.nome
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const me = Number(req.body.me)

    medAproveitamento = (n1 + n2 * 2 + n3 * 3 + me) / 7

    if (medAproveitamento >= 9.0) {
        res.json({
            medAproveitamento,
            conceito: 'A'
        })
    } else if (medAproveitamento >= 7.5) {
        res.json({
            medAproveitamento,
            conceito: 'B'
        })
    } else if (medAproveitamento >= 6.0) {
        res.json({
            medAproveitamento,
            conceito: 'C'
        })
    } else if (medAproveitamento >= 4.0) {
        res.json({
            medAproveitamento,
            conceito: 'D'
        })
    } else {
        res.json({
            medAproveitamento,
            conceito: 'E'
        })
    }
})

router.post('/ex6', function (req, res) {

    const altura = Number(req.body.altura)
    const sexo = req.body.sexo
    let pesoIdeal = 0

    if (sexo == 'm' || sexo == 'M') {
        pesoIdeal = (altura * 72.7) - 58

        res.json({ pesoIdeal })
    } else if (sexo == 'f' || sexo == 'F') {
        pesoIdeal = (altura * 61.1) - 44.7

        res.json({ pesoIdeal })
    } else {
        res.status(400).json({ mensagem: 'Sexo deve ser m/M ou f/F' })
    }
})

router.post('/ex7', function (req, res) {

    const { n1, n2, n3 } = req.body

    //pega o maior aqui
    let maior = n1;
    if (n2 > maior) {
        maior = n2;
    }
    if (n3 > maior) {
        maior = n3;
    }

    //aqui pega o segundo maior
    let segundoMaior;
    if (n1 == maior) {
        if (n2 > n3) {
            segundoMaior = n2;
        } else {
            segundoMaior = n3;
        }
    } else if (n2 == maior) {
        if (n1 > n3) {
            segundoMaior = n1;
        } else {
            segundoMaior = n3;
        }
    } else {
        if (n1 > n2) {
            segundoMaior = n1;
        } else {
            segundoMaior = n2;
        }
    }

    let soma = Number(maior) + Number(segundoMaior)

    res.json({ maior, segundoMaior, soma })
})

router.post('/ex8', function (req, res) {

    const cargo = Number(req.body.cargo)
    const salario = Number(req.body.salario)
    let reajuste = 0
    let novoSalario = 0

    if (cargo == 101) {
        reajuste = salario * 0.05
        novoSalario = salario + reajuste

        res.json({
            salario,
            reajuste,
            novoSalario
        })
    } else if (cargo == 102) {
        reajuste = salario * 0.075
        novoSalario = salario + reajuste

        res.json({
            salario,
            reajuste,
            novoSalario
        })
    } else if (cargo == 103) {
        reajuste = salario * 0.1
        novoSalario = salario + reajuste

        res.json({
            salario,
            reajuste,
            novoSalario
        })
    } else {
        reajuste = salario * 0.15
        novoSalario = salario + reajuste

        res.json({
            salario,
            reajuste,
            novoSalario
        })
    }
})

module.exports = router