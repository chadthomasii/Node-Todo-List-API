var express = require('express');
var app = express();
const PORT = 80;
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));



app.get('/', function(req,res)
{
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, function(){
    console.log('Listening on port ' + PORT); //Listening on port 8888
});


