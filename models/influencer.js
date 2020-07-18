const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const JWTSECRET = process.env.JWTSECRET

const influencerSchema = new mongoose.Schema({
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

influencerSchema.pre("save", async function (next) {
  const influencer = this;
  if (influencer.isModified("password")) {
    influencer.password = await bcrypt.hash(influencer.password, 8);
  }

  next();
});

influencerSchema.methods.generateAuthToken = async function () {
  const influencer = this;
  const token = jwt.sign({ _id: influencer._id.toString() }, JWTSECRET);
  influencer.tokens = influencer.tokens.concat({ token });
  await influencer.save();

  return token;
};

influencerSchema.methods.destroyTokens = async function() {
    const influencer = this;
    influencer.tokens = [];
    await influencer.save();
    return true
}

influencerSchema.statics.findByCredentials = async ({email, password}) => {
  const influencer = await Influencer.findOne({ email });

  if (!influencer) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, influencer.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return influencer;
};

const Influencer = mongoose.model("Influencer", influencerSchema);
module.exports = Influencer;
