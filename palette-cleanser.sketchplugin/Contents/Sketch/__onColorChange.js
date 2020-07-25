var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/onColorChange.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/methods/buildPaletteCell.js":
/*!*****************************************!*\
  !*** ./src/methods/buildPaletteCell.js ***!
  \*****************************************/
/*! exports provided: buildCellText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildCellText", function() { return buildCellText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildPaletteCell; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function buildCellText(color, usages, thicknesses, localCoordinates) {
  var thicknessPrefix = thicknesses ? "".concat(thicknesses.join('px, '), "px ") : '';
  var opacity = parseInt(color.substring(7, 9), 16) / 255;
  var opacitySuffix = opacity < 1 ? " (".concat(opacity.toFixed(2).substring(1), " opacity)") : '';
  var usagesString = "".concat(usages, " use").concat(usages !== 1 ? 's' : '');
  return [{
    type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.Text,
    text: "".concat(thicknessPrefix).concat(color.substring(0, 7)).concat(opacitySuffix),
    frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(90, localCoordinates.y, 300, 20),
    style: {
      fontSize: 17,
      fontFamily: 'PT Sans',
      kerning: null,
      paragraphSpacing: 0,
      borders: []
    }
  }, {
    type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.Text,
    text: usagesString,
    frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(90, localCoordinates.y + 20, 300, 20),
    style: {
      fontSize: 17,
      fontFamily: 'PT Sans',
      kerning: null,
      paragraphSpacing: 0,
      borders: []
    }
  }]; // currently need to be last layers in group
}
function buildPaletteCell(_ref, type, coordinates) {
  var _ref2 = _slicedToArray(_ref, 2),
      color = _ref2[0],
      _ref2$ = _ref2[1],
      sharedKeys = _ref2$.sharedKeys,
      usages = _ref2$.usages,
      thicknesses = _ref2$.thicknesses;

  var colorLayers = [];
  var colorArr = [{
    color: color
  }];
  var colorFills = [];
  var colorBorders = [];

  if (type === 'border') {
    colorBorders = colorArr;
  } else {
    colorFills = colorArr;
  }

  if (color.includes('#ffffff')) {
    var whiteBg = {
      type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ShapePath,
      shapeType: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.ShapePath.ShapeType.Rectangle,
      style: {
        fills: [{
          color: '#000000'
        }],
        borders: []
      },
      frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(0, 0, 80, 80)
    };
    colorLayers.push(whiteBg);
  }

  var localCoordinates = {
    x: 10,
    y: 10
  };
  var colorShape = {
    type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ShapePath,
    shapeType: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.ShapePath.ShapeType.Oval,
    style: {
      fills: colorFills,
      borders: colorBorders,
      borderOptions: {
        startArrowHead: 'FilledCircle',
        endArrowHead: 'FilledCircle'
      }
    },
    frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(localCoordinates.x, localCoordinates.y, 60, 60)
  };
  colorLayers.push(colorShape);
  var cellHeight = _utils_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_CELL_HEIGHT"];

  if (Array.isArray(sharedKeys)) {
    sharedKeys.forEach(function (key) {
      colorLayers.push({
        type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.Text,
        text: key,
        style: {
          fontSize: 17,
          fontWeight: 12,
          fontFamily: 'PT Sans',
          kerning: null,
          paragraphSpacing: 0,
          borders: []
        },
        frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(90, localCoordinates.y, 270, 20),
        fixedWidth: true
      });
      var charLimit = 33; // May need adjustments

      var yAdjustment = Math.ceil(key.length / charLimit) * 20;
      localCoordinates.y += yAdjustment;
      cellHeight += yAdjustment;
    });
  }

  localCoordinates.y += 10;
  var textLayers = buildCellText(color, usages, thicknesses, localCoordinates);
  colorLayers.push.apply(colorLayers, _toConsumableArray(textLayers));
  var colorGroup = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Group({
    name: "".concat(type, ": ").concat(color),
    layers: colorLayers
  });
  colorGroup.frame.y = coordinates.y;
  coordinates.y += cellHeight;
  return colorGroup;
}

/***/ }),

/***/ "./src/methods/updatePaletteItem.js":
/*!******************************************!*\
  !*** ./src/methods/updatePaletteItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updatePaletteItem; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buildPaletteCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildPaletteCell */ "./src/methods/buildPaletteCell.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_loc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/loc */ "./src/utils/loc.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var find = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find,
    Settings = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Settings,
    message = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message;

function updatePaletteCell(type, color, _ref) {
  var _parentLayer$layers;

  var usages = _ref.usages,
      thicknesses = _ref.thicknesses;
  var parentLayerName = "".concat(type, ": ").concat(color);
  var parentLayer = find("[name=\"".concat(parentLayerName, "\"]"))[0];
  var colorLayer = parentLayer.layers[parentLayer.layers.length - 2];
  var usageLayer = parentLayer.layers[parentLayer.layers.length - 1];
  var textLayers = Object(_buildPaletteCell__WEBPACK_IMPORTED_MODULE_1__["buildCellText"])(color, usages, thicknesses, colorLayer.frame);
  colorLayer.remove();
  usageLayer.remove();

  (_parentLayer$layers = parentLayer.layers).push.apply(_parentLayer$layers, _toConsumableArray(textLayers));
}

function addNewCell(color, type, cellToRemove, document) {
  var hasCellToRemove = !!cellToRemove;
  var parentLayer = find("[name=\"layer_".concat(type, "s\"]"))[0];
  var lastLayer = parentLayer.layers[parentLayer.layers.length - 1];
  var y = lastLayer.frame.y + _utils_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_CELL_HEIGHT"];

  if (hasCellToRemove) {
    y = cellToRemove.frame.y;
    cellToRemove.remove();
  } else {
    if (type === 'fill') {
      var layerBorders = find('[name="layer_borders"]')[0];
      layerBorders.frame.y += _utils_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_CELL_HEIGHT"];
    }

    var paletteBoardId = Settings.documentSettingForKey(document, 'palette-board-id');
    find("[id=\"".concat(paletteBoardId, "\"]"))[0].frame.height += _utils_constants__WEBPACK_IMPORTED_MODULE_2__["BASE_CELL_HEIGHT"];
  }

  parentLayer.layers.push(Object(_buildPaletteCell__WEBPACK_IMPORTED_MODULE_1__["default"])(color, type, {
    y: y
  }));
}

function cleanlyRemoveCell(cellToRemove, type) {
  if (!cellToRemove) {
    return;
  }

  var parentLayer = find("[name=\"layer_".concat(type, "s\"]"))[0];
  var lastLayer = parentLayer.layers[parentLayer.layers.length - 1];
  var isLastLayer = cellToRemove === lastLayer;

  if (!isLastLayer) {
    lastLayer.frame.y = cellToRemove.frame.y;
  }

  if (type === 'fill') {
    var layerBorders = find('[name="layer_borders"]')[0];
    layerBorders.frame.y -= cellToRemove.frame.height;
  }

  cellToRemove.remove();
}

function updatePaletteItem(document, previousColor, updatedColor, updatedThickness, type) {
  var sharedColors = Settings.documentSettingForKey(document, "shared-".concat(type, "s"));
  var layerColors = Settings.documentSettingForKey(document, "layer-".concat(type, "s"));
  var cellToRemove;

  if (sharedColors[previousColor]) {
    sharedColors[previousColor].usages--;
    updatePaletteCell(type, previousColor, sharedColors[previousColor]);
  } else if (layerColors[previousColor]) {
    if (layerColors[previousColor].usages > 1) {
      layerColors[previousColor].usages--;
      updatePaletteCell(type, previousColor, layerColors[previousColor]);
    } else {
      delete layerColors[previousColor];
      cellToRemove = find("[name=\"".concat(type, ": ").concat(previousColor, "\"]"))[0];
    }
  }

  if (sharedColors[updatedColor]) {
    sharedColors[updatedColor].usages++;
    updatePaletteCell(type, updatedColor, sharedColors[updatedColor]);
  } else if (layerColors[updatedColor]) {
    layerColors[updatedColor].usages++;
    updatePaletteCell(type, updatedColor, layerColors[updatedColor]);
  } else {
    var colorData = {
      usages: 1,
      thicknesses: type === 'border' ? [updatedThickness] : undefined
    };
    layerColors[updatedColor] = colorData;
    addNewCell([updatedColor, colorData], type, cellToRemove, document);
    cellToRemove = undefined;
  }

  cleanlyRemoveCell(cellToRemove, type);
  Settings.setDocumentSettingForKey(document, "shared-".concat(type, "s"), sharedColors);
  Settings.setDocumentSettingForKey(document, "layer-".concat(type, "s"), layerColors);
  message(Object(_utils_loc__WEBPACK_IMPORTED_MODULE_3__["default"])('messages.paletteUpdated'));
}

/***/ }),

/***/ "./src/onColorChange.js":
/*!******************************!*\
  !*** ./src/onColorChange.js ***!
  \******************************/
/*! exports provided: onColorChange, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onColorChange", function() { return onColorChange; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _methods_updatePaletteItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/updatePaletteItem */ "./src/methods/updatePaletteItem.js");
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Settings = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Settings,
    Document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Document;
/* {
    [color: string]: {
        sharedKeys?: string[],
        thicknesses?: number[]
        usages: number
    }
} */

function onColorChange(context) {
  var document = Document.getSelectedDocument();
  var changePath = context.actionContext[0].internalFullPath().toString().trim();
  var storedColorPathDict = Settings.documentSettingForKey(document, 'color-path-dictionary');
  var hasPopulatedPalette = !!storedColorPathDict && Object.keys(storedColorPathDict).length > 0;
  if (!hasPopulatedPalette || changePath.match(/layers+/g).length < 2 || !changePath.includes('color')) return;

  var _changePath$match = changePath.match(/\d+/g),
      _changePath$match2 = _toArray(_changePath$match),
      pageIndex = _changePath$match2[0],
      abIndex = _changePath$match2[1],
      layerAndStyleIndeces = _changePath$match2.slice(2);

  var styleType = changePath.includes('border') ? 'border' : 'fill';
  var updatedStyle = layerAndStyleIndeces.reduce(function (acc, itemIndex, index, arr) {
    if (index === arr.length - 1) {
      // TODO: Account for border thickness changes
      return acc.style["".concat(styleType, "s")][itemIndex];
    }

    return acc.layers[itemIndex];
  }, document.pages[pageIndex].layers[abIndex]);
  var updatedColor = updatedStyle.color;
  var updatedThickness = updatedStyle.thickness;
  var previousColor = storedColorPathDict[changePath];
  storedColorPathDict[changePath] = updatedColor;
  Settings.setDocumentSettingForKey(document, 'color-path-dictionary', storedColorPathDict);
  Object(_methods_updatePaletteItem__WEBPACK_IMPORTED_MODULE_1__["default"])(document, previousColor, updatedColor, updatedThickness, styleType);
}
/* harmony default export */ __webpack_exports__["default"] = (onColorChange);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: BASE_CELL_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_CELL_HEIGHT", function() { return BASE_CELL_HEIGHT; });
var BASE_CELL_HEIGHT = 95;

/***/ }),

/***/ "./src/utils/loc.js":
/*!**************************!*\
  !*** ./src/utils/loc.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loc; });
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings */ "./src/utils/strings.js");

function loc(key) {
  return key.split('.').reduce(function (acc, item) {
    return acc[item] || '';
  }, _strings__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/***/ }),

/***/ "./src/utils/strings.js":
/*!******************************!*\
  !*** ./src/utils/strings.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  paletteName: '🎨 Palette Cleanser',
  shared: {
    title: 'Layer Style Colors',
    subtitle: 'These colors are from fills and borders in your Layer Styles. They can be easily reused and updated throughout your designs.'
  },
  unique: {
    title: 'Unique Colors',
    subtitle: 'These colors are from fills and borders in your document that aren\'t part of a Layer Style. Unique styles can work for simple designs, but it\'s hard to maintain a consistent palette as your design grows.'
  },
  fillsHeader: 'Fills',
  bordersHeader: 'Borders',
  messages: {
    paletteBuilt: '🎉 Your palette is ready 🎉',
    paletteUpdated: '✅ Palette updated ✅'
  }
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onColorChange'] = __skpm_run.bind(this, 'onColorChange');
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__onColorChange.js.map