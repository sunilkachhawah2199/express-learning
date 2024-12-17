// putting all routes in only index.js make code messy
// to keep sepearte our route we will use Express.router

var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
    res.send('Get router');
});

router.post('/', (req, res)=>{
    res.send('Post router');
});

// export this router to use in index.js
module.exports=router;