var express=require('express');
var app= express();

// ---------- ---middleware
/*
middleware are a function who has acess to req and res object.
this functions are used to modify req, res object for taks like parsing request bodies, adding response headers
----------------third party middleware
body-parser --> parse http request body
cookie-parser --> parse cookie from body
*/


// simple request time logger
// this midddle ware will be called for every request
app.use((req, res, next)=>{
    console.log("A new request received at " + Date.now());
   
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware function route handler.
   next();
})


// middleware for a specific route and for its subroute
// middleware runs from top to bottom


app.get('/user/human', (req, res)=>{
    console.log("I will run before below middleware")
    res.send("/users get request");
})

app.use('/user', (req, res, next)=>{
    console.log('separate req for /users route');
    next();
});

app.listen(3000, ()=>{
    console.log("server started");
});