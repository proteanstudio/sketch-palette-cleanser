export default function findCurrentStyleFromPath(path, document, styleType) {
    const [pageIndex, abIndex, ...layerAndStyleIndeces] = path.match(/\d+/g);

    let currentStyle = layerAndStyleIndeces.reduce((acc, itemIndex, index, arr) => {
        if (index === arr.length - 1) {
            return acc.style[`${styleType}s`][itemIndex];
        }
        return acc.layers[itemIndex];
    }, document.pages[pageIndex].layers[abIndex]);

    if (currentStyle.enabled) {
        return {
            color: currentStyle.color,
            thickness: currentStyle.thickness,
        };
    }

    return {
        color: undefined,
        thickness: undefined,
    };
}
