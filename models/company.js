const mongoose = require('mongoose')
const validator = require('validator')

const companySchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid moofuckaaa????!')
            }
        }
    },
    password: {
        type: String,
        required: true
    }
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;