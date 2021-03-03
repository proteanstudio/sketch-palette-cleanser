export default function getColorVariables(document) {
    return document.swatches.reduce((acc, { name, color }) => {
        if (acc[color]) {
            acc[color].sharedKeys.push(name);
            return;
        }

        acc[color] = {
            sharedKeys: [name],
            usages: 0,
        };

        return acc;
    }, {});
}
