const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express()

// body parser method
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use(bodyParser.json())

// DB config
const db = require("./config/keys").mongoURI;

// connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("MongoDB successfull connected"))
.catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running on ${port}`))