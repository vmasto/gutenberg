/**
 * Returns the embed for the given URL.
 *
 * @param {Object} state    Data state.
 * @param {string} url      Embedded URL.
 *
 * @return {Mixed} Undefined if the preview has not been fetched, false if the URL cannot be embedded, array of embed preview data if the preview has been fetched.
 */
export function getPreview( state, url ) {
	return state.embedPreviews[ url ];
}
