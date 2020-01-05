window["dash_daq"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"async~colorpicker":"async~colorpicker","async~slider":"async~slider"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ 	var getCurrentScript = function() {
/******/ 	    var script = document.currentScript;
/******/ 	    if (!script) {
/******/ 	        /* Shim for IE11 and below */
/******/ 	        /* Do not take into account async scripts and inline scripts */
/******/ 	        var scripts = Array.from(document.getElementsByTagName('script')).filter(function(s) { return !s.async && !s.text && !s.textContent; });
/******/ 	        script = scripts.slice(-1)[0];
/******/ 	    }
/******/
/******/ 	    return script;
/******/ 	};
/******/
/******/ 	var isLocalScript = function(script) {
/******/ 	    return /\/_dash-component-suites\//.test(script.src);
/******/ 	};
/******/
/******/ 	Object.defineProperty(__webpack_require__, 'p', {
/******/ 	    get: (function () {
/******/ 	        var script = getCurrentScript();
/******/
/******/ 	        var url = script.src.split('/').slice(0, -1).join('/') + '/';
/******/
/******/ 	        return function() {
/******/ 	            return url;
/******/ 	        };
/******/ 	    })()
/******/ 	});
/******/
/******/ 	if (typeof jsonpScriptSrc !== 'undefined') {
/******/ 	    var __jsonpScriptSrc__ = jsonpScriptSrc;
/******/ 	    jsonpScriptSrc = function(chunkId) {
/******/ 	        var script = getCurrentScript();
/******/ 	        var isLocal = isLocalScript(script);
/******/
/******/ 	        var src = __jsonpScriptSrc__(chunkId);
/******/
/******/ 	        if(!isLocal) {
/******/ 	            return src;
/******/ 	        }
/******/
/******/ 	        var srcFragments = src.split('/');
/******/ 	        var fileFragments = srcFragments.slice(-1)[0].split('.');
/******/
/******/ 	        fileFragments.splice(1, 0, "v0_3_1m1576808801");
/******/ 	        srcFragments.splice(-1, 1, fileFragments.join('.'))
/******/
/******/ 	        return srcFragments.join('/');
/******/ 	    };
/******/ 	}
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonpdash_daq"] = window["webpackJsonpdash_daq"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "./node_modules/color/index.js":
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
var convert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (typeof obj === 'undefined') {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),

/***/ "./node_modules/conic-gradient/conic-gradient.js":
/*!*******************************************************!*\
  !*** ./node_modules/conic-gradient/conic-gradient.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * CSS conic-gradient() polyfill
 * By Lea Verou — http://lea.verou.me
 * MIT license
 */

(function(){

var π = Math.PI;
var τ = 2 * π;
var ε = .00001;
var deg = π/180;

var dummy = document.createElement("div");
document.head.appendChild(dummy);

var _ = self.ConicGradient = function(o) {
	var me = this;
	_.all.push(this);

	o = o || {};

	this.canvas = document.createElement("canvas");
	this.context = this.canvas.getContext("2d");

	this.repeating = !!o.repeating;

	this.size = o.size || Math.max(innerWidth, innerHeight);

	this.canvas.width = this.canvas.height = this.size;

	var stops = o.stops;

	this.stops = (stops || "").split(/\s*,(?![^(]*\))\s*/); // commas that are not followed by a ) without a ( first

	this.from = 0;

	for (var i=0; i<this.stops.length; i++) {
		if (this.stops[i]) {
			var stop = this.stops[i] = new _.ColorStop(this, this.stops[i]);

			if (stop.next) {
				this.stops.splice(i+1, 0, stop.next);
				i++;
			}
		}
		else {
			this.stops.splice(i, 1);
			i--;
		}
	}

	if (this.stops[0].color.indexOf('from') == 0) {
		this.from = this.stops[0].pos*360;
		this.stops.shift();
	}
	// Normalize stops

	// Add dummy first stop or set first stop’s position to 0 if it doesn’t have one
	if (this.stops[0].pos === undefined) {
			this.stops[0].pos = 0;
		}
	else if (this.stops[0].pos > 0) {
		var first = this.stops[0].clone();
		first.pos = 0;
		this.stops.unshift(first);
	}

	// Add dummy last stop or set first stop’s position to 100% if it doesn’t have one
	if (this.stops[this.stops.length - 1].pos === undefined) {
		this.stops[this.stops.length - 1].pos = 1;
	}
	else if (!this.repeating && this.stops[this.stops.length - 1].pos < 1) {
		var last = this.stops[this.stops.length - 1].clone();
		last.pos = 1;
		this.stops.push(last);
	}

	this.stops.forEach(function(stop, i){
		if (stop.pos === undefined) {
			// Evenly space color stops with no position
			for (var j=i+1; this[j]; j++) {
				if (this[j].pos !== undefined) {
					stop.pos = this[i-1].pos + (this[j].pos - this[i-1].pos)/(j-i+1);
					break;
				}
			}
		}
		else if (i > 0) {
			// Normalize color stops whose position is smaller than the position of the stop before them
			stop.pos = Math.max(stop.pos, this[i-1].pos);
		}
	}, this.stops);

	if (this.repeating) {
		// Repeat color stops until >= 1
		var stops = this.stops.slice();
		var lastStop = stops[stops.length-1];
		var difference = lastStop.pos - stops[0].pos;

		for (var i=0; this.stops[this.stops.length-1].pos < 1 && i<10000; i++) {
			for (var j=0; j<stops.length; j++) {
				var s = stops[j].clone();
				s.pos += (i+1)*difference;

				this.stops.push(s);
			}
		}
	}

	this.paint();
};

_.all = [];

_.prototype = {
	toString: function() {
		return "url('" + this.dataURL + "')";
	},

	get dataURL() {
		// IE/Edge only render data-URI based background-image when the image data
		// is escaped.
		// Ref: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/#comment-3
		return "data:image/svg+xml," + encodeURIComponent(this.svg);
	},

	get blobURL() {
		// Warning: Flicker when updating due to slow blob: URL resolution :(
		// TODO cache this and only update it when color stops change
		return URL.createObjectURL(new Blob([this.svg], {type: "image/svg+xml"}));
	},

	get svg() {
		return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none">' +
			'<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">' +
			'<image width="100" height="100%" xlink:href="' + this.png + '" /></svg></svg>';
	},

	get png() {
		return this.canvas.toDataURL();
	},

	get r() {
		return Math.sqrt(2) * this.size / 2;
	},

	// Paint the conical gradient on the canvas
	// Algorithm inspired from http://jsdo.it/akm2/yr9B
	paint: function() {
		var c = this.context;

		var radius = this.r;
		var x = this.size / 2;

		var stopIndex = 0; // The index of the current color
		var stop = this.stops[stopIndex], prevStop;

		var diff, t;

		// Transform coordinate system so that angles start from the top left, like in CSS
		c.translate(this.size/2, this.size/2);
		c.rotate(-90*deg);
		c.rotate(this.from*deg);
		c.translate(-this.size/2, -this.size/2);

		for (var i = 0; i < 360;) {
			if (i/360 + ε >= stop.pos) {
				// Switch color stop
				do {
					prevStop = stop;

					stopIndex++;
					stop = this.stops[stopIndex];
				} while(stop && stop != prevStop && stop.pos === prevStop.pos);

				if (!stop) {
					break;
				}

				var sameColor = prevStop.color + "" === stop.color + "" && prevStop != stop;

				diff = prevStop.color.map(function(c, i){
					return stop.color[i] - c;
				});
			}

			t = (i/360 - prevStop.pos) / (stop.pos - prevStop.pos);

			var interpolated = sameColor? stop.color : diff.map(function(d,i){
				var ret = d * t + prevStop.color[i];

				return i < 3? ret & 255 : ret;
			});

			// Draw a series of arcs, 1deg each
			c.fillStyle = 'rgba(' + interpolated.join(",") + ')';
			c.beginPath();
			c.moveTo(x, x);

			if (sameColor) {
				var θ = 360 * (stop.pos - prevStop.pos);
			}
			else {
				var θ = .5;
			}

			var beginArg = i*deg;
			beginArg = Math.min(360*deg, beginArg);

			// .02: To prevent empty blank line and corresponding moire
			// only non-alpha colors are cared now
			var endArg = beginArg + θ*deg;
			endArg = Math.min(360*deg, endArg + .02);

			c.arc(x, x, radius, beginArg, endArg);

			c.closePath();
			c.fill();

			i += θ;
		}
	}
};

_.ColorStop = function(gradient, stop) {
	this.gradient = gradient;

	if (stop) {
		var parts = stop.match(/^(.+?)(?:\s+([\d.]+)(%|deg|turn|grad|rad)?)?(?:\s+([\d.]+)(%|deg|turn|grad|rad)?)?\s*$/);

		this.color = _.ColorStop.colorToRGBA(parts[1]);

		if (parts[2]) {
			var unit = parts[3];

			if (unit == "%" || parts[2] === "0" && !unit) {
				this.pos = parts[2]/100;
			}
			else if (unit == "turn") {
				this.pos  = +parts[2];
			}
			else if (unit == "deg") {
				this.pos  = parts[2] / 360;
			}
			else if (unit == "grad") {
				this.pos  = parts[2] / 400;
			}
			else if (unit == "rad") {
				this.pos  = parts[2] / τ;
			}
		}

		if (parts[4]) {
			this.next = new _.ColorStop(gradient, parts[1] + " " + parts[4] + parts[5]);
		}
	}
}

_.ColorStop.prototype = {
	clone: function() {
		var ret = new _.ColorStop(this.gradient);
		ret.color = this.color;
		ret.pos = this.pos;

		return ret;
	},

	toString: function() {
		return "rgba(" + this.color.join(", ") + ") " + this.pos * 100 + "%";
	}
};

_.ColorStop.colorToRGBA = function(color) {
	if (!Array.isArray(color) && color.indexOf("from") == -1) {
		dummy.style.color = color;

		var rgba = getComputedStyle(dummy).color.match(/rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)/);

		if (rgba) {
			rgba.shift();
			rgba = rgba.map(function(a) { return +a });
			rgba[3] = isNaN(rgba[3])? 1 : rgba[3];
		}

		return rgba || [0,0,0,0];
	}

	return color;
};

})();

if (self.StyleFix) {
	// Test if conic gradients are supported first:
	(function(){
		var dummy = document.createElement("p");
		dummy.style.backgroundImage = "conic-gradient(white, black)";
		dummy.style.backgroundImage = PrefixFree.prefix + "conic-gradient(white, black)";

		if (!dummy.style.backgroundImage) {
			// Not supported, use polyfill
			StyleFix.register(function(css, raw) {
				if (css.indexOf("conic-gradient") > -1) {
					css = css.replace(/(?:repeating-)?conic-gradient\(\s*((?:\([^()]+\)|[^;()}])+?)\)/g, function(gradient, stops) {
						return new ConicGradient({
							stops: stops,
							repeating: gradient.indexOf("repeating-") > -1
						});
					});
				}

				return css;
			});
		}
	})();
}


/***/ }),

/***/ "./node_modules/is-arrayish/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-arrayish/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: getType, isUndefined, isNull, isPlainObject, isObject, isAnyObject, isObjectLike, isFunction, isArray, isString, isFullString, isEmptyString, isNumber, isBoolean, isRegExp, isDate, isSymbol, isPrimitive, isType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyObject", function() { return isAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullString", function() { return isFullString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return (payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype);
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: any}}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
function isFunction(payload) {
    return getType(payload) === 'Function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return (getType(payload) === 'Number' && !isNaN(payload));
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return (getType(payload) === 'Date' && !isNaN(payload));
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return (getType(payload) === 'Symbol');
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!type.hasOwnProperty('prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return (getType(payload) === name) || Boolean(payload && (payload.constructor === type));
}




/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default, merge, concatArrays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatArrays", function() { return concatArrays; });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer)) {
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = props_1.concat(symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = props.concat(symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(originVal) && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ __webpack_exports__["default"] = (merge);



/***/ }),

/***/ "./node_modules/nipplejs/dist/nipplejs.js":
/*!************************************************!*\
  !*** ./node_modules/nipplejs/dist/nipplejs.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;
'use strict';

// Constants
var isTouch = !!('ontouchstart' in window);
var isPointer = window.PointerEvent ? true : false;
var isMSPointer = window.MSPointerEvent ? true : false;
var events = {
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend, touchcancel'
    },
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
    },
    pointer: {
        start: 'pointerdown',
        move: 'pointermove',
        end: 'pointerup, pointercancel'
    },
    MSPointer: {
        start: 'MSPointerDown',
        move: 'MSPointerMove',
        end: 'MSPointerUp'
    }
};
var toBind;
var secondBind = {};
if (isPointer) {
    toBind = events.pointer;
} else if (isMSPointer) {
    toBind = events.MSPointer;
} else if (isTouch) {
    toBind = events.touch;
    secondBind = events.mouse;
} else {
    toBind = events.mouse;
}

///////////////////////
///      UTILS      ///
///////////////////////

var u = {};
u.distance = function (p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;

    return Math.sqrt((dx * dx) + (dy * dy));
};

u.angle = function(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;

    return u.degrees(Math.atan2(dy, dx));
};

u.findCoord = function(p, d, a) {
    var b = {x: 0, y: 0};
    a = u.radians(a);
    b.x = p.x - d * Math.cos(a);
    b.y = p.y - d * Math.sin(a);
    return b;
};

u.radians = function(a) {
    return a * (Math.PI / 180);
};

u.degrees = function(a) {
    return a * (180 / Math.PI);
};

u.bindEvt = function (el, arg, handler) {
    var types = arg.split(/[ ,]+/g);
    var type;
    for (var i = 0; i < types.length; i += 1) {
        type = types[i];
        if (el.addEventListener) {
            el.addEventListener(type, handler, false);
        } else if (el.attachEvent) {
            el.attachEvent(type, handler);
        }
    }
};

u.unbindEvt = function (el, arg, handler) {
    var types = arg.split(/[ ,]+/g);
    var type;
    for (var i = 0; i < types.length; i += 1) {
        type = types[i];
        if (el.removeEventListener) {
            el.removeEventListener(type, handler);
        } else if (el.detachEvent) {
            el.detachEvent(type, handler);
        }
    }
};

u.trigger = function (el, type, data) {
    var evt = new CustomEvent(type, data);
    el.dispatchEvent(evt);
};

u.prepareEvent = function (evt) {
    evt.preventDefault();
    return evt.type.match(/^touch/) ? evt.changedTouches : evt;
};

u.getScroll = function () {
    var x = (window.pageXOffset !== undefined) ?
        window.pageXOffset :
        (document.documentElement || document.body.parentNode || document.body)
            .scrollLeft;

    var y = (window.pageYOffset !== undefined) ?
        window.pageYOffset :
        (document.documentElement || document.body.parentNode || document.body)
            .scrollTop;
    return {
        x: x,
        y: y
    };
};

u.applyPosition = function (el, pos) {
    if (pos.top || pos.right || pos.bottom || pos.left) {
        el.style.top = pos.top;
        el.style.right = pos.right;
        el.style.bottom = pos.bottom;
        el.style.left = pos.left;
    } else {
        el.style.left = pos.x + 'px';
        el.style.top = pos.y + 'px';
    }
};

u.getTransitionStyle = function (property, values, time) {
    var obj = u.configStylePropertyObject(property);
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (typeof values === 'string') {
                obj[i] = values + ' ' + time;
            } else {
                var st = '';
                for (var j = 0, max = values.length; j < max; j += 1) {
                    st += values[j] + ' ' + time + ', ';
                }
                obj[i] = st.slice(0, -2);
            }
        }
    }
    return obj;
};

u.getVendorStyle = function (property, value) {
    var obj = u.configStylePropertyObject(property);
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            obj[i] = value;
        }
    }
    return obj;
};

u.configStylePropertyObject = function (prop) {
    var obj = {};
    obj[prop] = '';
    var vendors = ['webkit', 'Moz', 'o'];
    vendors.forEach(function (vendor) {
        obj[vendor + prop.charAt(0).toUpperCase() + prop.slice(1)] = '';
    });
    return obj;
};

u.extend = function (objA, objB) {
    for (var i in objB) {
        if (objB.hasOwnProperty(i)) {
            objA[i] = objB[i];
        }
    }
    return objA;
};

// Overwrite only what's already present
u.safeExtend = function (objA, objB) {
    var obj = {};
    for (var i in objA) {
        if (objA.hasOwnProperty(i) && objB.hasOwnProperty(i)) {
            obj[i] = objB[i];
        } else if (objA.hasOwnProperty(i)) {
            obj[i] = objA[i];
        }
    }
    return obj;
};

// Map for array or unique item.
u.map = function (ar, fn) {
    if (ar.length) {
        for (var i = 0, max = ar.length; i < max; i += 1) {
            fn(ar[i]);
        }
    } else {
        fn(ar);
    }
};

///////////////////////
///   SUPER CLASS   ///
///////////////////////

function Super () {};

// Basic event system.
Super.prototype.on = function (arg, cb) {
    var self = this;
    var types = arg.split(/[ ,]+/g);
    var type;
    self._handlers_ = self._handlers_ || {};

    for (var i = 0; i < types.length; i += 1) {
        type = types[i];
        self._handlers_[type] = self._handlers_[type] || [];
        self._handlers_[type].push(cb);
    }
    return self;
};

Super.prototype.off = function (type, cb) {
    var self = this;
    self._handlers_ = self._handlers_ || {};

    if (type === undefined) {
        self._handlers_ = {};
    } else if (cb === undefined) {
        self._handlers_[type] = null;
    } else if (self._handlers_[type] &&
            self._handlers_[type].indexOf(cb) >= 0) {
        self._handlers_[type].splice(self._handlers_[type].indexOf(cb), 1);
    }

    return self;
};

Super.prototype.trigger = function (arg, data) {
    var self = this;
    var types = arg.split(/[ ,]+/g);
    var type;
    self._handlers_ = self._handlers_ || {};

    for (var i = 0; i < types.length; i += 1) {
        type = types[i];
        if (self._handlers_[type] && self._handlers_[type].length) {
            self._handlers_[type].forEach(function (handler) {
                handler.call(self, {
                    type: type,
                    target: self
                }, data);
            });
        }
    }
};

// Configuration
Super.prototype.config = function (options) {
    var self = this;
    self.options = self.defaults || {};
    if (options) {
        self.options = u.safeExtend(self.options, options);
    }
};

// Bind internal events.
Super.prototype.bindEvt = function (el, type) {
    var self = this;
    self._domHandlers_ = self._domHandlers_ || {};

    self._domHandlers_[type] = function () {
        if (typeof self['on' + type] === 'function') {
            self['on' + type].apply(self, arguments);
        } else {
            console.warn('[WARNING] : Missing "on' + type + '" handler.');
        }
    };

    u.bindEvt(el, toBind[type], self._domHandlers_[type]);

    if (secondBind[type]) {
        // Support for both touch and mouse at the same time.
        u.bindEvt(el, secondBind[type], self._domHandlers_[type]);
    }

    return self;
};

// Unbind dom events.
Super.prototype.unbindEvt = function (el, type) {
    var self = this;
    self._domHandlers_ = self._domHandlers_ || {};

    u.unbindEvt(el, toBind[type], self._domHandlers_[type]);

    if (secondBind[type]) {
        // Support for both touch and mouse at the same time.
        u.unbindEvt(el, secondBind[type], self._domHandlers_[type]);
    }

    delete self._domHandlers_[type];

    return this;
};

///////////////////////
///   THE NIPPLE    ///
///////////////////////

function Nipple (collection, options) {
    this.identifier = options.identifier;
    this.position = options.position;
    this.frontPosition = options.frontPosition;
    this.collection = collection;

    // Defaults
    this.defaults = {
        size: 100,
        threshold: 0.1,
        color: 'white',
        fadeTime: 250,
        dataOnly: false,
        restJoystick: true,
        restOpacity: 0.5,
        mode: 'dynamic',
        zone: document.body,
        lockX: false,
        lockY: false
    };

    this.config(options);

    // Overwrites
    if (this.options.mode === 'dynamic') {
        this.options.restOpacity = 0;
    }

    this.id = Nipple.id;
    Nipple.id += 1;
    this.buildEl()
        .stylize();

    // Nipple's API.
    this.instance = {
        el: this.ui.el,
        on: this.on.bind(this),
        off: this.off.bind(this),
        show: this.show.bind(this),
        hide: this.hide.bind(this),
        add: this.addToDom.bind(this),
        remove: this.removeFromDom.bind(this),
        destroy: this.destroy.bind(this),
        resetDirection: this.resetDirection.bind(this),
        computeDirection: this.computeDirection.bind(this),
        trigger: this.trigger.bind(this),
        position: this.position,
        frontPosition: this.frontPosition,
        ui: this.ui,
        identifier: this.identifier,
        id: this.id,
        options: this.options
    };

    return this.instance;
};

Nipple.prototype = new Super();
Nipple.constructor = Nipple;
Nipple.id = 0;

// Build the dom element of the Nipple instance.
Nipple.prototype.buildEl = function (options) {
    this.ui = {};

    if (this.options.dataOnly) {
        return this;
    }

    this.ui.el = document.createElement('div');
    this.ui.back = document.createElement('div');
    this.ui.front = document.createElement('div');

    this.ui.el.className = 'nipple collection_' + this.collection.id;
    this.ui.back.className = 'back';
    this.ui.front.className = 'front';

    this.ui.el.setAttribute('id', 'nipple_' + this.collection.id +
        '_' + this.id);

    this.ui.el.appendChild(this.ui.back);
    this.ui.el.appendChild(this.ui.front);

    return this;
};

// Apply CSS to the Nipple instance.
Nipple.prototype.stylize = function () {
    if (this.options.dataOnly) {
        return this;
    }
    var animTime = this.options.fadeTime + 'ms';
    var borderStyle = u.getVendorStyle('borderRadius', '50%');
    var transitStyle = u.getTransitionStyle('transition', 'opacity', animTime);
    var styles = {};
    styles.el = {
        position: 'absolute',
        opacity: this.options.restOpacity,
        display: 'block',
        'zIndex': 999
    };

    styles.back = {
        position: 'absolute',
        display: 'block',
        width: this.options.size + 'px',
        height: this.options.size + 'px',
        marginLeft: -this.options.size / 2 + 'px',
        marginTop: -this.options.size / 2 + 'px',
        background: this.options.color,
        'opacity': '.5'
    };

    styles.front = {
        width: this.options.size / 2 + 'px',
        height: this.options.size / 2 + 'px',
        position: 'absolute',
        display: 'block',
        marginLeft: -this.options.size / 4 + 'px',
        marginTop: -this.options.size / 4 + 'px',
        background: this.options.color,
        'opacity': '.5'
    };

    u.extend(styles.el, transitStyle);
    u.extend(styles.back, borderStyle);
    u.extend(styles.front, borderStyle);

    this.applyStyles(styles);

    return this;
};

Nipple.prototype.applyStyles = function (styles) {
    // Apply styles
    for (var i in this.ui) {
        if (this.ui.hasOwnProperty(i)) {
            for (var j in styles[i]) {
                this.ui[i].style[j] = styles[i][j];
            }
        }
    }

    return this;
};

// Inject the Nipple instance into DOM.
Nipple.prototype.addToDom = function () {
    // We're not adding it if we're dataOnly or already in dom.
    if (this.options.dataOnly || document.body.contains(this.ui.el)) {
        return this;
    }
    this.options.zone.appendChild(this.ui.el);
    return this;
};

// Remove the Nipple instance from DOM.
Nipple.prototype.removeFromDom = function () {
    if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
        return this;
    }
    this.options.zone.removeChild(this.ui.el);
    return this;
};

// Entirely destroy this nipple
Nipple.prototype.destroy = function () {
    clearTimeout(this.removeTimeout);
    clearTimeout(this.showTimeout);
    clearTimeout(this.restTimeout);
    this.trigger('destroyed', this.instance);
    this.removeFromDom();
    this.off();
};

// Fade in the Nipple instance.
Nipple.prototype.show = function (cb) {
    var self = this;

    if (self.options.dataOnly) {
        return self;
    }

    clearTimeout(self.removeTimeout);
    clearTimeout(self.showTimeout);
    clearTimeout(self.restTimeout);

    self.addToDom();

    self.restCallback();

    setTimeout(function () {
        self.ui.el.style.opacity = 1;
    }, 0);

    self.showTimeout = setTimeout(function () {
        self.trigger('shown', self.instance);
        if (typeof cb === 'function') {
            cb.call(this);
        }
    }, self.options.fadeTime);

    return self;
};

// Fade out the Nipple instance.
Nipple.prototype.hide = function (cb) {
    var self = this;

    if (self.options.dataOnly) {
        return self;
    }

    self.ui.el.style.opacity = self.options.restOpacity;

    clearTimeout(self.removeTimeout);
    clearTimeout(self.showTimeout);
    clearTimeout(self.restTimeout);

    self.removeTimeout = setTimeout(
        function () {
            var display = self.options.mode === 'dynamic' ? 'none' : 'block';
            self.ui.el.style.display = display;
            if (typeof cb === 'function') {
                cb.call(self);
            }

            self.trigger('hidden', self.instance);
        },
        self.options.fadeTime
    );
    if (self.options.restJoystick) {
        self.restPosition();
    }

    return self;
};

Nipple.prototype.restPosition = function (cb) {
    var self = this;
    self.frontPosition = {
        x: 0,
        y: 0
    };
    var animTime = self.options.fadeTime + 'ms';

    var transitStyle = {};
    transitStyle.front = u.getTransitionStyle('transition',
        ['top', 'left'], animTime);

    var styles = {front: {}};
    styles.front = {
        left: self.frontPosition.x + 'px',
        top: self.frontPosition.y + 'px'
    };

    self.applyStyles(transitStyle);
    self.applyStyles(styles);

    self.restTimeout = setTimeout(
        function () {
            if (typeof cb === 'function') {
                cb.call(self);
            }
            self.restCallback();
        },
        self.options.fadeTime
    );
};

Nipple.prototype.restCallback = function () {
    var self = this;
    var transitStyle = {};
    transitStyle.front = u.getTransitionStyle('transition', 'none', '');
    self.applyStyles(transitStyle);
    self.trigger('rested', self.instance);
};

Nipple.prototype.resetDirection = function () {
    // Fully rebuild the object to let the iteration possible.
    this.direction = {
        x: false,
        y: false,
        angle: false
    };
};

Nipple.prototype.computeDirection = function (obj) {
    var rAngle = obj.angle.radian;
    var angle45 = Math.PI / 4;
    var angle90 = Math.PI / 2;
    var direction, directionX, directionY;

    // Angular direction
    //     \  UP /
    //      \   /
    // LEFT       RIGHT
    //      /   \
    //     /DOWN \
    //
    if (
        rAngle > angle45 &&
        rAngle < (angle45 * 3) &&
        !obj.lockX
    ) {
        direction = 'up';
    } else if (
        rAngle > -angle45 &&
        rAngle <= angle45 &&
        !obj.lockY
    ) {
        direction = 'left';
    } else if (
        rAngle > (-angle45 * 3) &&
        rAngle <= -angle45 &&
        !obj.lockX
    ) {
        direction = 'down';
    } else if (!obj.lockY) {
        direction = 'right';
    }

    // Plain direction
    //    UP                 |
    // _______               | RIGHT
    //                  LEFT |
    //   DOWN                |
    if (!obj.lockY) {
        if (rAngle > -angle90 && rAngle < angle90) {
            directionX = 'left';
        } else {
            directionX = 'right';
        }
    }

    if (!obj.lockX) {
        if (rAngle > 0) {
            directionY = 'up';
        } else {
            directionY = 'down';
        }
    }

    if (obj.force > this.options.threshold) {
        var oldDirection = {};
        for (var i in this.direction) {
            if (this.direction.hasOwnProperty(i)) {
                oldDirection[i] = this.direction[i];
            }
        }

        var same = {};

        this.direction = {
            x: directionX,
            y: directionY,
            angle: direction
        };

        obj.direction = this.direction;

        for (var i in oldDirection) {
            if (oldDirection[i] === this.direction[i]) {
                same[i] = true;
            }
        }

        // If all 3 directions are the same, we don't trigger anything.
        if (same.x && same.y && same.angle) {
            return obj;
        }

        if (!same.x || !same.y) {
            this.trigger('plain', obj);
        }

        if (!same.x) {
            this.trigger('plain:' + directionX, obj);
        }

        if (!same.y) {
            this.trigger('plain:' + directionY, obj);
        }

        if (!same.angle) {
            this.trigger('dir dir:' + direction, obj);
        }
    }
    return obj;
};

/* global Nipple, Super */

///////////////////////////
///   THE COLLECTION    ///
///////////////////////////

function Collection (manager, options) {
    var self = this;
    self.nipples = [];
    self.idles = [];
    self.actives = [];
    self.ids = [];
    self.pressureIntervals = {};
    self.manager = manager;
    self.id = Collection.id;
    Collection.id += 1;

    // Defaults
    self.defaults = {
        zone: document.body,
        multitouch: false,
        maxNumberOfNipples: 10,
        mode: 'dynamic',
        position: {top: 0, left: 0},
        catchDistance: 200,
        size: 100,
        threshold: 0.1,
        color: 'white',
        fadeTime: 250,
        dataOnly: false,
        restJoystick: true,
        restOpacity: 0.5,
        lockX: false,
        lockY: false
    };

    self.config(options);

    // Overwrites
    if (self.options.mode === 'static' || self.options.mode === 'semi') {
        self.options.multitouch = false;
    }

    if (!self.options.multitouch) {
        self.options.maxNumberOfNipples = 1;
    }

    self.updateBox();
    self.prepareNipples();
    self.bindings();
    self.begin();

    return self.nipples;
}

Collection.prototype = new Super();
Collection.constructor = Collection;
Collection.id = 0;

Collection.prototype.prepareNipples = function () {
    var self = this;
    var nips = self.nipples;

    // Public API Preparation.
    nips.on = self.on.bind(self);
    nips.off = self.off.bind(self);
    nips.options = self.options;
    nips.destroy = self.destroy.bind(self);
    nips.ids = self.ids;
    nips.id = self.id;
    nips.processOnMove = self.processOnMove.bind(self);
    nips.processOnEnd = self.processOnEnd.bind(self);
    nips.get = function (id) {
        if (id === undefined) {
            return nips[0];
        }
        for (var i = 0, max = nips.length; i < max; i += 1) {
            if (nips[i].identifier === id) {
                return nips[i];
            }
        }
        return false;
    };
};

Collection.prototype.bindings = function () {
    var self = this;
    // Touch start event.
    self.bindEvt(self.options.zone, 'start');
    // Avoid native touch actions (scroll, zoom etc...) on the zone.
    self.options.zone.style.touchAction = 'none';
    self.options.zone.style.msTouchAction = 'none';
};

Collection.prototype.begin = function () {
    var self = this;
    var opts = self.options;

    // We place our static nipple
    // if needed.
    if (opts.mode === 'static') {
        var nipple = self.createNipple(
            opts.position,
            self.manager.getIdentifier()
        );
        // Add it to the dom.
        nipple.add();
        // Store it in idles.
        self.idles.push(nipple);
    }
};

// Nipple Factory
Collection.prototype.createNipple = function (position, identifier) {
    var self = this;
    var scroll = u.getScroll();
    var toPutOn = {};
    var opts = self.options;

    if (position.x && position.y) {
        toPutOn = {
            x: position.x -
                (scroll.x + self.box.left),
            y: position.y -
                (scroll.y + self.box.top)
        };
    } else if (
            position.top ||
            position.right ||
            position.bottom ||
            position.left
        ) {

        // We need to compute the position X / Y of the joystick.
        var dumb = document.createElement('DIV');
        dumb.style.display = 'hidden';
        dumb.style.top = position.top;
        dumb.style.right = position.right;
        dumb.style.bottom = position.bottom;
        dumb.style.left = position.left;
        dumb.style.position = 'absolute';

        opts.zone.appendChild(dumb);
        var dumbBox = dumb.getBoundingClientRect();
        opts.zone.removeChild(dumb);

        toPutOn = position;
        position = {
            x: dumbBox.left + scroll.x,
            y: dumbBox.top + scroll.y
        };
    }

    var nipple = new Nipple(self, {
        color: opts.color,
        size: opts.size,
        threshold: opts.threshold,
        fadeTime: opts.fadeTime,
        dataOnly: opts.dataOnly,
        restJoystick: opts.restJoystick,
        restOpacity: opts.restOpacity,
        mode: opts.mode,
        identifier: identifier,
        position: position,
        zone: opts.zone,
        frontPosition: {
            x: 0,
            y: 0
        }
    });

    if (!opts.dataOnly) {
        u.applyPosition(nipple.ui.el, toPutOn);
        u.applyPosition(nipple.ui.front, nipple.frontPosition);
    }
    self.nipples.push(nipple);
    self.trigger('added ' + nipple.identifier + ':added', nipple);
    self.manager.trigger('added ' + nipple.identifier + ':added', nipple);

    self.bindNipple(nipple);

    return nipple;
};

Collection.prototype.updateBox = function () {
    var self = this;
    self.box = self.options.zone.getBoundingClientRect();
};

Collection.prototype.bindNipple = function (nipple) {
    var self = this;
    var type;
    // Bubble up identified events.
    var handler = function (evt, data) {
        // Identify the event type with the nipple's id.
        type = evt.type + ' ' + data.id + ':' + evt.type;
        self.trigger(type, data);
    };

    // When it gets destroyed.
    nipple.on('destroyed', self.onDestroyed.bind(self));

    // Other events that will get bubbled up.
    nipple.on('shown hidden rested dir plain', handler);
    nipple.on('dir:up dir:right dir:down dir:left', handler);
    nipple.on('plain:up plain:right plain:down plain:left', handler);
};

Collection.prototype.pressureFn = function (touch, nipple, identifier) {
    var self = this;
    var previousPressure = 0;
    clearInterval(self.pressureIntervals[identifier]);
    // Create an interval that will read the pressure every 100ms
    self.pressureIntervals[identifier] = setInterval(function () {
        var pressure = touch.force || touch.pressure ||
            touch.webkitForce || 0;
        if (pressure !== previousPressure) {
            nipple.trigger('pressure', pressure);
            self.trigger('pressure ' +
                nipple.identifier + ':pressure', pressure);
            previousPressure = pressure;
        }
    }.bind(self), 100);
};

Collection.prototype.onstart = function (evt) {
    var self = this;
    var opts = self.options;
    evt = u.prepareEvent(evt);

    // Update the box position
    self.updateBox();

    var process = function (touch) {
        // If we can create new nipples
        // meaning we don't have more active nipples than we should.
        if (self.actives.length < opts.maxNumberOfNipples) {
            self.processOnStart(touch);
        }
    };

    u.map(evt, process);

    // We ask upstream to bind the document
    // on 'move' and 'end'
    self.manager.bindDocument();
    return false;
};

Collection.prototype.processOnStart = function (evt) {
    var self = this;
    var opts = self.options;
    var indexInIdles;
    var identifier = self.manager.getIdentifier(evt);
    var pressure = evt.force || evt.pressure || evt.webkitForce || 0;
    var position = {
        x: evt.pageX,
        y: evt.pageY
    };

    var nipple = self.getOrCreate(identifier, position);

    // Update its touch identifier
    if (nipple.identifier !== identifier) {
        self.manager.removeIdentifier(nipple.identifier);
    }
    nipple.identifier = identifier;

    var process = function (nip) {
        // Trigger the start.
        nip.trigger('start', nip);
        self.trigger('start ' + nip.id + ':start', nip);

        nip.show();
        if (pressure > 0) {
            self.pressureFn(evt, nip, nip.identifier);
        }
        // Trigger the first move event.
        self.processOnMove(evt);
    };

    // Transfer it from idles to actives.
    if ((indexInIdles = self.idles.indexOf(nipple)) >= 0) {
        self.idles.splice(indexInIdles, 1);
    }

    // Store the nipple in the actives array
    self.actives.push(nipple);
    self.ids.push(nipple.identifier);

    if (opts.mode !== 'semi') {
        process(nipple);
    } else {
        // In semi we check the distance of the touch
        // to decide if we have to reset the nipple
        var distance = u.distance(position, nipple.position);
        if (distance <= opts.catchDistance) {
            process(nipple);
        } else {
            nipple.destroy();
            self.processOnStart(evt);
            return;
        }
    }

    return nipple;
};

Collection.prototype.getOrCreate = function (identifier, position) {
    var self = this;
    var opts = self.options;
    var nipple;

    // If we're in static or semi, we might already have an active.
    if (/(semi|static)/.test(opts.mode)) {
        // Get the active one.
        // TODO: Multi-touche for semi and static will start here.
        // Return the nearest one.
        nipple = self.idles[0];
        if (nipple) {
            self.idles.splice(0, 1);
            return nipple;
        }

        if (opts.mode === 'semi') {
            // If we're in semi mode, we need to create one.
            return self.createNipple(position, identifier);
        }

        console.warn('Coudln\'t find the needed nipple.');
        return false;
    }
    // In dynamic, we create a new one.
    nipple = self.createNipple(position, identifier);
    return nipple;
};

Collection.prototype.processOnMove = function (evt) {
    var self = this;
    var opts = self.options;
    var identifier = self.manager.getIdentifier(evt);
    var nipple = self.nipples.get(identifier);

    if (!nipple) {
        // This is here just for safety.
        // It shouldn't happen.
        console.error('Found zombie joystick with ID ' + identifier);
        self.manager.removeIdentifier(identifier);
        return;
    }

    nipple.identifier = identifier;

    var size = nipple.options.size / 2;
    var pos = {
        x: evt.pageX,
        y: evt.pageY
    };

    var dist = u.distance(pos, nipple.position);
    var angle = u.angle(pos, nipple.position);
    var rAngle = u.radians(angle);
    var force = dist / size;

    // If distance is bigger than nipple's size
    // we clamp the position.
    if (dist > size) {
        dist = size;
        pos = u.findCoord(nipple.position, dist, angle);
    }

    var xPosition = pos.x - nipple.position.x
    var yPosition = pos.y - nipple.position.y

    if (opts.lockX){
        yPosition = 0
    }
    if (opts.lockY) {
        xPosition = 0
    }

    nipple.frontPosition = {
        x: xPosition,
        y: yPosition
    };

    if (!opts.dataOnly) {
        u.applyPosition(nipple.ui.front, nipple.frontPosition);
    }

    // Prepare event's datas.
    var toSend = {
        identifier: nipple.identifier,
        position: pos,
        force: force,
        pressure: evt.force || evt.pressure || evt.webkitForce || 0,
        distance: dist,
        angle: {
            radian: rAngle,
            degree: angle
        },
        instance: nipple,
        lockX: opts.lockX,
        lockY: opts.lockY
    };

    // Compute the direction's datas.
    toSend = nipple.computeDirection(toSend);

    // Offset angles to follow units circle.
    toSend.angle = {
        radian: u.radians(180 - angle),
        degree: 180 - angle
    };

    // Send everything to everyone.
    nipple.trigger('move', toSend);
    self.trigger('move ' + nipple.id + ':move', toSend);
};

Collection.prototype.processOnEnd = function (evt) {
    var self = this;
    var opts = self.options;
    var identifier = self.manager.getIdentifier(evt);
    var nipple = self.nipples.get(identifier);
    var removedIdentifier = self.manager.removeIdentifier(nipple.identifier);

    if (!nipple) {
        return;
    }

    if (!opts.dataOnly) {
        nipple.hide(function () {
            if (opts.mode === 'dynamic') {
                nipple.trigger('removed', nipple);
                self.trigger('removed ' + nipple.id + ':removed', nipple);
                self.manager
                    .trigger('removed ' + nipple.id + ':removed', nipple);
                nipple.destroy();
            }
        });
    }

    // Clear the pressure interval reader
    clearInterval(self.pressureIntervals[nipple.identifier]);

    // Reset the direciton of the nipple, to be able to trigger a new direction
    // on start.
    nipple.resetDirection();

    nipple.trigger('end', nipple);
    self.trigger('end ' + nipple.id + ':end', nipple);

    // Remove identifier from our bank.
    if (self.ids.indexOf(nipple.identifier) >= 0) {
        self.ids.splice(self.ids.indexOf(nipple.identifier), 1);
    }

    // Clean our actives array.
    if (self.actives.indexOf(nipple) >= 0) {
        self.actives.splice(self.actives.indexOf(nipple), 1);
    }

    if (/(semi|static)/.test(opts.mode)) {
        // Transfer nipple from actives to idles
        // if we're in semi or static mode.
        self.idles.push(nipple);
    } else if (self.nipples.indexOf(nipple) >= 0) {
        // Only if we're not in semi or static mode
        // we can remove the instance.
        self.nipples.splice(self.nipples.indexOf(nipple), 1);
    }

    // We unbind move and end.
    self.manager.unbindDocument();

    // We add back the identifier of the idle nipple;
    if (/(semi|static)/.test(opts.mode)) {
        self.manager.ids[removedIdentifier.id] = removedIdentifier.identifier;
    }
};

// Remove destroyed nipple from the lists
Collection.prototype.onDestroyed = function(evt, nipple) {
    var self = this;
    if (self.nipples.indexOf(nipple) >= 0) {
        self.nipples.splice(self.nipples.indexOf(nipple), 1);
    }
    if (self.actives.indexOf(nipple) >= 0) {
        self.actives.splice(self.actives.indexOf(nipple), 1);
    }
    if (self.idles.indexOf(nipple) >= 0) {
        self.idles.splice(self.idles.indexOf(nipple), 1);
    }
    if (self.ids.indexOf(nipple.identifier) >= 0) {
        self.ids.splice(self.ids.indexOf(nipple.identifier), 1);
    }

    // Remove the identifier from our bank
    self.manager.removeIdentifier(nipple.identifier);

    // We unbind move and end.
    self.manager.unbindDocument();
};

// Cleanly destroy the manager
Collection.prototype.destroy = function () {
    var self = this;
    self.unbindEvt(self.options.zone, 'start');

    // Destroy nipples.
    self.nipples.forEach(function(nipple) {
        nipple.destroy();
    });

    // Clean 3DTouch intervals.
    for (var i in self.pressureIntervals) {
        if (self.pressureIntervals.hasOwnProperty(i)) {
            clearInterval(self.pressureIntervals[i]);
        }
    }

    // Notify the manager passing the instance
    self.trigger('destroyed', self.nipples);
    // We unbind move and end.
    self.manager.unbindDocument();
    // Unbind everything.
    self.off();
};

/* global u, Super, Collection */

///////////////////////
///     MANAGER     ///
///////////////////////

function Manager (options) {
    var self = this;
    self.ids = {};
    self.index = 0;
    self.collections = [];

    self.config(options);
    self.prepareCollections();

    // Listen for resize, to reposition every joysticks
    var resizeTimer;
    u.bindEvt(window, 'resize', function (evt) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            var pos;
            var scroll = u.getScroll();
            self.collections.forEach(function (collection) {
                collection.forEach(function (nipple) {
                    pos = nipple.el.getBoundingClientRect();
                    nipple.position = {
                        x: scroll.x + pos.left,
                        y: scroll.y + pos.top
                    };
                });
            });
        }, 100);
    });

    return self.collections;
};

Manager.prototype = new Super();
Manager.constructor = Manager;

Manager.prototype.prepareCollections = function () {
    var self = this;
    // Public API Preparation.
    self.collections.create = self.create.bind(self);
    // Listen to anything
    self.collections.on = self.on.bind(self);
    // Unbind general events
    self.collections.off = self.off.bind(self);
    // Destroy everything
    self.collections.destroy = self.destroy.bind(self);
    // Get any nipple
    self.collections.get = function (id) {
        var nipple;
        self.collections.every(function (collection) {
            if (nipple = collection.get(id)) {
                return false;
            }
            return true;
        });
        return nipple;
    };
};

Manager.prototype.create = function (options) {
    return this.createCollection(options);
};

// Collection Factory
Manager.prototype.createCollection = function (options) {
    var self = this;
    var collection = new Collection(self, options);

    self.bindCollection(collection);
    self.collections.push(collection);

    return collection;
};

Manager.prototype.bindCollection = function (collection) {
    var self = this;
    var type;
    // Bubble up identified events.
    var handler = function (evt, data) {
        // Identify the event type with the nipple's identifier.
        type = evt.type + ' ' + data.id + ':' + evt.type;
        self.trigger(type, data);
    };

    // When it gets destroyed we clean.
    collection.on('destroyed', self.onDestroyed.bind(self));

    // Other events that will get bubbled up.
    collection.on('shown hidden rested dir plain', handler);
    collection.on('dir:up dir:right dir:down dir:left', handler);
    collection.on('plain:up plain:right plain:down plain:left', handler);
};

Manager.prototype.bindDocument = function () {
    var self = this;
    // Bind only if not already binded
    if (!self.binded) {
        self.bindEvt(document, 'move')
            .bindEvt(document, 'end');
        self.binded = true;
    }
};

Manager.prototype.unbindDocument = function (force) {
    var self = this;
    // If there are no touch left
    // unbind the document.
    if (!Object.keys(self.ids).length || force === true) {
        self.unbindEvt(document, 'move')
            .unbindEvt(document, 'end');
        self.binded = false;
    }
};

Manager.prototype.getIdentifier = function (evt) {
    var id;
    // If no event, simple increment
    if (!evt) {
        id = this.index;
    } else {
        // Extract identifier from event object.
        // Unavailable in mouse events so replaced by latest increment.
        id = evt.identifier === undefined ? evt.pointerId : evt.identifier;
        if (id === undefined) {
            id = this.latest || 0;
        }
    }

    if (this.ids[id] === undefined) {
        this.ids[id] = this.index;
        this.index += 1;
    }

    // Keep the latest id used in case we're using an unidentified mouseEvent
    this.latest = id;
    return this.ids[id];
};

Manager.prototype.removeIdentifier = function (identifier) {
    var removed = {};
    for (var id in this.ids) {
        if (this.ids[id] === identifier) {
            removed.id = id;
            removed.identifier = this.ids[id];
            delete this.ids[id];
            break;
        }
    }
    return removed;
};

Manager.prototype.onmove = function (evt) {
    var self = this;
    self.onAny('move', evt);
    return false;
};

Manager.prototype.onend = function (evt) {
    var self = this;
    self.onAny('end', evt);
    return false;
};

Manager.prototype.oncancel = function (evt) {
    var self = this;
    self.onAny('end', evt);
    return false;
};

Manager.prototype.onAny = function (which, evt) {
    var self = this;
    var id;
    var processFn = 'processOn' + which.charAt(0).toUpperCase() +
        which.slice(1);
    evt = u.prepareEvent(evt);
    var processColl = function (e, id, coll) {
        if (coll.ids.indexOf(id) >= 0) {
            coll[processFn](e);
            // Mark the event to avoid cleaning it later.
            e._found_ = true;
        }
    };
    var processEvt = function (e) {
        id = self.getIdentifier(e);
        u.map(self.collections, processColl.bind(null, e, id));
        // If the event isn't handled by any collection,
        // we need to clean its identifier.
        if (!e._found_) {
            self.removeIdentifier(id);
        }
    };

    u.map(evt, processEvt);

    return false;
};

// Cleanly destroy the manager
Manager.prototype.destroy = function () {
    var self = this;
    self.unbindDocument(true);
    self.ids = {};
    self.index = 0;
    self.collections.forEach(function(collection) {
        collection.destroy();
    });
    self.off();
};

// When a collection gets destroyed
// we clean behind.
Manager.prototype.onDestroyed = function (evt, coll) {
    var self = this;
    if (self.collections.indexOf(coll) < 0) {
        return false;
    }
    self.collections.splice(self.collections.indexOf(coll), 1);
};

var factory = new Manager();
return {
    create: function (options) {
        return factory.create(options);
    },
    factory: factory
};

});


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-numeric-input/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-numeric-input/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEYCODE_UP = 38;
	var KEYCODE_DOWN = 40;
	var IS_BROWSER = typeof document != 'undefined';
	var RE_NUMBER = /^[+-]?((\.\d+)|(\d+(\.\d+)?))$/;
	var RE_INCOMPLETE_NUMBER = /^([+-]|\.0*|[+-]\.0*|[+-]?\d+\.)?$/;

	function addClass(element, className) {
	    if (element.classList) {
	        return element.classList.add(className);
	    }
	    if (!element.className.search(new RegExp("\\b" + className + "\\b"))) {
	        element.className = " " + className;
	    }
	}

	function removeClass(element, className) {
	    if (element.className) {
	        if (element.classList) {
	            return element.classList.remove(className);
	        }

	        element.className = element.className.replace(new RegExp("\\b" + className + "\\b", "g"), "");
	    }
	}

	function access(object, prop, defaultValue) {
	    var result = object[prop];
	    if (typeof result == "function") {
	        for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	            args[_key - 3] = arguments[_key];
	        }

	        result = result.apply(undefined, args);
	    }
	    return result === undefined ? defaultValue : result;
	}

	var NumericInput = function (_Component) {
	    _inherits(NumericInput, _Component);

	    function NumericInput() {
	        var _ref;

	        _classCallCheck(this, NumericInput);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = NumericInput.__proto__ || Object.getPrototypeOf(NumericInput)).call.apply(_ref, [this].concat(args)));

	        _this._isStrict = !!_this.props.strict;

	        _this.state = _extends({
	            btnDownHover: false,
	            btnDownActive: false,
	            btnUpHover: false,
	            btnUpActive: false,
	            stringValue: ""
	        }, _this._propsToState(_this.props));
	        _this.stop = _this.stop.bind(_this);
	        _this.onTouchEnd = _this.onTouchEnd.bind(_this);
	        _this.refsInput = {};
	        _this.refsWrapper = {};
	        return _this;
	    }

	    _createClass(NumericInput, [{
	        key: '_propsToState',
	        value: function _propsToState(props) {
	            var out = {};

	            if (props.hasOwnProperty("value")) {
	                out.stringValue = String(props.value || props.value === 0 ? props.value : '').trim();

	                out.value = out.stringValue !== '' ? this._parse(props.value) : null;
	            } else if (!this._isMounted && props.hasOwnProperty("defaultValue")) {
	                out.stringValue = String(props.defaultValue || props.defaultValue === 0 ? props.defaultValue : '').trim();

	                out.value = props.defaultValue !== '' ? this._parse(props.defaultValue) : null;
	            }

	            return out;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            var _this2 = this;

	            this._isStrict = !!props.strict;
	            var nextState = this._propsToState(props);
	            if (Object.keys(nextState).length) {
	                this._ignoreValueChange = true;
	                this.setState(nextState, function () {
	                    _this2._ignoreValueChange = false;
	                });
	            }
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            this.saveSelection();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (!this._ignoreValueChange && prevState.value !== this.state.value && (!isNaN(this.state.value) || this.state.value === null)) {
	                    this._invokeEventCallback("onChange", this.state.value, this.refsInput.value, this.refsInput);
	                }

	            if (this._inputFocus) {
	                this.refsInput.focus();

	                if (this.state.selectionStart || this.state.selectionStart === 0) {
	                    this.refsInput.selectionStart = this.state.selectionStart;
	                }

	                if (this.state.selectionEnd || this.state.selectionEnd === 0) {
	                    this.refsInput.selectionEnd = this.state.selectionEnd;
	                }
	            }

	            this.checkValidity();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._isMounted = false;
	            this.stop();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            this._isMounted = true;
	            this.refsInput.getValueAsNumber = function () {
	                return _this3.state.value || 0;
	            };

	            this.refsInput.setValue = function (value) {
	                _this3.setState({
	                    value: _this3._parse(value),
	                    stringValue: value
	                });
	            };

	            if (!this._inputFocus && IS_BROWSER && document.activeElement === this.refsInput) {
	                this._inputFocus = true;
	                this.refsInput.focus();
	                this._invokeEventCallback("onFocus", {
	                    target: this.refsInput,
	                    type: "focus"
	                });
	            }

	            this.checkValidity();
	        }
	    }, {
	        key: 'saveSelection',
	        value: function saveSelection() {
	            this.state.selectionStart = this.refsInput.selectionStart;
	            this.state.selectionEnd = this.refsInput.selectionEnd;
	        }
	    }, {
	        key: 'checkValidity',
	        value: function checkValidity() {
	            var valid = void 0,
	                validationError = "";

	            var supportsValidation = !!this.refsInput.checkValidity;

	            var noValidate = !!(this.props.noValidate && this.props.noValidate != "false");

	            this.refsInput.noValidate = noValidate;

	            valid = noValidate || !supportsValidation;

	            if (valid) {
	                validationError = "";
	            } else {
	                if (this.refsInput.pattern === "") {
	                    this.refsInput.pattern = this.props.required ? ".+" : ".*";
	                }

	                if (supportsValidation) {
	                    this.refsInput.checkValidity();
	                    valid = this.refsInput.validity.valid;

	                    if (!valid) {
	                        validationError = this.refsInput.validationMessage;
	                    }
	                }

	                if (valid && supportsValidation && this.props.maxLength) {
	                    if (this.refsInput.value.length > this.props.maxLength) {
	                        validationError = "This value is too long";
	                    }
	                }
	            }

	            validationError = validationError || (valid ? "" : this.refsInput.validationMessage || "Unknown Error");

	            var validStateChanged = this._valid !== validationError;
	            this._valid = validationError;
	            if (validationError) {
	                addClass(this.refsWrapper, "has-error");
	                if (validStateChanged) {
	                    this._invokeEventCallback("onInvalid", validationError, this.state.value, this.refsInput.value);
	                }
	            } else {
	                removeClass(this.refsWrapper, "has-error");
	                if (validStateChanged) {
	                    this._invokeEventCallback("onValid", this.state.value, this.refsInput.value);
	                }
	            }
	        }
	    }, {
	        key: '_toNumber',
	        value: function _toNumber(x) {
	            var n = parseFloat(x);
	            if (isNaN(n) || !isFinite(n)) {
	                n = 0;
	            }

	            if (this._isStrict) {
	                var precision = access(this.props, "precision", null, this);
	                var q = Math.pow(10, precision === null ? 10 : precision);
	                var _min = +access(this.props, "min", NumericInput.defaultProps.min, this);
	                var _max = +access(this.props, "max", NumericInput.defaultProps.max, this);
	                n = Math.min(Math.max(n, _min), _max);
	                n = Math.round(n * q) / q;
	            }

	            return n;
	        }
	    }, {
	        key: '_parse',
	        value: function _parse(x) {
	            x = String(x);
	            if (typeof this.props.parse == 'function') {
	                return parseFloat(this.props.parse(x));
	            }
	            return parseFloat(x);
	        }
	    }, {
	        key: '_format',
	        value: function _format(n) {
	            var _n = this._toNumber(n);
	            var precision = access(this.props, "precision", null, this);
	            if (precision !== null) {
	                _n = n.toFixed(precision);
	            }

	            _n += "";

	            if (this.props.format) {
	                return this.props.format(_n);
	            }

	            return _n;
	        }
	    }, {
	        key: '_step',
	        value: function _step(n, callback) {
	            var _isStrict = this._isStrict;
	            this._isStrict = true;

	            var _step = +access(this.props, "step", NumericInput.defaultProps.step, this, n > 0 ? NumericInput.DIRECTION_UP : NumericInput.DIRECTION_DOWN);

	            var _n = this._toNumber((this.state.value || 0) + _step * n);

	            if (this.props.snap) {
	                _n = Math.round(_n / _step) * _step;
	            }

	            this._isStrict = _isStrict;

	            if (_n !== this.state.value) {
	                this.setState({ value: _n, stringValue: _n + "" }, callback);
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: '_onKeyDown',
	        value: function _onKeyDown() {
	            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                args[_key3] = arguments[_key3];
	            }

	            args[0].persist();
	            this._invokeEventCallback.apply(this, ["onKeyDown"].concat(args));
	            var e = args[0];
	            if (!e.isDefaultPrevented()) {
	                if (e.keyCode === KEYCODE_UP) {
	                    e.preventDefault();
	                    this._step(e.ctrlKey || e.metaKey ? 0.1 : e.shiftKey ? 10 : 1);
	                } else if (e.keyCode === KEYCODE_DOWN) {
	                    e.preventDefault();
	                    this._step(e.ctrlKey || e.metaKey ? -0.1 : e.shiftKey ? -10 : -1);
	                } else {
	                    var _value = this.refsInput.value,
	                        length = _value.length;
	                    if (e.keyCode === 8) {
	                        if (this.refsInput.selectionStart == this.refsInput.selectionEnd && this.refsInput.selectionEnd > 0 && _value.length && _value.charAt(this.refsInput.selectionEnd - 1) === ".") {
	                            e.preventDefault();
	                            this.refsInput.selectionStart = this.refsInput.selectionEnd = this.refsInput.selectionEnd - 1;
	                        }
	                    } else if (e.keyCode === 46) {
	                        if (this.refsInput.selectionStart == this.refsInput.selectionEnd && this.refsInput.selectionEnd < length + 1 && _value.length && _value.charAt(this.refsInput.selectionEnd) === ".") {
	                            e.preventDefault();
	                            this.refsInput.selectionStart = this.refsInput.selectionEnd = this.refsInput.selectionEnd + 1;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (this._timer) {
	                clearTimeout(this._timer);
	            }
	        }
	    }, {
	        key: 'increase',
	        value: function increase() {
	            var _this4 = this;

	            var _recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            var callback = arguments[1];

	            this.stop();
	            this._step(1, callback);
	            var _max = +access(this.props, "max", NumericInput.defaultProps.max, this);
	            if (isNaN(this.state.value) || +this.state.value < _max) {
	                this._timer = setTimeout(function () {
	                    _this4.increase(true);
	                }, _recursive ? NumericInput.SPEED : NumericInput.DELAY);
	            }
	        }
	    }, {
	        key: 'decrease',
	        value: function decrease() {
	            var _this5 = this;

	            var _recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            var callback = arguments[1];

	            this.stop();
	            this._step(-1, callback);
	            var _min = +access(this.props, "min", NumericInput.defaultProps.min, this);
	            if (isNaN(this.state.value) || +this.state.value > _min) {
	                this._timer = setTimeout(function () {
	                    _this5.decrease(true);
	                }, _recursive ? NumericInput.SPEED : NumericInput.DELAY);
	            }
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(dir, callback) {
	            if (dir == 'down') {
	                this.decrease(false, callback);
	            } else if (dir == 'up') {
	                this.increase(false, callback);
	            }
	        }
	    }, {
	        key: 'onTouchStart',
	        value: function onTouchStart(dir, e) {
	            e.preventDefault();
	            if (dir == 'down') {
	                this.decrease();
	            } else if (dir == 'up') {
	                this.increase();
	            }
	        }
	    }, {
	        key: 'onTouchEnd',
	        value: function onTouchEnd(e) {
	            e.preventDefault();
	            this.stop();
	        }
	    }, {
	        key: '_invokeEventCallback',
	        value: function _invokeEventCallback(callbackName) {
	            if (typeof this.props[callbackName] == "function") {
	                var _props$callbackName;

	                for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                    args[_key4 - 1] = arguments[_key4];
	                }

	                (_props$callbackName = this.props[callbackName]).call.apply(_props$callbackName, [null].concat(args));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            var props = this.props;
	            var state = this.state;
	            var css = {};

	            var _props = this.props,
	                step = _props.step,
	                min = _props.min,
	                max = _props.max,
	                precision = _props.precision,
	                parse = _props.parse,
	                format = _props.format,
	                mobile = _props.mobile,
	                snap = _props.snap,
	                componentClass = _props.componentClass,
	                value = _props.value,
	                type = _props.type,
	                style = _props.style,
	                defaultValue = _props.defaultValue,
	                onInvalid = _props.onInvalid,
	                onValid = _props.onValid,
	                strict = _props.strict,
	                noStyle = _props.noStyle,
	                rest = _objectWithoutProperties(_props, ['step', 'min', 'max', 'precision', 'parse', 'format', 'mobile', 'snap', 'componentClass', 'value', 'type', 'style', 'defaultValue', 'onInvalid', 'onValid', 'strict', 'noStyle']);

	            noStyle = noStyle || style === false;

	            for (var x in NumericInput.style) {
	                css[x] = _extends({}, NumericInput.style[x], style ? style[x] || {} : {});
	            }

	            var hasFormControl = props.className && /\bform-control\b/.test(props.className);

	            if (mobile == 'auto') {
	                mobile = IS_BROWSER && 'ontouchstart' in document;
	            }

	            if (typeof mobile == "function") {
	                mobile = mobile.call(this);
	            }
	            mobile = !!mobile;

	            var attrs = {
	                wrap: {
	                    style: noStyle ? null : css.wrap,
	                    className: 'react-numeric-input',
	                    ref: function ref(e) {
	                        if (e != null && e != undefined) {
	                            _this6.refsWrapper = e;
	                        }
	                    },
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined
	                },
	                input: _extends({
	                    ref: function ref(e) {
	                        if (e != null && e != undefined) {
	                            _this6.refsInput = e;
	                        }
	                    },
	                    type: 'text',
	                    style: noStyle ? null : _extends({}, css.input, !hasFormControl ? css['input:not(.form-control)'] : {}, this._inputFocus ? css['input:focus'] : {})
	                }, rest),
	                btnUp: {
	                    onMouseEnter: undefined,
	                    onMouseDown: undefined,
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined,
	                    onTouchStart: undefined,
	                    onTouchEnd: undefined,
	                    style: noStyle ? null : _extends({}, css.btn, css.btnUp, props.disabled || props.readOnly ? css['btn:disabled'] : state.btnUpActive ? css['btn:active'] : state.btnUpHover ? css['btn:hover'] : {})
	                },
	                btnDown: {
	                    onMouseEnter: undefined,
	                    onMouseDown: undefined,
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined,
	                    onTouchStart: undefined,
	                    onTouchEnd: undefined,
	                    style: noStyle ? null : _extends({}, css.btn, css.btnDown, props.disabled || props.readOnly ? css['btn:disabled'] : state.btnDownActive ? css['btn:active'] : state.btnDownHover ? css['btn:hover'] : {})
	                }
	            };

	            var stringValue = String(state.stringValue || (state.value || state.value === 0 ? state.value : "") || "");

	            var loose = !this._isStrict && (this._inputFocus || !this._isMounted);

	            if (loose && RE_INCOMPLETE_NUMBER.test(stringValue)) {
	                attrs.input.value = stringValue;
	            } else if (loose && stringValue && !RE_NUMBER.test(stringValue)) {
	                    attrs.input.value = stringValue;
	                } else if (state.value || state.value === 0) {
	                        attrs.input.value = this._format(state.value);
	                    } else {
	                            attrs.input.value = "";
	                        }

	            if (hasFormControl && !noStyle) {
	                _extends(attrs.wrap.style, css['wrap.hasFormControl']);
	            }

	            if (mobile && !noStyle) {
	                _extends(attrs.input.style, css['input.mobile']);
	                _extends(attrs.btnUp.style, css['btnUp.mobile']);
	                _extends(attrs.btnDown.style, css['btnDown.mobile']);
	            }

	            if (!props.disabled && !props.readOnly) {
	                _extends(attrs.wrap, {
	                    onMouseUp: this.stop,
	                    onMouseLeave: this.stop
	                });

	                _extends(attrs.btnUp, {
	                    onTouchStart: this.onTouchStart.bind(this, 'up'),
	                    onTouchEnd: this.onTouchEnd,
	                    onMouseEnter: function onMouseEnter() {
	                        _this6.setState({
	                            btnUpHover: true
	                        });
	                    },
	                    onMouseLeave: function onMouseLeave() {
	                        _this6.stop();
	                        _this6.setState({
	                            btnUpHover: false,
	                            btnUpActive: false
	                        });
	                    },
	                    onMouseUp: function onMouseUp() {
	                        _this6.setState({
	                            btnUpHover: true,
	                            btnUpActive: false
	                        });
	                    },
	                    onMouseDown: function onMouseDown() {
	                        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	                            args[_key5] = arguments[_key5];
	                        }

	                        args[0].preventDefault();
	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        _this6.setState({
	                            btnUpHover: true,
	                            btnUpActive: true
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                            _this6.onMouseDown('up');
	                        });
	                    }
	                });

	                _extends(attrs.btnDown, {
	                    onTouchStart: this.onTouchStart.bind(this, 'down'),
	                    onTouchEnd: this.onTouchEnd,
	                    onMouseEnter: function onMouseEnter() {
	                        _this6.setState({
	                            btnDownHover: true
	                        });
	                    },
	                    onMouseLeave: function onMouseLeave() {
	                        _this6.stop();
	                        _this6.setState({
	                            btnDownHover: false,
	                            btnDownActive: false
	                        });
	                    },
	                    onMouseUp: function onMouseUp() {
	                        _this6.setState({
	                            btnDownHover: true,
	                            btnDownActive: false
	                        });
	                    },
	                    onMouseDown: function onMouseDown() {
	                        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                            args[_key6] = arguments[_key6];
	                        }

	                        args[0].preventDefault();
	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        _this6.setState({
	                            btnDownHover: true,
	                            btnDownActive: true
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                            _this6.onMouseDown('down');
	                        });
	                    }
	                });

	                _extends(attrs.input, {
	                    onChange: function onChange(e) {
	                        var original = e.target.value;
	                        var val = _this6._parse(original);
	                        if (isNaN(val)) {
	                            val = null;
	                        }
	                        _this6.setState({
	                            value: _this6._isStrict ? _this6._toNumber(val) : val,
	                            stringValue: original
	                        });
	                    },
	                    onKeyDown: this._onKeyDown.bind(this),
	                    onInput: function onInput() {
	                        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	                            args[_key7] = arguments[_key7];
	                        }

	                        _this6.saveSelection();
	                        _this6._invokeEventCallback.apply(_this6, ["onInput"].concat(args));
	                    },
	                    onSelect: function onSelect() {
	                        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	                            args[_key8] = arguments[_key8];
	                        }

	                        _this6.saveSelection();
	                        _this6._invokeEventCallback.apply(_this6, ["onSelect"].concat(args));
	                    },
	                    onFocus: function onFocus() {
	                        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	                            args[_key9] = arguments[_key9];
	                        }

	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        var val = _this6._parse(args[0].target.value);
	                        _this6.setState({
	                            value: val,
	                            stringValue: val || val === 0 ? val + "" : ""
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                        });
	                    },
	                    onBlur: function onBlur() {
	                        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	                            args[_key10] = arguments[_key10];
	                        }

	                        var _isStrict = _this6._isStrict;
	                        _this6._isStrict = true;
	                        args[0].persist();
	                        _this6._inputFocus = false;
	                        var val = _this6._parse(args[0].target.value);
	                        _this6.setState({
	                            value: val
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onBlur"].concat(args));
	                            _this6._isStrict = _isStrict;
	                        });
	                    }
	                });
	            } else {
	                if (!noStyle && props.disabled) {
	                    _extends(attrs.input.style, css['input:disabled']);
	                }
	            }

	            var InputTag = componentClass || 'input';

	            if (mobile) {
	                return _react2.default.createElement(
	                    'span',
	                    attrs.wrap,
	                    _react2.default.createElement(InputTag, attrs.input),
	                    _react2.default.createElement(
	                        'b',
	                        attrs.btnUp,
	                        _react2.default.createElement('i', { style: noStyle ? null : css.minus }),
	                        _react2.default.createElement('i', { style: noStyle ? null : css.plus })
	                    ),
	                    _react2.default.createElement(
	                        'b',
	                        attrs.btnDown,
	                        _react2.default.createElement('i', { style: noStyle ? null : css.minus })
	                    )
	                );
	            }

	            return _react2.default.createElement(
	                'span',
	                attrs.wrap,
	                _react2.default.createElement(InputTag, attrs.input),
	                _react2.default.createElement(
	                    'b',
	                    attrs.btnUp,
	                    _react2.default.createElement('i', { style: noStyle ? null : css.arrowUp })
	                ),
	                _react2.default.createElement(
	                    'b',
	                    attrs.btnDown,
	                    _react2.default.createElement('i', { style: noStyle ? null : css.arrowDown })
	                )
	            );
	        }
	    }]);

	    return NumericInput;
	}(_react.Component);

	NumericInput.propTypes = {
	    step: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    min: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    max: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    precision: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    maxLength: _propTypes2.default.number,
	    parse: _propTypes2.default.func,
	    format: _propTypes2.default.func,
	    className: _propTypes2.default.string,
	    disabled: _propTypes2.default.bool,
	    readOnly: _propTypes2.default.bool,
	    required: _propTypes2.default.bool,
	    snap: _propTypes2.default.bool,
	    noValidate: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
	    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
	    noStyle: _propTypes2.default.bool,
	    type: _propTypes2.default.string,
	    pattern: _propTypes2.default.string,
	    onFocus: _propTypes2.default.func,
	    onBlur: _propTypes2.default.func,
	    onKeyDown: _propTypes2.default.func,
	    onChange: _propTypes2.default.func,
	    onInvalid: _propTypes2.default.func,
	    onValid: _propTypes2.default.func,
	    onInput: _propTypes2.default.func,
	    onSelect: _propTypes2.default.func,
	    size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    strict: _propTypes2.default.bool,
	    componentClass: _propTypes2.default.string,
	    mobile: function mobile(props, propName) {
	        var prop = props[propName];
	        if (prop !== true && prop !== false && prop !== 'auto' && typeof prop != 'function') {
	            return new Error('The "mobile" prop must be true, false, "auto" or a function');
	        }
	    }
	};
	NumericInput.defaultProps = {
	    step: 1,
	    min: Number.MIN_SAFE_INTEGER || -9007199254740991,
	    max: Number.MAX_SAFE_INTEGER || 9007199254740991,
	    precision: null,
	    parse: null,
	    format: null,
	    mobile: 'auto',
	    strict: false,
	    componentClass: "input",
	    style: {}
	};
	NumericInput.style = {
	    wrap: {
	        position: 'relative',
	        display: 'inline-block'
	    },

	    'wrap.hasFormControl': {
	        display: 'block'
	    },

	    arrowUp: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 0,
	        height: 0,
	        borderWidth: '0 0.6ex 0.6ex 0.6ex',
	        borderColor: 'transparent transparent rgba(0, 0, 0, 0.7)',
	        borderStyle: 'solid',
	        margin: '-0.3ex 0 0 -0.56ex'
	    },

	    arrowDown: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 0,
	        height: 0,
	        borderWidth: '0.6ex 0.6ex 0 0.6ex',
	        borderColor: 'rgba(0, 0, 0, 0.7) transparent transparent',
	        borderStyle: 'solid',
	        margin: '-0.3ex 0 0 -0.56ex'
	    },

	    plus: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 2,
	        height: 10,
	        background: 'rgba(0,0,0,.7)',
	        margin: '-5px 0 0 -1px'
	    },

	    minus: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 10,
	        height: 2,
	        background: 'rgba(0,0,0,.7)',
	        margin: '-1px 0 0 -5px'
	    },

	    btn: {
	        position: 'absolute',
	        right: 2,
	        width: '2.26ex',
	        borderColor: 'rgba(0,0,0,.1)',
	        borderStyle: 'solid',
	        textAlign: 'center',
	        cursor: 'default',
	        transition: 'all 0.1s',
	        background: 'rgba(0,0,0,.1)',
	        boxShadow: '-1px -1px 3px rgba(0,0,0,.1) inset,' + '1px 1px 3px rgba(255,255,255,.7) inset'
	    },

	    btnUp: {
	        top: 2,
	        bottom: '50%',
	        borderRadius: '2px 2px 0 0',
	        borderWidth: '1px 1px 0 1px'
	    },

	    'btnUp.mobile': {
	        width: '3.3ex',
	        bottom: 2,
	        boxShadow: 'none',
	        borderRadius: 2,
	        borderWidth: 1
	    },

	    btnDown: {
	        top: '50%',
	        bottom: 2,
	        borderRadius: '0 0 2px 2px',
	        borderWidth: '0 1px 1px 1px'
	    },

	    'btnDown.mobile': {
	        width: '3.3ex',
	        bottom: 2,
	        left: 2,
	        top: 2,
	        right: 'auto',
	        boxShadow: 'none',
	        borderRadius: 2,
	        borderWidth: 1
	    },

	    'btn:hover': {
	        background: 'rgba(0,0,0,.2)'
	    },

	    'btn:active': {
	        background: 'rgba(0,0,0,.3)',
	        boxShadow: '0 1px 3px rgba(0,0,0,.2) inset,' + '-1px -1px 4px rgba(255,255,255,.5) inset'
	    },

	    'btn:disabled': {
	        opacity: 0.5,
	        boxShadow: 'none',
	        cursor: 'not-allowed'
	    },

	    input: {
	        paddingRight: '3ex',
	        boxSizing: 'border-box',
	        fontSize: 'inherit'
	    },

	    'input:not(.form-control)': {
	        border: '1px solid #ccc',
	        borderRadius: 2,
	        paddingLeft: 4,
	        display: 'block',
	        WebkitAppearance: 'none',
	        lineHeight: 'normal'
	    },

	    'input.mobile': {
	        paddingLeft: ' 3.4ex',
	        paddingRight: '3.4ex',
	        textAlign: 'center'
	    },

	    'input:focus': {},

	    'input:disabled': {
	        color: 'rgba(0, 0, 0, 0.3)',
	        textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)'
	    }
	};
	NumericInput.SPEED = 50;
	NumericInput.DELAY = 500;
	NumericInput.DIRECTION_UP = "up";
	NumericInput.DIRECTION_DOWN = "down";


	module.exports = NumericInput;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(/*! react */ "react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(/*! prop-types */ "prop-types");

/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.0");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.0" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.0", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.0" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic =  false && false;
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var THEME_PROP_REGEX = /\.theme[.[]/;
var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target,
        usesTheme = _props$forwardedCompo.usesTheme;


    var generatedClassName = void 0;
    var rawTheme = void 0;

    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      rawTheme = determineTheme(this.props, theme, defaultProps);
      generatedClassName = this.generateAndInjectStyles(rawTheme || EMPTY_OBJECT, this.props);

      if ( true && usesTheme && !rawTheme) {
        console.error('Component \'' +
        // $FlowFixMe
        displayName + '\' (.' + styledComponentId + ') references the \'theme\' prop in its styles but no theme was provided via prop or <ThemeProvider>.');
      }
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_8__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.usesTheme = componentStyle.rules.some(function (x) {
      return isFunction(x) && THEME_PROP_REGEX.test(x.toString());
    });

    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "./node_modules/tinygradient/tinygradient.js":
/*!***************************************************!*\
  !*** ./node_modules/tinygradient/tinygradient.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * TinyGradient 0.4.3
 * Copyright 2014-2018 Damien "Mistic" Sorel (http://www.strangeplanet.fr)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

(function (root, factory) {
    if ( true && module.exports) {
        module.exports = factory(__webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js"));
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
}(this, function (tinycolor) {
    "use strict";

    var RGBA_MAX = {r: 256, g: 256, b: 256, a: 1};
    var HSVA_MAX = {h: 360, s: 1, v: 1, a: 1};

    /**
     * Linearly compute the step size between start and end (not normalized)
     * @param {Object} start - rgba or hsva
     * @param {Object} end - rgba or hsva
     * @param {int} steps - number of desired steps
     * @return {Object} rgba or hsva
     */
    function stepize(start, end, steps) {
        var step = {};

        for (var k in start) {
            if (start.hasOwnProperty(k)) {
                step[k] = steps === 0 ? 0 : (end[k] - start[k]) / steps;
            }
        }

        return step;
    }

    /**
     * Compute the final step color
     * @param {Object} step - rgba or hsva from `stepize`
     * @param {Object} start - rgba or hsva
     * @param {int} i - color index
     * @param {Object} max - rgba or hsva of maximum values for each channel
     * @return {Object} rgba or hsva
     */
    function interpolate(step, start, i, max) {
        var color = {};

        for (var k in start) {
            if (start.hasOwnProperty(k)) {
                color[k] = step[k] * i + start[k];
                color[k] = color[k] < 0 ? color[k] + max[k] : ( max[k] !== 1 ? color[k] % max[k] : color[k] );
            }
        }

        return color;
    }

    /**
     * Generate gradient with RGBa interpolation
     * @param {Object} stop1
     * @param {Object} stop2
     * @param {int} steps
     * @return {tinycolor[]} color1 included, color2 excluded
     */
    function interpolateRgb(stop1, stop2, steps) {
        var start = stop1.color.toRgb(),
            end = stop2.color.toRgb(),
            gradient = [stop1.color],
            step = stepize(start, end, steps),
            color;

        for (var i = 1; i < steps; i++) {
            color = interpolate(step, start, i, RGBA_MAX);
            gradient.push(tinycolor(color));
        }

        return gradient;
    }

    /**
     * Generate gradient with HSVa interpolation
     * @param {Object} stop1
     * @param {Object} stop2
     * @param {int} steps
     * @param {Boolean} trigonometric - true to step in trigonometric order
     * @return {tinycolor[]} color1 included, color2 excluded
     */
    function interpolateHsv(stop1, stop2, steps, trigonometric) {
        var start = stop1.color.toHsv(),
            end = stop2.color.toHsv(),
            gradient = [stop1.color],
            step = stepize(start, end, steps),
            diff, color;

        // recompute hue
        if ((start.h <= end.h && !trigonometric) || (start.h >= end.h && trigonometric)) {
            diff = end.h - start.h;
        }
        else if (trigonometric) {
            diff = 360 - end.h + start.h;
        }
        else {
            diff = 360 - start.h + end.h;
        }
        step.h = Math.pow(-1, trigonometric ? 1 : 0) * Math.abs(diff) / steps;

        for (var i = 1; i < steps; i++) {
            color = interpolate(step, start, i, HSVA_MAX);
            gradient.push(tinycolor(color));
        }

        return gradient;
    }

    /**
     * Compute substeps between each stops
     * @param {Object[]} stops
     * @param {int} steps
     * @return {int[]}
     */
    function computeSubsteps(stops, steps) {
        var l = stops.length;

        // validation
        steps = parseInt(steps);

        if (isNaN(steps) || steps < 2) {
            throw new Error('Invalid number of steps (< 2)');
        }
        if (steps < l) {
            throw new Error('Number of steps cannot be inferior to number of stops');
        }

        // compute substeps from stop positions
        var substeps = [];

        for (var i = 1; i < l; i++) {
            var step = (steps - 1) * (stops[i].pos - stops[i - 1].pos);
            substeps.push(Math.max(1, Math.round(step)));
        }

        // adjust number of steps
        var totalSubsteps = 1;
        for (var n = l - 1; n--;) totalSubsteps += substeps[n];

        while (totalSubsteps !== steps) {
            if (totalSubsteps < steps) {
                var min = Math.min.apply(null, substeps);
                substeps[substeps.indexOf(min)]++;
                totalSubsteps++;
            }
            else {
                var max = Math.max.apply(null, substeps);
                substeps[substeps.indexOf(max)]--;
                totalSubsteps--;
            }
        }

        return substeps;
    }

    /**
     * Compute the color at a specific position
     * @param {Object[]} stops
     * @param {float} pos
     * @param {string} method
     * @param {Object} max
     * @returns {tinycolor}
     */
    function computeAt(stops, pos, method, max) {
        if (pos < 0 || pos > 1) {
            throw new Error('Position must be between 0 and 1');
        }

        var start, end;
        for (var i = 0, l = stops.length; i < l - 1; i++) {
            if (pos >= stops[i].pos && pos < stops[i + 1].pos) {
                start = stops[i];
                end = stops[i + 1];
                break;
            }
        }

        if (!start) {
            start = end = stops[stops.length - 1];
        }

        var step = stepize(start.color[method](), end.color[method](), (end.pos - start.pos) * 100);
        var color = interpolate(step, start.color[method](), Math.round((pos - start.pos) * 100), max);
        return tinycolor(color);
    }

    /**
     * @class tinygradient
     * @param {*} stops
     */
    var TinyGradient = function (stops) {
        // varargs
        if (arguments.length === 1) {
            if (!(arguments[0] instanceof Array)) {
                throw new Error('"stops" is not an array');
            }
            stops = arguments[0];
        }
        else {
            stops = Array.prototype.slice.call(arguments);
        }

        // if we are called as a function, call using new instead
        if (!(this instanceof TinyGradient)) {
            return new TinyGradient(stops);
        }

        // validation
        if (stops.length < 2) {
            throw new Error('Invalid number of stops (< 2)');
        }

        var havingPositions = stops[0].pos !== undefined,
            l = stops.length,
            p = -1;
        // create tinycolor objects and clean positions
        this.stops = stops.map(function (stop, i) {
            var hasPosition = stop.pos !== undefined;
            if (havingPositions ^ hasPosition) {
                throw new Error('Cannot mix positionned and not posionned color stops');
            }

            if (hasPosition) {
                stop = {
                    color: tinycolor(stop.color),
                    pos  : stop.pos
                };

                if (stop.pos < 0 || stop.pos > 1) {
                    throw new Error('Color stops positions must be between 0 and 1');
                }
                else if (stop.pos <= p) {
                    throw new Error('Color stops positions are not ordered');
                }
                p = stop.pos;
            }
            else {
                stop = {
                    color: tinycolor(stop),
                    pos  : i / (l - 1)
                };
            }

            return stop;
        });

        if (this.stops[0].pos !== 0) {
            this.stops.unshift({
                color: this.stops[0].color,
                pos  : 0
            });
        }
        if (this.stops[this.stops.length - 1].pos !== 1) {
            this.stops.push({
                color: this.stops[this.stops.length - 1].color,
                pos  : 1
            });
        }
    };

    /**
     * Return new instance with reversed stops
     * @return {tinygradient}
     */
    TinyGradient.prototype.reverse = function () {
        var stops = [];

        this.stops.forEach(function (stop) {
            stops.push({
                color: stop.color,
                pos  : 1 - stop.pos
            });
        });

        return new TinyGradient(stops.reverse());
    };

    /**
     * Generate gradient with RGBa interpolation
     * @param {int} steps
     * @return {tinycolor[]}
     */
    TinyGradient.prototype.rgb = function (steps) {
        var substeps = computeSubsteps(this.stops, steps),
            gradient = [];

        for (var i = 0, l = this.stops.length; i < l - 1; i++) {
            gradient = gradient.concat(interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]));
        }

        gradient.push(this.stops[l - 1].color);

        return gradient;
    };

    /**
     * Generate gradient with HSVa interpolation
     * @param {int} steps
     * @param {Boolean|String} [mode=false]
     *    - false to step in clockwise
     *    - true to step in trigonometric order
     *    - 'short' to use the shortest way
     *    - 'long' to use the longest way
     * @return {tinycolor[]}
     */
    TinyGradient.prototype.hsv = function (steps, mode) {
        var substeps = computeSubsteps(this.stops, steps),
            trigonometric = mode === true,
            parametrized = typeof mode === 'string',
            gradient = [],
            start, end, trig;

        for (var i = 0, l = this.stops.length; i < l - 1; i++) {
            start = this.stops[i].color.toHsv();
            end = this.stops[i + 1].color.toHsv();

            if (parametrized) {
                trig = (start.h < end.h && end.h - start.h < 180) || (start.h > end.h && start.h - end.h > 180);
            }

            // rgb interpolation if one of the steps in grayscale
            if (start.s === 0 || end.s === 0) {
                gradient = gradient.concat(interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]));
            }
            else {
                gradient = gradient.concat(interpolateHsv(this.stops[i], this.stops[i + 1], substeps[i],
                    (mode === 'long' && trig) || (mode === 'short' && !trig) || (!parametrized && trigonometric)
                ));
            }
        }

        gradient.push(this.stops[l - 1].color);

        return gradient;
    };

    /**
     * Generate CSS3 command (no prefix) for this gradient
     * @param {String} [mode=linear] - 'linear' or 'radial'
     * @param {String} [direction] - default is 'to right' or 'ellipse at center'
     * @return {String}
     */
    TinyGradient.prototype.css = function (mode, direction) {
        mode = mode || 'linear';
        direction = direction || (mode === 'linear' ? 'to right' : 'ellipse at center');

        var css = mode + '-gradient(' + direction;
        this.stops.forEach(function (stop) {
            css += ', ' + stop.color.toRgbString() + ' ' + (stop.pos * 100) + '%';
        });
        css += ')';
        return css;
    };

    /**
     * Returns the color at specific position with RGBa interpolation
     * @param {float} pos, between 0 and 1
     * @return {tinycolor}
     */
    TinyGradient.prototype.rgbAt = function (pos) {
        return computeAt(this.stops, pos, 'toRgb', RGBA_MAX);
    };

    /**
     * Returns the color at specific position with HSVa interpolation
     * @param {float} pos, between 0 and 1
     * @return {tinycolor}
     */
    TinyGradient.prototype.hsvAt = function (pos) {
        return computeAt(this.stops, pos, 'toHsv', HSVA_MAX);
    };

    var STATIC_FNS = {
        'rgb'  : 1,
        'hsv'  : 2,
        'css'  : 2,
        'rgbAt': 1,
        'hsvAt': 1
    };

    Object.keys(STATIC_FNS).forEach(function (fn) {
        TinyGradient[fn] = function () {
            var colors = Array.prototype.slice.call(arguments);
            var args = colors.splice(-STATIC_FNS[fn]);
            var gradient = new TinyGradient(colors);
            return gradient[fn].apply(gradient, args);
        };
    });

    // export
    return TinyGradient;
}));

/***/ }),

/***/ "./src/components/BooleanSwitch.react.js":
/*!***********************************************!*\
  !*** ./src/components/BooleanSwitch.react.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
/* harmony import */ var _ToggleSwitch_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToggleSwitch.react */ "./src/components/ToggleSwitch.react.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * A switch component that toggles
 * between on and off.
 */

var BooleanSwitch =
/*#__PURE__*/
function (_Component) {
  _inherits(BooleanSwitch, _Component);

  function BooleanSwitch(props) {
    var _this;

    _classCallCheck(this, BooleanSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BooleanSwitch).call(this, props));
    _this.state = {
      on: props.on
    };
    _this.setPropsOverride = _this.setPropsOverride.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BooleanSwitch, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.on !== this.state.on) this.setState({
        on: newProps.on
      });
    }
  }, {
    key: "setPropsOverride",
    value: function setPropsOverride(_ref) {
      var value = _ref.value;
      this.setState({
        on: value
      });
      if (this.props.setProps) this.props.setProps({
        on: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleSwitch_react__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
        value: this.state.on,
        setProps: this.setPropsOverride,
        booleanSwitch: true,
        color: this.props.color || this.props.theme.primary
      }));
    }
  }]);

  return BooleanSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

BooleanSwitch.defaultProps = {
  on: false,
  vertical: false,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_3__["light"],
  labelPosition: 'top'
};
BooleanSwitch.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether or not the switch is on
   */
  on: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Color to highlight active switch background
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * If true, switch will be vertical instead
   * of horizontal
   */
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If true, switch cannot be clicked
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the component label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root object.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that gets fired when
   * switch is toggled.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(BooleanSwitch));

/***/ }),

/***/ "./src/components/ColorPicker.react.js":
/*!*********************************************!*\
  !*** ./src/components/ColorPicker.react.js ***!
  \*********************************************/
/*! exports provided: default, defaultProps, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealColorPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() | colorpicker */ "async~colorpicker").then(__webpack_require__.bind(null, /*! ../fragments/ColorPicker.react */ "./src/fragments/ColorPicker.react.js"));
});
/**
 * A color picker.
 */

var ColorPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker() {
    _classCallCheck(this, ColorPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColorPicker).apply(this, arguments));
  }

  _createClass(ColorPicker, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealColorPicker, this.props));
    }
  }]);

  return ColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


ColorPicker.defaultProps = {
  size: 225,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_2__["light"],
  labelPosition: 'top'
};
ColorPicker.propTypes = {
  /**
   * The ID used to identify the color picker in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Color value of the picker
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    /**
     * Hex string
     */
    hex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

    /**
     * RGB/RGBA object
     */
    rbg: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      r: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      g: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      b: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      a: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
    })
  }),

  /**
   * If true, color cannot be picked.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Size (width) of the component in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })]),

  /**
   * Where the indicator label is positioned
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Dash-assigned callback that gets fired when
   * the color picker's value changes
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /**
   * Style to apply to the root component element
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};
var defaultProps = ColorPicker.defaultProps;
var propTypes = ColorPicker.propTypes;

/***/ }),

/***/ "./src/components/DarkThemeProvider.react.js":
/*!***************************************************!*\
  !*** ./src/components/DarkThemeProvider.react.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");




/**
 * DarkThemeProvider is a component that is placed at the root of
 * the component tree to make all components match the dark theme
 */

function DarkThemeProvider(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: props.theme || _styled_constants__WEBPACK_IMPORTED_MODULE_3__["dark"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.children));
}

DarkThemeProvider.propTypes = {
  /**
   * The children of this component
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),

  /**
   * Theme object to override with a custom theme
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * Highlight color
     */
    primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * Supporting color
     */
    secondary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * Color used for UI details, like borders
     */
    detail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * True for Dark mode, false for Light
     */
    dark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  })
};
/* harmony default export */ __webpack_exports__["default"] = (DarkThemeProvider);

/***/ }),

/***/ "./src/components/Gauge.react.js":
/*!***************************************!*\
  !*** ./src/components/Gauge.react.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_GaugeSvg_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/GaugeSvg.react */ "./src/helpers/GaugeSvg.react.js");
/* harmony import */ var _styled_Gauge_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/Gauge.styled */ "./src/styled/Gauge.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_CurrentValue_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/CurrentValue.styled */ "./src/styled/CurrentValue.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
/* harmony import */ var _helpers_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/util */ "./src/helpers/util.js");
/* harmony import */ var _helpers_logarithm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/logarithm */ "./src/helpers/logarithm.js");
/* harmony import */ var _helpers_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/scale */ "./src/helpers/scale.js");
/* harmony import */ var _helpers_colorRanges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/colorRanges */ "./src/helpers/colorRanges.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













/**
 * A Gauge component that points to
 * a value between some range.
 */

var Gauge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gauge, _React$Component);

  function Gauge() {
    _classCallCheck(this, Gauge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gauge).apply(this, arguments));
  }

  _createClass(Gauge, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line
      __webpack_require__(/*! conic-gradient */ "./node_modules/conic-gradient/conic-gradient.js");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          max = _this$props.max,
          min = _this$props.min,
          showCurrentValue = _this$props.showCurrentValue,
          units = _this$props.units,
          logarithmic = _this$props.logarithmic,
          base = _this$props.base,
          id = _this$props.id,
          className = _this$props.className,
          style = _this$props.style;
      var colorValue = Object(_helpers_colorRanges__WEBPACK_IMPORTED_MODULE_11__["getColorValue"])(color);
      var rawValue = this.props.value != null ? this.props.value : min;
      var dirtyValue = logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_9__["default"].compute(rawValue) : rawValue;
      var value = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_8__["sanitizeRangeValue"])({
        min: min,
        max: max,
        value: dirtyValue
      });
      var formatter = logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_9__["default"].generateLogFormatter({
        base: base,
        isSVG: true
      }) : null;
      var scale = Object(_helpers_scale__WEBPACK_IMPORTED_MODULE_10__["default"])(_objectSpread({}, this.props, {
        formatter: formatter
      }));
      var progress = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_8__["computeProgress"])({
        min: min,
        max: max,
        value: value,
        progressionTarget: 1
      });
      var currentValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_CurrentValue_styled__WEBPACK_IMPORTED_MODULE_6__["default"], {
        valueColor: colorValue,
        units: units,
        css: 'transform: translateY(-150%); top: 0;'
      }, logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_9__["default"].formatValue(value, base) : value.toFixed(1));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        className: className,
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
        labelCSS: this.props.labelPosition === 'top' ? null : 'transform: translateY(-80px);'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Gauge_styled__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: colorValue
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_GaugeSvg_react__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, _objectSpread({}, this.props, {
        scale: scale
      }), {
        progress: progress
      })), showCurrentValue && currentValue)));
    }
  }]);

  return Gauge;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Gauge.defaultProps = {
  min: 0,
  max: 10,
  base: 10,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_7__["light"],
  labelPosition: 'top'
};
Gauge.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The value of gauge. If logarithmic, the displayed
   * value will be the logarithm of the inputted value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The size (diameter) of the gauge in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The minimum value of the gauge. If logarithmic,
   * represents the minimum exponent.
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The maximum value of the gauge. If logarithmic,
   * represents the maximum exponent.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Base to be used in logarithmic scale.
   */
  base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If set to true, a logarithmic scale will be
   * used.
   */
  logarithmic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If true, the current value of the gauge
   * will be displayed
   */
  showCurrentValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Label for the current value
   */
  units: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the component label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Configuration for the component scale.
   */
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * Value to start the scale from. Defaults
     * to min.
     */
    start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Interval by which the scale goes up. Attempts
     * to dynamically divide min-max range by
     * default.
     */
    interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Interval by which labels are added to
     * scale marks. Defaults to 2 (every other
     * mark has a label).
     */
    labelInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Custom scale marks. The key determines the position
     * and the value determines what will show. If you want
     * to set the style of a specific mark point, the value
     * should be an object which contains style and label
     * properties
     */
    custom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
    /**
     * Label for the mark
     */
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    /**
     * Style object with label
     */
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })])
  }),

  /**
   * Color configuration for the gauge's track.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Color used for gauge's track/indicator
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * Color ranges configuration.
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * Color used for current value text and other minor accents
     */
    "default": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * Display ranges as a gradient between given colors.
     */
    gradient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    /**
     * Define multiple color ranges on the gauge's track.
     * The key determines the color of the range and
     * the value is the start,end of the range itself.
     * Ranges must be contiguous along the entirety
     * of the gauge's range of values.
     */
    ranges: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)
    })
  })]),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Gauge));

/***/ }),

/***/ "./src/components/GraduatedBar.react.js":
/*!**********************************************!*\
  !*** ./src/components/GraduatedBar.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
/* harmony import */ var _helpers_colorRanges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/colorRanges */ "./src/helpers/colorRanges.js");
/* harmony import */ var _styled_GraduatedBar_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/GraduatedBar.styled */ "./src/styled/GraduatedBar.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var valueColor = function valueColor(value, color) {
  var entry = Object.entries(color.ranges).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        range = _ref2[1];

    return value >= range[0] && value <= range[1];
  })[0];
  return entry && entry[0];
};
/**
 * A graduated bar component that displays
 * a value within some range as a
 * percentage.
 */


var GraduatedBar = function GraduatedBar(props) {
  var step = props.step,
      min = props.min,
      max = props.max,
      label = props.label,
      labelPosition = props.labelPosition,
      id = props.id,
      className = props.className,
      color = props.color,
      size = props.size,
      style = props.style,
      showCurrentValue = props.showCurrentValue,
      vertical = props.vertical;
  var value = props.value || min;
  var gradient = null;
  var progressBlocks = [];
  var normalizedValue = Math.max(Math.min(max, value), min);

  if (color.gradient && Object(_helpers_colorRanges__WEBPACK_IMPORTED_MODULE_3__["isContiguous"])({
    color: color,
    min: min,
    max: max
  })) {
    gradient = Object(_helpers_colorRanges__WEBPACK_IMPORTED_MODULE_3__["getGradientObject"])({
      color: color,
      min: min,
      max: max
    });
  }

  for (var i = min; i < normalizedValue; i += step) {
    var blockProps = _objectSpread({}, props, {
      color: Object(_helpers_colorRanges__WEBPACK_IMPORTED_MODULE_3__["getColorValue"])(color)
    });

    if (color.ranges && valueColor(i, color)) {
      blockProps = _objectSpread({}, props, {
        color: valueColor(i, color)
      });
    }

    progressBlocks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_GraduatedBar_styled__WEBPACK_IMPORTED_MODULE_4__["Block"], _extends({
      key: i,
      progress: i / (max - min),
      gradient: gradient
    }, blockProps)));
  }

  var percent = normalizedValue / (max - min) * 100;
  if (!isFinite(percent)) percent = 0;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id,
    className: className,
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: label,
    labelPosition: labelPosition
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_GraduatedBar_styled__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    vertical: vertical,
    size: size
  }, progressBlocks, showCurrentValue && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_GraduatedBar_styled__WEBPACK_IMPORTED_MODULE_4__["Value"], {
    vertical: vertical
  }, percent.toFixed(0), "%"))));
};

GraduatedBar.defaultProps = {
  min: 0,
  max: 10,
  size: 250,
  step: 0.5,
  labelPosition: 'top',
  color: _styled_constants__WEBPACK_IMPORTED_MODULE_2__["light"].primary
};
GraduatedBar.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The value of the graduated bar
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Color configuration for the graduated bar's
   * progress blocks.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Color used for graduated bar's track/indicator
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * Color ranges configuration.
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * Fallback color to use when color.ranges
     * has gaps.
     */
    "default": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * Display ranges as a gradient between given colors.
     * Requires color.ranges to be contiguous along
     * the entirety of the graduated bar's range of values.
     */
    gradient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    /**
     * Define multiple color ranges on the graduated bar's track.
     * The key determines the color of the range and
     * the value is the start,end of the range itself.
     */
    ranges: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)
    })
  })]),

  /**
   * The size (length) of the graduated bar in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If true, will display bar vertically instead of horizontally
   */
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The minimum value of the graduated bar
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The maximum value of the graduated bar
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Value by which progress blocks appear
   */
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If true, the current percentage
   *  of the bar will be displayed
   */
  showCurrentValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the component label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (GraduatedBar);

/***/ }),

/***/ "./src/components/Indicator.react.js":
/*!*******************************************!*\
  !*** ./src/components/Indicator.react.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_shared_Indicator_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/shared/Indicator.styled */ "./src/styled/shared/Indicator.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");







/**
 * A boolean indicator LED.
 */

var Indicator = function Indicator(props) {
  var bg = color__WEBPACK_IMPORTED_MODULE_2___default()(props.color).desaturate(0.2).lighten(0.2).rgb().toString();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: props.id,
    className: props.className,
    style: props.style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_Indicator_styled__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: props.size,
    width: props.width,
    height: props.height,
    rectangular: props.width && props.height,
    main: true,
    on: props.value,
    primary: props.color,
    secondary: !props.theme.dark ? bg : null
  })));
};

Indicator.defaultProps = {
  color: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["colors"].DARKER_PRIMARY,
  size: 15,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["light"],
  labelPosition: 'top'
};
Indicator.propTypes = {
  /**
   * The ID used to identify the indicator in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * If true, indicator is illuminated
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Color of the indicator
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Size of the component. Either use this or width and height
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Width of the component. Set both width and height for a rectangular indicator
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Height of the component. Set both width and height for a rectangular indicator
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the indicator label is positioned
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom', 'right', 'left']),

  /**
   * Class to apply to the root component element
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(Indicator));

/***/ }),

/***/ "./src/components/Joystick.react.js":
/*!******************************************!*\
  !*** ./src/components/Joystick.react.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var nipplejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nipplejs */ "./node_modules/nipplejs/dist/nipplejs.js");
/* harmony import */ var nipplejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nipplejs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * A joystick.
 */

var Joystick =
/*#__PURE__*/
function (_Component) {
  _inherits(Joystick, _Component);

  function Joystick(props) {
    var _this;

    _classCallCheck(this, Joystick);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Joystick).call(this, props));
    _this.lastAngle = 0;
    return _this;
  }

  _createClass(Joystick, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          size = _this$props.size,
          setProps = _this$props.setProps;
      this.manager = nipplejs__WEBPACK_IMPORTED_MODULE_3___default.a.create({
        mode: 'static',
        color: 'grey',
        size: size,
        position: {
          left: '50%',
          top: '50%'
        },
        zone: this.zoneRef
      });
      this.manager.on('move', function (e, data) {
        var degree = data.angle.degree,
            force = data.force;
        _this2.lastAngle = degree;

        if (setProps) {
          setProps({
            angle: degree,
            force: force
          });
        }
      });
      this.manager.on('end', function () {
        if (setProps) {
          setProps({
            angle: _this2.lastAngle,
            force: 0
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.manager.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          style = _this$props2.style,
          size = _this$props2.size;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        className: className,
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__["default"], this.props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(_ref) {
          return _this3.zoneRef = _ref;
        },
        style: {
          position: 'relative',
          width: size + 'px',
          height: size + 'px'
        }
      })));
    }
  }]);

  return Joystick;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Joystick.defaultProps = {
  size: 100,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_4__["light"],
  labelPosition: 'top'
};
Joystick.propTypes = {
  /**
   * The ID used to identify the color picker in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * If true, color cannot be picked.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Joystick angle in degrees, 0 = right, 90 = up, 180 = left, 270 = down
   */
  angle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Joystick force: distance between cursor and center in big-circle radii
   */
  force: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Size (width) of the component in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the indicator label is positioned
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that gets fired when
   * the color picker's value changes
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Style to apply to the root component element
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Joystick));

/***/ }),

/***/ "./src/components/Knob.react.js":
/*!**************************************!*\
  !*** ./src/components/Knob.react.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_KnobSvg_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/KnobSvg.react */ "./src/helpers/KnobSvg.react.js");
/* harmony import */ var _styled_Knob_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/Knob.styled */ "./src/styled/Knob.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
/* harmony import */ var _helpers_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/util */ "./src/helpers/util.js");
/* harmony import */ var _helpers_colorRanges__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/colorRanges */ "./src/helpers/colorRanges.js");
/* harmony import */ var _helpers_scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/scale */ "./src/helpers/scale.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var RESET_START_ANGLE = -1;

var valueToDeg = function valueToDeg(_ref) {
  var min = _ref.min,
      max = _ref.max,
      value = _ref.value;
  return Object(_helpers_util__WEBPACK_IMPORTED_MODULE_7__["computeProgress"])({
    min: min,
    max: max,
    value: value,
    progressionTarget: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["TRACK_TOTAL_DEG"]
  });
};

var degToValue = function degToValue(_ref2) {
  var min = _ref2.min,
      max = _ref2.max,
      deg = _ref2.deg;
  return Object(_helpers_util__WEBPACK_IMPORTED_MODULE_7__["computeProgress"])({
    min: 0,
    max: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["TRACK_TOTAL_DEG"],
    value: deg,
    progressionTarget: max - min
  }) + min;
};
/**
 * A knob component that can be turned
 * to a value between some range.
 */


var Knob =
/*#__PURE__*/
function (_Component) {
  _inherits(Knob, _Component);

  function Knob(props) {
    var _this;

    _classCallCheck(this, Knob);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Knob).call(this, props));
    var currentDeg = valueToDeg({
      min: props.min,
      max: props.max,
      value: props.value != null ? props.value : props.min
    });
    _this.state = {
      min: props.min,
      max: props.max,
      value: props.value || props.min,
      scale: Object(_helpers_scale__WEBPACK_IMPORTED_MODULE_9__["default"])(props),
      isDragging: false,
      startAngle: RESET_START_ANGLE,
      rotation: currentDeg,
      currentDeg: currentDeg
    };
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.setValue = _this.setValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Knob, [{
    key: "noop",
    value: function noop() {}
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (typeof newProps.value !== 'undefined') this.setState({
        value: newProps.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('mouseup', this.onMouseUp, false); // eslint-disable-next-line

      __webpack_require__(/*! conic-gradient */ "./node_modules/conic-gradient/conic-gradient.js");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.onMouseUp, false);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown() {
      this.setState({
        isDragging: true
      });
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      if (this.state.isDragging) {
        this.setState(function (state) {
          return {
            rotation: state.currentDeg,
            isDragging: false,
            startAngle: RESET_START_ANGLE
          };
        });
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      if (!this.state.isDragging) {
        return;
      }

      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max;
      var rotation = this.state.rotation;
      var startAngle = this.state.startAngle;

      if (e.touches) {
        e = e.touches[0];
      }

      var rect = this.knobElement.getBoundingClientRect();
      var centerX = rect.width / 2 + rect.left;
      var centerY = rect.height / 2 + rect.top;
      var radians = Math.atan2(e.clientX - centerX, e.clientY - centerY);
      var angle = radians * (180 / Math.PI);

      if (e.clientX - centerX >= 0) {
        angle = Math.abs(360 - angle) + 180;
      } else {
        angle = angle - 180;
      }

      angle = Math.abs(angle);

      if (startAngle === RESET_START_ANGLE) {
        startAngle = angle;
        this.setState({
          startAngle: startAngle
        });
      }

      var tmp = Math.floor(angle - startAngle + rotation);
      tmp = Math.min(tmp, _styled_constants__WEBPACK_IMPORTED_MODULE_6__["TRACK_TOTAL_DEG"]);
      tmp = Math.max(tmp, 0);
      this.setState({
        currentDeg: tmp
      });
      this.setValue(Object(_helpers_util__WEBPACK_IMPORTED_MODULE_7__["roundToDecimal"])(degToValue({
        min: min,
        max: max,
        deg: tmp
      }), 2));
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        value: value
      });
      if (this.props.setProps) this.props.setProps({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          min = _this$state.min,
          max = _this$state.max,
          value = _this$state.value;
      var progress = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_7__["computeProgress"])({
        min: min,
        max: max,
        value: value,
        progressionTarget: 1
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.className,
        style: this.props.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
        labelCSS: this.props.labelPosition === 'top' ? null : 'transform: translateY(-40px);'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Knob_styled__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: Object(_helpers_colorRanges__WEBPACK_IMPORTED_MODULE_8__["getColorValue"])(this.props.color)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_KnobSvg_react__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        progress: progress
      }, this.props, this.state, {
        refFunc: function refFunc(ele) {
          return _this2.knobElement = ele;
        },
        onMouseDown: this.props.disabled ? this.noop : this.onMouseDown,
        onMouseUp: this.props.disabled ? this.noop : this.onMouseUp,
        onMouseMove: this.props.disabled ? this.noop : this.onMouseMove
      })))));
    }
  }]);

  return Knob;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Knob.defaultProps = {
  min: 0,
  max: 10,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["light"],
  labelPosition: 'top'
};
Knob.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The value of knob
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Color configuration for the knob's track.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Color used for knob's track/indicator
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * Color ranges configuration.
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * Color used for current value text and other minor accents
     */
    "default": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

    /**
     * Display ranges as a gradient between given colors.
     */
    gradient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

    /**
     * Define multiple color ranges on the knob's track.
     * The key determines the color of the range and
     * the value is the start,end of the range itself.
     * Ranges must be contiguous along the entirety
     * of the knob's range of values.
     */
    ranges: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)
    })
  })]),

  /**
   * The size (diameter) of the knob in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The minimum value of the knob
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The maximum value of the knob
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If true, knob cannot be moved.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the knob label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Configuration for the component scale.
   */
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * Value to start the scale from. Defaults
     * to min.
     */
    start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Interval by which the scale goes up. Attempts
     * to dynamically divide min-max range by
     * default.
     */
    interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Interval by which labels are added to
     * scale marks. Defaults to 2 (every other
     * mark has a label).
     */
    labelInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Custom scale marks. The key determines the position
     * and the value determines what will show. If you want
     * to set the style of a specific mark point, the value
     * should be an object which contains style and label
     * properties
     */
    custom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
    /**
     * Label for the mark
     */
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    /**
     * Style object with label
     */
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })])
  }),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that gets fired when selected
   * value changes.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Knob));

/***/ }),

/***/ "./src/components/LEDDisplay.react.js":
/*!********************************************!*\
  !*** ./src/components/LEDDisplay.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers_LEDDisplaySvg_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/LEDDisplaySvg.react */ "./src/helpers/LEDDisplaySvg.react.js");
/* harmony import */ var _styled_LEDDisplay_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/LEDDisplay.styled */ "./src/styled/LEDDisplay.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");







var VALID_INPUT = /^(\-)?((\.|:)?[0-9])*$/;
var isValidInput = VALID_INPUT.test.bind(VALID_INPUT);
/**
 * A 7-bar LED display component.
 */

var LEDDisplay = function LEDDisplay(props) {
  var digits = isValidInput(props.value) ? extractDigits(props) : null;
  var led = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_LEDDisplay_styled__WEBPACK_IMPORTED_MODULE_4__["LEDContainer"], {
    backgroundColor: props.backgroundColor
  }, digits);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: props.id,
    className: props.className,
    style: props.style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__["default"], props, digits ? led : 'Invalid Input'));
};

function extractDigits(_ref) {
  var value = _ref.value,
      color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      theme = _ref.theme,
      size = _ref.size;
  var digitStack = value.toString().split('').reverse();
  var formattedDigits = [];
  addLeadingZeroIfNeeded(digitStack);
  var currKey = 0;

  while (digitStack.length) {
    var currDigit = digitStack.pop();
    var nextDigit = digitStack.pop();
    formattedDigits.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_LEDDisplaySvg_react__WEBPACK_IMPORTED_MODULE_3__["Digit"], {
      theme: theme,
      key: currKey++,
      value: currDigit,
      hasColon: nextDigit === ':',
      hasDecimal: nextDigit === '.',
      color: color,
      backgroundColor: backgroundColor,
      size: size
    }));
    if (nextDigit && nextDigit !== '.' && nextDigit !== ':') digitStack.push(nextDigit);
  }

  return formattedDigits;
}

function addLeadingZeroIfNeeded(digits) {
  var isNegative = false;

  if (digits[digits.length - 1] === '-') {
    isNegative = true;
    digits.pop();
  }

  var leadingDigit = digits[digits.length - 1];
  if (['.', ':'].includes(leadingDigit)) digits.push('0');
  if (isNegative) digits.push('-');
}

LEDDisplay.defaultProps = {
  color: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["colors"].PRIMARY,
  backgroundColor: '#fff',
  size: 42,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["light"],
  labelPosition: 'top'
};
LEDDisplay.propTypes = {
  /**
   * The ID used to identify the display in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Value to be displayed. A number or a string
   * containing only digits (0-9), periods, and colons,
   * and possibly starting with a minus sign.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /**
   * Color of the display
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Color of the display's background
   */
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Size of the display
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the display label is positioned
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(LEDDisplay));

/***/ }),

/***/ "./src/components/NumericInput.react.js":
/*!**********************************************!*\
  !*** ./src/components/NumericInput.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-numeric-input */ "./node_modules/react-numeric-input/index.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_numeric_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/**
 * A numeric input component that can be
 * set to a value between some range.
 */

var NumericInput =
/*#__PURE__*/
function (_Component) {
  _inherits(NumericInput, _Component);

  function NumericInput(props) {
    var _this;

    _classCallCheck(this, NumericInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumericInput).call(this, props));
    _this.state = {
      value: props.value || props.min
    };
    _this.setValue = _this.setValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumericInput, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.value !== this.state.value) this.setState({
        value: newProps.value
      });
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      if (value != null && value >= this.props.min && value <= this.props.max) {
        this.setState({
          value: value
        });
        if (this.props.setProps) this.props.setProps({
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          theme = _this$props.theme;
      var buttonStyle = {
        background: 'none',
        boxShadow: 'none',
        border: 'none',
        color: theme.secondary,
        cursor: 'pointer'
      };
      var padding = Math.max(this.state.value ? 16 - 2 * this.state.value.toString().length : 16, 10);
      var inputStyle = {
        borderRadius: 3,
        border: theme.dark ? 'none' : "1px solid ".concat(_styled_constants__WEBPACK_IMPORTED_MODULE_5__["colors"].GREY),
        outline: 'none',
        paddingRight: padding,
        paddingLeft: padding,
        paddingTop: 8,
        paddingBottom: 8,
        width: size || 56,
        color: theme.dark ? '#fff' : _styled_constants__WEBPACK_IMPORTED_MODULE_5__["colors"].OFF_WHITE,
        fontSize: 14,
        boxSizing: 'border-box'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.className,
        style: this.props.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_4__["default"], this.props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_numeric_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        disabled: this.props.disabled,
        style: {
          input: inputStyle,
          'input:not(.form-control)': inputStyle,
          btn: buttonStyle,
          'btn:hover': buttonStyle,
          'btn:active': buttonStyle,
          'input:disabled': {
            opacity: 0.65,
            cursor: 'not-allowed'
          }
        },
        min: this.props.min,
        max: this.props.max,
        value: this.state.value,
        onChange: this.setValue,
        mobile: false
      })));
    }
  }]);

  return NumericInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

NumericInput.defaultProps = {
  min: 0,
  max: 10,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_5__["light"],
  labelPosition: 'top'
};
NumericInput.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The value of numeric input
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The size (length) of the numeric input in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The minimum value of the numeric input
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The maximum value of the numeric input
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If true, numeric input cannot changed.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the numeric input label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that gets fired when selected
   * value changes.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(NumericInput));

/***/ }),

/***/ "./src/components/PowerButton.react.js":
/*!*********************************************!*\
  !*** ./src/components/PowerButton.react.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_PowerButton_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/PowerButton.styled */ "./src/styled/PowerButton.styled.js");
/* harmony import */ var _helpers_PowerButtonSvg_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/PowerButtonSvg.react */ "./src/helpers/PowerButtonSvg.react.js");
/* harmony import */ var _styled_shared_Indicator_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/Indicator.styled */ "./src/styled/shared/Indicator.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/**
 * A power button component can be
 * turned on and off.
 */

var PowerButton =
/*#__PURE__*/
function (_Component) {
  _inherits(PowerButton, _Component);

  function PowerButton(props) {
    var _this;

    _classCallCheck(this, PowerButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PowerButton).call(this, props));
    _this.state = {
      on: _this.props.on
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PowerButton, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.on !== this.state.on) this.setState({
        on: newProps.on
      });
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var newOnValue = !this.state.on;
      this.setState({
        on: newOnValue
      });
      if (this.props.setProps) this.props.setProps({
        on: newOnValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var INDICATOR_SIZE = this.props.size / 10 * 1.25;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.className,
        style: this.props.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_6__["default"], this.props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_PowerButton_styled__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_PowerButton_styled__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        on: this.state.on,
        color: this.props.color,
        size: this.props.size,
        disabled: this.props.disabled,
        onClick: this.onClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_PowerButtonSvg_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        on: this.state.on,
        color: this.props.color,
        size: this.props.size * 0.3
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_Indicator_styled__WEBPACK_IMPORTED_MODULE_5__["default"], {
        on: this.state.on,
        primary: this.props.color,
        main: true,
        size: INDICATOR_SIZE
      }))));
    }
  }]);

  return PowerButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

PowerButton.defaultProps = {
  on: false,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_7__["light"],
  size: 48,
  labelPosition: 'top'
};
PowerButton.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Whether or not the power button is on
   */
  on: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The indicator color to display when power button is on
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The size (diameter) of the power button in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If true, power button cannot be clicked
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the button. To control styling, pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the button label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that gets fired when
   * button is clicked.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(PowerButton));

/***/ }),

/***/ "./src/components/PrecisionInput.react.js":
/*!************************************************!*\
  !*** ./src/components/PrecisionInput.react.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-numeric-input */ "./node_modules/react-numeric-input/index.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_numeric_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_PrecisionInput_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/PrecisionInput.styled */ "./src/styled/PrecisionInput.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var defaultRootStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start'
};
/**
 * A numeric input component that converts
 * an input value to the desired precision.
 */

var PrecisionInput =
/*#__PURE__*/
function (_Component) {
  _inherits(PrecisionInput, _Component);

  function PrecisionInput(props) {
    var _this;

    _classCallCheck(this, PrecisionInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PrecisionInput).call(this, props));
    _this.formatPrecision = _this.formatPrecision.bind(_assertThisInitialized(_this));
    _this.setTempValue = _this.setTempValue.bind(_assertThisInitialized(_this));
    _this.blur = _this.blur.bind(_assertThisInitialized(_this));
    _this.setValue = _this.setValue.bind(_assertThisInitialized(_this));
    _this.toggleInput = _this.toggleInput.bind(_assertThisInitialized(_this));
    _this.state = {
      value: props.value != null ? _this.formatPrecision(props.value) : _this.formatPrecision(props.min),
      isInput: false,
      tempValue: null
    };
    return _this;
  }

  _createClass(PrecisionInput, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.value != null && newProps.value !== this.state.value) this.setState({
        value: this.formatPrecision(newProps.value)
      });
    }
  }, {
    key: "formatPrecision",
    value: function formatPrecision(value) {
      return Number(Number(value.toPrecision(this.props.precision)));
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      if (value != null && value >= this.props.min && value <= this.props.max) {
        var newValue = this.formatPrecision(value);
        this.setState({
          value: newValue
        });

        if (this.props.setProps) {
          this.props.setProps({
            value: newValue
          });
        }
      }
    }
  }, {
    key: "toggleInput",
    value: function toggleInput() {
      if (this.props.disabled) return;
      var isInput = !this.state.isInput;
      this.setState({
        isInput: isInput
      });

      if (isInput) {
        this.setState({
          tempValue: this.state.value
        });
      }
    }
  }, {
    key: "setTempValue",
    value: function setTempValue(tempValue) {
      this.setState({
        tempValue: tempValue
      });
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.state.tempValue != null) {
        this.setValue(this.state.tempValue);
      }

      this.setState({
        tempValue: null
      });
      this.toggleInput();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          theme = _this$props.theme;
      var buttonStyle = {
        background: 'none',
        boxShadow: 'none',
        border: 'none',
        color: theme.secondary,
        cursor: 'pointer'
      };
      var MINIMUM_PADDING = 10;
      var dynamicPadding = this.state.value ? 16 - 2 * this.state.value.toString().length : 16;
      var padding = Math.max(dynamicPadding, MINIMUM_PADDING);
      var inputStyle = {
        borderRadius: 3,
        border: theme.dark ? 'none' : "1px solid ".concat(_styled_constants__WEBPACK_IMPORTED_MODULE_6__["colors"].GREY),
        outline: 'none',
        paddingRight: padding,
        paddingLeft: padding,
        paddingTop: 4,
        paddingBottom: 4,
        width: size || 56 + this.props.precision * 20,
        height: 36,
        color: theme.dark ? '#fff' : _styled_constants__WEBPACK_IMPORTED_MODULE_6__["colors"].OFF_WHITE,
        fontSize: 14,
        lineHeight: 14,
        boxSizing: 'border-box'
      };
      var precisionInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_numeric_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        autoFocus: true,
        disabled: this.props.disabled,
        style: {
          input: inputStyle,
          'input:not(.form-control)': inputStyle,
          btn: buttonStyle,
          'btn:hover': buttonStyle,
          'btn:active': buttonStyle,
          'input:disabled': {
            opacity: 0.65,
            cursor: 'not-allowed'
          }
        },
        min: this.props.min,
        max: this.props.max,
        value: this.state.tempValue,
        onChange: this.setTempValue,
        onBlur: this.blur
      });
      var precisionOutput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrecisionOutput, {
        value: this.state.value,
        size: this.props.size,
        onClick: this.toggleInput
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.className,
        style: Object.assign({}, defaultRootStyles, this.props.style)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__["default"], this.props, this.state.isInput ? precisionInput : precisionOutput));
    }
  }]);

  return PrecisionInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var toScientificNotation = function toScientificNotation(value) {
  var scientificNum = Number(value).toExponential();
  return scientificNum.replace('+', '');
};

var mergeLeadingNegative = function mergeLeadingNegative(digits) {
  if (digits[0] === '-') {
    digits.shift();
    var leading = digits.shift();
    digits.unshift("-".concat(leading));
  }

  return digits;
};

var PrecisionOutput = function PrecisionOutput(_ref) {
  var value = _ref.value,
      onClick = _ref.onClick,
      size = _ref.size;

  var _toScientificNotation = toScientificNotation(value).split('e'),
      _toScientificNotation2 = _slicedToArray(_toScientificNotation, 2),
      characteristic = _toScientificNotation2[0],
      mantissa = _toScientificNotation2[1];

  var characteristicDigits = mergeLeadingNegative(characteristic.split(''));
  var mantissaDigits = mergeLeadingNegative(mantissa.split(''));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_PrecisionInput_styled__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    size: size,
    onClick: onClick
  }, characteristicDigits.map(function (digit, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_PrecisionInput_styled__WEBPACK_IMPORTED_MODULE_4__["Digit"], {
      key: "d".concat(i)
    }, digit);
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_PrecisionInput_styled__WEBPACK_IMPORTED_MODULE_4__["ExponentialDigit"], null, "E"), mantissaDigits.map(function (digit, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_PrecisionInput_styled__WEBPACK_IMPORTED_MODULE_4__["ExponentialDigit"], {
      key: "e".concat(i)
    }, digit);
  }));
};

PrecisionInput.defaultProps = {
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["light"],
  labelPosition: 'top',
  precision: 2
};
PrecisionInput.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The value of numeric input
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The size (length) of the numeric input in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The minimum value of the numeric input
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The maximum value of the numeric input
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Number of significant figures
   */
  precision: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,

  /**
   * If true, numeric input cannot be changed.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the scientific notation. To control styling,
   * pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the numeric input label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that gets fired when selected
   * value changes.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(PrecisionInput));

/***/ }),

/***/ "./src/components/Slider.react.js":
/*!****************************************!*\
  !*** ./src/components/Slider.react.js ***!
  \****************************************/
/*! exports provided: default, defaultProps, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealSlider = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() | slider */ "async~slider").then(__webpack_require__.bind(null, /*! ../fragments/Slider.react */ "./src/fragments/Slider.react.js"));
});
/**
 * A slider component with support for
 * a target value.
 */

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealSlider, this.props));
    }
  }]);

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Slider.defaultProps = {
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_2__["light"],
  targets: {},
  updatemode: 'mouseup',
  color: _styled_constants__WEBPACK_IMPORTED_MODULE_2__["colors"].DARKER_PRIMARY,
  min: 0,
  size: 265,
  labelPosition: 'bottom'
};
Slider.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Marks on the slider.
   * The key determines the position,
   * and the value determines what will show.
   * If you want to set the style of a specific mark point,
   * the value should be an object which
   * contains style and label properties.
   */
  marks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    number: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([
    /**
     * The label of the mark
     */
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    /**
     * The style and label of the mark
     */
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
      label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    })])
  }),

  /**
   * Color configuration for the slider's track.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([
  /**
   * Color used for slider's track/indicator
   */
  prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  /**
   * Color ranges configuration.
   */
  prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    /**
     * Fallback color to use when color.ranges
     * has gaps.
     */
    "default": prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

    /**
     * Display ranges as a gradient between given colors.
     * Requires color.ranges to be contiguous along
     * the entirety of the gauge's range of values.
     */
    gradient: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

    /**
     * Define multiple color ranges on the slider's track.
     * The key determines the color of the range and
     * the value is the start,end of the range itself.
     */
    ranges: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number)
    })
  })]),

  /**
   * The value of the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Additional CSS class for the root DOM node.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Where the component label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['top', 'bottom']),

  /**
   * If true, the handles can't be moved.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * When the step value is greater than 1,
   * you can set the dots to true if you want to
   * render the slider with dots.
   *
   * Note: dots are disabled automatically when
   * using color.ranges
   */
  dots: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * If the value is true, it means a continuous
   * value is included. Otherwise, it is an independent value.
   */
  included: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Minimum allowed value of the slider.
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Maximum allowed value of the slider.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Value by which increments or decrements are made.
   */
  step: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * If true, the slider will be vertical.
   */
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Size of the slider in pixels.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Targets on the slider.
   * The key determines the position,
   * and the value determines what will show.
   * If you want to set the style of a specific target point,
   * the value should be an object which
   * contains style and label properties.
   */
  targets: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    number: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([
    /**
     * The label of the mark
     */
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    /**
     * The style and label of the mark
     */
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      showCurrentValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
      label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
      style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
    })])
  }),

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Configuration of the slider handle's label.
   * Passing falsy value will disable the label.
   */
  handleLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([
  /**
   * The label of the handle
   */
  prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  /**
   * The style and label of the handle
   */
  prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    showCurrentValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  })]),

  /**
   * Determines when the component should update
   * its value. If `mouseup`, then the slider
   * will only trigger its value when the user has
   * finished dragging the slider. If `drag`, then
   * the slider will update its value continuously
   * as it is being dragged.
   * Only use `drag` if your updates are fast.
   */
  updatemode: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['mouseup', 'drag']),

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = Slider.defaultProps;
var propTypes = Slider.propTypes;

/***/ }),

/***/ "./src/components/StopButton.react.js":
/*!********************************************!*\
  !*** ./src/components/StopButton.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_StopButton_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/StopButton.styled */ "./src/styled/StopButton.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");




/**
 * A Stop button component
 */

var StopButton = function StopButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: props.id,
    className: props.className,
    style: props.style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_3__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_StopButton_styled__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: props.size,
    disabled: props.disabled,
    onClick: function onClick() {
      if (props.setProps) props.setProps({
        n_clicks: props.n_clicks + 1
      });
    }
  }, props.children || props.buttonText)));
};

StopButton.defaultProps = {
  buttonText: 'Stop',
  n_clicks: 0,
  size: 92,
  labelPosition: 'top'
};
StopButton.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The size (width) of the stop button in pixels
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Text displayed in the button
   */
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Number of times the button was clicked
   */
  n_clicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If true, button cannot be pressesd.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The children of the button.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the button.
   * To control styling, pass an object with label and
   * style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the  label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that gets fired when the
   * button is clicked.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (StopButton);

/***/ }),

/***/ "./src/components/Tank.react.js":
/*!**************************************!*\
  !*** ./src/components/Tank.react.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_Tank_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Tank.styled */ "./src/styled/Tank.styled.js");
/* harmony import */ var _styled_CurrentValue_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/CurrentValue.styled */ "./src/styled/CurrentValue.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _helpers_logarithm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/logarithm */ "./src/helpers/logarithm.js");
/* harmony import */ var _helpers_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/util */ "./src/helpers/util.js");
/* harmony import */ var _helpers_scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/scale */ "./src/helpers/scale.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * A Tank component that fills to
 * a value between some range.
 */

var Tank = function Tank(props) {
  var min = props.min,
      max = props.max,
      showCurrentValue = props.showCurrentValue,
      units = props.units,
      className = props.className,
      id = props.id,
      style = props.style,
      color = props.color,
      logarithmic = props.logarithmic,
      base = props.base,
      height = props.height,
      width = props.width;
  var dirtyValue = logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_5__["default"].compute(props.value, base) : props.value;
  var value = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_6__["sanitizeRangeValue"])({
    min: min,
    max: max,
    value: dirtyValue
  });
  var percentageFill = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_6__["computeProgress"])({
    min: min,
    max: max,
    value: value
  });
  var formatter = logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_5__["default"].generateLogFormatter({
    base: base
  }) : null;
  var scale = Object(_helpers_scale__WEBPACK_IMPORTED_MODULE_7__["default"])(_objectSpread({}, props, {
    formatter: formatter
  }));

  var renderTicks = function renderTicks() {
    return Object.entries(scale).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_2__["Tick"], {
        key: k,
        xPosition: Object(_helpers_util__WEBPACK_IMPORTED_MODULE_6__["computeProgress"])({
          min: min,
          max: max,
          value: k
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tick"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "label"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: v && v.style ? v.style : null
      }, v && v.label || v)));
    });
  };

  var scaleContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_2__["TickContainer"], {
    xPositioned: scale
  }, renderTicks());
  var currentValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_CurrentValue_styled__WEBPACK_IMPORTED_MODULE_3__["default"], {
    units: units,
    valueColor: "#535D63"
  }, logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_5__["default"].formatValue(value, base) : value);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    id: id,
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_4__["default"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, scaleContainer, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_2__["TankContainer"], {
    height: height,
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_2__["TankFill"], {
    color: color,
    height: "".concat(percentageFill, "%")
  }), showCurrentValue && currentValue))));
};

Tank.defaultProps = {
  min: 0,
  max: 10,
  height: 192,
  width: 112,
  base: 10,
  labelPosition: 'top'
};
Tank.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The value of tank. If logarithmic, the displayed value
   * will be the logarithm of the inputted value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The height of the tank in pixels
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The width of the tank in pixels
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The color of tank fill
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The minimum value of the tank. If logarithmic,
   * represents minimum exponent.
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The maximum value of the tank. If logarithmic,
   * represents the maximum exponent.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Base to be used in logarithmic scale.
   */
  base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If set to true, a logarithmic scale will be
   * used.
   */
  logarithmic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If true, the current value of the tank
   * will be displayed
   */
  showCurrentValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Label for the current value
   */
  units: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Description to be displayed alongside the control. To control styling,
   * pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the component label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Configuration for the component scale.
   */
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * Value to start the scale from. Defaults
     * to min.
     */
    start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Interval by which the scale goes up. Attempts
     * to dynamically divide min-max range by
     * default.
     */
    interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Interval by which labels are added to
     * scale marks. Defaults to 2 (every other
     * mark has a label).
     */
    labelInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Custom scale marks. The key determines the position
     * and the value determines what will show. If you want
     * to set the style of a specific mark point, the value
     * should be an object which contains style and label
     * properties
     */
    custom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
    /**
     * Label for the mark
     */
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    /**
     * Style object with label
     */
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })])
  }),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Tank);

/***/ }),

/***/ "./src/components/Thermometer.react.js":
/*!*********************************************!*\
  !*** ./src/components/Thermometer.react.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_Thermometer_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Thermometer.styled */ "./src/styled/Thermometer.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_Tank_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/Tank.styled */ "./src/styled/Tank.styled.js");
/* harmony import */ var _styled_CurrentValue_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/CurrentValue.styled */ "./src/styled/CurrentValue.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
/* harmony import */ var _helpers_logarithm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/logarithm */ "./src/helpers/logarithm.js");
/* harmony import */ var _helpers_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/util */ "./src/helpers/util.js");
/* harmony import */ var _helpers_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/scale */ "./src/helpers/scale.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












/**
 * A thermometer component that
 * fills to a value between some
 * range
 */

var Thermometer = function Thermometer(props) {
  var min = props.min,
      max = props.max,
      id = props.id,
      className = props.className,
      style = props.style,
      logarithmic = props.logarithmic,
      base = props.base,
      showCurrentValue = props.showCurrentValue,
      units = props.units,
      theme = props.theme,
      color = props.color,
      height = props.height,
      width = props.width;
  var dirtyValue = logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_8__["default"].compute(props.value, base) : props.value;
  var value = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_9__["sanitizeRangeValue"])({
    min: min,
    max: max,
    value: dirtyValue
  });
  var formatter = logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_8__["default"].generateLogFormatter({
    base: base
  }) : null;
  var scale = Object(_helpers_scale__WEBPACK_IMPORTED_MODULE_10__["default"])(_objectSpread({}, props, {
    formatter: formatter
  }));

  var renderTicks = function renderTicks() {
    return Object.entries(scale).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_5__["Tick"], {
        key: k,
        xPosition: Object(_helpers_util__WEBPACK_IMPORTED_MODULE_9__["computeProgress"])({
          min: min,
          max: max,
          value: k
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tick"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "label",
        style: v && v.style ? v.style : null
      }, v && v.label || v));
    });
  };

  var scaleContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_5__["TickContainer"], {
    xPositioned: scale
  }, renderTicks());
  var currentValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Thermometer_styled__WEBPACK_IMPORTED_MODULE_3__["CurrentValueContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_CurrentValue_styled__WEBPACK_IMPORTED_MODULE_6__["default"], {
    valueColor: color,
    units: units,
    css: 'top: 0;'
  }, logarithmic ? _helpers_logarithm__WEBPACK_IMPORTED_MODULE_8__["default"].formatValue(value, base) : value.toFixed(1)));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id,
    className: className,
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    labelCSS: props.labelPosition === 'top' ? null : 'transform: translateY(-30px);'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Thermometer_styled__WEBPACK_IMPORTED_MODULE_3__["ThermometerContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    thermometer: true,
    xPositioned: scale
  }, scaleContainer, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_5__["TankContainer"], {
    thermometer: true,
    height: height,
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Tank_styled__WEBPACK_IMPORTED_MODULE_5__["TankFill"], {
    thermometer: true,
    color: color,
    height: "".concat(Object(_helpers_util__WEBPACK_IMPORTED_MODULE_9__["computeProgress"])({
      min: min,
      max: max,
      value: value
    }), "%")
  }), theme.dark ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_Thermometer_styled__WEBPACK_IMPORTED_MODULE_3__["Bulb"], {
    on: value !== min,
    color: color
  }))), showCurrentValue && currentValue)));
};

Thermometer.defaultProps = {
  min: 0,
  max: 10,
  height: 192,
  width: 20,
  base: 10,
  labelPosition: 'top',
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_7__["light"]
};
Thermometer.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The value of thermometer. If logarthmic, the value
   * displayed will be the logarithm of the inputted value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The height of the thermometer in pixels
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The width of the thermometer in pixels
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The color of the thermometer fill/current value text
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The minimum value of the thermometer. If logarithmic,
   * represents the minimum exponent.
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * The maximum value of the thermometer. If logarithmic,
   * represents the maximum exponent.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Base to be used in logarithmic scale.
   */
  base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * If set to true, a logarithmic scale will be
   * used.
   */
  logarithmic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If true, the current value of the
   * thermometer will be displayed
   */
  showCurrentValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Label for the current value
   */
  units: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]),

  /**
   * Where the component label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Configuration for the component scale.
   */
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    /**
     * Value to start the scale from. Defaults
     * to min.
     */
    start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Interval by which the scale goes up. Attempts
     * to dynamically divide min-max range by
     * default.
     */
    interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Interval by which labels are added to
     * scale marks. Defaults to 2 (every other
     * mark has a label).
     */
    labelInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

    /**
     * Custom scale marks. The key determines the position
     * and the value determines what will show. If you want
     * to set the style of a specific mark point, the value
     * should be an object which contains style and label
     * properties
     */
    custom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
    /**
     * Label for the mark
     */
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    /**
     * Style object with label
     */
    prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })])
  }),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root component element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Thermometer));

/***/ }),

/***/ "./src/components/ToggleSwitch.react.js":
/*!**********************************************!*\
  !*** ./src/components/ToggleSwitch.react.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_shared_Indicator_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/shared/Indicator.styled */ "./src/styled/shared/Indicator.styled.js");
/* harmony import */ var _styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/ToggleSwitch.styled */ "./src/styled/ToggleSwitch.styled.js");
/* harmony import */ var _styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/shared/LabelContainer.styled */ "./src/styled/shared/LabelContainer.styled.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









function getLabelProps(label) {
  if (_typeof(label) === 'object') {
    return {
      children: label.label,
      style: label.style
    };
  }

  return {
    children: label,
    style: {}
  };
}
/**
 * A switch component that toggles between
 * two values.
 */


var ToggleSwitch =
/*#__PURE__*/
function (_Component) {
  _inherits(ToggleSwitch, _Component);

  function ToggleSwitch(props) {
    var _this;

    _classCallCheck(this, ToggleSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToggleSwitch).call(this, props));
    _this.state = {
      value: props.value
    };
    _this.click = _this.click.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ToggleSwitch, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.value !== this.state.value) this.setState({
        value: newProps.value
      });
    }
  }, {
    key: "click",
    value: function click() {
      if (!this.props.disabled) {
        var newValue = !this.state.value;
        this.setState({
          value: newValue
        });
        if (this.props.setProps) this.props.setProps({
          value: newValue
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          style = _this$props.style,
          label = _this$props.label,
          labelPosition = _this$props.labelPosition,
          booleanSwitch = _this$props.booleanSwitch,
          theme = _this$props.theme,
          color = _this$props.color;
      var size = this.props.size || 45;
      var SwitchContainer = _styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__["ButtonContainer"];
      var Switch = _styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__["Button"];

      if (theme.dark && !booleanSwitch) {
        SwitchContainer = _styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__["DarkSwitchContainer"];
        Switch = _styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__["DarkSwitch"];
      }

      var indicatorSize = size / 10 * 1.25;
      var doubleLabel = Array.isArray(label);
      var switchCore = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
        rotate: this.props.vertical ? -90 : 0,
        size: size
      }, !booleanSwitch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_Indicator_styled__WEBPACK_IMPORTED_MODULE_3__["default"], {
        on: this.state.value,
        size: indicatorSize,
        primary: color
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitchContainer, {
        onClick: this.click,
        size: size,
        color: color,
        on: this.state.value,
        booleanSwitch: booleanSwitch
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, {
        disabled: this.props.disabled,
        on: this.state.value,
        size: size,
        booleanSwitch: booleanSwitch
      })), !booleanSwitch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_Indicator_styled__WEBPACK_IMPORTED_MODULE_3__["default"], {
        main: true,
        on: this.state.value,
        size: indicatorSize,
        primary: color
      }));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        className: className,
        style: style
      }, doubleLabel ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__["RowContainer"], this.props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__["RowLabel"], _extends({
        position: this.props.vertical ? 'bottom' : 'left'
      }, getLabelProps(label[0]))), switchCore, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_ToggleSwitch_styled__WEBPACK_IMPORTED_MODULE_4__["RowLabel"], _extends({
        position: this.props.vertical ? 'top' : 'right'
      }, getLabelProps(label[1])))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_shared_LabelContainer_styled__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: label,
        labelPosition: labelPosition
      }, switchCore));
    }
  }]);

  return ToggleSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ToggleSwitch.defaultProps = {
  value: false,
  vertical: false,
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_6__["light"],
  labelPosition: 'top'
};
ToggleSwitch.propTypes = {
  /**
   * The ID used to identify this compnent in Dash callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The state of the switch
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The size of the switch
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Color to highlight button/indicator
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * If true, switch will be vertical instead
   * of horizontal
   */
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * If true, switch cannot be clicked
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Theme configuration to be set by a ThemeProvider
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Description to be displayed alongside the control. To control styling, pass an object with label and style properties.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  /**
   * Multiple labels for both toggle states. The label at index 0 will be left
   * (or bottom if the switch is vertical), and the label at index 0 will be
   * on the right (or top if vertical)
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
  /**
   * Label to be displayed
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * The style and label
   */
  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })]))]),

  /**
   * Where the component label is positioned.
   */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'bottom']),

  /**
   * Class to apply to the root component element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Style to apply to the root object.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Dash-assigned callback that gets fired when
   * switch is toggled.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(ToggleSwitch));

/***/ }),

/***/ "./src/helpers/GaugeSvg.react.js":
/*!***************************************!*\
  !*** ./src/helpers/GaugeSvg.react.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
/* harmony import */ var _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/shared/DarkGradient */ "./src/styled/shared/DarkGradient.js");
/* harmony import */ var _helpers_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/util */ "./src/helpers/util.js");
/* harmony import */ var _shared_TrackSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/TrackSvg */ "./src/helpers/shared/TrackSvg.js");






var lightNeedleKnob = function lightNeedleKnob(_ref) {
  var CX = _ref.CX,
      CY = _ref.CY;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "needle-knob",
    cx: CX,
    cy: CY,
    r: "14",
    fill: "#fff"
  });
};

var darkNeedleKnob = function darkNeedleKnob(_ref2) {
  var CX = _ref2.CX,
      CY = _ref2.CY;
  var id = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_3__["getRandomInt"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "needle-knob-edge-".concat(id),
    strokeWidth: "2px",
    fill: "none",
    cx: CX,
    cy: CY,
    r: "14"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "needle-knob-".concat(id),
    className: "needle-knob",
    cx: CX,
    cy: CY,
    r: "14"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#141414",
    xlinkHref: "#needle-knob-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "url(#l)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#needle-knob-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "url(#m)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#needle-knob-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#141414",
    filter: "url(#n)",
    xlinkHref: "#needle-knob-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "#000000",
    xlinkHref: "#needle-knob-edge-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "url(#p)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#needle-knob-edge-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "url(#q)",
    strokeOpacity: ".4",
    xlinkHref: "#needle-knob-edge-".concat(id)
  }));
};

var darkTrack = function darkTrack(props, dimensions) {
  var progress = props.progress;
  var CX = dimensions.CX,
      CY = dimensions.CY,
      GAUGE_RAD = dimensions.GAUGE_RAD,
      CIRCLE_CIR = dimensions.CIRCLE_CIR,
      GAP_ARC_LENGTH = dimensions.GAP_ARC_LENGTH,
      TRACK_ARC_LENGTH = dimensions.TRACK_ARC_LENGTH;
  var id = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_3__["getRandomInt"])();
  var colorValue = props.color && (typeof props.color === 'string' ? props.color : props.color["default"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "gauge-track-".concat(id),
    className: "track",
    cx: CX,
    cy: CY,
    r: GAUGE_RAD,
    fill: "none",
    strokeDasharray: CIRCLE_CIR,
    strokeDashoffset: GAP_ARC_LENGTH,
    strokeWidth: "6",
    transform: "rotate(-225 ".concat(CX, " ").concat(CY, ")")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "gauge-track-progress-".concat(id),
    className: "track progress",
    cx: CX,
    cy: CY,
    r: GAUGE_RAD,
    fill: "none",
    strokeDasharray: CIRCLE_CIR,
    strokeDashoffset: GAP_ARC_LENGTH + (1 - progress) * TRACK_ARC_LENGTH,
    strokeWidth: "6",
    transform: "rotate(-225 ".concat(CX, " ").concat(CY, ")")
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "black",
    filter: "url(#a)",
    xlinkHref: "#gauge-track-".concat(id)
  }), props.color && props.color.ranges && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "#15181A",
    xlinkHref: "#gauge-track-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "url(#c)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#gauge-track-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "black",
    filter: "url(#d)",
    xlinkHref: "#gauge-track-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "black",
    filter: "url(#e)",
    xlinkHref: "#gauge-track-progress-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: colorValue || '#ABE2FB',
    xlinkHref: "#gauge-track-progress-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "url(#g)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#gauge-track-progress-".concat(id)
  }), props.color && props.color.ranges && Object(_shared_TrackSvg__WEBPACK_IMPORTED_MODULE_4__["colorRangesTrack"])(props, dimensions));
};

var needle = function needle(needleRotation, _ref3) {
  var CX = _ref3.CX,
      CY = _ref3.CY,
      SCALE_RAD = _ref3.SCALE_RAD;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    className: "needle",
    x1: CX,
    y1: CY,
    x2: CX + SCALE_RAD,
    y2: CY,
    transform: "rotate(".concat(needleRotation || 0, " ").concat(CX, " ").concat(CY, ")"),
    strokeLinecap: "round"
  });
};

var defs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_2__["default"]);

var GaugeSvg = function GaugeSvg(props) {
  var progress = props.progress,
      min = props.min,
      max = props.max,
      step = props.step,
      scale = props.scale;
  var dimensions = calcDimensions(props);
  var scaleItems = Object(_shared_TrackSvg__WEBPACK_IMPORTED_MODULE_4__["drawScale"])({
    min: min,
    max: max,
    step: step,
    scale: scale
  }, dimensions);
  var knob = props.theme.dark ? darkNeedleKnob(dimensions) : lightNeedleKnob(dimensions);
  var track = props.theme.dark ? darkTrack(props, dimensions) : Object(_shared_TrackSvg__WEBPACK_IMPORTED_MODULE_4__["lightTrack"])(props, dimensions);
  var needleRotation = 270 * progress - 225;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: dimensions.SVG_WIDTH,
    height: dimensions.SVG_WIDTH,
    viewBox: "0 0 ".concat(dimensions.SVG_WIDTH, " ").concat(dimensions.SVG_WIDTH)
  }, props.theme.dark && defs, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "scale"
  }, scaleItems), needle(needleRotation, dimensions), knob, track);
};

GaugeSvg.defaultProps = {
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_1__["light"],
  size: 208
};
/* harmony default export */ __webpack_exports__["default"] = (GaugeSvg); // private helpers

function calcDimensions(_ref4) {
  var size = _ref4.size;
  var OFFSET = 8;
  var d = {};
  d.SVG_WIDTH = size + 32;
  d.CY = ~~(d.SVG_WIDTH / 2);
  d.CX = ~~(d.SVG_WIDTH / 2);
  d.GAUGE_RAD = size / 2;
  d.SCALE_RAD = d.GAUGE_RAD - OFFSET;
  d.CIRCLE_CIR = 2 * Math.PI * d.GAUGE_RAD;
  d.GAP_ARC_LENGTH = 90 / 360 * (2 * Math.PI * d.GAUGE_RAD);
  d.TRACK_ARC_LENGTH = d.CIRCLE_CIR - d.GAP_ARC_LENGTH;
  d.SCALE_TICK_OUTER_RAD = d.SCALE_RAD;
  d.SCALE_TICK_INNER_RAD = d.SCALE_TICK_OUTER_RAD - 6;
  d.SCALE_TEXT_RAD = d.SCALE_TICK_INNER_RAD - 8;
  d.IS_GAUGE = true;
  return d;
}

/***/ }),

/***/ "./src/helpers/KnobSvg.react.js":
/*!**************************************!*\
  !*** ./src/helpers/KnobSvg.react.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
/* harmony import */ var _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/shared/DarkGradient */ "./src/styled/shared/DarkGradient.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/helpers/util.js");
/* harmony import */ var _shared_TrackSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/TrackSvg */ "./src/helpers/shared/TrackSvg.js");
/* harmony import */ var _colorRanges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorRanges */ "./src/helpers/colorRanges.js");






var START_ANGLE_OFFSET = -225;

var lightKnob = function lightKnob(newAngle, _ref) {
  var CX = _ref.CX,
      CY = _ref.CY,
      KNOB_RAD = _ref.KNOB_RAD;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(".concat(CX, " ").concat(CY, ") rotate(").concat(newAngle, ")")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "base",
    cx: "0",
    cy: "0",
    r: KNOB_RAD,
    fill: "#fff"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "indent",
    cx: KNOB_RAD * (2 / 3),
    cy: "0",
    r: KNOB_RAD / 6,
    fill: "#fff"
  }));
};

var darkKnob = function darkKnob(color, newAngle, _ref2) {
  var CX = _ref2.CX,
      CY = _ref2.CY,
      KNOB_RAD = _ref2.KNOB_RAD;
  var id = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getRandomInt"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(".concat(CX, " ").concat(CY, ")")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "base-edge-".concat(id),
    strokeWidth: "2px",
    fill: "none",
    d: "M-".concat(KNOB_RAD, ",0a").concat(KNOB_RAD, ",").concat(KNOB_RAD, " 0 1,0 ").concat(KNOB_RAD * 2, ",0a").concat(KNOB_RAD, ",").concat(KNOB_RAD, " 0 1,0 -").concat(KNOB_RAD * 2, ",0")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "base-".concat(id),
    className: "base",
    cx: "0",
    cy: "0",
    r: KNOB_RAD
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "indent-".concat(id),
    width: "8",
    height: "2",
    x: KNOB_RAD - 16,
    y: "0",
    rx: "1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#141414",
    xlinkHref: "#base-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "url(#l)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#base-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "url(#m)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#base-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#141414",
    filter: "url(#n)",
    xlinkHref: "#base-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "#000000",
    xlinkHref: "#base-edge-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "url(#p)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#base-edge-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "url(#q)",
    strokeOpacity: ".4",
    xlinkHref: "#base-edge-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "rotate(".concat(newAngle, ")")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "black",
    filter: "url(#r)",
    xlinkHref: "#indent-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: Object(_colorRanges__WEBPACK_IMPORTED_MODULE_5__["getColorValue"])(color) || '#ABE2FB',
    xlinkHref: "#indent-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "black",
    filter: "url(#t)",
    xlinkHref: "#indent-".concat(id)
  })));
};

var darkTrack = function darkTrack(props, dimensions) {
  var progress = props.progress;
  var CX = dimensions.CX,
      CY = dimensions.CY,
      GAUGE_RAD = dimensions.GAUGE_RAD,
      CIRCLE_CIR = dimensions.CIRCLE_CIR,
      GAP_ARC_LENGTH = dimensions.GAP_ARC_LENGTH,
      TRACK_ARC_LENGTH = dimensions.TRACK_ARC_LENGTH;
  var id = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getRandomInt"])();
  var hasColorRanges = props.color && props.color.ranges;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "knob-track-".concat(id),
    className: "track",
    cx: CX,
    cy: CY,
    r: GAUGE_RAD,
    fill: "none",
    strokeDasharray: CIRCLE_CIR,
    strokeDashoffset: GAP_ARC_LENGTH,
    strokeWidth: "6",
    transform: "rotate(-225 ".concat(CX, " ").concat(CY, ")")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "knob-track-progress-".concat(id),
    className: "track progress",
    cx: CX,
    cy: CY,
    r: GAUGE_RAD,
    fill: "none",
    strokeDasharray: CIRCLE_CIR,
    strokeDashoffset: GAP_ARC_LENGTH + (1 - progress) * TRACK_ARC_LENGTH,
    strokeWidth: "6",
    transform: "rotate(-225 ".concat(CX, " ").concat(CY, ")")
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "#15181A",
    filter: "url(#a)",
    xlinkHref: "#knob-track-".concat(id)
  }), hasColorRanges && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "#15181A",
    xlinkHref: "#knob-track-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "url(#c)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#knob-track-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "#15181A",
    filter: "url(#d)",
    xlinkHref: "#knob-track-".concat(id)
  }), !hasColorRanges && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "black",
    filter: "url(#e)",
    xlinkHref: "#knob-track-progress-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: "url(#g)",
    style: {
      mixBlendMode: 'overlay'
    },
    xlinkHref: "#knob-track-progress-".concat(id)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    stroke: Object(_colorRanges__WEBPACK_IMPORTED_MODULE_5__["getColorValue"])(props.color) || '#ABE2FB',
    xlinkHref: "#knob-track-progress-".concat(id)
  }), props.color && props.color.ranges && Object(_shared_TrackSvg__WEBPACK_IMPORTED_MODULE_4__["colorRangesTrack"])(props, dimensions));
};

var KnobSvg = function KnobSvg(props) {
  var theme = props.theme,
      currentDeg = props.currentDeg,
      disabled = props.disabled,
      color = props.color;
  var newAngle = currentDeg + START_ANGLE_OFFSET;
  var dimensions = calcDimensions(props);
  var knob = theme.dark ? darkKnob(color, newAngle, dimensions) : lightKnob(newAngle, dimensions);
  var track = theme.dark ? darkTrack(props, dimensions) : Object(_shared_TrackSvg__WEBPACK_IMPORTED_MODULE_4__["lightTrack"])(props, dimensions);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: dimensions.SVG_WIDTH,
    height: dimensions.SVG_WIDTH,
    viewBox: "0 0 ".concat(dimensions.SVG_WIDTH, " ").concat(dimensions.SVG_WIDTH)
  }, theme.dark && _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_2__["default"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "scale"
  }, Object(_shared_TrackSvg__WEBPACK_IMPORTED_MODULE_4__["drawScale"])(props, dimensions)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    ref: props.refFunc,
    onMouseDown: props.onMouseDown,
    onMouseUp: props.onMouseUp,
    onMouseMove: props.onMouseMove,
    className: "knob ".concat(disabled ? 'disabled' : '')
  }, knob), track);
};

KnobSvg.defaultProps = {
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_1__["light"],
  size: 144
};
/* harmony default export */ __webpack_exports__["default"] = (KnobSvg); // private helpers

function calcDimensions(_ref3) {
  var size = _ref3.size;
  var OFFSET = 36;
  var d = {};
  d.SVG_WIDTH = size + 80;
  d.CY = ~~(d.SVG_WIDTH / 2);
  d.CX = ~~(d.SVG_WIDTH / 2);
  d.GAUGE_RAD = size / 2;
  d.SCALE_RAD = d.GAUGE_RAD + OFFSET;
  d.KNOB_RAD = d.GAUGE_RAD - 12;
  d.CIRCLE_CIR = 2 * Math.PI * d.GAUGE_RAD;
  d.GAP_ARC_LENGTH = 90 / 360 * (2 * Math.PI * d.GAUGE_RAD);
  d.TRACK_ARC_LENGTH = d.CIRCLE_CIR - d.GAP_ARC_LENGTH;
  d.SCALE_TICK_OUTER_RAD = d.SCALE_RAD - 27;
  d.SCALE_TICK_INNER_RAD = d.SCALE_TICK_OUTER_RAD - 0.5;
  d.SCALE_TEXT_RAD = d.SCALE_RAD - 20;
  return d;
}

/***/ }),

/***/ "./src/helpers/LEDDisplaySvg.react.js":
/*!********************************************!*\
  !*** ./src/helpers/LEDDisplaySvg.react.js ***!
  \********************************************/
/*! exports provided: Digit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Digit", function() { return Digit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_LEDDisplay_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/LEDDisplay.styled */ "./src/styled/LEDDisplay.styled.js");
/* harmony import */ var _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/shared/DarkGradient */ "./src/styled/shared/DarkGradient.js");




var DIGITS = {
  0: ['A', 'B', 'C', 'D', 'E', 'F'],
  1: ['B', 'C'],
  2: ['A', 'B', 'G', 'E', 'D'],
  3: ['A', 'B', 'G', 'C', 'D'],
  4: ['F', 'G', 'B', 'C'],
  5: ['A', 'F', 'G', 'C', 'D'],
  6: ['A', 'F', 'G', 'C', 'D', 'E'],
  7: ['A', 'B', 'C'],
  8: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  9: ['A', 'B', 'C', 'D', 'F', 'G'],
  '-': ['G']
}; // See the following link for segment mappings:
// https://en.wikipedia.org/wiki/Seven-segment_display#/media/File:7_segment_display_labeled.svg

var LIGHT_SEGMENTS = {
  A: {
    base: 'M3.778 3.778L6.555 1h16.667L26 3.778l-2.778 2.778H6.555L3.778 3.778z',
    stroke: 'M3.778 3.778L6.555 1h16.667L26 3.778l-2.778 2.778H6.555L3.778 3.778z'
  },
  B: {
    base: 'M26 3.778l2.778 2.777v16.667L26 26l-2.778-2.778V6.555L26 3.778z',
    stroke: 'M26 3.778l2.778 2.777v16.667L26 26l-2.778-2.778V6.555L26 3.778z'
  },
  C: {
    base: 'M26 26l2.778 2.778v16.666L26 48.222l-2.778-2.778V28.778L26 26z',
    stroke: 'M26 26l2.778 2.778v16.666L26 48.222l-2.778-2.778V28.778L26 26z'
  },
  D: {
    base: 'M26 48.222L23.222 51H6.555l-2.777-2.778 2.777-2.778h16.667L26 48.222z',
    stroke: 'M26 48.222L23.222 51H6.555l-2.777-2.778 2.777-2.778h16.667L26 48.222z'
  },
  E: {
    base: 'M3.778 48.222L1 45.444V28.778L3.778 26l2.778 2.778v16.666l-2.778 2.778z',
    stroke: 'M3.778 48.222L1 45.444V28.778L3.778 26l2.778 2.778v16.666l-2.778 2.778z'
  },
  F: {
    base: 'M3.778 26L1 23.222V6.555l2.778-2.777 2.778 2.777v16.667L3.778 26z',
    stroke: 'M3.778 26L1 23.222V6.555l2.778-2.777 2.778 2.777v16.667L3.778 26z'
  },
  G: {
    base: 'M3.778 26l2.777-2.778h16.667L26 26l-2.778 2.778H6.555L3.778 26z',
    stroke: 'M3.778 26l2.777-2.778h16.667L26 26l-2.778 2.778H6.555L3.778 26z'
  }
};

var LightSegment = function LightSegment(_ref) {
  var _ref$paths = _ref.paths,
      base = _ref$paths.base,
      stroke = _ref$paths.stroke,
      fillColor = _ref.fillColor,
      strokeColor = _ref.strokeColor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fillColor,
    fillRule: "evenodd",
    d: base,
    clipRule: "evenodd"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: strokeColor,
    strokeWidth: ".75",
    d: stroke
  }));
};

var LightDecimal = function LightDecimal(_ref2) {
  var fillColor = _ref2.fillColor,
      strokeColor = _ref2.strokeColor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(29 46)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    fill: fillColor
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    stroke: strokeColor,
    strokeWidth: ".75"
  }));
};

var LightColon = function LightColon(_ref3) {
  var fillColor = _ref3.fillColor,
      strokeColor = _ref3.strokeColor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(32 36)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    fill: fillColor
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    stroke: strokeColor,
    strokeWidth: ".75"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(32 9)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    fill: fillColor
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "3",
    stroke: strokeColor,
    strokeWidth: ".75"
  })));
};

var LightDigit = function LightDigit(_ref4) {
  var value = _ref4.value,
      hasColon = _ref4.hasColon,
      hasDecimal = _ref4.hasDecimal,
      color = _ref4.color,
      backgroundColor = _ref4.backgroundColor,
      size = _ref4.size;
  var inactiveSegmentFill = color__WEBPACK_IMPORTED_MODULE_1___default()(backgroundColor).darken(0.2).fade(0.85);
  var activeSegments = DIGITS[value].map(function (letter) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LightSegment, {
      key: letter,
      fillColor: color,
      strokeColor: backgroundColor,
      paths: LIGHT_SEGMENTS[letter]
    });
  });
  var inactiveSegments = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(function (letter) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LightSegment, {
      key: letter,
      fillColor: inactiveSegmentFill,
      strokeColor: backgroundColor,
      paths: LIGHT_SEGMENTS[letter]
    });
  });
  var width = hasColon ? size : size * (6 / 7);
  var height = size * (9 / 7);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    style: {
      transform: "scale(".concat(Number(size) / 42, ")")
    }
  }, inactiveSegments, activeSegments, hasColon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LightColon, {
    fillColor: color,
    strokeColor: backgroundColor
  }), hasDecimal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LightDecimal, {
    fillColor: color,
    strokeColor: backgroundColor
  })));
};

var DarkDigit = function DarkDigit(_ref5) {
  var value = _ref5.value,
      hasColon = _ref5.hasColon,
      hasDecimal = _ref5.hasDecimal,
      color = _ref5.color,
      size = _ref5.size;
  var segments = DIGITS[value].map(function (letter) {
    return _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_3__["DARK_SEGMENTS"][letter];
  });
  var width = hasColon ? size : size * (6 / 7);
  var height = size * (9 / 7);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_LEDDisplay_styled__WEBPACK_IMPORTED_MODULE_2__["DarkDigitContainer"], {
    color: color
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: width,
    height: height
  }, _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_3__["darkLEDDefs"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    filter: "url(#darkLED-a)",
    style: {
      transform: "scale(".concat(Number(size) / 42, ")")
    }
  }, segments, hasColon && _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_3__["darkColon"], hasDecimal && _styled_shared_DarkGradient__WEBPACK_IMPORTED_MODULE_3__["darkDecimal"])));
};

var Digit = function Digit(props) {
  return props.theme.dark ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DarkDigit, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LightDigit, props);
};
/* harmony default export */ __webpack_exports__["default"] = (Digit);

/***/ }),

/***/ "./src/helpers/PowerButtonSvg.react.js":
/*!*********************************************!*\
  !*** ./src/helpers/PowerButtonSvg.react.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");



var PowerButtonSvg = function PowerButtonSvg(_ref) {
  var color = _ref.color,
      theme = _ref.theme,
      on = _ref.on,
      size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 14 14"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: on ? color || theme.primary : theme.secondary,
    fillRule: "evenodd",
    d: "M24.5173333,14.68 C25.2764482,15.3271143 25.8799978,16.1111065 26.328,17.032 C26.7760022,17.9777825 27,18.9671059 27,20 C27,21.2693397 26.6826698,22.4453279 26.048,23.528 C25.4257747,24.5857831 24.5857831,25.4257747 23.528,26.048 C22.4453279,26.6826698 21.2693397,27 20,27 C18.7306603,27 17.5546721,26.6826698 16.472,26.048 C15.4142169,25.4257747 14.5742253,24.5857831 13.952,23.528 C13.3173302,22.4453279 13,21.2693397 13,20 C13,18.9671059 13.2302199,17.9777825 13.6906667,17.032 C14.1262244,16.1111065 14.7235518,15.3271143 15.4826667,14.68 L16.5653333,15.7626667 C15.9555525,16.2728914 15.4764462,16.8888853 15.128,17.6106667 C14.7546648,18.3697816 14.568,19.1662181 14.568,20 C14.568,20.9955605 14.8106642,21.9102181 15.296,22.744 C15.7813358,23.5653374 16.4346626,24.2186642 17.256,24.704 C18.0897819,25.1893358 19.0044395,25.432 20,25.432 C20.9955605,25.432 21.9102181,25.1893358 22.744,24.704 C23.5653374,24.2186642 24.2186642,23.5653374 24.704,22.744 C25.1893358,21.9102181 25.432,20.9955605 25.432,20 C25.432,19.1537735 25.2546684,18.3666703 24.9,17.6386667 C24.5453316,16.910663 24.056892,16.2977803 23.4346667,15.8 L24.5173333,14.68 Z M20.7653333,13 L20.7653333,20.7653333 L19.2346667,20.7653333 L19.2346667,13 L20.7653333,13 Z",
    transform: "translate(-13 -13)"
  }));
};

PowerButtonSvg.defaultProps = {
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
/* harmony default export */ __webpack_exports__["default"] = (PowerButtonSvg);

/***/ }),

/***/ "./src/helpers/colorRanges.js":
/*!************************************!*\
  !*** ./src/helpers/colorRanges.js ***!
  \************************************/
/*! exports provided: isContiguous, getSortedEntries, getGradientObject, getLinearGradientCSS, getColorValue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isContiguous", function() { return isContiguous; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedEntries", function() { return getSortedEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGradientObject", function() { return getGradientObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinearGradientCSS", function() { return getLinearGradientCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorValue", function() { return getColorValue; });
/* harmony import */ var tinygradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinygradient */ "./node_modules/tinygradient/tinygradient.js");
/* harmony import */ var tinygradient__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinygradient__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var isContiguous = function isContiguous(_ref) {
  var color = _ref.color,
      min = _ref.min,
      max = _ref.max;
  var ranges = Object.values(color.ranges);
  ranges.sort(function (r1, r2) {
    return r1[0] - r2[0];
  }); // color ranges start at min and end at max

  if (ranges[0][0] !== min || ranges[ranges.length - 1][1] !== max) return false; // color ranges are contiguous

  for (var i = 0; i < ranges.length - 1; i++) {
    if (ranges[i][1] !== ranges[i + 1][0]) return false;
  }

  return true;
};
var getSortedEntries = function getSortedEntries(scale) {
  var entries = Object.entries(scale);
  entries.sort(function (_ref2, _ref3) {
    var _ref4 = _slicedToArray(_ref2, 2),
        r1 = _ref4[1];

    var _ref5 = _slicedToArray(_ref3, 2),
        r2 = _ref5[1];

    return r1[0] - r2[0];
  });
  return entries;
};
var getGradientObject = function getGradientObject(_ref6) {
  var color = _ref6.color,
      min = _ref6.min,
      max = _ref6.max;
  var currentPos = 0;
  var stops = getSortedEntries(color.ranges).map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        colorValue = _ref8[0],
        range = _ref8[1];

    var rangeLength = (range[1] - range[0]) * 1.0 / (max - min);
    var start = currentPos;
    var end = currentPos + rangeLength;
    currentPos = end;
    return {
      color: colorValue,
      pos: start
    };
  });
  return tinygradient__WEBPACK_IMPORTED_MODULE_0___default()(stops);
};
var getLinearGradientCSS = function getLinearGradientCSS(_ref9) {
  var color = _ref9.color,
      min = _ref9.min,
      max = _ref9.max,
      _ref9$vertical = _ref9.vertical,
      vertical = _ref9$vertical === void 0 ? false : _ref9$vertical;
  var currentPercentage = 0;
  var stops = getSortedEntries(color.ranges).map(function (_ref10, i) {
    var _ref11 = _slicedToArray(_ref10, 2),
        colorValue = _ref11[0],
        range = _ref11[1];

    var rangeLength = (range[1] - range[0]) * 1.0 / (max - min) * 100;
    var start = currentPercentage;
    var end = currentPercentage + rangeLength;
    currentPercentage = end;

    if (color.gradient) {
      return i === 0 ? colorValue : "".concat(colorValue, " ").concat(start, "%");
    }

    return i === 0 ? "".concat(colorValue, ", ").concat(colorValue, " ").concat(end, "%") : "".concat(colorValue, " ").concat(start, "%, ").concat(colorValue, " ").concat(end, "%");
  });
  stops.unshift(vertical ? 'to top' : 'to right');
  return "linear-gradient(".concat(stops.join(', '), ")");
};
var getColorValue = function getColorValue(color) {
  return color && (typeof color === 'string' ? color : color["default"]);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  isContiguous: isContiguous,
  getSortedEntries: getSortedEntries,
  getLinearGradientCSS: getLinearGradientCSS,
  getColorValue: getColorValue
});

/***/ }),

/***/ "./src/helpers/logarithm.js":
/*!**********************************!*\
  !*** ./src/helpers/logarithm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/helpers/util.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.9em;\n  margin-left: -10px;\n\n  & sup {\n    font-size: 0.6em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function compute(value) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  if (base === 'e') base = Math.exp(1);
  return Math.log(value) / Math.log(base);
}

function generateLogFormatter(_ref) {
  var _ref$base = _ref.base,
      base = _ref$base === void 0 ? 10 : _ref$base,
      _ref$isSVG = _ref.isSVG,
      isSVG = _ref$isSVG === void 0 ? false : _ref$isSVG;
  return function (value) {
    return isSVG ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", null, base, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
      dy: "-6px"
    }, value)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, base, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, value));
  };
}

function genLogMarks(_ref2, isSVG) {
  var min = _ref2.min,
      max = _ref2.max,
      _ref2$step = _ref2.step,
      step = _ref2$step === void 0 ? 1 : _ref2$step,
      _ref2$base = _ref2.base,
      base = _ref2$base === void 0 ? 10 : _ref2$base,
      marks = _ref2.marks;

  // if no marks given, compute default marks
  if (!marks) {
    var curr = min;
    marks = {};

    while (curr <= max) {
      marks[curr] = true;
      curr += step;
    }
  }

  Object.keys(marks).forEach(function (key) {
    if (typeof marks[key] !== 'boolean') {
      // custom mark label, do not format
      return;
    }

    marks[key] = isSVG ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", null, base, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", {
      dy: "-6px"
    }, key)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, base, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, key));
  });
  return marks;
}

function formatValue(value, base) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Value, null, "~", base, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, Object(_util__WEBPACK_IMPORTED_MODULE_2__["roundToDecimal"])(value, 2)));
}

var Value = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = ({
  compute: compute,
  generateLogFormatter: generateLogFormatter,
  formatValue: formatValue,
  genLogMarks: genLogMarks
});

/***/ }),

/***/ "./src/helpers/scale.js":
/*!******************************!*\
  !*** ./src/helpers/scale.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateScale; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/helpers/util.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // magic numbers

var DEFAULT_NUM_INTERVALS = 10;
var DEFAULT_LABEL_INTERVAL = 2;
function generateScale(input) {
  var config = processInput(input);

  var scale = _objectSpread({}, config.custom);

  if (config.onlyRenderCustom) {
    return scale;
  }

  scale[config.min] = config.formatter(config.min);
  scale[config.max] = config.formatter(config.max);
  var curr = config.start;
  var markCount = 0;

  while (curr <= config.max) {
    var needsLabel = markCount % config.labelInterval === 0;
    var currValue = Number(Object(_util__WEBPACK_IMPORTED_MODULE_0__["decimalify"])(curr, config.interval));
    var alreadyMarked = typeof scale[currValue] !== 'undefined';
    curr += config.interval;
    markCount++;
    if (alreadyMarked) continue;
    var label = needsLabel ? config.formatter(currValue) : null;
    scale[currValue] = label;
  }

  return scale;
} // private

function processInput(_ref) {
  var min = _ref.min,
      max = _ref.max,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? {} : _ref$scale,
      formatter = _ref.formatter;
  var config = {};
  var START_FLAG = scale.start != null;
  var INTERVAL_FLAG = scale.interval != null;
  var LABEL_INTERVAL_FLAG = scale.labelInterval != null;
  config.min = min;
  config.max = max;
  config.start = START_FLAG ? scale.start : min;
  config.interval = INTERVAL_FLAG ? scale.interval : computeInterval(config.start, max);
  config.labelInterval = LABEL_INTERVAL_FLAG ? scale.labelInterval : DEFAULT_LABEL_INTERVAL;
  config.custom = scale.custom || {};
  config.formatter = formatter || identityFunc;
  var noConfigPassed = !START_FLAG && !INTERVAL_FLAG && !LABEL_INTERVAL_FLAG;
  var customTicks = Object.keys(config.custom).length;
  config.onlyRenderCustom = customTicks && noConfigPassed;
  return config;
}

function identityFunc(x) {
  return x;
}

function computeInterval(min, max) {
  var ROUND_TO_WHOLE = Math.ceil;

  var ROUND_TO_FRACTION = function ROUND_TO_FRACTION(x) {
    return Number(x.toFixed(2));
  };

  var range = Math.abs(max - min) * 1.0;
  var intervalEstimate = range / DEFAULT_NUM_INTERVALS;
  var interval = intervalEstimate > 1 ? ROUND_TO_WHOLE(intervalEstimate) : ROUND_TO_FRACTION(intervalEstimate);
  return interval;
}

/***/ }),

/***/ "./src/helpers/shared/TrackSvg.js":
/*!****************************************!*\
  !*** ./src/helpers/shared/TrackSvg.js ***!
  \****************************************/
/*! exports provided: colorRangesTrack, lightTrack, drawScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRangesTrack", function() { return colorRangesTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTrack", function() { return lightTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawScale", function() { return drawScale; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/util */ "./src/helpers/util.js");
/* harmony import */ var _helpers_colorRanges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/colorRanges */ "./src/helpers/colorRanges.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled/constants */ "./src/styled/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var colorRangesTrack = function colorRangesTrack(props, dimensions) {
  var color = props.color,
      max = props.max;
  var CX = dimensions.CX,
      CY = dimensions.CY,
      GAUGE_RAD = dimensions.GAUGE_RAD,
      CIRCLE_CIR = dimensions.CIRCLE_CIR,
      GAP_ARC_LENGTH = dimensions.GAP_ARC_LENGTH;
  var TRACK_ARC_DEG = 270;
  var GAP_ARC_DEG = 90;
  var GRADIENT_BLEND = 25;
  if (!Object(_helpers_colorRanges__WEBPACK_IMPORTED_MODULE_2__["isContiguous"])(props)) return null; // calculate stops

  var stops = Object(_helpers_colorRanges__WEBPACK_IMPORTED_MODULE_2__["getSortedEntries"])(color.ranges).map(function (_ref, i) {
    var _ref2 = _slicedToArray(_ref, 2),
        colorValue = _ref2[0],
        range = _ref2[1];

    var startDeg = range[0] * 1.0 / max * TRACK_ARC_DEG + GAP_ARC_DEG;
    var endDeg = range[1] * 1.0 / max * TRACK_ARC_DEG + GAP_ARC_DEG;

    if (color.gradient) {
      // no transition between black band and first color
      if (i === 0) {
        return "".concat(colorValue, " 0");
      }

      return "".concat(colorValue, " ").concat(startDeg + GRADIENT_BLEND, "deg, ").concat(colorValue, " ").concat(endDeg - GRADIENT_BLEND, "deg");
    }

    return "".concat(colorValue, " ").concat(startDeg, "deg, ").concat(colorValue, " ").concat(endDeg, "deg");
  });
  stops.unshift(["black ".concat(GAP_ARC_DEG, "deg")]); // add black band for bottom gap

  if (typeof window === 'undefined') {
    return null;
  }

  if (!window.ConicGradient) {
    // eslint-disable-next-line
    __webpack_require__(/*! conic-gradient */ "./node_modules/conic-gradient/conic-gradient.js"); // globally sets ConicGradient

  }

  var ConicGradient = window.ConicGradient;
  var gradient = new ConicGradient({
    stops: stops.join(', '),
    size: 400
  }); // unique id for each track

  var id = "colorRangesImage-".concat(Object(_helpers_util__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])());
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pattern", {
    id: id,
    patternUnits: "userSpaceOnUse",
    width: "100%",
    height: "100%"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    xlinkHref: gradient.dataURL,
    width: "100%",
    height: "100%"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "color-ranges",
    cx: CX,
    cy: CY,
    r: GAUGE_RAD,
    fill: "none",
    stroke: "url(#".concat(id, ")"),
    strokeWidth: "6px",
    strokeDasharray: CIRCLE_CIR,
    strokeDashoffset: GAP_ARC_LENGTH,
    transform: "rotate(-225 ".concat(CX, " ").concat(CY, ")")
  }));
};
var lightTrack = function lightTrack(props, dimensions) {
  var color = props.color,
      progress = props.progress;
  var CX = dimensions.CX,
      CY = dimensions.CY,
      GAUGE_RAD = dimensions.GAUGE_RAD,
      CIRCLE_CIR = dimensions.CIRCLE_CIR,
      GAP_ARC_LENGTH = dimensions.GAP_ARC_LENGTH,
      TRACK_ARC_LENGTH = dimensions.TRACK_ARC_LENGTH;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "track",
    cx: CX,
    cy: CY,
    r: GAUGE_RAD,
    fill: "none",
    strokeDasharray: CIRCLE_CIR,
    strokeDashoffset: GAP_ARC_LENGTH,
    strokeWidth: "6",
    transform: "rotate(-225 ".concat(CX, " ").concat(CY, ")")
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "track progress",
    cx: CX,
    cy: CY,
    r: GAUGE_RAD,
    fill: "none",
    strokeDasharray: CIRCLE_CIR,
    strokeDashoffset: GAP_ARC_LENGTH + (1 - progress) * TRACK_ARC_LENGTH,
    strokeWidth: "6",
    transform: "rotate(-225 ".concat(CX, " ").concat(CY, ")")
  }), color && color.ranges && colorRangesTrack(props, dimensions));
};

var getScaleString = function getScaleString(v) {
  if (!v) return ''; // is jsx element?

  if (v.props) return v.props.children[0] + ' ';
  return v && v.label || v;
};

var drawScale = function drawScale(_ref3, _ref4) {
  var min = _ref3.min,
      max = _ref3.max,
      step = _ref3.step,
      scale = _ref3.scale;
  var CX = _ref4.CX,
      CY = _ref4.CY,
      SCALE_TICK_OUTER_RAD = _ref4.SCALE_TICK_OUTER_RAD,
      SCALE_TICK_INNER_RAD = _ref4.SCALE_TICK_INNER_RAD,
      SCALE_TEXT_RAD = _ref4.SCALE_TEXT_RAD,
      IS_GAUGE = _ref4.IS_GAUGE;
  var START_ANGLE_OFFSET = -225;
  var DEFAULT_LONGEST_STRING = 3;
  var scaleItems = [];
  var count = 0;
  var offset = Math.max(Object(_helpers_util__WEBPACK_IMPORTED_MODULE_1__["longestString"])(Object.values(scale).map(getScaleString)).length, DEFAULT_LONGEST_STRING) * 2;
  var sr1 = SCALE_TICK_OUTER_RAD;
  var sr2 = SCALE_TICK_INNER_RAD;
  var srT = IS_GAUGE ? SCALE_TEXT_RAD - offset : SCALE_TEXT_RAD + offset;
  Object.keys(scale).forEach(function (key) {
    var markValue = scale[key];
    var degreesProgressed = Object(_helpers_util__WEBPACK_IMPORTED_MODULE_1__["computeProgress"])({
      min: min,
      max: max,
      value: key,
      progressionTarget: _styled_constants__WEBPACK_IMPORTED_MODULE_3__["TRACK_TOTAL_DEG"]
    });
    var markAngle = START_ANGLE_OFFSET + degreesProgressed;

    if (markValue !== null) {
      // draw full mark
      var sx1 = CX + sr1 * Math.cos(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);
      var sy1 = CY + sr1 * Math.sin(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);
      var sx2 = CX + sr2 * Math.cos(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);
      var sy2 = CY + sr2 * Math.sin(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);
      var sxT = CX + srT * Math.cos(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);
      var syT = CY + srT * Math.sin(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]) + 4;
      scaleItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
        key: "line".concat(count),
        className: "tick",
        x1: sx1,
        y1: sy1,
        x2: sx2,
        y2: sy2,
        strokeLinecap: "round"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        key: "text".concat(count),
        x: sxT,
        y: syT,
        textAnchor: "middle",
        style: markValue && markValue.style ? markValue.style : null
      }, markValue && markValue.label || markValue));
    } else {
      // draw mini mark
      var _sx = CX + sr1 * Math.cos(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);

      var _sy = CY + sr1 * Math.sin(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);

      var _sx2 = CX + (sr2 + 3) * Math.cos(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);

      var _sy2 = CY + (sr2 + 3) * Math.sin(markAngle * _styled_constants__WEBPACK_IMPORTED_MODULE_3__["RADIAN"]);

      scaleItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
        key: "line".concat(count),
        className: "tick",
        x1: _sx,
        y1: _sy,
        x2: _sx2,
        y2: _sy2,
        strokeLinecap: "round"
      }));
    }

    count++;
  });
  return scaleItems;
};

/***/ }),

/***/ "./src/helpers/util.js":
/*!*****************************!*\
  !*** ./src/helpers/util.js ***!
  \*****************************/
/*! exports provided: longestString, decimalify, sanitizeRangeValue, computeProgress, roundToDecimal, getRandomInt, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longestString", function() { return longestString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decimalify", function() { return decimalify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeRangeValue", function() { return sanitizeRangeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeProgress", function() { return computeProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToDecimal", function() { return roundToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var longestString = function longestString(arr) {
  return arr.sort(function (a, b) {
    return b.length - a.length;
  })[0];
};
var decimalify = function decimalify() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var step = arguments.length > 1 ? arguments[1] : undefined;

  if (isNaN(num)) {
    return num;
  } // eslint-disable-next-line


  var _step$toString$split = step.toString().split('.'),
      _step$toString$split2 = _slicedToArray(_step$toString$split, 2),
      characteristic = _step$toString$split2[0],
      mantissa = _step$toString$split2[1];

  var numDecimalPoints = mantissa ? mantissa.length : 0;
  return num.toFixed(numDecimalPoints);
};
var sanitizeRangeValue = function sanitizeRangeValue(_ref) {
  var min = _ref.min,
      max = _ref.max,
      value = _ref.value;
  if (value == null) return min;

  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
};
var computeProgress = function computeProgress(_ref2) {
  var min = _ref2.min,
      max = _ref2.max,
      value = _ref2.value,
      _ref2$progressionTarg = _ref2.progressionTarget,
      progressionTarget = _ref2$progressionTarg === void 0 ? 100 : _ref2$progressionTarg;
  value = Number(value);
  var adjustedValue = Math.abs(value - min) * 1.0;
  var range = Math.abs(max - min);
  return adjustedValue / range * progressionTarget;
};
var roundToDecimal = function roundToDecimal(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};
var getRandomInt = function getRandomInt() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  decimalify: decimalify,
  sanitizeRangeValue: sanitizeRangeValue,
  computeProgress: computeProgress,
  longestString: longestString,
  roundToDecimal: roundToDecimal,
  getRandomInt: getRandomInt
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: BooleanSwitch, ColorPicker, Gauge, GraduatedBar, Indicator, Knob, LEDDisplay, NumericInput, PowerButton, PrecisionInput, StopButton, Slider, Tank, Thermometer, ToggleSwitch, DarkThemeProvider, Joystick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BooleanSwitch_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/BooleanSwitch.react */ "./src/components/BooleanSwitch.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanSwitch", function() { return _components_BooleanSwitch_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_ColorPicker_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ColorPicker.react */ "./src/components/ColorPicker.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return _components_ColorPicker_react__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Gauge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Gauge.react */ "./src/components/Gauge.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gauge", function() { return _components_Gauge_react__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_GraduatedBar_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GraduatedBar.react */ "./src/components/GraduatedBar.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraduatedBar", function() { return _components_GraduatedBar_react__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_Indicator_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Indicator.react */ "./src/components/Indicator.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return _components_Indicator_react__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_Knob_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Knob.react */ "./src/components/Knob.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Knob", function() { return _components_Knob_react__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_LEDDisplay_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LEDDisplay.react */ "./src/components/LEDDisplay.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LEDDisplay", function() { return _components_LEDDisplay_react__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_NumericInput_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/NumericInput.react */ "./src/components/NumericInput.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return _components_NumericInput_react__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_PowerButton_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/PowerButton.react */ "./src/components/PowerButton.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PowerButton", function() { return _components_PowerButton_react__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_PrecisionInput_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PrecisionInput.react */ "./src/components/PrecisionInput.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecisionInput", function() { return _components_PrecisionInput_react__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _components_StopButton_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/StopButton.react */ "./src/components/StopButton.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StopButton", function() { return _components_StopButton_react__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _components_Slider_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Slider.react */ "./src/components/Slider.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _components_Slider_react__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _components_Tank_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Tank.react */ "./src/components/Tank.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tank", function() { return _components_Tank_react__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _components_Thermometer_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Thermometer.react */ "./src/components/Thermometer.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thermometer", function() { return _components_Thermometer_react__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _components_ToggleSwitch_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ToggleSwitch.react */ "./src/components/ToggleSwitch.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitch", function() { return _components_ToggleSwitch_react__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _components_DarkThemeProvider_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/DarkThemeProvider.react */ "./src/components/DarkThemeProvider.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarkThemeProvider", function() { return _components_DarkThemeProvider_react__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _components_Joystick_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Joystick.react */ "./src/components/Joystick.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Joystick", function() { return _components_Joystick_react__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* eslint-disable import/prefer-default-export */


















/***/ }),

/***/ "./src/styled/CurrentValue.styled.js":
/*!*******************************************!*\
  !*** ./src/styled/CurrentValue.styled.js ***!
  \*******************************************/
/*! exports provided: Value, ValueLabel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueLabel", function() { return ValueLabel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/styled/constants.js");
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: -4px;\n  text-transform: uppercase;\n  font-size: 8px;\n  color: #535d63;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          ", ";\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n  font-size: 32px;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.css ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), props.css) : '';
});
var Value = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return theme.dark ? '#fff' : color || theme.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dark ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4()) : '';
});
Value.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_2__["light"]
};
var ValueLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label(_templateObject5());
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueContainer, {
    css: props.css
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Value, {
    color: props.valueColor
  }, props.children), props.units ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ValueLabel, null, props.units) : null);
});

/***/ }),

/***/ "./src/styled/Gauge.styled.js":
/*!************************************!*\
  !*** ./src/styled/Gauge.styled.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  & .needle-knob {\n    stroke: ", ";\n    stroke-width: 2;\n  }\n\n  & .track {\n    stroke: ", ";\n  }\n\n  & .track.progress {\n    stroke: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & svg {\n    text-align: center;\n  }\n\n  & circle {\n    user-select: none;\n  }\n\n  & .scale {\n    font-size: 12px;\n\n    fill: ", ";\n    user-select: none;\n  }\n\n  & .tick {\n    stroke: ", ";\n    stroke-width: 2;\n  }\n\n  & .tick.small {\n    stroke: #2b2f32;\n  }\n\n  & .needle {\n    stroke: ", ";\n    stroke-width: 3;\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.dark ? '#fff' : '#5b6268';
}, function (props) {
  return props.theme.detail;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dark ? '#fff' : '#5b6268';
}, function (_ref3) {
  var theme = _ref3.theme;
  return !theme.dark && lightTheme;
});
var lightTheme = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.secondary;
}, function (props) {
  return props.theme.secondary;
}, function (_ref5) {
  var color = _ref5.color,
      theme = _ref5.theme;
  return color || theme.primary;
});
Container.defaultProps = {
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/styled/GraduatedBar.styled.js":
/*!*******************************************!*\
  !*** ./src/styled/GraduatedBar.styled.js ***!
  \*******************************************/
/*! exports provided: Container, Block, Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/styled/constants.js");
function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n          font-size: 11px;\n          right: auto;\n        "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 4%;\n  top: 50%;\n  transform: translateY(-50%);\n\n  ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n      background-image: linear-gradient(\n        145deg,\n        rgba(255, 255, 255, 0.5) 0%,\n        rgba(0, 0, 0, 0.4) 100%\n      );\n      background-blend-mode: overlay;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  ", " box-shadow: ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      height: ", ";\n      width: ", ";\n      margin: ", ";\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        background-image: linear-gradient(", ", ", ", ", ");\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);\n  padding: 3px;\n  color: #fff;\n  border: none;\n  border-radius: 0px;\n  background-color: #22272a;\n  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);\n  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),\n    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n  width: ", ";\n  height: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column-reverse;\n  width: 30px;\n  height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (_ref) {
  var vertical = _ref.vertical;
  return vertical ? verticalContainer : horizontalContainer;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dark ? darkContainer : lightContainer;
});
Container.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
var verticalContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), function (_ref3) {
  var size = _ref3.size;
  return "".concat(size, "px");
});
var horizontalContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), function (_ref4) {
  var size = _ref4.size;
  return "".concat(size, "px");
});
var darkContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
var lightContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), function (props) {
  return props.theme.secondary;
});
var Block = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject6(), function (_ref5) {
  var gradient = _ref5.gradient,
      progress = _ref5.progress,
      color = _ref5.color,
      theme = _ref5.theme,
      max = _ref5.max,
      min = _ref5.min,
      step = _ref5.step,
      size = _ref5.size,
      vertical = _ref5.vertical;

  if (gradient) {
    var TOTAL_STEPS = (max - min) / step;
    var STEP_SIZE = size / TOTAL_STEPS;
    var STEP_SIZE_PERCENT = STEP_SIZE / size;
    var start = gradient.rgbAt(progress).toString();
    var end = gradient.rgbAt(progress + STEP_SIZE_PERCENT).toString();
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7(), vertical ? 'to top' : 'to right', start, end);
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8(), color || theme.primary);
}, function (props) {
  var TOTAL_STEPS = (props.max - props.min) / props.step;
  var STEP_SIZE = props.size / TOTAL_STEPS;
  var MARGIN = STEP_SIZE >= 10 ? STEP_SIZE * 0.05 : 0.5;
  var BOX_SIZE = STEP_SIZE - 2 * MARGIN;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9(), props.vertical ? "".concat(BOX_SIZE, "px") : '100%', props.vertical ? '100%' : "".concat(BOX_SIZE, "px"), props.vertical ? "".concat(MARGIN, "px 0") : "0 ".concat(MARGIN, "px"));
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.dark && darkBlock;
});
Block.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
var darkBlock = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject10(), function (_ref7) {
  var color = _ref7.color,
      theme = _ref7.theme,
      gradient = _ref7.gradient;
  if (gradient) return;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject11(), color || theme.primary);
}, function (_ref8) {
  var color = _ref8.color,
      theme = _ref8.theme;
  return "2px 2px 6px 1px rgba(0, 0, 0, 0.45), inset 1px 1px 2px 0 rgba(255, 255, 255, 0.3),\n      1px 1px 1px 0px rgba(0, 0, 0, 0.6), 0 0 3px 0px ".concat(color || theme.primary);
});
var Value = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject12(), function (_ref9) {
  var vertical = _ref9.vertical;
  return vertical ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject13()) : '';
});

/***/ }),

/***/ "./src/styled/Knob.styled.js":
/*!***********************************!*\
  !*** ./src/styled/Knob.styled.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/styled/constants.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  & .scale {\n    fill: #fff;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  & .scale {\n    fill: #5b6268;\n  }\n\n  & .track {\n    stroke: #e6e6e6;\n  }\n\n  & .knob .base,\n  .knob .indent {\n    stroke: #e6e6e6;\n    stroke-width: 2;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & svg {\n    text-align: center;\n  }\n\n  & circle {\n    user-select: none;\n  }\n\n  & .scale {\n    font-size: 12px;\n    user-select: none;\n  }\n\n  & .tick {\n    stroke: ", ";\n    stroke-width: 2;\n  }\n\n  & .knob {\n    cursor: pointer;\n  }\n\n  & .disabled {\n    opacity: ", ";\n    cursor: not-allowed;\n  }\n\n  & .track.progress {\n    stroke: ", ";\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.theme.detail;
}, function (_ref) {
  var theme = _ref.theme;
  return theme.dark ? 1 : 0.65;
}, function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return color || theme.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dark ? darkTheme : lightTheme;
});
var lightTheme = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
var darkTheme = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
Container.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/styled/LEDDisplay.styled.js":
/*!*****************************************!*\
  !*** ./src/styled/LEDDisplay.styled.js ***!
  \*****************************************/
/*! exports provided: LEDContainer, DarkDigitContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEDContainer", function() { return LEDContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkDigitContainer", function() { return DarkDigitContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/styled/constants.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  & .darkLED-fill {\n    fill: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 3px;\n  padding: 12px 8px 12px 14px;\n  border: 1px solid ", ";\n  background: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 12px 8px 4px 16px;\n  background-color: #22272a;\n  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);\n  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),\n    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var LEDContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.dark ? darkLEDContainer : lightLEDContainer;
});
var darkLEDContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
var lightLEDContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.detail;
}, function (_ref3) {
  var backgroundColor = _ref3.backgroundColor;
  return backgroundColor;
});
LEDContainer.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
var DarkDigitContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4(), function (_ref4) {
  var color = _ref4.color;
  return color;
});
/* harmony default export */ __webpack_exports__["default"] = (LEDContainer);

/***/ }),

/***/ "./src/styled/PowerButton.styled.js":
/*!******************************************!*\
  !*** ./src/styled/PowerButton.styled.js ***!
  \******************************************/
/*! exports provided: Container, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/constants */ "./src/styled/constants.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            box-shadow: 0 0 8px 2px ", ";\n          "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      width: ", "px;\n      height: ", "px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", " border-radius: 100%;\n  padding: 0;\n  margin-bottom: 8px;\n\n  &::before,\n  &::after {\n    left: 4%;\n    border-radius: 100%;\n    transition: all 0.1s ease-in;\n  }\n\n  &::before {\n    top: 8%;\n    width: 86%;\n    height: 86%;\n  }\n\n  &::after {\n    top: 4%;\n    width: 92%;\n    height: 92%;\n\n    ", ";\n  }\n\n  &:hover::before {\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n\n  &:hover::after {\n    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.66);\n  }\n\n  &:focus::after,\n  &:active::after {\n    box-shadow: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      width: ", "px;\n      height: ", "px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  box-sizing: border-box;\n  background: #fff;\n  border: 1px solid ", ";\n  ", " margin-bottom: ", ";\n  padding: 0;\n\n  &:focus,\n  &:hover {\n    border-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:disabled {\n    opacity: ", ";\n    cursor: not-allowed;\n  }\n\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  & svg {\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.dark ? 1 : 0.65;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dark ? darkTheme : lightTheme;
});
var lightTheme = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), function (props) {
  return props.theme.secondary;
}, function (_ref3) {
  var size = _ref3.size;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), size, size);
}, function (_ref4) {
  var size = _ref4.size;
  return "".concat(size * 0.0625, "px");
}, function (props) {
  return props.theme.secondary;
});
var darkTheme = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), function (_ref5) {
  var size = _ref5.size;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6(), size, size);
}, function (_ref6) {
  var on = _ref6.on,
      color = _ref6.color,
      theme = _ref6.theme;
  return on ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7(), color || theme.primary) : '';
}, function (_ref7) {
  var on = _ref7.on,
      color = _ref7.color,
      theme = _ref7.theme;
  return on ? "0 0 8px 2px ".concat(color || theme.primary) : '0 0 3px 0 rgba(0,0,0,0.66)';
});
Button.defaultProps = {
  theme: _styled_constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};

/***/ }),

/***/ "./src/styled/PrecisionInput.styled.js":
/*!*********************************************!*\
  !*** ./src/styled/PrecisionInput.styled.js ***!
  \*********************************************/
/*! exports provided: Container, Digit, ExponentialDigit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Digit", function() { return Digit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExponentialDigit", function() { return ExponentialDigit; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n          background: #f2f2f2;\n        "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n          color: ", ";\n          text-shadow: 0 0 2px rgba(0, 0, 0, 0.9),\n            0 0 9px ", ";\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: #15181a;\n  border-right: 1px solid #f2f2f2;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-right: 1px solid rgba(0, 0, 0, 0.4);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px 6px;\n  box-sizing: border-box;\n  display: inline-block;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: #ffffff;\n  border-radius: 2px;\n  border: 1px solid #d3d3d3;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #22272a;\n  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);\n  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),\n    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: flex-end;\n  width: ", ";\n  cursor: text;\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (_ref) {
  var size = _ref.size;
  return "".concat(size, "px") || false;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dark ? darkContainer : lightContainer;
});
var darkContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
var lightContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
var Digit = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.dark ? darkDigit : lightDigit;
});
var darkDigit = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5());
var lightDigit = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());
var ExponentialDigit = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Digit)(_templateObject7(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.dark ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8(), function (_ref5) {
    var color = _ref5.color,
        theme = _ref5.theme;
    return color || theme.primary;
  }, function (_ref6) {
    var color = _ref6.color,
        theme = _ref6.theme;
    return color || theme.primary;
  }) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9());
});

/***/ }),

/***/ "./src/styled/StopButton.styled.js":
/*!*****************************************!*\
  !*** ./src/styled/StopButton.styled.js ***!
  \*****************************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/styled/constants.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  width: ", ";\n  height: ", ";\n  line-height: ", ";\n\n  &::before,\n  &::after {\n    transition: all 0.1s ease-in;\n    background-color: #e03a3a;\n  }\n\n  &:hover::before,\n  &:hover::after {\n    background-color: #e64545;\n  }\n\n  &:active::before,\n  &:active::after {\n    background-color: #c72121;\n  }\n\n  &:hover::after,\n  &:active::after,\n  &:focus::after {\n    box-shadow: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  box-sizing: border-box;\n  color: white;\n  border: none;\n  border-radius: 2px;\n  font-weight: bold;\n  font-size: 12px;\n  text-transform: uppercase;\n  padding: 0;\n  width: ", ";\n  height: ", ";\n  text-align: center;\n  cursor: pointer;\n  background-color: #ff5e5e;\n  letter-spacing: 0.1;\n  line-height: 1;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: #fff;\n  }\n\n  &:hover {\n    background-color: #ff8585;\n  }\n\n  &:active {\n    background-color: #e64545;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  transition: all 0.1s ease-in;\n  ", ";\n\n  &:disabled {\n    opacity: ", ";\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.dark ? darkButton : lightButton;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.dark ? 1 : 0.65;
});
Button.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
var lightButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), function (_ref3) {
  var size = _ref3.size;
  return "".concat(size, "px");
}, function (_ref4) {
  var size = _ref4.size;
  return "".concat(size * 0.42, "px");
});
var darkButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), function (_ref5) {
  var size = _ref5.size;
  return "".concat(size, "px");
}, function (_ref6) {
  var size = _ref6.size;
  return "".concat(size * 0.42, "px");
}, function (_ref7) {
  var size = _ref7.size;
  return "".concat(size * 0.42, "px");
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styled/Tank.styled.js":
/*!***********************************!*\
  !*** ./src/styled/Tank.styled.js ***!
  \***********************************/
/*! exports provided: TankContainer, TankFill, TickContainer, Tick, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankContainer", function() { return TankContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankFill", function() { return TankFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickContainer", function() { return TickContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tick", function() { return Tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/styled/constants.js");
function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n          margin-top: 8px;\n          margin-left: ", ";\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n\n  ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n          position: absolute;\n          bottom: ", ";\n        "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  ", " display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 18px;\n\n  & .label {\n    font-size: 12px;\n    text-align: right;\n    margin-right: 4px;\n    white-space: nowrap;\n  }\n\n  & .tick {\n    height: 1px;\n    width: ", "px;\n    background: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      direction: rtl;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  ", " display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 4px;\n  margin-top: -6px;\n  margin-bottom: -6px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 30%, rgba(255, 255, 255, 0.7) 100%);\n  background-blend-mode: overlay;\n  box-shadow: 0 0 6px 1px\n    ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: ", ";\n\n  border-radius: ", ";\n\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #22272a;\n  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%);\n  box-shadow: inset 0 0 8px -1px rgba(0, 0, 0, 0.7), inset 0 0 4px 0 rgba(0, 0, 0, 0.8),\n    -1px -1px 0px 0px rgba(0, 0, 0, 0.8), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  z-index: 2;\n  border-radius: ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var TankContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return "".concat(width, "px");
}, function (_ref2) {
  var height = _ref2.height;
  return "".concat(height, "px");
}, function (_ref3) {
  var thermometer = _ref3.thermometer;
  return thermometer ? '40px' : '0';
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.dark ? darkTankContainer : lightTankContainer;
});
TankContainer.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_2__["light"]
};
var darkTankContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
var lightTankContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), function (props) {
  return props.theme.secondary;
});
var TankFill = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4(), function (_ref5) {
  var height = _ref5.height;
  return height || 0;
}, function (_ref6) {
  var thermometer = _ref6.thermometer;
  return thermometer ? '40px' : '0';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.dark ? darkTankFill : lightTankFill;
});
TankFill.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_2__["light"]
};
var darkTankFill = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), function (_ref8) {
  var color = _ref8.color,
      theme = _ref8.theme;
  return color || theme.primary;
}, function (_ref9) {
  var color = _ref9.color,
      theme = _ref9.theme;
  return color__WEBPACK_IMPORTED_MODULE_1___default()(color || theme.primary).alpha(0.7).string();
});
var lightTankFill = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6(), function (_ref10) {
  var color = _ref10.color,
      theme = _ref10.theme;
  return color || theme.primary;
});
var TickContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject7(), function (_ref11) {
  var xPositioned = _ref11.xPositioned;
  return xPositioned && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8());
});
var Tick = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject9(), function (_ref12) {
  var xPosition = _ref12.xPosition;
  return xPosition || xPosition === 0 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject10(), "calc(".concat(xPosition, "% - ").concat(xPosition / 100.0 * 18, "px)")) : '';
}, function (props) {
  return props.width || 4;
}, function (props) {
  return props.theme.detail;
});
Tick.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_2__["light"]
};
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject11(), function (_ref13) {
  var thermometer = _ref13.thermometer;
  return thermometer ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject12(), function (_ref14) {
    var xPositioned = _ref14.xPositioned;
    return xPositioned ? '-4px' : '-24px';
  }) : '';
});

/***/ }),

/***/ "./src/styled/Thermometer.styled.js":
/*!******************************************!*\
  !*** ./src/styled/Thermometer.styled.js ***!
  \******************************************/
/*! exports provided: ThermometerContainer, Bulb, CurrentValueContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermometerContainer", function() { return ThermometerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bulb", function() { return Bulb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentValueContainer", function() { return CurrentValueContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/styled/constants.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  & > div {\n    margin-top: 56px;\n    line-height: 28px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  background-color: ", ";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -", "px;\n  z-index: -1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var WIDTH = 20;
var ThermometerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
var Bulb = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), 1.5 * WIDTH, 1.5 * WIDTH, function (props) {
  return props.on ? props.color || props.theme.primary : props.theme.secondary;
}, WIDTH);
Bulb.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
var CurrentValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3());
CurrentValueContainer.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};

/***/ }),

/***/ "./src/styled/ToggleSwitch.styled.js":
/*!*******************************************!*\
  !*** ./src/styled/ToggleSwitch.styled.js ***!
  \*******************************************/
/*! exports provided: Wrapper, ButtonContainer, Button, DarkSwitchContainer, DarkSwitch, RowContainer, RowLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkSwitchContainer", function() { return DarkSwitchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkSwitch", function() { return DarkSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowContainer", function() { return RowContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowLabel", function() { return RowLabel; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/styled/constants.js");
/* harmony import */ var _shared_Label_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Label.styled */ "./src/styled/shared/Label.styled.js");
function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: ", ";\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%),\n          linear-gradient(90deg, rgba(0,0,0,0.6) 40%, rgba(255,255,255,0) 100%)"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["linear-gradient(135deg, rgba(255,255,255,0.7) 20%, rgba(0,0,0,0) 100%),\n          linear-gradient(90deg, rgba(255,255,255,0) 40%, rgba(0,0,0,0.8) 100%)"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n            margin-right: ", "px;\n          "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n            margin-left: ", "px;\n          "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["radial-gradient(farthest-corner at 0px 0px, rgba(256,255,255,1) 5%, rgba(0,0,0,0.6) 90%)"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["radial-gradient(farthest-corner at 0px 0px, rgba(256,255,255,1) 5%, rgba(0,0,0,0.6) 90%)"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n  margin: 0;\n  transition: all 100ms ease-in-out;\n  outline: none;\n  background: #161616;\n  height: ", ";\n  width: ", ";\n  background-blend-mode: overlay;\n  background-color: #111;\n  background-image: ;\n  background-image: ", ";\n  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.9);\n  border-radius: 2px;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  &:hover::after,\n  &:active::after,\n  &:focus::after {\n    box-shadow: none;\n  }\n\n  &::before {\n    content: none;\n  }\n\n  &::after {\n    transition: all 100ms ease-in-out;\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 4%;\n    height: 92%;\n    width: 92%;\n    margin: 0 auto;\n    ", " background-color: #161616;\n    background-blend-mode: overlay;\n    background-image: ", ";\n    border-radius: 2px;\n  }\n\n  &:hover::after {\n    background-color: #181818;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 2px 4px;\n  cursor: pointer;\n  border-radius: 1px;\n  margin: 0 8px;\n\n  background: #22272a;\n  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%);\n  box-shadow: inset 0 0 8px -1px #000000, inset 0 0 8px 0 rgba(0, 0, 0, 0.8),\n    -1px -1px 0px 0px rgba(0, 0, 0, 0.9), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-color: #141414;\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.5) -20%, rgba(0, 0, 0, 0.7) 100%);\n  box-shadow: inset 0 0 1px 0 rgba(52, 52, 52, 0.4), inset 0 0 0 1px rgba(0, 0, 0, 0.2),\n    1px 1px 2px 0px rgba(0, 0, 0, 0.7);\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  &::before,\n  &::after {\n    content: none;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    border: 1px solid ", ";\n    width: ", "px;\n    height: ", "px;\n    transform: translateX(", "px);\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  border-radius: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  transition: all 100ms ease-in-out;\n  outline: none;\n  ", " &:focus, &:active, &:hover {\n    border: none;\n    border: ", ";\n  }\n\n  &:disabled {\n    opacity: ", ";\n    cursor: not-allowed;\n  }\n\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%);\n  box-shadow: inset 0 0 8px -1px #000000, inset 0 0 8px 0 rgba(0, 0, 0, 0.8),\n    -1px -1px 0px 0px rgba(0, 0, 0, 0.9), 1px 1px 0px 0px rgba(255, 255, 255, 0.1);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: ", "px;\n    cursor: pointer;\n    padding: ", "px;\n    border-radius: ", "px;\n    margin-left: ", "px;\n    margin-right: ", "px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  display: flex;\n  transition: all 0.1s ease-in;\n\n  ", " ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    transform: rotate(", "deg);\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject(), function (_ref) {
  var rotate = _ref.rotate;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), parseInt(rotate, 10));
});
var ButtonContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])('div')(_templateObject3(), function (_ref2) {
  var size = _ref2.size;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), size, 0.05 * size, size, 0.05 * size, 0.05 * size);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.dark ? darkContainer : lightContainer;
});
ButtonContainer.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
var lightContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), function (_ref4) {
  var on = _ref4.on,
      theme = _ref4.theme,
      color = _ref4.color;
  return on ? color || theme.secondary : theme.secondary;
});
var darkContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6(), function (_ref5) {
  var on = _ref5.on,
      theme = _ref5.theme,
      color = _ref5.color;
  return on ? color || theme.secondary : '#22272a';
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject7(), function (_ref6) {
  var size = _ref6.size,
      on = _ref6.on,
      theme = _ref6.theme;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8(), theme.dark ? 'none' : theme.detail, size / 2, size / 2, on ? size - size / 2 : 0);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.dark ? 'none' : "1px solid ".concat(theme.detail);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.dark ? 1 : 0.65;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.dark ? darkButton : null;
});
Button.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};
var darkButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9());
var DarkSwitchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject10());
var DarkSwitch = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject11(), function (_ref10) {
  var size = _ref10.size;
  return "".concat(size * 0.72, "px");
}, function (_ref11) {
  var size = _ref11.size;
  return "".concat(size * 1.44, "px");
}, function (_ref12) {
  var on = _ref12.on;
  return on ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject12()) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject13());
}, function (_ref13) {
  var size = _ref13.size,
      on = _ref13.on;
  var margin = size * 0.08;
  return on ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject14(), margin) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject15(), margin);
}, function (_ref14) {
  var on = _ref14.on;
  return on ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject16()) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject17());
});
var RowContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject18(), function (props) {
  return props.vertical ? 'column-reverse' : 'row';
});
var RowLabel = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_shared_Label_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject19(), function (_ref15) {
  var position = _ref15.position,
      theme = _ref15.theme;
  return position === 'right' ? "margin-left: ".concat(theme.dark ? 12 : 8, "px;") : '';
}, function (_ref16) {
  var position = _ref16.position,
      theme = _ref16.theme;
  return position === 'left' ? "margin-right: ".concat(theme.dark ? 12 : 8, "px;") : '';
}, function (_ref17) {
  var position = _ref17.position,
      theme = _ref17.theme;
  return position === 'top' ? "margin-bottom: ".concat(theme.dark ? 34 : 20, "px;") : '';
}, function (_ref18) {
  var position = _ref18.position,
      theme = _ref18.theme;
  return position === 'bottom' ? "margin-top: ".concat(theme.dark ? 34 : 20, "px;") : '';
});
RowLabel.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_1__["light"]
};

/***/ }),

/***/ "./src/styled/constants.js":
/*!*********************************!*\
  !*** ./src/styled/constants.js ***!
  \*********************************/
/*! exports provided: colors, TRACK_TOTAL_DEG, RADIAN, light, dark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACK_TOTAL_DEG", function() { return TRACK_TOTAL_DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAN", function() { return RADIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
var colors = {
  PRIMARY: '#ABE2FB',
  SECONDARY: '#E6E6E6',
  DARKER_PRIMARY: '#87ceeb',
  OFF_WHITE: '#15181A',
  GREY: '#D3D3D3',
  RED: '#FF5E5E',
  DARK_GREY: '#535D63'
};
var TRACK_TOTAL_DEG = 270.0;
var RADIAN = Math.PI / 180.0;
var light = {
  primary: colors.PRIMARY,
  secondary: colors.SECONDARY,
  detail: colors.GREY,
  dark: false
};
var dark = {
  primary: colors.PRIMARY,
  secondary: colors.DARK_GREY,
  detail: colors.DARK_GREY,
  dark: true
};
/* harmony default export */ __webpack_exports__["default"] = ({
  dark: dark,
  light: light,
  colors: colors
});

/***/ }),

/***/ "./src/styled/shared/DarkGradient.js":
/*!*******************************************!*\
  !*** ./src/styled/shared/DarkGradient.js ***!
  \*******************************************/
/*! exports provided: UnstyledDarkHandle, darkLEDDefs, DARK_SEGMENTS, darkDecimal, darkColon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnstyledDarkHandle", function() { return UnstyledDarkHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkLEDDefs", function() { return darkLEDDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_SEGMENTS", function() { return DARK_SEGMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkDecimal", function() { return darkDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkColon", function() { return darkColon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UnstyledDarkHandle = function UnstyledDarkHandle(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "22"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    filter: "url(#filter0_di)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dark-handle-custom-fill",
    fill: "#101010",
    d: "M4.886 1H3.114a2 2 0 0 0-1.997 2.11l.778 14A2 2 0 0 0 3.892 19h.216a2 2 0 0 0 1.997-1.89l.778-14A2 2 0 0 0 4.886 1z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    style: {
      mixBlendMode: 'overlay'
    },
    fill: "url(#paint0_linear)",
    d: "M3.886 0H2.114A2 2 0 0 0 .117 2.11l.778 14A2 2 0 0 0 2.892 18h.216a2 2 0 0 0 1.997-1.89l.778-14A2 2 0 0 0 3.886 0z",
    transform: "translate(1 1)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    style: {
      mixBlendMode: 'overlay'
    },
    fill: "url(#paint1_radial)",
    d: "M3.886 0H2.114A2 2 0 0 0 .117 2.11l.778 14A2 2 0 0 0 2.892 18h.216a2 2 0 0 0 1.997-1.89l.778-14A2 2 0 0 0 3.886 0z",
    transform: "translate(1 1)"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "dark-handle-custom-fill",
    fill: "#101010",
    d: "M3.114 1h1.772a2 2 0 0 1 1.997 2.11l-.778 14A2 2 0 0 1 4.108 19h-.216a2 2 0 0 1-1.997-1.89l-.778-14A2 2 0 0 1 3.114 1zm.333 1h1.105A2 2 0 0 1 6.55 4.11l-.673 12.115a1.88 1.88 0 0 1-3.752 0L1.45 4.11A2 2 0 0 1 3.447 2z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    style: {
      mixBlendMode: 'overlay'
    },
    fill: "url(#paint2_linear)",
    d: "M2 0h1.772a2 2 0 0 1 1.997 2.11l-.778 14A2 2 0 0 1 2.994 18h-.216A2 2 0 0 1 .78 16.11l-.778-14A2 2 0 0 1 2 0zm.333 1h1.105a2 2 0 0 1 1.997 2.11l-.673 12.115a1.88 1.88 0 0 1-3.753 0L.337 3.11A2 2 0 0 1 2.333 1z",
    transform: "translate(1.114 1)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#paint3_radial)",
    fillOpacity: ".4",
    d: "M2 0h1.772a2 2 0 0 1 1.997 2.11l-.778 14A2 2 0 0 1 2.994 18h-.216A2 2 0 0 1 .78 16.11l-.778-14A2 2 0 0 1 2 0zm.333 1h1.105a2 2 0 0 1 1.997 2.11l-.673 12.115a1.88 1.88 0 0 1-3.753 0L.337 3.11A2 2 0 0 1 2.333 1z",
    transform: "translate(1.114 1)"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
    id: "filter0_di",
    width: "9.772",
    height: "22",
    x: ".114",
    y: "0",
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
    dx: "1",
    dy: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
    stdDeviation: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
    dx: ".25",
    dy: ".25"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
    stdDeviation: ".5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
    in2: "hardAlpha",
    k2: "-1",
    k3: "1",
    operator: "arithmetic"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0.204294 0 0 0 0 0.204294 0 0 0 0 0.204294 0 0 0 0.395267 0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feBlend", {
    in2: "shape",
    result: "effect2_innerShadow"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "paint0_linear",
    x2: "1",
    gradientTransform: "matrix(4.19709 12.8041 -4.26804 12.5913 .947 2.739)",
    gradientUnits: "userSpaceOnUse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: ".55"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopOpacity: ".01"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
    id: "paint1_radial",
    cx: ".5",
    cy: ".5",
    r: ".5",
    gradientTransform: "matrix(8.55956 25.5096 -8.50319 25.6787 .868 -23.103)",
    gradientUnits: "userSpaceOnUse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: ".5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopOpacity: ".5"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "paint2_linear",
    x2: "1",
    gradientTransform: "matrix(0 18 -5.77167 0 2.886 0)",
    gradientUnits: "userSpaceOnUse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: ".5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopOpacity: ".01"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
    id: "paint3_radial",
    cx: ".5",
    cy: ".5",
    r: ".5",
    gradientTransform: "matrix(0 36 -11.5433 0 8.658 -18)",
    gradientUnits: "userSpaceOnUse"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: ".5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    stopOpacity: ".5"
  }))));
};
var darkGradientDefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
  id: "l",
  x1: "15.78%",
  x2: "85.732%",
  y1: "15.214%",
  y2: "86.348%"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFFFFF",
  stopOpacity: ".55"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopColor: "#000000",
  stopOpacity: "0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
  id: "m",
  cx: "14.944%",
  cy: "13.839%",
  r: "100.544%",
  fx: "14.944%",
  fy: "13.839%"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFFFFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopColor: "#000000",
  stopOpacity: ".5"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "n",
  width: "101.7%",
  height: "101.7%",
  x: "-.8%",
  y: "-.8%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  "in": "SourceAlpha",
  result: "shadowBlurInner1",
  stdDeviation: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "shadowBlurInner1",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 0.204294218 0 0 0 0 0.204294218 0 0 0 0 0.204294218 0 0 0 0.39526721 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "r",
  width: "550%",
  height: "218.8%",
  x: "-225%",
  y: "-56.2%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: ".5",
  "in": "SourceAlpha",
  result: "shadowOffsetOuter1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowOffsetOuter1",
  result: "shadowMatrixOuter1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  "in": "SourceAlpha",
  result: "shadowOffsetOuter2"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  "in": "shadowOffsetOuter2",
  result: "shadowBlurOuter2",
  stdDeviation: "1.5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowBlurOuter2",
  result: "shadowMatrixOuter2",
  values: "0 0 0 0 0.529411765 0 0 0 0 0.807843137 0 0 0 0 0.921568627 0 0 0 0.4512851 0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMerge", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", {
  "in": "shadowMatrixOuter1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", {
  "in": "shadowMatrixOuter2"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "t",
  width: "425%",
  height: "187.5%",
  x: "-162.5%",
  y: "-40.6%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: ".5",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
  id: "p",
  x1: "0%",
  x2: "0%",
  y1: "100%",
  y2: "100%"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFFFFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopColor: "#000000",
  stopOpacity: "0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
  id: "q",
  cy: "0%",
  r: "100%",
  fx: "0%",
  fy: "0%"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFFFFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopColor: "#000000",
  stopOpacity: ".5"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "a",
  width: "100.4%",
  height: "100.5%",
  x: "-.1%",
  y: "-.1%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMorphology", {
  "in": "SourceAlpha",
  operator: "dilate",
  radius: ".05",
  result: "shadowSpreadOuter1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".1",
  dy: ".1",
  "in": "shadowSpreadOuter1",
  result: "shadowOffsetOuter1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowOffsetOuter1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.11291327 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "d",
  width: "102.5%",
  height: "102.8%",
  x: "-1.1%",
  y: "-1.3%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  "in": "SourceAlpha",
  result: "shadowBlurInner1",
  stdDeviation: ".25"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  "in": "shadowBlurInner1",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  result: "shadowMatrixInner1",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  "in": "SourceAlpha",
  result: "shadowBlurInner2",
  stdDeviation: "1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  "in": "shadowBlurInner2",
  result: "shadowOffsetInner2"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner2",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner2"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner2",
  result: "shadowMatrixInner2",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMerge", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", {
  "in": "shadowMatrixInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", {
  "in": "shadowMatrixInner2"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
  id: "c",
  x1: "50%",
  x2: "50%",
  y1: "0%",
  y2: "100%"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFFFFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopColor: "#323a3e",
  stopOpacity: ".2"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "e",
  width: "171%",
  height: "117.7%",
  x: "-35.5%",
  y: "-8.8%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  "in": "SourceAlpha",
  result: "shadowOffsetOuter1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  "in": "shadowOffsetOuter1",
  result: "shadowBlurOuter1",
  stdDeviation: "2"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowBlurOuter1",
  values: "0 0 0 0 0.529411765 0 0 0 0 0.807843137 0 0 0 0 0.921568627 0 0 0 0.5 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
  id: "g",
  cx: "90.826%",
  cy: "1.233%",
  r: "154.848%",
  fx: "90.826%",
  fy: "1.233%",
  gradientTransform: "scale(1 .24903) rotate(72.947 .883 .03)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFFFFF",
  stopOpacity: ".7"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopColor: "#000000"
})));
var darkLEDDefs = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-a",
  width: "111.8%",
  height: "107.8%",
  x: "-2.9%",
  y: "-2%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: "1",
  dy: "1",
  "in": "SourceAlpha",
  result: "shadowOffsetOuter1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
  "in": "shadowOffsetOuter1",
  result: "shadowBlurOuter1",
  stdDeviation: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowBlurOuter1",
  result: "shadowMatrixOuter1",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMerge", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", {
  "in": "shadowMatrixOuter1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feMergeNode", {
  "in": "SourceGraphic"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
  id: "darkLED-c",
  cx: "0%",
  cy: "0%",
  r: "141.421%",
  fx: "0%",
  fy: "0%",
  gradientTransform: "matrix(.22147 .22147 -.0503 .97517 0 0)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopOpacity: ".6"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
  id: "darkLED-d",
  x1: "0%",
  y1: "0%",
  y2: "100%"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopOpacity: "0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-b",
  d: "M5.71 5.181L3.308 2.778 5.71.375h16.357l2.403 2.403-2.403 2.403z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-e",
  width: "101.2%",
  height: "105.2%",
  x: "-.6%",
  y: "-2.6%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
  id: "darkLED-g",
  cx: "0%",
  cy: "0%",
  r: "141.421%",
  fx: "0%",
  fy: "0%",
  gradientTransform: "matrix(.22147 .22147 -.97517 .0503 0 0)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopOpacity: ".6"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-f",
  d: "M22.597 5.71L25 3.308l2.403 2.402v16.357L25 24.47l-2.403-2.403z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-h",
  width: "105.2%",
  height: "101.2%",
  x: "-2.6%",
  y: "-.6%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
  id: "darkLED-j",
  cx: "0%",
  cy: "0%",
  r: "141.421%",
  fx: "0%",
  fy: "0%",
  gradientTransform: "scale(1 .22711) rotate(77.204)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopOpacity: ".6"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-i",
  d: "M22.597 27.933L25 25.53l2.403 2.403v16.356L25 46.692l-2.403-2.403z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-k",
  width: "105.2%",
  height: "101.2%",
  x: "-2.6%",
  y: "-.6%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-l",
  d: "M22.067 44.819l2.403 2.403-2.403 2.403H5.71l-2.402-2.403 2.402-2.403z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-m",
  width: "101.2%",
  height: "105.2%",
  x: "-.6%",
  y: "-2.6%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-n",
  d: "M5.181 44.289l-2.403 2.403-2.403-2.403V27.933l2.403-2.403 2.403 2.403z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-o",
  width: "105.2%",
  height: "101.2%",
  x: "-2.6%",
  y: "-.6%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-p",
  d: "M5.181 22.067L2.778 24.47.375 22.067V5.71l2.403-2.402L5.181 5.71z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-q",
  width: "105.2%",
  height: "101.2%",
  x: "-2.6%",
  y: "-.6%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-r",
  d: "M5.71 27.403L3.308 25l2.402-2.403h16.357L24.47 25l-2.403 2.403z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-s",
  width: "101.2%",
  height: "105.2%",
  x: "-.6%",
  y: "-2.6%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("radialGradient", {
  id: "darkLED-u",
  cx: "0%",
  cy: "0%",
  r: "141.421%",
  fx: "0%",
  fy: "0%"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "0%",
  stopColor: "#FFF",
  stopOpacity: ".5"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  offset: "100%",
  stopOpacity: ".6"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-t",
  d: "M31 50.625a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-y",
  d: "M35,40.625 C33.5502525,40.625 32.375,39.4497475 32.375,38 C32.375,36.5502525 33.5502525,35.375 35,35.375 C36.4497475,35.375 37.625,36.5502525 37.625,38 C37.625,39.4497475 36.4497475,40.625 35,40.625 Z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-v",
  width: "104.8%",
  height: "104.8%",
  x: "-2.4%",
  y: "-2.4%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "darkLED-w",
  d: "M35,13.625 C33.5502525,13.625 32.375,12.4497475 32.375,11 C32.375,9.55025253 33.5502525,8.375 35,8.375 C36.4497475,8.375 37.625,9.55025253 37.625,11 C37.625,12.4497475 36.4497475,13.625 35,13.625 Z"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "darkLED-x",
  width: "104.8%",
  height: "104.8%",
  x: "-2.4%",
  y: "-2.4%",
  filterUnits: "objectBoundingBox"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dx: ".25",
  dy: ".25",
  "in": "SourceAlpha",
  result: "shadowOffsetInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feComposite", {
  "in": "shadowOffsetInner1",
  in2: "SourceAlpha",
  k2: "-1",
  k3: "1",
  operator: "arithmetic",
  result: "shadowInnerInner1"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  "in": "shadowInnerInner1",
  values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.502604167 0"
})));
var A = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  xlinkHref: "#darkLED-b"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-c)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-b"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-b"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#darkLED-e)",
  xlinkHref: "#darkLED-b"
}));
var B = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  xlinkHref: "#darkLED-f"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-g)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-f"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-f"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#darkLED-h)",
  xlinkHref: "#darkLED-f"
}));
var C = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  xlinkHref: "#darkLED-i"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-j)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-i"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-i"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#darkLED-k)",
  xlinkHref: "#darkLED-i"
}));
var D = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  xlinkHref: "#darkLED-l"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-c)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-l"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-l"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#darkLED-m)",
  xlinkHref: "#darkLED-l"
}));
var E = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  xlinkHref: "#darkLED-n"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-j)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-n"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-n"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#darkLED-o)",
  xlinkHref: "#darkLED-n"
}));
var F = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  xlinkHref: "#darkLED-p"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-g)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-p"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-p"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#darkLED-q)",
  xlinkHref: "#darkLED-p"
}));
var G = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  xlinkHref: "#darkLED-r"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-c)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-r"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-r"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#darkLED-s)",
  xlinkHref: "#darkLED-r"
})); // See the following link for segment mappings:
// https://en.wikipedia.org/wiki/Seven-segment_display#/media/File:7_segment_display_labeled.svg

var DARK_SEGMENTS = {
  A: A,
  B: B,
  C: C,
  D: D,
  E: E,
  F: F,
  G: G
};
var darkDecimal = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "none",
  fillRule: "evenodd",
  filter: "url(#darkLED-a)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fillRule: "nonzero"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  fillRule: "evenodd",
  xlinkHref: "#darkLED-t"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-u)",
  fillRule: "evenodd",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-t"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  fillRule: "evenodd",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-t"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#darkLED-v)",
  xlinkHref: "#darkLED-t"
})));
var darkColon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fillRule: "nonzero"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  fillRule: "evenodd",
  xlinkHref: "#darkLED-y"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-u)",
  fillRule: "evenodd",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-y"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  fillRule: "evenodd",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-y"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "black",
  filter: "url(#darkLED-v)",
  xlinkHref: "#darkLED-y"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fillRule: "nonzero"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  className: "darkLED-fill",
  fillRule: "evenodd",
  xlinkHref: "#darkLED-w"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-u)",
  fillRule: "evenodd",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-w"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "url(#darkLED-d)",
  fillRule: "evenodd",
  style: {
    mixBlendMode: 'overlay'
  },
  xlinkHref: "#darkLED-w"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "black",
  filter: "url(#darkLED-x)",
  xlinkHref: "#darkLED-w"
})));
/* harmony default export */ __webpack_exports__["default"] = (darkGradientDefs);

/***/ }),

/***/ "./src/styled/shared/Indicator.styled.js":
/*!***********************************************!*\
  !*** ./src/styled/shared/Indicator.styled.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/styled/constants.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        background-image: linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 100%);\n        background-blend-mode: overlay;\n        box-shadow: inset 0 0 8px -1px rgba(0,0,0,0.5),\n                    inset 0 0 4px 0 rgba(0,0,0,0.6),\n                    -1px -1px 0px 0px rgba(0,0,0,0.9),\n                    1px 1px 0px 0px rgba(255,255,255,0.1);\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          box-shadow: 0 0 8px 2px ", ", 1px 1px 0px 0px rgba(0,0,0,0.9), -1px -1px 0px 0px rgba(255,255,255,0.1);\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      width: ", "px;\n      height: ", "px;\n      background-color: ", ";\n      ", "\n      ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  transition: all 100ms ease-in-out;\n  ", "\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Indicator = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject(), function (_ref) {
  var rectangular = _ref.rectangular;
  return rectangular ? '0' : '50%';
}, function (props) {
  var color = props.main ? props.on ? props.primary || props.theme.primary : props.secondary || props.theme.secondary : props.on ? props.theme.secondary : props.primary || props.theme.primary;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), props.width || props.height || props.size, props.height || props.width || props.size, color, props.border ? "border: 1px solid ".concat(props.on ? color : '#F8F4F4', ";") : '', props.theme.dark ? props.on && props.main || !props.on && !props.main ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3(), color) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4()) : '');
});
Indicator.defaultProps = {
  theme: _constants__WEBPACK_IMPORTED_MODULE_2__["light"]
};
Indicator.propTypes = {
  /**
   * Size of the indicator
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Theme for styling the component
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Add border for off
   */
  border: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Color to display when on
   */
  primary: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Color to display when off
   */
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Indicator);

/***/ }),

/***/ "./src/styled/shared/Label.styled.js":
/*!*******************************************!*\
  !*** ./src/styled/shared/Label.styled.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["margin-top: 8px;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["margin-bottom: 8px;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 14px;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(_templateObject(), function (_ref) {
  var position = _ref.position;
  return position === 'top' ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2()) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
}, function (props) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), props.css);
}));

/***/ }),

/***/ "./src/styled/shared/LabelContainer.styled.js":
/*!****************************************************!*\
  !*** ./src/styled/shared/LabelContainer.styled.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Label_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Label.styled */ "./src/styled/shared/Label.styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  switch (props.labelPosition) {
    case 'top':
      return 'column-reverse';

    case 'bottom':
      return 'column';
  }
});

function LabelContainer(props) {
  var labelText = props.label;
  var customLabelStyle = {};

  if (_typeof(props.label) === 'object') {
    labelText = props.label.label;
    customLabelStyle = props.label.style;
  }

  if (labelText && labelText.length) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      className: props.className,
      id: props.id,
      labelPosition: props.labelPosition
    }, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: customLabelStyle,
      css: props.labelCSS,
      position: props.labelPosition
    }, labelText));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.children);
}

LabelContainer.defaultProps = {
  labelPosition: 'bottom'
};
/* harmony default export */ __webpack_exports__["default"] = (LabelContainer);

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["PropTypes"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=dash_daq.dev.js.map