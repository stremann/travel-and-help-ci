const express = require( 'express' );
const app = express();
const path = require( 'path' );

app.set( 'port', ( process.env.PORT || 3000 ) );

app.use( express.static( __dirname + '/www' ) );

app.set( 'views', __dirname + '/www' );
app.use( '/img',  express.static( path.join( __dirname, 'www/img' ) ) );

app.get( '/', function( request, response ) {
    response.render( 'index' );
} );

app.listen( app.get( 'port' ), function() {
    console.log( 'Node app is running on port', app.get( 'port' ) );
} );