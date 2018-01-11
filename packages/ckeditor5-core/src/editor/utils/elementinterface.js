/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import getDataFromElement from '@ckeditor/ckeditor5-utils/src/dom/getdatafromelement';
import setDataInElement from '@ckeditor/ckeditor5-utils/src/dom/setdatainelement';

/**
 * @module core/editor/utils/elementinterface
 */

/**
 * Interface provides method for setting and getting data from/to element on which editor has been initialized.
 *
 * @mixin ElementInterface
 * @implements module:core/editor/utils/elementinterface~Element
 */
const ElementInterface = {
	/**
	 * The element on which the editor has been initialized.
	 *
	 * @readonly
	 * @member {HTMLElement} #element
	 */
	element: null,

	/**
	 * Updates the {@link #element editor element}'s content with the data.
	 *
	 * @method #updateElement
	 */
	updateElement() {
		setDataInElement( this.element, this.data.get() );
	},

	/**
	 * Loads the data from the {@link #element editor element} to the main root.
	 *
	 * @method #loadDataFromElement
	 */
	loadDataFromElement() {
		this.data.set( getDataFromElement( this.element ) );
	}
};

export default ElementInterface;

/**
 * Interface representing classes which mix in {@link module:core/editor/utils/elementinterface~ElementInterface}.
 *
 * @interface Element
 */
