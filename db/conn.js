const mongoose = require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.URI}`)
.then(()=>{console.log("Connected to database!!!");})
.catch((err)=>{console.log(err);})
