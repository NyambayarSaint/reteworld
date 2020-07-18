const express = require('express')
const router = new express.Router()
const Company = require('../models/company')
const auth = require('../middleware/auth')
const CTS = process.env.CTS
const CTE = process.env.CTE

// REGISTER
router.post('/company/register', async (req, res) => {
    const company = new Company(req.body);
    try{
        await company.save();
        const token = await company.generateAuthToken()
        console.log(token,'token')
        res.cookie('Authorization', `${CTS}${token}${CTE}`)
        res.send({error: false}).status(200)
    }catch(e){
        console.log(e)
        res.send({error: true, message: e})
    }
})

router.get('/company/logout', auth, async (req, res) => {
    await req.company.destroyTokens()
    res.status(200).send(true)
})

router.post('/company/login', async (req, res) => {
    try{
        const company = await Company.findByCredentials(req.body)
        const token = await company.generateAuthToken()
        res.cookie('Authorization', `${CTS}${token}${CTE}`)
        res.send({error: false}).status(200)
    }catch(e){
        console.log(e)
        res.send({error: true, message: e})
    }
})

module.exports = router