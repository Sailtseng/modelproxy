var express = require( 'express' );
var app = express();

app.post( '/post', function( req, res ) {
	var d = '';
	req.on( 'data', function( chunk ) {
		d += chunk;
	} );
	req.on( 'end', function() {
		console.log( d );
	} );
	res.send( 'this is the msg from mockserver!' );
} );

app.listen( 3001 );