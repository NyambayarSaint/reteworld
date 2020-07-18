const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWTSECRET = process.env.JWTSECRET

const companySchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid moofuckaaa????!");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

companySchema.pre("save", async function (next) {
  const company = this;
  if (company.isModified("password")) {
    company.password = await bcrypt.hash(company.password, 8);
  }

  next();
});

companySchema.methods.generateAuthToken = async function () {
  const company = this;
  const token = jwt.sign({ _id: company._id.toString() }, JWTSECRET);
    console.log(token,'here')
  company.tokens = company.tokens.concat({ token });
  await company.save();

  return token;
};

companySchema.methods.destroyTokens = async function() {
    const company = this;
    company.tokens = [];
    await company.save();
    return true
}

companySchema.statics.findByCredentials = async ({email, password}) => {
  const company = await Company.findOne({ email });

  if (!company) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, company.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return company;
};

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
