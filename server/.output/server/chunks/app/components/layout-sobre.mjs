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

var layoutSobre$1 = {};

var ids = layoutSobre$1.ids = [9, 1];
var modules = layoutSobre$1.modules = {
  /***/
  64: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("div", [_vm._ssrNode('<a href="#contact" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" data-v-0123b78c>\n    Quero agendar minha avalia\xE7\xE3o\n  </a>')]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var BotaoQueroAgendarvue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-botao-quero-agendar"
      });
      var layout_BotaoQueroAgendarvue_type_script_lang_ts_ = BotaoQueroAgendarvue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      function injectStyles(context) {
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_BotaoQueroAgendarvue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        "0123b78c",
        "5eb57075"
      );
      __webpack_exports__["default"] = component.exports;
    }
  ),
  /***/
  71: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/quiropraxia_coluna.82c9c03.png";
    }
  ),
  /***/
  72: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/quiropraxia_dores.91125f3.jpg";
    }
  ),
  /***/
  79: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("section", {
          staticClass: "bg-white border-b py-8",
          attrs: {
            "id": "quiropraxia"
          }
        }, [_vm._ssrNode('<div class="container max-w-5xl mx-auto m-8" data-v-075d16f6>', "</div>", [_vm._ssrNode('<h2 data-aos="fade-up" class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" data-v-075d16f6>\n      Sobre a Quiropraxia\n    </h2> <div data-aos="fade-up" class="w-full mb-4" data-v-075d16f6><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" data-v-075d16f6></div></div> <div data-aos="fade-up-right" class="flex flex-wrap" data-v-075d16f6><div class="w-5/6 sm:w-1/2 p-6" data-v-075d16f6><h3 class="text-3xl text-gray-800 font-bold leading-none mb-3" data-v-075d16f6>\n          Corrigir problemas vertebrais\n        </h3> <p class="text-gray-600 mb-8" data-v-075d16f6>\n          O tratamento de quiropraxia serve para corrigir problemas vertebrais\n          em qualquer lugar da coluna, n\xE3o apenas nas costas. Ela pode ser\n          usada tanto para tratar quanto para previnir problemas relacionados\n          ao desalinhamento da coluna vertebral.\n        </p></div> <div class="w-full sm:w-1/2 p-6" data-v-075d16f6><img' + _vm._ssrAttr("src", __webpack_require__(71)) + " alt data-v-075d16f6></div></div> "), _vm._ssrNode('<div data-aos="fade-up-left" class="flex flex-wrap flex-col-reverse sm:flex-row" data-v-075d16f6>', "</div>", [_vm._ssrNode('<div class="w-full sm:w-1/2 p-6 mt-6" data-v-075d16f6><img' + _vm._ssrAttr("src", __webpack_require__(72)) + " alt data-v-075d16f6></div> "), _vm._ssrNode('<div class="w-full sm:w-1/2 p-6 mt-6" data-v-075d16f6>', "</div>", [_vm._ssrNode('<div class="align-middle" data-v-075d16f6>', "</div>", [_vm._ssrNode('<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3" data-v-075d16f6>\n            Al\xE9m da coluna\n          </h3> <p class="text-gray-600 mb-8" data-v-075d16f6>\n            Al\xE9m disso, pode tratar tens\xF5es, dores de cabe\xE7a, enxaqueca, m\xE1\n            postura, dor no pesco\xE7o, rigidez na nuca, dores nos ombros,\n            articula\xE7\xF5es em geral, artrose, dor ci\xE1tica, h\xE9rnia de disco,\n            entre outros. Se voc\xEA sente algum desses sintomas, n\xE3o deixe para\n            depois, os hor\xE1rios s\xE3o preenchidos rapidamente, ent\xE3o agende hoje\n            mesmo seu hor\xE1rio!\n          </p> '), _vm._ssrNode('<p class="mt-20" data-v-075d16f6>', "</p>", [_c("layout-botao-quero-agendar")], 1)], 2)])], 2)], 2)]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var BotaoQueroAgendar = __webpack_require__(64);
      var Sobrevue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-sobre-quiropraxia",
        components: {
          LayoutBotaoQueroAgendar: BotaoQueroAgendar["default"]
        }
      });
      var layout_Sobrevue_type_script_lang_ts_ = Sobrevue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      function injectStyles(context) {
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_Sobrevue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        "075d16f6",
        "094e5ede"
      );
      __webpack_exports__["default"] = component.exports;
      installComponents(component, { LayoutBotaoQueroAgendar: __webpack_require__(64).default });
    }
  )
};

const layoutSobre = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: layoutSobre$1,
  ids: ids,
  modules: modules
}, [layoutSobre$1]);

export { layoutSobre as l };
//# sourceMappingURL=layout-sobre.mjs.map
