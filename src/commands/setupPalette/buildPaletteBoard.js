import sketch from 'sketch';
import buildSectionGroup from './buildSectionGroup';
import addLayerIfPresent from '../sharedMethods/addLayerIfPresent';
import buildColumnGroup from './buildColumnGroup';
import loc from '../../utils/loc';

const { Settings, Rectangle, Artboard } = sketch;

export default function buildPaletteBoard(document, sharedFills, layerFills, sharedBorders, layerBorders) {
    const artboards = document.pages.map((page) => page.layers).flat();

    const paletteBoardId = Settings.documentSettingForKey(document, 'palette-board-id');
    let paletteBoard = artboards.filter((ab) => ab.id === paletteBoardId)[0];

    if (!paletteBoard) {
        const firstPage = document.pages[0];
        const lowestY = firstPage.layers.map((layer) => layer.frame.y).sort((a, b) => a - b)[0];
        const lowestX = firstPage.layers.map((layer) => layer.frame.x).sort((a, b) => a - b)[0];
        const boardFrame = new Rectangle(lowestX - 2000, lowestY, 1000, 2000);
        paletteBoard = new Artboard({
            name: loc('paletteName'),
            flowStartPoint: true,
            frame: boardFrame,
        });

        Settings.setDocumentSettingForKey(document, 'palette-board-id', paletteBoard.id);
    }

    let coordinates = {
        x: 0,
        y: 150,
    };

    const sharedStylesGroup = buildColumnGroup(
        'shared-palette-styles',
        [75, 75, 400, coordinates.y],
        loc('shared.title'),
        loc('shared.subtitle')
    );

    const sLFCGroup = buildSectionGroup(coordinates, 'shared_layer_fills', loc('fillsHeader'), sharedFills);

    const sLBCGroup = buildSectionGroup(
        coordinates,
        'shared_layer_borders',
        loc('bordersHeader'),
        sharedBorders,
        'border'
    );

    addLayerIfPresent(sLFCGroup, sharedStylesGroup);
    addLayerIfPresent(sLBCGroup, sharedStylesGroup);

    const uniqueStylesGroup = buildColumnGroup(
        'unique-palette-styles',
        [550, 75, 350, coordinates.y],
        loc('unique.title'),
        loc('unique.subtitle')
    );

    const sharedStylesY = coordinates.y;
    coordinates.y = 150;

    const lFGroup = buildSectionGroup(coordinates, 'layer_fills', loc('fillsHeader'), layerFills);

    const lBGroup = buildSectionGroup(coordinates, 'layer_borders', loc('bordersHeader'), layerBorders, 'border');

    addLayerIfPresent(lFGroup, uniqueStylesGroup);
    addLayerIfPresent(lBGroup, uniqueStylesGroup);

    paletteBoard.layers = [sharedStylesGroup, uniqueStylesGroup].filter((group) => !!group);

    paletteBoard.frame.height = Math.max(sharedStylesY, coordinates.y) + 100;

    document.pages[0].layers.unshift(paletteBoard);
}
