const express = require('express');
const db = require('./config/db');
const port = 8081;
const app = express();

app.set('view engine','ejs');


app.listen(port,(err)=>{
    if(!err){
        db();
        console.log("server start");
        console.log(`http://localhost:${port}`);
                
    }
})