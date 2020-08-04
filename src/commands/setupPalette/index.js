import sketch from 'sketch';
import getSharedFillStyles from './getSharedFillStyles';
import getSharedBorderStyles from './getSharedBorderStyles';
import parseLayers from './parseLayers';
import processLayerColors from './processLayerColors';
import buildPaletteBoard from './buildPaletteBoard';
import loc from '../../utils/loc';

const {
    Document,
    Settings,
    UI: { message },
} = sketch;

export default function setupPalette() {
    const document = Document.getSelectedDocument();

    let sharedFills = getSharedFillStyles(document);
    let sharedBorders = getSharedBorderStyles(document);

    let { colorPathDictionary, layerFills, layerBorders } = parseLayers(document);

    processLayerColors(sharedFills, layerFills);
    processLayerColors(sharedBorders, layerBorders);

    Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDictionary);
    Settings.setDocumentSettingForKey(document, 'shared-fills', sharedFills);
    Settings.setDocumentSettingForKey(document, 'shared-borders', sharedBorders);
    Settings.setDocumentSettingForKey(document, 'layer-fills', layerFills);
    Settings.setDocumentSettingForKey(document, 'layer-borders', layerBorders);

    buildPaletteBoard(document, sharedFills, layerFills, sharedBorders, layerBorders);

    message(loc('messages.paletteBuilt'));
}
