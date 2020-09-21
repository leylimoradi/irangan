(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "5eeg":
/*!************************************!*\
  !*** ./src/images/logoIrangan.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "68f1ec18545e17ffe56d31fdd81fbe65.svg");

/***/ }),

/***/ "FKbo":
/*!*******************************!*\
  !*** ./src/IRANSansWeb.woff2 ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ca92bd17e3211d6b29b9ed0a834d8b0e.woff2");

/***/ }),

/***/ "JZUD":
/*!*****************************!*\
  !*** ./src/IRANSansWeb.eot ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5c7d40bb2f4cca4c4cf7ad7466c3793e.eot");

/***/ }),

/***/ "LbRr":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _logoIrangan = _interopRequireDefault(__webpack_require__(/*! ../images/logoIrangan.svg */ "5eeg"));

var _menu = _interopRequireDefault(__webpack_require__(/*! ../components/menu.js */ "jYam"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var Head = /*#__PURE__*/function (_Component) {
  _inherits(Head, _Component);

  var _super = _createSuper(Head);

  function Head() {
    _classCallCheck(this, Head);

    return _super.apply(this, arguments);
  }

  _createClass(Head, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement(_menu["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "logo"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _logoIrangan["default"],
        alt: "logo"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        className: "searchField",
        type: "text",
        placeholder: "\u062C\u0633\u062A\u062C\u0648",
        "aria-label": "\u062C\u0633\u062A\u062C\u0648"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "login"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "/#"
      }, "\u0648\u0631\u0648\u062F"))));
    }
  }]);

  return Head;
}(_react.Component);

exports["default"] = Head;

/***/ }),

/***/ "LzPs":
/*!***************************!*\
  !*** ./src/data/tag.json ***!
  \***************************/
/*! exports provided: tags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tags\":[\"لوازم یدکی\",\"گیربکس\",\"گیربکس اتوماتیک\",\"تعمیرگاه\",\"لوازم یدکی کیا\",\"لوازم یدکی هیوندا\",\"خرید و فروش خودرو\",\"لوازم یدکی بنز\",\"لوازم یدکی مزدا\",\"لوازم یدکی بی ام و\",\"لوازم یدکی تویوتا\",\"لوازم یدکی پورشه\",\"صندلی\",\"شیشه\",\"گیربکس صنعتی\",\"سیم و کابل\",\"کابل\",\"ماشین آلات راهسازی\",\"لوازم یدکی ماشین آلات راهسازی\"]}");

/***/ }),

/***/ "NysD":
/*!*******************************!*\
  !*** ./src/components/tag.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _tag = _interopRequireDefault(__webpack_require__(/*! ../data/tag.json */ "LzPs"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var tags = _tag["default"].tags;

var Tag = /*#__PURE__*/function (_Component) {
  _inherits(Tag, _Component);

  var _super = _createSuper(Tag);

  function Tag() {
    _classCallCheck(this, Tag);

    return _super.apply(this, arguments);
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "tagsList"
      }, tags.map(function (s) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: s
        }, s);
      })));
    }
  }]);

  return Tag;
}(_react.Component);

exports["default"] = Tag;

/***/ }),

/***/ "PwZg":
/*!***************************************!*\
  !*** ./src/IRANSansMobile(FaNum).ttf ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d6fdd4a7a351260c6e0811d655655857.ttf");

/***/ }),

/***/ "Tj8C":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _ads = _interopRequireDefault(__webpack_require__(/*! ../data/ads.json */ "dhID"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

console.clear();
var ads = _ads["default"].ads;
var FILTER_DEFS = {
  'None': function None(company) {
    return company;
  },
  'MostLiked': function MostLiked(company) {
    return company.MostLiked;
  },
  'Mostviewed': function Mostviewed(company) {
    return company.Mostviewed;
  },
  'Off': function Off(company) {
    return company.off;
  }
};

var BB = /*#__PURE__*/function (_Component) {
  _inherits(BB, _Component);

  var _super = _createSuper(BB);

  function BB(props) {
    var _this;

    _classCallCheck(this, BB);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeIdx: 0
    });

    _defineProperty(_assertThisInitialized(_this), "buttonSelected", function (selectedButton) {
      return function (ev) {
        _this.setState({
          selectedButton: selectedButton
        });
      };
    });

    _this.state = {
      list: ads,
      filterKey: 'None',
      selectedButton: null
    };
    return _this;
  }

  _createClass(BB, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          list = _this$state.list,
          filterKey = _this$state.filterKey;
      var filteredList = list.filter(FILTER_DEFS[filterKey]);
      return /*#__PURE__*/_react["default"].createElement("article", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "filterBtn"
      }, /*#__PURE__*/_react["default"].createElement("p", null, "  \u0645\u0631\u062A\u0628\u200C\u0633\u0627\u0632\u06CC \u0628\u0631 \u0627\u0633\u0627\u0633 : "), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.setState({
            filterKey: 'None'
          });
        }
      }, "\u0686\u064A\u062F\u0645\u0627\u0646 \u062A\u0635\u0627\u062F\u0641\u064A"), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.setState({
            filterKey: 'MostLiked'
          });
        }
      }, "\u0645\u062D\u0628\u0648\u0628\u200C\u062A\u0631\u064A\u0646"), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.setState({
            filterKey: 'Mostviewed'
          });
        }
      }, "\u067E\u0631\u0646\u0638\u0631\u062A\u0631\u064A\u0646"), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.setState({
            filterKey: 'Off'
          });
        }
      }, "\u062A\u062E\u0641\u064A\u0641\u200C\u062F\u0627\u0631"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "underline"
      })), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "listingItems"
      }, filteredList.map(function (company) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: company.uniqueId
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "itemDetails"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "itemDes"
        }, /*#__PURE__*/_react["default"].createElement("img", {
          src: company.img,
          alt: company.uniqueId
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "adsName"
        }, company.name), /*#__PURE__*/_react["default"].createElement("div", {
          className: "rowcode_star"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "codeBox"
        }, company.code), /*#__PURE__*/_react["default"].createElement("div", {
          className: "squreBox"
        }, company.star))));
      })));
    }
  }]);

  return BB;
}(_react.Component);

exports["default"] = BB;

/***/ }),

/***/ "Vn2l":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _ri = __webpack_require__(/*! react-icons/ri */ "v7au");

var _modal = _interopRequireDefault(__webpack_require__(/*! ../components/modal.js */ "bPrE"));

var _stateBar = _interopRequireDefault(__webpack_require__(/*! ../components/stateBar.js */ "zXGV"));

var _tag = _interopRequireDefault(__webpack_require__(/*! ../components/tag.js */ "NysD"));

var _filter = _interopRequireDefault(__webpack_require__(/*! ../components/filter.js */ "Tj8C"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var Main = /*#__PURE__*/function (_Component) {
  _inherits(Main, _Component);

  var _super = _createSuper(Main);

  function Main() {
    _classCallCheck(this, Main);

    return _super.apply(this, arguments);
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mapBar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
        className: "activeR",
        href: "/#"
      }, "\u0627\u06CC\u0631\u0627\u0646\u06AF\u0627\u0646"), /*#__PURE__*/_react["default"].createElement(_ri.RiArrowLeftSLine, {
        size: 10,
        color: "grey"
      })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "/#"
      }, "\u062E\u0648\u062F\u0631\u0648"))), /*#__PURE__*/_react["default"].createElement(_modal["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mainSection"
      }, /*#__PURE__*/_react["default"].createElement(_stateBar["default"], null), /*#__PURE__*/_react["default"].createElement(_filter["default"], null)), /*#__PURE__*/_react["default"].createElement("aside", {
        className: "sideSection"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "titleSide"
      }, "\u06A9\u0644\u06CC\u062F\u0648\u0627\u0698\u0647"), /*#__PURE__*/_react["default"].createElement(_tag["default"], null))));
    }
  }]);

  return Main;
}(_react.Component);

exports["default"] = Main;

/***/ }),

/***/ "Y9+T":
/*!*************************************!*\
  !*** ./src/images/externalLink.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "15c437495a7c94acae5fcd44c1a3d57d.svg");

/***/ }),

/***/ "bPrE":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "q1tI"));

var _reactBootstrap = __webpack_require__(/*! react-bootstrap */ "vS6h");

var _Modal = _interopRequireDefault(__webpack_require__(/*! react-bootstrap/Modal */ "zM5D"));

var _ri = __webpack_require__(/*! react-icons/ri */ "v7au");

__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "q4sD");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function MyVerticallyCenteredModal(props) {
  return /*#__PURE__*/_react["default"].createElement(_Modal["default"], _extends({}, props, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: "centered"
  }), /*#__PURE__*/_react["default"].createElement(_Modal["default"].Header, {
    closeButton: "closeButton"
  }, /*#__PURE__*/_react["default"].createElement(_Modal["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "\u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0631\u06CC")), /*#__PURE__*/_react["default"].createElement(_Modal["default"].Body, null, /*#__PURE__*/_react["default"].createElement("p", null, "\u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u0632\u06CC\u0631 \u0627\u06CC\u0646 \u0635\u0641\u062D\u0647 \u0631\u0627 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F.")), /*#__PURE__*/_react["default"].createElement(_Modal["default"].Footer, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    onClick: props.onHide
  }, "Close")));
}

function App() {
  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modalShow = _React$useState2[0],
      setModalShow = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", /*#__PURE__*/_react["default"].createElement("div", {
    className: "share",
    onClick: function onClick() {
      return setModalShow(true);
    }
  }, " ", /*#__PURE__*/_react["default"].createElement(_ri.RiShareLine, {
    size: 20
  })), /*#__PURE__*/_react["default"].createElement(MyVerticallyCenteredModal, {
    show: modalShow,
    onHide: function onHide() {
      return setModalShow(false);
    }
  }));
}

var _default = App;
exports["default"] = _default;

/***/ }),

/***/ "dhID":
/*!***************************!*\
  !*** ./src/data/ads.json ***!
  \***************************/
/*! exports provided: ads, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ads\":[{\"uniqueId\":1,\"name\":\"تعمیرگاه زانتیا حاتمی\",\"MostLiked\":true,\"off\":false,\"Mostviewed\":true,\"star\":7,\"code\":257616,\"img\":\"http://test.irangan.com/img/ads1.jpg\"},{\"uniqueId\":2,\"name\":\"فروشگاه لوازم یدکی هاشمی\",\"MostLiked\":false,\"off\":true,\"Mostviewed\":false,\"star\":7,\"code\":259158,\"img\":\"http://test.irangan.com/img/ads2.jpg\"},{\"uniqueId\":3,\"name\":\"فروشگاه لوازم یدکی اتوپارت مردان\",\"MostLiked\":true,\"off\":true,\"Mostviewed\":false,\"star\":7,\"code\":260942,\"img\":\"http://test.irangan.com/img/ads3.jpg\"},{\"uniqueId\":4,\"name\":\" فروشگاه لوازم یدکی یدک‌سازان\",\"MostLiked\":false,\"off\":true,\"Mostviewed\":true,\"star\":7,\"code\":251688,\"img\":\"http://test.irangan.com/img/ads4.jpg\"},{\"uniqueId\":5,\"name\":\"تعمیرگاه گیربکس كيا اتوماتيك\",\"MostLiked\":true,\"off\":false,\"Mostviewed\":false,\"star\":7,\"code\":261384,\"img\":\"http://test.irangan.com/img/ads5.jpg\"},{\"uniqueId\":6,\"name\":\"فروشگاه لوازم یدکی اتوپارت مردان\",\"MostLiked\":false,\"off\":true,\"Mostviewed\":false,\"star\":7,\"code\":251870,\"img\":\"http://test.irangan.com/img/ads6.jpg\"},{\"uniqueId\":7,\"name\":\"بازرگانی و پخش آینه بغل CMC\",\"MostLiked\":true,\"off\":false,\"Mostviewed\":true,\"star\":7,\"code\":247075,\"img\":\"http://test.irangan.com/img/ads7.jpg\"}]}");

/***/ }),

/***/ "jYam":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _catagory = _interopRequireDefault(__webpack_require__(/*! ../data/catagory.json */ "nd4l"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);
    _this.state = {
      isHovered: false
    };
    _this.handleMenuHover = _this.handleMenuHover.bind(_assertThisInitialized(_this));
    _this.state = {
      data: _catagory["default"]
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "handleMenuHover",
    value: function handleMenuHover() {
      this.setState({
        isHovered: !this.state.isHovered
      });
    }
  }, {
    key: "render",
    value: function render() {
      var menuActive = this.state.isHovered ? "active" : "";
      var menuOpen = this.state.isHovered ? "openMenu" : "";
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "menu-icon " + menuActive,
        onMouseEnter: this.handleMenuHover,
        onMouseLeave: this.handleMenuHover
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "line_one"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "line_two"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "line_three"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "second-level " + menuOpen,
        onMouseEnter: this.handleMenuHover,
        onMouseLeave: this.handleMenuHover
      }, /*#__PURE__*/_react["default"].createElement("div", null, _catagory["default"].Category.map(function (cat, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "cat",
          key: index
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "catLi"
        }, cat.Title, /*#__PURE__*/_react["default"].createElement("ul", null, cat.Items.map(function (categoryItems, index) {
          return /*#__PURE__*/_react["default"].createElement("li", {
            key: index
          }, categoryItems.Name);
        }))));
      }))));
    }
  }]);

  return Menu;
}(_react.Component);

exports["default"] = Menu;

/***/ }),

/***/ "nd4l":
/*!********************************!*\
  !*** ./src/data/catagory.json ***!
  \********************************/
/*! exports provided: Category, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Category\":[{\"Title\":\"مد و زیبایی\",\"Items\":[{\"Name\":\"سالن زیبایی\"},{\"Name\":\"زیور آلات\"},{\"Name\":\"آرایشگاه مردانه\"},{\"Name\":\"پوشاک\"},{\"Name\":\"کیف و کفش\"}]},{\"Title\":\"پزشکی و درمان\",\"Items\":[{\"Name\":\"تجهیزات پزشکی\"},{\"Name\":\"داروخانه\"},{\"Name\":\"مشاور خانواده\"},{\"Name\":\"امور مراقبتی\"},{\"Name\":\"طب سنتی\"},{\"Name\":\"کاشت مو\"},{\"Name\":\"پزشک\"}]},{\"Title\":\"گردشگری\",\"Items\":[{\"Name\":\"خدمات مسافرتی\"},{\"Name\":\"صرافی\"},{\"Name\":\"ویزا\"}]},{\"Title\":\"خدمات مجالس\",\"Items\":[{\"Name\":\"تشریفات\"},{\"Name\":\"تالار پذیرایی\"},{\"Name\":\"استودیو و آتلیه\"}]},{\"Title\":\"لوازم خانگی\",\"Items\":[{\"Name\":\"فروشگاه لوازم خانگی\"},{\"Name\":\"صوتی و تصویری\"},{\"Name\":\"کالای خواب\"},{\"Name\":\"کولر و پنکه\"},{\"Name\":\"پرده\"},{\"Name\":\"مبل\"}]},{\"Title\":\"خدمات منزل\",\"Items\":[{\"Name\":\"امور نظافتی\"},{\"Name\":\"قالیشویی\"},{\"Name\":\"خدمات فنی\"}]},{\"Title\":\"مواد غذایی\",\"Items\":[{\"Name\":\"کترینگ\"},{\"Name\":\"سوپر مارکت\"},{\"Name\":\"کافی شاپ\"},{\"Name\":\"فست فود\"},{\"Name\":\"رستوران\"}]},{\"Title\":\"ورزش\",\"Items\":[{\"Name\":\"آموزش ورزشی\"},{\"Name\":\"لوازم ورزشی\"}]},{\"Title\":\"آموزش\",\"Items\":[{\"Name\":\"آموزش فنی حرفه ای\"},{\"Name\":\"خدمات آموزشی\"},{\"Name\":\"آموزش درسی\"},{\"Name\":\"آموزش هنری\"},{\"Name\":\"امور فرهنگی\"},{\"Name\":\"مهد کودک\"}]},{\"Title\":\"خودرو\",\"Items\":[{\"Name\":\"خدمات و لوازم خودرو\"},{\"Name\":\"خدمات آموزشی\"},{\"Name\":\"خرید و فروش خودرو\"}]},{\"Title\":\"دیجیتال\",\"Items\":[{\"Name\":\"ماشین های اداری\"},{\"Name\":\"موبایل و تلفن\"}]},{\"Title\":\"کسب و کار\",\"Items\":[{\"Name\":\"بازرگانی\"},{\"Name\":\"بیمه\"},{\"Name\":\"مشاور حقوقی\"},{\"Name\":\"خدمات مالی\"},{\"Name\":\"دارالترجمه\"}]},{\"Title\":\"چاپ و تبلیغات\",\"Items\":[{\"Name\":\"هدایای تبلیغاتی\"},{\"Name\":\"چاپ\"}]},{\"Title\":\"ساختمان\",\"Items\":[{\"Name\":\"ایزولاسیون و آسفالت\"},{\"Name\":\"فونداسیون و سقف\"},{\"Name\":\"مصالح ساختمانی\"},{\"Name\":\"نقشه و نظارت\"},{\"Name\":\"درب و پنجره\"},{\"Name\":\"پیمانکاری\"},{\"Name\":\"کابینت\"},{\"Name\":\"لوله بازکنی و تخلیه چاه\"},{\"Name\":\"سیستم های حفاظتی\"},{\"Name\":\"لوازم بهداشتی\"},{\"Name\":\"تاسیسات\"},{\"Name\":\"آسانسور\"},{\"Name\":\"برق\"},{\"Name\":\"دکوراسیون\"},{\"Name\":\"املاک\"}]},{\"Title\":\"حمل و نقل\",\"Items\":[{\"Name\":\"حمل و نقل بین‌المللی\"},{\"Name\":\"خدمات حمل و نقل\"},{\"Name\":\"حمل و نقل سنگین\"},{\"Name\":\"سرویس خصوصی\"},{\"Name\":\"اتوبار\"}]},{\"Title\":\"صنعت\",\"Items\":[{\"Name\":\"لوله و اتصالات\"},{\"Name\":\"مواد شیمیایی\"},{\"Name\":\"برق صنعتی\"},{\"Name\":\"صنایع چوب\"},{\"Name\":\"ابزار و یراق\"},{\"Name\":\"کلیدسازی\"},{\"Name\":\"آهن آلات\"},{\"Name\":\"ضایعات\"},{\"Name\":\"خدمات صنعتی\"},{\"Name\":\"ماشین آلات صنعتی\"}]},{\"Title\":\"حیوانات و کشاورزی\",\"Items\":[{\"Name\":\"حیوانات خانگی\"},{\"Name\":\"دام و طیور\"},{\"Name\":\"دامپزشکی\"},{\"Name\":\"آکواریوم\"},{\"Name\":\"کشاورزی\"},{\"Name\":\"فضای سبز\"}]}]}");

/***/ }),

/***/ "puS7":
/*!****************************!*\
  !*** ./src/data/city.json ***!
  \****************************/
/*! exports provided: City, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"City\":[{\"Title\":\"آذربایجان شرقی\",\"Items\":[{\"Name\":\"آذرشهر\"},{\"Name\":\"اسکو\"},{\"Name\":\"اهر\"},{\"Name\":\"بستان‌آباد\"},{\"Name\":\"بناب\"},{\"Name\":\"تبریز\"},{\"Name\":\"جلفا\"},{\"Name\":\"چاراویماق\"},{\"Name\":\"سراب\"},{\"Name\":\"شبستر\"},{\"Name\":\"عجب‌شیر\"},{\"Name\":\"کلیبر\"},{\"Name\":\"مراغه\"},{\"Name\":\"مرند\"},{\"Name\":\"ملکان\"},{\"Name\":\"میانه\"},{\"Name\":\"ورزقان\"},{\"Name\":\"هریس\"},{\"Name\":\"هشترود\"}]},{\"Title\":\"آذربایجان غربی\",\"Items\":[{\"Name\":\"ارومیه\"},{\"Name\":\"اشنویه\"},{\"Name\":\"بوکان\"},{\"Name\":\"پیرانشهر\"},{\"Name\":\"تکاب\"},{\"Name\":\"چالدران\"},{\"Name\":\"خوی\"},{\"Name\":\"سردشت\"},{\"Name\":\"سلماس\"},{\"Name\":\"شاهین‌دژ\"},{\"Name\":\"ماکو\"},{\"Name\":\"مهاباد\"},{\"Name\":\"میاندوآب\"},{\"Name\":\"نقده\"}]},{\"Title\":\"اردبیل\",\"Items\":[{\"Name\":\"اردبیل\"},{\"Name\":\"بیله‌سوار\"},{\"Name\":\"پارس‌آباد\"},{\"Name\":\"خلخال\"},{\"Name\":\"کوثر\"},{\"Name\":\"گرمی\"},{\"Name\":\"مشگین‌شهر\"},{\"Name\":\"نمین\"},{\"Name\":\"نیر\"}]},{\"Title\":\"اصفهان\",\"Items\":[{\"Name\":\"آران و بیدگل\"},{\"Name\":\"اردستان\"},{\"Name\":\"اصفهان\"},{\"Name\":\"برخوار و میمه\"},{\"Name\":\"تیران و کرون\"},{\"Name\":\"چادگان\"},{\"Name\":\"خمینی‌شهر\"},{\"Name\":\"خوانسار\"},{\"Name\":\"سمیرم\"},{\"Name\":\"شهرضا\"},{\"Name\":\"سمیرم سفلی\"},{\"Name\":\"فریدن\"},{\"Name\":\"فریدون‌شهر\"},{\"Name\":\"فلاورجان\"},{\"Name\":\"کاشان\"},{\"Name\":\"گلپایگان\"},{\"Name\":\"لنجان\"},{\"Name\":\"مبارکه\"},{\"Name\":\"نائین\"},{\"Name\":\"نجف‌آباد\"},{\"Name\":\"نطنز\"}]},{\"Title\":\"ایلام\",\"Items\":[{\"Name\":\"آبدانان\"},{\"Name\":\"ایلام\"},{\"Name\":\"ایوان\"},{\"Name\":\"دره‌شهر\"},{\"Name\":\"دهلران\"},{\"Name\":\"شیروان و چرداول\"},{\"Name\":\"مهران\"}]},{\"Title\":\"بوشهر\",\"Items\":[{\"Name\":\"بوشهر\"},{\"Name\":\"تنگستان\"},{\"Name\":\"جم\"},{\"Name\":\"دشتستان\"},{\"Name\":\"دشتی\"},{\"Name\":\"دیر\"},{\"Name\":\"دیلم\"},{\"Name\":\"کنگان\"},{\"Name\":\"گناوه\"}]},{\"Title\":\"تهران\",\"Items\":[{\"Name\":\"اسلام‌شهر\"},{\"Name\":\"پاکدشت\"},{\"Name\":\"تهران\"},{\"Name\":\"دماوند\"},{\"Name\":\"رباط‌کریم\"},{\"Name\":\"ری\"},{\"Name\":\"ساوجبلاغ\"},{\"Name\":\"شمیرانات\"},{\"Name\":\"شهریار\"},{\"Name\":\"فیروزکوه\"},{\"Name\":\"کرج\"},{\"Name\":\"نظرآباد\"},{\"Name\":\"ورامین\"}]},{\"Title\":\"چهارمحال و بختیاری\",\"Items\":[{\"Name\":\"اردل\"},{\"Name\":\"بروجن\"},{\"Name\":\"شهرکرد\"},{\"Name\":\"فارسان\"},{\"Name\":\"کوهرنگ\"},{\"Name\":\"لردگان\"}]},{\"Title\":\"خراسان جنوبی\",\"Items\":[{\"Name\":\"بیرجند\"},{\"Name\":\"درمیان\"},{\"Name\":\"سرایان\"},{\"Name\":\"سربیشه\"},{\"Name\":\"فردوس\"},{\"Name\":\"قائنات\"},{\"Name\":\"نهبندان\"}]},{\"Title\":\"خراسان رضوی\",\"Items\":[{\"Name\":\"بردسکن\"},{\"Name\":\"تایباد\"},{\"Name\":\"تربت جام\"},{\"Name\":\"تربت حیدریه\"},{\"Name\":\"چناران\"},{\"Name\":\"خلیل‌آباد\"},{\"Name\":\"خواف\"},{\"Name\":\"درگز\"},{\"Name\":\"رشتخوار\"},{\"Name\":\"سبزوار\"},{\"Name\":\"سرخس\"},{\"Name\":\"فریمان\"},{\"Name\":\"قوچان\"},{\"Name\":\"کاشمر\"},{\"Name\":\"کلات\"},{\"Name\":\"گناباد\"},{\"Name\":\"مشهد\"},{\"Name\":\"مه ولات\"},{\"Name\":\"نیشابور\"}]},{\"Title\":\"خراسان شمالی\",\"Items\":[{\"Name\":\"اسفراین\"},{\"Name\":\"بجنورد\"},{\"Name\":\"جاجرم\"},{\"Name\":\"شیروان\"},{\"Name\":\"فاروج\"},{\"Name\":\"مانه و سملقان\"}]},{\"Title\":\"خوزستان\",\"Items\":[{\"Name\":\"آبادان\"},{\"Name\":\"امیدیه\"},{\"Name\":\"اندیمشک\"},{\"Name\":\"اهواز\"},{\"Name\":\"ایذه\"},{\"Name\":\"باغ‌ملک\"},{\"Name\":\"بندر ماهشهر\"},{\"Name\":\"بهبهان\"},{\"Name\":\"خرمشهر\"},{\"Name\":\"دزفول\"},{\"Name\":\"دشت آزادگان\"},{\"Name\":\"رامشیر\"},{\"Name\":\"رامهرمز\"},{\"Name\":\"شادگان\"},{\"Name\":\"شوش\"},{\"Name\":\"شوشتر\"},{\"Name\":\"گتوند\"},{\"Name\":\"لالی\"},{\"Name\":\"مسجد سلیمان\"},{\"Name\":\"هندیجان\"}]},{\"Title\":\"زنجان\",\"Items\":[{\"Name\":\"ابهر\"},{\"Name\":\"ایجرود\"},{\"Name\":\"خدابنده\"},{\"Name\":\"خرمدره\"},{\"Name\":\"زنجان\"},{\"Name\":\"طارم\"},{\"Name\":\"ماه‌نشان\"}]},{\"Title\":\"سمنان\",\"Items\":[{\"Name\":\"دامغان\"},{\"Name\":\"سمنان\"},{\"Name\":\"شاهرود\"},{\"Name\":\"گرمسار\"},{\"Name\":\"مهدی‌شهر\"}]},{\"Title\":\"سیستان و بلوچستان\",\"Items\":[{\"Name\":\"ایرانشهر\"},{\"Name\":\"چابهار\"},{\"Name\":\"خاش\"},{\"Name\":\"دلگان\"},{\"Name\":\"زابل\"},{\"Name\":\"زاهدان\"},{\"Name\":\"زهک\"},{\"Name\":\"سراوان\"},{\"Name\":\"سرباز\"},{\"Name\":\"کنارک\"},{\"Name\":\"نیک‌شهر\"}]},{\"Title\":\"فارس\",\"Items\":[{\"Name\":\"آباده\"},{\"Name\":\"ارسنجان\"},{\"Name\":\"استهبان\"},{\"Name\":\"اقلید\"},{\"Name\":\"بوانات\"},{\"Name\":\"پاسارگاد\"},{\"Name\":\"جهرم\"},{\"Name\":\"خرم‌بید\"},{\"Name\":\"خنج\"},{\"Name\":\"داراب\"},{\"Name\":\"زرین‌دشت\"},{\"Name\":\"سپیدان\"},{\"Name\":\"شیراز\"},{\"Name\":\"فراشبند\"},{\"Name\":\"فسا\"},{\"Name\":\"فیروزآباد\"},{\"Name\":\"قیر و کارزین\"},{\"Name\":\"کازرون\"},{\"Name\":\"لارستان\"},{\"Name\":\"لامِرد\"},{\"Name\":\"مرودشت\"},{\"Name\":\"ممسنی\"},{\"Name\":\"مهر\"},{\"Name\":\"نی‌ریز\"}]},{\"Title\":\"قزوین\",\"Items\":[{\"Name\":\"آبیک\"},{\"Name\":\"البرز\"},{\"Name\":\"بوئین‌زهرا\"},{\"Name\":\"تاکستان\"},{\"Name\":\"قزوین\"}]},{\"Title\":\"قم\",\"Items\":[{\"Name\":\"قم\"}]},{\"Title\":\"کردستان\",\"Items\":[{\"Name\":\"بانه\"},{\"Name\":\"بیجار\"},{\"Name\":\"دیواندره\"},{\"Name\":\"سروآباد\"},{\"Name\":\"سقز\"},{\"Name\":\"سنندج\"},{\"Name\":\"قروه\"},{\"Name\":\"کامیاران\"},{\"Name\":\"مریوان\"}]},{\"Title\":\"کرمان\",\"Items\":[{\"Name\":\"بافت\"},{\"Name\":\"بردسیر\"},{\"Name\":\"بم\"},{\"Name\":\"جیرفت\"},{\"Name\":\"راور\"},{\"Name\":\"رفسنجان\"},{\"Name\":\"رودبار جنوب\"},{\"Name\":\"زرند\"},{\"Name\":\"سیرجان\"},{\"Name\":\"شهر بابک\"},{\"Name\":\"عنبرآباد\"},{\"Name\":\"قلعه گنج\"},{\"Name\":\"کرمان\"},{\"Name\":\"کوهبنان\"},{\"Name\":\"کهنوج\"},{\"Name\":\"منوجان\"}]},{\"Title\":\"کرمانشاه\",\"Items\":[{\"Name\":\"اسلام‌آباد غرب\"},{\"Name\":\"پاوه\"},{\"Name\":\"ثلاث باباجانی\"},{\"Name\":\"جوانرود\"},{\"Name\":\"دالاهو\"},{\"Name\":\"روانسر\"},{\"Name\":\"سرپل ذهاب\"},{\"Name\":\"سنقر\"},{\"Name\":\"صحنه\"},{\"Name\":\"قصر شیرین\"},{\"Name\":\"کرمانشاه\"},{\"Name\":\"کنگاور\"},{\"Name\":\"گیلان غرب\"},{\"Name\":\"هرسین\"}]},{\"Title\":\"کهگیلویه و بویراحمد\",\"Items\":[{\"Name\":\"بویراحمد\"},{\"Name\":\"بهمئی\"},{\"Name\":\"دنا\"},{\"Name\":\"کهگیلویه\"},{\"Name\":\"گچساران\"}]},{\"Title\":\"گلستان\",\"Items\":[{\"Name\":\"آزادشهر\"},{\"Name\":\"آق‌قلا\"},{\"Name\":\"بندر گز\"},{\"Name\":\"ترکمن\"},{\"Name\":\"رامیان\"},{\"Name\":\"علی‌آباد\"},{\"Name\":\"کردکوی\"},{\"Name\":\"کلاله\"},{\"Name\":\"گرگان\"},{\"Name\":\"گنبد کاووس\"},{\"Name\":\"مراوه‌تپه\"},{\"Name\":\"مینودشت\"}]},{\"Title\":\"گیلان\",\"Items\":[{\"Name\":\"آستارا\"},{\"Name\":\"آستانه اشرفیه\"},{\"Name\":\"اَملَش\"},{\"Name\":\"بندر انزلی\"},{\"Name\":\"رشت\"},{\"Name\":\"رضوانشهر\"},{\"Name\":\"رودبار\"},{\"Name\":\"رودسر\"},{\"Name\":\"سیاهکل\"},{\"Name\":\"شفت\"},{\"Name\":\"صومعه‌سرا\"},{\"Name\":\"طوالش\"},{\"Name\":\"فومَن\"},{\"Name\":\"لاهیجان\"},{\"Name\":\"لنگرود\"},{\"Name\":\"ماسال\"}]},{\"Title\":\"لرستان\",\"Items\":[{\"Name\":\"ازنا\"},{\"Name\":\"الیگودرز\"},{\"Name\":\"بروجرد\"},{\"Name\":\"پل‌دختر\"},{\"Name\":\"خرم‌آباد\"},{\"Name\":\"دورود\"},{\"Name\":\"دلفان\"},{\"Name\":\"سلسله\"},{\"Name\":\"کوهدشت\"}]},{\"Title\":\"مازندران\",\"Items\":[{\"Name\":\"آمل\"},{\"Name\":\"بابل\"},{\"Name\":\"بابلسر\"},{\"Name\":\"بهشهر\"},{\"Name\":\"تنکابن\"},{\"Name\":\"جویبار\"},{\"Name\":\"چالوس\"},{\"Name\":\"رامسر\"},{\"Name\":\"ساری\"},{\"Name\":\"سوادکوه\"},{\"Name\":\"قائم‌شهر\"},{\"Name\":\"گلوگاه\"},{\"Name\":\"محمودآباد\"},{\"Name\":\"نکا\"},{\"Name\":\"نور\"},{\"Name\":\"نوشهر\"}]},{\"Title\":\"مرکزی\",\"Items\":[{\"Name\":\"آشتیان\"},{\"Name\":\"اراک\"},{\"Name\":\"تفرش\"},{\"Name\":\"خمین\"},{\"Name\":\"دلیجان\"},{\"Name\":\"زرندیه\"},{\"Name\":\"ساوه\"},{\"Name\":\"شازند\"},{\"Name\":\"کمیجان\"},{\"Name\":\"محلات\"}]},{\"Title\":\"هرمزگان\",\"Items\":[{\"Name\":\"ابوموسی\"},{\"Name\":\"بستک\"},{\"Name\":\"بندر عباس\"},{\"Name\":\"بندر لنگه\"},{\"Name\":\"جاسک\"},{\"Name\":\"حاجی‌آباد\"},{\"Name\":\"شهرستان خمیر\"},{\"Name\":\"رودان\"},{\"Name\":\"قشم\"},{\"Name\":\"گاوبندی\"},{\"Name\":\"میناب\"}]},{\"Title\":\"همدان\",\"Items\":[{\"Name\":\"اسدآباد\"},{\"Name\":\"بهار\"},{\"Name\":\"تویسرکان\"},{\"Name\":\"رزن\"},{\"Name\":\"کبودرآهنگ\"},{\"Name\":\"ملایر\"},{\"Name\":\"نهاوند\"},{\"Name\":\"همدان\"}]},{\"Title\":\"یزد\",\"Items\":[{\"Name\":\"ابرکوه\"},{\"Name\":\"اردکان\"},{\"Name\":\"بافق\"},{\"Name\":\"تفت\"},{\"Name\":\"خاتم\"},{\"Name\":\"صدوق\"},{\"Name\":\"طبس\"},{\"Name\":\"مهریز\"},{\"Name\":\"میبد\"},{\"Name\":\"یزد\"}]}]}");

/***/ }),

/***/ "qu5N":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/stylesheets/styles.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "HeW1");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IRANSansWeb_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IRANSansWeb.eot */ "JZUD");
/* harmony import */ var _IRANSansWeb_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../IRANSansWeb.woff2 */ "FKbo");
/* harmony import */ var _IRANSansWeb_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IRANSansWeb.woff */ "yPfx");
/* harmony import */ var _IRANSansMobile_FaNum_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../IRANSansMobile(FaNum).ttf */ "PwZg");
/* harmony import */ var _images_externalLink_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/externalLink.svg */ "Y9+T");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_IRANSansWeb_eot__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_IRANSansWeb_eot__WEBPACK_IMPORTED_MODULE_2__["default"], { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_IRANSansWeb_woff2__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_IRANSansWeb_woff__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_IRANSansMobile_FaNum_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_externalLink_svg__WEBPACK_IMPORTED_MODULE_6__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n    margin: 0;\r\n    font-family: IRANSans!important;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    height: 100%;\r\n    direction: rtl;\r\n}\r\nhtml{\r\n     font-family: IRANSans;\r\n}\r\n@font-face {\r\n    font-family: IRANSans;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\");\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('truetype');\r\n    /* font-display: fallback */\r\n}\r\n#root,\r\n.container {\r\n    margin: auto;\r\n    height: 100%;\r\n}\r\n.container {\r\n    max-width: 1600px;\r\n    padding: 0;\r\n}\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n::placeholder {\r\n    font-family: IRANSans;\r\n}\r\ncode {\r\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\r\n}\r\n.main {\r\n    margin-top: 50px;\r\n    font-size: 14px;\r\n}\r\n.navbar {\r\n    height: 50px;\r\n    padding: 10px !important;\r\n}\r\nheader {\r\n    position: fixed;\r\n    width: auto;\r\n    height: 50px;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    background-color: #e43535;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    text-align: right;\r\n}\r\nheader .container {\r\n    position: relative;\r\n    background-color: #e43535;\r\n}\r\nheader .container svg {\r\n    margin-top: 16px;\r\n    cursor: pointer;\r\n    margin-right: 60px;\r\n    z-index: 5;\r\n    float: right;\r\n}\r\nfooter {\r\n    position: fixed;\r\n    height: 40px;\r\n    background-color: grey;\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.searchField {\r\n    display: block;\r\n    width: calc(100% - 700px);\r\n    height: 30px;\r\n    color: white;\r\n    border: 1px solid white;\r\n    background-color: #e43535;\r\n    outline: unset;\r\n    padding: 0 10px 4px;\r\n    position: absolute;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n\r\n}\r\n.logo{\r\n    margin-top: 16px;\r\n    cursor: pointer;\r\n    margin-right: 60px;\r\n    z-index: 5;\r\n    float: right;\r\n}\r\nmain {\r\n    margin-top: 50px;\r\n    font-size: 14px;\r\n}\r\n.searchField::placeholder {\r\n    color: white;\r\n}\r\n.menu-icon {\r\n    position: absolute;\r\n    top: 13px;\r\n    right: 5px;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    display: block;\r\n    margin: 0;\r\n}\r\n.menu-icon div {\r\n    width: 40px;\r\n    height: 3px;\r\n    background: #fff;\r\n    margin: 4px;\r\n    -webkit-transition: 0.35s ease-in-out;\r\n    transition: 0.35s ease-in-out;\r\n}\r\n.menu-icon.active .line_one {\r\n    transform: translateY(7px) translateX(0) rotate(-45deg);\r\n    -webkit-transform: translateY(7px) translateX(0) rotate(-45deg);\r\n    -moz-transform: translateY(7px) translateX(0) rotate(-45deg);\r\n}\r\n.menu-icon.active .line_two {\r\n    opacity: 0;\r\n}\r\n.menu-icon.active .line_three {\r\n    transform: translateY(-7px) translateX(0) rotate(45deg);\r\n    -webkit-transform: translateY(-7px) translateX(0) rotate(45deg);\r\n    -moz-transform: translateY(-7px) translateX(0) rotate(45deg);\r\n}\r\n.second-level {\r\n    position: absolute;\r\n    z-index: -2;\r\n    width: auto;\r\n    height: auto;\r\n    bottom: 0;\r\n    -webkit-box-shadow: 0 0.4px 3px #b5b1b1;\r\n    box-shadow: 0 0.4px 3px #b5b1b1;\r\n    visibility: hidden;\r\n    background-color: white;\r\n    -webkit-transition: 0.4s ease-in-out 150ms;\r\n    transition: 0.4s ease-in-out 150ms;\r\n    left: 2px;\r\n    right: 2px;\r\n}\r\nul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\na {\r\n    text-decoration: unset!important;\r\n    color: black;\r\n}\r\n.second-level.openMenu {\r\n    visibility: visible;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n}\r\n.catLi {\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 14px;\r\n    margin-top: 1px;\r\n    padding: 5px 20px 0 0;\r\n    cursor: default;\r\n}\r\n.cat ul {\r\n    position: absolute;\r\n    top: 32px;\r\n    right: 200px;\r\n    width: calc(100% - 200px);\r\n    background-color: white;\r\n    display: none;\r\n}\r\n.catLi:hover {\r\n    background-color: #e43535;\r\n    color: white;\r\n}\r\n.catLi:hover ul {\r\n    display: block;\r\n    bottom: 0;\r\n}\r\n.cat ul li {\r\n    width: calc(100% / 5);\r\n    height: 30px;\r\n    color: black;\r\n    padding: 7px 15px 5px;\r\n    float: right;\r\n    position: relative;\r\n}\r\n.cat ul li::before {\r\n    content: \"\";\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #e43535;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n.mapBar {\r\n    width: 100%;\r\n    height: 30px;\r\n    border-bottom: 1px solid #ebebeb;\r\n}\r\n.mapBar ul {\r\n    width: fit-content;\r\n    height: 100%;\r\n    padding: 0 10px;\r\n}\r\n.mapBar ul li {\r\n    width: auto;\r\n    float: right;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 0 0 0 10px;\r\n    position: relative;\r\n}\r\n.mapBar ul li a {\r\n    margin-left: 10px;\r\n}\r\n.activeR {\r\n    color: #e43535;\r\n}\r\n.login,\r\n.share {\r\n    position: absolute;\r\n    left: 0;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.share {\r\n    top: 0;\r\n    cursor: pointer;\r\n}\r\n.login a {\r\n    color: white;\r\n}\r\n.mapBar .container {\r\n    position: relative;\r\n}\r\n.mainSection {\r\n    width: 78%;\r\n    height: 100%;\r\n    float: right;\r\n    background-color:white;\r\n}\r\n.sideSection {\r\n    width: 22%;\r\n    height: 100%;\r\n    float: left;\r\n    background-color: white;\r\n    padding: 20px 10px 0;\r\n}\r\n.titleSide {\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: #f8f8f8;\r\n    color: #6f6f6f;\r\n    text-align: right;\r\n    display: flex;\r\n    padding-right: 10px;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n.tagsList li {\r\n    text-align: right;\r\n    height: 30px;\r\n    padding-right: 10px;\r\n    \r\n    text-indent: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 13px;\r\n    cursor: pointer;\r\n    width: fit-content;\r\n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat right 1px top 9px;\r\n}\r\n.tagsList li:hover {\r\n    color: #e43535;\r\n}\r\n.city{\r\n    text-align: right;\r\n}\r\n .swiper-container {\r\n      width:calc(100% - 40px);\r\n    \r\n      height: 100%;\r\n  \r\n    }\r\n\r\n    .swiper-slide {\r\n      text-align: center;\r\n      width: auto;\r\ncolor: white;\r\n      /* Center slide text vertically */\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: -webkit-flex;\r\n      display: flex;\r\n      -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n      -webkit-justify-content: center;\r\n      justify-content: center;\r\n      -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n      -webkit-align-items: center;\r\n      align-items: center;\r\n      cursor: pointer;\r\n      padding: 0 10px;\r\n    }\r\n    .swiper-slide:hover{\r\n        background-color:rgba(255, 255, 255, 0.5)\r\n        \r\n    }\r\n.stateBar{\r\n    width: auto;\r\n    height: 30px;\r\nbackground: linear-gradient(to right, #ffb03d, #e43535);\r\n    position: relative;\r\n    margin: 20px 10px 0px 10px;\r\n}\r\n.prev,\r\n.next{\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 100%;\r\n    top: 0;\r\n    z-index: 9;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.prev{\r\n    right: 0;\r\n}\r\n.next:focus,\r\n.prev:focus{\r\n    outline: none;\r\n}\r\n.next{\r\n    left: 0;\r\n}\r\n.swiper-button-disabled{\r\n    display: none;\r\n}\r\n.swiperContainer{\r\n    position: relative;\r\n    height: 100%;\r\n    width: calc(100% - 75px);\r\n    float: left;\r\n\r\n}\r\n.state{\r\n    width: 75px;\r\n    height: 100%;\r\n    float: right;\r\n    text-align: center;\r\n    color: white;\r\n    border-left: 1px solid white;\r\n    display: flex;\r\n    align-items: center;\r\n  justify-content: center;\r\n}\r\n.filterBtn button{\r\n    float: right;\r\n    border: none;\r\n    text-align: right;\r\n   width: 100px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    height: 30px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    transition: all .4s ease-in-out;\r\n    -webkit-transition: all .4s ease-in-out;\r\n    -moz-transition: all .4s ease-in-out;\r\n    -ms-transition: all .4s ease-in-out;\r\n    -o-transition: all .4s ease-in-out;\r\n}\r\n.filterBtn{\r\n        position: relative;\r\n    height: 100%;\r\n    float: right;\r\n    width: 100%;\r\n}\r\n.filterBtn .underline {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0px;\r\n    width: 50px;\r\n    height: 2px;\r\n    background: #4cb050;\r\n    transition: all .4s ease-in-out;\r\n    -webkit-transition: all .4s ease-in-out;\r\n    -moz-transition: all .4s ease-in-out;\r\n    -ms-transition: all .4s ease-in-out;\r\n    -o-transition: all .4s ease-in-out;\r\n    z-index: 9;\r\n}\r\n.filterBtn button:nth-child(1).is-current~.underline {\r\n    right: 0;\r\n}\r\n.filterBtn button:nth-child(2).is-current~.underline {\r\n    right: 20%;\r\n}\r\n.filterBtn button:nth-child(3).is-current~.underline {\r\n    right: 40%;\r\n}\r\n.filterBtn button:nth-child(4).is-current~.underline {\r\n    right: 60%;\r\n}\r\n.filterBtn button:nth-child(5).is-current~.underline {\r\n    right: 80%;\r\n}\r\n\r\n.filterBtn button:nth-child(6).is-current~.underline {\r\n    right: 100%;\r\n}\r\n.listingItems{\r\n    border: 0 solid #ebebeb;\r\n    border-width: 1px 1px 0px 0px;\r\n    float: right;\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n.listingItems li{\r\n\r\n    width: calc(100% / 4);\r\n    height: auto;\r\n    background-color: white;\r\n    text-align: center;\r\n    float: right;\r\n    padding: 25px 0px 15px 0px;\r\n    position: relative;\r\n\r\n}\r\n\r\n.itemDes img{\r\n    width: 220px;\r\n    height: 140px;\r\n}\r\n.adsName{\r\n    text-align: right;\r\n    font-size: 14px;\r\n    width: 220px;\r\n\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 5px;\r\n}\r\n.itemDetails{\r\n    width: auto;\r\n    height: auto;\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: ease-in;\r\n    transition: box-shadow .15s cubic-bezier(.4, 0, .2, 1),\r\n     -webkit-box-shadow .15s cubic-bezier(.4, 0, .2, 1);\r\n}\r\n.listingItems li:hover .itemDetails{\r\n    opacity: 1;\r\n    visibility: visible;\r\n    z-index: 9;\r\n    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2)\r\n    , 0 3px 4px 0 rgba(0, 0, 0, .14),\r\n     0 1px 8px 0 rgba(0, 0, 0, .12);\r\n}\r\n.listingItems li::after {\r\n    background: #ebebeb;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0;\r\n    width: 1px;\r\n    content: \"\";\r\n}\r\n.listingItems li::before{\r\n    background: #ebebeb;\r\n    position: absolute;\r\n\r\n    left: 0px;\r\n    bottom: 0;\r\n    height: 1px;\r\n    content: \"\";\r\n    width: 100%;\r\n}\r\n.filterBtn p{\r\n    float: right;\r\n    width: auto;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    padding: 5px 10px;\r\n}\r\n.rowcode_star{\r\n    width: 220px;\r\n    height: 16px;\r\n    margin: auto;\r\n     margin-top: 5px;\r\n}\r\n.codeBox{\r\n    height: 16px;\r\n    width: 60px;\r\n    background-color: #e43535;\r\n    color: white;\r\n    float: right;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\r\n.squreBox {\r\n    width: 16px;\r\n    height: 16px;\r\n     background-color: #e43535;\r\n    color: white;\r\n    float: left;\r\n    font-size: 13px;\r\n    text-align: center;\r\n}", "",{"version":3,"sources":["webpack://src/stylesheets/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,+BAA+B;IAC/B,mCAAmC;IACnC,kCAAkC;IAClC,YAAY;IACZ,cAAc;AAClB;AACA;KACK,qBAAqB;AAC1B;AACA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,4CAA8B;IAC9B,wEAAiE;IACjE,4DAAgD;IAChD,2DAA8C;IAC9C,+DAA2D;IAC3D,2BAA2B;AAC/B;AACA;;IAEI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,8BAA8B;IAC9B,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,+EAA+E;AACnF;AACA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,MAAM;IACN,QAAQ;IACR,OAAO;IACP,YAAY;IACZ,yBAAyB;IACzB,mCAAmC;IACnC,2BAA2B;IAC3B,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,YAAY;AAChB;AACA;IACI,eAAe;IACf,YAAY;IACZ,sBAAsB;IACtB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,SAAS;AACb;AACA;IACI,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;;AAEb;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,cAAc;IACd,SAAS;AACb;AACA;IACI,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,WAAW;IACX,qCAAqC;IACrC,6BAA6B;AACjC;AACA;IACI,uDAAuD;IACvD,+DAA+D;IAC/D,4DAA4D;AAChE;AACA;IACI,UAAU;AACd;AACA;IACI,uDAAuD;IACvD,+DAA+D;IAC/D,4DAA4D;AAChE;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,YAAY;IACZ,SAAS;IACT,uCAAuC;IACvC,+BAA+B;IAC/B,kBAAkB;IAClB,uBAAuB;IACvB,0CAA0C;IAC1C,kCAAkC;IAClC,SAAS;IACT,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,UAAU;IACV,SAAS;AACb;AACA;IACI,gCAAgC;IAChC,YAAY;AAChB;AACA;IACI,mBAAmB;IACnB,0CAA0C;IAC1C,kCAAkC;AACtC;AACA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,qBAAqB;IACrB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,yBAAyB;IACzB,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,cAAc;IACd,SAAS;AACb;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,UAAU;IACV,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,SAAS;IACT,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;IACZ,gCAAgC;AACpC;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;;IAEI,kBAAkB;IAClB,OAAO;IACP,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,MAAM;IACN,eAAe;AACnB;AACA;IACI,YAAY;AAChB;A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","sourcesContent":["body {\r\n    margin: 0;\r\n    font-family: IRANSans!important;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    height: 100%;\r\n    direction: rtl;\r\n}\r\nhtml{\r\n     font-family: IRANSans;\r\n}\r\n@font-face {\r\n    font-family: IRANSans;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: url(\"../IRANSansWeb.eot\");\r\n    src: url(\"../IRANSansWeb.eot?#iefix\") format(\"embedded-opentype\");\r\n    src: url(\"../IRANSansWeb.woff2\") format(\"woff2\");\r\n    src: url(\"../IRANSansWeb.woff\") format(\"woff\");\r\n    src: url(\"../IRANSansMobile(FaNum).ttf\") format('truetype');\r\n    /* font-display: fallback */\r\n}\r\n#root,\r\n.container {\r\n    margin: auto;\r\n    height: 100%;\r\n}\r\n.container {\r\n    max-width: 1600px;\r\n    padding: 0;\r\n}\r\n* {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n::placeholder {\r\n    font-family: IRANSans;\r\n}\r\ncode {\r\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\r\n}\r\n.main {\r\n    margin-top: 50px;\r\n    font-size: 14px;\r\n}\r\n.navbar {\r\n    height: 50px;\r\n    padding: 10px !important;\r\n}\r\nheader {\r\n    position: fixed;\r\n    width: auto;\r\n    height: 50px;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    background-color: #e43535;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    text-align: right;\r\n}\r\nheader .container {\r\n    position: relative;\r\n    background-color: #e43535;\r\n}\r\nheader .container svg {\r\n    margin-top: 16px;\r\n    cursor: pointer;\r\n    margin-right: 60px;\r\n    z-index: 5;\r\n    float: right;\r\n}\r\nfooter {\r\n    position: fixed;\r\n    height: 40px;\r\n    background-color: grey;\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.searchField {\r\n    display: block;\r\n    width: calc(100% - 700px);\r\n    height: 30px;\r\n    color: white;\r\n    border: 1px solid white;\r\n    background-color: #e43535;\r\n    outline: unset;\r\n    padding: 0 10px 4px;\r\n    position: absolute;\r\n    margin: auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n\r\n}\r\n.logo{\r\n    margin-top: 16px;\r\n    cursor: pointer;\r\n    margin-right: 60px;\r\n    z-index: 5;\r\n    float: right;\r\n}\r\nmain {\r\n    margin-top: 50px;\r\n    font-size: 14px;\r\n}\r\n.searchField::placeholder {\r\n    color: white;\r\n}\r\n.menu-icon {\r\n    position: absolute;\r\n    top: 13px;\r\n    right: 5px;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    display: block;\r\n    margin: 0;\r\n}\r\n.menu-icon div {\r\n    width: 40px;\r\n    height: 3px;\r\n    background: #fff;\r\n    margin: 4px;\r\n    -webkit-transition: 0.35s ease-in-out;\r\n    transition: 0.35s ease-in-out;\r\n}\r\n.menu-icon.active .line_one {\r\n    transform: translateY(7px) translateX(0) rotate(-45deg);\r\n    -webkit-transform: translateY(7px) translateX(0) rotate(-45deg);\r\n    -moz-transform: translateY(7px) translateX(0) rotate(-45deg);\r\n}\r\n.menu-icon.active .line_two {\r\n    opacity: 0;\r\n}\r\n.menu-icon.active .line_three {\r\n    transform: translateY(-7px) translateX(0) rotate(45deg);\r\n    -webkit-transform: translateY(-7px) translateX(0) rotate(45deg);\r\n    -moz-transform: translateY(-7px) translateX(0) rotate(45deg);\r\n}\r\n.second-level {\r\n    position: absolute;\r\n    z-index: -2;\r\n    width: auto;\r\n    height: auto;\r\n    bottom: 0;\r\n    -webkit-box-shadow: 0 0.4px 3px #b5b1b1;\r\n    box-shadow: 0 0.4px 3px #b5b1b1;\r\n    visibility: hidden;\r\n    background-color: white;\r\n    -webkit-transition: 0.4s ease-in-out 150ms;\r\n    transition: 0.4s ease-in-out 150ms;\r\n    left: 2px;\r\n    right: 2px;\r\n}\r\nul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\na {\r\n    text-decoration: unset!important;\r\n    color: black;\r\n}\r\n.second-level.openMenu {\r\n    visibility: visible;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n}\r\n.catLi {\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 14px;\r\n    margin-top: 1px;\r\n    padding: 5px 20px 0 0;\r\n    cursor: default;\r\n}\r\n.cat ul {\r\n    position: absolute;\r\n    top: 32px;\r\n    right: 200px;\r\n    width: calc(100% - 200px);\r\n    background-color: white;\r\n    display: none;\r\n}\r\n.catLi:hover {\r\n    background-color: #e43535;\r\n    color: white;\r\n}\r\n.catLi:hover ul {\r\n    display: block;\r\n    bottom: 0;\r\n}\r\n.cat ul li {\r\n    width: calc(100% / 5);\r\n    height: 30px;\r\n    color: black;\r\n    padding: 7px 15px 5px;\r\n    float: right;\r\n    position: relative;\r\n}\r\n.cat ul li::before {\r\n    content: \"\";\r\n    width: 5px;\r\n    height: 5px;\r\n    background-color: #e43535;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n.mapBar {\r\n    width: 100%;\r\n    height: 30px;\r\n    border-bottom: 1px solid #ebebeb;\r\n}\r\n.mapBar ul {\r\n    width: fit-content;\r\n    height: 100%;\r\n    padding: 0 10px;\r\n}\r\n.mapBar ul li {\r\n    width: auto;\r\n    float: right;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 0 0 0 10px;\r\n    position: relative;\r\n}\r\n.mapBar ul li a {\r\n    margin-left: 10px;\r\n}\r\n.activeR {\r\n    color: #e43535;\r\n}\r\n.login,\r\n.share {\r\n    position: absolute;\r\n    left: 0;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.share {\r\n    top: 0;\r\n    cursor: pointer;\r\n}\r\n.login a {\r\n    color: white;\r\n}\r\n.mapBar .container {\r\n    position: relative;\r\n}\r\n.mainSection {\r\n    width: 78%;\r\n    height: 100%;\r\n    float: right;\r\n    background-color:white;\r\n}\r\n.sideSection {\r\n    width: 22%;\r\n    height: 100%;\r\n    float: left;\r\n    background-color: white;\r\n    padding: 20px 10px 0;\r\n}\r\n.titleSide {\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: #f8f8f8;\r\n    color: #6f6f6f;\r\n    text-align: right;\r\n    display: flex;\r\n    padding-right: 10px;\r\n    align-items: center;\r\n    margin-bottom: 10px;\r\n}\r\n.tagsList li {\r\n    text-align: right;\r\n    height: 30px;\r\n    padding-right: 10px;\r\n    \r\n    text-indent: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 13px;\r\n    cursor: pointer;\r\n    width: fit-content;\r\n    background:url('../images/externalLink.svg') no-repeat right 1px top 9px;\r\n}\r\n.tagsList li:hover {\r\n    color: #e43535;\r\n}\r\n.city{\r\n    text-align: right;\r\n}\r\n .swiper-container {\r\n      width:calc(100% - 40px);\r\n    \r\n      height: 100%;\r\n  \r\n    }\r\n\r\n    .swiper-slide {\r\n      text-align: center;\r\n      width: auto;\r\ncolor: white;\r\n      /* Center slide text vertically */\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: -webkit-flex;\r\n      display: flex;\r\n      -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n      -webkit-justify-content: center;\r\n      justify-content: center;\r\n      -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n      -webkit-align-items: center;\r\n      align-items: center;\r\n      cursor: pointer;\r\n      padding: 0 10px;\r\n    }\r\n    .swiper-slide:hover{\r\n        background-color:rgba(255, 255, 255, 0.5)\r\n        \r\n    }\r\n.stateBar{\r\n    width: auto;\r\n    height: 30px;\r\nbackground: linear-gradient(to right, #ffb03d, #e43535);\r\n    position: relative;\r\n    margin: 20px 10px 0px 10px;\r\n}\r\n.prev,\r\n.next{\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 100%;\r\n    top: 0;\r\n    z-index: 9;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.prev{\r\n    right: 0;\r\n}\r\n.next:focus,\r\n.prev:focus{\r\n    outline: none;\r\n}\r\n.next{\r\n    left: 0;\r\n}\r\n.swiper-button-disabled{\r\n    display: none;\r\n}\r\n.swiperContainer{\r\n    position: relative;\r\n    height: 100%;\r\n    width: calc(100% - 75px);\r\n    float: left;\r\n\r\n}\r\n.state{\r\n    width: 75px;\r\n    height: 100%;\r\n    float: right;\r\n    text-align: center;\r\n    color: white;\r\n    border-left: 1px solid white;\r\n    display: flex;\r\n    align-items: center;\r\n  justify-content: center;\r\n}\r\n.filterBtn button{\r\n    float: right;\r\n    border: none;\r\n    text-align: right;\r\n   width: 100px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    height: 30px;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    transition: all .4s ease-in-out;\r\n    -webkit-transition: all .4s ease-in-out;\r\n    -moz-transition: all .4s ease-in-out;\r\n    -ms-transition: all .4s ease-in-out;\r\n    -o-transition: all .4s ease-in-out;\r\n}\r\n.filterBtn{\r\n        position: relative;\r\n    height: 100%;\r\n    float: right;\r\n    width: 100%;\r\n}\r\n.filterBtn .underline {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0px;\r\n    width: 50px;\r\n    height: 2px;\r\n    background: #4cb050;\r\n    transition: all .4s ease-in-out;\r\n    -webkit-transition: all .4s ease-in-out;\r\n    -moz-transition: all .4s ease-in-out;\r\n    -ms-transition: all .4s ease-in-out;\r\n    -o-transition: all .4s ease-in-out;\r\n    z-index: 9;\r\n}\r\n.filterBtn button:nth-child(1).is-current~.underline {\r\n    right: 0;\r\n}\r\n.filterBtn button:nth-child(2).is-current~.underline {\r\n    right: 20%;\r\n}\r\n.filterBtn button:nth-child(3).is-current~.underline {\r\n    right: 40%;\r\n}\r\n.filterBtn button:nth-child(4).is-current~.underline {\r\n    right: 60%;\r\n}\r\n.filterBtn button:nth-child(5).is-current~.underline {\r\n    right: 80%;\r\n}\r\n\r\n.filterBtn button:nth-child(6).is-current~.underline {\r\n    right: 100%;\r\n}\r\n.listingItems{\r\n    border: 0 solid #ebebeb;\r\n    border-width: 1px 1px 0px 0px;\r\n    float: right;\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n.listingItems li{\r\n\r\n    width: calc(100% / 4);\r\n    height: auto;\r\n    background-color: white;\r\n    text-align: center;\r\n    float: right;\r\n    padding: 25px 0px 15px 0px;\r\n    position: relative;\r\n\r\n}\r\n\r\n.itemDes img{\r\n    width: 220px;\r\n    height: 140px;\r\n}\r\n.adsName{\r\n    text-align: right;\r\n    font-size: 14px;\r\n    width: 220px;\r\n\r\n    height: auto;\r\n    margin: auto;\r\n    margin-top: 5px;\r\n}\r\n.itemDetails{\r\n    width: auto;\r\n    height: auto;\r\n    background-color: white;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: ease-in;\r\n    transition: box-shadow .15s cubic-bezier(.4, 0, .2, 1),\r\n     -webkit-box-shadow .15s cubic-bezier(.4, 0, .2, 1);\r\n}\r\n.listingItems li:hover .itemDetails{\r\n    opacity: 1;\r\n    visibility: visible;\r\n    z-index: 9;\r\n    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2)\r\n    , 0 3px 4px 0 rgba(0, 0, 0, .14),\r\n     0 1px 8px 0 rgba(0, 0, 0, .12);\r\n}\r\n.listingItems li::after {\r\n    background: #ebebeb;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0;\r\n    width: 1px;\r\n    content: \"\";\r\n}\r\n.listingItems li::before{\r\n    background: #ebebeb;\r\n    position: absolute;\r\n\r\n    left: 0px;\r\n    bottom: 0;\r\n    height: 1px;\r\n    content: \"\";\r\n    width: 100%;\r\n}\r\n.filterBtn p{\r\n    float: right;\r\n    width: auto;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    padding: 5px 10px;\r\n}\r\n.rowcode_star{\r\n    width: 220px;\r\n    height: 16px;\r\n    margin: auto;\r\n     margin-top: 5px;\r\n}\r\n.codeBox{\r\n    height: 16px;\r\n    width: 60px;\r\n    background-color: #e43535;\r\n    color: white;\r\n    float: right;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    font-size: 13px;\r\n    text-align: center;\r\n}\r\n.squreBox {\r\n    width: 16px;\r\n    height: 16px;\r\n     background-color: #e43535;\r\n    color: white;\r\n    float: left;\r\n    font-size: 13px;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "sFFT":
/*!************************************!*\
  !*** ./src/stylesheets/styles.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "qu5N");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "i8i4"));

var _header = _interopRequireDefault(__webpack_require__(/*! ./components/header */ "LbRr"));

var _main = _interopRequireDefault(__webpack_require__(/*! ./components/main */ "Vn2l"));

__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "q4sD");

__webpack_require__(/*! ./stylesheets/styles.css */ "sFFT");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_header["default"], null));
    }
  }]);

  return Header;
}(_react["default"].Component);

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Header, null), document.body.appendChild(document.createElement('header')));

var MainD = /*#__PURE__*/function (_React$Component2) {
  _inherits(MainD, _React$Component2);

  var _super2 = _createSuper(MainD);

  function MainD() {
    _classCallCheck(this, MainD);

    return _super2.apply(this, arguments);
  }

  _createClass(MainD, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_main["default"], null));
    }
  }]);

  return MainD;
}(_react["default"].Component);

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(MainD, null), document.body.appendChild(document.createElement('main')));

/***/ }),

/***/ "yPfx":
/*!******************************!*\
  !*** ./src/IRANSansWeb.woff ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "56ae948d2fcc0d8bf4097031a0406e48.woff");

/***/ }),

/***/ "zXGV":
/*!************************************!*\
  !*** ./src/components/stateBar.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "q1tI"));

var _city = _interopRequireDefault(__webpack_require__(/*! ../data/city.json */ "puS7"));

var _swiper = _interopRequireWildcard(__webpack_require__(/*! swiper */ "TaHA"));

var _react2 = __webpack_require__(/*! swiper/react */ "V6TM");

__webpack_require__(/*! swiper/swiper-bundle.css */ "u+OR");

var _md = __webpack_require__(/*! react-icons/md */ "NIcq");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
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
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

_swiper["default"].use([_swiper.A11y, _swiper.Navigation]);

var State = /*#__PURE__*/function (_Component) {
  _inherits(State, _Component);

  var _super = _createSuper(State);

  function State() {
    _classCallCheck(this, State);

    return _super.apply(this, arguments);
  }

  _createClass(State, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "stateBar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "state"
      }, "\u0627\u0633\u062A\u0627\u0646"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "swiperContainer"
      }, /*#__PURE__*/_react["default"].createElement(_react2.Swiper, {
        spaceBetween: 0,
        slidesPerView: 'auto',
        onSlideChange: function onSlideChange(swiper) {
          swiper.update();
        },
        navigation: {
          prevEl: '.prev',
          nextEl: '.next'
        }
      }, _city["default"].City.map(function (city, index) {
        return /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, {
          key: index
        }, city.Title);
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "prev"
      }, " ", /*#__PURE__*/_react["default"].createElement(_md.MdKeyboardArrowRight, {
        color: "white",
        size: "20"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "next"
      }, " ", /*#__PURE__*/_react["default"].createElement(_md.MdKeyboardArrowLeft, {
        color: "white",
        size: "20"
      }), " ")));
    }
  }]);

  return State;
}(_react.Component);

exports["default"] = State;

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ29JcmFuZ2FuLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSVJBTlNhbnNXZWIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lSQU5TYW5zV2ViLmVvdCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9JUkFOU2Fuc01vYmlsZShGYU51bSkudHRmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZXh0ZXJuYWxMaW5rLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy9zdHlsZXMuY3NzPzJiNzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JUkFOU2Fuc1dlYi53b2ZmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0YXRlQmFyLmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJMb2dvIiwiQ29tcG9uZW50IiwidGFncyIsImRhdGEiLCJUYWciLCJzIiwiY29uc29sZSIsImFkcyIsIkZJTFRFUl9ERUZTIiwiY29tcGFueSIsIkJCIiwiYWN0aXZlSWR4Iiwic2VsZWN0ZWRCdXR0b24iLCJsaXN0IiwiZmlsdGVyS2V5IiwiZmlsdGVyZWRMaXN0IiwidW5pcXVlSWQiLCJNYWluIiwicHJvcHMiLCJvbkhpZGUiLCJSZWFjdCIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIkFwcCIsIk1lbnUiLCJpc0hvdmVyZWQiLCJtZW51QWN0aXZlIiwibWVudU9wZW4iLCJoYW5kbGVNZW51SG92ZXIiLCJpbmRleCIsImNhdCIsImNhdGVnb3J5SXRlbXMiLCJIZWFkZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiTWFpbkQiLCJTd2lwZXJDb3JlIiwiQTExeSIsIk5hdmlnYXRpb24iLCJTdGF0ZSIsInN3aXBlciIsInByZXZFbCIsIm5leHRFbCIsImNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0U7O0FBR0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUNMLDBCQUNJLGdDQUFDLE9BQUQsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksZ0NBQUMsTUFBRCxTQUFDLENBQUQsRUFESixJQUNJLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLFdBQUcsRUFBRUMsYUFBVixTQUFVQSxDQUFWO0FBQWdCLFdBQUcsRUFBQztBQUFwQixRQURKLENBRkosZUFLSTtBQUNJLGlCQUFTLEVBRGI7QUFFSSxZQUFJLEVBRlI7QUFHSSxtQkFBVyxFQUhmO0FBSUksc0JBQVc7QUFKZixRQUxKLGVBVUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxZQUFJLEVBQUM7QUFBUixTQWJoQiwwQkFhZ0IsQ0FESixDQVZK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LEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxjQUFjLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFh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cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY4ZjFlYzE4NTQ1ZTE3ZmZlNTZkMzFmZGQ4MWZiZTY1LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTkyYmQxN2UzMjExZDZiMjliOWVkMGE4MzRkOGIwZS53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1YzdkNDBiYjJmNGNjYTRjNGNmN2FkNzQ2NmMzNzkzZS5lb3RcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL2ltYWdlcy9sb2dvSXJhbmdhbi5zdmcnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0xvZ299IGFsdD1cImxvZ29cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaEZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItis2LPYqtis2YhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwi2KzYs9iq2KzZiFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiPtmI2LHZiNivPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvdGFnLmpzb25cIjtcclxuXHJcbmNvbnN0IHRhZ3MgPSBkYXRhLnRhZ3M7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhZ3NMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZ3MubWFwKHMgPT4gKDxsaSBrZXk9e3N9PntzfTwvbGk+KSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ2ZmRkNGE3YTM1MTI2MGM2ZTA4MTFkNjU1NjU1ODU3LnR0ZlwiOyIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9hZHMuanNvblwiXHJcblxyXG5jb25zb2xlLmNsZWFyKCk7XHJcbmNvbnN0IGFkcyA9IGRhdGEuYWRzO1xyXG5cclxuXHJcblxyXG5jb25zdCBGSUxURVJfREVGUyA9IHtcclxuICAgICdOb25lJzogY29tcGFueSA9PiBjb21wYW55LFxyXG4gICAgJ01vc3RMaWtlZCc6IGNvbXBhbnkgPT4gY29tcGFueS5Nb3N0TGlrZWQsXHJcbiAgICAnTW9zdHZpZXdlZCc6IGNvbXBhbnkgPT4gY29tcGFueS5Nb3N0dmlld2VkLFxyXG4gICAgJ09mZic6IGNvbXBhbnkgPT4gY29tcGFueS5vZmYsXHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCQiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBhY3RpdmVJZHg6IDBcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGlzdDogYWRzLFxyXG4gICAgICAgICAgICBmaWx0ZXJLZXk6ICdOb25lJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRCdXR0b246IG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblNlbGVjdGVkID0gc2VsZWN0ZWRCdXR0b24gPT4gZXYgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEJ1dHRvbiB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGlzdCwgZmlsdGVyS2V5IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGxpc3QuZmlsdGVyKEZJTFRFUl9ERUZTW2ZpbHRlcktleV0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJCdG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4gINmF2LHYqtio4oCM2LPYp9iy24wg2KjYsSDYp9iz2KfYsyA6IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyS2V5OiAnTm9uZScgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPtqG2YrYr9mF2KfZhiDYqti12KfYr9mB2Yo8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJLZXk6ICdNb3N0TGlrZWQnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID7Zhdit2KjZiNio4oCM2KrYsdmK2YY8L2J1dHRvbj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyS2V5OiAnTW9zdHZpZXdlZCcgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPtm+2LHZhti42LHYqtix2YrZhjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJLZXk6ICdPZmYnIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgID7Yqtiu2YHZitmB4oCM2K/Yp9ixPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdGluZ0l0ZW1zXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZExpc3QubWFwKGNvbXBhbnkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y29tcGFueS51bmlxdWVJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1EZXRhaWxzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1EZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb21wYW55LmltZ30gYWx0PXtjb21wYW55LnVuaXF1ZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRzTmFtZVwiPntjb21wYW55Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3djb2RlX3N0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlQm94XCI+e2NvbXBhbnkuY29kZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVyZUJveFwiPntjb21wYW55LnN0YXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmlBcnJvd0xlZnRTTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbC5qcyc7XHJcbmltcG9ydCBTdGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRlQmFyLmpzJztcclxuaW1wb3J0IFRhZyBmcm9tICcuLi9jb21wb25lbnRzL3RhZy5qcyc7XHJcbmltcG9ydCBCQiBmcm9tICcuLi9jb21wb25lbnRzL2ZpbHRlci5qcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwQmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFjdGl2ZVJcIiBocmVmPVwiLyNcIj7Yp9uM2LHYp9mG2q/Yp9mGPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaUFycm93TGVmdFNMaW5lIHNpemU9ezEwfSBjb2xvcj1cImdyZXlcIiAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCI+2K7ZiNiv2LHZiDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5TZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJCIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwic2lkZVNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVNpZGVcIj7aqdmE24zYr9mI2KfamNmHPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxNWM0Mzc0OTVhN2M5NGFjYWU1ZmNkNDRjMWEzZDU3ZC5zdmdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xyXG5pbXBvcnQgeyBSaVNoYXJlTGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuZnVuY3Rpb24gTXlWZXJ0aWNhbGx5Q2VudGVyZWRNb2RhbChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXHJcbiAgICAgICAgICAgIGNlbnRlcmVkPVwiY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj1cImNsb3NlQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgINin2LTYqtix2KfaqSDar9iw2KfYsduMXHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICDYqNinINin2LPYqtmB2KfYr9mHINin2LIg2LHZiNi04oCM2YfYp9uMINiy24zYsSDYp9uM2YYg2LXZgdit2Ycg2LHYpyDYqNmHINin2LTYqtix2KfaqSDYqNqv2LDYp9ix24zYry5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNsb3NlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG59XHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+IDwgZGl2IGNsYXNzTmFtZT1cInNoYXJlXCIgb25DbGljaz17XHJcbiAgICAgICAgICAgICgpID0+IHNldE1vZGFsU2hvdyh0cnVlKVxyXG4gICAgICAgIH0gPiA8UmlTaGFyZUxpbmUgc2l6ZT17MjB9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxNeVZlcnRpY2FsbHlDZW50ZXJlZE1vZGFsIHNob3c9e21vZGFsU2hvd30gb25IaWRlPXsoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvY2F0YWdvcnkuanNvblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzSG92ZXJlZDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTWVudUhvdmVyID0gdGhpc1xyXG4gICAgICAgICAgICAuaGFuZGxlTWVudUhvdmVyXHJcbiAgICAgICAgICAgIC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVNZW51SG92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzSG92ZXJlZDogIXRoaXMuc3RhdGUuaXNIb3ZlcmVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbWVudUFjdGl2ZSA9IHRoaXMuc3RhdGUuaXNIb3ZlcmVkXHJcbiAgICAgICAgICAgID8gXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbWVudU9wZW4gPSB0aGlzLnN0YXRlLmlzSG92ZXJlZFxyXG4gICAgICAgICAgICA/IFwib3Blbk1lbnVcIlxyXG4gICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJtZW51LWljb24gXCIgKyBtZW51QWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNZW51SG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1lbnVIb3Zlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lX29uZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZV90d29cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVfdGhyZWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJzZWNvbmQtbGV2ZWwgXCIgKyBtZW51T3Blbn1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTWVudUhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNZW51SG92ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLkNhdGVnb3J5Lm1hcCgoY2F0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdExpXCI+e2NhdC5UaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD57Y2F0Lkl0ZW1zLm1hcCgoY2F0ZWdvcnlJdGVtcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2NhdGVnb3J5SXRlbXMuTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9JUkFOU2Fuc1dlYi5lb3RcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vSVJBTlNhbnNXZWIud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vSVJBTlNhbnNXZWIud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuLi9JUkFOU2Fuc01vYmlsZShGYU51bSkudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4uL2ltYWdlcy9leHRlcm5hbExpbmsuc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fLCB7IGhhc2g6IFwiPyNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJUkFOU2FucyFpbXBvcnRhbnQ7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpcmVjdGlvbjogcnRsO1xcclxcbn1cXHJcXG5odG1se1xcclxcbiAgICAgZm9udC1mYW1pbHk6IElSQU5TYW5zO1xcclxcbn1cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IElSQU5TYW5zO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICAvKiBmb250LWRpc3BsYXk6IGZhbGxiYWNrICovXFxyXFxufVxcclxcbiNyb290LFxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTYwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IElSQU5TYW5zO1xcclxcbn1cXHJcXG5jb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuLm1haW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcbi5uYXZiYXIge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDM1MzU7XFxyXFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5oZWFkZXIgLmNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0MzUzNTtcXHJcXG59XFxyXFxuaGVhZGVyIC5jb250YWluZXIgc3ZnIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG4uc2VhcmNoRmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzNTM1O1xcclxcbiAgICBvdXRsaW5lOiB1bnNldDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4IDRweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG5cXHJcXG59XFxyXFxuLmxvZ297XFxyXFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcbi5zZWFyY2hGaWVsZDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tZW51LWljb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTNweDtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5tZW51LWljb24gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBtYXJnaW46IDRweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5tZW51LWljb24uYWN0aXZlIC5saW5lX29uZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3cHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKC00NWRlZyk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG4ubWVudS1pY29uLmFjdGl2ZSAubGluZV90d28ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG4ubWVudS1pY29uLmFjdGl2ZSAubGluZV90aHJlZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG4uc2Vjb25kLWxldmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAtMjtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC40cHggM3B4ICNiNWIxYjE7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMC40cHggM3B4ICNiNWIxYjE7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dCAxNTBtcztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dCAxNTBtcztcXHJcXG4gICAgbGVmdDogMnB4O1xcclxcbiAgICByaWdodDogMnB4O1xcclxcbn1cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5zZWNvbmQtbGV2ZWwub3Blbk1lbnUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxyXFxufVxcclxcbi5jYXRMaSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIwcHggMCAwO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5jYXQgdWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzJweDtcXHJcXG4gICAgcmlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNhdExpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0MzUzNTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uY2F0TGk6aG92ZXIgdWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG4uY2F0IHVsIGxpIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogN3B4IDE1cHggNXB4O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmNhdCB1bCBsaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzNTM1O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi5tYXBCYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcXHJcXG59XFxyXFxuLm1hcEJhciB1bCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxufVxcclxcbi5tYXBCYXIgdWwgbGkge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLm1hcEJhciB1bCBsaSBhIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi5hY3RpdmVSIHtcXHJcXG4gICAgY29sb3I6ICNlNDM1MzU7XFxyXFxufVxcclxcbi5sb2dpbixcXHJcXG4uc2hhcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zaGFyZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubG9naW4gYSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1hcEJhciAuY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubWFpblNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogNzglO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLnNpZGVTZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDIyJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwO1xcclxcbn1cXHJcXG4udGl0bGVTaWRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXHJcXG4gICAgY29sb3I6ICM2ZjZmNmY7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4udGFnc0xpc3QgbGkge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBuby1yZXBlYXQgcmlnaHQgMXB4IHRvcCA5cHg7XFxyXFxufVxcclxcbi50YWdzTGlzdCBsaTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZTQzNTM1O1xcclxcbn1cXHJcXG4uY2l0eXtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcbiAuc3dpcGVyLWNvbnRhaW5lciB7XFxyXFxuICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7XFxyXFxuICAgIFxcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zd2lwZXItc2xpZGUge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICB3aWR0aDogYXV0bztcXHJcXG5jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgLyogQ2VudGVyIHNsaWRlIHRleHQgdmVydGljYWxseSAqL1xcclxcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcclxcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3dpcGVyLXNsaWRlOmhvdmVye1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuLnN0YXRlQmFye1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmYjAzZCwgI2U0MzUzNSk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDEwcHggMHB4IDEwcHg7XFxyXFxufVxcclxcbi5wcmV2LFxcclxcbi5uZXh0e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucHJldntcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcbi5uZXh0OmZvY3VzLFxcclxcbi5wcmV2OmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ubmV4dHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuLnN3aXBlci1idXR0b24tZGlzYWJsZWR7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zd2lwZXJDb250YWluZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzVweCk7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcblxcclxcbn1cXHJcXG4uc3RhdGV7XFxyXFxuICAgIHdpZHRoOiA3NXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZpbHRlckJ0biBidXR0b257XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5maWx0ZXJCdG57XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZpbHRlckJ0biAudW5kZXJsaW5lIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRjYjA1MDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcbn1cXHJcXG4uZmlsdGVyQnRuIGJ1dHRvbjpudGgtY2hpbGQoMSkuaXMtY3VycmVudH4udW5kZXJsaW5lIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcbi5maWx0ZXJCdG4gYnV0dG9uOm50aC1jaGlsZCgyKS5pcy1jdXJyZW50fi51bmRlcmxpbmUge1xcclxcbiAgICByaWdodDogMjAlO1xcclxcbn1cXHJcXG4uZmlsdGVyQnRuIGJ1dHRvbjpudGgtY2hpbGQoMykuaXMtY3VycmVudH4udW5kZXJsaW5lIHtcXHJcXG4gICAgcmlnaHQ6IDQwJTtcXHJcXG59XFxyXFxuLmZpbHRlckJ0biBidXR0b246bnRoLWNoaWxkKDQpLmlzLWN1cnJlbnR+LnVuZGVybGluZSB7XFxyXFxuICAgIHJpZ2h0OiA2MCU7XFxyXFxufVxcclxcbi5maWx0ZXJCdG4gYnV0dG9uOm50aC1jaGlsZCg1KS5pcy1jdXJyZW50fi51bmRlcmxpbmUge1xcclxcbiAgICByaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyQnRuIGJ1dHRvbjpudGgtY2hpbGQoNikuaXMtY3VycmVudH4udW5kZXJsaW5lIHtcXHJcXG4gICAgcmlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5saXN0aW5nSXRlbXN7XFxyXFxuICAgIGJvcmRlcjogMCBzb2xpZCAjZWJlYmViO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMHB4IDBweDtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4ubGlzdGluZ0l0ZW1zIGxpe1xcclxcblxcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCk7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nOiAyNXB4IDBweCAxNXB4IDBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbURlcyBpbWd7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNDBweDtcXHJcXG59XFxyXFxuLmFkc05hbWV7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuLml0ZW1EZXRhaWxze1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMTVzIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpLFxcclxcbiAgICAgLXdlYmtpdC1ib3gtc2hhZG93IC4xNXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XFxyXFxufVxcclxcbi5saXN0aW5nSXRlbXMgbGk6aG92ZXIgLml0ZW1EZXRhaWxze1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIC4yKVxcclxcbiAgICAsIDAgM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSxcXHJcXG4gICAgIDAgMXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcXHJcXG59XFxyXFxuLmxpc3RpbmdJdGVtcyBsaTo6YWZ0ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDFweDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxufVxcclxcbi5saXN0aW5nSXRlbXMgbGk6OmJlZm9yZXtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZpbHRlckJ0biBwe1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcbi5yb3djb2RlX3N0YXJ7XFxyXFxuICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcbi5jb2RlQm94e1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzNTM1O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zcXVyZUJveCB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzNTM1O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXNoZWV0cy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7S0FDSyxxQkFBcUI7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUE4QjtJQUM5Qix3RUFBaUU7SUFDakUsNERBQWdEO0lBQ2hELDJEQUE4QztJQUM5QywrREFBMkQ7SUFDM0QsMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtB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O0lBQ1osb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0tBQ1gseUJBQXlCO0lBQzFCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogSVJBTlNhbnMhaW1wb3J0YW50O1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXJlY3Rpb246IHJ0bDtcXHJcXG59XFxyXFxuaHRtbHtcXHJcXG4gICAgIGZvbnQtZmFtaWx5OiBJUkFOU2FucztcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJUkFOU2FucztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vSVJBTlNhbnNXZWIuZW90XFxcIik7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9JUkFOU2Fuc1dlYi5lb3Q/I2llZml4XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vSVJBTlNhbnNXZWIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9JUkFOU2Fuc1dlYi53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuICAgIHNyYzogdXJsKFxcXCIuLi9JUkFOU2Fuc01vYmlsZShGYU51bSkudHRmXFxcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICAvKiBmb250LWRpc3BsYXk6IGZhbGxiYWNrICovXFxyXFxufVxcclxcbiNyb290LFxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTYwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IElSQU5TYW5zO1xcclxcbn1cXHJcXG5jb2RlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuLm1haW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcbi5uYXZiYXIge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDM1MzU7XFxyXFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5oZWFkZXIgLmNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0MzUzNTtcXHJcXG59XFxyXFxuaGVhZGVyIC5jb250YWluZXIgc3ZnIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG4uc2VhcmNoRmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwMHB4KTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzNTM1O1xcclxcbiAgICBvdXRsaW5lOiB1bnNldDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4IDRweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG5cXHJcXG59XFxyXFxuLmxvZ297XFxyXFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcbi5zZWFyY2hGaWVsZDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tZW51LWljb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTNweDtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5tZW51LWljb24gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBtYXJnaW46IDRweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjM1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5tZW51LWljb24uYWN0aXZlIC5saW5lX29uZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3cHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKC00NWRlZyk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3B4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG4ubWVudS1pY29uLmFjdGl2ZSAubGluZV90d28ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG4ubWVudS1pY29uLmFjdGl2ZSAubGluZV90aHJlZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG4uc2Vjb25kLWxldmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAtMjtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC40cHggM3B4ICNiNWIxYjE7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMC40cHggM3B4ICNiNWIxYjE7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dCAxNTBtcztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dCAxNTBtcztcXHJcXG4gICAgbGVmdDogMnB4O1xcclxcbiAgICByaWdodDogMnB4O1xcclxcbn1cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5zZWNvbmQtbGV2ZWwub3Blbk1lbnUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxyXFxufVxcclxcbi5jYXRMaSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIwcHggMCAwO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5jYXQgdWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzJweDtcXHJcXG4gICAgcmlnaHQ6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNhdExpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0MzUzNTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uY2F0TGk6aG92ZXIgdWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG4uY2F0IHVsIGxpIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZzogN3B4IDE1cHggNXB4O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmNhdCB1bCBsaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzNTM1O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA1cHg7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi5tYXBCYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcXHJcXG59XFxyXFxuLm1hcEJhciB1bCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxufVxcclxcbi5tYXBCYXIgdWwgbGkge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLm1hcEJhciB1bCBsaSBhIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcbi5hY3RpdmVSIHtcXHJcXG4gICAgY29sb3I6ICNlNDM1MzU7XFxyXFxufVxcclxcbi5sb2dpbixcXHJcXG4uc2hhcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zaGFyZSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubG9naW4gYSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1hcEJhciAuY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4ubWFpblNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogNzglO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLnNpZGVTZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDIyJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwO1xcclxcbn1cXHJcXG4udGl0bGVTaWRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXHJcXG4gICAgY29sb3I6ICM2ZjZmNmY7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4udGFnc0xpc3QgbGkge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6dXJsKCcuLi9pbWFnZXMvZXh0ZXJuYWxMaW5rLnN2ZycpIG5vLXJlcGVhdCByaWdodCAxcHggdG9wIDlweDtcXHJcXG59XFxyXFxuLnRhZ3NMaXN0IGxpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNlNDM1MzU7XFxyXFxufVxcclxcbi5jaXR5e1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuIC5zd2lwZXItY29udGFpbmVyIHtcXHJcXG4gICAgICB3aWR0aDpjYWxjKDEwMCUgLSA0MHB4KTtcXHJcXG4gICAgXFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN3aXBlci1zbGlkZSB7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIHdpZHRoOiBhdXRvO1xcclxcbmNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAvKiBDZW50ZXIgc2xpZGUgdGV4dCB2ZXJ0aWNhbGx5ICovXFxyXFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxyXFxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5zd2lwZXItc2xpZGU6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVxcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4uc3RhdGVCYXJ7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZiMDNkLCAjZTQzNTM1KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IDIwcHggMTBweCAwcHggMTBweDtcXHJcXG59XFxyXFxuLnByZXYsXFxyXFxuLm5leHR7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wcmV2e1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuLm5leHQ6Zm9jdXMsXFxyXFxuLnByZXY6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5uZXh0e1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG4uc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnN3aXBlckNvbnRhaW5lcntcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3NXB4KTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuXFxyXFxufVxcclxcbi5zdGF0ZXtcXHJcXG4gICAgd2lkdGg6IDc1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZmlsdGVyQnRuIGJ1dHRvbntcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmZpbHRlckJ0bntcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZmlsdGVyQnRuIC51bmRlcmxpbmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNGNiMDUwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHotaW5kZXg6IDk7XFxyXFxufVxcclxcbi5maWx0ZXJCdG4gYnV0dG9uOm50aC1jaGlsZCgxKS5pcy1jdXJyZW50fi51bmRlcmxpbmUge1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuLmZpbHRlckJ0biBidXR0b246bnRoLWNoaWxkKDIpLmlzLWN1cnJlbnR+LnVuZGVybGluZSB7XFxyXFxuICAgIHJpZ2h0OiAyMCU7XFxyXFxufVxcclxcbi5maWx0ZXJCdG4gYnV0dG9uOm50aC1jaGlsZCgzKS5pcy1jdXJyZW50fi51bmRlcmxpbmUge1xcclxcbiAgICByaWdodDogNDAlO1xcclxcbn1cXHJcXG4uZmlsdGVyQnRuIGJ1dHRvbjpudGgtY2hpbGQoNCkuaXMtY3VycmVudH4udW5kZXJsaW5lIHtcXHJcXG4gICAgcmlnaHQ6IDYwJTtcXHJcXG59XFxyXFxuLmZpbHRlckJ0biBidXR0b246bnRoLWNoaWxkKDUpLmlzLWN1cnJlbnR+LnVuZGVybGluZSB7XFxyXFxuICAgIHJpZ2h0OiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJCdG4gYnV0dG9uOm50aC1jaGlsZCg2KS5pcy1jdXJyZW50fi51bmRlcmxpbmUge1xcclxcbiAgICByaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmxpc3RpbmdJdGVtc3tcXHJcXG4gICAgYm9yZGVyOiAwIHNvbGlkICNlYmViZWI7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAwcHggMHB4O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5saXN0aW5nSXRlbXMgbGl7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHggMHB4IDE1cHggMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pdGVtRGVzIGltZ3tcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE0MHB4O1xcclxcbn1cXHJcXG4uYWRzTmFtZXtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcblxcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG4uaXRlbURldGFpbHN7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4xNXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSksXFxyXFxuICAgICAtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcXHJcXG59XFxyXFxuLmxpc3RpbmdJdGVtcyBsaTpob3ZlciAuaXRlbURldGFpbHN7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHotaW5kZXg6IDk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpXFxyXFxuICAgICwgMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLFxcclxcbiAgICAgMCAxcHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xcclxcbn1cXHJcXG4ubGlzdGluZ0l0ZW1zIGxpOjphZnRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG59XFxyXFxuLmxpc3RpbmdJdGVtcyBsaTo6YmVmb3Jle1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZmlsdGVyQnRuIHB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuLnJvd2NvZGVfc3RhcntcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuLmNvZGVCb3h7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDM1MzU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNxdXJlQm94IHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDM1MzU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvbWFpbic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlc2hlZXRzL3N0eWxlcy5jc3MnO1xyXG5cclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0XHJcbiAgICAuQ29tcG9uZW50IHtcclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQvPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3RET01cclxuICAgIC5yZW5kZXIoXHJcbiAgICAgICAgPEhlYWRlci8+LFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJykpLFxyXG4pO1xyXG4gICAgXHJcbmNsYXNzIE1haW5EIGV4dGVuZHMgUmVhY3RcclxuICAgIC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+KVxyXG4gICAgfVxyXG59XHJcblxyXG5SZWFjdERPTVxyXG4gICAgLnJlbmRlcihcclxuICAgICAgICA8TWFpbkQgLz4sXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJykpLFxyXG4gICAgKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU2YWU5NDhkMmZjYzBkOGJmNDA5NzAzMWEwNDA2ZTQ4LndvZmZcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhL2NpdHkuanNvblwiO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBBMTF5LCBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJ1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLWJ1bmRsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgTWRLZXlib2FyZEFycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcclxuaW1wb3J0IHsgTWRLZXlib2FyZEFycm93UmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XHJcblxyXG5cclxuXHJcblN3aXBlckNvcmUudXNlKFtBMTF5LCBOYXZpZ2F0aW9uXSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRlQmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRlXCI+2KfYs9iq2KfZhjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXJDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17J2F1dG8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNsaWRlQ2hhbmdlPXsoc3dpcGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lwZXIudXBkYXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLnByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLm5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuQ2l0eS5tYXAoKGNpdHksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpdHkuVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZcIj4gPE1kS2V5Ym9hcmRBcnJvd1JpZ2h0IGNvbG9yPSd3aGl0ZScgc2l6ZT0nMjAnIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0XCI+IDxNZEtleWJvYXJkQXJyb3dMZWZ0IGNvbG9yPSd3aGl0ZScgc2l6ZT0nMjAnIC8+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9