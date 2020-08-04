export default function addLayerIfPresent(layer, group) {
    if (layer) {
        group.layers.push(layer);
    }
}
