const express = require( 'express' );
const app = express();

app.set( 'port', ( process.env.PORT || 3000 ) );

app.use( express.static( __dirname + '/www' ) );

app.set( 'views', __dirname + '/www' );

app.get( '/', function( request, response ) {
    response.render( 'index' );
} );

app.listen( app.get( 'port' ), function() {
    console.log( 'Node app is running on port', app.get( 'port' ) );
} );