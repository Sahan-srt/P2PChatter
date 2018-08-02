var express = require('express');
var PORT=process.env.PORT || 3000;

var app = express();


app.get('/about',function(req,res){
    res.send("this is about page!");
})

app.use(express.static(__dirname +'/public'));
console.log('server running on port'+PORT +'http://localhost:3000/');

app.listen(PORT);