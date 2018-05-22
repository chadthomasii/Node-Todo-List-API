var express = require('express');
var port = 3000;

app = express();

app.get('/', function(request,response)
{
    response.send("Hi From Express");
});

app.get('/happy', function(request,response)
{
    response.send("Hi From a happy Express");
});



app.listen(port)