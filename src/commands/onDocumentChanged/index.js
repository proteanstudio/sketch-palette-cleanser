import sketch from 'sketch';
import handleLayerDeletion from './handleLayerDeletion';
import handleLayerAssignment from './handleLayerAssignment';
import handleChangedColor from './handleChangedColor';
import handleLayerHierarchyChange from './handleLayerHierachyChange';
import handleSharedStyleRename from './handleSharedStyleRename';

const { Settings, Document } = sketch;

/* {
    [color: string]: {
        sharedKeys?: string[],
        thicknesses?: number[]
        usages: number
    }
} */

export function onDocumentChanged(context) {
    const document = Document.getSelectedDocument();

    const changePaths = Array.from(context.actionContext).map((actionContext) =>
        actionContext.fullPath().toString().trim()
    );

    let changePath = changePaths[0];
    let changePathSegments = changePath.match(/([a-z])\w+/g);
    let isNewSharedStyle = changePath.includes('layerStyles') && changePathSegments.length === 1;
    let isSharedStyleRename = changePath.includes('layerStyles') && changePathSegments.length === 2;

    if (isNewSharedStyle) {
        changePath = changePaths[1];
        changePathSegments = changePath.match(/([a-z])\w+/g);
    }

    const finalSegment = changePathSegments[changePathSegments.length - 1];

    const actionContext = context.actionContext[0];

    const [, abIndex] = changePath.match(/\d+/g);

    let storedColorPathDict = Settings.documentSettingForKey(document, 'color-path-dictionary');
    const hasPopulatedPalette = !!storedColorPathDict && Object.keys(storedColorPathDict).length > 0;

    const isMove = actionContext.isMove && actionContext.isMove();
    const actionType = actionContext.type();
    const isDeletion = actionType === 2 && !isMove;

    const layerDepthArr = changePathSegments.filter((segment) => segment === 'layers');

    if (isSharedStyleRename) {
        handleSharedStyleRename(changePath, document);
        return;
    }

    if (!hasPopulatedPalette || layerDepthArr.length < 2 || abIndex === '0') return;

    if (finalSegment === 'sharedStyleID' || finalSegment === 'layer') {
        handleLayerAssignment(changePath, storedColorPathDict, document, isNewSharedStyle);
        return;
    }

    if (finalSegment === 'color' || finalSegment === 'enabled') {
        const modifiedCP = finalSegment === 'enabled' ? `${changePath.split('enabled')[0]}color` : changePath;
        handleChangedColor(modifiedCP, storedColorPathDict, document);
        return;
    }

    if (isMove && changePaths.length > 1) {
        handleLayerHierarchyChange(changePaths, storedColorPathDict, document);
        return;
    }

    if (isDeletion) {
        handleLayerDeletion(changePath, storedColorPathDict, document);
        return;
    }
}

export default onDocumentChanged;
