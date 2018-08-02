var express = require('express');

var app = express();


app.get('/about',function(req,res){
    res.send("this is about page!");
})

app.use(express.static(__dirname +'/public'));
console.log('server running on port 3000 '+'http://localhost:3000/');

app.listen(3000);