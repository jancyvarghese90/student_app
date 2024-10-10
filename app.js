var express=require('express');
var morgan=require('morgan');
require('dotenv').config();


var studentRoute=require('./routes/studentRoute')
require('./db/dbConnection')
//initialise the express
var app=express();
app.use(morgan("dev"));
app.use('/api',studentRoute);
app.listen(process.env.port,()=>{
    console.log(`server is running in the port ${process.env.port}`)
}) 

