import sketch from 'sketch';
import buildPaletteCell from '../sharedMethods/buildPaletteCell';

export default function buildSectionGroup(coordinates, name, label, colorDict, type = 'fill') {
    const colors = Object.entries(colorDict);
    if (colors.length === 0) return;

    let layers = [];

    if (label) {
        layers = [
            {
                type: sketch.Types.Text,
                text: label,
                style: {
                    fontSize: 30,
                    fontWeight: 12,
                    fontFamily: 'PT Sans',
                    kerning: null,
                    paragraphSpacing: 0,
                    textColor: '#000000ff',
                    borders: [],
                },
                frame: new sketch.Rectangle(0, coordinates.y, 300, 70),
            },
            {
                type: sketch.Types.ShapePath,
                shapeType: sketch.ShapePath.ShapeType.Rectangle,
                style: {
                    fills: [],
                    borders: [
                        {
                            color: '#bcbcbc',
                            thickness: 1,
                        },
                    ],
                },
                frame: new sketch.Rectangle(0, coordinates.y + 40, 350, 1),
            },
        ];
    }

    coordinates.y += 52;

    colors.forEach((color) => {
        layers.push(buildPaletteCell(color, type, coordinates));
    });

    const group = new sketch.Group({ name, layers });
    coordinates.y += 30;
    return group;
}
