import sketch from 'sketch';
import roundThickness from '../sharedMethods/roundThickness';

export default function parseLayers(document) {
    let layerFills = {};
    let layerBorders = {};
    const colorPathDictionary = document.pages.reduce((acc, page, pageIndex) => {
        const paletteBoardId = sketch.Settings.documentSettingForKey(document, 'palette-board-id');
        page.layers
            .filter((ab) => ab.id !== paletteBoardId)
            .forEach((ab, abIndex) => {
                let layerIndeces = [];
                function layerLoop(layer, layerIndex) {
                    if (!layer || !layer.style) {
                        return;
                    }

                    layer.style.fills.forEach((fill, fillIndex) => {
                        const { color, enabled } = fill;
                        if (color && enabled) {
                            const additionalLayerPath = layerIndeces.reduce(
                                (acc, index) => `${acc}.layers[${index}]`,
                                ''
                            );
                            const path = `pages[${pageIndex}].layers[${
                                abIndex + 1
                            }]${additionalLayerPath}.layers[${layerIndex}].style.fills[${fillIndex}].color`;
                            acc[path] = color;

                            if (layerFills[color]) {
                                layerFills[color].usages++;
                                return;
                            }
                            layerFills[color] = {
                                usages: 1,
                            };
                        }
                    });

                    layer.style.borders.forEach((border, borderIndex) => {
                        const { color, thickness, enabled } = border;
                        if (color && enabled) {
                            const additionalLayerPath = layerIndeces.reduce(
                                (acc, index) => `${acc}.layers[${index}]`,
                                ''
                            );
                            const path = `pages[${pageIndex}].layers[${
                                abIndex + 1
                            }]${additionalLayerPath}.layers[${layerIndex}].style.borders[${borderIndex}].color`;
                            acc[path] = color;

                            if (layerBorders[color]) {
                                if (!layerBorders[color].thicknesses.includes(thickness)) {
                                    layerBorders[color].thicknesses.push(roundThickness(thickness));
                                }
                                layerBorders[color].usages++;
                                return;
                            }
                            layerBorders[color] = {
                                usages: 1,
                                thicknesses: [roundThickness(thickness)],
                            };
                        }
                    });

                    if (Array.isArray(layer.layers)) {
                        const storedIndeces = [...layerIndeces];
                        layerIndeces.push(layerIndex);
                        layer.layers.forEach(layerLoop);
                        layerIndeces = storedIndeces;
                    }
                }

                Array.isArray(ab.layers) && ab.layers.forEach(layerLoop);
            });

        return acc;
    }, {});

    return {
        colorPathDictionary,
        layerBorders,
        layerFills,
    };
}
