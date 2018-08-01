define( [
	"../core",
	"../core/stripAndCollapse",
<<<<<<< HEAD
	"../var/rnothtmlwhite",
	"../data/var/dataPriv",
	"../core/init"
], function( jQuery, stripAndCollapse, rnothtmlwhite, dataPriv ) {
=======
	"../var/isFunction",
	"../var/rnothtmlwhite",
	"../data/var/dataPriv",
	"../core/init"
], function( jQuery, stripAndCollapse, isFunction, rnothtmlwhite, dataPriv ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd

"use strict";

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

<<<<<<< HEAD
=======
function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

<<<<<<< HEAD
		if ( jQuery.isFunction( value ) ) {
=======
		if ( isFunction( value ) ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

<<<<<<< HEAD
		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

=======
		classes = classesToArray( value );

		if ( classes.length ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

<<<<<<< HEAD
		if ( jQuery.isFunction( value ) ) {
=======
		if ( isFunction( value ) ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

<<<<<<< HEAD
		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

=======
		classes = classesToArray( value );

		if ( classes.length ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
<<<<<<< HEAD
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
=======
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

<<<<<<< HEAD
			if ( type === "string" ) {
=======
			if ( isValidValue ) {
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
<<<<<<< HEAD
				classNames = value.match( rnothtmlwhite ) || [];
=======
				classNames = classesToArray( value );
>>>>>>> 0f49b6b741d7ccdaba3978328fe07a9401b1b6cd

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );

} );
