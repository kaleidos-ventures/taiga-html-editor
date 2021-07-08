/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

import MentionCustomization from '../plugins/mention-customization';
import AttachFile from '../plugins/attach-file';

import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';

// import '../theme/styles.css'

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Strikethrough,
	Code,
	CodeBlock,
	Mention,
	MentionCustomization,
	RemoveFormat,
	AttachFile,
	TodoList,
	HorizontalLine,
	ImageInsert,
	LinkImage,
	TextPartLanguage
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	alignment: {
		options: [ 'left', 'right' ]
	},
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'link',
			'todoList',
			'bulletedList',
			'numberedList',
			'alignment',
			'|',
			'imageInsert',
			'blockQuote',
			'insertTable',
			'codeBlock',
			'removeFormat',
			'horizontalLine',
			'undo',
			'redo',
			'textPartLanguage'
		]
	},
	image: {
		toolbar: [
			'imageTextAlternative',
			'|',
			'linkImage'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow'
		]
	},
	language: {
		content: 'en',
		textPartLanguage: [
			{ title: 'العربية', languageCode: 'ar' },
			{ title: 'Deutsch', languageCode: 'de' },
			{ title: 'English', languageCode: 'en' },
			{ title: 'Español', languageCode: 'es' },
			{ title: 'Français', languageCode: 'fr' },
			{ title: '日本語', languageCode: 'ja' },
			{ title: '한국어', languageCode: 'ko' },
			{ title: 'Português', languageCode: 'pt' },
			{ title: 'русский', languageCode: 'ru' },
			{ title: '中文', languageCode: 'zh' }
		]
	}
};
