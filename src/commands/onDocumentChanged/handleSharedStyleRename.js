import sketch from 'sketch';
import updatePaletteItem from './updatePaletteItem';

const { Settings } = sketch;

export default function handleSharedStyleRename(changePath, document) {
    const [index] = changePath.match(/\d+/g);
    const sharedLayerStyles = Array.from(document.sharedLayerStyles);

    const sharedItem = sharedLayerStyles[index];

    const fill = sharedItem.style.fills[0];
    const border = sharedItem.style.borders[0];

    if (fill) {
        const sharedFillKeys = sharedLayerStyles
            .filter((shared) => shared.style.fills[0]?.color === fill.color)
            .map((shared) => shared.name);

        let sharedFillColors = Settings.documentSettingForKey(document, 'shared-fills');

        sharedFillColors[fill.color].sharedKeys = sharedFillKeys;

        Settings.setDocumentSettingForKey(document, 'shared-fills', sharedFillColors);
        updatePaletteItem(document, fill.color, fill.color, undefined, 'fill');
    }

    if (border) {
        const sharedBorderKeys = sharedLayerStyles
            .filter((shared) => shared.style.borders[0]?.color === border.color)
            .map((shared) => shared.name);

        let sharedBorderColors = Settings.documentSettingForKey(document, 'shared-borders');

        sharedBorderColors[border.color].sharedKeys = sharedBorderKeys;

        Settings.setDocumentSettingForKey(document, 'shared-borders', sharedBorderColors);
        updatePaletteItem(document, border.color, border.color, border.thickness, 'border');
    }
}
