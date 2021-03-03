import sketch from 'sketch';
import buildSectionGroup from './buildSectionGroup';
import addLayerIfPresent from '../sharedMethods/addLayerIfPresent';
import buildColumnGroup from './buildColumnGroup';
import loc from '../../utils/loc';

const { Settings, Rectangle, Artboard } = sketch;

export default function buildPaletteBoard(document, colorVars, sharedFills, layerFills, sharedBorders, layerBorders) {
    const artboards = document.pages.map((page) => page.layers).flat();

    const paletteBoardId = Settings.documentSettingForKey(document, 'palette-board-id');
    let paletteBoard = artboards.filter((ab) => ab.id === paletteBoardId)[0];

    if (!paletteBoard) {
        const firstPage = document.pages[0];
        const lowestY = firstPage.layers.map((layer) => layer.frame.y).sort((a, b) => a - b)[0];
        const lowestX = firstPage.layers.map((layer) => layer.frame.x).sort((a, b) => a - b)[0];
        const boardFrame = new Rectangle(lowestX - 2000, lowestY, 1475, 2000);
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

    const colorVarsGroup = buildColumnGroup(
        'color-variables',
        [75, 75, 400, coordinates.y],
        loc('colors.title'),
        loc('colors.subtitle')
    );

    const cVCGroup = buildSectionGroup(coordinates, 'color-var-colors', '', colorVars, 'variable');

    addLayerIfPresent(cVCGroup, colorVarsGroup);

    const sharedStylesGroup = buildColumnGroup(
        'shared-palette-styles',
        [550, 75, 400, coordinates.y],
        loc('shared.title'),
        loc('shared.subtitle')
    );

    const colorVarsY = coordinates.y;
    coordinates.y = 150;

    const sLFCGroup = buildSectionGroup(coordinates, 'shared-layer-fills', loc('fillsHeader'), sharedFills);

    const sLBCGroup = buildSectionGroup(
        coordinates,
        'shared-layer-borders',
        loc('bordersHeader'),
        sharedBorders,
        'border'
    );

    addLayerIfPresent(sLFCGroup, sharedStylesGroup);
    addLayerIfPresent(sLBCGroup, sharedStylesGroup);

    let uniqueStylesX = 1025;
    const hasSharedColors = sharedStylesGroup.layers.length > 2;

    if (!hasSharedColors) {
        uniqueStylesX = 550;
        paletteBoard.frame.width = 1000;
    }

    const uniqueStylesGroup = buildColumnGroup(
        'unique-palette-styles',
        [uniqueStylesX, 75, 350, coordinates.y],
        loc('unique.title'),
        loc('unique.subtitle')
    );

    const sharedStylesY = coordinates.y;
    coordinates.y = 150;

    const lFGroup = buildSectionGroup(coordinates, 'layer-fills', loc('fillsHeader'), layerFills);

    const lBGroup = buildSectionGroup(coordinates, 'layer-borders', loc('bordersHeader'), layerBorders, 'border');

    addLayerIfPresent(lFGroup, uniqueStylesGroup);
    addLayerIfPresent(lBGroup, uniqueStylesGroup);

    paletteBoard.layers = [colorVarsGroup, sharedStylesGroup, uniqueStylesGroup].filter(
        (group) => !!group && group.layers.length > 2
    );

    paletteBoard.frame.height = Math.max(colorVarsY, sharedStylesY, coordinates.y) + 100;

    document.pages[0].layers.unshift(paletteBoard);
}
