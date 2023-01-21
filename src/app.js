const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 6969;
const app = express();
const { urlencoded } = require("express");
const Student = require('../models/students')
const studentRouter = require('../routes/students')

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

// Dotenv
require('dotenv').config()

// Database Connection
require('../db/conn')
app.use(studentRouter)

app.listen(port,()=>{
    console.log(`Server listning at ${port}`);
})


