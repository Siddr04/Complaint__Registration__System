const express = require('express'); //import the package that was installed.
//Above package used to start our server from nodejs
// const dotenv = require('dotenv');

const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path:'./config.env'});
const mysql = require('mysql');
const app=express();


app.listen(4000,()=>{
    console.log("Server started on port 4000");
});

const publicDirectory=path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine','hbs');

app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

// app.use('/auth',require('./routes/auth'));