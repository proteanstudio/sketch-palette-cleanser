export default function arrayMatches(arr1 = [], arr2 = [], strict = false) {
    const newItems = arr2.filter((item) => !arr1.includes(item));

    if (arr1.length !== arr2.length || newItems.length > 0) {
        return {
            matches: false,
            newItems,
        };
    }

    let matches = true;
    arr1.forEach((item, index) => {
        if ((strict && item !== arr2[index]) || !arr2.includes(item)) {
            matches = false;
        }
    });

    return { matches, newItems };
}
