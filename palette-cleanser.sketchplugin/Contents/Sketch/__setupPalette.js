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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/setupPalette.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/methods/addLayerIfPresent.js":
/*!******************************************!*\
  !*** ./src/methods/addLayerIfPresent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addLayerIfPresent; });
function addLayerIfPresent(layer, group) {
  if (layer) {
    group.layers.push(layer);
  }
}

/***/ }),

/***/ "./src/methods/buildColumnGroup.js":
/*!*****************************************!*\
  !*** ./src/methods/buildColumnGroup.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildColumnGroup; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function buildColumnGroup(name, frame, headerText, subText) {
  return new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Group({
    name: name,
    frame: _construct(sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle, _toConsumableArray(frame)),
    layers: [{
      type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.Text,
      text: headerText,
      style: {
        fontSize: 48,
        fontWeight: 9,
        fontFamily: 'PT Sans',
        kerning: null,
        paragraphSpacing: 0,
        textColor: '#000000ff',
        borders: []
      }
    }, {
      type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.Text,
      text: subText,
      style: {
        fontSize: 14,
        fontFamily: 'PT Sans',
        kerning: null,
        paragraphSpacing: 0,
        textColor: '#000000ff',
        borders: []
      },
      frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(0, 60, 350, 20),
      fixedWidth: true
    }]
  });
}

/***/ }),

/***/ "./src/methods/buildPaletteBoard.js":
/*!******************************************!*\
  !*** ./src/methods/buildPaletteBoard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildPaletteBoard; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buildSectionGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildSectionGroup */ "./src/methods/buildSectionGroup.js");
/* harmony import */ var _addLayerIfPresent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addLayerIfPresent */ "./src/methods/addLayerIfPresent.js");
/* harmony import */ var _buildColumnGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildColumnGroup */ "./src/methods/buildColumnGroup.js");
/* harmony import */ var _utils_loc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/loc */ "./src/utils/loc.js");





var Settings = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Settings,
    Rectangle = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle,
    Artboard = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Artboard;
function buildPaletteBoard(document, sharedFills, layerFills, sharedBorders, layerBorders) {
  var artboards = document.pages.map(function (page) {
    return page.layers;
  }).flat();
  var paletteBoardId = Settings.documentSettingForKey(document, 'palette-board-id');
  var paletteBoard = artboards.filter(function (ab) {
    return ab.id === paletteBoardId;
  })[0];

  if (!paletteBoard) {
    var boardFrame = new Rectangle(-4000, 0, 1000, 2000);
    paletteBoard = new Artboard({
      name: Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('paletteName'),
      flowStartPoint: true,
      frame: boardFrame
    });
    Settings.setDocumentSettingForKey(document, 'palette-board-id', paletteBoard.id);
  }

  var coordinates = {
    x: 0,
    y: 150
  };
  var sharedStylesGroup = Object(_buildColumnGroup__WEBPACK_IMPORTED_MODULE_3__["default"])('shared-palette-styles', [75, 75, 400, coordinates.y], Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('shared.title'), Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('shared.subtitle'));
  var sLFCGroup = Object(_buildSectionGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates, 'shared_layer_fills', Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('fillsHeader'), sharedFills);
  var sLBCGroup = Object(_buildSectionGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates, 'shared_layer_borders', Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('bordersHeader'), sharedBorders, 'border');
  Object(_addLayerIfPresent__WEBPACK_IMPORTED_MODULE_2__["default"])(sLFCGroup, sharedStylesGroup);
  Object(_addLayerIfPresent__WEBPACK_IMPORTED_MODULE_2__["default"])(sLBCGroup, sharedStylesGroup);
  var uniqueStylesGroup = Object(_buildColumnGroup__WEBPACK_IMPORTED_MODULE_3__["default"])('unique-palette-styles', [550, 75, 350, coordinates.y], Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('unique.title'), Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('unique.subtitle'));
  var sharedStylesY = coordinates.y;
  coordinates.y = 150;
  var lFGroup = Object(_buildSectionGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates, 'layer_fills', Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('fillsHeader'), layerFills);
  var lBGroup = Object(_buildSectionGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates, 'layer_borders', Object(_utils_loc__WEBPACK_IMPORTED_MODULE_4__["default"])('bordersHeader'), layerBorders, 'border');
  Object(_addLayerIfPresent__WEBPACK_IMPORTED_MODULE_2__["default"])(lFGroup, uniqueStylesGroup);
  Object(_addLayerIfPresent__WEBPACK_IMPORTED_MODULE_2__["default"])(lBGroup, uniqueStylesGroup);
  paletteBoard.layers = [sharedStylesGroup, uniqueStylesGroup].filter(function (group) {
    return !!group;
  });
  paletteBoard.frame.height = Math.max(sharedStylesY, coordinates.y) + 100;
  document.pages[0].layers.unshift(paletteBoard);
}

/***/ }),

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
      textColor: '#000000ff',
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
      textColor: '#000000ff',
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
          textColor: '#000000ff',
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

/***/ "./src/methods/buildSectionGroup.js":
/*!******************************************!*\
  !*** ./src/methods/buildSectionGroup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildSectionGroup; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buildPaletteCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildPaletteCell */ "./src/methods/buildPaletteCell.js");


function buildSectionGroup(coordinates, name, label, colorDict) {
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'fill';
  var colors = Object.entries(colorDict);
  if (colors.length === 0) return;
  var layers = [{
    type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.Text,
    text: label,
    style: {
      fontSize: 30,
      fontWeight: 12,
      fontFamily: 'PT Sans',
      kerning: null,
      paragraphSpacing: 0,
      textColor: '#000000ff',
      borders: []
    },
    frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(0, coordinates.y, 300, 70)
  }, {
    type: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ShapePath,
    shapeType: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.ShapePath.ShapeType.Rectangle,
    style: {
      fills: [],
      borders: [{
        color: '#bcbcbc',
        thickness: 1
      }]
    },
    frame: new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Rectangle(0, coordinates.y + 40, 350, 1)
  }];
  coordinates.y += 52;
  colors.forEach(function (color) {
    layers.push(Object(_buildPaletteCell__WEBPACK_IMPORTED_MODULE_1__["default"])(color, type, coordinates));
  });
  var group = new sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Group({
    name: name,
    layers: layers
  });
  coordinates.y += 30;
  return group;
}

/***/ }),

/***/ "./src/methods/getSharedBorderStyles.js":
/*!**********************************************!*\
  !*** ./src/methods/getSharedBorderStyles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSharedBorderStyles; });
function getSharedBorderStyles(document) {
  return document.sharedLayerStyles.reduce(function (acc, _ref) {
    var name = _ref.name,
        borders = _ref.style.borders;
    borders.forEach(function (_ref2) {
      var color = _ref2.color,
          thickness = _ref2.thickness;

      if (acc[color]) {
        acc[color].sharedKeys.push(name);

        if (!acc[color].thicknesses.includes(thickness)) {
          acc[color].thicknesses.push(thickness);
        }

        return;
      }

      acc[color] = {
        sharedKeys: [name],
        thicknesses: [thickness],
        usages: 0
      };
    });
    return acc;
  }, {});
}

/***/ }),

/***/ "./src/methods/getSharedFillStyles.js":
/*!********************************************!*\
  !*** ./src/methods/getSharedFillStyles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSharedFillStyles; });
function getSharedFillStyles(document) {
  return document.sharedLayerStyles.reduce(function (acc, _ref) {
    var name = _ref.name,
        fills = _ref.style.fills;
    fills.forEach(function (_ref2) {
      var color = _ref2.color;

      if (acc[color]) {
        acc[color].sharedKeys.push(name);
        return;
      }

      acc[color] = {
        sharedKeys: [name],
        usages: 0
      };
    });
    return acc;
  }, {});
}

/***/ }),

/***/ "./src/methods/parseLayers.js":
/*!************************************!*\
  !*** ./src/methods/parseLayers.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseLayers; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function parseLayers(document) {
  var layerFills = {};
  var layerBorders = {};
  var colorPathDictionary = document.pages.reduce(function (acc, page, pageIndex) {
    var paletteBoardId = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Settings.documentSettingForKey(document, 'palette-board-id');
    page.layers.filter(function (ab) {
      return ab.id !== paletteBoardId;
    }).forEach(function (ab, abIndex) {
      var layerIndeces = [];

      function layerLoop(layer, layerIndex) {
        if (!layer || !layer.style) {
          return;
        }

        layer.style.fills.forEach(function (fill, fillIndex) {
          var color = fill.color;

          if (color) {
            var additionalLayerPath = layerIndeces.reduce(function (acc, index) {
              return "".concat(acc, ".layers[").concat(index, "]");
            }, '');
            var path = "pages[".concat(pageIndex, "].layers[").concat(abIndex + 1, "]").concat(additionalLayerPath, ".layers[").concat(layerIndex, "].style.fills[").concat(fillIndex, "].color");
            acc[path] = color;

            if (layerFills[color]) {
              layerFills[color].usages++;
              return;
            }

            layerFills[color] = {
              usages: 1
            };
          }
        });
        layer.style.borders.forEach(function (border, borderIndex) {
          var color = border.color,
              thickness = border.thickness;

          if (color) {
            var additionalLayerPath = layerIndeces.reduce(function (acc, index) {
              return "".concat(acc, ".layers[").concat(index, "]");
            }, '');
            var path = "pages[".concat(pageIndex, "].layers[").concat(abIndex + 1, "]").concat(additionalLayerPath, ".layers[").concat(layerIndex, "].style.borders[").concat(borderIndex, "].color");
            acc[path] = color;

            if (layerBorders[color]) {
              if (!layerBorders[color].thicknesses.includes(thickness)) {
                layerBorders[color].thicknesses.push(thickness);
              }

              layerBorders[color].usages++;
              return;
            }

            layerBorders[color] = {
              usages: 1,
              thicknesses: [thickness]
            };
          }
        });

        if (Array.isArray(layer.layers)) {
          var storedIndeces = _toConsumableArray(layerIndeces);

          layerIndeces.push(layerIndex);
          layer.layers.forEach(layerLoop);
          layerIndeces = storedIndeces;
        }
      }

      Array.isArray(ab.layers) && ab.layers.forEach(layerLoop);
    });
    return acc;
  }, {});
  return {
    colorPathDictionary: colorPathDictionary,
    layerBorders: layerBorders,
    layerFills: layerFills
  };
}

/***/ }),

/***/ "./src/methods/processLayerColors.js":
/*!*******************************************!*\
  !*** ./src/methods/processLayerColors.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processLayerColors; });
/* harmony import */ var _utils_arrayMatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/arrayMatches */ "./src/utils/arrayMatches.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function processLayerColors(sharedColors, layerColors) {
  Object.entries(layerColors).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        color = _ref2[0],
        _ref2$ = _ref2[1],
        usages = _ref2$.usages,
        thicknesses = _ref2$.thicknesses;

    if (sharedColors[color]) {
      var _arrayMatches = Object(_utils_arrayMatches__WEBPACK_IMPORTED_MODULE_0__["default"])(sharedColors[color].thicknesses, thicknesses),
          thicknessMatches = _arrayMatches.matches,
          newItems = _arrayMatches.newItems;

      if (thicknessMatches) {
        sharedColors[color].usages = usages;
        delete layerColors[color];
      } else {
        layerColors[color].thicknesses = newItems;
      }
    }
  });
}

/***/ }),

/***/ "./src/setupPalette.js":
/*!*****************************!*\
  !*** ./src/setupPalette.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupPalette; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _methods_getSharedFillStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/getSharedFillStyles */ "./src/methods/getSharedFillStyles.js");
/* harmony import */ var _methods_getSharedBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/getSharedBorderStyles */ "./src/methods/getSharedBorderStyles.js");
/* harmony import */ var _methods_parseLayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/parseLayers */ "./src/methods/parseLayers.js");
/* harmony import */ var _methods_processLayerColors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/processLayerColors */ "./src/methods/processLayerColors.js");
/* harmony import */ var _methods_buildPaletteBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/buildPaletteBoard */ "./src/methods/buildPaletteBoard.js");
/* harmony import */ var _utils_loc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/loc */ "./src/utils/loc.js");







var Document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Document,
    Settings = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Settings,
    message = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message;
function setupPalette() {
  var document = Document.getSelectedDocument();
  var sharedFills = Object(_methods_getSharedFillStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(document);
  var sharedBorders = Object(_methods_getSharedBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(document);

  var _parseLayers = Object(_methods_parseLayers__WEBPACK_IMPORTED_MODULE_3__["default"])(document),
      colorPathDictionary = _parseLayers.colorPathDictionary,
      layerFills = _parseLayers.layerFills,
      layerBorders = _parseLayers.layerBorders;

  Object(_methods_processLayerColors__WEBPACK_IMPORTED_MODULE_4__["default"])(sharedFills, layerFills);
  Object(_methods_processLayerColors__WEBPACK_IMPORTED_MODULE_4__["default"])(sharedBorders, layerBorders);
  Settings.setDocumentSettingForKey(document, 'color-path-dictionary', colorPathDictionary);
  Settings.setDocumentSettingForKey(document, 'shared-fills', sharedFills);
  Settings.setDocumentSettingForKey(document, 'shared-borders', sharedBorders);
  Settings.setDocumentSettingForKey(document, 'layer-fills', layerFills);
  Settings.setDocumentSettingForKey(document, 'layer-borders', layerBorders);
  Object(_methods_buildPaletteBoard__WEBPACK_IMPORTED_MODULE_5__["default"])(document, sharedFills, layerFills, sharedBorders, layerBorders);
  message(Object(_utils_loc__WEBPACK_IMPORTED_MODULE_6__["default"])('messages.paletteBuilt'));
}

/***/ }),

/***/ "./src/utils/arrayMatches.js":
/*!***********************************!*\
  !*** ./src/utils/arrayMatches.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrayMatches; });
function arrayMatches() {
  var arr1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var arr2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var newItems = arr2.filter(function (item) {
    return !arr1.includes(item);
  });

  if (arr1.length !== arr2.length || newItems.length) {
    return {
      matches: false,
      newItems: newItems
    };
  }

  var matches = true;
  arr1.forEach(function (item, index) {
    if (strict && item !== arr2[index] || !arr2.includes(item)) {
      matches = false;
    }
  });
  return {
    matches: matches,
    newItems: newItems
  };
}

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
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__setupPalette.js.map