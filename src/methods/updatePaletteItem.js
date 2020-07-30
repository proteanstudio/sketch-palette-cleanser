import sketch from 'sketch';
import buildPaletteCell, { buildCellText } from './buildPaletteCell';
import { BASE_CELL_HEIGHT } from '../utils/constants';
import loc from '../utils/loc';

const {
    find,
    Settings,
    UI: { message },
} = sketch;

function updatePaletteCell(type, color, { usages, thicknesses }) {
    const parentLayerName = `${type}: ${color}`;
    const parentLayer = find(`[name="${parentLayerName}"]`)[0];
    const colorLayer = parentLayer.layers[parentLayer.layers.length - 2];
    const usageLayer = parentLayer.layers[parentLayer.layers.length - 1];

    const textLayers = buildCellText(color, usages, thicknesses, colorLayer.frame);

    colorLayer.remove();
    usageLayer.remove();
    parentLayer.layers.push(...textLayers);
}

function addNewCell(color, type, cellToRemove, document) {
    const hasCellToRemove = !!cellToRemove;
    let parentLayer = find(`[name="layer_${type}s"]`)[0];

    const lastLayer = parentLayer.layers[parentLayer.layers.length - 1];

    let y = lastLayer.frame.y + BASE_CELL_HEIGHT;
    if (hasCellToRemove) {
        y = cellToRemove.frame.y;
        cellToRemove.remove();
    } else {
        if (type === 'fill') {
            const layerBorders = find('[name="layer_borders"]')[0];
            layerBorders.frame.y += BASE_CELL_HEIGHT;
        }

        const paletteBoardId = Settings.documentSettingForKey(document, 'palette-board-id');
        find(`[id="${paletteBoardId}"]`)[0].frame.height += BASE_CELL_HEIGHT;
    }

    parentLayer.layers.push(buildPaletteCell(color, type, { y }));
}

function cleanlyRemoveCell(cellToRemove, type) {
    if (!cellToRemove) {
        return;
    }

    let parentLayer = find(`[name="layer_${type}s"]`)[0];

    const lastLayer = parentLayer.layers[parentLayer.layers.length - 1];
    const isLastLayer = cellToRemove === lastLayer;

    if (!isLastLayer) {
        lastLayer.frame.y = cellToRemove.frame.y;
    }

    if (type === 'fill') {
        const layerBorders = find('[name="layer_borders"]')[0];
        layerBorders.frame.y -= cellToRemove.frame.height;
    }

    cellToRemove.remove();
}

export default function updatePaletteItem(document, previousColor, updatedColor, updatedThickness, type) {
    let sharedColors = Settings.documentSettingForKey(document, `shared-${type}s`);
    let layerColors = Settings.documentSettingForKey(document, `layer-${type}s`);
    let cellToRemove;

    if (sharedColors[previousColor]) {
        sharedColors[previousColor].usages--;
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

    if (sharedColors[updatedColor]) {
        sharedColors[updatedColor].usages++;
        updatePaletteCell(type, updatedColor, sharedColors[updatedColor]);
    } else if (layerColors[updatedColor]) {
        layerColors[updatedColor].usages++;
        updatePaletteCell(type, updatedColor, layerColors[updatedColor]);
    } else {
        const colorData = {
            usages: 1,
            thicknesses: type === 'border' ? [updatedThickness] : undefined,
        };
        layerColors[updatedColor] = colorData;
        addNewCell([updatedColor, colorData], type, cellToRemove, document);
        cellToRemove = undefined;
    }

    cleanlyRemoveCell(cellToRemove, type);

    Settings.setDocumentSettingForKey(document, `shared-${type}s`, sharedColors);
    Settings.setDocumentSettingForKey(document, `layer-${type}s`, layerColors);
    message(loc('messages.paletteUpdated'));
}
