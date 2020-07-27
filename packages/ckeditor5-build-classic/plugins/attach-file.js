import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

export default class AttachFile extends Plugin {
  init() {
    const editor = this.editor;
    const imageTypes = editor.config.get('image.upload.types').map((type) => `image/${type}`);

    this.listenTo(editor.editing.view.document, 'clipboardInput', (evt, data) => {
      const files = Array.from(data.dataTransfer.files).filter((file) => {
        if (!file) {
          return false;
        }

        return !imageTypes.includes(file.type);
      });

	  if (!data.targetRanges) {
		  return
	  }

      const ranges = data.targetRanges.map((viewRange) => editor.editing.mapper.toModelRange(viewRange));

      editor.model.change((writerModel) => {
        writerModel.setSelection(ranges);

        if (files.length) {
          evt.stop();

          editor.model.enqueueChange('default', () => {
            const fileRepository = editor.plugins.get(FileRepository);

            files.forEach((file) => {
              const loader = fileRepository.createLoader(file);

              if (!loader) {
                return;
              }

              loader.upload().then((result) => {
                editor.model.change((writer) => {
                  const node = writer.createText(result.text, {
                    linkHref: result.default,
                  });

                  const position = editor.model.document.selection.getFirstPosition();

                  editor.model.insertContent(node, position);

                  const emptySpace = writer.createText(' ');
                  editor.model.insertContent(emptySpace, writer.createPositionAfter(node));

                  writer.setSelection(writer.createPositionAfter(emptySpace));
                });
              });
            });

          });
        }
      });
    });
  }
}
