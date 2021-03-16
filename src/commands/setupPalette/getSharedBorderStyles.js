import roundThickness from '../sharedMethods/roundThickness';

export default function getSharedBorderStyles(document, colorVars) {
    return document.sharedLayerStyles.reduce((acc, { name, style: { borders } }) => {
        borders.forEach(({ color, thickness }) => {
            if (colorVars[color]) return;

            if (acc[color]) {
                acc[color].sharedKeys.push(name);

                if (!acc[color].thicknesses.includes(thickness)) {
                    acc[color].thicknesses.push(roundThickness(thickness));
                }
                return;
            }

            acc[color] = {
                sharedKeys: [name],
                thicknesses: [roundThickness(thickness)],
                usages: 0,
            };
        });
        return acc;
    }, {});
}
