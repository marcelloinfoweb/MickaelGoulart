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

var layoutHeader$1 = {};

var ids = layoutHeader$1.ids = [5, 6];
var modules = layoutHeader$1.modules = {
  /***/
  65: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("div", {
          staticClass: "relative -mt-12 lg:-mt-24"
        }, [_vm._ssrNode('<svg viewBox="0 0 1428 174" xmlns="http://www.w3.org/2000/svg" data-v-197f7688><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-197f7688><g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero" data-v-197f7688><path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001" data-v-197f7688></path> <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001" data-v-197f7688></path> <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003" data-v-197f7688></path></g> <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero" data-v-197f7688><path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" data-v-197f7688></path></g></g></svg>')]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var HeaderBottomvue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-header-bottom"
      });
      var layout_HeaderBottomvue_type_script_lang_ts_ = HeaderBottomvue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      function injectStyles(context) {
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_HeaderBottomvue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        "197f7688",
        "0207c970"
      );
      __webpack_exports__["default"] = component.exports;
    }
  ),
  /***/
  70: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/a-quiropraxia-.efc284b.png";
    }
  ),
  /***/
  75: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("div", [_vm._ssrNode('<div data-aos="fade-up" class="pt-24" data-v-28053ecb><div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center" data-v-28053ecb><div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left" data-v-28053ecb><h1 class="my-4 text-5xl font-bold leading-tight" data-v-28053ecb>\n          Acabe de uma vez com a dor na coluna\n        </h1> <p class="leading-normal text-2xl mb-8" data-v-28053ecb>\n          N\xE3o sofra mais com dores, agende uma avalia\xE7\xE3o com o maior\n          especialista em coluna da regi\xE3o.\n        </p> <a href="#contact" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" data-v-28053ecb>\n          Quero agendar minha avalia\xE7\xE3o\n        </a></div> <div class="w-full md:w-2/5 py-6 text-center" data-v-28053ecb><img' + _vm._ssrAttr("src", __webpack_require__(70)) + ' class="w-full md:w-4/5 object-none z-50" data-v-28053ecb></div></div></div> '), _c("LayoutHeaderBottom")], 2);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var HeaderBottom = __webpack_require__(65);
      var Headervue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-header",
        components: {
          LayoutHeaderBottom: HeaderBottom["default"]
        }
      });
      var layout_Headervue_type_script_lang_ts_ = Headervue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      function injectStyles(context) {
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_Headervue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        "28053ecb",
        "45dba336"
      );
      __webpack_exports__["default"] = component.exports;
      installComponents(component, { LayoutHeaderBottom: __webpack_require__(65).default });
    }
  )
};

const layoutHeader = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: layoutHeader$1,
  ids: ids,
  modules: modules
}, [layoutHeader$1]);

export { layoutHeader as l };
//# sourceMappingURL=layout-header.mjs.map
