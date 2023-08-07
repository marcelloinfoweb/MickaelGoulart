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

var layoutBotaoQueroAgendar$1 = {};

var ids = layoutBotaoQueroAgendar$1.ids = [1];
var modules = layoutBotaoQueroAgendar$1.modules = {
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
  )
};

const layoutBotaoQueroAgendar = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: layoutBotaoQueroAgendar$1,
  ids: ids,
  modules: modules
}, [layoutBotaoQueroAgendar$1]);

export { layoutBotaoQueroAgendar as l };
//# sourceMappingURL=layout-botao-quero-agendar.mjs.map
