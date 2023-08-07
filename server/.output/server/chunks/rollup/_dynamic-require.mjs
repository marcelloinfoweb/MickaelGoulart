const dynamicChunks = {
 ['components/layout-botao-quero-agendar.js']: () => import('../app/components/layout-botao-quero-agendar.mjs').then(function (n) { return n.l; }),
 ['components/layout-contato.js']: () => import('../app/components/layout-contato.mjs').then(function (n) { return n.l; }),
 ['components/layout-depoimento.js']: () => import('../app/components/layout-depoimento.mjs').then(function (n) { return n.l; }),
 ['components/layout-footer.js']: () => import('../app/components/layout-footer.mjs').then(function (n) { return n.l; }),
 ['components/layout-header-bottom.js']: () => import('../app/components/layout-header-bottom.mjs').then(function (n) { return n.l; }),
 ['components/layout-header.js']: () => import('../app/components/layout-header.mjs').then(function (n) { return n.l; }),
 ['components/layout-mickael-goulart.js']: () => import('../app/components/layout-mickael-goulart.mjs').then(function (n) { return n.l; }),
 ['components/layout-nav.js']: () => import('../app/components/layout-nav.mjs').then(function (n) { return n.l; }),
 ['components/layout-sobre.js']: () => import('../app/components/layout-sobre.mjs').then(function (n) { return n.l; }),
 ['pages/index.js']: () => import('../app/pages/index.mjs').then(function (n) { return n.i; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
//# sourceMappingURL=_dynamic-require.mjs.map
