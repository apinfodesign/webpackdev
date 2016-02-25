const express = require( 'express' );
const app = express();

const bodyParser = require( 'body-parser' );
const methodOverride = require( 'method-override' );
const restify = require( 'express-restify-mongoose' );

const Magazine = require( '../models/magazine' );
const User = require( '../models/user' );
const magazineRouter = express.Router();
const userRouter = express.Router();

app.use( ( req, res, next ) => {
    const url = '*';
    res.header( 'Access-Control-Allow-Origin', url );
    res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    next();
});

app.use( express.static( __dirname + '/public' ) );

app.use( bodyParser.json() );
app.use( methodOverride() );

restify.serve( magainzeRouter, Magazine, { name: 'magazines' });
restify.serve( userRouter, User, { name: 'users' });

app.use( magazineRouter );
app.use( userRouter );

module.exports = app;