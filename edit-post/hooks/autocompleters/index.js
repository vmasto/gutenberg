/**
 * External dependencies.
 */
import { find } from 'lodash';

/**
 * WordPress dependencies.
 */
import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

// Export for unit test
export function getBlockOptions( query ) {
	const editor = select( 'core/editor' );
	const isInitialQuery = ! query;

	// TODO: Fetch reusable blocks if necessary (they aren't fetched initially)
	return isInitialQuery ?
		// Before we have a query, offer frecent blocks as a sensible default.
		editor.getFrecentInserterItems() :
		editor.getInserterItems();
}

// Export for unit test
export function getBlockCompletion( inserterItem ) {
	const { name, initialAttributes } = inserterItem;
	return {
		action: 'replace',
		value: createBlock( name, initialAttributes ),
	};
}

// Export for unit test
export function addReusableBlocksCompletion( completers ) {
	const blocksCompleter = find( completers, c => 'blocks' === c.name );
	if ( blocksCompleter ) {
		blocksCompleter.options = getBlockOptions;
		blocksCompleter.getOptionCompletion = getBlockCompletion;
	}

	return completers;
}

addFilter(
	'blocks.Autocomplete.completers',
	'core/edit-post/autocompleters/shared-blocks',
	addReusableBlocksCompletion
);
