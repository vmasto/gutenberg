/**
 * External dependencies
 */
import { omit } from 'lodash';

/**
 * WordPress dependencies
 */
import { PanelColor } from '@wordpress/components';

/**
 * Internal dependencies
 */
import ColorPalette from '../color-palette';
import withColorContext from '../with-color-context';

function ConditionalPanelColor( { title, hasColorsToChoose, value, ...props } ) {
	if ( ! hasColorsToChoose ) {
		return null;
	}
	return (
		<PanelColor title={ title } colorValue={ value }>
			<ColorPalette
				value={ value }
				{ ...omit( props, [ 'disableCustomColors', 'colors' ] ) }
			/>
		</PanelColor>
	);
}

export default withColorContext( ConditionalPanelColor );
