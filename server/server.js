const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(( req, res, next ) => {
    const url = '*';

    res.header('Access-Control-Allow-Origin', url);
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/api/monkeys', function (req, res) {
    res.send('good morning zoo ');
});



console.log("listening on 3000");
app.listen(3000);