const jwt = require('jsonwebtoken')
const Company = require('../models/company')
const JWTSECRET = process.env.JWTSECRET
const CTS = process.env.CTS
const CTE = process.env.CTE
const ITS = process.env.ITS

const auth = async (req, res, next) => {

	const decodedCookie = decodeURIComponent(req.headers.cookie)
    if(decodedCookie.includes(CTS)){
        try {
            const start = decodedCookie.indexOf(CTS)
            const end = decodedCookie.lastIndexOf(CTE)
            const token = decodedCookie.slice(start+CTS.length, end)
    
            const decoded = jwt.verify(token, JWTSECRET)
            const company = await Company.findOne({ _id: decoded._id, 'tokens.token': token })
    
            if (!company) {
                throw new Error('No company found!');
            }
    
            req.token = token
			req.company = company
			req.type = 'Co'
            
            next()
        } catch (e) {
            res.status(401).send('Session expired or not valid account!')
        }
    }
    else if(decodedCookie.includes(ITS)){
        console.log('Influencer')
    }
    else throw new Error('None of them!')
}

module.exports = auth