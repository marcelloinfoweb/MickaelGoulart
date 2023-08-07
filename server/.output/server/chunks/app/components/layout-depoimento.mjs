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

var layoutDepoimento$1 = {};

var ids = layoutDepoimento$1.ids = [3];
var modules = layoutDepoimento$1.modules = {
  /***/
  76: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("section", {
          staticClass: "bg-gray-100 border-b py-8",
          attrs: {
            "id": "customers"
          }
        }, [_vm._ssrNode('<div class="container mx-auto flex flex-wrap pt-4 pb-12" data-v-7bd8a531><h2 data-aos="fade-up" class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" data-v-7bd8a531>\n      Depoimentos\n    </h2> <div data-aos="fade-up" class="w-full mb-4" data-v-7bd8a531><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" data-v-7bd8a531></div></div> <div data-aos="zoom-in-down" class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" data-v-7bd8a531><div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow" data-v-7bd8a531><p class="w-full text-gray-600 text-xs md:text-sm px-6 my-5" data-v-7bd8a531>\n          Anderson\n        </p> <p class="text-gray-800 text-base px-6 mb-5" data-v-7bd8a531>\n          Eu torci o p\xE9 e tive uma pequena fratura na f\xEDbula, comecei a fazer\n          o tratamento na Fisiosa\xFAde com sess\xF5es de fisioterapia convencional,\n          em uma dessas sess\xF5es o Dr. Mickael me convidou para fazer uma\n          sess\xE3o de quiropraxia, gostei muito da abordagem e dos m\xE9todos\n          empregados, e eu percebi que a quiropraxia seria uma grande aliada\n          para mim, que sou um esportista, praticante de corrida de rua na\n          modalidade Maratona. Hoje tenho uma grande consci\xEAncia corporal,\n          tenho cuidado bem das articula\xE7\xF5es, e venho desde 2020 quando tive o\n          primeiro contato com quiropraxia at\xE9 hoje sem ter les\xE3o, sempre\n          fazendo as sess\xF5es de forma preventiva, fiz um ciclo completo esse\n          ano para a maratona do Rio sem nenhuma les\xE3o, fazendo sess\xF5es de 15\n          em 15 dias praticamente, \xE9 o complemento perfeito para minhas\n          atividades f\xEDsicas.\n        </p></div></div> <div data-aos="zoom-in-down" class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" data-v-7bd8a531><div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow" data-v-7bd8a531><p class="w-full text-gray-600 text-xs md:text-sm px-6 my-5" data-v-7bd8a531>\n          Patr\xEDcia Aparecida\n        </p> <p class="text-gray-800 text-base px-6 mb-5" data-v-7bd8a531>\n          Sempre tive muito problema de dor na coluna. Fiz muitas sess\xF5es de\n          fisioterapia cl\xEDnica porque sempre tive muitas dores de coluna, \xE0s\n          vezes at\xE9 para fazer um servi\xE7o de casa para trabalhar era com muita\n          dificuldade eu que fazia. Ent\xE3o descobri a quiropraxia e hoje fa\xE7o\n          com profissional Mickael, que por sinal \xE9 um excelente profissional.\n          Hoje fa\xE7o sess\xF5es de quiropraxia onde eu tenho um enorme al\xEDvio das\n          dores me sinto super bem Estou muito satisfeita com as sess\xF5es de\n          quiropraxia. E com o excelente atendimento de toda equipe da cl\xEDnica\n        </p></div></div> <div data-aos="zoom-in-down" class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" data-v-7bd8a531><div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow" data-v-7bd8a531><p class="w-full text-gray-600 text-xs md:text-sm px-6 my-5" data-v-7bd8a531>\n          Miriam\n        </p> <p class="text-gray-800 text-base px-6 mb-5" data-v-7bd8a531>\n          A princ\xEDpio n\xE3o conhecia as t\xE9cnicas da quiropraxia. Estava em busca\n          de melhoras das minhas dores musculares, principalmente na coluna\n          onde tenho h\xE9rnia de disco, lombalgia, dores muito intensas. Uma\n          amiga falou sobre o tratamento da quiro. Procurei um especialista na\n          \xE1rea. Me disseram sobre Mickael da cl\xEDnica Fisiosa\xFAde, formado em\n          fisioterapia e especializou em quiroraxia que \xE9 uso de t\xE9cnicas para\n          a manipula\xE7\xE3o articular da regi\xE3o da coluna vertebral. Comecei a\n          sess\xE3o e me senti super bem, relaxada e sem dores. Comecei com duas\n          sess\xF5es por semana. Na primeira j\xE1 senti uma melhora significativa.\n          Indico a quiropraxia a todas as pessoas com dores articulares, e\n          principalmente a coluna. Hoje estou me sentindo muito bem.\n        </p></div></div></div>')]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var Depoimentovue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-depoimento"
      });
      var layout_Depoimentovue_type_script_lang_ts_ = Depoimentovue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      function injectStyles(context) {
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_Depoimentovue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        "7bd8a531",
        "788cd4a0"
      );
      __webpack_exports__["default"] = component.exports;
    }
  )
};

const layoutDepoimento = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: layoutDepoimento$1,
  ids: ids,
  modules: modules
}, [layoutDepoimento$1]);

export { layoutDepoimento as l };
//# sourceMappingURL=layout-depoimento.mjs.map
