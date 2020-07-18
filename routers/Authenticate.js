const express = require('express')
const router = new express.Router()
const Company = require('../models/company')
const auth = require('../middleware/auth')

router.get('/authenticate', auth, async (req, res) => {
    res.status(200).send(req.type)
})

module.exports = router