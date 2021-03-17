export default function getSharedFillStyles(document, colorVars) {
    return document.sharedLayerStyles.reduce((acc, { name, style: { fills } }) => {
        fills.forEach(({ color }) => {
            if (colorVars[color]) return;

            if (acc[color]) {
                acc[color].sharedKeys.push(name);
                return;
            }

            acc[color] = {
                sharedKeys: [name],
                usages: 0,
            };
        });

        return acc;
    }, {});
}
