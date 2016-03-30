const express = require( 'express' );
const app = express();

const path = require( 'path' );

const bodyParser = require( 'body-parser' );
const methodOverride = require( 'method-override' );
const restify = require( 'express-restify-mongoose' );

const Magazine = require( '../models/magazine' );
const User = require( '../models/user' );

const magazineRouter = express.Router();
const userRouter = express.Router();

const auth = require( './auth.js' );

const token = require( './token' );
const moment = require( 'moment' );

const publicDir = path.resolve( path.join( __dirname, '../public' ) );
console.log( publicDir );

app.use( express.static( __dirname + '/public' ) );


app.use( ( req, res, next ) => {
    const url = '*'; //http://localhost:8080';
    res.header( 'Access-Control-Allow-Origin', url );
    // res.header( 'Access-Control-Allow-Credentials', true );
    res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' );
    next();
});

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( methodOverride() );
app.use( '/auth', auth );

//restify.serve( magainzeRouter, Magazine, { name: 'magazines' });
//restify.serve( userRouter, User, { name: 'users' });

function ensureAuthenticated(req, res, next) {

    if ( req.method === 'OPTIONS' ) return next();

    if (!req.header('Authorization')) {
        console.log( 'no auth header' );
        return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
    }
    const auth = req.header('Authorization').split(' ')[1];

    var payload = null;
    try {
        payload = token.verify( auth );
    }
    catch (err) {
        console.log( 'token issue', err );
        return res.status(401).send({ message: err.message });
    }

    if (payload.exp <= moment().unix()) {

        console.log( 'token expired' );
        return res.status(401).send({ message: 'Token has expired' });
    }
    req.user = payload.sub;

    next();
}

//app.use( magazineRouter );
//app.use( userRouter );

//get all magazines in magazines
app.get('/api/magazines', ensureAuthenticated , function (req,res){
    Magazine.find({})
        .exec(function(err, magazine){
            if (err) {
                return next(err);}
            else{
                res.status(200).json(magazine);
            }
        });
});

//create new magazine in magazines
app.post('/api/magazines', ensureAuthenticated,  function(req, res, next){

    console.log ( req.body );

    new Magazine(req.body)
        .save()
        .then( magazine => res.send( magazine ) )
        .catch( next );
});





//delete a magazine in magazines
app.delete('/api/magazines', ensureAuthenticated,  function(req, res){

    console.log ('incoming delete request: ', req.params );

    res.send('DELETE request to homepage');


    //Magazine.findByIdAndRemove = function(id, options, callback) {
    //    if (arguments.length === 1 && typeof id === 'function') {
    //        var msg = 'Model.findByIdAndRemove(): First argument must not be a function.' + '  ' + this.modelName + '.findByIdAndRemove(id, callback)' + '  ' + this.modelName + '.findByIdAndRemove(id)' + '  ' + this.modelName + '.findByIdAndRemove()';
    //        throw new TypeError(msg);
    //    }
    //    return this.findOneAndRemove({_id: id}, options, callback);
    //};

});

//get all users for administration WORKS
app.get('/api/activeusers', ensureAuthenticated, function(req,res,next){
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

//create a user
//

//get a user and users magazine list
//get all users in users

app.get('/api/users', ensureAuthenticated, function (req,res){

    console.log ('hitting api/users');

    User.find({})
        .exec(function(err, user){
            if (err) {
                return next(err);}
            else{
                 res.status(200).json(user);
            }
        });
});

//////////////////////////////////////////////////from daybreak
//app.post('/api/user', function(req, res, next){
//    //console.log('JJJJJ INCOMING AT API/USERPROFILE', req.body);
//    var data = {user:'',days:''};
//
//    if(req.body.username !== null)
//    {  ///
//        User.find({userName: req.body.username}, function(err,user){
//
//            // console.log('user is: ', user);
////        console.log('user[0].activestatus is', user[0].activestatus);
//
//            if (err){
//                next();
//            } else if (user && user[0].activestatus === 'active') {
//                data.user = user[0];
//                Day.find({
//                        userName : user[0].userName,
//                        userDeactivated : false
//                    })
//                    .sort({dayDate: 'desc'})
//                    .exec(function(err, days) {
//                        if (err) {
//                            next();
//                        } else if(days) {
//                            data.days = days;
//                            console.log('days is', days);
//                        }
//                        //console.log('LLLLLLL api data is ', data);
//                        res.status(201).json(data);
//                    })
//            }
//        });
//
//    } ///
////////////////////////////////////////////////


//delete own account


//

module.exports = app;