/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { withContext } from '@wordpress/components';
import { deprecated } from '@wordpress/utils';

export default withContext( 'editor' )(
	( editor, ownProps ) => {
		if ( ownProps.colors || ownProps.disableCustomColors ) {
			deprecated( 'Passing props "colors" or "disableCustomColors" to @blocks/PanelColor or @blocks/ColorPalette', {
				version: '2.9',
				alternative: 'remove the props and rely on the editor context or use @wordpress/PanelColor and @wordpress/ColorPalette',
			} );
		}
		const colors = ownProps.colors || editor.colors;
		const disableCustomColors = ownProps.disableCustomColors || editor.disableCustomColors;
		return {
			colors,
			disableCustomColors,
			hasColorsToChoose: ! isEmpty( colors ) || ! disableCustomColors,
		};
	}
);
