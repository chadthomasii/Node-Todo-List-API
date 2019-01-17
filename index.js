var app = require('express')();
const PORT = 80;
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

app.get('/', function(req,res){
    res.send("Hello from the root route")
})

app.use('/api/todos', todoRoutes);

app.listen(PORT, function(){
    console.log('Listening on port ' + PORT); //Listening on port 8888
});


