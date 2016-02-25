var bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Magazine = require('./models/magazine.js');

const mongoose = require( './lib/mongooseConfig' );

//const dbURI = process.env.DB_URI;

app.use(bodyParser.json() );

app.use(express.static(__dirname + '/public'));

app.use(( req, res, next ) => {
    const url = '*';

    res.header('Access-Control-Allow-Origin', url);
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/api/magazines', function (req,res){
    Magazine.find({})
            .exec(function(err, magazine){
                if (err) {
                    return next(err);}
                else{
                    res.status(200).json(magazine);
                }
            });
});


app.post('/api/magazines', function(req, res, next){

        console.log ( req.body );

        new Magazine(req.body)
            .save()
            .then( magazine => res.send( magazine ) )
            .catch( next() );
});


app.get('/api/activeusers', function(req,res,next){
    var getSize = 1000;
    User.find( {activestatus: { $ne: 'inactive'} } )
        .sort({created: 'descending'})
        .limit(getSize)
        .exec(function(err, users){
            if (err)
            {return next(err)}
            else{
                console.log("we good at the api");
                res.status(201).json(users); //returns saved Days object
            }
        })
});



app.get('/api/users', function (req,res){
    res.send( data );
});


const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `Magic Server Listening on Port ${port}...` ) );