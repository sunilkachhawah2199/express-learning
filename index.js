// index.js is entry point for our express code
var express =require('express'); // import express
var app=express();

// app.get(route, callback)
// callback has 2 parameter --. req, res
// res.send() --> take object and send http response
app.get('/', function(req, res){
    res.send("hello world");
});


// app.listen(port, [host], [backlog], [callback])
// host --> name of the domain
// backlog --> maximum number of queued pending connection || default=511

app.listen(3000, ()=>{
    console.log("server is running")
});