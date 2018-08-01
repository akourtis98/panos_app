define( [
	"../var/document"
], function( document ) {
	"use strict";

<<<<<<< HEAD
	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
=======
	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
} );
