import sketch from 'sketch';
import getColorVariables from './getColorVariables';
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

    let colorVars = getColorVariables(document);
    let sharedFills = getSharedFillStyles(document, colorVars);
    let sharedBorders = getSharedBorderStyles(document, colorVars);

    let { colorPathDictionary, layerFills, layerBorders } = parseLayers(document);

    processLayerColors(colorVars, sharedFills, layerFills);
    processLayerColors(colorVars, sharedBorders, layerBorders);

    Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDictionary);
    Settings.setDocumentSettingForKey(document, 'color-variables', colorVars);
    Settings.setDocumentSettingForKey(document, 'shared-fills', sharedFills);
    Settings.setDocumentSettingForKey(document, 'shared-borders', sharedBorders);
    Settings.setDocumentSettingForKey(document, 'layer-fills', layerFills);
    Settings.setDocumentSettingForKey(document, 'layer-borders', layerBorders);

    buildPaletteBoard(document, colorVars, sharedFills, layerFills, sharedBorders, layerBorders);

    message(loc('messages.paletteBuilt'));
}
