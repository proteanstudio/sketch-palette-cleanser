import sketch from 'sketch';

export default function buildColumnGroup(name, frame, headerText, subText) {
    return new sketch.Group({
        name,
        frame: new sketch.Rectangle(...frame),
        layers: [
            {
                type: sketch.Types.Text,
                text: headerText,
                style: {
                    fontSize: 48,
                    fontWeight: 9,
                    fontFamily: 'PT Sans',
                    kerning: null,
                    paragraphSpacing: 0,
textColor: '#000000ff',
                    borders: [],
                },
            },
            {
                type: sketch.Types.Text,
                text: subText,
                style: {
                    fontSize: 14,
                    fontFamily: 'PT Sans',
                    kerning: null,
                    paragraphSpacing: 0,
textColor: '#000000ff',
                    borders: [],
                },
                frame: new sketch.Rectangle(0, 60, 350, 20),
                fixedWidth: true,
            },
        ],
    });
}
