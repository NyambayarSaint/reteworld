const express = require('express')
const router = new express.Router()
const Company = require('../models/company') 

router.get('/', async (req, res) => {
    console.log('Got my index!')
    res.send('Got my index')
})


router.post('/company/register', async (req, res) => {
    console.log(req.body);
    const company = new Company({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try{
        await company.save();
        res.status(200).send('Okay!')
    }catch(e){
        res.send(e).status(400)
    }
})

module.exports = router