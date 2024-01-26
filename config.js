const mongoose = require('mongoose')
const dotenv = require("dotenv").config()
const url = process.env.DBURL
mongoose.connect(url)