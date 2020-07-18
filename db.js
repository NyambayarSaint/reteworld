const mongoose = require('mongoose')

const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD

// const connectionString = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-ubw8m.mongodb.net/reteworld?retryWrites=true&w=majority`;

// LOCAL SETUP
mongoose.connect('mongodb://127.0.0.1:27017/reteworld', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
console.log("MongoDB connected successfully!!!");