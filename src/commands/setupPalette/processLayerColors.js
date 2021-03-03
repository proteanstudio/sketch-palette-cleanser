import arrayMatches from '../../utils/arrayMatches';

export default function processLayerColors(colorVars, sharedColors, layerColors) {
    Object.entries(layerColors).forEach(([color, { usages, thicknesses }]) => {
        if (colorVars[color]) {
            colorVars[color].usages += usages;
            delete layerColors[color];
            return;
        }

        if (sharedColors[color]) {
            const { matches: thicknessMatches, newItems } = arrayMatches(sharedColors[color].thicknesses, thicknesses);

            if (thicknessMatches) {
                sharedColors[color].usages = usages;
                delete layerColors[color];
            } else {
                layerColors[color].thicknesses = newItems;
            }
        }
    });
}
