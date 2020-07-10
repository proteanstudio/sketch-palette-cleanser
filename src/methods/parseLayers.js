export default function parseLayers(document, PALETTE_NAME) {
    let layerFills = {};
    let layerBorders = {};
    const colorPathDictionary = document.pages.reduce((acc, page, pageIndex) => {
        page.layers
            .filter((ab) => ab.name !== PALETTE_NAME)
            .forEach((ab, abIndex) => {
                let layerIndeces = [];
                function layerLoop(layer, layerIndex) {
                    if (!layer || !layer.style) {
                        return;
                    }

                    layer.style.fills.forEach((fill, fillIndex) => {
                        const { color } = fill;
                        if (color) {
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
                        const { color, thickness } = border;
                        if (color) {
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
                                    layerBorders[color].thicknesses.push(thickness);
                                }
                                layerBorders[color].usages++;
                                return;
                            }
                            layerBorders[color] = {
                                usages: 1,
                                thicknesses: [thickness],
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
