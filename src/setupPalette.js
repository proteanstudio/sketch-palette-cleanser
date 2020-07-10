import sketch from 'sketch';
import getSharedFillStyles from './methods/getSharedFillStyles';
import getSharedBorderStyles from './methods/getSharedBorderStyles';
import parseLayers from './methods/parseLayers';
import processLayerColors from './methods/processLayerColors';
import { PALETTE_NAME } from './utils/constants';
import buildPaletteBoard from './methods/buildPaletteBoard';

const {
    Document,
    Settings,
    UI: { message },
} = sketch;

export default function setupPalette() {
    message('Building Color Pallete Document');

    const document = Document.getSelectedDocument();

    let sharedFills = getSharedFillStyles(document);
    let sharedBorders = getSharedBorderStyles(document);

    let { colorPathDictionary, layerFills, layerBorders } = parseLayers(document, PALETTE_NAME);

    processLayerColors(sharedFills, layerFills);
    processLayerColors(sharedBorders, layerBorders);

    Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDictionary);
    Settings.setDocumentSettingForKey(document, 'shared-fills', sharedFills);
    Settings.setDocumentSettingForKey(document, 'shared-borders', sharedBorders);
    Settings.setDocumentSettingForKey(document, 'layer-fills', layerFills);
    Settings.setDocumentSettingForKey(document, 'layer-borders', layerBorders);

    buildPaletteBoard(document, sharedFills, layerFills, sharedBorders, layerBorders);

    message('Color Pallete Document Created');
}
