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
/******/ 	return __webpack_require__(__webpack_require__.s = "8yIb");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+0Im":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/footer.vue?vue&type=template&id=370b86f5 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "+K/H":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

var prefixCls = 'v-content';

exports.default = {
  name: prefixCls,
  computed: {
    style: function style() {
      var style = {
        overflow: 'hidden'
      };

      return style;
    },
    classs: function classs() {
      return ['' + prefixCls];
    }
  }
};

/***/ }),

/***/ "+q3+":
/*!***************************************!*\
  !*** ./components/table/table-tr.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_tr_vue_vue_type_template_id_7a748cf9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-tr.vue?vue&type=template&id=7a748cf9 */ "gIQc");
/* harmony import */ var _table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-tr.vue?vue&type=script&lang=js */ "7BT5");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&lang=css */ "GG1C");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_tr_vue_vue_type_template_id_7a748cf9__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_tr_vue_vue_type_template_id_7a748cf9__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table-tr.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "/E0q":
/*!********************************!*\
  !*** ./components/col/col.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _col_vue_vue_type_template_id_2cef9ef4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./col.vue?vue&type=template&id=2cef9ef4 */ "FaaB");
/* harmony import */ var _col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./col.vue?vue&type=script&lang=js */ "xWml");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _col_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./col.css?vue&type=style&index=0&lang=css */ "0BNs");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _col_vue_vue_type_template_id_2cef9ef4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _col_vue_vue_type_template_id_2cef9ef4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/col/col.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "0BNs":
/*!****************************************************************!*\
  !*** ./components/col/col.css?vue&type=style&index=0&lang=css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./col.css?vue&type=style&index=0&lang=css */ "0Rdm");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0FM1":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//

var prefixCls = 'v-layout';
exports.default = {
  name: prefixCls,
  data: function data() {
    return {
      hasSider: false
    };
  },
  props: {
    top: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style: function style() {
      var style = {
        overflow: 'hidden'
      };

      if (this.top) {
        style.paddingTop = this.top + 'px';
      }

      if (this.bottom) {
        style.paddingBottom = this.bottom + 'px';
      }

      return style;
    },
    classs: function classs() {
      return ['' + prefixCls, _defineProperty({}, prefixCls + '-has-sider', this.hasSider)];
    }
  },
  methods: {
    findSider: function findSider() {
      return this.$children.some(function (child) {
        return child.$options.name === 'v-sider';
      });
    }
  },
  mounted: function mounted() {
    this.hasSider = this.findSider();
  }
};

/***/ }),

/***/ "0Rdm":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/col/col.css?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./col.css?vue&type=style&index=0&lang=css */ "WU1R");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("536d782c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "134p":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/menu/menu.vue?vue&type=template&id=a1444c38 ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "14P4":
/*!**************************************!*\
  !*** ./components/layout/header.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_583deae7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=583deae7 */ "s2e3");
/* harmony import */ var _header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js */ "Yvss");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _header_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&lang=css */ "6w1v");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_583deae7__WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_583deae7__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1g1O":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-header{\n    width: 100%;\n}\n.v-header-width{\n    margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "1s9g":
/*!*********************************************************************!*\
  !*** ./components/layout/sider.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./sider.vue?vue&type=style&index=0&lang=css */ "BHkt");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "20+l":
/*!***********************************************************************!*\
  !*** ./components/layout/content.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./content.vue?vue&type=style&index=0&lang=css */ "Ey2G");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3ca1":
/*!***********************************!*\
  !*** ./components/input/input.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./input.css */ "kIj4");

var _input = __webpack_require__(/*! ./input.html */ "VjfO");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Vue.extend({
  template: _input2.default,
  data: function data() {
    return {
      currentValue: this.value
    };
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    name: String,
    customClass: '',
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    autoComplete: {
      type: String,
      default: 'off'
    },
    size: {
      type: String,
      default: 'small'
    },
    form: String,
    icon: String,
    imageIcon: Boolean
  },
  methods: {

    updateValue: function updateValue(value) {
      this.currentValue = value.trim();
    },

    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
      this.$emit('input', this.$refs.input.value);
    },

    handleFocus: function handleFocus(event) {
      this.$emit('focus', event);
    },

    handleIconClick: function handleIconClick() {
      this.$emit('icon-click', event);
    },

    inputSelect: function inputSelect() {
      this.$refs.input.select();
    }
  },
  created: function created() {
    this.$on('inputSelect', this.inputSelect);
  },
  watch: {
    currentValue: function currentValue(newV) {
      this.$emit('input', newV);
      this.$emit('change', newV);
    }
  }
});

/***/ }),

/***/ "4WJF":
/*!**************************************!*\
  !*** ./components/layout/footer.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=370b86f5 */ "u3v6");
/* harmony import */ var _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js */ "QSfQ");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4zq5":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/menu/menu-sub.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//

var profixCls = 'v-menu-item-sub';

exports.default = {
  name: profixCls,
  props: {
    name: {
      type: [String, Number],
      dafeult: ''
    }
  },
  data: function data() {
    return {
      profixCls: profixCls,
      active: false,
      height: 0
    };
  },
  computed: {
    classs: function classs() {
      var classs = ['' + profixCls, _defineProperty({}, 'active', this.active)];

      return classs;
    },
    style: function style() {
      var style = {};

      if (this.height) {
        style.height = this.height + 'px';
        style.lineHeight = this.height + 'px';
      }

      return style;
    }
  },
  methods: {
    itemHandle: function itemHandle() {
      (0, _assist.findComponentUpward)(this, 'v-menu').$onClickHandle(this.name);
    }
  },
  mounted: function mounted() {
    if ((0, _assist.findComponentUpward)(this, 'v-menu') && (0, _assist.findComponentUpward)(this, 'v-menu').height) {
      this.height = (0, _assist.findComponentUpward)(this, 'v-menu').height;
    }
  }
};

/***/ }),

/***/ "5ARJ":
/*!***************************************!*\
  !*** ./components/table/table-th.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_th_vue_vue_type_template_id_79e7a1ef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-th.vue?vue&type=template&id=79e7a1ef */ "YKVF");
/* harmony import */ var _table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-th.vue?vue&type=script&lang=js */ "lL1/");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&lang=css */ "GG1C");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_th_vue_vue_type_template_id_79e7a1ef__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_th_vue_vue_type_template_id_79e7a1ef__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table-th.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5Wxb":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&lang=css */ "GtoU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("aa2dc7b4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "63yH":
/*!************************************!*\
  !*** ./directives/transfer-dom.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Thanks to: https://github.com/airyland/vux/blob/v2/src/directives/transfer-dom/index.js
// Thanks to: https://github.com/calebroseland/vue-dom-portal

/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node) {
  if (node === void 0) {
    node = document.body;
  }
  if (node === true) {
    return document.body;
  };
  return node instanceof window.Node ? node : document.querySelector(node);
}

var directive = {
  inserted: function inserted(el, _ref, vnode) {
    var value = _ref.value;

    if (el.dataset && el.dataset.transfer !== 'true') return false;
    el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
    var parentNode = el.parentNode;
    if (!parentNode) return;
    var home = document.createComment('');
    var hasMovedOut = false;

    if (value !== false) {
      parentNode.replaceChild(home, el); // moving out, el is no longer in the document
      getTarget(value).appendChild(el); // moving into new place
      hasMovedOut = true;
    }
    if (!el.__transferDomData) {
      el.__transferDomData = {
        parentNode: parentNode,
        home: home,
        target: getTarget(value),
        hasMovedOut: hasMovedOut
      };
    }
  },
  componentUpdated: function componentUpdated(el, _ref2) {
    var value = _ref2.value;

    if (el.dataset && el.dataset.transfer !== 'true') return false;
    // need to make sure children are done updating (vs. `update`)
    var ref$1 = el.__transferDomData;
    if (!ref$1) return;
    // homes.get(el)
    var parentNode = ref$1.parentNode;
    var home = ref$1.home;
    var hasMovedOut = ref$1.hasMovedOut; // recall where home is

    if (!hasMovedOut && value) {
      // remove from document and leave placeholder
      parentNode.replaceChild(home, el);
      // append to target
      getTarget(value).appendChild(el);
      el.__transferDomData = Object.assign({}, el.__transferDomData, { hasMovedOut: true, target: getTarget(value) });
    } else if (hasMovedOut && value === false) {
      // previously moved, coming back home
      parentNode.replaceChild(el, home);
      el.__transferDomData = Object.assign({}, el.__transferDomData, { hasMovedOut: false, target: getTarget(value) });
    } else if (value) {
      // already moved, going somewhere else
      getTarget(value).appendChild(el);
    }
  },
  unbind: function unbind(el) {
    if (el.dataset && el.dataset.transfer !== 'true') return false;
    el.className = el.className.replace('v-transfer-dom', '');
    var ref$1 = el.__transferDomData;
    if (!ref$1) return;
    if (el.__transferDomData.hasMovedOut === true) {
      el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
    }
    el.__transferDomData = null;
  }
};

exports.default = directive;

/***/ }),

/***/ "6n+5":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/menu/menu-group.vue?vue&type=template&id=3ddab256 ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "6w1v":
/*!**********************************************************************!*\
  !*** ./components/layout/header.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css */ "wHIe");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7BT5":
/*!***************************************************************!*\
  !*** ./components/table/table-tr.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table-tr.vue?vue&type=script&lang=js */ "MmBS");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7OE9":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "85aG":
/*!******************************************************************!*\
  !*** ./components/table/table.vue?vue&type=template&id=25bab43c ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_25bab43c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=25bab43c */ "8PlR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_25bab43c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_25bab43c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "8DyF":
/*!***************************************!*\
  !*** ./components/layout/content.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_vue_vue_type_template_id_5459268f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.vue?vue&type=template&id=5459268f */ "N8CP");
/* harmony import */ var _content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.vue?vue&type=script&lang=js */ "nwYo");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _content_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.vue?vue&type=style&index=0&lang=css */ "20+l");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _content_vue_vue_type_template_id_5459268f__WEBPACK_IMPORTED_MODULE_0__["render"],
  _content_vue_vue_type_template_id_5459268f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8Jum":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-layout{\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n}\n.v-layout-has-sider{\n    flex-direction: row;\n}\n", ""]);

// exports


/***/ }),

/***/ "8PlR":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table.vue?vue&type=template&id=25bab43c ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    {
      class: _vm.classs,
      attrs: { cellspacing: "0", cellpadding: "0", border: "0" }
    },
    [
      _c(
        "colgroup",
        _vm._l(_vm.width, function(item, index) {
          return _c("col", { key: index, attrs: { width: item } })
        })
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "8yIb":
/*!*********************************!*\
  !*** ./components/component.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! @components/col/index */ "B7r1");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! @components/row/index */ "d7Mn");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! @components/layout/index */ "okHz");

var _index6 = __webpack_require__(/*! @components/table/index */ "vbul");

var _index7 = __webpack_require__(/*! @components/menu/index */ "B+aG");

var _index8 = __webpack_require__(/*! @components/button/index */ "HlVv");

var _index9 = _interopRequireDefault(_index8);

var _index10 = __webpack_require__(/*! @components/tooltip/index */ "96vE");

var _index11 = _interopRequireDefault(_index10);

var _index12 = __webpack_require__(/*! @components/poptip/index */ "TInj");

var _index13 = _interopRequireDefault(_index12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 模块提示

/**
 * @TODO:jingwen exapmple组件体积太大
 */
// import exapmple from './exapmple/index';// 例子展示

// 按钮

// 表单

// 行

var input = __webpack_require__(/*! @components/input/input.js */ "3ca1"); // 输入框


// var Modal = require("./modal/modal.js");
// var Notice = require("./notice/notification.js");
// var Message = require("./message/index.js");
//

// var Select = require("./select/select.js");
// var Option = require("./select/option.js");


// var Checkbox = require("./checkbox/checkbox.js");
// var Radio = require("./radio/radio.js");
// var Popover = require("./popover/popover.js");
// var PopoverDirective = require("./popover/directive.js");
// var Dropdown = require("./dropdown/dropdown.js");
// var DropdownMenu = require("./dropdown/dropdown-menu.js");
// var DropdownItem = require("./dropdown/dropdown-item.js");
// //
// var Pagination = require("./pagination/pagination.js");

// var InfiniteScroll = require("./directives/infinite-scroll.js");
// var Lazyload = require("./directives/img-lazyload.js");

// var Clock = require("./datetime/picker/time-picker.js");
// var Date = require("./datetime/picker/date-picker.js");

// var VueAwesomeSwiper = require("./swipre/vue-awesome-swiper.js");

// 气泡提示

// 导航栏

// 布局

// 列
var components = {
  col: _index2.default,
  row: _index4.default,
  header: _index5.header,
  content: _index5.content,
  footer: _index5.footer,
  layout: _index5.layout,
  sider: _index5.sider,
  button: _index9.default,
  input: input,
  table: _index6.table,
  thead: _index6.thead,
  tbody: _index6.tbody,
  tr: _index6.tr,
  th: _index6.th,
  // exapmple,
  menu: _index7.menu,
  menuItem: _index7.menuItem,
  menuGroup: _index7.menuGroup,
  menuSub: _index7.menuSub,
  tooltip: _index11.default,
  poptip: _index13.default
};

function install(Vue) {
  Object.keys(components).forEach(function (value) {
    Vue.component('t-' + value, components[value]);
  });
  // Vue.component('t-select', Select);
  // Vue.component('t-option', Option);

  // Vue.component('t-checkbox', Checkbox);
  // Vue.component('t-radio', Radio);
  // Vue.component('t-dropdown', Dropdown);
  // Vue.component('t-dropdown-menu', DropdownMenu);
  // Vue.component('t-dropdown-item', DropdownItem);

  // Vue.component('modal', Modal);
  // Vue.component('notice', Notice);
  // Vue.component('message', Message);

  // Vue.component('t-pagination', Pagination);

  // Vue.prototype.$notify = Notice;
  // Vue.prototype.$message = Message;

  // Vue.directive('InfiniteScroll', InfiniteScroll);
  // Vue.directive('lazy', Lazyload);
  // Vue.directive('popover', PopoverDirective);

  // Vue.component('t-clock-picker', Clock);
  // Vue.component('t-date-picker', Date);
  // Vue.component('swiper', VueAwesomeSwiper.swiper);
  // Vue.component('swiperSlide', VueAwesomeSwiper.swiperSlide);
};

if (window.Vue) {
  // window.infiniteScroll = InfiniteScroll;
  install(Vue);
}

/***/ }),

/***/ "9/LU":
/*!********************************************************************!*\
  !*** ./components/layout/layout.vue?vue&type=template&id=128725f8 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_128725f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=128725f8 */ "ZGiz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_128725f8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_128725f8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "96vE":
/*!*************************************!*\
  !*** ./components/tooltip/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(/*! ./tooltip.vue */ "p34N");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tooltip2.default;

/***/ }),

/***/ "B+aG":
/*!**********************************!*\
  !*** ./components/menu/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuGroup = exports.menuSub = exports.menuItem = exports.menu = undefined;

var _menu = __webpack_require__(/*! ./menu.vue */ "gYsK");

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__(/*! ./menu-item.vue */ "RVVh");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _menuSub = __webpack_require__(/*! ./menu-sub.vue */ "QKbK");

var _menuSub2 = _interopRequireDefault(_menuSub);

var _menuGroup = __webpack_require__(/*! ./menu-group.vue */ "QjmW");

var _menuGroup2 = _interopRequireDefault(_menuGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.menu = _menu2.default;
exports.menuItem = _menuItem2.default;
exports.menuSub = _menuSub2.default;
exports.menuGroup = _menuGroup2.default;

/***/ }),

/***/ "B7r1":
/*!*********************************!*\
  !*** ./components/col/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _col = __webpack_require__(/*! ./col.vue */ "/E0q");

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _col2.default;

/***/ }),

/***/ "BDYz":
/*!**************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "dJqi");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "BHkt":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./sider.vue?vue&type=style&index=0&lang=css */ "GkZQ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("1b00c7cc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "BJbw":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/menu/menu-sub.vue?vue&type=template&id=9ea25552 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { class: _vm.classs, style: _vm.style, on: { click: _vm.itemHandle } },
    [
      _c("div", { class: [_vm.profixCls + "-title"] }, [_vm._t("title")], 2),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "CN0J":
/*!*******************************************************************!*\
  !*** ./components/menu/index.css?vue&type=style&index=0&lang=css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&lang=css */ "O0B7");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Cj/s":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/tooltip/tooltip.css?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.t-tooltip {\n  display: inline-block !important;\n}\n.t-tooltip-inner{\n  max-width: 250px;\n  min-height: 34px;\n  padding: 8px 12px;\n  text-align: left;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 4px;\n  z-index: 9999;\n\n  font-size: 14px;\n}\n.t-tooltip-arrow{\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.t-tooltip-main[x-placement='top-start'],.t-tooltip-main[x-placement='top'],.t-tooltip-main[x-placement='top-end']{\n  padding: 5px 0 8px 0;\n}\n.t-tooltip-main[x-placement='top-start'] .t-tooltip-arrow,.t-tooltip-main[x-placement='top'] .t-tooltip-arrow,.t-tooltip-main[x-placement='top-end'] .t-tooltip-arrow{\n  bottom: 3px;\n  border-width: 5px 5px 0;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n.t-tooltip-main[x-placement='top-start'] .t-tooltip-arrow{\n  left: 11px;\n}\n.t-tooltip-main[x-placement='top'] .t-tooltip-arrow{\n  left: 50%;\n  margin-left: -5px;\n}\n.t-tooltip-main[x-placement='top-end'] .t-tooltip-arrow{\n  right: 11px;\n}\n.t-tooltip-main[x-placement='left-start'],.t-tooltip-main[x-placement='left'],.t-tooltip-main[x-placement='left-end']{\n  padding: 0 8px 0 5px;\n}\n.t-tooltip-main[x-placement='left-start'] .t-tooltip-arrow,.t-tooltip-main[x-placement='left'] .t-tooltip-arrow,.t-tooltip-main[x-placement='left-end'] .t-tooltip-arrow{\n  display: block;\n  border-width: 5px 0 5px 5px;\n  border-left-color: rgba(0, 0, 0, 0.8);\n}\n.t-tooltip-main[x-placement='left-start'] .t-tooltip-arrow{\n  right: 3px;\n  top: 5px;\n}\n.t-tooltip-main[x-placement='left'] .t-tooltip-arrow{\n  right: 3px;\n  top: 50%;\n  margin-top: -5px;\n}\n.t-tooltip-main[x-placement='left-end'] .t-tooltip-arrow{\n  right: 3px;\n  bottom: 5px;\n}\n.t-tooltip-main[x-placement='right-start'],.t-tooltip-main[x-placement='right'],.t-tooltip-main[x-placement='right-end']{\n  padding: 0 5px 0 8px;\n}\n.t-tooltip-main[x-placement='right-start'] .t-tooltip-arrow,.t-tooltip-main[x-placement='right'] .t-tooltip-arrow,.t-tooltip-main[x-placement='right-end'] .t-tooltip-arrow{\n  left: 3px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: rgba(0,0,0,0.8);\n}\n.t-tooltip-main[x-placement='right-start'] .t-tooltip-arrow{\n  right: 3px;\n  top: 5px;\n}\n.t-tooltip-main[x-placement='right'] .t-tooltip-arrow{\n  right: 0px;\n  top: 50%;\n  margin-top: -5px;\n}\n.t-tooltip-main[x-placement='right-end'] .t-tooltip-arrow{\n  right: 3px;\n  bottom: 5px;\n}\n.t-tooltip-main[x-placement='bottom-start'],.t-tooltip-main[x-placement='bottom'],.t-tooltip-main[x-placement='bottom-end']{\n  padding: 8px 0 5px 0;\n}\n.t-tooltip-main[x-placement='bottom-start'] .t-tooltip-arrow,.t-tooltip-main[x-placement='bottom'] .t-tooltip-arrow,.t-tooltip-main[x-placement='bottom-end'] .t-tooltip-arrow{\n  top: 3px;\n  border-width: 0 5px 5px;\n  border-bottom-color: rgba(0,0,0,0.8);\n}\n.t-tooltip-main[x-placement='bottom-start'] .t-tooltip-arrow{\n  left: 11px;\n}\n.t-tooltip-main[x-placement='bottom'] .t-tooltip-arrow{\n  left: 50%;\n  margin-left: -5px;\n}\n.t-tooltip-main[x-placement='bottom-end'] .t-tooltip-arrow{\n  right: 11px;\n}", ""]);

// exports


/***/ }),

/***/ "CoYb":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table-th.vue?vue&type=template&id=79e7a1ef ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("th", [
    _c("div", [_c("span", { class: _vm.classs }, [_vm._t("default")], 2)])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "DlSR":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/row/row.css?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./row.css?vue&type=style&index=0&lang=css */ "Njhh");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("4059d4c6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "E0Ta":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/button/button.vue?vue&type=template&id=5350d404 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "t-btn",
      class: _vm.classs,
      style: _vm.style,
      attrs: { disabled: _vm.disabled, type: _vm.htmlType },
      on: { click: _vm.handleClick }
    },
    [_c("span", [_vm._t("default")], 2)]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E8uj":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/col/col.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//

var prefixCls = 'v-col';

exports.default = {
  name: prefixCls,
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      gutter: 0
    };
  },
  computed: {
    classs: function classs() {
      var _ref;

      return ['' + prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-' + this.span, this.span), _defineProperty(_ref, prefixCls + '-offset-' + this.offset, this.offset), _ref)];
    },
    styles: function styles() {
      var style = {};
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        };
      }

      return style;
    }
  },
  methods: {
    updateGutter: function updateGutter() {
      var Row = (0, _assist.findComponentUpward)(this, 'v-row');

      if (Row) {
        Row.updateGutter(Row.gutter);
      }
    }
  },
  mounted: function mounted() {
    this.updateGutter();
  }
};

/***/ }),

/***/ "ETaf":
/*!****************************************************************!*\
  !*** ./components/tooltip/tooltip.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=script&lang=js */ "vxEK");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "EaPz":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table-tr.vue?vue&type=template&id=7a748cf9 ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "Ey2G":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./content.vue?vue&type=style&index=0&lang=css */ "mlk9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("aab8c7f0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "F6X7":
/*!*********************************************************************!*\
  !*** ./node_modules/_popper.js@1.14.3@popper.js/dist/esm/popper.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

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





var defineProperty = function (obj, key, value) {
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
};

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

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../_webpack@4.10.2@webpack/buildin/global.js */ "7OE9")))

/***/ }),

/***/ "FO2j":
/*!**************************************************************!*\
  !*** ./components/layout/layout.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js */ "0FM1");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "FXKm":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/poptip/poptip.css?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./poptip.css?vue&type=style&index=0&lang=css */ "zSwL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("d3906980", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "FaaB":
/*!**************************************************************!*\
  !*** ./components/col/col.vue?vue&type=template&id=2cef9ef4 ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_template_id_2cef9ef4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./col.vue?vue&type=template&id=2cef9ef4 */ "jp7P");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_template_id_2cef9ef4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_template_id_2cef9ef4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "FmQH":
/*!**********************************************************************!*\
  !*** ./components/menu/menu-group.vue?vue&type=template&id=3ddab256 ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_template_id_3ddab256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu-group.vue?vue&type=template&id=3ddab256 */ "6n+5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_template_id_3ddab256__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_template_id_3ddab256__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "GG1C":
/*!********************************************************************!*\
  !*** ./components/table/table.css?vue&type=style&index=0&lang=css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&lang=css */ "Sh9R");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "GkZQ":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./sider.vue?vue&type=style&index=0&lang=css */ "VdsA");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "GtoU":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&lang=css */ "8Jum");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "HC+C":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/button/button.css?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./button.css?vue&type=style&index=0&lang=css */ "Tb1Q");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "HDxI":
/*!************************************************************!*\
  !*** ./components/table/table.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js */ "ZktA");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "HlVv":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! ./button.vue */ "Zb5R");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;

/***/ }),

/***/ "I05C":
/*!***********************************!*\
  !*** ./components/util/assist.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oneOf = oneOf;
exports.findComponentUpward = findComponentUpward;
exports.findComponentDownward = findComponentDownward;
exports.findBrothersComponents = findBrothersComponents;
exports.findComponentsDownward = findComponentsDownward;
// 判断参数是否是其中之一
function oneOf(value, valueList) {
  for (var i = 0; i < valueList.length; i++) {
    if (value === valueList[i]) {
      return true;
    }
  }
  return false;
}

// 寻找父级组件
function findComponentUpward(context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  var parent = context.$parent;
  var name = parent.$options.name;

  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

// 寻找子级组件
function findComponentDownward(context, componentName) {
  var childrens = context.$children;
  var children = null;

  if (childrens.length) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = childrens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;

        var name = child.$options.name;
        if (name === componentName) {
          children = child;
          break;
        } else {
          children = findComponentDownward(child, componentName);
          if (children) break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return children;
}

// 寻找同级组件
function findBrothersComponents(context, componentName) {
  var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var res = context.$parent.$children.filter(function (item) {
    return item.$options.name === componentName;
  });
  var index = res.findIndex(function (item) {
    return item._uid === context._uid;
  });
  if (exceptMe) res.splice(index, 1);
  return res;
}

// Find components downward
function findComponentsDownward(context, componentName) {
  return context.$children.reduce(function (components, child) {
    if (child.$options.name === componentName) components.push(child);
    var foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
}

/***/ }),

/***/ "I5M6":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-menu{\n    display: block;\n    position: relative;\n}\n.v-menu-item-sub{\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-horizontal .v-menu-item-sub.active{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}\n.v-menu-horizontal{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-horizontal::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-horizontal .v-menu-item-sub{\n    float: left;\n}\n.v-menu-vertical{\n    display: inline-block;\n    width: 200px;\n    height: 100%;\n}\n.v-menu-vertical .v-menu-item-sub{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-vertical::after{\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 1px;\n    background: #dddee1;\n}\n.v-menu-vertical .v-menu-item-sub.active{\n    border-right: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

// exports


/***/ }),

/***/ "IGX9":
/*!**************************************************************!*\
  !*** ./components/menu/menu-sub.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu-sub.vue?vue&type=script&lang=js */ "4zq5");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "IZ4Y":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/tooltip/tooltip.vue?vue&type=template&id=f37d8be8 ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.classs,
      on: { mouseenter: _vm.handleMouseenter, mouseleave: _vm.handleMouseleave }
    },
    [
      _c("div", { ref: "referenceElement" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            },
            { name: "transfer-dom", rawName: "v-transfer-dom" }
          ],
          ref: "onPopper",
          staticClass: "t-tooltip-main",
          attrs: { "data-transfer": _vm.transfer }
        },
        [
          _c("div", { staticClass: "t-tooltip-arrow" }),
          _vm._v(" "),
          _c("div", { staticClass: "t-tooltip-inner" }, [
            _vm._v(_vm._s(_vm.content))
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "IlTG":
/*!************************************!*\
  !*** ./directives/clickoutside.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  bind: function bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }

      if (binding.expression) {
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  update: function update() {},
  unbind: function unbind(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};

/***/ }),

/***/ "J3GE":
/*!**************************************!*\
  !*** ./components/layout/layout.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_128725f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=128725f8 */ "9/LU");
/* harmony import */ var _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js */ "FO2j");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _layout_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.vue?vue&type=style&index=0&lang=css */ "njSX");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_128725f8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_128725f8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "JicO":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/tooltip/tooltip.css?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./tooltip.css?vue&type=style&index=0&lang=css */ "Zb9I");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("c575b4e2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "Jn4B":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table-body.vue?vue&type=template&id=1f2d595d ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tbody", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "Kj8d":
/*!***************************************************************!*\
  !*** ./components/menu/menu-item.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu-item.vue?vue&type=script&lang=js */ "Yxze");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "LsDb":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/poptip/poptip.css?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.t-poptip{\n  display: inline-block !important;\n}\n.t-poptip-poper{\n  display: block;\n  visibility: visible;\n  font-size: 12px;\n  line-height: 1.5;\n  z-index: 1060;\n  text-align: left;\n}\n", ""]);

// exports


/***/ }),

/***/ "Ml+4":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/button/button.css?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./button.css?vue&type=style&index=0&lang=css */ "HC+C");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("225c32b8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "MmBS":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table-tr.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var prefixCls = 'v-table-tr';
exports.default = {
  name: prefixCls
};

/***/ }),

/***/ "MrER":
/*!********************************************************************!*\
  !*** ./components/menu/menu-sub.vue?vue&type=template&id=9ea25552 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_template_id_9ea25552__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu-sub.vue?vue&type=template&id=9ea25552 */ "BJbw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_template_id_9ea25552__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_template_id_9ea25552__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "N8CP":
/*!*********************************************************************!*\
  !*** ./components/layout/content.vue?vue&type=template&id=5459268f ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_5459268f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./content.vue?vue&type=template&id=5459268f */ "XaCE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_5459268f__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_5459268f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "NB7K":
/*!****************************************************************!*\
  !*** ./components/menu/menu-group.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu-group.vue?vue&type=script&lang=js */ "pi09");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Njhh":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/row/row.css?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./row.css?vue&type=style&index=0&lang=css */ "XCW4");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "O0B7":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&lang=css */ "OvzD");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("257989a3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "OvzD":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&lang=css */ "I5M6");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "P/Fu":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/menu/menu.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! @util/assist */ "I05C");

var profixCls = 'v-menu'; //
//
//
//
//
//

exports.default = {
  name: profixCls,
  props: {
    activeName: {
      type: [String, Number],
      default: ''
    },
    mode: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['horizontal', 'vertical']); // horizontal（水平） 和 vertical（垂直）
      }
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classs: function classs() {
      var classs = ['' + profixCls, profixCls + '-' + this.mode];

      return classs;
    },
    style: function style() {
      var style = {};

      if (this.width !== 0) {
        style.width = this.width + 'px';
      }

      return style;
    }
  },
  methods: {
    $onClickHandle: function $onClickHandle(val) {
      this.$activeHandle(val);
      this.$emit('on:select', val);
    },
    $activeHandle: function $activeHandle(name) {
      (0, _assist.findComponentsDownward)(this, 'v-menu-item-sub').forEach(function (val) {
        if (val.name === name) {
          val.active = true;

          return;
        }

        val.active = false;
      });
    }
  },
  mounted: function mounted() {
    this.$activeHandle(this.activeName);
  }
};

/***/ }),

/***/ "Pn50":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table-head.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var prefixCls = 'v-table-head';
exports.default = {
  name: prefixCls,
  computed: {
    classs: function classs() {
      var classs = ['' + prefixCls];

      return classs;
    }
  }
};

/***/ }),

/***/ "QKbK":
/*!**************************************!*\
  !*** ./components/menu/menu-sub.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_sub_vue_vue_type_template_id_9ea25552__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-sub.vue?vue&type=template&id=9ea25552 */ "MrER");
/* harmony import */ var _menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-sub.vue?vue&type=script&lang=js */ "IGX9");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?vue&type=style&index=0&lang=css */ "CN0J");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_sub_vue_vue_type_template_id_9ea25552__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_sub_vue_vue_type_template_id_9ea25552__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/menu/menu-sub.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "QSfQ":
/*!**************************************************************!*\
  !*** ./components/layout/footer.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js */ "gDpH");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "QjmW":
/*!****************************************!*\
  !*** ./components/menu/menu-group.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_group_vue_vue_type_template_id_3ddab256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-group.vue?vue&type=template&id=3ddab256 */ "FmQH");
/* harmony import */ var _menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-group.vue?vue&type=script&lang=js */ "NB7K");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?vue&type=style&index=0&lang=css */ "CN0J");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_group_vue_vue_type_template_id_3ddab256__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_group_vue_vue_type_template_id_3ddab256__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/menu/menu-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "RVVh":
/*!***************************************!*\
  !*** ./components/menu/menu-item.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_item_vue_vue_type_template_id_29ef778c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item.vue?vue&type=template&id=29ef778c */ "x+Rl");
/* harmony import */ var _menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-item.vue?vue&type=script&lang=js */ "Kj8d");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?vue&type=style&index=0&lang=css */ "CN0J");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_item_vue_vue_type_template_id_29ef778c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_item_vue_vue_type_template_id_29ef778c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/menu/menu-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "S+LG":
/*!*****************************************!*\
  !*** ./components/table/table-body.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_body_vue_vue_type_template_id_1f2d595d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-body.vue?vue&type=template&id=1f2d595d */ "flIm");
/* harmony import */ var _table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-body.vue?vue&type=script&lang=js */ "cXTn");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&lang=css */ "GG1C");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_body_vue_vue_type_template_id_1f2d595d__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_body_vue_vue_type_template_id_1f2d595d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table-body.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Sh9R":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&lang=css */ "gBSP");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("b534c10c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "T677":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./components/input/input.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!./input.css */ "eryr");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "TDPS":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/row/row.vue?vue&type=template&id=1bf7ea3a ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classs, style: _vm.styles },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "TInj":
/*!************************************!*\
  !*** ./components/poptip/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _poptip = __webpack_require__(/*! ./poptip.vue */ "WFeo");

var _poptip2 = _interopRequireDefault(_poptip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _poptip2.default;

/***/ }),

/***/ "TX5u":
/*!********************************************************!*\
  !*** ./components/row/row.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./row.vue?vue&type=script&lang=js */ "vstv");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Tb1Q":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/button/button.css?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.t-btn{\n    outline: none;\n    cursor: pointer;\n    box-sizing: border-box;\n    border: none;\n    background: none;\n    border-radius: 4px;\n}\n.t-btn.disabled, .t-btn[disabled],.t-btn.disabled:hover,.t-btn[disabled]:hover{\n    cursor: not-allowed;\n    color: #bbbec4;\n    background-color: #f7f7f7;\n    border-color: #dddee1;\n}\n.t-btn-size-tiny{\n    font-size: 12px;\n    padding: 4px 15px;\n}\n.t-btn-size-default{\n    font-size: 14px;\n    padding: 6px 18px;\n}\n.t-btn-size-large{\n    font-size: 16px;\n    padding: 8px 28px;\n}\n.t-btn-size-long{\n    width: 100% !important;\n}\n.t-btn-type-default{\n    background: #f7f7f7;\n    color: #495060;\n    border: 1px solid #dddee1;\n}\n.t-btn-type-default:hover{\n    background: #ffffff;\n    color: #57a3f3;\n    border: 1px solid #57a3f3;\n}\n.t-btn-type-text{\n    color: #495060;\n    border: 1px solid rgba(255,255,255,0);\n}\n.t-btn-type-text:hover{\n    color: #57a3f3;\n    border: 1px solid rgba(255,255,255,0);\n}\n.t-btn-type-warning{\n    background: #ff9900;\n    color: #fff;\n    border: 1px solid #ff9900;\n}\n.t-btn-type-warning:hover{\n    background: #ffad33;\n    color: #fff;\n    border: 1px solid #ffad33;\n}\n.t-btn-type-error{\n    background: #ed3f14;\n    color: #fff;\n    border: 1px solid #ed3f14;\n}\n.t-btn-type-error:hover{\n    background: #f16543;\n    color: #fff;\n    border: 1px solid #ed3f14;\n}", ""]);

// exports


/***/ }),

/***/ "UJip":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table-th.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var prefixCls = 'v-table-th';
exports.default = {
  name: prefixCls,
  computed: {
    classs: function classs() {
      var classs = ['' + prefixCls];

      return classs;
    }
  }
};

/***/ }),

/***/ "URlm":
/*!*****************************************************************!*\
  !*** ./components/table/table-head.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table-head.vue?vue&type=script&lang=js */ "Pn50");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "VdsA":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n\n\n", ""]);

// exports


/***/ }),

/***/ "VjfO":
/*!*************************************!*\
  !*** ./components/input/input.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"t-input\" :class=\"[size?('t-input_'+size):'',{disabled:disabled}]\">\n\n    <i class=\"material-icons t-input_icon\" v-if=\"icon\" @click=\"handleIconClick\">{{icon}}</i>\n    <i class=\"t-input_icon image\" v-if=\"imageIcon\" @click=\"handleIconClick\"></i>\n\n    <input\n        class=\"t-input_ori\"\n        :class=\"[customClass]\"\n        :type=\"type\"\n        :placeholder=\"placeholder\"\n        :name=\"name\"\n        :disabled=\"disabled\"\n        :readonly=\"readonly\"\n        :autocomplete=\"autoComplete\"\n        :autofocus=\"autofocus\"\n        :value=\"value\"\n        :form=\"form\"\n        ref=\"input\"\n        @input=\"updateValue($event.target.value)\"\n        @focus=\"handleFocus\"\n        @blur=\"handleBlur\"\n    >\n\n</div>";

/***/ }),

/***/ "VpqN":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "WFeo":
/*!**************************************!*\
  !*** ./components/poptip/poptip.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _poptip_vue_vue_type_template_id_865185f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poptip.vue?vue&type=template&id=865185f8 */ "dqye");
/* harmony import */ var _poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poptip.vue?vue&type=script&lang=js */ "oUaZ");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _poptip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poptip.css?vue&type=style&index=0&lang=css */ "xZMI");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _poptip_vue_vue_type_template_id_865185f8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _poptip_vue_vue_type_template_id_865185f8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/poptip/poptip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "WU1R":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/col/col.css?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./col.css?vue&type=style&index=0&lang=css */ "wYVD");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "Wruu":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table-body.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var prefixCls = 'v-table-body';
exports.default = {
  name: prefixCls,
  computed: {
    classs: function classs() {
      var classs = ['' + prefixCls];

      return classs;
    }
  }
};

/***/ }),

/***/ "XCW4":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/row/row.css?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-row{\n    position: relative;\n    margin-left: 0;\n    margin-right: 0;\n    height: auto;\n    zoom: 1;\n    display: block;\n}\n.v-row:after, .v-row:before{\n    content: \"\";\n    display: table;\n}\n.v-row:after {\n    clear: both;\n    visibility: hidden;\n    font-size: 0;\n    height: 0;\n}\n.v-row-flex{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n.v-row-flex-start{\n    justify-content: flex-start;\n}\n.v-row-flex-end{\n    justify-content: flex-end;\n}\n.v-row-flex-center{\n    justify-content: center;\n}\n.v-row-flex-space-around{\n    justify-content: space-around;\n}\n.v-row-flex-space-between{\n    justify-content: space-between;\n}\n.v-row-flex-top{\n    align-items: flex-start;\n}\n.v-row-flex-middle{\n    align-items: center;\n}\n.v-row-flex-bottom{\n    align-items: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "XCsI":
/*!***************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "XaCE":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=template&id=5459268f ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "YKVF":
/*!*********************************************************************!*\
  !*** ./components/table/table-th.vue?vue&type=template&id=79e7a1ef ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_template_id_79e7a1ef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table-th.vue?vue&type=template&id=79e7a1ef */ "CoYb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_template_id_79e7a1ef__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_template_id_79e7a1ef__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "YPVU":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/button/button.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

var prefixCls = 't-btn'; //
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: 'default',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['default', 'text', 'warning', 'error']);
      }
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 50
    },
    size: {
      type: String,
      default: 'default',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['default', 'tiny', 'large', 'auto']);
      }
    },
    long: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    htmlType: {
      type: String,
      default: 'button',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['button', 'submit', 'reset']);
      }
    }
  },
  computed: {
    classs: function classs() {
      var classs = [];

      classs = [[prefixCls + '-type-' + this.type], this.size !== 'auto' ? [prefixCls + '-size-' + this.size] : '', this.long ? [prefixCls + '-size-long'] : ''];

      return classs;
    },
    style: function style() {
      var style = {
        width: this.size === 'auto' ? this.width + 'px' : '',
        height: this.size === 'auto' ? this.height + 'px' : '',
        lineHeight: this.size === 'auto' ? this.height + 'px' : ''
      };

      return style;
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      this.$emit('click', event);
    }
  }
};

/***/ }),

/***/ "YbWx":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "VpqN");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "Yil1":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css */ "1g1O");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "Yvss":
/*!**************************************************************!*\
  !*** ./components/layout/header.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js */ "r2ZW");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Yxze":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/menu/menu-item.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

var profixCls = 'v-menu-item';

exports.default = {
  name: profixCls,
  computed: {
    classs: function classs() {
      var classs = ['' + profixCls];

      return classs;
    }
  }
};

/***/ }),

/***/ "ZGiz":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=template&id=128725f8 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "Zb5R":
/*!**************************************!*\
  !*** ./components/button/button.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_vue_vue_type_template_id_5350d404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.vue?vue&type=template&id=5350d404 */ "jNHk");
/* harmony import */ var _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.vue?vue&type=script&lang=js */ "sFOJ");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _button_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.css?vue&type=style&index=0&lang=css */ "moH6");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _button_vue_vue_type_template_id_5350d404__WEBPACK_IMPORTED_MODULE_0__["render"],
  _button_vue_vue_type_template_id_5350d404__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/button/button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Zb9I":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/tooltip/tooltip.css?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./tooltip.css?vue&type=style&index=0&lang=css */ "Cj/s");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "ZktA":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! ../util/assist.js */ "I05C");

var prefixCls = 'v-table'; //
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: prefixCls,
  props: {
    width: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    classs: function classs() {
      var classs = ['' + prefixCls];

      return classs;
    }
  },
  methods: {
    widthHandle: function widthHandle() {
      var componentNode = (0, _assist.findComponentDownward)(this, 'v-table-tr');
      var width = this.width;
      var length = componentNode.$el.children.length;

      if (length && !width.length) {
        var num = 100 / length;
        for (var i = 0; i < length; i++) {
          this.$set(this.width, i, '' + num);
        }
      };
    }
  },
  mounted: function mounted() {
    if (!this.width.length) this.widthHandle();
  }
};

/***/ }),

/***/ "Zn0i":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/poptip/poptip.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! @util/assist.js */ "I05C");

var _popper = __webpack_require__(/*! @mixins/popper.js */ "deXs");

var _popper2 = _interopRequireDefault(_popper);

var _transferDom = __webpack_require__(/*! @directives/transfer-dom */ "63yH");

var _transferDom2 = _interopRequireDefault(_transferDom);

var _clickoutside = __webpack_require__(/*! @directives/clickoutside */ "IlTG");

var _clickoutside2 = _interopRequireDefault(_clickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var profixCls = 't-poptip';

exports.default = {
  name: profixCls,
  directives: {
    TransferDom: _transferDom2.default,
    ClickoutSide: _clickoutside2.default
  },
  mixins: [_popper2.default],
  props: {
    trigger: {
      type: String,
      default: 'hover',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['hover', 'click']);
      }
    },
    placement: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        var defalut = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end', 'bottom', 'bottom-start', 'bottom-end'];
        return (0, _assist.oneOf)(val, defalut);
      }
    },
    width: {
      type: Number,
      default: 200
    },
    minHeight: {
      type: Number,
      default: 150
    },
    transfer: {
      type: Boolean,
      defalut: true
    },
    isOpen: {
      type: Boolean,
      defalut: false
    },
    always: {
      type: Boolean,
      defalut: false
    },
    disabled: {
      type: Boolean,
      defalut: false
    }
  },
  computed: {
    classs: function classs() {
      var classs = ['' + profixCls];

      return classs;
    },
    eventType: function eventType() {
      if (this.trigger === 'hover') {
        return false;
      } else {
        return true;
      }
    },
    style: function style() {
      var style = {
        'width': this.width + 'px',
        'minHeight': this.minHeight + 'px'
      };

      return style;
    }
  },
  data: function data() {
    return {
      show: this.isOpen
    };
  },
  mounted: function mounted() {
    this.handleVisible();
  },
  methods: {
    handleVisible: function handleVisible() {
      if (this.disabled) {
        this.show = false;

        return true;
      };

      if (this.always) {
        this.show = true;

        return true;
      };

      if (this.eventType) {

        return true;
      }

      return false;
    },
    handleMouseenter: function handleMouseenter() {

      if (this.handleVisible()) {
        return false;
      }

      this.show = true;
    },
    handleMouseleave: function handleMouseleave() {
      if (this.handleVisible()) {

        return false;
      }

      this.show = false;
    },
    handleClick: function handleClick() {
      if (!this.eventType) {
        return false;
      }

      if (this.always) {
        return false;
      }

      if (this.disabled) {
        return false;
      }

      this.show = !this.show;
    },
    handleClickoutSide: function handleClickoutSide() {
      if (this.trigger === 'hover') return false;
      if (this.always) return false;
      if (this.disabled) return false;
      if (this.show) this.show = false;
    }
  }
};

/***/ }),

/***/ "alHY":
/*!**************************************************************!*\
  !*** ./components/row/row.vue?vue&type=template&id=1bf7ea3a ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_template_id_1bf7ea3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./row.vue?vue&type=template&id=1bf7ea3a */ "TDPS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_template_id_1bf7ea3a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_template_id_1bf7ea3a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "cXTn":
/*!*****************************************************************!*\
  !*** ./components/table/table-body.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table-body.vue?vue&type=script&lang=js */ "Wruu");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d7Mn":
/*!*********************************!*\
  !*** ./components/row/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = __webpack_require__(/*! ./row.vue */ "m5Rx");

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _row2.default;

/***/ }),

/***/ "dJqi":
/*!***********************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "dchE":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/poptip/poptip.vue?vue&type=template&id=865185f8 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: _vm.classs,
      on: {
        mouseenter: _vm.handleMouseenter,
        mouseleave: _vm.handleMouseleave,
        click: _vm.handleClick
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "clickout-side",
              rawName: "v-clickout-side",
              value: _vm.handleClickoutSide,
              expression: "handleClickoutSide"
            }
          ],
          ref: "referenceElement"
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            },
            { name: "transfer-dom", rawName: "v-transfer-dom" }
          ],
          ref: "onPopper",
          staticClass: "t-poptip-poper",
          style: _vm.style,
          attrs: { "data-transfer": _vm.transfer }
        },
        [_vm._t("content")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "deXs":
/*!**************************!*\
  !*** ./mixins/popper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popper = __webpack_require__(/*! popper */ "F6X7");

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      $referenceElement: '',
      $onPopper: '',
      $Popper: ''
    };
  },
  mounted: function mounted() {
    var referenceElement = this.$refs.referenceElement;
    var onPopper = this.$refs.onPopper;
    var self = this;

    this.$Popper = new _popper2.default(referenceElement, onPopper, {
      placement: self.placement
    });
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      _this.$Popper.update();
    });
  }
};

/***/ }),

/***/ "dqye":
/*!********************************************************************!*\
  !*** ./components/poptip/poptip.vue?vue&type=template&id=865185f8 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_template_id_865185f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./poptip.vue?vue&type=template&id=865185f8 */ "dchE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_template_id_865185f8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_template_id_865185f8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "e+0j":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=template&id=26701691 ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "eryr":
/*!**********************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./components/input/input.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.t-input{\n    position: relative;\n    line-height: 1;\n}\n\n.t-input .t-input_icon{\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 36px;\n    height: 36px;\n    text-align: center;\n    line-height: 34px;\n    cursor: pointer;\n    user-select: none;\n}\n.t-input .t-input_icon.image{\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfhAQQROA5ODYTbAAAAKklEQVQI12Oc2cBQz4AAjcxbDvgyMjjAuOkNzAwMcKHG9Aa4ypkNM6EcAITpCyeWG1arAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAxLTA0VDE3OjU2OjE0KzA4OjAwfReaGQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMS0wNFQxNzo1NjoxNCswODowMAxKIqUAAAAASUVORK5CYII=) no-repeat center;\n}\n\n.t-input_icon + .t-input_ori{\n    padding-right: 36px;\n}\n\n.t-input_ori{\n    display: inline-block;\n    padding: 3px 10px;\n    box-sizing: border-box;\n    width: 100%;\n    height: 36px;\n    font-size: 14px;\n    color: #666;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #F1EDED;\n    border-radius: 0;\n    outline: none;\n    line-height: normal;\n    border-radius: 4px;\n}\n\n.t-input_ori:hover {\n    border: 1px solid #8492A6;\n}\n\n.t-input_ori:focus {\n    border: 1px solid #FF7438;\n}\n\n.t-input.disabled .t-input_ori{\n    background-color: rgb(239, 242, 247);\n    color: rgb(187, 187, 187);\n    cursor: not-allowed;\n    border-color: rgb(211, 220, 230);\n}\n\n\n.t-input_large{\n    font-size: 16px;\n}\n.t-input_large .t-input_ori{\n    height: 42px;\n}\n\n.t-input_small{\n    font-size: 14px;\n}\n.t-input_small .t-input_ori{\n    height: 30px;\n}\n.t-input_small .t-input_icon{\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n}\n.t-input_small .t-input_icon + .t-input_ori{\n    padding-right: 30px;\n}\n\n.t-input_tiny .t-input_ori{\n    height: 26px;\n    font-size: 12px;\n}\n.t-input_tiny .t-input_icon{\n    width: 26px;\n    height: 26px;\n    line-height: 26px;\n}\n.t-input_tiny .t-input_icon + .t-input_ori{\n    padding-right: 25px;\n}\n", ""]);

// exports


/***/ }),

/***/ "f1wT":
/*!**********************************************************!*\
  !*** ./components/menu/menu.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js */ "P/Fu");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fMBo":
/*!*******************************************************************!*\
  !*** ./components/layout/sider.vue?vue&type=template&id=26701691 ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_template_id_26701691__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./sider.vue?vue&type=template&id=26701691 */ "e+0j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_template_id_26701691__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_template_id_26701691__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "flIm":
/*!***********************************************************************!*\
  !*** ./components/table/table-body.vue?vue&type=template&id=1f2d595d ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_template_id_1f2d595d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table-body.vue?vue&type=template&id=1f2d595d */ "Jn4B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_template_id_1f2d595d__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_template_id_1f2d595d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "gBSP":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&lang=css */ "jLfL");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "gDpH":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/footer.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

var prefixCls = 'v-footer'; //
//
//

exports.default = {
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: '',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['', 'fixed']);
      }
    },
    width: {
      type: Number,
      default: 100
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style: function style() {
      var style = {
        width: this.width + '%',
        overflow: 'hidden'
      };

      if (this.type) {
        style.position = this.type;
        style.bottom = 0;
        style.zIndex = this.index;
      }

      return style;
    },
    classs: function classs() {
      return ['' + prefixCls];
    }
  }
};

/***/ }),

/***/ "gIQc":
/*!*********************************************************************!*\
  !*** ./components/table/table-tr.vue?vue&type=template&id=7a748cf9 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_template_id_7a748cf9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table-tr.vue?vue&type=template&id=7a748cf9 */ "EaPz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_template_id_7a748cf9__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_template_id_7a748cf9__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "gYsK":
/*!**********************************!*\
  !*** ./components/menu/menu.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_a1444c38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=a1444c38 */ "uZpB");
/* harmony import */ var _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js */ "f1wT");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?vue&type=style&index=0&lang=css */ "CN0J");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_a1444c38__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_a1444c38__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/menu/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "gbVJ":
/*!****************************************************************!*\
  !*** ./components/row/row.css?vue&type=style&index=0&lang=css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./row.css?vue&type=style&index=0&lang=css */ "DlSR");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "gvI0":
/*!************************************!*\
  !*** ./components/table/table.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_25bab43c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=25bab43c */ "85aG");
/* harmony import */ var _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js */ "HDxI");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&lang=css */ "GG1C");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_25bab43c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_25bab43c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "hiYR":
/*!*************************************************************!*\
  !*** ./components/layout/sider.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./sider.vue?vue&type=script&lang=js */ "opDa");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "jLfL":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-table{\n    width: 100%;\n    border: 1px solid #e9eaec;\n}\n.v-table-head{\n    background: #f8f8f9;\n    font-weight: bold;\n    font-size: 14px;\n}\n.v-table-head tr{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-head tr th{\n    padding: 15px 0;\n}\n.v-table-body{\n    font-size: 12px;\n    text-align: center;\n}\n.v-table-body tr{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-body tr td{\n    padding: 15px 0;\n}\n.v-table-th{\n    margin: 0 10px;\n}", ""]);

// exports


/***/ }),

/***/ "jNHk":
/*!********************************************************************!*\
  !*** ./components/button/button.vue?vue&type=template&id=5350d404 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_5350d404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./button.vue?vue&type=template&id=5350d404 */ "E0Ta");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_5350d404__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_5350d404__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "jp7P":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/col/col.vue?vue&type=template&id=2cef9ef4 ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.classs, style: _vm.styles },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "kIj4":
/*!************************************!*\
  !*** ./components/input/input.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!./input.css */ "T677");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("3dc17e7c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "lL1/":
/*!***************************************************************!*\
  !*** ./components/table/table-th.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table-th.vue?vue&type=script&lang=js */ "UJip");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_th_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "lbwJ":
/*!*********************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "lznd":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/menu/menu-item.vue?vue&type=template&id=29ef778c ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "m5Rx":
/*!********************************!*\
  !*** ./components/row/row.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row_vue_vue_type_template_id_1bf7ea3a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row.vue?vue&type=template&id=1bf7ea3a */ "alHY");
/* harmony import */ var _row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row.vue?vue&type=script&lang=js */ "TX5u");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _row_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row.css?vue&type=style&index=0&lang=css */ "gbVJ");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _row_vue_vue_type_template_id_1bf7ea3a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _row_vue_vue_type_template_id_1bf7ea3a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/row/row.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "miD4":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=template&id=583deae7 ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.classs }, [
    _c(
      "div",
      { staticClass: "v-header-width", style: _vm.styles },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "mlk9":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./content.vue?vue&type=style&index=0&lang=css */ "msFx");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "moH6":
/*!**********************************************************************!*\
  !*** ./components/button/button.css?vue&type=style&index=0&lang=css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./button.css?vue&type=style&index=0&lang=css */ "Ml+4");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "msFx":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-content{\n    flex: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "nAam":
/*!*****************************************!*\
  !*** ./components/table/table-head.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_head_vue_vue_type_template_id_772f9e9b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-head.vue?vue&type=template&id=772f9e9b */ "neYG");
/* harmony import */ var _table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-head.vue?vue&type=script&lang=js */ "URlm");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&lang=css */ "GG1C");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_head_vue_vue_type_template_id_772f9e9b__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_head_vue_vue_type_template_id_772f9e9b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table-head.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "neYG":
/*!***********************************************************************!*\
  !*** ./components/table/table-head.vue?vue&type=template&id=772f9e9b ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_template_id_772f9e9b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table-head.vue?vue&type=template&id=772f9e9b */ "v4n9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_template_id_772f9e9b__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_template_id_772f9e9b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "njSX":
/*!**********************************************************************!*\
  !*** ./components/layout/layout.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&lang=css */ "5Wxb");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "nwYo":
/*!***************************************************************!*\
  !*** ./components/layout/content.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./content.vue?vue&type=script&lang=js */ "+K/H");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "oUaZ":
/*!**************************************************************!*\
  !*** ./components/poptip/poptip.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./poptip.vue?vue&type=script&lang=js */ "Zn0i");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_poptip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "okHz":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sider = exports.layout = exports.footer = exports.content = exports.header = undefined;

var _header = __webpack_require__(/*! ./header.vue */ "14P4");

var _header2 = _interopRequireDefault(_header);

var _content = __webpack_require__(/*! ./content.vue */ "8DyF");

var _content2 = _interopRequireDefault(_content);

var _footer = __webpack_require__(/*! ./footer.vue */ "4WJF");

var _footer2 = _interopRequireDefault(_footer);

var _layout = __webpack_require__(/*! ./layout.vue */ "J3GE");

var _layout2 = _interopRequireDefault(_layout);

var _sider = __webpack_require__(/*! ./sider.vue */ "zMrb");

var _sider2 = _interopRequireDefault(_sider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.header = _header2.default;
exports.content = _content2.default;
exports.footer = _footer2.default;
exports.layout = _layout2.default;
exports.sider = _sider2.default;

/***/ }),

/***/ "opDa":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

var prefixCls = 'v-sider';
exports.default = {
  name: prefixCls,
  props: {
    width: {
      type: [Number, String],
      default: 200
    }
  },
  computed: {
    classs: function classs() {
      return ['' + prefixCls];
    },
    style: function style() {
      return {
        width: this.width + 'px',
        minWidth: this.width + 'px',
        maxWidth: this.width + 'px'
      };
    }
  }
};

/***/ }),

/***/ "p34N":
/*!****************************************!*\
  !*** ./components/tooltip/tooltip.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_vue_vue_type_template_id_f37d8be8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.vue?vue&type=template&id=f37d8be8 */ "vhhM");
/* harmony import */ var _tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.vue?vue&type=script&lang=js */ "ETaf");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tooltip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.css?vue&type=style&index=0&lang=css */ "rXbH");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _tooltip_vue_vue_type_template_id_f37d8be8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _tooltip_vue_vue_type_template_id_f37d8be8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/tooltip/tooltip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "pi09":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/menu/menu-group.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var profixCls = 'v-menu-item-group';

exports.default = {
  name: profixCls,
  computed: {
    classs: function classs() {
      var classs = ['' + profixCls];

      return classs;
    }
  }
};

/***/ }),

/***/ "r2ZW":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

var prefixCls = 'v-header'; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: prefixCls,
  props: {
    width: {
      type: Number,
      default: 100
    },
    type: {
      type: String,
      default: '',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['', 'fixed']);
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styles: function styles() {
      var style = {
        maxWidth: this.width + 'px'
      };

      if (this.type) {
        style.position = this.type;
        style.zIndex = this.index;
      }

      return style;
    },
    classs: function classs() {
      return ['' + prefixCls];
    }
  }
};

/***/ }),

/***/ "rXbH":
/*!************************************************************************!*\
  !*** ./components/tooltip/tooltip.css?vue&type=style&index=0&lang=css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_tooltip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./tooltip.css?vue&type=style&index=0&lang=css */ "JicO");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_tooltip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_tooltip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_tooltip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_tooltip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_tooltip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "s2e3":
/*!********************************************************************!*\
  !*** ./components/layout/header.vue?vue&type=template&id=583deae7 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_583deae7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=583deae7 */ "miD4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_583deae7__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_583deae7__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "sFOJ":
/*!**************************************************************!*\
  !*** ./components/button/button.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./button.vue?vue&type=script&lang=js */ "YPVU");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "u3v6":
/*!********************************************************************!*\
  !*** ./components/layout/footer.vue?vue&type=template&id=370b86f5 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=370b86f5 */ "+0Im");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "uZpB":
/*!****************************************************************!*\
  !*** ./components/menu/menu.vue?vue&type=template&id=a1444c38 ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_a1444c38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=a1444c38 */ "134p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_a1444c38__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_a1444c38__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "v4n9":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/table/table-head.vue?vue&type=template&id=772f9e9b ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("thead", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "vbul":
/*!***********************************!*\
  !*** ./components/table/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.th = exports.tr = exports.tbody = exports.thead = exports.table = undefined;

var _table = __webpack_require__(/*! ./table.vue */ "gvI0");

var _table2 = _interopRequireDefault(_table);

var _tableHead = __webpack_require__(/*! ./table-head.vue */ "nAam");

var _tableHead2 = _interopRequireDefault(_tableHead);

var _tableBody = __webpack_require__(/*! ./table-body.vue */ "S+LG");

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableTr = __webpack_require__(/*! ./table-tr.vue */ "+q3+");

var _tableTr2 = _interopRequireDefault(_tableTr);

var _tableTh = __webpack_require__(/*! ./table-th.vue */ "5ARJ");

var _tableTh2 = _interopRequireDefault(_tableTh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.table = _table2.default;
exports.thead = _tableHead2.default;
exports.tbody = _tableBody2.default;
exports.tr = _tableTr2.default;
exports.th = _tableTh2.default;

/***/ }),

/***/ "vhhM":
/*!**********************************************************************!*\
  !*** ./components/tooltip/tooltip.vue?vue&type=template&id=f37d8be8 ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_f37d8be8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=template&id=f37d8be8 */ "IZ4Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_f37d8be8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_f37d8be8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "vstv":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/row/row.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assist = __webpack_require__(/*! @util/assist */ "I05C");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//

var prefixCls = 'v-row';

exports.default = {
  name: prefixCls,
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: '',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['', 'flex']);
      }
    },
    justify: {
      type: String,
      default: '',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['', 'start', 'end', 'center', 'space-around', 'space-between']);
      }
    },
    align: {
      type: String,
      default: '',
      validator: function validator(val) {
        return (0, _assist.oneOf)(val, ['', 'top', 'middle', 'bottom']);
      }
    }
  },
  computed: {
    classs: function classs() {
      var _classs;

      var classs = (_classs = {}, _defineProperty(_classs, '' + prefixCls, !this.type), _defineProperty(_classs, prefixCls + '-' + this.type, !!this.type), _defineProperty(_classs, prefixCls + '-flex-' + this.justify, !!this.justify), _defineProperty(_classs, prefixCls + '-flex-' + this.align, !!this.align), _classs);
      return classs;
    },
    styles: function styles() {
      var style = {};
      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 + 'px',
          marginRight: this.gutter / -2 + 'px'
        };
      }

      return style;
    }
  },
  methods: {
    updateGutter: function updateGutter(val) {
      var Col = (0, _assist.findComponentDownward)(this, 'v-col');
      var Cols = (0, _assist.findBrothersComponents)(Col, 'v-col', false);
      if (Cols.length) {
        Cols.forEach(function (child) {
          if (val !== 0) {
            child.gutter = val;
          }
        });
      }
    }
  },
  watch: {
    gutter: function gutter(val) {
      this.updateGutter(val);
    }
  }
};

/***/ }),

/***/ "vxEK":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/tooltip/tooltip.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transferDom = __webpack_require__(/*! @directives/transfer-dom */ "63yH");

var _transferDom2 = _interopRequireDefault(_transferDom);

var _popper = __webpack_require__(/*! @mixins/popper.js */ "deXs");

var _popper2 = _interopRequireDefault(_popper);

var _assist = __webpack_require__(/*! @util/assist */ "I05C");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var profixCls = 't-tooltip';

exports.default = {
  mixins: [_popper2.default],
  directives: {
    TransferDom: _transferDom2.default
  },
  name: profixCls,
  props: {
    content: {
      type: [String, Number],
      default: ''
    },
    placement: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        var defalut = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end', 'bottom', 'bottom-start', 'bottom-end'];
        return (0, _assist.oneOf)(val, defalut);
      }
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    always: {
      type: Boolean,
      defalut: false
    },
    disabled: {
      type: Boolean,
      defalut: false
    },
    transfer: {
      type: Boolean,
      defalut: true
    }
  },
  computed: {
    classs: function classs() {
      var classs = ['' + profixCls];

      return classs;
    }
  },
  data: function data() {
    return {
      show: this.isOpen
    };
  },
  mounted: function mounted() {
    this.handleVisible();
  },
  methods: {
    handleVisible: function handleVisible() {
      if (this.disabled) {
        this.show = false;

        return true;
      };

      if (this.always) {
        this.show = true;

        return true;
      };

      return false;
    },
    handleMouseenter: function handleMouseenter() {
      if (this.handleVisible()) {
        return false;
      };

      this.show = true;
    },
    handleMouseleave: function handleMouseleave() {
      if (this.handleVisible()) {
        return false;
      };

      this.show = false;
    }
  }
};

/***/ }),

/***/ "wHIe":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css */ "Yil1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("bdea7574", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "wYVD":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/col/col.css?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-col-1 {\n    position: relative;\n    display: block\n}\n.v-col-1,.v-col-2,.v-col-3,.v-col-4,.v-col-5,.v-col-6,.v-col-7,.v-col-8,.v-col-9,.v-col-10,.v-col-11,.v-col-12,.v-col-13,.v-col-14,.v-col-15,.v-col-16,.v-col-17,.v-col-18,.v-col-19,.v-col-20,.v-col-21,.v-col-22,.v-col-23,.v-col-24 {\n    float: left;\n}\n.v-col-24 {\n    display: block;\n    width: 100%\n}\n.v-col-23 {\n    display: block;\n    width: 95.83333333%;\n}\n.v-col-22 {\n    display: block;\n    width: 91.66666667%;\n}\n.v-col-21 {\n    display: block;\n    width: 87.5%\n}\n.v-col-20 {\n    display: block;\n    width: 83.33333333%;\n}\n.v-col-19 {\n    display: block;\n    width: 79.16666667%;\n}\n.v-col-18 {\n    display: block;\n    width: 75%\n}\n.v-col-17 {\n    display: block;\n    width: 70.83333333%;\n}\n.v-col-16 {\n    display: block;\n    width: 66.66666667%;\n}\n.v-col-15 {\n    display: block;\n    width: 62.5%;\n}\n.v-col-14 {\n    display: block;\n    width: 58.33333333%;\n}\n.v-col-13 {\n    display: block;\n    width: 54.16666667%;\n}\n.v-col-12 {\n    display: block;\n    width: 50%;\n}\n.v-col-11 {\n    display: block;\n    width: 45.83333333%\n}\n.v-col-10 {\n    display: block;\n    width: 41.66666667%;\n}\n.v-col-9 {\n    display: block;\n    width: 37.5%;\n}\n.v-col-8 {\n    display: block;\n    width: 33.33333333%\n}\n.v-col-7 {\n    display: block;\n    width: 29.16666667%;\n}\n.v-col-6 {\n    display: block;\n    width: 25%;\n}\n.v-col-5 {\n    display: block;\n    width: 20%;\n}\n.v-col-4 {\n    display: block;\n    width: 16.66666667%;\n}\n.v-col-3 {\n    display: block;\n    width: 12.5%;\n}\n.v-col-2 {\n    display: block;\n    width: 8.33333333%\n}\n.v-col-1 {\n    display: block;\n    width: 4.16666667%;\n}\n.v-col-0 {\n    display: none\n}\n.v-col-offset-1 {\n    margin-left: 4.16666667%;\n}\n.v-col-offset-2 {\n    margin-left: 8.33333333%;\n}\n.v-col-offset-3 {\n    margin-left: 12.5%;\n}\n.v-col-offset-4 {\n    margin-left: 16.66666667%;\n}\n.v-col-offset-5 {\n    margin-left: 20.83333333%;\n}\n.v-col-offset-6 {\n    margin-left: 25%;\n}\n.v-col-offset-7 {\n    margin-left: 29.16666667%;\n}\n.v-col-offset-8 {\n    margin-left: 33.33333333%;\n}\n.v-col-offset-9 {\n    margin-left: 37.5%;\n}\n.v-col-offset-10 {\n    margin-left: 41.66666667%;\n}\n.v-col-offset-11 {\n    margin-left: 45.83333333%;\n}\n.v-col-offset-12 {\n    margin-left: 50%;\n}\n.v-col-offset-13 {\n    margin-left: 54.16666667%;\n}\n.v-col-offset-14 {\n    margin-left: 58.33333333%;\n}\n.v-col-offset-15 {\n    margin-left: 62.5%;\n}\n.v-col-offset-16 {\n    margin-left: 66.66666667%;\n}\n.v-col-offset-17 {\n    margin-left: 70.83333333%;\n}\n.v-col-offset-18 {\n    margin-left: 75%;\n}\n.v-col-offset-19 {\n    margin-left: 79.16666667%;\n}\n.v-col-offset-20 {\n    margin-left: 83.33333333%;\n}\n.v-col-offset-21 {\n    margin-left: 87.5%;\n}\n.v-col-offset-22 {\n    margin-left: 91.66666667%;\n}\n.v-col-offset-23 {\n    margin-left: 95.83333333%;\n}\n.v-col-offset-24 {\n    margin-left: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "x+Rl":
/*!*********************************************************************!*\
  !*** ./components/menu/menu-item.vue?vue&type=template&id=29ef778c ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_template_id_29ef778c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu-item.vue?vue&type=template&id=29ef778c */ "lznd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_template_id_29ef778c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_template_id_29ef778c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "xWml":
/*!********************************************************!*\
  !*** ./components/col/col.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./col.vue?vue&type=script&lang=js */ "E8uj");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "xZMI":
/*!**********************************************************************!*\
  !*** ./components/poptip/poptip.css?vue&type=style&index=0&lang=css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_poptip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./poptip.css?vue&type=style&index=0&lang=css */ "FXKm");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_poptip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_poptip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_poptip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_poptip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_poptip_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "zMrb":
/*!*************************************!*\
  !*** ./components/layout/sider.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sider_vue_vue_type_template_id_26701691__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sider.vue?vue&type=template&id=26701691 */ "fMBo");
/* harmony import */ var _sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sider.vue?vue&type=script&lang=js */ "hiYR");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sider_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sider.vue?vue&type=style&index=0&lang=css */ "1s9g");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _sider_vue_vue_type_template_id_26701691__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sider_vue_vue_type_template_id_26701691__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/sider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "zSwL":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./components/poptip/poptip.css?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./poptip.css?vue&type=style&index=0&lang=css */ "LsDb");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLnZ1ZT8yMTY3Iiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9jb250ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXRyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC5jc3M/NWY4NCIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wuY3NzP2RlMDQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUudnVlP2VhYzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlP2QzN2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlP2NkZjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/ZjRiOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbWVudS9tZW51LXN1Yi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS10aC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT85ZDJiIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvdHJhbnNmZXItZG9tLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWdyb3VwLnZ1ZT9jZDRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci52dWU/OTc2MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXRyLnZ1ZT9mMThlIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT8zYThlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUudnVlPzhkNmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b29sdGlwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZT8wMWUwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LXN1Yi52dWU/NmU3ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzPzlkNTYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtdGgudnVlPzA3ODciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yb3cvcm93LmNzcz81MTQzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi52dWU/YzE5YyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jb2wvY29sLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC52dWU/MWY2ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXRyLnZ1ZT8xMjE1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlPzdhNTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19wb3BwZXIuanNAMS4xNC4zQHBvcHBlci5qcy9kaXN0L2VzbS9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT9mYTdjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9wdGlwL3BvcHRpcC5jc3M/YTM5YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz82OWRjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZT8xMjQ4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC52dWU/ZWI4YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzPzFkZDkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS52dWU/YTU1NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3V0aWwvYXNzaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtc3ViLnZ1ZT8xNDdkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLnZ1ZT8zOTYxIiwid2VicGFjazovLy8uL2RpcmVjdGl2ZXMvY2xpY2tvdXRzaWRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY3NzPzc5MWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5LnZ1ZT84ZmNlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlP2Y3NDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3B0aXAvcG9wdGlwLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzP2M4YzciLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvdGFibGUvdGFibGUtdHIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWdyb3VwLnZ1ZT81ZGMzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3M/YmZhNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzPzg0MDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz9jOWY3Iiwid2VicGFjazovLy9jb21wb25lbnRzL21lbnUvbWVudS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtc3ViLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIudnVlP2RjNTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtZ3JvdXAudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/YzU2MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNzcz9jZDgyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy52dWU/YmE2ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BvcHRpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cudnVlPzhiZGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy90YWJsZS90YWJsZS10aC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS1oZWFkLnZ1ZT9hY2ZkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZT83NGNmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9wdGlwL3BvcHRpcC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLmNzcz9jMDMyIiwid2VicGFjazovLy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWJvZHkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/MGEyZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT8wZGQzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci52dWU/MTMyNyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9tZW51L21lbnUtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT84MWUzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY3NzPzcxN2YiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvdGFibGUvdGFibGUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3BvcHRpcC9wb3B0aXAudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWU/ZWQ2MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9wdGlwL3BvcHRpcC52dWU/ODc1MiIsIndlYnBhY2s6Ly8vLi9taXhpbnMvcG9wcGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZT9jOTllIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LnZ1ZT80N2FiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2Q0MDciLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3M/ZmJlNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWU/ZmI4ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wudnVlP2JjYjIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jc3M/ODBhMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXRoLnZ1ZT9iMzk3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlP2VlMWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yb3cvcm93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlPzE3ZjciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/ZGQ1OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzPzczNWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/MjA5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC52dWU/ZDg2ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9jb250ZW50LnZ1ZT83MmQ2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9wdGlwL3BvcHRpcC52dWU/MDM2NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9tZW51L21lbnUtZ3JvdXAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNzcz8wYTRiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi52dWU/ZjMyNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlP2FmYjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9yb3cvcm93LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci52dWU/YWE3MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC52dWU/OTg0ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BvcHRpcC9wb3B0aXAuY3NzP2I3ZDYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9wdGlwL3BvcHRpcC5jc3M/MzUwZSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiVnVlIiwiZXh0ZW5kIiwidGVtcGxhdGUiLCJodG1sIiwiZGF0YSIsImN1cnJlbnRWYWx1ZSIsInZhbHVlIiwicHJvcHMiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsIk51bWJlciIsIm5hbWUiLCJjdXN0b21DbGFzcyIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwicmVhZG9ubHkiLCJhdXRvZm9jdXMiLCJhdXRvQ29tcGxldGUiLCJzaXplIiwiZm9ybSIsImljb24iLCJpbWFnZUljb24iLCJtZXRob2RzIiwidXBkYXRlVmFsdWUiLCJ0cmltIiwiaGFuZGxlQmx1ciIsImV2ZW50IiwiJGVtaXQiLCIkcmVmcyIsImlucHV0IiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVJY29uQ2xpY2siLCJpbnB1dFNlbGVjdCIsInNlbGVjdCIsImNyZWF0ZWQiLCIkb24iLCJ3YXRjaCIsIm5ld1YiLCJnZXRUYXJnZXQiLCJub2RlIiwiZG9jdW1lbnQiLCJib2R5Iiwid2luZG93IiwiTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJkaXJlY3RpdmUiLCJpbnNlcnRlZCIsImVsIiwidm5vZGUiLCJkYXRhc2V0IiwidHJhbnNmZXIiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiaG9tZSIsImNyZWF0ZUNvbW1lbnQiLCJoYXNNb3ZlZE91dCIsInJlcGxhY2VDaGlsZCIsImFwcGVuZENoaWxkIiwiX190cmFuc2ZlckRvbURhdGEiLCJ0YXJnZXQiLCJjb21wb25lbnRVcGRhdGVkIiwicmVmJDEiLCJPYmplY3QiLCJhc3NpZ24iLCJ1bmJpbmQiLCJyZXBsYWNlIiwicmVxdWlyZSIsImNvbXBvbmVudHMiLCJjb2wiLCJyb3ciLCJoZWFkZXIiLCJjb250ZW50IiwiZm9vdGVyIiwibGF5b3V0Iiwic2lkZXIiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiLCJ0ciIsInRoIiwibWVudSIsIm1lbnVJdGVtIiwibWVudUdyb3VwIiwibWVudVN1YiIsInRvb2x0aXAiLCJwb3B0aXAiLCJpbnN0YWxsIiwia2V5cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJDb2wiLCJvbmVPZiIsImZpbmRDb21wb25lbnRVcHdhcmQiLCJmaW5kQ29tcG9uZW50RG93bndhcmQiLCJmaW5kQnJvdGhlcnNDb21wb25lbnRzIiwiZmluZENvbXBvbmVudHNEb3dud2FyZCIsInZhbHVlTGlzdCIsImkiLCJsZW5ndGgiLCJjb250ZXh0IiwiY29tcG9uZW50TmFtZSIsImNvbXBvbmVudE5hbWVzIiwicGFyZW50IiwiJHBhcmVudCIsIiRvcHRpb25zIiwiaW5kZXhPZiIsImNoaWxkcmVucyIsIiRjaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJleGNlcHRNZSIsInJlcyIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImZpbmRJbmRleCIsIl91aWQiLCJzcGxpY2UiLCJyZWR1Y2UiLCJwdXNoIiwiZm91bmRDaGlsZHMiLCJjb25jYXQiLCJiaW5kIiwiYmluZGluZyIsImRvY3VtZW50SGFuZGxlciIsImUiLCJjb250YWlucyIsImV4cHJlc3Npb24iLCJfX3Z1ZUNsaWNrT3V0c2lkZV9fIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSb3ciLCIkcmVmZXJlbmNlRWxlbWVudCIsIiRvblBvcHBlciIsIiRQb3BwZXIiLCJtb3VudGVkIiwicmVmZXJlbmNlRWxlbWVudCIsIm9uUG9wcGVyIiwic2VsZiIsIlBvcHBlciIsInBsYWNlbWVudCIsInVwZGF0ZWQiLCIkbmV4dFRpY2siXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBLGNBQWMsSUFBSTtBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixhQUFhLFFBQVE7QUFD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LHVCQUF1QixHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsb0JBQW9CLHlCQUF5QixHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHOztBQUVwK0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHlNLDZRQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWtILHNZQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBalU7QUFDbEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQWlCQTtBQUNBO0FBQ0EsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCI4eUliXCIpO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGUgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgIDpjbGFzcz1cImNsYXNzc1wiIDpzdHlsZT1cInN0eWxlXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPSdjc3MnPlxuICAgIC52LWNvbnRlbnR7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG5jb25zdCBwcmVmaXhDbHMgPSAndi1jb250ZW50JztcblxuZXhwb3J0IGRlZmF1bHR7XG4gIG5hbWU6IHByZWZpeENscyxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzdHlsZTogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9LFxuICAgIGNsYXNzczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBgJHtwcmVmaXhDbHN9YCxcbiAgICAgIF07XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhNzQ4Y2Y5XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLXRyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YTc0OGNmOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YTc0OGNmOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhNzQ4Y2Y5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2E3NDhjZjknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdGFibGUvdGFibGUtdHIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZWY5ZWY0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyY2VmOWVmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyY2VmOWVmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yY2VmOWVmNFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJjZWY5ZWY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NvbC9jb2wudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6c3R5bGU9XCJzdHlsZVwiIDpjbGFzcz1cImNsYXNzc1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz0nY3NzJz5cbiAgICAudi1sYXlvdXR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgfVxuICAgIC52LWxheW91dC1oYXMtc2lkZXJ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG5jb25zdCBwcmVmaXhDbHMgPSAndi1sYXlvdXQnO1xuZXhwb3J0IGRlZmF1bHR7XG4gIG5hbWU6IHByZWZpeENscyxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc1NpZGVyOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuICBwcm9wczoge1xuICAgIHRvcDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlOiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMudG9wKSB7XG4gICAgICAgIHN0eWxlLnBhZGRpbmdUb3A9IHRoaXMudG9wKydweCc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJvdHRvbSkge1xuICAgICAgICBzdHlsZS5wYWRkaW5nQm90dG9tPSB0aGlzLmJvdHRvbSsncHgnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgICBjbGFzc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYCR7cHJlZml4Q2xzfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBbYCR7cHJlZml4Q2xzfS1oYXMtc2lkZXJgXTogdGhpcy5oYXNTaWRlcixcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZpbmRTaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY2hpbGRyZW4uc29tZSgoY2hpbGQpPT57XG4gICAgICAgIHJldHVybiBjaGlsZC4kb3B0aW9ucy5uYW1lID09PSAndi1zaWRlcic7XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhhc1NpZGVyID0gdGhpcy5maW5kU2lkZXIoKTtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1MzZkNzgyY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ1bFwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGUgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4M2RlYWU3XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ODNkZWFlNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ODNkZWFlNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODNkZWFlN1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU4M2RlYWU3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWhlYWRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi52LWhlYWRlci13aWR0aHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiaW1wb3J0ICcuL2lucHV0LmNzcyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2lucHV0Lmh0bWwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZ1ZS5leHRlbmQoe1xuICB0ZW1wbGF0ZTogaHRtbCxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy52YWx1ZSxcbiAgICB9O1xuICB9LFxuICBwcm9wczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0JyxcbiAgICB9LFxuICAgIHZhbHVlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgIG5hbWU6IFN0cmluZyxcbiAgICBjdXN0b21DbGFzczogJycsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgYXV0b0NvbXBsZXRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnb2ZmJyxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzbWFsbCcsXG4gICAgfSxcbiAgICBmb3JtOiBTdHJpbmcsXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGltYWdlSWNvbjogQm9vbGVhbixcbiAgfSxcbiAgbWV0aG9kczoge1xuXG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlQmx1cjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCBldmVudCk7XG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuJHJlZnMuaW5wdXQudmFsdWUpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVGb2N1czogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZXZlbnQpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVJY29uQ2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kZW1pdCgnaWNvbi1jbGljaycsIGV2ZW50KTtcbiAgICB9LFxuXG4gICAgaW5wdXRTZWxlY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kcmVmcy5pbnB1dC5zZWxlY3QoKTtcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRvbignaW5wdXRTZWxlY3QnLCB0aGlzLmlucHV0U2VsZWN0KTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjdXJyZW50VmFsdWU6IGZ1bmN0aW9uKG5ld1YpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgbmV3Vik7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBuZXdWKTtcbiAgICB9LFxuICB9LFxufSk7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzcwYjg2ZjVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3MGI4NmY1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3MGI4NmY1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MGI4NmY1XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzcwYjg2ZjUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCI8dGVtcGxhdGU+XG4gICAgPGxpIDpjbGFzcz0nY2xhc3NzJyA6c3R5bGU9J3N0eWxlJyBAY2xpY2s9J2l0ZW1IYW5kbGUnPlxuICAgICAgICA8ZGl2IDpjbGFzcz0nW3Byb2ZpeENscyArIFwiLXRpdGxlXCJdJz48c2xvdCBuYW1lPSd0aXRsZSc+PC9zbG90PjwvZGl2PlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9saT5cbjwvdGVtcGxhdGU+XG48c3R5bGUgc3JjPScuL2luZGV4LmNzcycgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuaW1wb3J0IHtmaW5kQ29tcG9uZW50VXB3YXJkfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG5jb25zdCBwcm9maXhDbHMgPSAndi1tZW51LWl0ZW0tc3ViJztcblxuZXhwb3J0IGRlZmF1bHR7XG4gIG5hbWU6IHByb2ZpeENscyxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGFmZXVsdDogJycsXG4gICAgfSxcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpeENsczogcHJvZml4Q2xzLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGhlaWdodDogMCxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzczogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICBgJHtwcm9maXhDbHN9YCwge1xuICAgICAgICAgIFtgYWN0aXZlYF06IHRoaXMuYWN0aXZlLFxuICAgICAgICB9LFxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIGNsYXNzcztcbiAgICB9LFxuICAgIHN0eWxlOiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzdHlsZSA9IHt9O1xuXG4gICAgICBpZiAodGhpcy5oZWlnaHQpIHtcbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgICBzdHlsZS5saW5lSGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGl0ZW1IYW5kbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgZmluZENvbXBvbmVudFVwd2FyZCh0aGlzLCAndi1tZW51JykuJG9uQ2xpY2tIYW5kbGUodGhpcy5uYW1lKTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIGZpbmRDb21wb25lbnRVcHdhcmQodGhpcywgJ3YtbWVudScpICYmIGZpbmRDb21wb25lbnRVcHdhcmQodGhpcywgJ3YtbWVudScpLmhlaWdodCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSBmaW5kQ29tcG9uZW50VXB3YXJkKHRoaXMsICd2LW1lbnUnKS5oZWlnaHQ7XG4gICAgfVxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS10aC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzllN2ExZWZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS10aC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUtdGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5ZTdhMWVmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5ZTdhMWVmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS10aC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzllN2ExZWZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OWU3YTFlZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy90YWJsZS90YWJsZS10aC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImFhMmRjN2I0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGFua3MgdG86IGh0dHBzOi8vZ2l0aHViLmNvbS9haXJ5bGFuZC92dXgvYmxvYi92Mi9zcmMvZGlyZWN0aXZlcy90cmFuc2Zlci1kb20vaW5kZXguanNcbi8vIFRoYW5rcyB0bzogaHR0cHM6Ly9naXRodWIuY29tL2NhbGVicm9zZWxhbmQvdnVlLWRvbS1wb3J0YWxcblxuLyoqXG4gKiBHZXQgdGFyZ2V0IERPTSBOb2RlXG4gKiBAcGFyYW0geyhOb2RlfHN0cmluZ3xCb29sZWFuKX0gW25vZGU9ZG9jdW1lbnQuYm9keV0gRE9NIE5vZGUsIENTUyBzZWxlY3Rvciwgb3IgQm9vbGVhblxuICogQHJldHVybiB7Tm9kZX0gVGhlIHRhcmdldCB0aGF0IHRoZSBlbCB3aWxsIGJlIGFwcGVuZGVkIHRvXG4gKi9cbmZ1bmN0aW9uIGdldFRhcmdldChub2RlKSB7XG4gIGlmIChub2RlID09PSB2b2lkIDApIHtcbiAgICBub2RlID0gZG9jdW1lbnQuYm9keTtcbiAgfVxuICBpZiAobm9kZSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlID8gbm9kZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZSk7XG59XG5cbmNvbnN0IGRpcmVjdGl2ZSA9IHtcbiAgaW5zZXJ0ZWQoZWwsIHt2YWx1ZX0sIHZub2RlKSB7XG4gICAgaWYgKCBlbC5kYXRhc2V0ICYmIGVsLmRhdGFzZXQudHJhbnNmZXIgIT09ICd0cnVlJykgcmV0dXJuIGZhbHNlO1xuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZSA/IGVsLmNsYXNzTmFtZSArICcgdi10cmFuc2Zlci1kb20nIDogJ3YtdHJhbnNmZXItZG9tJztcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZWwucGFyZW50Tm9kZTtcbiAgICBpZiAoIXBhcmVudE5vZGUpIHJldHVybjtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG4gICAgbGV0IGhhc01vdmVkT3V0ID0gZmFsc2U7XG5cbiAgICBpZiAodmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChob21lLCBlbCk7IC8vIG1vdmluZyBvdXQsIGVsIGlzIG5vIGxvbmdlciBpbiB0aGUgZG9jdW1lbnRcbiAgICAgIGdldFRhcmdldCh2YWx1ZSkuYXBwZW5kQ2hpbGQoZWwpOyAvLyBtb3ZpbmcgaW50byBuZXcgcGxhY2VcbiAgICAgIGhhc01vdmVkT3V0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFlbC5fX3RyYW5zZmVyRG9tRGF0YSkge1xuICAgICAgZWwuX190cmFuc2ZlckRvbURhdGEgPSB7XG4gICAgICAgIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG4gICAgICAgIGhvbWU6IGhvbWUsXG4gICAgICAgIHRhcmdldDogZ2V0VGFyZ2V0KHZhbHVlKSxcbiAgICAgICAgaGFzTW92ZWRPdXQ6IGhhc01vdmVkT3V0LFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFVwZGF0ZWQoZWwsIHt2YWx1ZX0pIHtcbiAgICBpZiAoIGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldC50cmFuc2ZlciAhPT0gJ3RydWUnKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gbmVlZCB0byBtYWtlIHN1cmUgY2hpbGRyZW4gYXJlIGRvbmUgdXBkYXRpbmcgKHZzLiBgdXBkYXRlYClcbiAgICBjb25zdCByZWYkMSA9IGVsLl9fdHJhbnNmZXJEb21EYXRhO1xuICAgIGlmICghcmVmJDEpIHJldHVybjtcbiAgICAvLyBob21lcy5nZXQoZWwpXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHJlZiQxLnBhcmVudE5vZGU7XG4gICAgY29uc3QgaG9tZSA9IHJlZiQxLmhvbWU7XG4gICAgY29uc3QgaGFzTW92ZWRPdXQgPSByZWYkMS5oYXNNb3ZlZE91dDsgLy8gcmVjYWxsIHdoZXJlIGhvbWUgaXNcblxuICAgIGlmICghaGFzTW92ZWRPdXQgJiYgdmFsdWUpIHtcbiAgICAgIC8vIHJlbW92ZSBmcm9tIGRvY3VtZW50IGFuZCBsZWF2ZSBwbGFjZWhvbGRlclxuICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaG9tZSwgZWwpO1xuICAgICAgLy8gYXBwZW5kIHRvIHRhcmdldFxuICAgICAgZ2V0VGFyZ2V0KHZhbHVlKS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICBlbC5fX3RyYW5zZmVyRG9tRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGVsLl9fdHJhbnNmZXJEb21EYXRhLCB7aGFzTW92ZWRPdXQ6IHRydWUsIHRhcmdldDogZ2V0VGFyZ2V0KHZhbHVlKX0pO1xuICAgIH0gZWxzZSBpZiAoaGFzTW92ZWRPdXQgJiYgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAvLyBwcmV2aW91c2x5IG1vdmVkLCBjb21pbmcgYmFjayBob21lXG4gICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbCwgaG9tZSk7XG4gICAgICBlbC5fX3RyYW5zZmVyRG9tRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGVsLl9fdHJhbnNmZXJEb21EYXRhLCB7aGFzTW92ZWRPdXQ6IGZhbHNlLCB0YXJnZXQ6IGdldFRhcmdldCh2YWx1ZSl9KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAvLyBhbHJlYWR5IG1vdmVkLCBnb2luZyBzb21ld2hlcmUgZWxzZVxuICAgICAgZ2V0VGFyZ2V0KHZhbHVlKS5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICB9LFxuICB1bmJpbmQoZWwpIHtcbiAgICBpZiAoZWwuZGF0YXNldCAmJiBlbC5kYXRhc2V0LnRyYW5zZmVyICE9PSAndHJ1ZScpIHJldHVybiBmYWxzZTtcbiAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZSgndi10cmFuc2Zlci1kb20nLCAnJyk7XG4gICAgY29uc3QgcmVmJDEgPSBlbC5fX3RyYW5zZmVyRG9tRGF0YTtcbiAgICBpZiAoIXJlZiQxKSByZXR1cm47XG4gICAgaWYgKGVsLl9fdHJhbnNmZXJEb21EYXRhLmhhc01vdmVkT3V0ID09PSB0cnVlKSB7XG4gICAgICBlbC5fX3RyYW5zZmVyRG9tRGF0YS5wYXJlbnROb2RlICYmIGVsLl9fdHJhbnNmZXJEb21EYXRhLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgICBlbC5fX3RyYW5zZmVyRG9tRGF0YSA9IG51bGw7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXJlY3RpdmU7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5jbGFzc3MgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS10ci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0NTkyNjhmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDU5MjY4ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDU5MjY4ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQ1OTI2OGZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NDU5MjY4ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtbGF5b3V0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG4udi1sYXlvdXQtaGFzLXNpZGVye1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidGFibGVcIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLmNsYXNzcyxcbiAgICAgIGF0dHJzOiB7IGNlbGxzcGFjaW5nOiBcIjBcIiwgY2VsbHBhZGRpbmc6IFwiMFwiLCBib3JkZXI6IFwiMFwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImNvbGdyb3VwXCIsXG4gICAgICAgIF92bS5fbChfdm0ud2lkdGgsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiY29sXCIsIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgd2lkdGg6IGl0ZW0gfSB9KVxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgY29sIGZyb20gJ0Bjb21wb25lbnRzL2NvbC9pbmRleCc7Ly8g5YiXXG5pbXBvcnQgcm93IGZyb20gJ0Bjb21wb25lbnRzL3Jvdy9pbmRleCc7Ly8g6KGMXG5cbmltcG9ydCB7aGVhZGVyLCBjb250ZW50LCBmb290ZXIsIGxheW91dCwgc2lkZXJ9IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dC9pbmRleCc7Ly8g5biD5bGAXG5cbmltcG9ydCB7dGFibGUsIHRoZWFkLCB0Ym9keSwgdHIsIHRofSBmcm9tICdAY29tcG9uZW50cy90YWJsZS9pbmRleCc7Ly8g6KGo5Y2VXG5cbmltcG9ydCB7bWVudSwgbWVudUl0ZW0sIG1lbnVHcm91cCwgbWVudVN1Yn0gZnJvbSAnQGNvbXBvbmVudHMvbWVudS9pbmRleCc7Ly8g5a+86Iiq5qCPXG5cbmltcG9ydCBidXR0b24gZnJvbSAnQGNvbXBvbmVudHMvYnV0dG9uL2luZGV4JzsvLyDmjInpkq5cblxuaW1wb3J0IHRvb2x0aXAgZnJvbSAnQGNvbXBvbmVudHMvdG9vbHRpcC9pbmRleCc7Ly8g5rCU5rOh5o+Q56S6XG5cbmltcG9ydCBwb3B0aXAgZnJvbSAnQGNvbXBvbmVudHMvcG9wdGlwL2luZGV4JzsvLyDmqKHlnZfmj5DnpLpcblxuLyoqXG4gKiBAVE9ETzpqaW5nd2VuIGV4YXBtcGxl57uE5Lu25L2T56ev5aSq5aSnXG4gKi9cbi8vIGltcG9ydCBleGFwbXBsZSBmcm9tICcuL2V4YXBtcGxlL2luZGV4JzsvLyDkvovlrZDlsZXnpLpcblxubGV0IGlucHV0ID0gcmVxdWlyZSgnQGNvbXBvbmVudHMvaW5wdXQvaW5wdXQuanMnKTsvLyDovpPlhaXmoYZcblxuXG4vLyB2YXIgTW9kYWwgPSByZXF1aXJlKFwiLi9tb2RhbC9tb2RhbC5qc1wiKTtcbi8vIHZhciBOb3RpY2UgPSByZXF1aXJlKFwiLi9ub3RpY2Uvbm90aWZpY2F0aW9uLmpzXCIpO1xuLy8gdmFyIE1lc3NhZ2UgPSByZXF1aXJlKFwiLi9tZXNzYWdlL2luZGV4LmpzXCIpO1xuLy9cblxuLy8gdmFyIFNlbGVjdCA9IHJlcXVpcmUoXCIuL3NlbGVjdC9zZWxlY3QuanNcIik7XG4vLyB2YXIgT3B0aW9uID0gcmVxdWlyZShcIi4vc2VsZWN0L29wdGlvbi5qc1wiKTtcblxuXG4vLyB2YXIgQ2hlY2tib3ggPSByZXF1aXJlKFwiLi9jaGVja2JveC9jaGVja2JveC5qc1wiKTtcbi8vIHZhciBSYWRpbyA9IHJlcXVpcmUoXCIuL3JhZGlvL3JhZGlvLmpzXCIpO1xuLy8gdmFyIFBvcG92ZXIgPSByZXF1aXJlKFwiLi9wb3BvdmVyL3BvcG92ZXIuanNcIik7XG4vLyB2YXIgUG9wb3ZlckRpcmVjdGl2ZSA9IHJlcXVpcmUoXCIuL3BvcG92ZXIvZGlyZWN0aXZlLmpzXCIpO1xuLy8gdmFyIERyb3Bkb3duID0gcmVxdWlyZShcIi4vZHJvcGRvd24vZHJvcGRvd24uanNcIik7XG4vLyB2YXIgRHJvcGRvd25NZW51ID0gcmVxdWlyZShcIi4vZHJvcGRvd24vZHJvcGRvd24tbWVudS5qc1wiKTtcbi8vIHZhciBEcm9wZG93bkl0ZW0gPSByZXF1aXJlKFwiLi9kcm9wZG93bi9kcm9wZG93bi1pdGVtLmpzXCIpO1xuLy8gLy9cbi8vIHZhciBQYWdpbmF0aW9uID0gcmVxdWlyZShcIi4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzXCIpO1xuXG4vLyB2YXIgSW5maW5pdGVTY3JvbGwgPSByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL2luZmluaXRlLXNjcm9sbC5qc1wiKTtcbi8vIHZhciBMYXp5bG9hZCA9IHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvaW1nLWxhenlsb2FkLmpzXCIpO1xuXG4vLyB2YXIgQ2xvY2sgPSByZXF1aXJlKFwiLi9kYXRldGltZS9waWNrZXIvdGltZS1waWNrZXIuanNcIik7XG4vLyB2YXIgRGF0ZSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lL3BpY2tlci9kYXRlLXBpY2tlci5qc1wiKTtcblxuLy8gdmFyIFZ1ZUF3ZXNvbWVTd2lwZXIgPSByZXF1aXJlKFwiLi9zd2lwcmUvdnVlLWF3ZXNvbWUtc3dpcGVyLmpzXCIpO1xuXG5sZXQgY29tcG9uZW50cyA9IHtcbiAgY29sLFxuICByb3csXG4gIGhlYWRlcixcbiAgY29udGVudCxcbiAgZm9vdGVyLFxuICBsYXlvdXQsXG4gIHNpZGVyLFxuICBidXR0b24sXG4gIGlucHV0LFxuICB0YWJsZSxcbiAgdGhlYWQsXG4gIHRib2R5LFxuICB0cixcbiAgdGgsXG4gIC8vIGV4YXBtcGxlLFxuICBtZW51LFxuICBtZW51SXRlbSxcbiAgbWVudUdyb3VwLFxuICBtZW51U3ViLFxuICB0b29sdGlwLFxuICBwb3B0aXAsXG59O1xuXG5mdW5jdGlvbiBpbnN0YWxsKFZ1ZSkge1xuICBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5mb3JFYWNoKCAodmFsdWUpPT57XG4gICAgVnVlLmNvbXBvbmVudCgndC0nK3ZhbHVlLCBjb21wb25lbnRzW3ZhbHVlXSk7XG4gIH0pO1xuICAvLyBWdWUuY29tcG9uZW50KCd0LXNlbGVjdCcsIFNlbGVjdCk7XG4gIC8vIFZ1ZS5jb21wb25lbnQoJ3Qtb3B0aW9uJywgT3B0aW9uKTtcblxuICAvLyBWdWUuY29tcG9uZW50KCd0LWNoZWNrYm94JywgQ2hlY2tib3gpO1xuICAvLyBWdWUuY29tcG9uZW50KCd0LXJhZGlvJywgUmFkaW8pO1xuICAvLyBWdWUuY29tcG9uZW50KCd0LWRyb3Bkb3duJywgRHJvcGRvd24pO1xuICAvLyBWdWUuY29tcG9uZW50KCd0LWRyb3Bkb3duLW1lbnUnLCBEcm9wZG93bk1lbnUpO1xuICAvLyBWdWUuY29tcG9uZW50KCd0LWRyb3Bkb3duLWl0ZW0nLCBEcm9wZG93bkl0ZW0pO1xuXG4gIC8vIFZ1ZS5jb21wb25lbnQoJ21vZGFsJywgTW9kYWwpO1xuICAvLyBWdWUuY29tcG9uZW50KCdub3RpY2UnLCBOb3RpY2UpO1xuICAvLyBWdWUuY29tcG9uZW50KCdtZXNzYWdlJywgTWVzc2FnZSk7XG5cbiAgLy8gVnVlLmNvbXBvbmVudCgndC1wYWdpbmF0aW9uJywgUGFnaW5hdGlvbik7XG5cbiAgLy8gVnVlLnByb3RvdHlwZS4kbm90aWZ5ID0gTm90aWNlO1xuICAvLyBWdWUucHJvdG90eXBlLiRtZXNzYWdlID0gTWVzc2FnZTtcblxuICAvLyBWdWUuZGlyZWN0aXZlKCdJbmZpbml0ZVNjcm9sbCcsIEluZmluaXRlU2Nyb2xsKTtcbiAgLy8gVnVlLmRpcmVjdGl2ZSgnbGF6eScsIExhenlsb2FkKTtcbiAgLy8gVnVlLmRpcmVjdGl2ZSgncG9wb3ZlcicsIFBvcG92ZXJEaXJlY3RpdmUpO1xuXG4gIC8vIFZ1ZS5jb21wb25lbnQoJ3QtY2xvY2stcGlja2VyJywgQ2xvY2spO1xuICAvLyBWdWUuY29tcG9uZW50KCd0LWRhdGUtcGlja2VyJywgRGF0ZSk7XG4gIC8vIFZ1ZS5jb21wb25lbnQoJ3N3aXBlcicsIFZ1ZUF3ZXNvbWVTd2lwZXIuc3dpcGVyKTtcbiAgLy8gVnVlLmNvbXBvbmVudCgnc3dpcGVyU2xpZGUnLCBWdWVBd2Vzb21lU3dpcGVyLnN3aXBlclNsaWRlKTtcbn07XG5cblxuaWYgKHdpbmRvdy5WdWUpIHtcbiAgLy8gd2luZG93LmluZmluaXRlU2Nyb2xsID0gSW5maW5pdGVTY3JvbGw7XG4gIGluc3RhbGwoVnVlKTtcbn1cbiIsImltcG9ydCB0b29sdGlwIGZyb20gJy4vdG9vbHRpcC52dWUnO1xuZXhwb3J0IGRlZmF1bHQgdG9vbHRpcDtcbiIsImltcG9ydCBtZW51IGZyb20gJy4vbWVudS52dWUnO1xuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudS1pdGVtLnZ1ZSc7XG5pbXBvcnQgbWVudVN1YiBmcm9tICcuL21lbnUtc3ViLnZ1ZSc7XG5pbXBvcnQgbWVudUdyb3VwIGZyb20gJy4vbWVudS1ncm91cC52dWUnO1xuXG5leHBvcnQge21lbnUsIG1lbnVJdGVtLCBtZW51U3ViLCBtZW51R3JvdXB9O1xuIiwiaW1wb3J0IENvbCBmcm9tICcuL2NvbC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7XG4iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWIwMGM3Y2NcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGlcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlLCBvbjogeyBjbGljazogX3ZtLml0ZW1IYW5kbGUgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IFtfdm0ucHJvZml4Q2xzICsgXCItdGl0bGVcIl0gfSwgW192bS5fdChcInRpdGxlXCIpXSwgMiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50LXRvb2x0aXAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbi50LXRvb2x0aXAtaW5uZXJ7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgbWluLWhlaWdodDogMzRweDtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgei1pbmRleDogOTk5OTtcXG5cXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnQtdG9vbHRpcC1hcnJvd3tcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcbi50LXRvb2x0aXAtbWFpblt4LXBsYWNlbWVudD0ndG9wLXN0YXJ0J10sLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSd0b3AnXSwudC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J3RvcC1lbmQnXXtcXG4gIHBhZGRpbmc6IDVweCAwIDhweCAwO1xcbn1cXG4udC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J3RvcC1zdGFydCddIC50LXRvb2x0aXAtYXJyb3csLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSd0b3AnXSAudC10b29sdGlwLWFycm93LC50LXRvb2x0aXAtbWFpblt4LXBsYWNlbWVudD0ndG9wLWVuZCddIC50LXRvb2x0aXAtYXJyb3d7XFxuICBib3R0b206IDNweDtcXG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG4udC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J3RvcC1zdGFydCddIC50LXRvb2x0aXAtYXJyb3d7XFxuICBsZWZ0OiAxMXB4O1xcbn1cXG4udC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J3RvcCddIC50LXRvb2x0aXAtYXJyb3d7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG59XFxuLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSd0b3AtZW5kJ10gLnQtdG9vbHRpcC1hcnJvd3tcXG4gIHJpZ2h0OiAxMXB4O1xcbn1cXG4udC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J2xlZnQtc3RhcnQnXSwudC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J2xlZnQnXSwudC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J2xlZnQtZW5kJ117XFxuICBwYWRkaW5nOiAwIDhweCAwIDVweDtcXG59XFxuLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdsZWZ0LXN0YXJ0J10gLnQtdG9vbHRpcC1hcnJvdywudC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J2xlZnQnXSAudC10b29sdGlwLWFycm93LC50LXRvb2x0aXAtbWFpblt4LXBsYWNlbWVudD0nbGVmdC1lbmQnXSAudC10b29sdGlwLWFycm93e1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItd2lkdGg6IDVweCAwIDVweCA1cHg7XFxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG4udC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J2xlZnQtc3RhcnQnXSAudC10b29sdGlwLWFycm93e1xcbiAgcmlnaHQ6IDNweDtcXG4gIHRvcDogNXB4O1xcbn1cXG4udC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J2xlZnQnXSAudC10b29sdGlwLWFycm93e1xcbiAgcmlnaHQ6IDNweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG59XFxuLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdsZWZ0LWVuZCddIC50LXRvb2x0aXAtYXJyb3d7XFxuICByaWdodDogM3B4O1xcbiAgYm90dG9tOiA1cHg7XFxufVxcbi50LXRvb2x0aXAtbWFpblt4LXBsYWNlbWVudD0ncmlnaHQtc3RhcnQnXSwudC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J3JpZ2h0J10sLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdyaWdodC1lbmQnXXtcXG4gIHBhZGRpbmc6IDAgNXB4IDAgOHB4O1xcbn1cXG4udC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J3JpZ2h0LXN0YXJ0J10gLnQtdG9vbHRpcC1hcnJvdywudC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J3JpZ2h0J10gLnQtdG9vbHRpcC1hcnJvdywudC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J3JpZ2h0LWVuZCddIC50LXRvb2x0aXAtYXJyb3d7XFxuICBsZWZ0OiAzcHg7XFxuICBib3JkZXItd2lkdGg6IDVweCA1cHggNXB4IDA7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG59XFxuLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdyaWdodC1zdGFydCddIC50LXRvb2x0aXAtYXJyb3d7XFxuICByaWdodDogM3B4O1xcbiAgdG9wOiA1cHg7XFxufVxcbi50LXRvb2x0aXAtbWFpblt4LXBsYWNlbWVudD0ncmlnaHQnXSAudC10b29sdGlwLWFycm93e1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG59XFxuLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdyaWdodC1lbmQnXSAudC10b29sdGlwLWFycm93e1xcbiAgcmlnaHQ6IDNweDtcXG4gIGJvdHRvbTogNXB4O1xcbn1cXG4udC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J2JvdHRvbS1zdGFydCddLC50LXRvb2x0aXAtbWFpblt4LXBsYWNlbWVudD0nYm90dG9tJ10sLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdib3R0b20tZW5kJ117XFxuICBwYWRkaW5nOiA4cHggMCA1cHggMDtcXG59XFxuLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdib3R0b20tc3RhcnQnXSAudC10b29sdGlwLWFycm93LC50LXRvb2x0aXAtbWFpblt4LXBsYWNlbWVudD0nYm90dG9tJ10gLnQtdG9vbHRpcC1hcnJvdywudC10b29sdGlwLW1haW5beC1wbGFjZW1lbnQ9J2JvdHRvbS1lbmQnXSAudC10b29sdGlwLWFycm93e1xcbiAgdG9wOiAzcHg7XFxuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG59XFxuLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdib3R0b20tc3RhcnQnXSAudC10b29sdGlwLWFycm93e1xcbiAgbGVmdDogMTFweDtcXG59XFxuLnQtdG9vbHRpcC1tYWluW3gtcGxhY2VtZW50PSdib3R0b20nXSAudC10b29sdGlwLWFycm93e1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxufVxcbi50LXRvb2x0aXAtbWFpblt4LXBsYWNlbWVudD0nYm90dG9tLWVuZCddIC50LXRvb2x0aXAtYXJyb3d7XFxuICByaWdodDogMTFweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRoXCIsIFtcbiAgICBfYyhcImRpdlwiLCBbX2MoXCJzcGFuXCIsIHsgY2xhc3M6IF92bS5jbGFzc3MgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQwNTlkNGM2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImJ1dHRvblwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInQtYnRuXCIsXG4gICAgICBjbGFzczogX3ZtLmNsYXNzcyxcbiAgICAgIHN0eWxlOiBfdm0uc3R5bGUsXG4gICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLmRpc2FibGVkLCB0eXBlOiBfdm0uaHRtbFR5cGUgfSxcbiAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlQ2xpY2sgfVxuICAgIH0sXG4gICAgW19jKFwic3BhblwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3NzXCIgOnN0eWxlPVwic3R5bGVzXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vY29sLmNzcycgbGFuZz0nY3NzJz48L3N0eWxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtmaW5kQ29tcG9uZW50VXB3YXJkfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG5sZXQgcHJlZml4Q2xzID0gJ3YtY29sJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBwcmVmaXhDbHMsXG4gIHByb3BzOiB7XG4gICAgc3Bhbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMjQsXG4gICAgfSxcbiAgICBvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGd1dHRlcjogMCxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBgJHtwcmVmaXhDbHN9YCxcbiAgICAgICAge1xuICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5zcGFufWBdOiB0aGlzLnNwYW4sXG4gICAgICAgICAgW2Ake3ByZWZpeENsc30tb2Zmc2V0LSR7dGhpcy5vZmZzZXR9YF06IHRoaXMub2Zmc2V0LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9LFxuICAgIHN0eWxlczogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc3R5bGUgPSB7fTtcbiAgICAgIGlmICh0aGlzLmd1dHRlciAhPT0wKSB7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGlzLmd1dHRlciAvIDIgKydweCcsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGlzLmd1dHRlciAvIDIgKydweCcsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlR3V0dGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IFJvdyA9IGZpbmRDb21wb25lbnRVcHdhcmQodGhpcywgJ3Ytcm93Jyk7XG5cbiAgICAgIGlmIChSb3cpIHtcbiAgICAgICAgUm93LnVwZGF0ZUd1dHRlcihSb3cuZ3V0dGVyKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyXCIsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJhYWI4YzdmMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiohXG4gKiBAZmlsZU92ZXJ2aWV3IEtpY2thc3MgbGlicmFyeSB0byBjcmVhdGUgYW5kIHBsYWNlIHBvcHBlcnMgbmVhciB0aGVpciByZWZlcmVuY2UgZWxlbWVudHMuXG4gKiBAdmVyc2lvbiAxLjE0LjNcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxudmFyIGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbnZhciB0aW1lb3V0RHVyYXRpb24gPSAwO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgaWYgKGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YobG9uZ2VyVGltZW91dEJyb3dzZXJzW2ldKSA+PSAwKSB7XG4gICAgdGltZW91dER1cmF0aW9uID0gMTtcbiAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBtaWNyb3Rhc2tEZWJvdW5jZShmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5Qcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgZm4oKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFza0RlYm91bmNlKGZuKSB7XG4gIHZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNjaGVkdWxlZCkge1xuICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0sIHRpbWVvdXREdXJhdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG52YXIgc3VwcG9ydHNNaWNyb1Rhc2tzID0gaXNCcm93c2VyICYmIHdpbmRvdy5Qcm9taXNlO1xuXG4vKipcbiogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4qXG4qIEBtZXRob2RcbiogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuKiBAYXJndW1lbnQge0Z1bmN0aW9ufSBmblxuKiBAcmV0dXJucyB7RnVuY3Rpb259XG4qL1xudmFyIGRlYm91bmNlID0gc3VwcG9ydHNNaWNyb1Rhc2tzID8gbWljcm90YXNrRGVib3VuY2UgOiB0YXNrRGVib3VuY2U7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0bzogaXMgYSBmdW5jdGlvbj9cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgdmFyIGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcbiAgcmV0dXJuIHByb3BlcnR5ID8gY3NzW3Byb3BlcnR5XSA6IGNzcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBzY3JvbGwgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFJldHVybiBib2R5LCBgZ2V0U2Nyb2xsYCB3aWxsIHRha2UgY2FyZSB0byBnZXQgdGhlIGNvcnJlY3QgYHNjcm9sbFRvcGAgZnJvbSBpdFxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xuICAgIGNhc2UgJ0hUTUwnOlxuICAgIGNhc2UgJ0JPRFknOlxuICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5O1xuICB9XG5cbiAgLy8gRmlyZWZveCB3YW50IHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG5cbiAgdmFyIF9nZXRTdHlsZUNvbXB1dGVkUHJvcCA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvd1k7XG5cbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuXG52YXIgaXNJRTExID0gaXNCcm93c2VyICYmICEhKHdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUpO1xudmFyIGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGlzSUVcbiAqL1xuZnVuY3Rpb24gaXNJRSh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgIHJldHVybiBpc0lFMTE7XG4gIH1cbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgcmV0dXJuIGlzSUUxMDtcbiAgfVxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBvZmZzZXQgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICB2YXIgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgaWYgKFsnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG5cbmZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnQ7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gKi9cbmZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldFJvb3Qobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQxXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gY29tbW9uIG9mZnNldCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIHZhciBvcmRlciA9IGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICB2YXIgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIHZhciBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgdmFyIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuXG4gIGlmIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiYgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIHx8IHN0YXJ0LmNvbnRhaW5zKGVuZCkpIHtcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXG4gIHZhciBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50KSB7XG4gIHZhciBzaWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAndG9wJztcblxuICB2YXIgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgdmFyIGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbn1cblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50KSB7XG4gIHZhciBzdWJ0cmFjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIHZhciBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZXR1cm4gcmVjdDtcbn1cblxuLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICB2YXIgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgdmFyIHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZXNbJ2JvcmRlcicgKyBzaWRlQSArICdXaWR0aCddLCAxMCkgKyBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVCICsgJ1dpZHRoJ10sIDEwKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChib2R5WydvZmZzZXQnICsgYXhpc10sIGJvZHlbJ3Njcm9sbCcgKyBheGlzXSwgaHRtbFsnY2xpZW50JyArIGF4aXNdLCBodG1sWydvZmZzZXQnICsgYXhpc10sIGh0bWxbJ3Njcm9sbCcgKyBheGlzXSwgaXNJRSgxMCkgPyBodG1sWydvZmZzZXQnICsgYXhpc10gKyBjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCcpXSArIGNvbXB1dGVkU3R5bGVbJ21hcmdpbicgKyAoYXhpcyA9PT0gJ0hlaWdodCcgPyAnQm90dG9tJyA6ICdSaWdodCcpXSA6IDApO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplcygpIHtcbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBpc0lFKDEwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgICB3aWR0aDogZ2V0U2l6ZSgnV2lkdGgnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKVxuICB9O1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbi8qKlxuICogR2l2ZW4gZWxlbWVudCBvZmZzZXRzLCBnZW5lcmF0ZSBhbiBvdXRwdXQgc2ltaWxhciB0byBnZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvZmZzZXRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDbGllbnRSZWN0IGxpa2Ugb3V0cHV0XG4gKi9cbmZ1bmN0aW9uIGdldENsaWVudFJlY3Qob2Zmc2V0cykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG9mZnNldHMsIHtcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcbiAgICBib3R0b206IG9mZnNldHMudG9wICsgb2Zmc2V0cy5oZWlnaHRcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSB7fTtcblxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gIHRyeSB7XG4gICAgaWYgKGlzSUUoMTApKSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICAgICAgdmFyIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0O1xuICAgICAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIHZhciBzaXplcyA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJyA/IGdldFdpbmRvd1NpemVzKCkgOiB7fTtcbiAgdmFyIHdpZHRoID0gc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQucmlnaHQgLSByZXN1bHQubGVmdDtcbiAgdmFyIGhlaWdodCA9IHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuYm90dG9tIC0gcmVzdWx0LnRvcDtcblxuICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XG4gIHZhciB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XG5cbiAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGlmIChob3JpelNjcm9sbGJhciB8fCB2ZXJ0U2Nyb2xsYmFyKSB7XG4gICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XG5cbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICB9XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGNoaWxkcmVuLCBwYXJlbnQpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIHZhciBpc0lFMTAgPSBpc0lFKDEwKTtcbiAgdmFyIGlzSFRNTCA9IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnO1xuICB2YXIgY2hpbGRyZW5SZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGNoaWxkcmVuKTtcbiAgdmFyIHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChjaGlsZHJlbik7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xuICB2YXIgYm9yZGVyVG9wV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCwgMTApO1xuICB2YXIgYm9yZGVyTGVmdFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoLCAxMCk7XG5cbiAgLy8gSW4gY2FzZXMgd2hlcmUgdGhlIHBhcmVudCBpcyBmaXhlZCwgd2UgbXVzdCBpZ25vcmUgbmVnYXRpdmUgc2Nyb2xsIGluIG9mZnNldCBjYWxjXG4gIGlmIChmaXhlZFBvc2l0aW9uICYmIHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcbiAgfVxuICB2YXIgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHRcbiAgfSk7XG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gMDtcblxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCwgMTApO1xuICAgIHZhciBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCwgMTApO1xuXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5ib3R0b20gLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgfVxuXG4gIGlmIChpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb24gPyBwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KSA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudCkge1xuICB2YXIgZXhjbHVkZVNjcm9sbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgdmFyIGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgcmVsYXRpdmVPZmZzZXQgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoZWxlbWVudCwgaHRtbCk7XG4gIHZhciB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcblxuICB2YXIgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xuICB2YXIgc2Nyb2xsTGVmdCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwsICdsZWZ0JykgOiAwO1xuXG4gIHZhciBvZmZzZXQgPSB7XG4gICAgdG9wOiBzY3JvbGxUb3AgLSByZWxhdGl2ZU9mZnNldC50b3AgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3AsXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIHJlbGF0aXZlT2Zmc2V0LmxlZnQgKyByZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gY3VzdG9tQ29udGFpbmVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvIFwiaXNGaXhlZD9cIlxuICovXG5mdW5jdGlvbiBpc0ZpeGVkKGVsZW1lbnQpIHtcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzRml4ZWQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGZpcnN0IHBhcmVudCBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIGEgdHJhbnNmb3JtZWQgcHJvcGVydHkgZGVmaW5lZFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gZmlyc3QgdHJhbnNmb3JtZWQgcGFyZW50IG9yIGRvY3VtZW50RWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgaXNJRSgpKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuICB2YXIgZWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIHdoaWxlIChlbCAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWwsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnKSB7XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbi8qKlxuICogQ29tcHV0ZWQgdGhlIGJvdW5kYXJpZXMgbGltaXRzIGFuZCByZXR1cm4gdGhlbVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWRkaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudCAtIEVsZW1lbnQgdXNlZCB0byBkZWZpbmUgdGhlIGJvdW5kYXJpZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZml4ZWRQb3NpdGlvbiAtIElzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IENvb3JkaW5hdGVzIG9mIHRoZSBib3VuZGFyaWVzXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmYWxzZTtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuXG4gIHZhciBib3VuZGFyaWVzID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgcmVmZXJlbmNlKTtcblxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxuICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcpIHtcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xuICAgIHZhciBib3VuZGFyaWVzTm9kZSA9IHZvaWQgMDtcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKHJlZmVyZW5jZSkpO1xuICAgICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGJvdW5kYXJpZXNFbGVtZW50O1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGJvdW5kYXJpZXNOb2RlLCBvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuXG4gICAgLy8gSW4gY2FzZSBvZiBIVE1MLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGNvbXB1dGF0aW9uXG4gICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnSFRNTCcgJiYgIWlzRml4ZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgdmFyIF9nZXRXaW5kb3dTaXplcyA9IGdldFdpbmRvd1NpemVzKCksXG4gICAgICAgICAgaGVpZ2h0ID0gX2dldFdpbmRvd1NpemVzLmhlaWdodCxcbiAgICAgICAgICB3aWR0aCA9IF9nZXRXaW5kb3dTaXplcy53aWR0aDtcblxuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBib3VuZGFyaWVzLmxlZnQgKz0gcGFkZGluZztcbiAgYm91bmRhcmllcy50b3AgKz0gcGFkZGluZztcbiAgYm91bmRhcmllcy5yaWdodCAtPSBwYWRkaW5nO1xuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBwYWRkaW5nO1xuXG4gIHJldHVybiBib3VuZGFyaWVzO1xufVxuXG5mdW5jdGlvbiBnZXRBcmVhKF9yZWYpIHtcbiAgdmFyIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChwbGFjZW1lbnQsIHJlZlJlY3QsIHBvcHBlciwgcmVmZXJlbmNlLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICB2YXIgcGFkZGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogMDtcblxuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgdmFyIHJlY3RzID0ge1xuICAgIHRvcDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlZlJlY3QudG9wIC0gYm91bmRhcmllcy50b3BcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy5yaWdodCAtIHJlZlJlY3QucmlnaHQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH1cbiAgfTtcblxuICB2YXIgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBrZXlcbiAgICB9LCByZWN0c1trZXldLCB7XG4gICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pXG4gICAgfSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5hcmVhIC0gYS5hcmVhO1xuICB9KTtcblxuICB2YXIgZmlsdGVyZWRBcmVhcyA9IHNvcnRlZEFyZWFzLmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3JlZjIuaGVpZ2h0O1xuICAgIHJldHVybiB3aWR0aCA+PSBwb3BwZXIuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHBvcHBlci5jbGllbnRIZWlnaHQ7XG4gIH0pO1xuXG4gIHZhciBjb21wdXRlZFBsYWNlbWVudCA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5IDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xufVxuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtFbGVtZW50fSBmaXhlZFBvc2l0aW9uIC0gaXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IG51bGw7XG5cbiAgdmFyIGNvbW1vbk9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgcmVmZXJlbmNlKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gIHZhciBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20pO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQpICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQpO1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoICsgeSxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgeFxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZsaXBwZWQgcGxhY2VtZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICB2YXIgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSBDU1MgcG9zaXRpb24gdGhlIFBvcHBlciB3aWxsIGdldCBhcHBsaWVkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzIC0gdGhlIHJlZmVyZW5jZSBvZmZzZXRzICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZW1lbnQgLSBvbmUgb2YgdGhlIHZhbGlkIHBsYWNlbWVudCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZnVuY3Rpb24gZ2V0UG9wcGVyT2Zmc2V0cyhwb3BwZXIsIHJlZmVyZW5jZU9mZnNldHMsIHBsYWNlbWVudCkge1xuICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICAvLyBHZXQgcG9wcGVyIG5vZGUgc2l6ZXNcbiAgdmFyIHBvcHBlclJlY3QgPSBnZXRPdXRlclNpemVzKHBvcHBlcik7XG5cbiAgLy8gQWRkIHBvc2l0aW9uLCB3aWR0aCBhbmQgaGVpZ2h0IHRvIG91ciBvZmZzZXRzIG9iamVjdFxuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHtcbiAgICB3aWR0aDogcG9wcGVyUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHBvcHBlclJlY3QuaGVpZ2h0XG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICB2YXIgaXNIb3JpeiA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgdmFyIHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBtZWFzdXJlbWVudCA9IGlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIHZhciBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIHBvcHBlck9mZnNldHNbbWFpblNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1ttYWluU2lkZV0gKyByZWZlcmVuY2VPZmZzZXRzW21lYXN1cmVtZW50XSAvIDIgLSBwb3BwZXJSZWN0W21lYXN1cmVtZW50XSAvIDI7XG4gIGlmIChwbGFjZW1lbnQgPT09IHNlY29uZGFyeVNpZGUpIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHBvcHBlclJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdO1xuICB9IGVsc2Uge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJPZmZzZXRzO1xufVxuXG4vKipcbiAqIE1pbWljcyB0aGUgYGZpbmRgIG1ldGhvZCBvZiBBcnJheVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5mdW5jdGlvbiBmaW5kKGFyciwgY2hlY2spIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kIGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICByZXR1cm4gYXJyLmZpbmQoY2hlY2spO1xuICB9XG5cbiAgLy8gdXNlIGBmaWx0ZXJgIHRvIG9idGFpbiB0aGUgc2FtZSBiZWhhdmlvciBvZiBgZmluZGBcbiAgcmV0dXJuIGFyci5maWx0ZXIoY2hlY2spWzBdO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgaW5kZXggb2YgdGhlIG1hdGNoaW5nIG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBwcm9wLCB2YWx1ZSkge1xuICAvLyB1c2UgbmF0aXZlIGZpbmRJbmRleCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcbiAgICByZXR1cm4gYXJyLmZpbmRJbmRleChmdW5jdGlvbiAoY3VyKSB7XG4gICAgICByZXR1cm4gY3VyW3Byb3BdID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVzZSBgZmluZGAgKyBgaW5kZXhPZmAgaWYgYGZpbmRJbmRleGAgaXNuJ3Qgc3VwcG9ydGVkXG4gIHZhciBtYXRjaCA9IGZpbmQoYXJyLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9ialtwcm9wXSA9PT0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xufVxuXG4vKipcbiAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gKiBlYWNoIG9mIHRoZW0gd2lsbCB0aGVuIGVkaXQgdGhlIGRhdGEgb2JqZWN0LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fVxuICovXG5mdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gIHZhciBtb2RpZmllcnNUb1J1biA9IGVuZHMgPT09IHVuZGVmaW5lZCA/IG1vZGlmaWVycyA6IG1vZGlmaWVycy5zbGljZSgwLCBmaW5kSW5kZXgobW9kaWZpZXJzLCAnbmFtZScsIGVuZHMpKTtcblxuICBtb2RpZmllcnNUb1J1bi5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgdmFyIGZuID0gbW9kaWZpZXJbJ2Z1bmN0aW9uJ10gfHwgbW9kaWZpZXIuZm47IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvIG9mZnNldHMgdG8gbWFrZSB0aGVtIGEgY29tcGxldGUgY2xpZW50UmVjdCBvYmplY3RcbiAgICAgIC8vIHdlIGRvIHRoaXMgYmVmb3JlIGVhY2ggbW9kaWZpZXIgdG8gbWFrZSBzdXJlIHRoZSBwcmV2aW91cyBvbmUgZG9lc24ndFxuICAgICAgLy8gbWVzcyB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucmVmZXJlbmNlKTtcblxuICAgICAgZGF0YSA9IGZuKGRhdGEsIG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICogUHJlZmVyIGBzY2hlZHVsZVVwZGF0ZWAgb3ZlciBgdXBkYXRlYCBiZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgaWYgKHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGF0YSA9IHtcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICBzdHlsZXM6IHt9LFxuICAgIGFycm93U3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fVxuICB9O1xuXG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0aGlzLnN0YXRlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgZGF0YS5wbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudCh0aGlzLm9wdGlvbnMucGxhY2VtZW50LCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmcpO1xuXG4gIC8vIHN0b3JlIHRoZSBjb21wdXRlZCBwbGFjZW1lbnQgaW5zaWRlIGBvcmlnaW5hbFBsYWNlbWVudGBcbiAgZGF0YS5vcmlnaW5hbFBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuXG4gIGRhdGEucG9zaXRpb25GaXhlZCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkO1xuXG4gIC8vIGNvbXB1dGUgdGhlIHBvcHBlciBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRQb3BwZXJPZmZzZXRzKHRoaXMucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgLy8gcnVuIHRoZSBtb2RpZmllcnNcbiAgZGF0YSA9IHJ1bk1vZGlmaWVycyh0aGlzLm1vZGlmaWVycywgZGF0YSk7XG5cbiAgLy8gdGhlIGZpcnN0IGB1cGRhdGVgIHdpbGwgY2FsbCBgb25DcmVhdGVgIGNhbGxiYWNrXG4gIC8vIHRoZSBvdGhlciBvbmVzIHdpbGwgY2FsbCBgb25VcGRhdGVgIGNhbGxiYWNrXG4gIGlmICghdGhpcy5zdGF0ZS5pc0NyZWF0ZWQpIHtcbiAgICB0aGlzLnN0YXRlLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZShkYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgcmV0dXJuIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIGVuYWJsZWQgPSBfcmVmLmVuYWJsZWQ7XG4gICAgcmV0dXJuIGVuYWJsZWQgJiYgbmFtZSA9PT0gbW9kaWZpZXJOYW1lO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByZWZpeGVkIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICovXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUocHJvcGVydHkpIHtcbiAgdmFyIHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIHZhciB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgdmFyIHRvQ2hlY2sgPSBwcmVmaXggPyAnJyArIHByZWZpeCArIHVwcGVyUHJvcCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBEZXN0cm95IHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXR5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAvLyBkbyBub3QgdXNlIGByZW1vdmVgIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnQgaXRcbiAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHdpbmRvdyBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge1dpbmRvd31cbiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcbiAgdmFyIG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHdpbmRvdztcbn1cblxuZnVuY3Rpb24gYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbFBhcmVudCwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKSB7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQubm9kZU5hbWUgPT09ICdCT0RZJztcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IHNjcm9sbFBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogc2Nyb2xsUGFyZW50O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBpZiAoIWlzQm9keSkge1xuICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpLCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpO1xuICB9XG4gIHNjcm9sbFBhcmVudHMucHVzaCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIFNldHVwIG5lZWRlZCBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIG9wdGlvbnMsIHN0YXRlLCB1cGRhdGVCb3VuZCkge1xuICAvLyBSZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gdXBkYXRlQm91bmQ7XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgLy8gU2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHZhciBzY3JvbGxFbGVtZW50ID0gZ2V0U2Nyb2xsUGFyZW50KHJlZmVyZW5jZSk7XG4gIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxFbGVtZW50LCAnc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQsIHN0YXRlLnNjcm9sbFBhcmVudHMpO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gc2Nyb2xsRWxlbWVudDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIEl0IHdpbGwgYWRkIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCBzdGFydCByZWNhbGN1bGF0aW5nXG4gKiBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAoIXRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIHRoaXMuc3RhdGUgPSBzZXR1cEV2ZW50TGlzdGVuZXJzKHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMsIHRoaXMuc3RhdGUsIHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyB1c2VkIHRvIHVwZGF0ZSB0aGUgcG9wcGVyIHBvc2l0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIHN0YXRlKSB7XG4gIC8vIFJlbW92ZSByZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcblxuICAvLyBSZW1vdmUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIHN0YXRlLnNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcbiAgfSk7XG5cbiAgLy8gUmVzZXQgc3RhdGVcbiAgc3RhdGUudXBkYXRlQm91bmQgPSBudWxsO1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIG9uVXBkYXRlIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG5cbi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09IC0xICYmIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBzdGF0ZSkge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgdmFyIHJlZmVyZW5jZU9mZnNldHMgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgdmFyIHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KG9wdGlvbnMucGxhY2VtZW50LCByZWZlcmVuY2VPZmZzZXRzLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgLy8gQXBwbHkgYHBvc2l0aW9uYCB0byBwb3BwZXIgYmVmb3JlIGFueXRoaW5nIGVsc2UgYmVjYXVzZVxuICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVN0eWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIHggPSBvcHRpb25zLngsXG4gICAgICB5ID0gb3B0aW9ucy55O1xuICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICAvLyBSZW1vdmUgdGhpcyBsZWdhY3kgc3VwcG9ydCBpbiBQb3BwZXIuanMgdjJcblxuICB2YXIgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlJztcbiAgfSkuZ3B1QWNjZWxlcmF0aW9uO1xuICBpZiAobGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IGBncHVBY2NlbGVyYXRpb25gIG9wdGlvbiBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllciBhbmQgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQb3BwZXIuanMhJyk7XG4gIH1cbiAgdmFyIGdwdUFjY2VsZXJhdGlvbiA9IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkID8gbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uIDogb3B0aW9ucy5ncHVBY2NlbGVyYXRpb247XG5cbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIHZhciBvZmZzZXRQYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG5cbiAgLy8gU3R5bGVzXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IHBvcHBlci5wb3NpdGlvblxuICB9O1xuXG4gIC8vIEF2b2lkIGJsdXJyeSB0ZXh0IGJ5IHVzaW5nIGZ1bGwgcGl4ZWwgaW50ZWdlcnMuXG4gIC8vIEZvciBwaXhlbC1wZXJmZWN0IHBvc2l0aW9uaW5nLCB0b3AvYm90dG9tIHByZWZlcnMgcm91bmRlZFxuICAvLyB2YWx1ZXMsIHdoaWxlIGxlZnQvcmlnaHQgcHJlZmVycyBmbG9vcmVkIHZhbHVlcy5cbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgbGVmdDogTWF0aC5mbG9vcihwb3BwZXIubGVmdCksXG4gICAgdG9wOiBNYXRoLnJvdW5kKHBvcHBlci50b3ApLFxuICAgIGJvdHRvbTogTWF0aC5yb3VuZChwb3BwZXIuYm90dG9tKSxcbiAgICByaWdodDogTWF0aC5mbG9vcihwb3BwZXIucmlnaHQpXG4gIH07XG5cbiAgdmFyIHNpZGVBID0geCA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICB2YXIgc2lkZUIgPSB5ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuICAvLyBpZiBncHVBY2NlbGVyYXRpb24gaXMgc2V0IHRvIGB0cnVlYCBhbmQgdHJhbnNmb3JtIGlzIHN1cHBvcnRlZCxcbiAgLy8gIHdlIHVzZSBgdHJhbnNsYXRlM2RgIHRvIGFwcGx5IHRoZSBwb3NpdGlvbiB0byB0aGUgcG9wcGVyIHdlXG4gIC8vIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBzdXBwb3J0ZWQgcHJlZml4ZWQgdmVyc2lvbiBpZiBuZWVkZWRcbiAgdmFyIHByZWZpeGVkUHJvcGVydHkgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuXG4gIC8vIG5vdywgbGV0J3MgbWFrZSBhIHN0ZXAgYmFjayBhbmQgbG9vayBhdCB0aGlzIGNvZGUgY2xvc2VseSAod3RmPylcbiAgLy8gSWYgdGhlIGNvbnRlbnQgb2YgdGhlIHBvcHBlciBncm93cyBvbmNlIGl0J3MgYmVlbiBwb3NpdGlvbmVkLCBpdFxuICAvLyBtYXkgaGFwcGVuIHRoYXQgdGhlIHBvcHBlciBnZXRzIG1pc3BsYWNlZCBiZWNhdXNlIG9mIHRoZSBuZXcgY29udGVudFxuICAvLyBvdmVyZmxvd2luZyBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVG8gYXZvaWQgdGhpcyBwcm9ibGVtLCB3ZSBwcm92aWRlIHR3byBvcHRpb25zICh4IGFuZCB5KSwgd2hpY2ggYWxsb3dcbiAgLy8gdGhlIGNvbnN1bWVyIHRvIGRlZmluZSB0aGUgb2Zmc2V0IG9yaWdpbi5cbiAgLy8gSWYgd2UgcG9zaXRpb24gYSBwb3BwZXIgb24gdG9wIG9mIGEgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIGNhbiBzZXRcbiAgLy8gYHhgIHRvIGB0b3BgIHRvIG1ha2UgdGhlIHBvcHBlciBncm93IHRvd2FyZHMgaXRzIHRvcCBpbnN0ZWFkIG9mXG4gIC8vIGl0cyBib3R0b20uXG4gIHZhciBsZWZ0ID0gdm9pZCAwLFxuICAgICAgdG9wID0gdm9pZCAwO1xuICBpZiAoc2lkZUEgPT09ICdib3R0b20nKSB7XG4gICAgdG9wID0gLW9mZnNldFBhcmVudFJlY3QuaGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gb2Zmc2V0cy50b3A7XG4gIH1cbiAgaWYgKHNpZGVCID09PSAncmlnaHQnKSB7XG4gICAgbGVmdCA9IC1vZmZzZXRQYXJlbnRSZWN0LndpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgfSBlbHNlIHtcbiAgICBsZWZ0ID0gb2Zmc2V0cy5sZWZ0O1xuICB9XG4gIGlmIChncHVBY2NlbGVyYXRpb24gJiYgcHJlZml4ZWRQcm9wZXJ0eSkge1xuICAgIHN0eWxlc1twcmVmaXhlZFByb3BlcnR5XSA9ICd0cmFuc2xhdGUzZCgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCwgMCknO1xuICAgIHN0eWxlc1tzaWRlQV0gPSAwO1xuICAgIHN0eWxlc1tzaWRlQl0gPSAwO1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSc7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3Rod2VyaXNlLCB3ZSB1c2UgdGhlIHN0YW5kYXJkIGB0b3BgLCBgbGVmdGAsIGBib3R0b21gIGFuZCBgcmlnaHRgIHByb3BlcnRpZXNcbiAgICB2YXIgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgIHZhciBpbnZlcnRMZWZ0ID0gc2lkZUIgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gICAgc3R5bGVzW3NpZGVBXSA9IHRvcCAqIGludmVydFRvcDtcbiAgICBzdHlsZXNbc2lkZUJdID0gbGVmdCAqIGludmVydExlZnQ7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSBzaWRlQSArICcsICcgKyBzaWRlQjtcbiAgfVxuXG4gIC8vIEF0dHJpYnV0ZXNcbiAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgJ3gtcGxhY2VtZW50JzogZGF0YS5wbGFjZW1lbnRcbiAgfTtcblxuICAvLyBVcGRhdGUgYGRhdGFgIGF0dHJpYnV0ZXMsIHN0eWxlcyBhbmQgYXJyb3dTdHlsZXNcbiAgZGF0YS5hdHRyaWJ1dGVzID0gX2V4dGVuZHMoe30sIGF0dHJpYnV0ZXMsIGRhdGEuYXR0cmlidXRlcyk7XG4gIGRhdGEuc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgZGF0YS5zdHlsZXMpO1xuICBkYXRhLmFycm93U3R5bGVzID0gX2V4dGVuZHMoe30sIGRhdGEub2Zmc2V0cy5hcnJvdywgZGF0YS5hcnJvd1N0eWxlcyk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgZGVwZW5kcyBmcm9tIGFub3RoZXIgb25lLjxiciAvPlxuICogSXQgY2hlY2tzIGlmIHRoZSBuZWVkZWQgbW9kaWZpZXIgaXMgbGlzdGVkIGFuZCBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzIC0gbGlzdCBvZiBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0aW5nTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGluZyBtb2RpZmllclxuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RlZE5hbWUgLSBuYW1lIG9mIHJlcXVlc3RlZCBtb2RpZmllclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTW9kaWZpZXJSZXF1aXJlZChtb2RpZmllcnMsIHJlcXVlc3RpbmdOYW1lLCByZXF1ZXN0ZWROYW1lKSB7XG4gIHZhciByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgcmV0dXJuIG5hbWUgPT09IHJlcXVlc3RpbmdOYW1lO1xuICB9KTtcblxuICB2YXIgaXNSZXF1aXJlZCA9ICEhcmVxdWVzdGluZyAmJiBtb2RpZmllcnMuc29tZShmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gcmVxdWVzdGVkTmFtZSAmJiBtb2RpZmllci5lbmFibGVkICYmIG1vZGlmaWVyLm9yZGVyIDwgcmVxdWVzdGluZy5vcmRlcjtcbiAgfSk7XG5cbiAgaWYgKCFpc1JlcXVpcmVkKSB7XG4gICAgdmFyIF9yZXF1ZXN0aW5nID0gJ2AnICsgcmVxdWVzdGluZ05hbWUgKyAnYCc7XG4gICAgdmFyIHJlcXVlc3RlZCA9ICdgJyArIHJlcXVlc3RlZE5hbWUgKyAnYCc7XG4gICAgY29uc29sZS53YXJuKHJlcXVlc3RlZCArICcgbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJyArIF9yZXF1ZXN0aW5nICsgJyBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICcgKyBfcmVxdWVzdGluZyArICchJyk7XG4gIH1cbiAgcmV0dXJuIGlzUmVxdWlyZWQ7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzJGFycm93O1xuXG4gIC8vIGFycm93IGRlcGVuZHMgb24ga2VlcFRvZ2V0aGVyIGluIG9yZGVyIHRvIHdvcmtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgIGlmICghZGF0YS5pbnN0YW5jZS5wb3BwZXIuY29udGFpbnMoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgYXJyb3cuZWxlbWVudGAgbXVzdCBiZSBjaGlsZCBvZiBpdHMgcG9wcGVyIGVsZW1lbnQhJyk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgdmFyIHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgdmFyIHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIHZhciBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICB2YXIgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuXG4gIC8vXG4gIC8vIGV4dGVuZHMga2VlcFRvZ2V0aGVyIGJlaGF2aW9yIG1ha2luZyBzdXJlIHRoZSBwb3BwZXIgYW5kIGl0c1xuICAvLyByZWZlcmVuY2UgaGF2ZSBlbm91Z2ggcGl4ZWxzIGluIGNvbmp1Y3Rpb25cbiAgLy9cblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUgPCBwb3BwZXJbc2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC09IHBvcHBlcltzaWRlXSAtIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbc2lkZV0gKyBhcnJvd0VsZW1lbnRTaXplID4gcG9wcGVyW29wU2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdICs9IHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgLSBwb3BwZXJbb3BTaWRlXTtcbiAgfVxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcblxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgcG9wcGVyXG4gIHZhciBjZW50ZXIgPSByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMjtcblxuICAvLyBDb21wdXRlIHRoZSBzaWRlVmFsdWUgdXNpbmcgdGhlIHVwZGF0ZWQgcG9wcGVyIG9mZnNldHNcbiAgLy8gdGFrZSBwb3BwZXIgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcbiAgdmFyIGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIHZhciBwb3BwZXJNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbJ21hcmdpbicgKyBzaWRlQ2FwaXRhbGl6ZWRdLCAxMCk7XG4gIHZhciBwb3BwZXJCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbJ2JvcmRlcicgKyBzaWRlQ2FwaXRhbGl6ZWQgKyAnV2lkdGgnXSwgMTApO1xuICB2YXIgc2lkZVZhbHVlID0gY2VudGVyIC0gZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtIHBvcHBlck1hcmdpblNpZGUgLSBwb3BwZXJCb3JkZXJTaWRlO1xuXG4gIC8vIHByZXZlbnQgYXJyb3dFbGVtZW50IGZyb20gYmVpbmcgcGxhY2VkIG5vdCBjb250aWd1b3VzbHkgdG8gaXRzIHBvcHBlclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbihwb3BwZXJbbGVuXSAtIGFycm93RWxlbWVudFNpemUsIHNpZGVWYWx1ZSksIDApO1xuXG4gIGRhdGEuYXJyb3dFbGVtZW50ID0gYXJyb3dFbGVtZW50O1xuICBkYXRhLm9mZnNldHMuYXJyb3cgPSAoX2RhdGEkb2Zmc2V0cyRhcnJvdyA9IHt9LCBkZWZpbmVQcm9wZXJ0eShfZGF0YSRvZmZzZXRzJGFycm93LCBzaWRlLCBNYXRoLnJvdW5kKHNpZGVWYWx1ZSkpLCBkZWZpbmVQcm9wZXJ0eShfZGF0YSRvZmZzZXRzJGFycm93LCBhbHRTaWRlLCAnJyksIF9kYXRhJG9mZnNldHMkYXJyb3cpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1yaWdodGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIHBsYWNlbWVudHMgPSBbJ2F1dG8tc3RhcnQnLCAnYXV0bycsICdhdXRvLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJywgJ3RvcC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdsZWZ0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnXTtcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG52YXIgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5mdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50KSB7XG4gIHZhciBjb3VudGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICB2YXIgYXJyID0gdmFsaWRQbGFjZW1lbnRzLnNsaWNlKGluZGV4ICsgMSkuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG59XG5cbnZhciBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzFdIHx8ICcnO1xuXG4gIHZhciBmbGlwT3JkZXIgPSBbXTtcblxuICBzd2l0Y2ggKG9wdGlvbnMuYmVoYXZpb3IpIHtcbiAgICBjYXNlIEJFSEFWSU9SUy5GTElQOlxuICAgICAgZmxpcE9yZGVyID0gW3BsYWNlbWVudCwgcGxhY2VtZW50T3Bwb3NpdGVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DT1VOVEVSQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZmxpcE9yZGVyID0gb3B0aW9ucy5iZWhhdmlvcjtcbiAgfVxuXG4gIGZsaXBPcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcbiAgICB2YXIgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIHZhciBvdmVybGFwc1JlZiA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpIHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pO1xuXG4gICAgdmFyIG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICB2YXIgb3ZlcmZsb3dzUmlnaHQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xuICAgIHZhciBvdmVyZmxvd3NUb3AgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihib3VuZGFyaWVzLnRvcCk7XG4gICAgdmFyIG92ZXJmbG93c0JvdHRvbSA9IGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKGJvdW5kYXJpZXMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NCb3VuZGFyaWVzID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3AgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b207XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb24gPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3AgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMucG9wcGVyLCBnZXRQb3BwZXJPZmZzZXRzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCkpO1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24ga2VlcFRvZ2V0aGVyKGRhdGEpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gKiBAYXJndW1lbnQge1N0cmluZ30gbWVhc3VyZW1lbnQgLSBgaGVpZ2h0YCBvciBgd2lkdGhgXG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gKi9cbmZ1bmN0aW9uIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykge1xuICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgdmFyIHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgdmFyIHZhbHVlID0gK3NwbGl0WzFdO1xuICB2YXIgdW5pdCA9IHNwbGl0WzJdO1xuXG4gIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpZiAodW5pdC5pbmRleE9mKCclJykgPT09IDApIHtcbiAgICB2YXIgZWxlbWVudCA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJyVwJzpcbiAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICclcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gcmVmZXJlbmNlT2Zmc2V0cztcbiAgICB9XG5cbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIHZhciBzaXplID0gdm9pZCAwO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cywgYmFzZVBsYWNlbWVudCkge1xuICB2YXIgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgLy8gaW4gdGhpcyB3YXkgdGhlIGZpcnN0IG9mZnNldCB3aWxsIHVzZSBhbiBheGlzIGFuZCB0aGUgc2Vjb25kIG9uZVxuICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gIHZhciB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICB2YXIgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy50cmltKCk7XG4gIH0pO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAvLyB0aGV5IGNvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYSBvciBzcGFjZVxuICB2YXIgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKGZpbmQoZnJhZ21lbnRzLCBmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTE7XG4gIH0pKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKCdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJyk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICB2YXIgc3BsaXRSZWdleCA9IC9cXHMqLFxccyp8XFxzKy87XG4gIHZhciBvcHMgPSBkaXZpZGVyICE9PSAtMSA/IFtmcmFnbWVudHMuc2xpY2UoMCwgZGl2aWRlcikuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSwgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSkpXSA6IFtmcmFnbWVudHNdO1xuXG4gIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gIG9wcyA9IG9wcy5tYXAoZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KSA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICByZXR1cm4gb3BcbiAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgIC8vIGUuZy46IDEwICsgKzUgPT4gWzEwLCArLCArNV1cbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSA9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2UgaWYgKG1lcmdlV2l0aFByZXZpb3VzKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIG9wLmZvckVhY2goZnVuY3Rpb24gKGZyYWcsIGluZGV4Mikge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIF9yZWYpIHtcbiAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQsXG4gICAgICBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIHZhciBvZmZzZXRzID0gdm9pZCAwO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIGJvdW5kYXJpZXNFbGVtZW50ID0gb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuXG4gIC8vIElmIG9mZnNldFBhcmVudCBpcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIHJlYWxseSB3YW50IHRvXG4gIC8vIGdvIG9uZSBzdGVwIHVwIGFuZCB1c2UgdGhlIG5leHQgb2Zmc2V0UGFyZW50IGFzIHJlZmVyZW5jZSB0b1xuICAvLyBhdm9pZCB0byBtYWtlIHRoaXMgbW9kaWZpZXIgY29tcGxldGVseSB1c2VsZXNzIGFuZCBsb29rIGxpa2UgYnJva2VuXG4gIGlmIChkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSA9PT0gYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICBib3VuZGFyaWVzRWxlbWVudCA9IGdldE9mZnNldFBhcmVudChib3VuZGFyaWVzRWxlbWVudCk7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSBwb3BwZXIncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAvLyB0aGUgc2l6ZSBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgaXRzZWxmXG4gIHZhciB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgdmFyIHBvcHBlclN0eWxlcyA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIHZhciB0b3AgPSBwb3BwZXJTdHlsZXMudG9wLFxuICAgICAgbGVmdCA9IHBvcHBlclN0eWxlcy5sZWZ0LFxuICAgICAgdHJhbnNmb3JtID0gcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdO1xuXG4gIHBvcHBlclN0eWxlcy50b3AgPSAnJztcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHBvcHBlclN0eWxlcy50b3AgPSB0b3A7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIG9wdGlvbnMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XG5cbiAgdmFyIG9yZGVyID0gb3B0aW9ucy5wcmlvcml0eTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgdmFyIGNoZWNrID0ge1xuICAgIHByaW1hcnk6IGZ1bmN0aW9uIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIHBsYWNlbWVudCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiBmdW5jdGlvbiBzZWNvbmRhcnkocGxhY2VtZW50KSB7XG4gICAgICB2YXIgbWFpblNpZGUgPSBwbGFjZW1lbnQgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlclttYWluU2lkZV07XG4gICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKHBvcHBlclttYWluU2lkZV0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtIChwbGFjZW1lbnQgPT09ICdyaWdodCcgPyBwb3BwZXIud2lkdGggOiBwb3BwZXIuaGVpZ2h0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIG1haW5TaWRlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHZhciBzaWRlID0gWydsZWZ0JywgJ3RvcCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTEgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgICBwb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBjaGVja1tzaWRlXShwbGFjZW1lbnQpKTtcbiAgfSk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHBvcHBlcjtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gc2hpZnQoZGF0YSkge1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIC8vIGlmIHNoaWZ0IHNoaWZ0dmFyaWF0aW9uIGlzIHNwZWNpZmllZCwgcnVuIHRoZSBtb2RpZmllclxuICBpZiAoc2hpZnR2YXJpYXRpb24pIHtcbiAgICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyO1xuXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgdmFyIHNoaWZ0T2Zmc2V0cyA9IHtcbiAgICAgIHN0YXJ0OiBkZWZpbmVQcm9wZXJ0eSh7fSwgc2lkZSwgcmVmZXJlbmNlW3NpZGVdKSxcbiAgICAgIGVuZDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVttZWFzdXJlbWVudF0gLSBwb3BwZXJbbWVhc3VyZW1lbnRdKVxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGhpZGUoZGF0YSkge1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2hpZGUnLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIGJvdW5kID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnO1xuICB9KS5ib3VuZGFyaWVzO1xuXG4gIGlmIChyZWZSZWN0LmJvdHRvbSA8IGJvdW5kLnRvcCB8fCByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fCByZWZSZWN0LnRvcCA+IGJvdW5kLmJvdHRvbSB8fCByZWZSZWN0LnJpZ2h0IDwgYm91bmQubGVmdCkge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IHRydWU7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSAnJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gZmFsc2U7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBpbm5lcihkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIHN1YnRyYWN0TGVuZ3RoID0gWyd0b3AnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPT09IC0xO1xuXG4gIHBvcHBlcltpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCddID0gcmVmZXJlbmNlW2Jhc2VQbGFjZW1lbnRdIC0gKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xudmFyIG1vZGlmaWVycyA9IHtcbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gc2hpZnQgdGhlIHBvcHBlciBvbiB0aGUgc3RhcnQgb3IgZW5kIG9mIGl0cyByZWZlcmVuY2VcbiAgICogZWxlbWVudC48YnIgLz5cbiAgICogSXQgd2lsbCByZWFkIHRoZSB2YXJpYXRpb24gb2YgdGhlIGBwbGFjZW1lbnRgIHByb3BlcnR5LjxiciAvPlxuICAgKiBJdCBjYW4gYmUgb25lIGVpdGhlciBgLWVuZGAgb3IgYC1zdGFydGAuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBzaGlmdDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0xMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDEwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHNoaWZ0XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdGxlc3MsIGludGVycHJldGVkIGFzIHBpeGVsc1xuICAgKiAtIGAlYCBvciBgJXJgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAqIC0gYCVwYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiAtIGB2d2AsIENTUyB2aWV3cG9ydCB3aWR0aCB1bml0XG4gICAqIC0gYHZoYCwgQ1NTIHZpZXdwb3J0IGhlaWdodCB1bml0XG4gICAqXG4gICAqIEZvciBsZW5ndGggaXMgaW50ZW5kZWQgdGhlIG1haW4gYXhpcyByZWxhdGl2ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBwb3BwZXIuPGJyIC8+XG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUgcGxhY2VtZW50IGlzIGB0b3BgIG9yIGBib3R0b21gLCB0aGUgbGVuZ3RoIHdpbGwgYmUgdGhlXG4gICAqIGB3aWR0aGAuIEluIGNhc2Ugb2YgYGxlZnRgIG9yIGByaWdodGAsIGl0IHdpbGwgYmUgdGhlIGhlaWdodC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IE1vcmUgb24gdGhpcyBbcmVhZGluZyB0aGlzIGlzc3VlXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9pc3N1ZXMvMzczKVxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDBcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBwcmV2ZW50IHRoZSBwb3BwZXIgZnJvbSBiZWluZyBwb3NpdGlvbmVkIG91dHNpZGUgdGhlIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBBbiBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyIHRoaXMgbWFrZXMgc3VyZSB0aGUgcG9wcGVyIGhhcyBhbHdheXMgYSBsaXR0bGUgcGFkZGluZ1xuICAgICAqIGJldHdlZW4gdGhlIGVkZ2VzIG9mIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSdzY3JvbGxQYXJlbnQnXG4gICAgICogQm91bmRhcmllcyB1c2VkIGJ5IHRoZSBtb2RpZmllciwgY2FuIGJlIGBzY3JvbGxQYXJlbnRgLCBgd2luZG93YCxcbiAgICAgKiBgdmlld3BvcnRgIG9yIGFueSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHN1cmUgdGhlIHJlZmVyZW5jZSBhbmQgaXRzIHBvcHBlciBzdGF5IG5lYXIgZWFjaG90aGVyc1xuICAgKiB3aXRob3V0IGxlYXZpbmcgYW55IGdhcCBiZXR3ZWVuIHRoZSB0d28uIEV4cGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlIGFycm93IGlzXG4gICAqIGVuYWJsZWQgYW5kIHlvdSB3YW50IHRvIGFzc3VyZSBpdCB0byBwb2ludCB0byBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEl0IGNhcmVzIG9ubHkgYWJvdXQgdGhlIGZpcnN0IGF4aXMsIHlvdSBjYW4gc3RpbGwgaGF2ZSBwb3BwZXJzIHdpdGggbWFyZ2luXG4gICAqIGJldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAga2VlcFRvZ2V0aGVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTQwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNDAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjoga2VlcFRvZ2V0aGVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1Y3Rpb24gYXJlIG5lZWRlZC5cbiAgICpcbiAgICogSXQgaGFzIG5vIGVmZmVjdCBpZiBubyBgYXJyb3dFbGVtZW50YCBpcyBwcm92aWRlZC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFycm93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTUwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXJyb3csXG4gICAgLyoqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGVsZW1lbnQ9J1t4LWFycm93XScgLSBTZWxlY3RvciBvciBub2RlIHVzZWQgYXMgYXJyb3cgKi9cbiAgICBlbGVtZW50OiAnW3gtYXJyb3ddJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGZsaXAgdGhlIHBvcHBlcidzIHBsYWNlbWVudCB3aGVuIGl0IHN0YXJ0cyB0byBvdmVybGFwIGl0c1xuICAgKiByZWZlcmVuY2UgZWxlbWVudC5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKlxuICAgKiAqKk5PVEU6KiogdGhpcyBtb2RpZmllciB3aWxsIGludGVycnVwdCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUgYW5kIHdpbGxcbiAgICogcmVzdGFydCBpdCBpZiBpdCBkZXRlY3RzIHRoZSBuZWVkIHRvIGZsaXAgdGhlIHBsYWNlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGZsaXA6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA2MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBmbGlwLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8QXJyYXl9IGJlaGF2aW9yPSdmbGlwJ1xuICAgICAqIFRoZSBiZWhhdmlvciB1c2VkIHRvIGNoYW5nZSB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LiBJdCBjYW4gYmUgb25lIG9mXG4gICAgICogYGZsaXBgLCBgY2xvY2t3aXNlYCwgYGNvdW50ZXJjbG9ja3dpc2VgIG9yIGFuIGFycmF5IHdpdGggYSBsaXN0IG9mIHZhbGlkXG4gICAgICogcGxhY2VtZW50cyAod2l0aCBvcHRpb25hbCB2YXJpYXRpb25zKS5cbiAgICAgKi9cbiAgICBiZWhhdmlvcjogJ2ZsaXAnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBmbGlwIGlmIGl0IGhpdHMgdGhlIGVkZ2VzIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0ndmlld3BvcnQnXG4gICAgICogVGhlIGVsZW1lbnQgd2hpY2ggd2lsbCBkZWZpbmUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHBvcHBlciBwb3NpdGlvbixcbiAgICAgKiB0aGUgcG9wcGVyIHdpbGwgbmV2ZXIgYmUgcGxhY2VkIG91dHNpZGUgb2YgdGhlIGRlZmluZWQgYm91bmRhcmllc1xuICAgICAqIChleGNlcHQgaWYga2VlcFRvZ2V0aGVyIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHRoZSBwb3BwZXIgZmxvdyB0b3dhcmQgdGhlIGlubmVyIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQnkgZGVmYXVsdCwgd2hlbiB0aGlzIG1vZGlmaWVyIGlzIGRpc2FibGVkLCB0aGUgcG9wcGVyIHdpbGwgYmUgcGxhY2VkIG91dHNpZGVcbiAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaW5uZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA3MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPWZhbHNlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGlubmVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gaGlkZSB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlXG4gICAqIHBvcHBlciBib3VuZGFyaWVzLiBJdCB3aWxsIHNldCBhIGB4LW91dC1vZi1ib3VuZGFyaWVzYCBhdHRyaWJ1dGUgd2hpY2ggY2FuXG4gICAqIGJlIHVzZWQgdG8gaGlkZSB3aXRoIGEgQ1NTIHNlbGVjdG9yIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGlzXG4gICAqIG91dCBvZiBib3VuZGFyaWVzLlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBoaWRlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTgwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaGlkZVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNkIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nYm90dG9tJ11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFggYXhpcyAoYGJvdHRvbWAgb3IgYHRvcGApLiBBS0EgWCBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGBib3R0b21gXG4gICAgICovXG4gICAgeDogJ2JvdHRvbScsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2xlZnQnXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWSBheGlzIChgbGVmdGAgb3IgYHJpZ2h0YCkuIEFLQSBZIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYHJpZ2h0YFxuICAgICAqL1xuICAgIHk6ICdyaWdodCdcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3Ugb3duIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXBwbHlTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj05MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDkwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFwcGx5U3R5bGUsXG4gICAgLyoqIEBwcm9wIHtGdW5jdGlvbn0gKi9cbiAgICBvbkxvYWQ6IGFwcGx5U3R5bGVPbkxvYWQsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjEwLjAsIHRoZSBwcm9wZXJ0eSBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllclxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzZCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZFxuICB9XG59O1xuXG4vKipcbiAqIFRoZSBgZGF0YU9iamVjdGAgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbnMgdXNlZCBieSBQb3BwZXIuanNcbiAqIHRoaXMgb2JqZWN0IGdldCBwYXNzZWQgdG8gbW9kaWZpZXJzIGFuZCB0byB0aGUgYG9uQ3JlYXRlYCBhbmQgYG9uVXBkYXRlYCBjYWxsYmFja3MuXG4gKiBAbmFtZSBkYXRhT2JqZWN0XG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5pbnN0YW5jZSBUaGUgUG9wcGVyLmpzIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5wbGFjZW1lbnQgUGxhY2VtZW50IGFwcGxpZWQgdG8gcG9wcGVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCBQbGFjZW1lbnQgb3JpZ2luYWxseSBkZWZpbmVkIG9uIGluaXRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5mbGlwcGVkIFRydWUgaWYgcG9wcGVyIGhhcyBiZWVuIGZsaXBwZWQgYnkgZmxpcCBtb2RpZmllclxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmhpZGUgVHJ1ZSBpZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0IG9mIGJvdW5kYXJpZXMsIHVzZWZ1bCB0byBrbm93IHdoZW4gdG8gaGlkZSB0aGUgcG9wcGVyLlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsIGl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdywgaXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHMuXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnBvcHBlciBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucmVmZXJlbmNlIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5hcnJvd10gYHRvcGAgYW5kIGBsZWZ0YCBvZmZzZXRzLCBvbmx5IG9uZSBvZiB0aGVtIHdpbGwgYmUgZGlmZmVyZW50IGZyb20gMFxuICovXG5cbi8qKlxuICogRGVmYXVsdCBvcHRpb25zIHByb3ZpZGVkIHRvIFBvcHBlci5qcyBjb25zdHJ1Y3Rvci48YnIgLz5cbiAqIFRoZXNlIGNhbiBiZSBvdmVycmlkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFzIDNyZCBhcmd1bWVudCBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZVxuICogc3RydWN0dXJlIG9mIHRoaXMgb2JqZWN0LCBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbnZhciBEZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudFxuICAgKiBAcHJvcCB7UG9wcGVyLnBsYWNlbWVudHN9IHBsYWNlbWVudD0nYm90dG9tJ1xuICAgKi9cbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCBwb3BwZXIgdG8gcG9zaXRpb24gaXQgc2VsZiBpbiAnZml4ZWQnIG1vZGVcbiAgICogQHByb3Age0Jvb2xlYW59IHBvc2l0aW9uRml4ZWQ9ZmFsc2VcbiAgICovXG4gIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGV2ZW50cyAocmVzaXplLCBzY3JvbGwpIGFyZSBpbml0aWFsbHkgZW5hYmxlZFxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gZXZlbnRzRW5hYmxlZD10cnVlXG4gICAqL1xuICBldmVudHNFbmFibGVkOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgcG9wcGVyIHdoZW5cbiAgICogeW91IGNhbGwgdGhlIGBkZXN0cm95YCBtZXRob2QuXG4gICAqIEBwcm9wIHtCb29sZWFufSByZW1vdmVPbkRlc3Ryb3k9ZmFsc2VcbiAgICovXG4gIHJlbW92ZU9uRGVzdHJveTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZC48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25DcmVhdGV9XG4gICAqL1xuICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoKSB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLCB0aGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoKSB7fSxcblxuICAvKipcbiAgICogTGlzdCBvZiBtb2RpZmllcnMgdXNlZCB0byBtb2RpZnkgdGhlIG9mZnNldHMgYmVmb3JlIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci5cbiAgICogVGhleSBwcm92aWRlIG1vc3Qgb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBQb3BwZXIuanNcbiAgICogQHByb3Age21vZGlmaWVyc31cbiAgICovXG4gIG1vZGlmaWVyczogbW9kaWZpZXJzXG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBvbkNyZWF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgb25VcGRhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8vIFV0aWxzXG4vLyBNZXRob2RzXG52YXIgUG9wcGVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFBvcHBlci5qcyBpbnN0YW5jZVxuICAgKiBAY2xhc3MgUG9wcGVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gWW91ciBjdXN0b20gb3B0aW9ucyB0byBvdmVycmlkZSB0aGUgb25lcyBkZWZpbmVkIGluIFtEZWZhdWx0c10oI2RlZmF1bHRzKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGluc3RhbmNlIC0gVGhlIGdlbmVyYXRlZCBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICovXG4gIGZ1bmN0aW9uIFBvcHBlcihyZWZlcmVuY2UsIHBvcHBlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9wcGVyKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90aGlzLnVwZGF0ZSk7XG4gICAgfTtcblxuICAgIC8vIG1ha2UgdXBkYXRlKCkgZGVib3VuY2VkLCBzbyB0aGF0IGl0IG9ubHkgcnVucyBhdCBtb3N0IG9uY2UtcGVyLXRpY2tcbiAgICB0aGlzLnVwZGF0ZSA9IGRlYm91bmNlKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgLy8gd2l0aCB7fSB3ZSBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggdGhlIG9wdGlvbnMgaW5zaWRlIGl0XG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAvLyBpbml0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAgIGlzQ3JlYXRlZDogZmFsc2UsXG4gICAgICBzY3JvbGxQYXJlbnRzOiBbXVxuICAgIH07XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIGFuZCBwb3BwZXIgZWxlbWVudHMgKGFsbG93IGpRdWVyeSB3cmFwcGVycylcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZSAmJiByZWZlcmVuY2UuanF1ZXJ5ID8gcmVmZXJlbmNlWzBdIDogcmVmZXJlbmNlO1xuICAgIHRoaXMucG9wcGVyID0gcG9wcGVyICYmIHBvcHBlci5qcXVlcnkgPyBwb3BwZXJbMF0gOiBwb3BwZXI7XG5cbiAgICAvLyBEZWVwIG1lcmdlIG1vZGlmaWVycyBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLCBvcHRpb25zLm1vZGlmaWVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0gX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnNbbmFtZV0gfHwge30sIG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZWZhY3RvcmluZyBtb2RpZmllcnMnIGxpc3QgKE9iamVjdCA9PiBBcnJheSlcbiAgICB0aGlzLm1vZGlmaWVycyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tb2RpZmllcnMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSwgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0pO1xuICAgIH0pXG4gICAgLy8gc29ydCB0aGUgbW9kaWZpZXJzIGJ5IG9yZGVyXG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcbiAgICB9KTtcblxuICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgIC8vIHN1Y2ggY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBvZiBpdHMgbW9kaWZpZXJcbiAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllck9wdGlvbnMpIHtcbiAgICAgIGlmIChtb2RpZmllck9wdGlvbnMuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQpKSB7XG4gICAgICAgIG1vZGlmaWVyT3B0aW9ucy5vbkxvYWQoX3RoaXMucmVmZXJlbmNlLCBfdGhpcy5wb3BwZXIsIF90aGlzLm9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgX3RoaXMuc3RhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHZhciBldmVudHNFbmFibGVkID0gdGhpcy5vcHRpb25zLmV2ZW50c0VuYWJsZWQ7XG4gICAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAgIC8vIHNldHVwIGV2ZW50IGxpc3RlbmVycywgdGhleSB3aWxsIHRha2UgY2FyZSBvZiB1cGRhdGUgdGhlIHBvc2l0aW9uIGluIHNwZWNpZmljIHNpdHVhdGlvbnNcbiAgICAgIHRoaXMuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQgPSBldmVudHNFbmFibGVkO1xuICB9XG5cbiAgLy8gV2UgY2FuJ3QgdXNlIGNsYXNzIHByb3BlcnRpZXMgYmVjYXVzZSB0aGV5IGRvbid0IGdldCBsaXN0ZWQgaW4gdGhlXG4gIC8vIGNsYXNzIHByb3RvdHlwZSBhbmQgYnJlYWsgc3R1ZmYgbGlrZSBTaW5vbiBzdHVic1xuXG5cbiAgY3JlYXRlQ2xhc3MoUG9wcGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMSgpIHtcbiAgICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcbiAgICAgIHJldHVybiBkZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZSBhbiB1cGRhdGUsIGl0IHdpbGwgcnVuIG9uIHRoZSBuZXh0IFVJIHVwZGF0ZSBhdmFpbGFibGVcbiAgICAgKiBAbWV0aG9kIHNjaGVkdWxlVXBkYXRlXG4gICAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIHV0aWxpdGllcyB1c2VmdWwgd2hlbiB3cml0aW5nIGN1c3RvbSBtb2RpZmllcnMuXG4gICAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAgICogaW5jbHVkZSBgcG9wcGVyLXV0aWxzLmpzYCBiZWZvcmUgYHBvcHBlci5qc2AuXG4gICAgICpcbiAgICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAgICogYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MiEgVXNlIHRoZSBQb3BwZXJVdGlscyBtb2R1bGUgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICAgKiBEdWUgdG8gdGhlIGhpZ2ggaW5zdGFiaWxpdHkgb2YgdGhlIG1ldGhvZHMgY29udGFpbmVkIGluIFV0aWxzLCB3ZSBjYW4ndFxuICAgICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuOFxuICAgICAqIEBtZW1iZXIgVXRpbHNcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cbiAgfV0pO1xuICByZXR1cm4gUG9wcGVyO1xufSgpO1xuXG4vKipcbiAqIFRoZSBgcmVmZXJlbmNlT2JqZWN0YCBpcyBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgY29tcGF0aWJsZSB3aXRoIFBvcHBlci5qc1xuICogYW5kIGxldHMgeW91IHVzZSBpdCBhcyByZXBsYWNlbWVudCBvZiBhIHJlYWwgRE9NIG5vZGUuPGJyIC8+XG4gKiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwb3NpdGlvbiBhIHBvcHBlciByZWxhdGl2ZWx5IHRvIGEgc2V0IG9mIGNvb3JkaW5hdGVzXG4gKiBpbiBjYXNlIHlvdSBkb24ndCBoYXZlIGEgRE9NIG5vZGUgdG8gdXNlIGFzIHJlZmVyZW5jZS5cbiAqXG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmZXJlbmNlT2JqZWN0LCBwb3BwZXJOb2RlKTtcbiAqIGBgYFxuICpcbiAqIE5COiBUaGlzIGZlYXR1cmUgaXNuJ3Qgc3VwcG9ydGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwXG4gKiBAbmFtZSByZWZlcmVuY2VPYmplY3RcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGRhdGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNldCBvZiBjb29yZGluYXRlcyBjb21wYXRpYmxlIHdpdGggdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBtZXRob2QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRXaWR0aFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudEhlaWdodFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cblxuXG5Qb3BwZXIuVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuUG9wcGVyLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuUG9wcGVyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHBlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcHBlci5qcy5tYXBcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wb3B0aXAuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDM5MDY5ODBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcG9wdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcG9wdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBidXR0b24gZnJvbSAnLi9idXR0b24udnVlJztcbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbjtcbiIsIi8vIOWIpOaWreWPguaVsOaYr+WQpuaYr+WFtuS4reS5i+S4gFxuZXhwb3J0IGZ1bmN0aW9uIG9uZU9mKHZhbHVlLCB2YWx1ZUxpc3QpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWUgPT09IHZhbHVlTGlzdFtpXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8g5a+75om+54i257qn57uE5Lu2XG5leHBvcnQgZnVuY3Rpb24gZmluZENvbXBvbmVudFVwd2FyZChjb250ZXh0LCBjb21wb25lbnROYW1lLCBjb21wb25lbnROYW1lcykge1xuICBpZiAodHlwZW9mIGNvbXBvbmVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29tcG9uZW50TmFtZXMgPSBbY29tcG9uZW50TmFtZV07XG4gIH0gZWxzZSB7XG4gICAgY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lO1xuICB9XG5cbiAgbGV0IHBhcmVudCA9IGNvbnRleHQuJHBhcmVudDtcbiAgbGV0IG5hbWUgPSBwYXJlbnQuJG9wdGlvbnMubmFtZTtcblxuICB3aGlsZSAocGFyZW50ICYmICghbmFtZSB8fCBjb21wb25lbnROYW1lcy5pbmRleE9mKG5hbWUpIDwgMCkpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICBpZiAocGFyZW50KSBuYW1lID0gcGFyZW50LiRvcHRpb25zLm5hbWU7XG4gIH1cbiAgcmV0dXJuIHBhcmVudDtcbn1cblxuLy8g5a+75om+5a2Q57qn57uE5Lu2XG5leHBvcnQgZnVuY3Rpb24gZmluZENvbXBvbmVudERvd253YXJkKGNvbnRleHQsIGNvbXBvbmVudE5hbWUpIHtcbiAgY29uc3QgY2hpbGRyZW5zID0gY29udGV4dC4kY2hpbGRyZW47XG4gIGxldCBjaGlsZHJlbiA9IG51bGw7XG5cbiAgaWYgKGNoaWxkcmVucy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVucykge1xuICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLiRvcHRpb25zLm5hbWU7XG4gICAgICBpZiAobmFtZSA9PT0gY29tcG9uZW50TmFtZSkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkcmVuID0gZmluZENvbXBvbmVudERvd253YXJkKGNoaWxkLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG4vLyDlr7vmib7lkIznuqfnu4Tku7ZcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQnJvdGhlcnNDb21wb25lbnRzKGNvbnRleHQsIGNvbXBvbmVudE5hbWUsIGV4Y2VwdE1lID0gdHJ1ZSkge1xuICBsZXQgcmVzID0gY29udGV4dC4kcGFyZW50LiRjaGlsZHJlbi5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gaXRlbS4kb3B0aW9ucy5uYW1lID09PSBjb21wb25lbnROYW1lO1xuICB9KTtcbiAgbGV0IGluZGV4ID0gcmVzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5fdWlkID09PSBjb250ZXh0Ll91aWQpO1xuICBpZiAoZXhjZXB0TWUpIHJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICByZXR1cm4gcmVzO1xufVxuXG4vLyBGaW5kIGNvbXBvbmVudHMgZG93bndhcmRcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29tcG9uZW50c0Rvd253YXJkKGNvbnRleHQsIGNvbXBvbmVudE5hbWUpIHtcbiAgcmV0dXJuIGNvbnRleHQuJGNoaWxkcmVuLnJlZHVjZSgoY29tcG9uZW50cywgY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gY29tcG9uZW50TmFtZSkgY29tcG9uZW50cy5wdXNoKGNoaWxkKTtcbiAgICBjb25zdCBmb3VuZENoaWxkcyA9IGZpbmRDb21wb25lbnRzRG93bndhcmQoY2hpbGQsIGNvbXBvbmVudE5hbWUpO1xuICAgIHJldHVybiBjb21wb25lbnRzLmNvbmNhdChmb3VuZENoaWxkcyk7XG4gIH0sIFtdKTtcbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1tZW51e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udi1tZW51LWl0ZW0tc3Vie1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1tZW51LWhvcml6b250YWwgLnYtbWVudS1pdGVtLXN1Yi5hY3RpdmV7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY3NzNEO1xcbiAgICBjb2xvcjogI0ZGNzczRDtcXG59XFxuLnYtbWVudS1ob3Jpem9udGFse1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG4udi1tZW51LWhvcml6b250YWw6OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6ICNkZGRlZTE7XFxufVxcbi52LW1lbnUtaG9yaXpvbnRhbCAudi1tZW51LWl0ZW0tc3Vie1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbCAudi1tZW51LWl0ZW0tc3Vie1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG4udi1tZW51LXZlcnRpY2FsOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgYmFja2dyb3VuZDogI2RkZGVlMTtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbCAudi1tZW51LWl0ZW0tc3ViLmFjdGl2ZXtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0ZGNzczRDtcXG4gICAgY29sb3I6ICNGRjc3M0Q7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LXN1Yi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUtc3ViLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBfdm0uY2xhc3NzLFxuICAgICAgb246IHsgbW91c2VlbnRlcjogX3ZtLmhhbmRsZU1vdXNlZW50ZXIsIG1vdXNlbGVhdmU6IF92bS5oYW5kbGVNb3VzZWxlYXZlIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcInJlZmVyZW5jZUVsZW1lbnRcIiB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJ0cmFuc2Zlci1kb21cIiwgcmF3TmFtZTogXCJ2LXRyYW5zZmVyLWRvbVwiIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlZjogXCJvblBvcHBlclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdG9vbHRpcC1tYWluXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRyYW5zZmVyXCI6IF92bS50cmFuc2ZlciB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInQtdG9vbHRpcC1hcnJvd1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0LXRvb2x0aXAtaW5uZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jb250ZW50KSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBmdW5jdGlvbiBkb2N1bWVudEhhbmRsZXIoZSkge1xuICAgICAgaWYgKGVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChiaW5kaW5nLmV4cHJlc3Npb24pIHtcbiAgICAgICAgYmluZGluZy52YWx1ZShlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWwuX192dWVDbGlja091dHNpZGVfXyA9IGRvY3VtZW50SGFuZGxlcjtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50SGFuZGxlcik7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgfSxcbiAgdW5iaW5kOiBmdW5jdGlvbihlbCwgYmluZGluZykge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWwuX192dWVDbGlja091dHNpZGVfXyk7XG4gICAgZGVsZXRlIGVsLl9fdnVlQ2xpY2tPdXRzaWRlX187XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEyODcyNWY4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMjg3MjVmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMjg3MjVmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMjg3MjVmOFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzEyODcyNWY4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdG9vbHRpcC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjNTc1YjRlMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90b29sdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdG9vbHRpcC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRib2R5XCIsIHsgY2xhc3M6IF92bS5jbGFzc3MgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnQtcG9wdGlwe1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbi50LXBvcHRpcC1wb3BlcntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB6LWluZGV4OiAxMDYwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIyNWMzMmI4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDx0cj48c2xvdD48L3Nsb3Q+PC90cj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vdGFibGUuY3NzJyBsYW5nPVwiY3NzXCI+PC9zdHlsZT5cblxuPHNjcmlwdD5cbmNvbnN0IHByZWZpeENscyA9ICd2LXRhYmxlLXRyJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogcHJlZml4Q2xzLFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUtZ3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LWdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjU3OTg5YTNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDx1bCA6Y2xhc3M9J2NsYXNzcycgOnN0eWxlPSdzdHlsZSc+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3VsPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzcmM9Jy4vaW5kZXguY3NzJyBsYW5nPSdjc3MnPjwvc3R5bGU+XG48c2NyaXB0PlxuaW1wb3J0IHtvbmVPZiwgZmluZENvbXBvbmVudHNEb3dud2FyZH0gZnJvbSAnQHV0aWwvYXNzaXN0JztcblxuY29uc3QgcHJvZml4Q2xzID0gJ3YtbWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICBuYW1lOiBwcm9maXhDbHMsXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlTmFtZToge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgbW9kZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hvcml6b250YWwnLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCwgWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10pOy8vIGhvcml6b250YWzvvIjmsLTlubPvvIkg5ZKMIHZlcnRpY2Fs77yI5Z6C55u077yJXG4gICAgICB9LFxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzcyA9IFtcbiAgICAgICAgYCR7cHJvZml4Q2xzfWAsXG4gICAgICAgIGAke3Byb2ZpeENsc30tJHt0aGlzLm1vZGV9YCxcbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgfSxcbiAgICBzdHlsZTogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc3R5bGUgPSB7fTtcblxuICAgICAgaWYgKHRoaXMud2lkdGggIT09IDApIHtcbiAgICAgICAgc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAkb25DbGlja0hhbmRsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgICB0aGlzLiRhY3RpdmVIYW5kbGUodmFsKTtcbiAgICAgIHRoaXMuJGVtaXQoJ29uOnNlbGVjdCcsIHZhbCk7XG4gICAgfSxcbiAgICAkYWN0aXZlSGFuZGxlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBmaW5kQ29tcG9uZW50c0Rvd253YXJkKHRoaXMsICd2LW1lbnUtaXRlbS1zdWInKS5mb3JFYWNoKCh2YWwpPT57XG4gICAgICAgIGlmICh2YWwubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIHZhbC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kYWN0aXZlSGFuZGxlKHRoaXMuYWN0aXZlTmFtZSk7XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPHRoZWFkIDpjbGFzcz1cImNsYXNzc1wiPjxzbG90Pjwvc2xvdD48L3RoZWFkPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNyYz0nLi90YWJsZS5jc3MnIGxhbmc9XCJjc3NcIj48L3N0eWxlPlxuXG48c2NyaXB0PlxuY29uc3QgcHJlZml4Q2xzID0gJ3YtdGFibGUtaGVhZCc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IHByZWZpeENscyxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzcyA9IFtcbiAgICAgICAgYCR7cHJlZml4Q2xzfWAsXG4gICAgICBdO1xuXG4gICAgICByZXR1cm4gY2xhc3NzO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21lbnUtc3ViLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZWEyNTU1MlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lbnUtc3ViLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tZW51LXN1Yi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWVhMjU1NTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWVhMjU1NTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21lbnUtc3ViLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZWEyNTU1MlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzllYTI1NTUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21lbnUvbWVudS1zdWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWVudS1ncm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RkYWIyNTZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZW51LWdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tZW51LWdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZGRhYjI1NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZGRhYjI1NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWVudS1ncm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RkYWIyNTZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZGRhYjI1NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tZW51L21lbnUtZ3JvdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZWY3NzhjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVudS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI5ZWY3NzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI5ZWY3NzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZWY3NzhjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjllZjc3OGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS1ib2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZjJkNTk1ZFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFmMmQ1OTVkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFmMmQ1OTVkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS1ib2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZjJkNTk1ZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFmMmQ1OTVkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3RhYmxlL3RhYmxlLWJvZHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjUzNGMxMGNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGVzIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBwb3B0aXAgZnJvbSAnLi9wb3B0aXAudnVlJztcbmV4cG9ydCBkZWZhdWx0IHBvcHRpcDtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnQtYnRue1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4udC1idG4uZGlzYWJsZWQsIC50LWJ0bltkaXNhYmxlZF0sLnQtYnRuLmRpc2FibGVkOmhvdmVyLC50LWJ0bltkaXNhYmxlZF06aG92ZXJ7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGNvbG9yOiAjYmJiZWM0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICBib3JkZXItY29sb3I6ICNkZGRlZTE7XFxufVxcbi50LWJ0bi1zaXplLXRpbnl7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XFxufVxcbi50LWJ0bi1zaXplLWRlZmF1bHR7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZzogNnB4IDE4cHg7XFxufVxcbi50LWJ0bi1zaXplLWxhcmdle1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDhweCAyOHB4O1xcbn1cXG4udC1idG4tc2l6ZS1sb25ne1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG4udC1idG4tdHlwZS1kZWZhdWx0e1xcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgICBjb2xvcjogIzQ5NTA2MDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGVlMTtcXG59XFxuLnQtYnRuLXR5cGUtZGVmYXVsdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICM1N2EzZjM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1N2EzZjM7XFxufVxcbi50LWJ0bi10eXBlLXRleHR7XFxuICAgIGNvbG9yOiAjNDk1MDYwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbn1cXG4udC1idG4tdHlwZS10ZXh0OmhvdmVye1xcbiAgICBjb2xvcjogIzU3YTNmMztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG59XFxuLnQtYnRuLXR5cGUtd2FybmluZ3tcXG4gICAgYmFja2dyb3VuZDogI2ZmOTkwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjk5MDA7XFxufVxcbi50LWJ0bi10eXBlLXdhcm5pbmc6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNmZmFkMzM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZhZDMzO1xcbn1cXG4udC1idG4tdHlwZS1lcnJvcntcXG4gICAgYmFja2dyb3VuZDogI2VkM2YxNDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZDNmMTQ7XFxufVxcbi50LWJ0bi10eXBlLWVycm9yOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjZjE2NTQzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkM2YxNDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiPHRlbXBsYXRlPlxuICAgIDx0aD48ZGl2PjxzcGFuIDpjbGFzcz0nY2xhc3NzJz48c2xvdD48L3Nsb3Q+PC9zcGFuPjwvZGl2PjwvdGg+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc3JjPScuL3RhYmxlLmNzcycgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5jb25zdCBwcmVmaXhDbHMgPSAndi10YWJsZS10aCc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IHByZWZpeENscyxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzcyA9IFtcbiAgICAgICAgYCR7cHJlZml4Q2xzfWAsXG4gICAgICBdO1xuXG4gICAgICByZXR1cm4gY2xhc3NzO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtaGVhZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInQtaW5wdXRcXFwiIDpjbGFzcz1cXFwiW3NpemU/KCd0LWlucHV0Xycrc2l6ZSk6Jycse2Rpc2FibGVkOmRpc2FibGVkfV1cXFwiPlxcblxcbiAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMgdC1pbnB1dF9pY29uXFxcIiB2LWlmPVxcXCJpY29uXFxcIiBAY2xpY2s9XFxcImhhbmRsZUljb25DbGlja1xcXCI+e3tpY29ufX08L2k+XFxuICAgIDxpIGNsYXNzPVxcXCJ0LWlucHV0X2ljb24gaW1hZ2VcXFwiIHYtaWY9XFxcImltYWdlSWNvblxcXCIgQGNsaWNrPVxcXCJoYW5kbGVJY29uQ2xpY2tcXFwiPjwvaT5cXG5cXG4gICAgPGlucHV0XFxuICAgICAgICBjbGFzcz1cXFwidC1pbnB1dF9vcmlcXFwiXFxuICAgICAgICA6Y2xhc3M9XFxcIltjdXN0b21DbGFzc11cXFwiXFxuICAgICAgICA6dHlwZT1cXFwidHlwZVxcXCJcXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cXFwicGxhY2Vob2xkZXJcXFwiXFxuICAgICAgICA6bmFtZT1cXFwibmFtZVxcXCJcXG4gICAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuICAgICAgICA6cmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIlxcbiAgICAgICAgOmF1dG9jb21wbGV0ZT1cXFwiYXV0b0NvbXBsZXRlXFxcIlxcbiAgICAgICAgOmF1dG9mb2N1cz1cXFwiYXV0b2ZvY3VzXFxcIlxcbiAgICAgICAgOnZhbHVlPVxcXCJ2YWx1ZVxcXCJcXG4gICAgICAgIDpmb3JtPVxcXCJmb3JtXFxcIlxcbiAgICAgICAgcmVmPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIEBpbnB1dD1cXFwidXBkYXRlVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcXFwiXFxuICAgICAgICBAZm9jdXM9XFxcImhhbmRsZUZvY3VzXFxcIlxcbiAgICAgICAgQGJsdXI9XFxcImhhbmRsZUJsdXJcXFwiXFxuICAgID5cXG5cXG48L2Rpdj5cIjsiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcG9wdGlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NjUxODVmOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BvcHRpcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdGlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3BvcHRpcC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODY1MTg1ZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODY1MTg1ZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BvcHRpcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODY1MTg1ZjhcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NjUxODVmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9wb3B0aXAvcG9wdGlwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGJvZHkgOmNsYXNzPVwiY2xhc3NzXCI+PHNsb3Q+PC9zbG90PjwvdGJvZHk+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc3JjPScuL3RhYmxlLmNzcycgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5jb25zdCBwcmVmaXhDbHMgPSAndi10YWJsZS1ib2R5JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogcHJlZml4Q2xzLFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzczogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICBgJHtwcmVmaXhDbHN9YCxcbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1yb3d7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB6b29tOiAxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnYtcm93OmFmdGVyLCAudi1yb3c6YmVmb3Jle1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxufVxcbi52LXJvdzphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG4udi1yb3ctZmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4udi1yb3ctZmxleC1zdGFydHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4udi1yb3ctZmxleC1lbmR7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi52LXJvdy1mbGV4LWNlbnRlcntcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi52LXJvdy1mbGV4LXNwYWNlLWFyb3VuZHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi52LXJvdy1mbGV4LXNwYWNlLWJldHdlZW57XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnYtcm93LWZsZXgtdG9we1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLnYtcm93LWZsZXgtbWlkZGxle1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udi1yb3ctZmxleC1ib3R0b217XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwidC1idG5cIlxuICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgIDp0eXBlPVwiaHRtbFR5cGVcIlxuICAgICAgICA6Y2xhc3M9XCJjbGFzc3NcIlxuICAgICAgICA6c3R5bGU9XCJzdHlsZVwiXG4gICAgICAgIEBjbGljaz1cImhhbmRsZUNsaWNrXCJcbiAgICA+PHNwYW4+PHNsb3Q+PC9zbG90Pjwvc3Bhbj48L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgc3JjPScuL2J1dHRvbi5jc3MnIGxhbmc9XCJjc3NcIj48L3N0eWxlPlxuPHNjcmlwdD5cbmltcG9ydCB7b25lT2Z9IGZyb20gJy4uL3V0aWwvYXNzaXN0JztcblxuY29uc3QgcHJlZml4Q2xzID0gJ3QtYnRuJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBwcmVmaXhDbHMsXG4gIHByb3BzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCwgWydkZWZhdWx0JywgJ3RleHQnLCAnd2FybmluZycsICdlcnJvciddKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAwLFxuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1MCxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0JyxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHJldHVybiBvbmVPZih2YWwsIFsnZGVmYXVsdCcsICd0aW55JywgJ2xhcmdlJywgJ2F1dG8nXSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgbG9uZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGh0bWxUeXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYnV0dG9uJyxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHJldHVybiBvbmVPZih2YWwsIFsnYnV0dG9uJywgJ3N1Ym1pdCcsICdyZXNldCddKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzcyA9IFtdO1xuXG4gICAgICBjbGFzc3MgPSBbXG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LXR5cGUtYCt0aGlzLnR5cGVdLFxuICAgICAgICB0aGlzLnNpemUgIT09ICdhdXRvJyA/IFtgJHtwcmVmaXhDbHN9LXNpemUtYCt0aGlzLnNpemVdIDogJycsXG4gICAgICAgIHRoaXMubG9uZyA/IFtgJHtwcmVmaXhDbHN9LXNpemUtbG9uZ2BdIDogJycsXG4gICAgICBdO1xuXG4gICAgICByZXR1cm4gY2xhc3NzO1xuICAgIH0sXG4gICAgc3R5bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5zaXplID09PSAnYXV0bycgPyB0aGlzLndpZHRoKydweCcgOiAnJyxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnNpemUgPT09ICdhdXRvJyA/IHRoaXMuaGVpZ2h0KydweCcgOiAnJyxcbiAgICAgICAgbGluZUhlaWdodDogdGhpcy5zaXplID09PSAnYXV0bycgPyB0aGlzLmhlaWdodCsncHgnIDogJycsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz0nY2xhc3NzJz48c2xvdD48L3Nsb3Q+PC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIHNyYz0nLi9pbmRleC5jc3MnIGxhbmc9J2Nzcyc+PC9zdHlsZT5cbjxzY3JpcHQ+XG5jb25zdCBwcm9maXhDbHMgPSAndi1tZW51LWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdHtcbiAgbmFtZTogcHJvZml4Q2xzLFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzczogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICBgJHtwcm9maXhDbHN9YCxcbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzUwZDQwNFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTM1MGQ0MDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTM1MGQ0MDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM1MGQ0MDRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MzUwZDQwNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90b29sdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90b29sdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdG9vbHRpcC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGFibGUgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgYm9yZGVyPVwiMFwiIDpjbGFzcz1cImNsYXNzc1wiPlxuICAgICAgICA8Y29sZ3JvdXA+XG4gICAgICAgICAgICA8Y29sIHYtZm9yPScoaXRlbSxpbmRleCkgaW4gd2lkdGgnIDprZXk9J2luZGV4JyA6d2lkdGg9J2l0ZW0nIC8+XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3RhYmxlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNyYz0nLi90YWJsZS5jc3MnIGxhbmc9XCJjc3NcIj48L3N0eWxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtmaW5kQ29tcG9uZW50RG93bndhcmR9IGZyb20gJy4uL3V0aWwvYXNzaXN0LmpzJztcblxuY29uc3QgcHJlZml4Q2xzID0gJ3YtdGFibGUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBwcmVmaXhDbHMsXG4gIHByb3BzOiB7XG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzcyA9IFtcbiAgICAgICAgYCR7cHJlZml4Q2xzfWAsXG4gICAgICBdO1xuXG4gICAgICByZXR1cm4gY2xhc3NzO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB3aWR0aEhhbmRsZTogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY29tcG9uZW50Tm9kZSA9IGZpbmRDb21wb25lbnREb3dud2FyZCh0aGlzLCAndi10YWJsZS10cicpO1xuICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIGxldCBsZW5ndGggPSBjb21wb25lbnROb2RlLiRlbC5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW5ndGggJiYgIXdpZHRoLmxlbmd0aCkge1xuICAgICAgICBsZXQgbnVtID0gMTAwIC8gbGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy4kc2V0KHRoaXMud2lkdGgsIGksIGAke251bX1gKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMud2lkdGgubGVuZ3RoKSB0aGlzLndpZHRoSGFuZGxlKCk7XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPSdjbGFzc3MnXG4gICAgQG1vdXNlZW50ZXI9XCJoYW5kbGVNb3VzZWVudGVyXCJcbiAgICBAbW91c2VsZWF2ZT1cImhhbmRsZU1vdXNlbGVhdmVcIlxuICAgIEBjbGljaz0naGFuZGxlQ2xpY2snXG4gID5cbiAgICA8ZGl2IHJlZj1cInJlZmVyZW5jZUVsZW1lbnRcIiB2LWNsaWNrb3V0LXNpZGU9J2hhbmRsZUNsaWNrb3V0U2lkZSc+PHNsb3QgLz48L2Rpdj5cbiAgICA8ZGl2IFxuICAgICAgcmVmPVwib25Qb3BwZXJcIlxuICAgICAgdi1zaG93PSdzaG93J1xuICAgICAgY2xhc3M9XCJ0LXBvcHRpcC1wb3BlclwiXG4gICAgICA6c3R5bGU9J3N0eWxlJ1xuICAgICAgOmRhdGEtdHJhbnNmZXI9J3RyYW5zZmVyJ1xuICAgICAgdi10cmFuc2Zlci1kb20+XG4gICAgICA8c2xvdCBuYW1lPSdjb250ZW50JyAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4gIFxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzcmM9Jy4vcG9wdGlwLmNzcycgbGFuZz0nY3NzJz48L3N0eWxlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IHtvbmVPZn0gZnJvbSAnQHV0aWwvYXNzaXN0LmpzJztcbiAgaW1wb3J0IHBvcHBlciBmcm9tICdAbWl4aW5zL3BvcHBlci5qcyc7XG4gIGltcG9ydCBUcmFuc2ZlckRvbSBmcm9tICdAZGlyZWN0aXZlcy90cmFuc2Zlci1kb20nO1xuICBpbXBvcnQgQ2xpY2tvdXRTaWRlIGZyb20gJ0BkaXJlY3RpdmVzL2NsaWNrb3V0c2lkZSc7XG5cbiAgbGV0IHByb2ZpeENscyA9ICd0LXBvcHRpcCc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IHByb2ZpeENscyxcbiAgICBkaXJlY3RpdmVzOntcbiAgICAgIFRyYW5zZmVyRG9tLFxuICAgICAgQ2xpY2tvdXRTaWRlXG4gICAgfSxcbiAgICBtaXhpbnM6IFtwb3BwZXJdLFxuICAgIHByb3BzOntcbiAgICAgIHRyaWdnZXI6e1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdob3ZlcicsXG4gICAgICAgIHZhbGlkYXRvcjpmdW5jdGlvbih2YWwpe1xuICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWydob3ZlcicsJ2NsaWNrJ10pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcGxhY2VtZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3RvcCcsXG4gICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgY29uc3QgZGVmYWx1dCA9IFtcbiAgICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICAgJ3RvcC1zdGFydCcsXG4gICAgICAgICAgICAndG9wLWVuZCcsXG4gICAgICAgICAgICAncmlnaHQnLFxuICAgICAgICAgICAgJ3JpZ2h0LXN0YXJ0JyxcbiAgICAgICAgICAgICdyaWdodC1lbmQnLFxuICAgICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICAgJ2xlZnQtc3RhcnQnLFxuICAgICAgICAgICAgJ2xlZnQtZW5kJyxcbiAgICAgICAgICAgICdib3R0b20nLFxuICAgICAgICAgICAgJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgICAgICAnYm90dG9tLWVuZCcsXG4gICAgICAgICAgXTtcbiAgICAgICAgICByZXR1cm4gb25lT2YodmFsLCBkZWZhbHV0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHdpZHRoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMjAwLFxuICAgICAgfSxcbiAgICAgIG1pbkhlaWdodDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDE1MCxcbiAgICAgIH0sXG4gICAgICB0cmFuc2Zlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhbHV0OiB0cnVlXG4gICAgICB9LFxuICAgICAgaXNPcGVuOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmFsdXQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGFsd2F5czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhbHV0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhbHV0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgY2xhc3NzOmZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICAgIGAke3Byb2ZpeENsc31gLFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICB9LFxuICAgICAgZXZlbnRUeXBlOmZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJyl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAnd2lkdGgnOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgICAgICAnbWluSGVpZ2h0JzogYCR7dGhpcy5taW5IZWlnaHR9cHhgLFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvdzogdGhpcy5pc09wZW5cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQ6ZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmhhbmRsZVZpc2libGUoKTtcbiAgICB9LCAgICBcbiAgICBtZXRob2RzOntcbiAgICAgIGhhbmRsZVZpc2libGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuYWx3YXlzKSB7XG4gICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSkge1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgaGFuZGxlTW91c2VlbnRlcjpmdW5jdGlvbigpe1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5oYW5kbGVWaXNpYmxlKCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB9LFxuICAgICAgaGFuZGxlTW91c2VsZWF2ZTpmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5oYW5kbGVWaXNpYmxlKCkpIHtcblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGhhbmRsZUNsaWNrOmZ1bmN0aW9uKCkge1xuICAgICAgICBpZighdGhpcy5ldmVudFR5cGUpe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuYWx3YXlzKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmRpc2FibGVkKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgICAgfSxcbiAgICAgIGhhbmRsZUNsaWNrb3V0U2lkZTpmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLnRyaWdnZXIgPT09ICdob3ZlcicpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5hbHdheXMpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZih0aGlzLnNob3cpIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG48L3NjcmlwdD5cblxuXG5cblxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS1ib2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IFJvdyBmcm9tICcuL3Jvdy52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBfdm0uY2xhc3NzLFxuICAgICAgb246IHtcbiAgICAgICAgbW91c2VlbnRlcjogX3ZtLmhhbmRsZU1vdXNlZW50ZXIsXG4gICAgICAgIG1vdXNlbGVhdmU6IF92bS5oYW5kbGVNb3VzZWxlYXZlLFxuICAgICAgICBjbGljazogX3ZtLmhhbmRsZUNsaWNrXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJjbGlja291dC1zaWRlXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1jbGlja291dC1zaWRlXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGFuZGxlQ2xpY2tvdXRTaWRlLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImhhbmRsZUNsaWNrb3V0U2lkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWY6IFwicmVmZXJlbmNlRWxlbWVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwidHJhbnNmZXItZG9tXCIsIHJhd05hbWU6IFwidi10cmFuc2Zlci1kb21cIiB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWY6IFwib25Qb3BwZXJcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LXBvcHRpcC1wb3BlclwiLFxuICAgICAgICAgIHN0eWxlOiBfdm0uc3R5bGUsXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRyYW5zZmVyXCI6IF92bS50cmFuc2ZlciB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJjb250ZW50XCIpXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJHJlZmVyZW5jZUVsZW1lbnQ6ICcnLFxuICAgICAgJG9uUG9wcGVyOiAnJyxcbiAgICAgICRQb3BwZXI6ICcnLFxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLiRyZWZzLnJlZmVyZW5jZUVsZW1lbnQ7XG4gICAgY29uc3Qgb25Qb3BwZXIgPSB0aGlzLiRyZWZzLm9uUG9wcGVyO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kUG9wcGVyID0gbmV3IFBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCBvblBvcHBlciwge1xuICAgICAgcGxhY2VtZW50OiBzZWxmLnBsYWNlbWVudCxcbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbmV4dFRpY2soKCk9PntcbiAgICAgIHRoaXMuJFBvcHBlci51cGRhdGUoKTtcbiAgICB9KTtcbiAgfSxcbn07XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNsYXNzcywgc3R5bGU6IF92bS5zdHlsZSB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnQtaW5wdXR7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi50LWlucHV0IC50LWlucHV0X2ljb257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDM2cHg7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnQtaW5wdXQgLnQtaW5wdXRfaWNvbi5pbWFnZXtcXG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBUUFBQUFaeExaN0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUFtSkxSMFFBLzRlUHpMOEFBQUFIZEVsTlJRZmhBUVFST0E1T0RZVGJBQUFBS2tsRVFWUUkxMk9jMmNCUXo0QUFqY3hiRHZneU1qakF1T2tOekF3TWNLSEc5QWE0eXBrTk02RWNBSVRwQ3llV0cxYXJBQUFBSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURFM0xUQXhMVEEwVkRFM09qVTJPakUwS3pBNE9qQXdmUmVhR1FBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXhOeTB3TVMwd05GUXhOem8xTmpveE5Dc3dPRG93TUF4S0lxVUFBQUFBU1VWT1JLNUNZSUk9KSBuby1yZXBlYXQgY2VudGVyO1xcbn1cXG5cXG4udC1pbnB1dF9pY29uICsgLnQtaW5wdXRfb3Jpe1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xcbn1cXG5cXG4udC1pbnB1dF9vcml7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM2NjY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUVERUQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnQtaW5wdXRfb3JpOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg0OTJBNjtcXG59XFxuXFxuLnQtaW5wdXRfb3JpOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNzQzODtcXG59XFxuXFxuLnQtaW5wdXQuZGlzYWJsZWQgLnQtaW5wdXRfb3Jpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNDIsIDI0Nyk7XFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMSwgMjIwLCAyMzApO1xcbn1cXG5cXG5cXG4udC1pbnB1dF9sYXJnZXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4udC1pbnB1dF9sYXJnZSAudC1pbnB1dF9vcml7XFxuICAgIGhlaWdodDogNDJweDtcXG59XFxuXFxuLnQtaW5wdXRfc21hbGx7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnQtaW5wdXRfc21hbGwgLnQtaW5wdXRfb3Jpe1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbi50LWlucHV0X3NtYWxsIC50LWlucHV0X2ljb257XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG4udC1pbnB1dF9zbWFsbCAudC1pbnB1dF9pY29uICsgLnQtaW5wdXRfb3Jpe1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udC1pbnB1dF90aW55IC50LWlucHV0X29yaXtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcbi50LWlucHV0X3RpbnkgLnQtaW5wdXRfaWNvbntcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxufVxcbi50LWlucHV0X3RpbnkgLnQtaW5wdXRfaWNvbiArIC50LWlucHV0X29yaXtcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3NzXCIgOnN0eWxlPVwic3R5bGVcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCB7b25lT2Z9IGZyb20gJy4uL3V0aWwvYXNzaXN0JztcbmNvbnN0IHByZWZpeENscyA9ICd2LWZvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0e1xuICBuYW1lOiBwcmVmaXhDbHMsXG4gIHByb3BzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gb25lT2YodmFsLCBbJycsICdmaXhlZCddKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAwLFxuICAgIH0sXG4gICAgaW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBzdHlsZTogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoICsgJyUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gdGhpcy50eXBlO1xuICAgICAgICBzdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICBzdHlsZS56SW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgICBjbGFzc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYCR7cHJlZml4Q2xzfWAsXG4gICAgICBdO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNDQ0YzM4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTE0NDRjMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTE0NDRjMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNDQ0YzM4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTE0NDRjMzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbWVudS9tZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjViYWI0M2NcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1YmFiNDNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1YmFiNDNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjViYWI0M2NcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNWJhYjQzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy90YWJsZS90YWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi10YWJsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWR7XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi52LXRhYmxlLWhlYWQgdHJ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkIHRyIHRoe1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcbi52LXRhYmxlLWJvZHl7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udi10YWJsZS1ib2R5IHRye1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtYm9keSB0ciB0ZHtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4udi10YWJsZS10aHtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlcyB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNkYzE3ZTdjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtdGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS10aC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLmNsYXNzcyB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZjdlYTNhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYmY3ZWEzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYmY3ZWEzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmY3ZWEzYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiZjdlYTNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3Jvdy9yb3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0uY2xhc3NzIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInYtaGVhZGVyLXdpZHRoXCIsIHN0eWxlOiBfdm0uc3R5bGVzIH0sXG4gICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWNvbnRlbnR7XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUtaGVhZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzcyZjllOWJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS1oZWFkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS1oZWFkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NzJmOWU5YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NzJmOWU5YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFibGUtaGVhZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzcyZjllOWJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NzJmOWU5YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy90YWJsZS90YWJsZS1oZWFkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9wdGlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9wdGlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlci52dWUnO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9jb250ZW50LnZ1ZSc7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vZm9vdGVyLnZ1ZSc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4vbGF5b3V0LnZ1ZSc7XG5pbXBvcnQgc2lkZXIgZnJvbSAnLi9zaWRlci52dWUnO1xuXG5leHBvcnQge2hlYWRlciwgY29udGVudCwgZm9vdGVyLCBsYXlvdXQsIHNpZGVyfTtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpzdHlsZT1cInN0eWxlXCIgOmNsYXNzPVwiY2xhc3NzXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPSdjc3MnPjwvc3R5bGU+XG48c2NyaXB0PlxuY29uc3QgcHJlZml4Q2xzID0gJ3Ytc2lkZXInO1xuZXhwb3J0IGRlZmF1bHR7XG4gIG5hbWU6IHByZWZpeENscyxcbiAgcHJvcHM6IHtcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IDIwMCxcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBgJHtwcmVmaXhDbHN9YCxcbiAgICAgIF07XG4gICAgfSxcbiAgICBzdHlsZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogYCR7dGhpcy53aWR0aH1weGAsXG4gICAgICAgIG1pbldpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgICAgbWF4V2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90b29sdGlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMzdkOGJlOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdG9vbHRpcC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjM3ZDhiZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjM3ZDhiZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzN2Q4YmU4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjM3ZDhiZTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz0nY2xhc3NzJz5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzcmM9Jy4vaW5kZXguY3NzJyBsYW5nPVwiY3NzXCI+PC9zdHlsZT5cbjxzY3JpcHQ+XG5jb25zdCBwcm9maXhDbHMgPSAndi1tZW51LWl0ZW0tZ3JvdXAnO1xuXG5leHBvcnQgZGVmYXVsdHtcbiAgbmFtZTogcHJvZml4Q2xzLFxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzczogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICBgJHtwcm9maXhDbHN9YCxcbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPSd2LWhlYWRlci13aWR0aCcgOnN0eWxlPVwic3R5bGVzXCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPSdjc3MnPlxuICAgIC52LWhlYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC52LWhlYWRlci13aWR0aHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG5pbXBvcnQge29uZU9mfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG5jb25zdCBwcmVmaXhDbHMgPSAndi1oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IHByZWZpeENscyxcbiAgcHJvcHM6IHtcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTAwLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gb25lT2YodmFsLCBbJycsICdmaXhlZCddKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHN0eWxlczogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgIG1heFdpZHRoOiB0aGlzLndpZHRoICsgJ3B4JyxcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgICAgc3R5bGUucG9zaXRpb24gPSB0aGlzLnR5cGU7XG4gICAgICAgIHN0eWxlLnpJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9LFxuICAgIGNsYXNzczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBgJHtwcmVmaXhDbHN9YCxcbiAgICAgIF07XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90b29sdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90b29sdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRoZWFkXCIsIHsgY2xhc3M6IF92bS5jbGFzc3MgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB0YWJsZSBmcm9tICcuL3RhYmxlLnZ1ZSc7XG5pbXBvcnQgdGhlYWQgZnJvbSAnLi90YWJsZS1oZWFkLnZ1ZSc7XG5pbXBvcnQgdGJvZHkgZnJvbSAnLi90YWJsZS1ib2R5LnZ1ZSc7XG5pbXBvcnQgdHIgZnJvbSAnLi90YWJsZS10ci52dWUnO1xuaW1wb3J0IHRoIGZyb20gJy4vdGFibGUtdGgudnVlJztcblxuZXhwb3J0IHt0YWJsZSwgdGhlYWQsIHRib2R5LCB0ciwgdGh9O1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3NzXCIgOnN0eWxlPVwic3R5bGVzXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vcm93LmNzcycgbGFuZz0nY3NzJz48L3N0eWxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHtmaW5kQ29tcG9uZW50RG93bndhcmQsIGZpbmRCcm90aGVyc0NvbXBvbmVudHMsIG9uZU9mfSBmcm9tICdAdXRpbC9hc3Npc3QnO1xubGV0IHByZWZpeENscyA9ICd2LXJvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogcHJlZml4Q2xzLFxuICBwcm9wczoge1xuICAgIGd1dHRlcjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCwgWycnLCAnZmxleCddKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBqdXN0aWZ5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIHJldHVybiBvbmVPZih2YWwsIFsnJywgJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInLCAnc3BhY2UtYXJvdW5kJywgJ3NwYWNlLWJldHdlZW4nXSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgYWxpZ246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCwgWycnLCAndG9wJywgJ21pZGRsZScsICdib3R0b20nXSk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NzOiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBjbGFzc3MgPSB7XG4gICAgICAgIFtgJHtwcmVmaXhDbHN9YF06ICF0aGlzLnR5cGUsXG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LWArdGhpcy50eXBlXTogISF0aGlzLnR5cGUsXG4gICAgICAgIFtgJHtwcmVmaXhDbHN9LWZsZXgtYCt0aGlzLmp1c3RpZnldOiAhIXRoaXMuanVzdGlmeSxcbiAgICAgICAgW2Ake3ByZWZpeENsc30tZmxleC1gK3RoaXMuYWxpZ25dOiAhIXRoaXMuYWxpZ24sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNsYXNzcztcbiAgICB9LFxuICAgIHN0eWxlczogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc3R5bGUgPSB7fTtcbiAgICAgIGlmICh0aGlzLmd1dHRlciAhPT0gMCkge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLmd1dHRlciAvIC0yICsncHgnLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLmd1dHRlciAvIC0yICsncHgnLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZUd1dHRlcjogZnVuY3Rpb24odmFsKSB7XG4gICAgICBjb25zdCBDb2wgPSBmaW5kQ29tcG9uZW50RG93bndhcmQodGhpcywgJ3YtY29sJyk7XG4gICAgICBjb25zdCBDb2xzID0gZmluZEJyb3RoZXJzQ29tcG9uZW50cyhDb2wsICd2LWNvbCcsIGZhbHNlKTtcbiAgICAgIGlmIChDb2xzLmxlbmd0aCkge1xuICAgICAgICBDb2xzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgaWYgKHZhbCAhPT0gMCkge1xuICAgICAgICAgICAgY2hpbGQuZ3V0dGVyID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBndXR0ZXIodmFsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUd1dHRlcih2YWwpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiY2xhc3NzXCJcbiAgICBAbW91c2VlbnRlcj1cImhhbmRsZU1vdXNlZW50ZXJcIlxuICAgIEBtb3VzZWxlYXZlPVwiaGFuZGxlTW91c2VsZWF2ZVwiXG4gID5cbiAgICA8ZGl2IHJlZj0ncmVmZXJlbmNlRWxlbWVudCc+PHNsb3QgLz48L2Rpdj5cbiAgICA8ZGl2XG4gICAgICByZWY9XCJvblBvcHBlclwiXG4gICAgICBjbGFzcz1cInQtdG9vbHRpcC1tYWluXCJcbiAgICAgIHYtc2hvdz0nc2hvdydcbiAgICAgIDpkYXRhLXRyYW5zZmVyPSd0cmFuc2ZlcidcbiAgICAgIHYtdHJhbnNmZXItZG9tPlxuICAgICAgPGRpdiBjbGFzcz1cInQtdG9vbHRpcC1hcnJvd1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInQtdG9vbHRpcC1pbm5lclwiPnt7Y29udGVudH19PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNyYz0nLi90b29sdGlwLmNzcycgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuY29uc3QgcHJvZml4Q2xzID0gJ3QtdG9vbHRpcCc7XG5cbmltcG9ydCBUcmFuc2ZlckRvbSBmcm9tICdAZGlyZWN0aXZlcy90cmFuc2Zlci1kb20nO1xuaW1wb3J0IHBvcHBlciBmcm9tICdAbWl4aW5zL3BvcHBlci5qcyc7XG5pbXBvcnQge29uZU9mfSBmcm9tICdAdXRpbC9hc3Npc3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3BvcHBlcl0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICBUcmFuc2ZlckRvbSxcbiAgfSxcbiAgbmFtZTogcHJvZml4Q2xzLFxuICBwcm9wczoge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICB9LFxuICAgIHBsYWNlbWVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RvcCcsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICBjb25zdCBkZWZhbHV0ID0gW1xuICAgICAgICAgICd0b3AnLFxuICAgICAgICAgICd0b3Atc3RhcnQnLFxuICAgICAgICAgICd0b3AtZW5kJyxcbiAgICAgICAgICAncmlnaHQnLFxuICAgICAgICAgICdyaWdodC1zdGFydCcsXG4gICAgICAgICAgJ3JpZ2h0LWVuZCcsXG4gICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICdsZWZ0LXN0YXJ0JyxcbiAgICAgICAgICAnbGVmdC1lbmQnLFxuICAgICAgICAgICdib3R0b20nLFxuICAgICAgICAgICdib3R0b20tc3RhcnQnLFxuICAgICAgICAgICdib3R0b20tZW5kJyxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCwgZGVmYWx1dCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgaXNPcGVuOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBhbHdheXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhbHV0OiBmYWxzZSxcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYWx1dDogZmFsc2UsXG4gICAgfSxcbiAgICB0cmFuc2Zlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmFsdXQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNsYXNzcz1bXG4gICAgICAgIGAke3Byb2ZpeENsc31gLFxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIGNsYXNzcztcbiAgICB9LFxuICB9LFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvdzogdGhpcy5pc09wZW4sXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oYW5kbGVWaXNpYmxlKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVWaXNpYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuYWx3YXlzKSB7XG4gICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBoYW5kbGVNb3VzZWVudGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmhhbmRsZVZpc2libGUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIH0sXG4gICAgaGFuZGxlTW91c2VsZWF2ZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5oYW5kbGVWaXNpYmxlKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYmRlYTc1NzRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1jb2wtMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2tcXG59XFxuLnYtY29sLTEsLnYtY29sLTIsLnYtY29sLTMsLnYtY29sLTQsLnYtY29sLTUsLnYtY29sLTYsLnYtY29sLTcsLnYtY29sLTgsLnYtY29sLTksLnYtY29sLTEwLC52LWNvbC0xMSwudi1jb2wtMTIsLnYtY29sLTEzLC52LWNvbC0xNCwudi1jb2wtMTUsLnYtY29sLTE2LC52LWNvbC0xNywudi1jb2wtMTgsLnYtY29sLTE5LC52LWNvbC0yMCwudi1jb2wtMjEsLnYtY29sLTIyLC52LWNvbC0yMywudi1jb2wtMjQge1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuLnYtY29sLTI0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlXFxufVxcbi52LWNvbC0yMyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTUuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtMjIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDkxLjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLTIxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4Ny41JVxcbn1cXG4udi1jb2wtMjAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG59XFxuLnYtY29sLTE5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA3OS4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC0xOCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzUlXFxufVxcbi52LWNvbC0xNyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzAuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtMTYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLTE1IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2Mi41JTtcXG59XFxuLnYtY29sLTE0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC0xMyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNTQuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtMTIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuLnYtY29sLTExIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0NS44MzMzMzMzMyVcXG59XFxuLnYtY29sLTEwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MS42NjY2NjY2NyU7XFxufVxcbi52LWNvbC05IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzNy41JTtcXG59XFxuLnYtY29sLTgge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJVxcbn1cXG4udi1jb2wtNyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjkuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtNiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG4udi1jb2wtNSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG4udi1jb2wtNCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtMyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTIuNSU7XFxufVxcbi52LWNvbC0yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4LjMzMzMzMzMzJVxcbn1cXG4udi1jb2wtMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNC4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC0wIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG4udi1jb2wtb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogNC4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTUge1xcbiAgICBtYXJnaW4tbGVmdDogMjAuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogMjkuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTgge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogMzcuNSU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC0xMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTMge1xcbiAgICBtYXJnaW4tbGVmdDogNTQuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTE0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Mi41JTtcXG59XFxuLnYtY29sLW9mZnNldC0xNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTcge1xcbiAgICBtYXJnaW4tbGVmdDogNzAuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTE4IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLnYtY29sLW9mZnNldC0xOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3OS4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMjAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTIxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDg3LjUlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTIyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLW9mZnNldC0yMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5NS44MzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMjQge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9wb3B0aXAuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3BvcHRpcC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY3MDE2OTFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2NzAxNjkxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2NzAxNjkxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zaWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY3MDE2OTFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNjcwMTY5MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3BvcHRpcC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcG9wdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcG9wdGlwLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==