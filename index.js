const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
let routes = require('./api/route')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

routes(app)

app.listen(port)
console.log("http://localhost:3000/")