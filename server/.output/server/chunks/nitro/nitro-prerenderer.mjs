globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file:///home/msc/sites/landing-template/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///home/msc/sites/landing-template/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///home/msc/sites/landing-template/node_modules/ofetch/dist/node.mjs';
import destr__default from 'file:///home/msc/sites/landing-template/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///home/msc/sites/landing-template/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///home/msc/sites/landing-template/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///home/msc/sites/landing-template/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///home/msc/sites/landing-template/node_modules/klona/dist/index.mjs';
import defu__default, { defuFn } from 'file:///home/msc/sites/landing-template/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///home/msc/sites/landing-template/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'file:///home/msc/sites/landing-template/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/msc/sites/landing-template/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/msc/sites/landing-template/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/msc/sites/landing-template/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///home/msc/sites/landing-template/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "basePath": "/",
    "assetsPath": "/_nuxt/",
    "cdnURL": "",
    "buildAssetsDir": "/_nuxt/"
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {}
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr__default(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/home/msc/sites/landing-template/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/msc/sites/landing-template","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/msc/sites/landing-template/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/msc/sites/landing-template/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/msc/sites/landing-template/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu__default({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(_error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(_error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: _error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (_error.unhandled || _error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      _error.unhandled && "[unhandled]",
      _error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"21bc-XwkmumvsWAWQvKTShmzlcL3xoys\"",
    "mtime": "2023-08-07T18:36:56.066Z",
    "size": 8636,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/047c4b3.js": {
    "type": "application/javascript",
    "etag": "\"42f13-Y6GLFZpEAMZwOB4nx07Ag+NHOlM\"",
    "mtime": "2023-08-07T18:36:56.066Z",
    "size": 274195,
    "path": "../public/_nuxt/047c4b3.js"
  },
  "/_nuxt/0c65627.js": {
    "type": "application/javascript",
    "etag": "\"aea-bIUYNvDxubpfZY8XbVmZzwKr5oU\"",
    "mtime": "2023-08-07T18:36:56.056Z",
    "size": 2794,
    "path": "../public/_nuxt/0c65627.js"
  },
  "/_nuxt/1224b6a.js": {
    "type": "application/javascript",
    "etag": "\"12f4d-3HRYqKS1qCDu49pRTudGU/Zcb2k\"",
    "mtime": "2023-08-07T18:36:56.056Z",
    "size": 77645,
    "path": "../public/_nuxt/1224b6a.js"
  },
  "/_nuxt/2cd29fb.js": {
    "type": "application/javascript",
    "etag": "\"108e-ZxlGzzz3nZlxgC7WHNLqk4fiFXA\"",
    "mtime": "2023-08-07T18:36:56.056Z",
    "size": 4238,
    "path": "../public/_nuxt/2cd29fb.js"
  },
  "/_nuxt/2fced6b.js": {
    "type": "application/javascript",
    "etag": "\"11f1-iDdRnK6FQQmNrPLM5Zr471PCxkU\"",
    "mtime": "2023-08-07T18:36:56.056Z",
    "size": 4593,
    "path": "../public/_nuxt/2fced6b.js"
  },
  "/_nuxt/4de2e9d.js": {
    "type": "application/javascript",
    "etag": "\"6dd2-2BpWW1Nh7hMLqP/KAKpLyfDzU5g\"",
    "mtime": "2023-08-07T18:36:56.046Z",
    "size": 28114,
    "path": "../public/_nuxt/4de2e9d.js"
  },
  "/_nuxt/4fde446.js": {
    "type": "application/javascript",
    "etag": "\"e3a-x9EBpleRB0mCOyeD7cFyTQz1hJ8\"",
    "mtime": "2023-08-07T18:36:56.046Z",
    "size": 3642,
    "path": "../public/_nuxt/4fde446.js"
  },
  "/_nuxt/5a69d82.js": {
    "type": "application/javascript",
    "etag": "\"1cd1f-g3JZUI0+NwrUTh1Gvb3+JEfJWHA\"",
    "mtime": "2023-08-07T18:36:56.046Z",
    "size": 118047,
    "path": "../public/_nuxt/5a69d82.js"
  },
  "/_nuxt/6defeb1.js": {
    "type": "application/javascript",
    "etag": "\"e90-qiO2jDPRvlDjPI7bQ8iHCOxLFjA\"",
    "mtime": "2023-08-07T18:36:56.046Z",
    "size": 3728,
    "path": "../public/_nuxt/6defeb1.js"
  },
  "/_nuxt/77f3ea5.js": {
    "type": "application/javascript",
    "etag": "\"99b-sgudp1EuL4qOZ7WnlP5XazRj3kY\"",
    "mtime": "2023-08-07T18:36:56.046Z",
    "size": 2459,
    "path": "../public/_nuxt/77f3ea5.js"
  },
  "/_nuxt/9873d5e.js": {
    "type": "application/javascript",
    "etag": "\"836-Y77QFSwtqcN6z2PL8Oke1bAWPds\"",
    "mtime": "2023-08-07T18:36:56.046Z",
    "size": 2102,
    "path": "../public/_nuxt/9873d5e.js"
  },
  "/_nuxt/LICENSES": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1d8-T1KuY9yI4Xr3VOqxTeZf2Y4BK/g\"",
    "mtime": "2023-08-07T18:36:56.046Z",
    "size": 472,
    "path": "../public/_nuxt/LICENSES"
  },
  "/_nuxt/a5b4fbc.js": {
    "type": "application/javascript",
    "etag": "\"10f0-dj9I9PbYSeTcNFpYM6sUAM9afoY\"",
    "mtime": "2023-08-07T18:36:56.036Z",
    "size": 4336,
    "path": "../public/_nuxt/a5b4fbc.js"
  },
  "/_nuxt/a7b96e3.js": {
    "type": "application/javascript",
    "etag": "\"2bb-Ye+5yHHIRpR2ek68puMBmoRSPaQ\"",
    "mtime": "2023-08-07T18:36:56.036Z",
    "size": 699,
    "path": "../public/_nuxt/a7b96e3.js"
  },
  "/_nuxt/f629710.js": {
    "type": "application/javascript",
    "etag": "\"bb0-cpFrxYc9ENSTkw/nFbPrlM9OdIs\"",
    "mtime": "2023-08-07T18:36:56.036Z",
    "size": 2992,
    "path": "../public/_nuxt/f629710.js"
  },
  "/_nuxt/fonts/SourceSansPro-Black.e495a73.ttf": {
    "type": "font/ttf",
    "etag": "\"46838-nE8eJKKMaZkFARJtCKqE0cKSj4I\"",
    "mtime": "2023-08-07T18:36:56.036Z",
    "size": 288824,
    "path": "../public/_nuxt/fonts/SourceSansPro-Black.e495a73.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-BlackItalic.adaf9bf.ttf": {
    "type": "font/ttf",
    "etag": "\"19220-VRXJVawSPYC9jRx7/jn7xNIZ0BU\"",
    "mtime": "2023-08-07T18:36:56.036Z",
    "size": 102944,
    "path": "../public/_nuxt/fonts/SourceSansPro-BlackItalic.adaf9bf.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-Bold.0d9b62a.ttf": {
    "type": "font/ttf",
    "etag": "\"47064-9crXTpeR0u9yX5/11TIWz/9PNng\"",
    "mtime": "2023-08-07T18:36:56.036Z",
    "size": 290916,
    "path": "../public/_nuxt/fonts/SourceSansPro-Bold.0d9b62a.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-BoldItalic.9950e9e.ttf": {
    "type": "font/ttf",
    "etag": "\"19320-qpJREAzrXqb9Yh7NwlCnTyffhdY\"",
    "mtime": "2023-08-07T18:36:56.036Z",
    "size": 103200,
    "path": "../public/_nuxt/fonts/SourceSansPro-BoldItalic.9950e9e.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-ExtraLight.fd04b68.ttf": {
    "type": "font/ttf",
    "etag": "\"47128-IxHVhL6YVTR2gQZKLhWF+O5iJ5M\"",
    "mtime": "2023-08-07T18:36:56.016Z",
    "size": 291112,
    "path": "../public/_nuxt/fonts/SourceSansPro-ExtraLight.fd04b68.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-ExtraLightItalic.32305eb.ttf": {
    "type": "font/ttf",
    "etag": "\"19770-StS1pgRf78jp1T9LSw09uBpGsW8\"",
    "mtime": "2023-08-07T18:36:56.016Z",
    "size": 104304,
    "path": "../public/_nuxt/fonts/SourceSansPro-ExtraLightItalic.32305eb.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-Italic.764c2cc.ttf": {
    "type": "font/ttf",
    "etag": "\"19594-WOtWPNQ8hQdsVPA027sPmPAZx4g\"",
    "mtime": "2023-08-07T18:36:56.016Z",
    "size": 103828,
    "path": "../public/_nuxt/fonts/SourceSansPro-Italic.764c2cc.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-Light.ee2a11b.ttf": {
    "type": "font/ttf",
    "etag": "\"47748-AF7ylY9DlS7B5GrgEEJ83nkUziw\"",
    "mtime": "2023-08-07T18:36:56.016Z",
    "size": 292680,
    "path": "../public/_nuxt/fonts/SourceSansPro-Light.ee2a11b.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-LightItalic.eb5d812.ttf": {
    "type": "font/ttf",
    "etag": "\"196dc-VmxZUfn4D7EkDpawGbFMDR14q3U\"",
    "mtime": "2023-08-07T18:36:56.016Z",
    "size": 104156,
    "path": "../public/_nuxt/fonts/SourceSansPro-LightItalic.eb5d812.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-Regular.5182da4.ttf": {
    "type": "font/ttf",
    "etag": "\"47a8c-F8JUdcA2n3+MhGKvnPEnpM9vEzI\"",
    "mtime": "2023-08-07T18:36:56.016Z",
    "size": 293516,
    "path": "../public/_nuxt/fonts/SourceSansPro-Regular.5182da4.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-SemiBold.774c05c.ttf": {
    "type": "font/ttf",
    "etag": "\"47418-zBFvcqNoT9V7iFKkGCiIn74HlWA\"",
    "mtime": "2023-08-07T18:36:56.006Z",
    "size": 291864,
    "path": "../public/_nuxt/fonts/SourceSansPro-SemiBold.774c05c.ttf"
  },
  "/_nuxt/fonts/SourceSansPro-SemiBoldItalic.0f3a2e3.ttf": {
    "type": "font/ttf",
    "etag": "\"19484-8QeENCs9uMx91JYBLWVITxxGDxc\"",
    "mtime": "2023-08-07T18:36:56.006Z",
    "size": 103556,
    "path": "../public/_nuxt/fonts/SourceSansPro-SemiBoldItalic.0f3a2e3.ttf"
  },
  "/_nuxt/img/Mickael_Goulart.84683b6.png": {
    "type": "image/png",
    "etag": "\"268e4-uEIXoEdmY47FqEjNH+hM+00O/ec\"",
    "mtime": "2023-08-07T18:36:56.006Z",
    "size": 157924,
    "path": "../public/_nuxt/img/Mickael_Goulart.84683b6.png"
  },
  "/_nuxt/img/a-quiropraxia-.efc284b.png": {
    "type": "image/png",
    "etag": "\"36d4f-iq7uLACHNyOiQTXBa3NWCvGSY5Q\"",
    "mtime": "2023-08-07T18:36:56.006Z",
    "size": 224591,
    "path": "../public/_nuxt/img/a-quiropraxia-.efc284b.png"
  },
  "/_nuxt/img/logo_Mickael_Goulart.5ac02bb.png": {
    "type": "image/png",
    "etag": "\"3f98-tg7YnelptXbU/IlNdsT1TEgjKvs\"",
    "mtime": "2023-08-07T18:36:55.996Z",
    "size": 16280,
    "path": "../public/_nuxt/img/logo_Mickael_Goulart.5ac02bb.png"
  },
  "/_nuxt/img/quiropraxia_coluna.82c9c03.png": {
    "type": "image/png",
    "etag": "\"fa55-k3lASxhJOHxBKONEO6LjbpmXBZA\"",
    "mtime": "2023-08-07T18:36:55.996Z",
    "size": 64085,
    "path": "../public/_nuxt/img/quiropraxia_coluna.82c9c03.png"
  },
  "/_nuxt/img/quiropraxia_dores.91125f3.jpg": {
    "type": "image/jpeg",
    "etag": "\"18f4f-BbE7hPMafFV6uxlaeP4sk9nB3+Q\"",
    "mtime": "2023-08-07T18:36:55.996Z",
    "size": 102223,
    "path": "../public/_nuxt/img/quiropraxia_dores.91125f3.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":0}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_MuSts9 = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_MuSts9, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr__default(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
