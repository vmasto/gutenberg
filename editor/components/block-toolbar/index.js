/**
 * External dependencies
 */
import { connect } from 'react-redux';

/**
 * WordPress Dependencies
 */
import { BlockControls, BlockFormatControls } from '@wordpress/blocks';

/**
 * Internal Dependencies
 */
import './style.scss';
import BlockSwitcher from '../block-switcher';
import { getBlockMode, getSelectedBlock } from '../../store/selectors';

function BlockToolbar( { block, mode } ) {
	if ( ! block || ! block.isValid || mode !== 'visual' ) {
		return null;
	}

	return (
		<div className="editor-block-toolbar">
			<BlockSwitcher uids={ [ block.uid ] } />
			<BlockControls.Slot />
			<BlockFormatControls.Slot />
		</div>
	);
}

export default connect( ( state ) => {
	const block = getSelectedBlock( state );

	return ( {
		block,
		mode: block ? getBlockMode( state, block.uid ) : null,
	} );
} )( BlockToolbar );
