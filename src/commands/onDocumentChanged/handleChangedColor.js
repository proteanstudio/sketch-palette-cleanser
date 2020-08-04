import sketch from 'sketch';
import updatePaletteItem from './updatePaletteItem';

export default function handleChangedColor(changePath, colorPathDict, document) {
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

    const previousColor = colorPathDict[changePath];
    colorPathDict[changePath] = updatedColor;

    sketch.Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDict);

    updatePaletteItem(document, previousColor, updatedColor, updatedThickness, styleType);
}
