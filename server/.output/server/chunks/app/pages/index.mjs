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

var pages = {};

var ids = pages.ids = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var modules = pages.modules = {
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
  70: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/a-quiropraxia-.efc284b.png";
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
  73: (
    /***/
    function(module, exports2, __webpack_require__) {
      module.exports = __webpack_require__.p + "img/Mickael_Goulart.84683b6.png";
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
  ),
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
  ),
  /***/
  77: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("section", {
          staticClass: "container mx-auto text-center py-6 mb-12",
          attrs: {
            "id": "contact"
          }
        }, [_vm._ssrNode('<h2 data-aos="fade-up" class="w-full my-2 text-5xl font-bold leading-tight text-center text-white" data-v-a9b4707c>\n    Agende uma consulta agora mesmo\n  </h2> <div data-aos="fade-up" class="w-full mb-4" data-v-a9b4707c><div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" data-v-a9b4707c></div></div> <h3 data-aos="fade-up" class="my-4 text-3xl leading-tight" data-v-a9b4707c>\n    Ficaremos felizes em lhe atender\n  </h3> <div data-aos="zoom-in-down" class="inset-0 flex items-center justify-center" data-v-a9b4707c><button type="button" class="lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex items-center justify-center whatsapp-button" style="color: #008069" data-v-a9b4707c><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5" data-v-a9b4707c><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" data-v-a9b4707c></path></svg>\n      Abrir no WhatsApp\n    </button></div>')]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      function buttonWhatsApp() {
        const button = document.querySelector(".whatsapp-button");
        const message = encodeURIComponent("\u2728 Ol\xE1, vi a propagando em uma p\xE1gina e gostaria de saber a disponibilidade de um hor\xE1rio para *quiropraxia*.");
        button.addEventListener("click", () => {
          window.open(`https://api.whatsapp.com/send?phone=5531992538186&text=${message}`, "_blank");
        });
      }
      var Contatovue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-contato",
        mounted() {
          buttonWhatsApp();
        }
      });
      var layout_Contatovue_type_script_lang_ts_ = Contatovue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      function injectStyles(context) {
      }
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_Contatovue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        injectStyles,
        "a9b4707c",
        "bf29f7fc"
      );
      __webpack_exports__["default"] = component.exports;
    }
  ),
  /***/
  78: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("footer", {
          staticClass: "bg-white"
        }, [_vm._ssrNode('<div class="container mx-auto px-8"><div class="w-full flex flex-col md:flex-row py-6"><div class="flex-1 mb-6 text-black"><a href="#" class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 inline"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"></path></svg>\n          Mickael Goulart\n        </a></div> <div class="flex-1"><p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-6">\n          Atendimentos\n        </p> <span class="no-underline hover:underline text-gray-800 hover:text-pink-500">\n          De segunda a sexta das 8 \xE0s 11h e das 13 \xE0s 18h</span></div> <div class="flex-1"><div><p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-6">\n            Contatos\n          </p> <div class="flex"><p class="mr-1 text-gray-800">Telefone:</p> <a href="tel:55+3138911213" aria-label="Nosso telefone" title="Nosso telefone" class="no-underline hover:underline text-gray-800 hover:text-pink-500">31 3891-1213</a></div> <div class="flex"><p class="mr-1 text-gray-800">Email:</p> <a href="mailto:clinicafs@hotmail.com" aria-label="Nosso email" title="Nosso email" class="no-underline hover:underline text-gray-800 hover:text-pink-500">clinicafs@hotmail.com</a></div> <div class="flex"><p class="mr-1 text-gray-800">Endere\xE7o:</p> <a href="https://goo.gl/maps/gurso9rausfAhXbLA" target="_blank" rel="noopener noreferrer" aria-label="Nosso Endere\xE7o" title="Nosso Endere\xE7o" class="no-underline hover:underline text-gray-800 hover:text-pink-500">\n              Avenida Jacob Lopes de Castro, Loja 3. <br>Bairro Nova Era.\n              Vi\xE7osa - MG <br>CEP 36.574.196\n            </a></div></div></div> <div class="flex-1"><p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-6">\n          Social\n        </p> <div class="flex items-center mt-1 space-x-3"><a href="https://instagram.com/mickaelgoulart/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"><svg viewBox="0 0 30 30" fill="currentColor" class="h-6"><circle cx="15" cy="15" r="4"></circle> <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path></svg></a> <a href="https://www.facebook.com/fisiosaudevicosa" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"><svg viewBox="0 0 24 24" fill="currentColor" class="h-5"><path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path></svg></a></div></div></div></div>')]);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var Footervue_type_script_lang_ts_ = Object(vue_runtime[
        "c"
        /* defineComponent */
      ])({
        name: "layout-footer"
      });
      var layout_Footervue_type_script_lang_ts_ = Footervue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        layout_Footervue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        "88406b1a"
      );
      __webpack_exports__["default"] = component.exports;
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
  ),
  /***/
  81: (
    /***/
    function(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      var render = function render2() {
        var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
        return _c("div", {
          staticClass: "leading-normal tracking-normal text-white gradient"
        }, [_c("layout-nav"), _vm._ssrNode(" "), _c("layout-header"), _vm._ssrNode(" "), _c("layout-mickaelgoulart"), _vm._ssrNode(" "), _c("layout-sobre-quiropraxia"), _vm._ssrNode(" "), _c("layout-depoimento"), _vm._ssrNode(' <svg data-aos="zoom-in-up" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave-top"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero"><g fill="#f8fafc" class="wave"><path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path></g> <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF"><g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "><path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path> <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path> <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path></g></g></g></g></svg> '), _c("layout-contato"), _vm._ssrNode(" "), _c("LayoutFooter")], 2);
      };
      var staticRenderFns = [];
      var vue_runtime = __webpack_require__(0);
      var Nav = __webpack_require__(74);
      var Header = __webpack_require__(75);
      var Sobre = __webpack_require__(79);
      var MickaelGoulart = __webpack_require__(80);
      var Depoimento = __webpack_require__(76);
      var Contato = __webpack_require__(77);
      var Footer = __webpack_require__(78);
      var transformunpluginName_nuxt_legacy_capi_key_transform_pagesvue_type_script_lang_ts_ = vue_runtime[
        "b"
        /* default */
      ].extend({
        name: "IndexPage",
        components: {
          LayoutFooter: Footer["default"],
          LayoutContato: Contato["default"],
          LayoutDepoimento: Depoimento["default"],
          LayoutMickaelgoulart: MickaelGoulart["default"],
          LayoutSobreQuiropraxia: Sobre["default"],
          LayoutHeader: Header["default"],
          LayoutNav: Nav["default"]
        }
      });
      var pagesvue_type_script_lang_ts_ = transformunpluginName_nuxt_legacy_capi_key_transform_pagesvue_type_script_lang_ts_;
      var componentNormalizer = __webpack_require__(3);
      var component = Object(componentNormalizer[
        "a"
        /* default */
      ])(
        pagesvue_type_script_lang_ts_,
        render,
        staticRenderFns,
        false,
        null,
        null,
        "86a999ea"
      );
      __webpack_exports__["default"] = component.exports;
      installComponents(component, { LayoutNav: __webpack_require__(74).default, LayoutHeader: __webpack_require__(75).default, LayoutDepoimento: __webpack_require__(76).default, LayoutContato: __webpack_require__(77).default, LayoutFooter: __webpack_require__(78).default });
    }
  )
};

const index = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: pages,
  ids: ids,
  modules: modules
}, [pages]);

export { index as i };
//# sourceMappingURL=index.mjs.map
