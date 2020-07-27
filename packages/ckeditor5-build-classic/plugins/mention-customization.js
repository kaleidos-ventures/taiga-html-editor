import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import MouseObserver from '@ckeditor/ckeditor5-engine/src/view/observer/mouseobserver';

export default class MentionCustomization extends Plugin {
  init() {
    const editor = this.editor;
    const viewDocument = this.editor.editing.view.document;

    editor.editing.view.addObserver(MouseObserver);

    editor.conversion.for('upcast').elementToAttribute({
      view: {
        name: 'a',
        key: 'data-mention',
        classes: 'mention',
        attributes: {
          href: true,
        },
      },
      model: {
        key: 'mention',
        value: (viewItem) => {
          const mentionAttribute = editor.plugins.get('Mention').toMentionAttribute(viewItem, {
            link: viewItem.getAttribute('href'),
          });

          return mentionAttribute;
        },
      },
      converterPriority: 'high',
    });

    editor.conversion.for('downcast').attributeToElement({
      model: 'mention',
      view: (modelAttributeValue, { writer }) => {
        if (!modelAttributeValue || !modelAttributeValue.id) {
          return;
		    }

        if (modelAttributeValue.id.startsWith(':')) {
          return writer.createAttributeElement('span', {
            class: 'mention',
          }, {
            priority: 20,
            id: modelAttributeValue.uid,
          });
        } else {
          return writer.createAttributeElement('a', {
            class: 'mention',
            href: modelAttributeValue.link,
            target: '_blank',
          }, {
            priority: 20,
            id: modelAttributeValue.uid,
          });
        }

      },
      converterPriority: 'high',
    });

    this.listenTo(viewDocument, 'click', () => {
      const selection = viewDocument.selection;
      const position = selection.getFirstPosition();
      const mention = position.getAncestors().find((ancestor) => this.isMentionLink(ancestor));

      if (mention) {
        window.open(mention.getAttribute('href'));
      }
    });
  }

  isMentionLink(node) {
    return node.is('attributeElement') && node.hasClass('mention') && node.getAttribute('href');
  }
}
