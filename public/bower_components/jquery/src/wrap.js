define( [
	"./core",
<<<<<<< HEAD
	"./core/init",
	"./manipulation", // clone
	"./traversing" // parent, contents
], function( jQuery ) {
=======
	"./var/isFunction",
	"./core/init",
	"./manipulation", // clone
	"./traversing" // parent, contents
], function( jQuery, isFunction ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd

"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
<<<<<<< HEAD
			if ( jQuery.isFunction( html ) ) {
=======
			if ( isFunction( html ) ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
<<<<<<< HEAD
		if ( jQuery.isFunction( html ) ) {
=======
		if ( isFunction( html ) ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
<<<<<<< HEAD
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
=======
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
} );
