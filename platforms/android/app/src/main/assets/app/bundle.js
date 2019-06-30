module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Calculator.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onButtonTap(inputed) {
      let isOperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let isCommand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isCommand) {
        switch (inputed) {
          case "clear":
            this.output = "";
            this.operators = [];
            break;

          case "backspace":
            this.output = this.output.substring(0, this.output.length - 1);
            break;

          case "equals":
            try {
              this.output += " = " + eval(this.output);
            } catch (error) {
              console.log("asd");
            }

            break;

          default:
            return false;
        }
      } else {
        let outputToArray = this.output.split("");
        let operators = ["*", "/", "+", "-"];

        if (!this.output.includes("=")) {
          switch (inputed) {
            case "*":
              if (isOperator) {
                if (outputToArray[outputToArray - 1] === inputed) {
                  this.output = this.output;
                } else {
                  if (!operators.includes(outputToArray[outputToArray.length - 1])) {
                    this.output += inputed;
                  } else {
                    this.output = this.output.substring(0, this.output.length - 1);
                    this.output += inputed;
                  }
                }
              }

              break;

            case "/":
              if (isOperator) {
                let outputToArray = this.output.split("");

                if (outputToArray[outputToArray - 1] === inputed) {
                  this.output = this.output;
                } else {
                  if (!operators.includes(outputToArray[outputToArray.length - 1])) {
                    this.output += inputed;
                  } else {
                    this.output = this.output.substring(0, this.output.length - 1);
                    this.output += inputed;
                  }
                }
              }

              break;

            case "+":
              if (isOperator) {
                let outputToArray = this.output.split("");

                if (outputToArray[outputToArray - 1] === inputed) {
                  this.output = this.output;
                } else {
                  if (!operators.includes(outputToArray[outputToArray.length - 1])) {
                    this.output += inputed;
                  } else {
                    this.output = this.output.substring(0, this.output.length - 1);
                    this.output += inputed;
                  }
                }
              }

              break;

            case "-":
              if (isOperator) {
                let outputToArray = this.output.split("");

                if (outputToArray[outputToArray - 1] === inputed) {
                  this.output = this.output;
                } else {
                  if (!operators.includes(outputToArray[outputToArray.length - 1])) {
                    this.output += inputed;
                  } else {
                    this.output = this.output.substring(0, this.output.length - 1);
                    this.output += inputed;
                  }
                }
              }

              break;

            default:
              this.output += inputed;
          }
        } else {
          this.output = "";
          this.output += inputed;
        }
      }
    }

  },
  watch: {},

  data() {
    return {
      output: ""
    };
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Calculator.vue?vue&type=style&index=0&id=88f004c6&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-88f004c6] {\n    vertical-align: top;\n    font-size: 20;\n    background-color: black;\n}\n.output[data-v-88f004c6] {\n    text-align: right;\n    border-color: black;\n    border-width: 1;\n    height: 200;\n    padding-top: 160;\n    padding-right: 10;\n    color:white;\n}\n.input[data-v-88f004c6] {\n    horizontal-align: center;\n}\n.button[data-v-88f004c6] {\n    background-color: black;\n    color: orange;\n    width: 70;\n    height: 70;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (false) {}


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Calculator.vue?vue&type=template&id=88f004c6&scoped=true&":
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
    "Page",
    { staticClass: "page", attrs: { actionBarHidden: "true" } },
    [
      _c(
        "StackLayout",
        { staticClass: "home-panel" },
        [
          _c("TextField", {
            staticClass: "output",
            attrs: {
              text: "Label",
              hint: "0",
              editable: "false",
              text: _vm.output
            },
            on: {
              textChange: function($event) {
                _vm.output = $event.value
              }
            }
          }),
          _c(
            "WrapLayout",
            { staticClass: "input", attrs: { orientation: "horizontal" } },
            [
              _c("Button", {
                staticClass: "button",
                attrs: { text: "C", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("clear", false, true)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "%", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("%", false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "<-", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("backspace", false, true)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "*", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("*", true, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "7", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(7, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "8", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(8, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "9", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(9, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "/", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("/", true, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "4", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(4, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "5", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(5, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "6", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(6, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "+", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("+", true, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "1", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(1, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "2", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(2, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "3", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(3, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "-", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("-", true, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "0", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(0, false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: ".", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(".", false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "(", width: "45", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("(", false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: ")", width: "45", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap(")", false, false)
                  }
                }
              }),
              _c("Button", {
                staticClass: "button",
                attrs: { text: "=", width: "90", height: "90" },
                on: {
                  tap: function($event) {
                    _vm.onButtonTap("equals", false, true)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\nThe imported CSS rules must precede all other types of rules.\n*/\n", ""]);

// exports
;
    if (false) {}


/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Calculator.vue");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <Calculator />\n        </Frame>",
  components: {
    Calculator: _components_Calculator__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Calculator.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calculator_vue_vue_type_template_id_88f004c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Calculator.vue?vue&type=template&id=88f004c6&scoped=true&");
/* harmony import */ var _Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Calculator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Calculator_vue_vue_type_style_index_0_id_88f004c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Calculator.vue?vue&type=style&index=0&id=88f004c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calculator_vue_vue_type_template_id_88f004c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calculator_vue_vue_type_template_id_88f004c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "88f004c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/Calculator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Calculator.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Calculator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Calculator.vue?vue&type=style&index=0&id=88f004c6&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_style_index_0_id_88f004c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Calculator.vue?vue&type=style&index=0&id=88f004c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_style_index_0_id_88f004c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_style_index_0_id_88f004c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_style_index_0_id_88f004c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_style_index_0_id_88f004c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_style_index_0_id_88f004c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Calculator.vue?vue&type=template&id=88f004c6&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_88f004c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Calculator.vue?vue&type=template&id=88f004c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_88f004c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_vue_vue_type_template_id_88f004c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);