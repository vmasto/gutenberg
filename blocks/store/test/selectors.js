/**
 * External dependencies
 */
import deepFreeze from 'deep-freeze';

/**
 * Internal dependencies
 */
import { getPreview } from '../selectors';

describe( 'getPreview()', () => {
	it( 'returns preview stored for url', () => {
		let state = deepFreeze( {
			embedPreviews: {},
		} );
		expect( getPreview( state, 'http://example.com/' ) ).toBe( undefined );

		state = deepFreeze( {
			embedPreviews: {
				'http://example.com/': { data: 42 },
			},
		} );
		expect( getPreview( state, 'http://example.com/' ) ).toEqual( { data: 42 } );
	} );
} );
