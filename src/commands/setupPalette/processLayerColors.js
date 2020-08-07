import arrayMatches from '../../utils/arrayMatches';

export default function processLayerColors(sharedColors, layerColors) {
    Object.entries(layerColors).forEach(([color, { usages, thicknesses }]) => {
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
