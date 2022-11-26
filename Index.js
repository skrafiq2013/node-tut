const express = require('express');
// const res = require('express/lib/response');
const path = require('path');
const app = express();
const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath));
app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
// if user enter wrong page bellow 404 not found error shows 
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})
app.listen(5000);

