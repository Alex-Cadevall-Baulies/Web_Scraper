const express = require('express')
require('dotenv').config('./.env')

const app = express()

const dataCheck = require('./components/cheerio')
dataCheck()

app.listen(process.env.PORT, () => console.log(`Running on http://localhost:${process.env.PORT}`))