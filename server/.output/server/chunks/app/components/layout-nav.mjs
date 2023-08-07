function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var layoutNav$1 = {};

var ids = layoutNav$1.ids = [8];
var modules = layoutNav$1.modules = {
  /***/
  66: (
    /***/
    function(module, exports2, __webpack_require__) {
      var content = __webpack_require__(69);
      if (content.__esModule)
        content = content.default;
      if (typeof content === "string")
        content = [[module.i, content, ""]];
      if (content.locals)
        module.exports = content.locals;
      var add = __webpack_require__(9).default;
      module.exports.__inject__ = function(context) {
        add("acaafe20", content, true, context);
      };
    }
  ),
  /***/
  67: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/logo_Mickael_Goulart.5ac02bb.png";
    }
  ),
  /***/
  68: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_30cc7f70_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
      for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_30cc7f70_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
        if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
          (function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_30cc7f70_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
            });
          })(__WEBPACK_IMPORT_KEY__);
    }
  ),
  /***/
  69: (
    /***/
    function(module, exports2, __webpack_require__) {
      var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
      var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
        return i[1];
      });
      ___CSS_LOADER_EXPORT___.push([module.i, "a{color:#fff;font-style:normal!important;font-weight:600}.navbar-active ul li a{color:#170f4f}", ""]);
      ___CSS_LOADER_EXPORT___.locals = {};
      module.exports = ___CSS_LOADER_EXPORT___;
    }
  ),
  /***/
  74: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("nav", {
          staticClass: "fixed w-full z-30 top-0 text-white",
          attrs: {
            "id": "header"
          }
        }, [_vm._ssrNode('<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"><div class="pl-4 flex justify-between items-center"><a href="#"><img' + _vm._ssrAttr("src", __webpack_require__(67)) + ' alt="Logo Mickael Goulart" class="w-40"></a></div> <div class="block lg:hidden pr-4"><button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 w-6"><title>Menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button></div> <div id="nav-content"' + _vm._ssrClass("w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20", _vm.mobileSidebar ? "" : "hidden") + '><ul class="list-reset lg:flex justify-end flex-1 items-center"><li class="mr-3"><a href="#" class="inline-block uppercase py-2 px-4 font-medium no-underline">In\xEDcio</a></li> <li class="mr-3"><a href="#sobre" class="inline-block uppercase no-underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4">Mickael Goulart</a></li> <li class="mr-3"><a href="#quiropraxia" class="inline-block uppercase no-underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4">Quiropraxia</a></li> <li class="mr-3"><a href="#customers" class="inline-block uppercase no-underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4">Depoimentos</a></li> <li class="mr-3"><a href="#contact" class="inline-block uppercase no-underline font-medium hover:text-gray-800 hover:text-underline py-2 px-4">Contato</a></li></ul></div></div> <hr class="border-b border-gray-100 opacity-25 my-0 py-0">')]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var Navvue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-nav",
        data() {
          return {
            scrollY: 0,
            mobileSidebar: false
          };
        },
        mounted() {
          this.scrollY = window.scrollY;
          window.addEventListener("scroll", this.handleScroll);
        },
        methods: {
          handleScroll() {
            this.scrollY = window.scrollY;
          }
        },
        watch: {
          scrollY(newValue) {
            var navaction = document.getElementById("navAction");
            var header = document.getElementById("header");
            var toToggle = document.querySelector(".toggleColour");
            if (newValue > 10) {
              navaction === null || navaction === void 0 ? void 0 : navaction.classList.remove("bg-white");
              navaction === null || navaction === void 0 ? void 0 : navaction.classList.add("gradient");
              navaction === null || navaction === void 0 ? void 0 : navaction.classList.remove("text-[#170F4F]");
              navaction === null || navaction === void 0 ? void 0 : navaction.classList.add("text-white");
              header === null || header === void 0 ? void 0 : header.classList.add("bg-white");
              header === null || header === void 0 ? void 0 : header.classList.add("navbar-active");
              toToggle === null || toToggle === void 0 ? void 0 : toToggle.classList.add("text-gray-800");
              toToggle === null || toToggle === void 0 ? void 0 : toToggle.classList.remove("text-white");
            } else {
              navaction === null || navaction === void 0 ? void 0 : navaction.classList.add("bg-white");
              navaction === null || navaction === void 0 ? void 0 : navaction.classList.remove("gradient");
              navaction === null || navaction === void 0 ? void 0 : navaction.classList.add("text-[#170F4F]");
              navaction === null || navaction === void 0 ? void 0 : navaction.classList.remove("text-white");
              header === null || header === void 0 ? void 0 : header.classList.remove("bg-white");
              header === null || header === void 0 ? void 0 : header.classList.remove("navbar-active");
              toToggle === null || toToggle === void 0 ? void 0 : toToggle.classList.remove("text-gray-800");
              toToggle === null || toToggle === void 0 ? void 0 : toToggle.classList.add("text-white");
            }
          }
        }
      });
      var layout_Navvue_type_script_lang_ts_ = Navvue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      function injectStyles(context) {
        var style0 = __webpack_require__(68);
        if (style0.__inject__)
          style0.__inject__(context);
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_Navvue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        null,
        "68e8fb0a"
      );
      __webpack_exports__["default"] = component.exports;
    }
  )
};

const layoutNav = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: layoutNav$1,
  ids: ids,
  modules: modules
}, [layoutNav$1]);

export { layoutNav as l };
//# sourceMappingURL=layout-nav.mjs.map
