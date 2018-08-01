define( [
	"../var/rnothtmlwhite"
], function( rnothtmlwhite ) {
	"use strict";

	// Strip and collapse whitespace according to HTML spec
<<<<<<< HEAD
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
=======
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	return stripAndCollapse;
} );
