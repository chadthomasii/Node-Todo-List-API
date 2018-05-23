var express = require('express');
app = express();
var port = 3000;
var todoRoutes = require('./routes/todos')



app.use('/api/todos', todoRoutes);




app.listen(port);