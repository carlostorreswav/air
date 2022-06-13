"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children"];

var _templateObject, _MainDic, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MarginDim = {
  xxs: "2px",
  xs: "4px",
  s: "8px",
  m: "16px",
  l: "32px",
  xl: "64px",
  xxl: "128px"
};

var MarginPadding = function MarginPadding(array, rValue) {
  var isNumber = typeof rValue === "number";
  var value = isNumber ? "".concat(rValue, "px") : MarginDim[rValue] || "".concat(rValue);
  return array === null || array === void 0 ? void 0 : array.map(function (k) {
    return "".concat(k, ": ").concat(value);
  }).join("; ");
};

var getFlex = function getFlex() {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"])));
};

var getStyles = function getStyles(p) {
  console.log("getStyles", p);
  var Styles = [];
  Object.entries(p).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        rKey = _ref2[0],
        rValue = _ref2[1];

    if (MainDic[rKey]) {
      Styles.push(MainDic[rKey](rValue));
    }
  });
  var result = Styles.join("; ");
  console.log("result", result);
  return result;
};

var getHover = function getHover(e) {
  var result = Object.entries(e).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        rKey = _ref4[0],
        rValue = _ref4[1];

    if (MainDic[rKey]) {
      return MainDic[rKey](rValue);
    }
  }).join("; ");

  var _final = "\n    &:hover {\n      ".concat(result, "\n    }\n  ");

  return _final;
};

var MediaDic = {
  xxs: "@media (min-width: 200px)",
  xs: "@media (min-width: 400px)",
  s: "@media (min-width: 600px)",
  m: "@media (min-width: 800px)",
  l: "@media (min-width: 1000px)",
  xl: "@media (min-width: 1200px)",
  xxl: "@media (min-width: 1400px)"
};

var getMediaQuery = function getMediaQuery(e, type) {
  var result = Object.entries(e).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        rKey = _ref6[0],
        rValue = _ref6[1];

    if (MainDic[rKey]) {
      return MainDic[rKey](rValue);
    }
  }).join("; ");

  var _final2 = "\n    ".concat(MediaDic[type], " {\n      ").concat(result, "\n    }\n  ");

  return _final2;
};

var MainDic = (_MainDic = {
  ml: function ml(e) {
    return MarginPadding(["margin-left"], e);
  },
  mr: function mr(e) {
    return MarginPadding(["margin-right"], e);
  },
  mt: function mt(e) {
    return MarginPadding(["margin-top"], e);
  },
  mb: function mb(e) {
    return MarginPadding(["margin-bottom"], e);
  },
  mx: function mx(e) {
    return MarginPadding(["margin-left", "margin-right"], e);
  },
  my: function my(e) {
    return MarginPadding(["margin-top", "margin-bottom"], e);
  },
  m: function m(e) {
    return MarginPadding(["margin"], e);
  },
  pl: function pl(e) {
    return MarginPadding(["padding-left"], e);
  },
  pr: function pr(e) {
    return MarginPadding(["padding-right", e]);
  },
  pt: function pt(e) {
    return MarginPadding(["padding-top"], e);
  },
  pb: function pb(e) {
    return MarginPadding(["padding-bottom"], e);
  },
  px: function px(e) {
    return MarginPadding(["padding-left", "padding-right"], e);
  },
  py: function py(e) {
    return MarginPadding(["padding-top", "padding-bottom"], e);
  },
  p: function p(e) {
    return MarginPadding(["padding"], e);
  },
  flex: function flex() {
    return getFlex();
  },
  bg: function bg(e) {
    return "background-color: ".concat(e);
  },
  border: function border(e) {
    return "border: ".concat(e);
  },
  borderRadius: function borderRadius(e) {
    return "border-radius: ".concat(e);
  },
  boxShadow: function boxShadow(e) {
    return "box-shadow: ".concat(e);
  },
  color: function color(e) {
    return "color: ".concat(e);
  },
  fitContent: function fitContent() {
    return "width: fit-content";
  },
  mw: function mw(e) {
    return MarginPadding(["max-width"], e);
  },
  hover: function hover(e) {
    return getHover(e);
  },
  transition: function transition(e) {
    return "transition: ".concat(e);
  },
  xxs: function xxs(e) {
    return getMediaQuery(e, "xxs");
  },
  xs: function xs(e) {
    return getMediaQuery(e, "xs");
  },
  s: function s(e) {
    return getMediaQuery(e, "s");
  }
}, _defineProperty(_MainDic, "m", function m(e) {
  return getMediaQuery(e, "m");
}), _defineProperty(_MainDic, "l", function l(e) {
  return getMediaQuery(e, "l");
}), _defineProperty(_MainDic, "xl", function xl(e) {
  return getMediaQuery(e, "xl");
}), _defineProperty(_MainDic, "xxl", function xxl(e) {
  return getMediaQuery(e, "xxl");
}), _defineProperty(_MainDic, "cursor", function cursor(e) {
  return "cursor: ".concat(e);
}), _MainDic);

var StyledDiv = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (p) {
  return getStyles(p);
});

var Div = function Div(_ref7) {
  var children = _ref7.children,
      props = _objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledDiv, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

Div.propTypes = {
  /**
   * Basic Div
   */
  props: _propTypes["default"].string.isOptional
};
var _default = Div;
exports["default"] = _default;

//# sourceMappingURL=Div.js.map