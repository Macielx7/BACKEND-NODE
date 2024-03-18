const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res){


    let numeros = [1,20,17,9]

    for(i=0; i<numeros.length; i++){

    }

    
    


    res.json(numeros)

    

    

})

module.exports = router