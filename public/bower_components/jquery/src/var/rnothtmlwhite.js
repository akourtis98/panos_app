define( function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
<<<<<<< HEAD
	// https://html.spec.whatwg.org/multipage/infrastructure.html#space-character
=======
	// https://infra.spec.whatwg.org/#ascii-whitespace
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
	return ( /[^\x20\t\r\n\f]+/g );
} );
