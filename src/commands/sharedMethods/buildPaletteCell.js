import sketch from 'sketch';
import { BASE_CELL_HEIGHT } from '../../utils/constants';

export function buildCellSharedKeyText(sharedKeys, localCoordinates, cellHeight) {
    let colorLayers = [];
    if (Array.isArray(sharedKeys)) {
        sharedKeys.forEach((key) => {
            colorLayers.push({
                type: sketch.Types.Text,
                text: key,
                style: {
                    fontSize: 17,
                    fontWeight: 12,
                    fontFamily: 'PT Sans',
                    kerning: null,
                    paragraphSpacing: 0,
                    textColor: '#000000ff',
                    borders: [],
                },
                frame: new sketch.Rectangle(90, localCoordinates.y, 270, 20),
                fixedWidth: true,
            });

            const charLimit = 33; // May need adjustments
            const yAdjustment = Math.ceil(key.length / charLimit) * 20;
            localCoordinates.y += yAdjustment;
            cellHeight += yAdjustment;
        });
    }

    localCoordinates.y += 7;
    return colorLayers;
}

export function buildCellText(color, usages, thicknesses, localCoordinates) {
    const thicknessPrefix = thicknesses ? `${thicknesses.join('px, ')}px ` : '';
    const opacity = parseInt(color.substring(7, 9), 16) / 255;
    const opacitySuffix = opacity < 1 ? ` (${opacity.toFixed(2).substring(1)} opacity)` : '';
    const usagesString = `${usages} use${usages !== 1 ? 's' : ''}`;

    return [
        {
            type: sketch.Types.Text,
            text: `${thicknessPrefix}${color.substring(0, 7)}${opacitySuffix}`,
            frame: new sketch.Rectangle(90, localCoordinates.y, 300, 20),
            style: {
                fontSize: 17,
                fontFamily: 'PT Sans',
                kerning: null,
                paragraphSpacing: 0,
                textColor: '#000000ff',
                borders: [],
            },
        },
        {
            type: sketch.Types.Text,
            text: usagesString,
            frame: new sketch.Rectangle(90, localCoordinates.y + 20, 300, 20),
            style: {
                fontSize: 17,
                fontFamily: 'PT Sans',
                kerning: null,
                paragraphSpacing: 0,
                textColor: '#000000ff',
                borders: [],
            },
        },
    ]; // currently need to be last layers in group
}

export default function buildPaletteCell([color, { sharedKeys, usages, thicknesses }], type, coordinates) {
    let colorLayers = [];
    const colorArr = [{ color }];
    let colorFills = [];
    let colorBorders = [];
    if (type === 'border') {
        colorBorders = colorArr;
    } else {
        colorFills = colorArr;
    }

    if (color.includes('#ffffff')) {
        let whiteBg = {
            type: sketch.Types.ShapePath,
            shapeType: sketch.ShapePath.ShapeType.Rectangle,
            style: {
                fills: [
                    {
                        color: '#000000',
                    },
                ],
                borders: [],
            },
            frame: new sketch.Rectangle(0, 0, 80, 80),
        };
        colorLayers.push(whiteBg);
    }
    let localCoordinates = {
        x: 10,
        y: 10,
    };

    const colorShape = {
        type: sketch.Types.ShapePath,
        shapeType: sketch.ShapePath.ShapeType.Oval,
        style: {
            fills: colorFills,
            borders: colorBorders,
            borderOptions: {
                startArrowHead: 'FilledCircle',
                endArrowHead: 'FilledCircle',
            },
        },
        frame: new sketch.Rectangle(localCoordinates.x, localCoordinates.y, 60, 60),
    };
    colorLayers.push(colorShape);

    let cellHeight = BASE_CELL_HEIGHT;

    const sharedKeyLayers = buildCellSharedKeyText(sharedKeys, localCoordinates, cellHeight);

    const textLayers = buildCellText(color, usages, thicknesses, localCoordinates, sharedKeys);
    colorLayers.push(...sharedKeyLayers, ...textLayers);

    const colorGroup = new sketch.Group({
        name: `${type}: ${color}`,
        layers: colorLayers,
    });
    colorGroup.frame.y = coordinates.y;

    coordinates.y += cellHeight;
    return colorGroup;
}
