import sketch from 'sketch';
import updatePaletteItem from './updatePaletteItem';

const { Settings } = sketch;

function addSharedStyle(fillColor, borderColor, sharedStyleId, document) {
    const fill = fillColor?.color;
    const border = borderColor?.color;

    const sharedItem = document.sharedLayerStyles.find((style) => style.id === sharedStyleId);

    let sharedFillColors = Settings.documentSettingForKey(document, 'shared-fills');
    let sharedBorderColors = Settings.documentSettingForKey(document, 'shared-borders');
    let layerFillColors = Settings.documentSettingForKey(document, 'layer-fills');
    let layerBorderColors = Settings.documentSettingForKey(document, 'layer-borders');

    if (fill) {
        if (sharedFillColors[fill]) {
            sharedFillColors[fill].sharedKeys.push(sharedItem.name);
        } else {
            let colorObj = { ...layerFillColors[fill] };
            colorObj.sharedKeys = [sharedItem.name];
            sharedFillColors[fill] = colorObj;
        }
        Settings.setDocumentSettingForKey(document, 'shared-fills', sharedFillColors);
    }

    if (border) {
        if (sharedBorderColors[border]) {
            sharedBorderColors[border].sharedKeys.push(sharedItem.name);
        } else {
            let colorObj = { ...layerBorderColors[border] };
            colorObj.sharedKeys = [sharedItem.name];
            sharedBorderColors[border] = colorObj;
        }
        Settings.setDocumentSettingForKey(document, 'shared-borders', sharedBorderColors);
    }
}

export default function handleChangedLayer(changePath, colorPathDict, document, isNewSharedStyle) {
    const [pageIndex, abIndex, ...layerAndStyleIndeces] = changePath.match(/\d+/g);

    const basePath = changePath.split('.sharedStyleID')[0];

    const { fillColor, borderColor, sharedStyleId } = layerAndStyleIndeces.reduce((acc, itemIndex, index, arr) => {
        if (index === arr.length - 1) {
            const layer = acc.layers[itemIndex];
            return {
                fillColor: layer.style.fills[0],
                borderColor: layer.style.borders[0],
                sharedStyleId: layer.sharedStyleId,
            };
        }
        return layer;
    }, document.pages[pageIndex].layers[abIndex]);

    isNewSharedStyle && addSharedStyle(fillColor, borderColor, sharedStyleId, document);

    const fillPath = `${basePath}.style.fills[0].color`;
    const previousFillColor = colorPathDict[fillPath];
    let updatedFillColor;
    if (fillColor) {
        updatedFillColor = fillColor.color;
        colorPathDict[fillPath] = updatedFillColor;
    } else if (previousFillColor) {
        delete colorPathDict[fillPath];
    }

    updatePaletteItem(document, previousFillColor, updatedFillColor, undefined, 'fill', isNewSharedStyle);

    const borderPath = `${basePath}.style.borders[0].color`;
    const previousBorderColor = colorPathDict[borderPath];
    let updatedBorderColor;
    let updatedBorderThickness;

    if (borderColor) {
        updatedBorderColor = borderColor.color;
        colorPathDict[borderPath] = updatedBorderColor;
        updatedBorderThickness = borderColor.thickness;
    } else if (previousBorderColor) {
        delete colorPathDict[borderPath];
    }

    updatePaletteItem(
        document,
        previousBorderColor,
        updatedBorderColor,
        updatedBorderThickness,
        'border',
        isNewSharedStyle
    );

    Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDict);
}
