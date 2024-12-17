// index.js is entry point for our express code
var express =require('express'); // import express
var app=express();

var things= require('./things.js'); // importing module

// we can have different method on same route

app.get('/hello', (req, res)=>{
    res.send("I am different -1");
});


app.post('/hello', (req,res)=>{
    res.send("I am a different -2");
});

// express has --> all method to test all request on single path
// this method is generally used for defining middleware

app.all('/common', (req,res)=>{
    res.send("I can accept all http request");
})

// using things file function here
// now all the request on /things will be transfered to things.js

app.use('/things', things);

app.listen(3000, ()=>{
    console.log("server started");
});