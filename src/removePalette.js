import sketch from 'sketch';
import { PALETTE_NAME } from './utils/constants';

export default function removePalette() {
    const document = sketch.Document.getSelectedDocument();

    const artboards = document.pages.map((page) => page.layers).flat();

    let paletteBoard = artboards.filter((ab) => ab.name === PALETTE_NAME)[0];

    paletteBoard && paletteBoard.remove();

    Settings.setDocumentSettingForKey(document, 'color-path-dictionary', undefined);
    Settings.setDocumentSettingForKey(document, 'shared-fills', undefined);
    Settings.setDocumentSettingForKey(document, 'shared-borders', undefined);
    Settings.setDocumentSettingForKey(document, 'layer-fills', undefined);
    Settings.setDocumentSettingForKey(document, 'layer-borders', undefined);
}
