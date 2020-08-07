import sketch from 'sketch';
import updatePaletteItem from './updatePaletteItem';
import arrayMatches from '../../utils/arrayMatches';

export default function handleLayerDeletion(changePath, colorPathDict, document) {
    const changePathIndeces = changePath.match(/\d+/g).map(Number);
    Object.entries(colorPathDict).forEach(([path, color]) => {
        const pathIndeces = path.match(/\d+/g).map(Number);
        let updatedIndeces = pathIndeces.slice(0, 1);

        for (let i = 1; i < pathIndeces.length; i++) {
            let currentIndex = pathIndeces[i];
            const currentChangePathIndex = changePathIndeces[i];

            if (currentIndex < currentChangePathIndex) {
                break;
            }

            if (currentIndex > currentChangePathIndex) {
                updatedIndeces = [...updatedIndeces, currentIndex - 1, ...pathIndeces.slice(i + 1)];
                delete colorPathDict[path];

                let matchIndex = 0;
                const updatedPath = path.replace(/\d+/g, () => updatedIndeces[matchIndex++]);

                colorPathDict[updatedPath] = color;

                break;
            }

            if (arrayMatches(changePathIndeces, updatedIndeces).matches) {
                const styleType = path.includes('border') ? 'border' : 'fill';
                updatePaletteItem(document, color, undefined, undefined, styleType);
                delete colorPathDict[path];
                break;
            }
            updatedIndeces.push(currentIndex);
        }
    });

    sketch.Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDict);
}
