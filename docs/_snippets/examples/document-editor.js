/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals console, window, document */

import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document/src/ckeditor';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config';

DecoupledEditor
	.create( document.querySelector( '.document-editor__editable' ), {
		extraPlugins: [ ImageResize ],
		cloudServices: CS_CONFIG,
		image: {
			toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ]
		}
	} )
	.then( editor => {
		const toolbarContainer = document.querySelector( '.document-editor__toolbar' );

		toolbarContainer.appendChild( editor.ui.view.toolbar.element );

		window.editor = editor;
	} )
	.catch( err => {
		console.error( err );
	} );
