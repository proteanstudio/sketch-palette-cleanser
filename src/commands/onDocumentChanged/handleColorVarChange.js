import sketch from 'sketch';
import findCurrentStyleFromPath from '../sharedMethods/findCurrentStyleFromPath';
import updatePaletteItem from './updatePaletteItem';

const { Settings } = sketch;

export default function handleColorVarChange(changePath, document, colorVarChangePath, colorPathDict) {
    const [index] = colorVarChangePath.match(/\d+/g);
    const newColor = Array.from(document.swatches)[index].color;
    const oldColor = colorPathDict[changePath];

    let { [oldColor]: value, ...colorVars } = Settings.documentSettingForKey(document, 'color-variables');
    let layerFills = Settings.documentSettingForKey(document, 'layer-fills');
    let layerBorders = Settings.documentSettingForKey(document, 'layer-borders');
    const type = changePath.includes('border') ? 'border' : 'fill';

    const matchingPaths = Object.entries(colorPathDict).filter(([path, color]) => color === oldColor);

    const detachedMatchingPaths = {
        fills: {
            color: oldColor,
            usages: 0,
        },
        borders: {
            color: oldColor,
            usages: 0,
            thicknesses: [],
        },
    };

    matchingPaths.forEach(([path]) => {
        const styleType = path.includes('border') ? 'border' : 'fill';
        const { color: currentColor, thickness: currentThickness } = findCurrentStyleFromPath(
            path,
            document,
            styleType
        );

        if (currentColor === newColor) {
            colorPathDict[path] = newColor;
        } else {
            value.usages--;
            const styleObj = detachedMatchingPaths[`${styleType}s`];
            styleObj.usages++;

            if (styleType === 'border' && !styleObj.thicknesses.includes(currentThickness)) {
                styleObj.thicknesses.push(currentThickness);
            }
        }
    });

    // TODO: if any remain, attempt to add shared color item
    if (colorVars[newColor]) {
        colorVars[newColor].sharedKeys.concat(value.sharedKeys);
        colorVars[newColor].usages += value.usages;
    } else {
        colorVars[newColor] = value;
    }

    Settings.setDocumentSettingForKey(document, 'color-variables', colorVars);
    Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDict);
    updatePaletteItem(document, oldColor, newColor, undefined, type, false, true);

    if (detachedMatchingPaths.fills.usages > 0) {
        layerFills[oldColor] = detachedMatchingPaths.fills;
        Settings.setDocumentSettingForKey(document, 'layer-fills', layerFills);
        updatePaletteItem(document, '', oldColor, undefined, 'fill', false, false);
    }

    if (detachedMatchingPaths.borders.usages > 0) {
        layerBorders[oldColor] = detachedMatchingPaths.borders;
        Settings.setDocumentSettingForKey(document, 'layer-borders', layerBorders);
        updatePaletteItem(document, '', oldColor, detachedMatchingPaths.borders.thicknesses[0], 'border', false, false);
    }
}
