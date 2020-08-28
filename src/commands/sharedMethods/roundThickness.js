export default function roundThickness(thickness) {
    if (Number.isInteger(thickness)) return thickness;

    return Number(thickness.toFixed(2));
}
