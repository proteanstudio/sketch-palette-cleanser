import sketch from 'sketch';

export default function handleLayerHierarchyChange(changePaths, colorPathDict, document) {
    const [initialPathIndeces, finalPathIndeces] = changePaths.map((path) => path.match(/\d+/g).map(Number));

    let keysToAdd = {};

    Object.entries(colorPathDict).forEach(([path, color]) => {
        if (path.includes(changePaths[0])) {
            const keyToAdd = `${changePaths[1]}${path.split(changePaths[0])[1]}`;

            keysToAdd[keyToAdd] = color;
            return;
        }

        const pathIndeces = path.match(/\d+/g).map(Number);
        let updatedIndeces = pathIndeces.slice(0, 1);

        for (let i = 1; i < pathIndeces.length; i++) {
            let currentIndex = pathIndeces[i];
            const initialPathIndex = initialPathIndeces[i];
            const finalPathIndex = finalPathIndeces[i];

            if (currentIndex < initialPathIndex || currentIndex > finalPathIndex) {
                break;
            }

            if (currentIndex > initialPathIndex) {
                updatedIndeces = [...updatedIndeces, currentIndex - 1, ...pathIndeces.slice(i + 1)];
                delete colorPathDict[path];

                let matchIndex = 0;
                const updatedPath = path.replace(/\d+/g, () => updatedIndeces[matchIndex++]);

                colorPathDict[updatedPath] = color;

                break;
            }

            updatedIndeces.push(currentIndex);
        }
    });

    colorPathDict = { ...colorPathDict, ...keysToAdd };

    sketch.Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDict);
}
