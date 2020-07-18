const express = require('express')
const router = new express.Router()
const Influencer = require('../models/influencer')
const auth = require('../middleware/auth')
const ITS = process.env.ITS
const ITE = process.env.ITE

// REGISTER
router.post('/influencer/register', async (req, res) => {
    const influencer = new Influencer(req.body);
    try{
        await influencer.save();
        const token = await influencer.generateAuthToken()
        console.log(token,'token')
        res.cookie('Authorization', `${ITS}${token}${ITE}`)
        res.send({error: false}).status(200)
    }catch(e){
        console.log(e)
        res.send({error: true, message: e})
    }
})

// LOGOUT
router.get('/influencer/logout', auth, async (req, res) => {
    await req.influencer.destroyTokens()
    res.status(200).send(true)
})

// LOGIN
router.post('/influencer/login', async (req, res) => {
    try{
        const influencer = await Influencer.findByCredentials(req.body)
        const token = await influencer.generateAuthToken()
        res.cookie('Authorization', `${ITS}${token}${ITE}`)
        res.send({error: false}).status(200)
    }catch(e){
        console.log(e)
        res.send({error: true, message: e})
    }
})

module.exports = router