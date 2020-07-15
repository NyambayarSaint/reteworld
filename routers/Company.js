const express = require('express')
const router = new express.Router()
const Company = require('../models/company') 

router.get('', async (req, res) => {
    res.send('heheee')
})

router.post('/test', async (req, res) => {
    console.log(req.body);
    const company = new Company({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try{
        await company.save();
        res.status(200).send('Okay!')
    }catch(e){
        res.send(e.errors).status(400)
    }
})

module.exports = router