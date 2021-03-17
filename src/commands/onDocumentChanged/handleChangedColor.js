import sketch from 'sketch';
import findCurrentStyleFromPath from '../sharedMethods/findCurrentStyleFromPath';
import updatePaletteItem from './updatePaletteItem';

export default function handleChangedColor(changePath, colorPathDict, document) {
    const styleType = changePath.includes('border') ? 'border' : 'fill';

    const { color: updatedColor, thickness: updatedThickness } = findCurrentStyleFromPath(
        changePath,
        document,
        styleType
    );

    // TODO: Account for border thickness changes

    const previousColor = colorPathDict[changePath];
    colorPathDict[changePath] = updatedColor;

    sketch.Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDict);

    updatePaletteItem(document, previousColor, updatedColor, updatedThickness, styleType);
}
