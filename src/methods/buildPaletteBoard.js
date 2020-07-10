import sketch from 'sketch';
import buildSectionGroup from './buildSectionGroup';
import addLayerIfPresent from './addLayerIfPresent';
import buildColumnGroup from './buildColumnGroup';
import { PALETTE_NAME } from '../utils/constants';
import loc from '../utils/loc';

const { Rectangle, Artboard } = sketch;

export default function buildPaletteBoard(document, sharedFills, layerFills, sharedBorders, layerBorders) {
    const artboards = document.pages.map((page) => page.layers).flat();

    let paletteBoard = artboards.filter((ab) => ab.name === PALETTE_NAME)[0];

    if (!paletteBoard) {
        const boardFrame = new Rectangle(-4000, 0, 1000, 2000);
        paletteBoard = new Artboard({
            name: PALETTE_NAME,
            flowStartPoint: true,
            frame: boardFrame,
        });
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

    const sLBCGroup = buildSectionGroup(coordinates, 'shared_layer_borders', loc('bordersHeader'), sharedBorders, 'border');

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
