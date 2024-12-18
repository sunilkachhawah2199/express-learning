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
    res.send("I can accept all http type request");
});


// for dynamix url we use this

app.get('/user/:id/:name', (req, res)=>{
    res.send(`you are a user with id: ${req.params.id} , name: ${req.params.name}`);
});

// /user/:id[0-9]{5}/:name' --> now id should be 5 digit

// using things file function here
// now all the request on /things will be transfered to things.js


// way to handle if user not found any route then this route will be called we generally serve 404 page here

// this should be placed at the end when any request not match then our pointer wil; reach here
app.all('*', (req, res)=>{
    res.send(' sorry this is a invalid url');
});

app.use('/things', things);

app.listen(3000, ()=>{
    console.log("server started");
});