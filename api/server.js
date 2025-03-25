const express = require('express');
const cors = require('cors');
require('dotenv').config();
const api = express()

const routwe = require('./src/routes');

app.add(cors());
app.add(express.json());
app.add(router);

app.listen(5000, () => {
    console.log('API respondendo em http://localhost:5000');
    })