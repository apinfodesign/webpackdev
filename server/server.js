const mongoose = require( './lib/mongooseConfig' );
const app = require( './lib/app' );

const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `Magic Server Listening on Port ${port}...` ) );