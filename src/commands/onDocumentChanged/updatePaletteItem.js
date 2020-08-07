import sketch from 'sketch';
import buildPaletteCell, { buildCellText, buildCellSharedKeyText } from '../sharedMethods/buildPaletteCell';
import { BASE_CELL_HEIGHT } from '../../utils/constants';
import loc from '../../utils/loc';

const {
    find,
    Settings,
    UI: { message },
} = sketch;

function setArtboardHeight(document) {
    const sharedStyleRefLayer = find('[name="shared_layer_borders"]')[0] || find('[name="shared_layer_fills"]')[0];

    const lowestSharedCell = sharedStyleRefLayer
        ? sharedStyleRefLayer.layers.map((layer) => layer.frame.y + layer.frame.height).sort((a, b) => b - a)[0] +
          sharedStyleRefLayer.frame.y
        : 0;

    const uniqueStyleRefLayer = find('[name="layer_borders"]')[0] || find('[name="layer_fills"]')[0];
    const lowestUniqueCell = uniqueStyleRefLayer
        ? uniqueStyleRefLayer.layers.map((layer) => layer.frame.y + layer.frame.height).sort((a, b) => b - a)[0] +
          uniqueStyleRefLayer.frame.y
        : 0;

    const bottom = Math.max(lowestSharedCell, lowestUniqueCell) + 200;

    const paletteBoardId = Settings.documentSettingForKey(document, 'palette-board-id');
    find(`[id="${paletteBoardId}"]`)[0].frame.height = bottom;
}

function updatePaletteCell(type, color, { usages, thicknesses, sharedKeys }) {
    const parentLayerName = `${type}: ${color}`;
    const parentLayer = find(`[name="${parentLayerName}"]`)[0];

    Array.from(parentLayer.layers).forEach((layer, index) => {
        index > 0 && layer.remove();
    });

    const localCoordinates = { x: 10, y: 10 };
    const sharedKeyLayers = buildCellSharedKeyText(sharedKeys, localCoordinates, parentLayer.frame.height);

    const textLayers = buildCellText(color, usages, thicknesses, localCoordinates);

    parentLayer.layers.push(...sharedKeyLayers, ...textLayers);
}

function addNewCell(color, type, cellToRemove, document, isNewSharedStyle) {
    const hasCellToRemove = !!cellToRemove;
    const layerStylePrefix = isNewSharedStyle ? 'shared_layer' : 'layer';
    let parentLayer = find(`[name="${layerStylePrefix}_${type}s"]`)[0];

    const lowestLayerY = parentLayer.layers.map((layer) => layer.frame.y).sort((a, b) => b - a)[0];

    let y = lowestLayerY + BASE_CELL_HEIGHT;
    if (hasCellToRemove) {
        y = isNewSharedStyle ? y : cellToRemove.frame.y;
        cleanlyRemoveCell(cellToRemove, type, isNewSharedStyle, document);
    }

    if (!hasCellToRemove || isNewSharedStyle) {
        if (type === 'fill') {
            const layerBorders = find(`[name="${layerStylePrefix}_borders"]`)[0];
            layerBorders.frame.y += BASE_CELL_HEIGHT;
        }

        setArtboardHeight(document);
    }

    parentLayer.layers.push(buildPaletteCell(color, type, { y }));
}

function cleanlyRemoveCell(cellToRemove, type, shiftLayers, document) {
    if (!cellToRemove) {
        return;
    }

    if (shiftLayers) {
        let parentLayer = find(`[name="layer_${type}s"]`)[0];

        const lowestLayer = Array.from(parentLayer.layers).sort((a, b) => b.frame.y - a.frame.y);

        const isLowesttLayer = cellToRemove === lowestLayer;

        if (!isLowesttLayer) {
            lowestLayer[0].frame.y = cellToRemove.frame.y;
        }

        if (type === 'fill') {
            const layerBorders = find('[name="layer_borders"]')[0];
            layerBorders.frame.y -= cellToRemove.frame.height;
        }
    }

    cellToRemove.remove();
    setArtboardHeight(document);
}

export default function updatePaletteItem(
    document,
    previousColor,
    updatedColor,
    updatedThickness,
    type,
    isNewSharedStyle = false
) {
    let sharedColors = Settings.documentSettingForKey(document, `shared-${type}s`);
    let layerColors = Settings.documentSettingForKey(document, `layer-${type}s`);
    let cellToRemove;

    if (sharedColors[previousColor] && !isNewSharedStyle) {
        sharedColors[previousColor].usages > 0 && sharedColors[previousColor].usages--;
        updatePaletteCell(type, previousColor, sharedColors[previousColor]);
    } else if (layerColors[previousColor]) {
        if (layerColors[previousColor].usages > 1) {
            layerColors[previousColor].usages--;
            updatePaletteCell(type, previousColor, layerColors[previousColor]);
        } else {
            delete layerColors[previousColor];
            cellToRemove = find(`[name="${type}: ${previousColor}"]`)[0];
        }
    }

    const sharedCellExists = !!find(`[name="${type}: ${updatedColor}"]`, find(`[name="shared_layer_${type}s"]`)[0])[0];

    if (sharedColors[updatedColor] && sharedCellExists) {
        sharedColors[updatedColor].usages++;
        updatePaletteCell(type, updatedColor, sharedColors[updatedColor]);
    } else if (layerColors[updatedColor]) {
        layerColors[updatedColor].usages++;
        updatePaletteCell(type, updatedColor, layerColors[updatedColor]);
    } else if (updatedColor) {
        let colorData;
        if (isNewSharedStyle) {
            colorData = sharedColors[updatedColor];
        } else {
            colorData = {
                usages: 1,
                thicknesses: type === 'border' ? [updatedThickness] : undefined,
            };
            layerColors[updatedColor] = colorData;
        }

        addNewCell([updatedColor, colorData], type, cellToRemove, document, isNewSharedStyle);
        cellToRemove = undefined;
    }

    cleanlyRemoveCell(cellToRemove, type, true, document);

    Settings.setDocumentSettingForKey(document, `shared-${type}s`, sharedColors);
    Settings.setDocumentSettingForKey(document, `layer-${type}s`, layerColors);
    message(loc('messages.paletteUpdated'));
}
