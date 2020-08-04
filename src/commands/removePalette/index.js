import sketch from 'sketch';

const { Document, Settings } = sketch;

export default function removePalette() {
    const document = Document.getSelectedDocument();

    const artboards = document.pages.map((page) => page.layers).flat();

    const paletteBoardId = Settings.documentSettingForKey(document, 'palette-board-id');

    const paletteBoard = artboards.filter((ab) => ab.id === paletteBoardId)[0];

    paletteBoard && paletteBoard.remove();

    Settings.setDocumentSettingForKey(document, 'palette-board-id', undefined);
    Settings.setDocumentSettingForKey(document, 'color-path-dictionary', undefined);
    Settings.setDocumentSettingForKey(document, 'shared-fills', undefined);
    Settings.setDocumentSettingForKey(document, 'shared-borders', undefined);
    Settings.setDocumentSettingForKey(document, 'layer-fills', undefined);
    Settings.setDocumentSettingForKey(document, 'layer-borders', undefined);
}
