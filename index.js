var express = require('express');
var port = 3000;

app = express();

app.get('/', function(request,response)
{
    response.send("Hi From Express");
});





app.listen(port)