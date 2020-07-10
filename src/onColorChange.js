import sketch from 'sketch';
import updatePaletteItem from './methods/updatePaletteItem';

const { Settings, Document } = sketch;

/* {
    [color: string]: {
        sharedKeys?: string[],
        thicknesses?: number[]
        usages: number
    }
} */

export function onColorChange(context) {
    const document = Document.getSelectedDocument();
    const changePath = context.actionContext[0].internalFullPath().toString().trim();

    let storedColorPathDict = Settings.documentSettingForKey(document, 'color-path-dictionary');
    let hasPopulatedPalette = !!storedColorPathDict && Object.keys(storedColorPathDict).length > 0;

    if (!hasPopulatedPalette || changePath.match(/layers+/g).length < 2 || !changePath.includes('color')) return;

    const [pageIndex, abIndex, ...layerAndStyleIndeces] = changePath.match(/\d+/g);
    const styleType = changePath.includes('border') ? 'border' : 'fill';

    const updatedStyle = layerAndStyleIndeces.reduce((acc, itemIndex, index, arr) => {
        if (index === arr.length - 1) {
            // TODO: Account for border thickness changes
            return acc.style[`${styleType}s`][itemIndex];
        }
        return acc.layers[itemIndex];
    }, document.pages[pageIndex].layers[abIndex]);

    const updatedColor = updatedStyle.color;
    const updatedThickness = updatedStyle.thickness;

    const previousColor = storedColorPathDict[changePath];
    storedColorPathDict[changePath] = updatedColor;

    Settings.setDocumentSettingForKey(document, 'color-path-dictionary', storedColorPathDict);

    updatePaletteItem(document, previousColor, updatedColor, updatedThickness, styleType);
}

export default onColorChange;
