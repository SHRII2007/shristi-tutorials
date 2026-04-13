import { c as createLucideIcon, R as React, d as clsx, a as reactExports, u as useActor, e as useAuth, j as jsxRuntimeExports, S as Skeleton, m as motion, T as TrendingUp, L as Link, f as useNavigate, Q as QrCode, X, A as AnimatePresence, B as Bell, g as ue, h as createActor } from "./index-Ct0isu-0.js";
import { B as Badge } from "./badge-CL8x17UH.js";
import { B as Button } from "./button-IB6w4Ivl.js";
import { T as Textarea } from "./textarea-LKy1wIHY.js";
import { u as useStudentData } from "./useStudentData-r1rfZghm.js";
import { u as useMotionValue, a as animate, b as useTransform } from "./index-BRbfybbd.js";
import { C as CalendarDays } from "./calendar-days-PfBhaJOz.js";
import { f as filterProps, L as Layer, m as max, i as isNumber, C as Curve, A as Animate, a as interpolateNumber, b as isNil, c as isNan, d as isEqual, h as hasClipDot, e as LabelList, u as uniqueId, g as isFunction, G as Global, j as getValueByDataKey, k as getCateCoordinateOfLine, D as Dot, l as generateCategoricalChart, X as XAxis, Y as YAxis, n as formatAxisMap, R as ResponsiveContainer, T as Tooltip } from "./generateCategoricalChart-KoTxNziO.js";
import { C as ChartColumn, u as useSpring } from "./chart-column-CPcA7MLv.js";
import { S as Send } from "./send-_MEJcMvC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "M12 6V2H8", key: "1155em" }],
  ["path", { d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z", key: "w2lp3e" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M9 11v2", key: "1ueba0" }],
  ["path", { d: "M15 11v2", key: "i11awn" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }]
];
const BotMessageSquare = createLucideIcon("bot-message-square", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
];
const CalendarCheck = createLucideIcon("calendar-check", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
const LayoutGrid = createLucideIcon("layout-grid", __iconNode);
var _excluded = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], _excluded2 = ["key"];
var _Area;
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Area = /* @__PURE__ */ function(_PureComponent) {
  function Area2() {
    var _this;
    _classCallCheck(this, Area2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Area2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: true
    });
    _defineProperty(_this, "id", uniqueId("recharts-area-"));
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    return _this;
  }
  _inherits(Area2, _PureComponent);
  return _createClass(Area2, [{
    key: "renderDots",
    value: function renderDots(needClip, clipDot, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (isAnimationActive && !isAnimationFinished) {
        return null;
      }
      var _this$props = this.props, dot = _this$props.dot, points = _this$props.points, dataKey = _this$props.dataKey;
      var areaProps = filterProps(this.props, false);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function(entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, areaProps), customDotProps), {}, {
          index: i,
          cx: entry.x,
          cy: entry.y,
          dataKey,
          value: entry.value,
          payload: entry.payload,
          points
        });
        return Area2.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ React.createElement(Layer, _extends({
        className: "recharts-area-dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderHorizontalRect",
    value: function renderHorizontalRect(alpha) {
      var _this$props2 = this.props, baseLine = _this$props2.baseLine, points = _this$props2.points, strokeWidth = _this$props2.strokeWidth;
      var startX = points[0].x;
      var endX = points[points.length - 1].x;
      var width = alpha * Math.abs(startX - endX);
      var maxY = max(points.map(function(entry) {
        return entry.y || 0;
      }));
      if (isNumber(baseLine) && typeof baseLine === "number") {
        maxY = Math.max(baseLine, maxY);
      } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
        maxY = Math.max(max(baseLine.map(function(entry) {
          return entry.y || 0;
        })), maxY);
      }
      if (isNumber(maxY)) {
        return /* @__PURE__ */ React.createElement("rect", {
          x: startX < endX ? startX : startX - width,
          y: 0,
          width,
          height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
        });
      }
      return null;
    }
  }, {
    key: "renderVerticalRect",
    value: function renderVerticalRect(alpha) {
      var _this$props3 = this.props, baseLine = _this$props3.baseLine, points = _this$props3.points, strokeWidth = _this$props3.strokeWidth;
      var startY = points[0].y;
      var endY = points[points.length - 1].y;
      var height = alpha * Math.abs(startY - endY);
      var maxX = max(points.map(function(entry) {
        return entry.x || 0;
      }));
      if (isNumber(baseLine) && typeof baseLine === "number") {
        maxX = Math.max(baseLine, maxX);
      } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
        maxX = Math.max(max(baseLine.map(function(entry) {
          return entry.x || 0;
        })), maxX);
      }
      if (isNumber(maxX)) {
        return /* @__PURE__ */ React.createElement("rect", {
          x: 0,
          y: startY < endY ? startY : startY - height,
          width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
          height: Math.floor(height)
        });
      }
      return null;
    }
  }, {
    key: "renderClipRect",
    value: function renderClipRect(alpha) {
      var layout = this.props.layout;
      if (layout === "vertical") {
        return this.renderVerticalRect(alpha);
      }
      return this.renderHorizontalRect(alpha);
    }
  }, {
    key: "renderAreaStatically",
    value: function renderAreaStatically(points, baseLine, needClip, clipPathId) {
      var _this$props4 = this.props, layout = _this$props4.layout, type = _this$props4.type, stroke = _this$props4.stroke, connectNulls = _this$props4.connectNulls, isRange = _this$props4.isRange;
      _this$props4.ref;
      var others = _objectWithoutProperties(_this$props4, _excluded);
      return /* @__PURE__ */ React.createElement(Layer, {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, /* @__PURE__ */ React.createElement(Curve, _extends({}, filterProps(others, true), {
        points,
        connectNulls,
        type,
        baseLine,
        layout,
        stroke: "none",
        className: "recharts-area-area"
      })), stroke !== "none" && /* @__PURE__ */ React.createElement(Curve, _extends({}, filterProps(this.props, false), {
        className: "recharts-area-curve",
        layout,
        type,
        connectNulls,
        fill: "none",
        points
      })), stroke !== "none" && isRange && /* @__PURE__ */ React.createElement(Curve, _extends({}, filterProps(this.props, false), {
        className: "recharts-area-curve",
        layout,
        type,
        connectNulls,
        fill: "none",
        points: baseLine
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function renderAreaWithAnimation(needClip, clipPathId) {
      var _this2 = this;
      var _this$props5 = this.props, points = _this$props5.points, baseLine = _this$props5.baseLine, isAnimationActive = _this$props5.isAnimationActive, animationBegin = _this$props5.animationBegin, animationDuration = _this$props5.animationDuration, animationEasing = _this$props5.animationEasing, animationId = _this$props5.animationId;
      var _this$state = this.state, prevPoints = _this$state.prevPoints, prevBaseLine = _this$state.prevBaseLine;
      return /* @__PURE__ */ React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          var stepPoints = points.map(function(entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = interpolateNumber(prev.x, entry.x);
              var interpolatorY = interpolateNumber(prev.y, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            }
            return entry;
          });
          var stepBaseLine;
          if (isNumber(baseLine) && typeof baseLine === "number") {
            var interpolator = interpolateNumber(prevBaseLine, baseLine);
            stepBaseLine = interpolator(t);
          } else if (isNil(baseLine) || isNan(baseLine)) {
            var _interpolator = interpolateNumber(prevBaseLine, 0);
            stepBaseLine = _interpolator(t);
          } else {
            stepBaseLine = baseLine.map(function(entry, index) {
              var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
              if (prevBaseLine[prevPointIndex]) {
                var prev = prevBaseLine[prevPointIndex];
                var interpolatorX = interpolateNumber(prev.x, entry.x);
                var interpolatorY = interpolateNumber(prev.y, entry.y);
                return _objectSpread(_objectSpread({}, entry), {}, {
                  x: interpolatorX(t),
                  y: interpolatorY(t)
                });
              }
              return entry;
            });
          }
          return _this2.renderAreaStatically(stepPoints, stepBaseLine, needClip, clipPathId);
        }
        return /* @__PURE__ */ React.createElement(Layer, null, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
          id: "animationClipPath-".concat(clipPathId)
        }, _this2.renderClipRect(t))), /* @__PURE__ */ React.createElement(Layer, {
          clipPath: "url(#animationClipPath-".concat(clipPathId, ")")
        }, _this2.renderAreaStatically(points, baseLine, needClip, clipPathId)));
      });
    }
  }, {
    key: "renderArea",
    value: function renderArea(needClip, clipPathId) {
      var _this$props6 = this.props, points = _this$props6.points, baseLine = _this$props6.baseLine, isAnimationActive = _this$props6.isAnimationActive;
      var _this$state2 = this.state, prevPoints = _this$state2.prevPoints, prevBaseLine = _this$state2.prevBaseLine, totalLength = _this$state2.totalLength;
      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !isEqual(prevPoints, points) || !isEqual(prevBaseLine, baseLine))) {
        return this.renderAreaWithAnimation(needClip, clipPathId);
      }
      return this.renderAreaStatically(points, baseLine, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _filterProps;
      var _this$props7 = this.props, hide = _this$props7.hide, dot = _this$props7.dot, points = _this$props7.points, className = _this$props7.className, top = _this$props7.top, left = _this$props7.left, xAxis = _this$props7.xAxis, yAxis = _this$props7.yAxis, width = _this$props7.width, height = _this$props7.height, isAnimationActive = _this$props7.isAnimationActive, id = _this$props7.id;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = clsx("recharts-area", className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = isNil(id) ? this.id : id;
      var _ref2 = (_filterProps = filterProps(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
        r: 3,
        strokeWidth: 2
      }, _ref2$r = _ref2.r, r = _ref2$r === void 0 ? 3 : _ref2$r, _ref2$strokeWidth = _ref2.strokeWidth, strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
      var _ref3 = hasClipDot(dot) ? dot : {}, _ref3$clipDot = _ref3.clipDot, clipDot = _ref3$clipDot === void 0 ? true : _ref3$clipDot;
      var dotSize = r * 2 + strokeWidth;
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass
      }, needClipX || needClipY ? /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /* @__PURE__ */ React.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      })), !clipDot && /* @__PURE__ */ React.createElement("clipPath", {
        id: "clipPath-dots-".concat(clipPathId)
      }, /* @__PURE__ */ React.createElement("rect", {
        x: left - dotSize / 2,
        y: top - dotSize / 2,
        width: width + dotSize,
        height: height + dotSize
      }))) : null, !hasSinglePoint ? this.renderArea(needClip, clipPathId) : null, (dot || hasSinglePoint) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine,
          prevPoints: prevState.curPoints,
          prevBaseLine: prevState.curBaseLine
        };
      }
      if (nextProps.points !== prevState.curPoints || nextProps.baseLine !== prevState.curBaseLine) {
        return {
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_Area = Area;
_defineProperty(Area, "displayName", "Area");
_defineProperty(Area, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: false,
  // points of area
  points: [],
  dot: false,
  activeDot: true,
  hide: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
_defineProperty(Area, "getBaseValue", function(props, item, xAxis, yAxis) {
  var layout = props.layout, chartBaseValue = props.baseValue;
  var itemBaseValue = item.props.baseValue;
  var baseValue = itemBaseValue !== null && itemBaseValue !== void 0 ? itemBaseValue : chartBaseValue;
  if (isNumber(baseValue) && typeof baseValue === "number") {
    return baseValue;
  }
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var domain = numericAxis.scale.domain();
  if (numericAxis.type === "number") {
    var domainMax = Math.max(domain[0], domain[1]);
    var domainMin = Math.min(domain[0], domain[1]);
    if (baseValue === "dataMin") {
      return domainMin;
    }
    if (baseValue === "dataMax") {
      return domainMax;
    }
    return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
  }
  if (baseValue === "dataMin") {
    return domain[0];
  }
  if (baseValue === "dataMax") {
    return domain[1];
  }
  return domain[0];
});
_defineProperty(Area, "getComposedData", function(_ref4) {
  var props = _ref4.props, item = _ref4.item, xAxis = _ref4.xAxis, yAxis = _ref4.yAxis, xAxisTicks = _ref4.xAxisTicks, yAxisTicks = _ref4.yAxisTicks, bandSize = _ref4.bandSize, dataKey = _ref4.dataKey, stackedData = _ref4.stackedData, dataStartIndex = _ref4.dataStartIndex, displayedData = _ref4.displayedData, offset = _ref4.offset;
  var layout = props.layout;
  var hasStack = stackedData && stackedData.length;
  var baseValue = _Area.getBaseValue(props, item, xAxis, yAxis);
  var isHorizontalLayout = layout === "horizontal";
  var isRange = false;
  var points = displayedData.map(function(entry, index) {
    var value;
    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }
    var isBreakPoint = value[1] == null || hasStack && getValueByDataKey(entry, dataKey) == null;
    if (isHorizontalLayout) {
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          entry,
          index
        }),
        y: isBreakPoint ? null : yAxis.scale(value[1]),
        value,
        payload: entry
      };
    }
    return {
      x: isBreakPoint ? null : xAxis.scale(value[1]),
      y: getCateCoordinateOfLine({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        entry,
        index
      }),
      value,
      payload: entry
    };
  });
  var baseLine;
  if (hasStack || isRange) {
    baseLine = points.map(function(entry) {
      var x = Array.isArray(entry.value) ? entry.value[0] : null;
      if (isHorizontalLayout) {
        return {
          x: entry.x,
          y: x != null && entry.y != null ? yAxis.scale(x) : null
        };
      }
      return {
        x: x != null ? xAxis.scale(x) : null,
        y: entry.y
      };
    });
  } else {
    baseLine = isHorizontalLayout ? yAxis.scale(baseValue) : xAxis.scale(baseValue);
  }
  return _objectSpread({
    points,
    baseLine,
    layout,
    isRange
  }, offset);
});
_defineProperty(Area, "renderDotItem", function(option, props) {
  var dotItem;
  if (/* @__PURE__ */ React.isValidElement(option)) {
    dotItem = /* @__PURE__ */ React.cloneElement(option, props);
  } else if (isFunction(option)) {
    dotItem = option(props);
  } else {
    var className = clsx("recharts-area-dot", typeof option !== "boolean" ? option.className : "");
    var key = props.key, rest = _objectWithoutProperties(props, _excluded2);
    dotItem = /* @__PURE__ */ React.createElement(Dot, _extends({}, rest, {
      key,
      className
    }));
  }
  return dotItem;
});
var AreaChart = generateCategoricalChart({
  chartName: "AreaChart",
  GraphicalChild: Area,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
function AnimatedCounter({ to, suffix = "" }) {
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 80, damping: 18 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const [display, setDisplay] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const controls = animate(count, to, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);
  reactExports.useEffect(() => {
    return rounded.on("change", setDisplay);
  }, [rounded]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
    display,
    suffix
  ] });
}
function CircleRing({
  value,
  color,
  size = 100,
  strokeWidth = 9
}) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const dashoffset = useMotionValue(circ);
  const targetOffset = circ - value / 100 * circ;
  reactExports.useEffect(() => {
    animate(dashoffset, targetOffset, {
      duration: 1.4,
      ease: "easeOut",
      delay: 0.3
    });
  }, [dashoffset, targetOffset]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: size,
      height: size,
      style: { transform: "rotate(-90deg)" },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: size / 2,
            cy: size / 2,
            r,
            fill: "none",
            stroke: "rgba(124,58,237,0.12)",
            strokeWidth
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.circle,
          {
            cx: size / 2,
            cy: size / 2,
            r,
            fill: "none",
            stroke: color,
            strokeWidth,
            strokeLinecap: "round",
            strokeDasharray: circ,
            style: { strokeDashoffset: dashoffset }
          }
        )
      ]
    }
  );
}
function SubjectRingCard({
  subject,
  progress,
  color,
  score,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.5 + index * 0.1, type: "spring", stiffness: 80 },
      whileHover: { scale: 1.04, rotateY: 2 },
      className: "glass rounded-2xl p-5 flex flex-col items-center gap-3 flex-1 min-w-[130px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleRing, { value: progress, color, size: 96, strokeWidth: 9 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-xl leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { to: progress, suffix: "%" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: subject }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
            "Score: ",
            score,
            "%"
          ] })
        ] })
      ]
    }
  );
}
const sparklineData = [
  { v: 68 },
  { v: 72 },
  { v: 70 },
  { v: 78 },
  { v: 75 },
  { v: 80 },
  { v: 82 }
];
function AttendanceRing({ value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-20 h-20 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleRing, { value, color: "#7c3aed", size: 80, strokeWidth: 8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-base", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { to: value, suffix: "%" }) }) })
  ] });
}
function DashCard({
  children,
  index,
  ocid,
  className = "",
  to
}) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.08, type: "spring", stiffness: 70 },
      whileHover: {
        scale: 1.025,
        rotateX: 1.5,
        rotateY: 1.5,
        boxShadow: "0 20px 60px rgba(124,58,237,0.22)"
      },
      "data-ocid": ocid,
      onClick: to ? () => navigate({ to }) : void 0,
      className: `glass rounded-2xl border border-purple-100/60 ${to ? "cursor-pointer" : "cursor-default"} select-none ${className}`,
      style: { transformStyle: "preserve-3d" },
      children
    }
  );
}
const subjectBadgeColors = {
  Maths: "bg-purple-100 text-purple-700 border-purple-200",
  Science: "bg-blue-100 text-blue-700 border-blue-200",
  English: "bg-green-100 text-green-700 border-green-200",
  "Social Studies": "bg-orange-100 text-orange-700 border-orange-200",
  Geography: "bg-teal-100 text-teal-700 border-teal-200",
  Commerce: "bg-yellow-100 text-yellow-700 border-yellow-200",
  IT: "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Computer Science": "bg-indigo-100 text-indigo-700 border-indigo-200",
  Hindi: "bg-pink-100 text-pink-700 border-pink-200"
};
const statusBadgeColors = {
  pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  submitted: "bg-blue-100 text-blue-700 border-blue-200",
  graded: "bg-green-100 text-green-700 border-green-200"
};
function HomeworkCard({
  hw,
  onSubmit
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [content, setContent] = reactExports.useState("");
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [submitStatus, setSubmitStatus] = reactExports.useState(
    null
  );
  const [error, setError] = reactExports.useState(null);
  const dueDate = hw.dueDate || "TBD";
  const isOverdue = hw.dueDate && new Date(hw.dueDate) < /* @__PURE__ */ new Date();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    setIsSubmitting(true);
    setError(null);
    try {
      await onSubmit(hw.id, content.trim());
      setSubmitStatus("submitted");
      setOpen(false);
      ue.success(`📚 "${hw.title}" submitted successfully!`, {
        duration: 4e3
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "glass border border-border/40 rounded-2xl p-4 shadow-glass transition-smooth hover:shadow-lg",
      "data-ocid": `hw-card-${hw.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-3 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs border font-body ${subjectBadgeColors[hw.subject] ?? "bg-muted text-muted-foreground border-border"}`,
                children: hw.subject
              }
            ),
            submitStatus ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs border font-body ${statusBadgeColors[submitStatus] ?? statusBadgeColors.pending}`,
                children: submitStatus === "submitted" ? "✅ Submitted" : submitStatus === "graded" ? "🏆 Graded" : "⏳ Pending"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs border font-body ${isOverdue ? "bg-red-100 text-red-700 border-red-200" : statusBadgeColors.pending}`,
                children: isOverdue ? "⚠️ Overdue" : "⏳ Pending"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-sm leading-snug truncate", children: hw.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-body mt-0.5 line-clamp-2 leading-relaxed", children: hw.description })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-body flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 11 }),
            "Due: ",
            dueDate
          ] }),
          !submitStatus && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setOpen(true),
              className: "text-xs px-3 py-1.5 h-auto rounded-xl border-primary/40 text-primary hover:bg-primary hover:text-white transition-smooth",
              "data-ocid": `hw-submit-btn-${hw.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 11, className: "mr-1" }),
                "Submit"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            onSubmit: handleSubmit,
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3 },
            className: "mt-3 pt-3 border-t border-border/40 space-y-3 overflow-hidden",
            "data-ocid": `hw-form-${hw.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-semibold text-foreground", children: "Submit your work" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpen(false),
                    className: "text-muted-foreground hover:text-foreground",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                  }
                )
              ] }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-body",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }),
                    error
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "Paste your answer or describe your submission here...",
                  value: content,
                  onChange: (e) => setContent(e.target.value),
                  className: "font-body resize-none h-24 text-sm",
                  "data-ocid": `hw-content-${hw.id}`,
                  required: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    size: "sm",
                    disabled: isSubmitting || !content.trim(),
                    className: "grad-purple text-white border-0 shadow-glow-sm flex-1",
                    "data-ocid": `hw-submit-confirm-${hw.id}`,
                    children: isSubmitting ? "Submitting..." : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 12 }),
                      "Submit Homework"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    onClick: () => setOpen(false),
                    className: "border-border/60",
                    children: "Cancel"
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
function AnnouncementCard({
  announcement,
  index
}) {
  const publishedDate = announcement.publishedAt ? new Date(Number(announcement.publishedAt) / 1e6).toLocaleDateString(
    "en-IN",
    { day: "numeric", month: "short", year: "numeric" }
  ) : "Recently";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, x: -24 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { delay: index * 0.08, type: "spring", stiffness: 80 },
      className: "glass border border-primary/20 rounded-2xl p-4 shadow-glass bg-gradient-to-br from-purple-50/60 to-violet-50/30",
      "data-ocid": `announcement-${announcement.id}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 grad-purple rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 16, className: "text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground text-sm leading-snug truncate", children: announcement.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body whitespace-nowrap flex-shrink-0", children: publishedDate })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 font-body leading-relaxed", children: announcement.body })
        ] })
      ] })
    }
  );
}
function ErrorBanner({ message }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -8 },
      animate: { opacity: 1, y: 0 },
      className: "flex items-start gap-2 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14, className: "mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm", children: message })
      ]
    }
  );
}
function QuickActions() {
  const navigate = useNavigate();
  const actions = [
    {
      icon: ChartColumn,
      label: "Progress",
      desc: "View reports",
      to: "/progress",
      color: "text-violet-600",
      bg: "bg-violet-100"
    },
    {
      icon: LayoutGrid,
      label: "Planner",
      desc: "Study tasks",
      to: "/planner",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      icon: QrCode,
      label: "Attendance",
      desc: "Mark QR scan",
      to: "/attendance",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      icon: BotMessageSquare,
      label: "Doubt Chat",
      desc: "Ask teachers",
      to: "/doubt",
      color: "text-pink-600",
      bg: "bg-pink-100"
    },
    {
      icon: CalendarCheck,
      label: "Analytics",
      desc: "Performance",
      to: "/progress",
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.3 },
      className: "glass rounded-2xl p-5 border border-border/40",
      "data-ocid": "quick-actions-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg text-foreground flex items-center gap-2 mb-4", children: "⚡ Quick Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-3", children: actions.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            whileHover: { scale: 1.06, y: -3 },
            whileTap: { scale: 0.96 },
            onClick: () => navigate({ to: a.to }),
            "data-ocid": `quick-action-${a.label.toLowerCase().replace(/ /g, "-")}`,
            className: "flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/30 hover:bg-muted/60 border border-border/30 hover:border-primary/30 transition-smooth cursor-pointer text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 ${a.bg} rounded-xl flex items-center justify-center`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { size: 20, className: a.color })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-xs", children: a.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs font-body leading-tight hidden sm:block", children: a.desc })
            ]
          },
          a.label
        )) })
      ]
    }
  );
}
function DashboardPage() {
  const {
    student,
    tasks,
    progress,
    streak,
    achievements,
    attendance,
    isLoading
  } = useStudentData();
  const { actor, isFetching } = useActor(createActor);
  const { studentProfile } = useAuth();
  const todayTasks = tasks.filter((t) => t.dueDate === "Today");
  const doneTodayCount = todayTasks.filter((t) => t.completed).length;
  const pendingHW = tasks.filter((t) => !t.completed);
  const hwSubjects = [...new Set(pendingHW.map((t) => t.subject))].slice(0, 3);
  const attendancePct = attendance.length > 0 ? Math.round(
    attendance.filter((r) => r.present).length / attendance.length * 100
  ) : 0;
  const waveRef = reactExports.useRef(null);
  const className = (studentProfile == null ? void 0 : studentProfile.className) ?? "";
  const [homework, setHomework] = reactExports.useState([]);
  const [isLoadingHW, setIsLoadingHW] = reactExports.useState(false);
  const [hwError, setHwError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!actor || isFetching || !className) return;
    setIsLoadingHW(true);
    actor.getHomeworkByClass(className).then(setHomework).catch((err) => setHwError(String(err))).finally(() => setIsLoadingHW(false));
  }, [actor, isFetching, className]);
  const [announcements, setAnnouncements] = reactExports.useState([]);
  const [isLoadingAnn, setIsLoadingAnn] = reactExports.useState(false);
  const [annError, setAnnError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!actor || isFetching || !className) return;
    setIsLoadingAnn(true);
    actor.getAnnouncements(className).then(setAnnouncements).catch((err) => setAnnError(String(err))).finally(() => setIsLoadingAnn(false));
  }, [actor, isFetching, className]);
  const handleSubmitHomework = async (homeworkId, content) => {
    if (!actor) throw new Error("Not connected to backend");
    const result = await actor.submitHomework(homeworkId, content);
    if (result.__kind__ === "err") throw new Error(result.err);
  };
  const fireScale = useMotionValue(1);
  reactExports.useEffect(() => {
    animate(fireScale, [1, 1.22, 1], {
      duration: 1.1,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 1.4
    });
  }, [fireScale]);
  reactExports.useEffect(() => {
    if (!waveRef.current) return;
    const el = waveRef.current;
    const anim = animate(
      el,
      { rotate: [0, 20, -8, 20, 0] },
      { duration: 1.2, delay: 0.6, ease: "easeInOut" }
    );
    return () => anim.stop();
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-80 rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-4", children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-2xl" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-2xl" })
      ] })
    ] });
  }
  const displayName = (studentProfile == null ? void 0 : studentProfile.name) ?? student.name ?? "Student";
  const firstName = displayName.split(" ")[0] || "Student";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -18 },
        animate: { opacity: 1, y: 0 },
        transition: { type: "spring", stiffness: 70, damping: 18 },
        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground flex items-center gap-2 flex-wrap", children: [
              "Good Morning, ",
              firstName,
              "!",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref: waveRef, className: "inline-block origin-bottom-right", children: "👋" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground font-body mt-1 text-sm", children: [
              "Keep up the great work! ✨",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "Where learning is fun" })
            ] }),
            studentProfile && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-body mt-0.5", children: [
              studentProfile.className,
              " · ",
              studentProfile.rollNumber
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "glass-purple rounded-2xl px-4 py-2.5 flex items-center gap-2",
                whileHover: { scale: 1.06 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { style: { scale: fireScale }, className: "text-xl", children: "🔥" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-foreground text-sm leading-none", children: [
                      streak.current,
                      " Day Streak!"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                      "Best: ",
                      streak.longest,
                      " days"
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "glass rounded-2xl px-4 py-2.5 flex items-center gap-2",
                whileHover: { scale: 1.06 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🏆" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm leading-none", children: "Rank --" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                      student.totalPoints,
                      " pts"
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.2 },
        className: "flex items-center gap-2",
        children: [
          ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { delay: 0.25 + i * 0.06, type: "spring" },
                className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${streak.thisWeek[i] ? "grad-purple-deep text-white shadow-glass" : "bg-muted text-muted-foreground"}`,
                children: streak.thisWeek[i] ? "✓" : "·"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: day })
          ] }, day)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-muted-foreground hidden sm:block", children: "This week" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickActions, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DashCard, { index: 0, ocid: "dash-card-attendance", to: "/attendance", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-11 h-11 rounded-xl grad-purple flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 20, className: "text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body text-muted-foreground uppercase tracking-wide mb-1", children: "Attendance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AttendanceRing, { value: attendancePct }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-primary text-2xl leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { to: attendancePct, suffix: "%" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "This Month" }),
              attendancePct > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mt-1.5 bg-green-50 text-green-700 border-green-200 text-xs gap-1", children: attendancePct >= 75 ? "✓ Good standing" : "⚠ Below 75%" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mt-1.5 bg-muted text-muted-foreground border-border text-xs", children: "No records yet" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold mt-2", children: "Tap to mark attendance →" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DashCard, { index: 1, ocid: "dash-card-study-planner", to: "/planner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 20, className: "text-blue-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Smart Planner" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-foreground text-lg leading-tight", children: [
              doneTodayCount,
              "/",
              todayTasks.length,
              " Tasks Done"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-2.5 bg-muted rounded-full overflow-hidden mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { width: 0 },
            animate: {
              width: todayTasks.length > 0 ? `${doneTodayCount / todayTasks.length * 100}%` : "0%"
            },
            transition: { duration: 1.2, delay: 0.4, ease: "easeOut" },
            className: "h-full grad-purple rounded-full"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Today's study target" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold", children: "Tap to open planner →" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DashCard, { index: 2, ocid: "dash-card-timetable", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 20, className: "text-indigo-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Timetable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-base leading-tight", children: "Next Class" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-purple rounded-xl p-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-primary text-lg leading-none", children: "Mathematics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-1", children: "Today at 4:00 PM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "mt-2 inline-flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1 text-xs font-medium text-foreground",
              animate: { opacity: [0.7, 1, 0.7] },
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" }),
                "in 2 hours"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Teacher: Shruti Ma'am · Room 204" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DashCard, { index: 3, ocid: "dash-card-fees", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 20, className: "text-emerald-600" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-2", children: "Fees" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-lg", children: "April Fees" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { delay: 0.6, type: "spring", stiffness: 200 },
                className: "text-xl",
                children: "✅"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-green-50 text-green-700 border-green-200 gap-1 text-xs", children: "Paid · ₹2,500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Next due: May 1, 2026" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DashCard, { index: 4, ocid: "dash-card-homework", to: "/planner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20, className: "text-orange-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Homework" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-lg leading-tight", children: homework.length > 0 ? `${homework.length} Assigned` : `${pendingHW.length} Pending` })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: hwSubjects.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { delay: 0.4 + hwSubjects.indexOf(sub) * 0.1 },
            className: `px-3 py-1 rounded-full text-xs font-semibold border ${sub === "Maths" ? "bg-purple-50 text-primary border-purple-200" : sub === "Science" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"}`,
            children: sub
          },
          sub
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold mt-3", children: "Tap to view assignments →" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DashCard, { index: 5, ocid: "dash-card-analytics", to: "/progress", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 20, className: "text-violet-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Analytics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-foreground text-lg leading-tight flex items-center gap-1.5", children: [
              progress.length > 0 ? `${Math.round(progress.reduce((sum, p) => sum + p.score, 0) / progress.length)}% Overall` : "No data yet",
              progress.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: { y: [0, -3, 0] },
                  transition: {
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY
                  },
                  className: "text-green-500 text-sm",
                  children: "↑"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[80px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          AreaChart,
          {
            data: sparklineData,
            margin: { top: 4, right: 2, left: 2, bottom: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "linearGradient",
                {
                  id: "analyticsGrad",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "1",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#7c3aed", stopOpacity: 0.3 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#7c3aed", stopOpacity: 0 })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  contentStyle: {
                    background: "rgba(255,255,255,0.92)",
                    border: "none",
                    borderRadius: 8,
                    fontSize: 11
                  },
                  formatter: (v) => [`${v}%`, "Score"]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Area,
                {
                  type: "monotone",
                  dataKey: "v",
                  stroke: "#7c3aed",
                  strokeWidth: 2.5,
                  fill: "url(#analyticsGrad)",
                  isAnimationActive: true,
                  animationDuration: 1400,
                  dot: false
                }
              )
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-semibold mt-1", children: "Tap to view full report →" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "homework-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          className: "flex items-center justify-between mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-2xl text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📝" }),
              " Homework & Assignments"
            ] }),
            homework.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20 font-body", children: [
              homework.length,
              " assigned"
            ] })
          ]
        }
      ),
      isLoadingHW ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-2xl" }, i)) }) : hwError ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBanner, { message: `Could not load homework: ${hwError}` }) : !className ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "glass rounded-2xl p-8 text-center border border-dashed border-primary/30",
          "data-ocid": "homework-no-class",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl block mb-3", children: "📚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No class assigned yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "Your homework will appear here once your class is set up." })
          ]
        }
      ) : homework.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "glass rounded-2xl p-8 text-center border border-dashed border-primary/30",
          "data-ocid": "homework-empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl block mb-3", children: "✅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No homework assigned" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "You're all caught up! Check back later for new assignments." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: homework.map((hw) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        HomeworkCard,
        {
          hw,
          onSubmit: handleSubmitHomework
        },
        String(hw.id)
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "announcements-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.6 },
          className: "flex items-center justify-between mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-2xl text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📢" }),
              " Announcements"
            ] }),
            announcements.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20 font-body", children: [
              announcements.length,
              " new"
            ] })
          ]
        }
      ),
      isLoadingAnn ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 rounded-2xl" }, i)) }) : annError ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBanner, { message: `Could not load announcements: ${annError}` }) : !className ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "glass rounded-2xl p-8 text-center border border-dashed border-primary/30",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl block mb-3", children: "📢" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No class assigned yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "Announcements from your teachers will appear here." })
          ]
        }
      ) : announcements.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "glass rounded-2xl p-8 text-center border border-dashed border-primary/30",
          "data-ocid": "announcements-empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl block mb-3", children: "🔔" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No announcements yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "Your teachers haven't posted anything yet. Check back soon!" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: announcements.map((ann, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        AnnouncementCard,
        {
          announcement: ann,
          index: i
        },
        String(ann.id)
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.55 },
          className: "flex items-center justify-between mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-2xl text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📊" }),
              " Your Subject Progress"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/progress",
                className: "text-sm text-primary font-semibold hover:underline",
                children: "View all →"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 justify-start", children: progress.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SubjectRingCard,
        {
          subject: p.subject,
          progress: p.progress,
          color: p.color,
          score: p.score,
          index: i
        },
        p.subject
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.65 },
          className: "font-display font-bold text-2xl text-foreground flex items-center gap-2 mb-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⚡" }),
            " Recent Activity"
          ]
        }
      ),
      tasks.length === 0 && attendance.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "glass rounded-2xl p-8 text-center border border-dashed border-primary/30",
          "data-ocid": "activity-empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl block mb-3", children: "⚡" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: "No activity yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-body mt-1", children: "Your study activity will appear here as you complete tasks and mark attendance." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        tasks.filter((t) => t.completed).slice(0, 3).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -28 },
            animate: { opacity: 1, x: 0 },
            transition: {
              delay: 0.7 + i * 0.1,
              type: "spring",
              stiffness: 70,
              damping: 18
            },
            "data-ocid": `activity-row-task-${t.id}`,
            className: "flex items-center gap-4 p-4 rounded-2xl border glass transition-smooth hover:shadow-glass bg-green-50 border-green-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "✅" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm font-medium text-foreground truncate", children: [
                  "Completed: ",
                  t.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.subject })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap shrink-0", children: t.dueDate })
            ]
          },
          `task-${t.id}`
        )),
        attendance.filter((r) => r.present).slice(0, 2).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -28 },
            animate: { opacity: 1, x: 0 },
            transition: {
              delay: 0.8 + i * 0.1,
              type: "spring",
              stiffness: 70,
              damping: 18
            },
            "data-ocid": `activity-row-att-${r.date}`,
            className: "flex items-center gap-4 p-4 rounded-2xl border glass transition-smooth hover:shadow-glass bg-purple-50 border-purple-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📅" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium text-foreground truncate", children: "Attendance marked" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap shrink-0", children: r.date })
            ]
          },
          `att-${r.date}-${r.studentId}`
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.85 },
        className: "glass rounded-2xl p-6",
        "data-ocid": "achievements-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground flex items-center gap-2", children: "🏅 Achievements" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-purple-50 text-primary border-purple-200 text-xs", children: [
              achievements.filter((a) => a.unlocked).length,
              " /",
              " ",
              achievements.length,
              " unlocked"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: achievements.map((ach, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { scale: 0.7, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: 0.9 + i * 0.08, type: "spring" },
              whileHover: { scale: 1.1 },
              className: `flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border text-center min-w-[90px] transition-smooth ${ach.unlocked ? "glass-purple border-purple-200 shadow-glass" : "bg-muted/50 border-border opacity-50 grayscale"}`,
              title: ach.description,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: ach.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground leading-tight max-w-[80px]", children: ach.title }),
                ach.unlocked && ach.unlockedDate && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: ach.unlockedDate })
              ]
            },
            ach.id
          )) })
        ]
      }
    )
  ] });
}
export {
  DashboardPage as default
};
