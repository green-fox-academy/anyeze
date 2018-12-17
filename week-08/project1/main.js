let express = require('express');
let app = express();

app.use(static.express('assets'));
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);