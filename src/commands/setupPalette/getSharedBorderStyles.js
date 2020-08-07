export default function getSharedBorderStyles(document) {
    return document.sharedLayerStyles.reduce((acc, { name, style: { borders } }) => {
        borders.forEach(({ color, thickness }) => {
            if (acc[color]) {
                acc[color].sharedKeys.push(name);

                if (!acc[color].thicknesses.includes(thickness)) {
                    acc[color].thicknesses.push(thickness);
                }
                return;
            }

            acc[color] = {
                sharedKeys: [name],
                thicknesses: [thickness],
                usages: 0,
            };
        });
        return acc;
    }, {});
}
