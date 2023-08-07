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

var layoutMickaelGoulart$1 = {};

var ids = layoutMickaelGoulart$1.ids = [7, 1];
var modules = layoutMickaelGoulart$1.modules = {
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
  73: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/Mickael_Goulart.84683b6.png";
    }
  ),
  /***/
  80: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("section", {
          staticClass: "bg-white py-8",
          attrs: {
            "id": "sobre"
          }
        }, [_vm._ssrNode('<div class="container max-w-5xl mx-auto m-8" data-v-f5237f34>', "</div>", [_vm._ssrNode('<h2 data-aos="fade-up" class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" data-v-f5237f34>\n      Quem Sou\n    </h2> <div data-aos="fade-up" class="w-full mb-4" data-v-f5237f34><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" data-v-f5237f34></div></div> '), _vm._ssrNode('<div data-aos="fade-up-right" class="flex flex-wrap" data-v-f5237f34>', "</div>", [_vm._ssrNode('<div class="w-5/6 sm:w-1/2 p-6" data-v-f5237f34>', "</div>", [_vm._ssrNode('<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3" data-v-f5237f34>\n          Mickael Goulart / CREFITO 117193F\n        </h3> <p class="text-gray-600 mb-8" data-v-f5237f34>\n          Fisioterapeuta especialista em quiropraxia (quiropraxia instrumental\n          e osteopatia).\n        </p> <p class="text-gray-600 mb-8" data-v-f5237f34>\n          Mais de 100 mil consultas e atendimentos com mais de 15 anos de\n          experi\xEAncia cl\xEDnica.\n        </p> <p class="text-gray-600 mb-8" data-v-f5237f34>\n          N\xE3o espere a dor chegar para se cuidar! Agende agora mesmo sua\n          avalia\xE7\xE3o com o melhor especialista da regi\xE3o!\n        </p> '), _vm._ssrNode('<p class="mt-20" data-v-f5237f34>', "</p>", [_c("layout-botao-quero-agendar")], 1)], 2), _vm._ssrNode(' <div class="w-full sm:w-1/2 p-6" data-v-f5237f34><img' + _vm._ssrAttr("src", __webpack_require__(73)) + ' alt="Mickael Goulart" class="rounded-full border-8" data-v-f5237f34></div>')], 2)], 2)]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var BotaoQueroAgendar = __webpack_require__(64);
      var MickaelGoulartvue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-mickaelgoulart",
        components: {
          LayoutBotaoQueroAgendar: BotaoQueroAgendar["default"]
        }
      });
      var layout_MickaelGoulartvue_type_script_lang_ts_ = MickaelGoulartvue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      function injectStyles(context) {
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_MickaelGoulartvue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        "f5237f34",
        "47428a10"
      );
      __webpack_exports__["default"] = component.exports;
      installComponents(component, { LayoutBotaoQueroAgendar: __webpack_require__(64).default });
    }
  )
};

const layoutMickaelGoulart = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: layoutMickaelGoulart$1,
  ids: ids,
  modules: modules
}, [layoutMickaelGoulart$1]);

export { layoutMickaelGoulart as l };
//# sourceMappingURL=layout-mickael-goulart.mjs.map
