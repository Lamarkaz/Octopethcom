webpackJsonp([3],{

/***/ "./.nuxt/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nuxt_loading_vue__ = __webpack_require__("./.nuxt/components/nuxt-loading.vue");




var layouts = {

  "_default": function _default() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./layouts/default.vue")).then(function (m) {
      return m.default || m;
    });
  }

};

var resolvedLayouts = {};

/* harmony default export */ __webpack_exports__["a"] = ({
  head: { "title": "octopeth", "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "description", "name": "description", "content": "Octopeth Landing Page" }], "link": [{ "rel": "icon", "type": 'image/x-icon', "href": '/favicon.ico' }], "style": [], "script": [] },
  render: function render(h, props) {
    var loadingEl = h('nuxt-loading', { ref: 'loading' });
    var layoutEl = h(this.layout || 'nuxt');
    var templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);

    var transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [templateEl]);

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_1_vue__["default"].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$nuxt = this;
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error;
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    },
    setLayout: function setLayout(layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      this.layout = resolvedLayouts[_layout];
      return this.layout;
    },
    loadLayout: function loadLayout(layout) {
      var _this = this;

      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default';
      var _layout = '_' + layout;
      if (resolvedLayouts[_layout]) {
        return __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.resolve(resolvedLayouts[_layout]);
      }
      return layouts[_layout]().then(function (Component) {
        resolvedLayouts[_layout] = Component;
        delete layouts[_layout];
        return resolvedLayouts[_layout];
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
      });
    }
  },
  components: {
    NuxtLoading: __WEBPACK_IMPORTED_MODULE_2__components_nuxt_loading_vue__["a" /* default */]
  }
});

/***/ }),

/***/ "./.nuxt/client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify__ = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__middleware__ = __webpack_require__("./.nuxt/middleware.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index__ = __webpack_require__("./.nuxt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__("./.nuxt/utils.js");








var loadAsyncComponents = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(to, from, next) {
    var _this = this;

    var Components, startLoader, statusCode;
    return __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Check if route path changed (this._pathChanged), only if the page is not an error (for validate())
            this._pathChanged = !!app.nuxt.err || from.path !== to.path;
            this._queryChanged = __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify___default()(to.query) !== __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify___default()(from.query);
            this._diffQuery = this._queryChanged ? Object(__WEBPACK_IMPORTED_MODULE_10__utils__["g" /* getQueryDiff */])(to.query, from.query) : [];

            if (this._pathChanged && this.$loading.start) {
              this.$loading.start();
            }

            _context.prev = 4;
            _context.next = 7;
            return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["k" /* resolveRouteComponents */])(to);

          case 7:
            Components = _context.sent;


            if (!this._pathChanged && this._queryChanged) {
              // Add a marker on each component that it needs to refresh or not
              startLoader = Components.some(function (Component) {
                var watchQuery = Component.options.watchQuery;
                if (watchQuery === true) return true;
                if (Array.isArray(watchQuery)) {
                  return watchQuery.some(function (key) {
                    return _this._diffQuery[key];
                  });
                }
                return false;
              });

              if (startLoader && this.$loading.start) {
                this.$loading.start();
              }
            }

            // Call next()
            next();
            _context.next = 19;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](4);

            _context.t0 = _context.t0 || {};
            statusCode = _context.t0.statusCode || _context.t0.status || _context.t0.response && _context.t0.response.status || 500;

            this.error({ statusCode: statusCode, message: _context.t0.message });
            this.$nuxt.$emit('routeChanged', to, from, _context.t0);
            next(false);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 12]]);
  }));

  return function loadAsyncComponents(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var render = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(to, from, next) {
    var _this4 = this;

    var nextCalled, _next, matches, Components, layout, _layout, isValid, _layout2;

    return __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(this._pathChanged === false && this._queryChanged === false)) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt('return', next());

          case 2:

            // nextCalled is true when redirected
            nextCalled = false;

            _next = function _next(path) {
              if (from.path === path.path && _this4.$loading.finish) _this4.$loading.finish();
              if (from.path !== path.path && _this4.$loading.pause) _this4.$loading.pause();
              if (nextCalled) return;
              nextCalled = true;
              var matches = [];
              _lastPaths = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getMatchedComponents */])(from, matches).map(function (Component, i) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(from.matched[matches[i]].path)(from.params);
              });
              next(path);
            };

            // Update context


            _context3.next = 6;
            return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["m" /* setContext */])(app, {
              route: to,
              from: from,
              next: _next.bind(this)
            });

          case 6:
            this._dateLastError = app.nuxt.dateErr;
            this._hadError = !!app.nuxt.err;

            // Get route's matched components
            matches = [];
            Components = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getMatchedComponents */])(to, matches);

            // If no Components matched, generate 404

            if (Components.length) {
              _context3.next = 24;
              break;
            }

            _context3.next = 13;
            return callMiddleware.call(this, Components, app.context);

          case 13:
            if (!nextCalled) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt('return');

          case 15:
            _context3.next = 17;
            return this.loadLayout(typeof __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout === 'function' ? __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout(app.context) : __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout);

          case 17:
            layout = _context3.sent;
            _context3.next = 20;
            return callMiddleware.call(this, Components, app.context, layout);

          case 20:
            if (!nextCalled) {
              _context3.next = 22;
              break;
            }

            return _context3.abrupt('return');

          case 22:
            // Show error page
            app.context.error({ statusCode: 404, message: 'This page could not be found' });
            return _context3.abrupt('return', next());

          case 24:

            // Update ._data and other properties if hot reloaded
            Components.forEach(function (Component) {
              if (Component._Ctor && Component._Ctor.options) {
                Component.options.asyncData = Component._Ctor.options.asyncData;
                Component.options.fetch = Component._Ctor.options.fetch;
              }
            });

            // Apply transitions
            this.setTransitions(mapTransitions(Components, to, from));

            _context3.prev = 26;
            _context3.next = 29;
            return callMiddleware.call(this, Components, app.context);

          case 29:
            if (!nextCalled) {
              _context3.next = 31;
              break;
            }

            return _context3.abrupt('return');

          case 31:
            if (!app.context._errored) {
              _context3.next = 33;
              break;
            }

            return _context3.abrupt('return', next());

          case 33:

            // Set layout
            _layout = Components[0].options.layout;

            if (typeof _layout === 'function') {
              _layout = _layout(app.context);
            }
            _context3.next = 37;
            return this.loadLayout(_layout);

          case 37:
            _layout = _context3.sent;
            _context3.next = 40;
            return callMiddleware.call(this, Components, app.context, _layout);

          case 40:
            if (!nextCalled) {
              _context3.next = 42;
              break;
            }

            return _context3.abrupt('return');

          case 42:
            if (!app.context._errored) {
              _context3.next = 44;
              break;
            }

            return _context3.abrupt('return', next());

          case 44:

            // Call .validate()
            isValid = true;

            Components.forEach(function (Component) {
              if (!isValid) return;
              if (typeof Component.options.validate !== 'function') return;
              isValid = Component.options.validate({
                params: to.params || {},
                query: to.query || {}

              });
            });
            // ...If .validate() returned false

            if (isValid) {
              _context3.next = 49;
              break;
            }

            this.error({ statusCode: 404, message: 'This page could not be found' });
            return _context3.abrupt('return', next());

          case 49:
            _context3.next = 51;
            return __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component, i) {
              // Check if only children route changed
              Component._path = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(to.matched[matches[i]].path)(to.params);
              Component._dataRefresh = false;
              // Check if Component need to be refreshed (call asyncData & fetch)
              // Only if its slug has changed or is watch query changes
              if (_this4._pathChanged && Component._path !== _lastPaths[i]) {
                Component._dataRefresh = true;
              } else if (!_this4._pathChanged && _this4._queryChanged) {
                var watchQuery = Component.options.watchQuery;
                if (watchQuery === true) {
                  Component._dataRefresh = true;
                } else if (Array.isArray(watchQuery)) {
                  Component._dataRefresh = watchQuery.some(function (key) {
                    return _this4._diffQuery[key];
                  });
                }
              }
              if (!_this4._hadError && _this4._isMounted && !Component._dataRefresh) {
                return __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.resolve();
              }

              var promises = [];

              var hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === 'function';
              var hasFetch = !!Component.options.fetch;
              var loadingIncrease = hasAsyncData && hasFetch ? 30 : 45;

              // Call asyncData(context)
              if (hasAsyncData) {
                var promise = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["j" /* promisify */])(Component.options.asyncData, app.context).then(function (asyncDataResult) {
                  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* applyAsyncData */])(Component, asyncDataResult);
                  if (_this4.$loading.increase) _this4.$loading.increase(loadingIncrease);
                });
                promises.push(promise);
              }

              // Call fetch(context)
              if (hasFetch) {
                var p = Component.options.fetch(app.context);
                if (!p || !(p instanceof __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a) && typeof p.then !== 'function') {
                  p = __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.resolve(p);
                }
                p.then(function (fetchResult) {
                  if (_this4.$loading.increase) _this4.$loading.increase(loadingIncrease);
                });
                promises.push(p);
              }

              return __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.all(promises);
            }));

          case 51:

            // If not redirected
            if (!nextCalled) {
              if (this.$loading.finish) this.$loading.finish();
              _lastPaths = Components.map(function (Component, i) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(to.matched[matches[i]].path)(to.params);
              });
              next();
            }

            _context3.next = 66;
            break;

          case 54:
            _context3.prev = 54;
            _context3.t0 = _context3['catch'](26);

            if (!_context3.t0) _context3.t0 = {};
            _lastPaths = [];
            _context3.t0.statusCode = _context3.t0.statusCode || _context3.t0.status || _context3.t0.response && _context3.t0.response.status || 500;

            // Load error layout
            _layout2 = __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout;

            if (typeof _layout2 === 'function') {
              _layout2 = _layout2(app.context);
            }
            _context3.next = 63;
            return this.loadLayout(_layout2);

          case 63:

            this.error(_context3.t0);
            this.$nuxt.$emit('routeChanged', to, from, _context3.t0);
            next(false);

          case 66:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[26, 54]]);
  }));

  return function render(_x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}();

// Fix components format in matched, it's due to code-splitting of vue-router


var mountApp = function () {
  var _ref5 = __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(__app) {
    var Components, _app, layout, mount;

    return __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // Set global variables
            app = __app.app;
            router = __app.router;

            // Resolve route components
            _context5.next = 4;
            return __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.all(resolveComponents(router));

          case 4:
            Components = _context5.sent;


            // Create Vue instance
            _app = new __WEBPACK_IMPORTED_MODULE_7_vue__["default"](app);

            // Load layout

            layout = NUXT.layout || 'default';
            _context5.next = 9;
            return _app.loadLayout(layout);

          case 9:
            _app.setLayout(layout);

            // Mounts Vue app to DOM element

            mount = function mount() {
              _app.$mount('#__nuxt');

              // Listen for first Vue update
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
                // Call window.onNuxtReady callbacks
                nuxtReady(_app);

                // Enable hot reloading
                hotReloadAPI(_app);
              });
            };

            // Enable transitions


            _app.setTransitions = _app.$options.nuxt.setTransitions.bind(_app);
            if (Components.length) {
              _app.setTransitions(mapTransitions(Components, router.currentRoute));
              _lastPaths = router.currentRoute.matched.map(function (route) {
                return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["b" /* compile */])(route.path)(router.currentRoute.params);
              });
            }

            // Initialize error handler
            _app.$loading = {}; // To avoid error while _app.$nuxt does not exist
            if (NUXT.error) _app.error(NUXT.error);

            // Add router hooks
            router.beforeEach(loadAsyncComponents.bind(_app));
            router.beforeEach(render.bind(_app));
            router.afterEach(normalizeComponents);
            router.afterEach(fixPrepatch.bind(_app));

            // If page already is server rendered

            if (!NUXT.serverRendered) {
              _context5.next = 22;
              break;
            }

            mount();
            return _context5.abrupt('return');

          case 22:

            // First render on client-side
            render.call(_app, router.currentRoute, router.currentRoute, function (path) {
              // If not redirected
              if (!path) {
                normalizeComponents(router.currentRoute, router.currentRoute);
                showNextPage.call(_app, router.currentRoute);
                // Dont call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render
                mount();
                return;
              }

              // Push the path and then mount app
              router.push(path, function () {
                return mount();
              }, function (err) {
                if (!err) return mount();
                console.error(err);
              });
            });

          case 23:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function mountApp(_x13) {
    return _ref5.apply(this, arguments);
  };
}();






var noopData = function noopData() {
  return {};
};
var noopFetch = function noopFetch() {};

// Global shared references
var _lastPaths = [];
var app = void 0;
var router = void 0;

// Try to rehydrate SSR data from window
var NUXT = window.__NUXT__ || {};

// Setup global Vue error handler
var defaultErrorHandler = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].config.errorHandler;
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].config.errorHandler = function (err, vm, info) {
  var nuxtError = {
    statusCode: err.statusCode || err.name || 'Whoops!',
    message: err.message || err.toString()

    // Show Nuxt Error Page
  };if (vm && vm.$root && vm.$root.$nuxt && vm.$root.$nuxt.error && info !== 'render function') {
    vm.$root.$nuxt.error(nuxtError);
  }

  // Call other handler if exist
  if (typeof defaultErrorHandler === 'function') {
    return defaultErrorHandler.apply(undefined, arguments);
  }

  // Log to console
  if (true) {
    console.error(err);
  } else {
    console.error(err.message || nuxtError.message);
  }
};

// Create and mount App
Object(__WEBPACK_IMPORTED_MODULE_9__index__["b" /* createApp */])().then(mountApp).catch(function (err) {
  if (err.message === 'ERR_REDIRECT') {
    return; // Wait for browser to redirect...
  }
  console.error('[nuxt] Error while initializing app', err);
});

function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }
  var option = component.options[key];
  if (typeof option === 'function') {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return option.apply(undefined, args);
  }
  return option;
}

function mapTransitions(Components, to, from) {
  var componentTransitions = function componentTransitions(component) {
    var transition = componentOption(component, 'transition', to, from) || {};
    return typeof transition === 'string' ? { name: transition } : transition;
  };

  return Components.map(function (Component) {
    // Clone original object to prevent overrides
    var transitions = __WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign___default()({}, componentTransitions(Component));

    // Combine transitions & prefer `leave` transitions of 'from' route
    if (from && from.matched.length && from.matched[0].components.default) {
      var from_transitions = componentTransitions(from.matched[0].components.default);
      __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys___default()(from_transitions).filter(function (key) {
        return from_transitions[key] && key.toLowerCase().indexOf('leave') !== -1;
      }).forEach(function (key) {
        transitions[key] = from_transitions[key];
      });
    }

    return transitions;
  });
}

function applySSRData(Component, ssrData) {
  if (NUXT.serverRendered && ssrData) {
    Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* applyAsyncData */])(Component, ssrData);
  }
  Component._Ctor = Component;
  return Component;
}

// Get matched components
function resolveComponents(router) {
  var _this2 = this;

  var path = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["d" /* getLocation */])(router.options.base, router.options.mode);

  return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["c" /* flatMapComponents */])(router.match(path), function () {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(Component, _, match, key, index) {
      var _Component;

      return __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 3;
              return Component();

            case 3:
              Component = _context2.sent;

            case 4:
              // Sanitize it and save it
              _Component = applySSRData(Object(__WEBPACK_IMPORTED_MODULE_10__utils__["l" /* sanitizeComponent */])(Component), NUXT.data ? NUXT.data[index] : null);

              match.components[key] = _Component;
              return _context2.abrupt('return', _Component);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    return function (_x4, _x5, _x6, _x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }());
}

function callMiddleware(Components, context, layout) {
  var _this3 = this;

  var midd = [];
  var unknownMiddleware = false;

  // If layout is undefined, only call global middleware
  if (typeof layout !== 'undefined') {
    midd = []; // Exclude global middleware if layout defined (already called before)
    if (layout.middleware) {
      midd = midd.concat(layout.middleware);
    }
    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }

  midd = midd.map(function (name) {
    if (typeof name === 'function') return name;
    if (typeof __WEBPACK_IMPORTED_MODULE_8__middleware__["a" /* default */][name] !== 'function') {
      unknownMiddleware = true;
      _this3.error({ statusCode: 500, message: 'Unknown middleware ' + name });
    }
    return __WEBPACK_IMPORTED_MODULE_8__middleware__["a" /* default */][name];
  });

  if (unknownMiddleware) return;
  return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["i" /* middlewareSeries */])(midd, context);
}

function normalizeComponents(to, ___) {
  Object(__WEBPACK_IMPORTED_MODULE_10__utils__["c" /* flatMapComponents */])(to, function (Component, _, match, key) {
    if ((typeof Component === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof___default()(Component)) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }
    return Component;
  });
}

function showNextPage(to) {
  // Hide error component if no error
  if (this._hadError && this._dateLastError === this.$options.nuxt.dateErr) {
    this.error();
  }

  // Set layout
  var layout = this.$options.nuxt.err ? __WEBPACK_IMPORTED_MODULE_9__index__["a" /* NuxtError */].layout : to.matched[0].components.default.options.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  this.setLayout(layout);
}

// When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves
function fixPrepatch(to, ___) {
  var _this5 = this;

  if (this._pathChanged === false && this._queryChanged === false) return;

  __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
    var matches = [];
    var instances = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["f" /* getMatchedComponentsInstances */])(to, matches);

    instances.forEach(function (instance, i) {
      if (!instance) return;
      // if (!this._queryChanged && to.matched[matches[i]].path.indexOf(':') === -1 && to.matched[matches[i]].path.indexOf('*') === -1) return // If not a dynamic route, skip
      if (instance.constructor._dataRefresh && _lastPaths[i] === instance.constructor._path && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);
        for (var key in newData) {
          __WEBPACK_IMPORTED_MODULE_7_vue__["default"].set(instance.$data, key, newData[key]);
        }
      }
    });
    showNextPage.call(_this5, to);

    // Hot reloading
    setTimeout(function () {
      return hotReloadAPI(_this5);
    }, 100);
  });
}

function nuxtReady(_app) {
  window._nuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(_app);
    }
  });
  // Special JSDOM
  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app);
  }
  // Add router hooks
  router.afterEach(function (to, from) {
    // Wait for fixPrepatch + $data updates
    __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
      return _app.$nuxt.$emit('routeChanged', to, from);
    });
  });
}

// Special hot reload with asyncData(context)
function getNuxtChildComponents($parent) {
  var $components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  $parent.$children.forEach(function ($child) {
    if ($child.$vnode.data.nuxtChild && !$components.find(function (c) {
      return c.$options.__file === $child.$options.__file;
    })) {
      $components.push($child);
    }
    if ($child.$children && $child.$children.length) {
      getNuxtChildComponents($child, $components);
    }
  });

  return $components;
}

function hotReloadAPI(_app) {
  if (false) return;

  var $components = getNuxtChildComponents(_app.$nuxt, []);

  $components.forEach(addHotReload.bind(_app));
}

function addHotReload($component, depth) {
  var _this6 = this;

  if ($component.$vnode.data._hasHotReload) return;
  $component.$vnode.data._hasHotReload = true;

  var _forceUpdate = $component.$forceUpdate.bind($component.$parent);

  $component.$vnode.context.$forceUpdate = __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
    var Components, Component, promises, next, context;
    return __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            Components = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["e" /* getMatchedComponents */])(router.currentRoute);
            Component = Components[depth];

            if (Component) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt('return', _forceUpdate());

          case 4:
            if ((typeof Component === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof___default()(Component)) === 'object' && !Component.options) {
              // Updated via vue-router resolveAsyncComponents()
              Component = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].extend(Component);
              Component._Ctor = Component;
            }
            _this6.error();
            promises = [];

            next = function next(path) {
              this.$loading.finish && this.$loading.finish();
              router.push(path);
            };

            _context4.next = 10;
            return Object(__WEBPACK_IMPORTED_MODULE_10__utils__["m" /* setContext */])(app, {
              route: router.currentRoute,
              isHMR: true,
              next: next.bind(_this6)
            });

          case 10:
            context = app.context;

            _this6.$loading.start && _this6.$loading.start();
            callMiddleware.call(_this6, Components, context).then(function () {
              // If layout changed
              if (depth !== 0) return __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.resolve();
              var layout = Component.options.layout || 'default';
              if (typeof layout === 'function') {
                layout = layout(context);
              }
              if (_this6.layoutName === layout) return __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.resolve();
              var promise = _this6.loadLayout(layout);
              promise.then(function () {
                _this6.setLayout(layout);
                __WEBPACK_IMPORTED_MODULE_7_vue__["default"].nextTick(function () {
                  return hotReloadAPI(_this6);
                });
              });
              return promise;
            }).then(function () {
              return callMiddleware.call(_this6, Components, context, _this6.layout);
            }).then(function () {
              // Call asyncData(context)
              var pAsyncData = Object(__WEBPACK_IMPORTED_MODULE_10__utils__["j" /* promisify */])(Component.options.asyncData || noopData, context);
              pAsyncData.then(function (asyncDataResult) {
                Object(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* applyAsyncData */])(Component, asyncDataResult);
                _this6.$loading.increase && _this6.$loading.increase(30);
              });
              promises.push(pAsyncData);
              // Call fetch()
              Component.options.fetch = Component.options.fetch || noopFetch;
              var pFetch = Component.options.fetch(context);
              if (!pFetch || !(pFetch instanceof __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a) && typeof pFetch.then !== 'function') {
                pFetch = __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.resolve(pFetch);
              }
              pFetch.then(function () {
                return _this6.$loading.increase && _this6.$loading.increase(30);
              });
              promises.push(pFetch);
              return __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.all(promises);
            }).then(function () {
              _this6.$loading.finish && _this6.$loading.finish();
              _forceUpdate();
              setTimeout(function () {
                return hotReloadAPI(_this6);
              }, 100);
            });

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this6);
  }));
}

/***/ }),

/***/ "./.nuxt/components/no-ssr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
** From https://github.com/egoist/vue-no-ssr
** With the authorization of @egoist
*/
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'no-ssr',
  props: ['placeholder'],
  data: function data() {
    return {
      canRender: false
    };
  },
  mounted: function mounted() {
    this.canRender = true;
  },
  render: function render(h) {
    if (this.canRender) {
      if ("development" === 'development' && this.$slots.default && this.$slots.default.length > 1) {
        throw new Error('<no-ssr> You cannot use multiple child components');
      }
      return this.$slots.default && this.$slots.default[0];
    }

    return h('div', {
      class: ['no-ssr-placeholder']
    }, this.$slots.placeholder || this.placeholder);
  }
});

/***/ }),

/***/ "./.nuxt/components/nuxt-child.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-child',
  functional: true,
  props: ['keepAlive'],
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data,
        props = _ref.props;

    data.nuxtChild = true;
    var _parent = parent;
    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;

    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    // Add triggerScroll event on beforeEnter (fix #1376)
    var beforeEnter = listeners.beforeEnter;
    listeners.beforeEnter = function (el) {
      window.$nuxt.$emit('triggerScroll');
      if (beforeEnter) return beforeEnter.call(_parent, el);
    };

    var routerView = [h('router-view', data)];
    if (typeof props.keepAlive !== 'undefined') {
      routerView = [h('keep-alive', routerView)];
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, routerView);
  }
});

var transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];

var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];

/***/ }),

/***/ "./.nuxt/components/nuxt-error.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_true_presets_Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_error_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":true,\"presets\":[[\"/Users/elrakabawi/Desktop/gits/octopethcom/node_modules/babel-preset-vue-app/dist/index.common.js\",{\"targets\":{\"ie\":9,\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./.nuxt/components/nuxt-error.vue");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74e3df5b_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_error_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74e3df5b\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"object\":\"src\",\"embed\":\"src\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./.nuxt/components/nuxt-error.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js?{\"sourceMap\":true}!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e3df5b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-error.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_true_presets_Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_error_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74e3df5b_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_error_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = ".nuxt/components/nuxt-error.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js")
  hotAPI.install(__webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74e3df5b", Component.options)
  } else {
    hotAPI.reload("data-v-74e3df5b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./.nuxt/components/nuxt-link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
});

/***/ }),

/***/ "./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_true_presets_Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_loading_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":true,\"presets\":[[\"/Users/elrakabawi/Desktop/gits/octopethcom/node_modules/babel-preset-vue-app/dist/index.common.js\",{\"targets\":{\"ie\":9,\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./.nuxt/components/nuxt-loading.vue");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41c071cf_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_loading_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41c071cf\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"object\":\"src\",\"embed\":\"src\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./.nuxt/components/nuxt-loading.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js?{\"sourceMap\":true}!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_cacheDirectory_true_presets_Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_preset_vue_app_dist_index_common_js_targets_ie_9_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_nuxt_loading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41c071cf_hasScoped_false_transformToRequire_video_src_source_src_object_src_embed_src_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nuxt_loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = ".nuxt/components/nuxt-loading.vue"

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js")
  hotAPI.install(__webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41c071cf", Component.options)
  } else {
    hotAPI.reload("data-v-41c071cf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "./.nuxt/components/nuxt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__("./.nuxt/components/nuxt-child.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue__ = __webpack_require__("./.nuxt/components/nuxt-error.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./.nuxt/utils.js");





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt',
  props: ['nuxtChildKey', 'keepAlive'],
  render: function render(h) {
    // If there is some error
    if (this.nuxt.err) {
      return h('nuxt-error', {
        props: {
          error: this.nuxt.err
        }
      });
    }
    // Directly return nuxt child
    return h('nuxt-child', {
      key: this.routerViewKey,
      props: this.$props
    });
  },
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  computed: {
    routerViewKey: function routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* compile */])(this.$route.matched[0].path)(this.$route.params);
      }
      var Component = this.$route.matched[0] && this.$route.matched[0].components.default;
      if (Component && Component.options && Component.options.key) {
        return typeof Component.options.key === 'function' ? Component.options.key(this.$route) : Component.options.key;
      }
      return this.$route.path;
    }
  },
  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2__nuxt_error_vue__["a" /* default */]
  }
});

/***/ }),

/***/ "./.nuxt/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_define_property__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_es6_promise_auto__ = __webpack_require__("./node_modules/es6-promise/auto.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_es6_promise_auto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_es6_promise_auto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_meta__ = __webpack_require__("./node_modules/vue-meta/lib/vue-meta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_js__ = __webpack_require__("./.nuxt/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__ = __webpack_require__("./.nuxt/components/no-ssr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__ = __webpack_require__("./.nuxt/components/nuxt-child.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__ = __webpack_require__("./.nuxt/components/nuxt-link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_nuxt_error_vue__ = __webpack_require__("./.nuxt/components/nuxt-error.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__ = __webpack_require__("./.nuxt/components/nuxt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__App_js__ = __webpack_require__("./.nuxt/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils__ = __webpack_require__("./.nuxt/utils.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_13__components_nuxt_error_vue__["a"]; });







var createApp = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ssrContext) {
    var _this = this;

    var router, app, next, route, path, inject;
    return __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            router = Object(__WEBPACK_IMPORTED_MODULE_9__router_js__["a" /* createRouter */])(ssrContext);

            // Create Root instance
            // here we inject the router and store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends___default()({
              router: router,

              nuxt: {
                defaultTransition: defaultTransition,
                transitions: [defaultTransition],
                setTransitions: function setTransitions(transitions) {
                  if (!Array.isArray(transitions)) {
                    transitions = [transitions];
                  }
                  transitions = transitions.map(function (transition) {
                    if (!transition) {
                      transition = defaultTransition;
                    } else if (typeof transition === 'string') {
                      transition = __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
                    } else {
                      transition = __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
                    }
                    return transition;
                  });
                  this.$options.nuxt.transitions = transitions;
                  return transitions;
                },

                err: null,
                dateErr: null,
                error: function error(err) {
                  err = err || null;
                  app.context._errored = !!err;
                  if (typeof err === 'string') err = { statusCode: 500, message: err };
                  var nuxt = this.nuxt || this.$options.nuxt;
                  nuxt.dateErr = Date.now();
                  nuxt.err = err;
                  // Used in lib/server.js
                  if (ssrContext) ssrContext.nuxt.error = err;
                  return err;
                }
              }
            }, __WEBPACK_IMPORTED_MODULE_15__App_js__["a" /* default */]);
            next = ssrContext ? ssrContext.next : function (location) {
              return app.router.push(location);
            };
            // Resolve route

            route = void 0;

            if (ssrContext) {
              route = router.resolve(ssrContext.url).route;
            } else {
              path = Object(__WEBPACK_IMPORTED_MODULE_16__utils__["d" /* getLocation */])(router.options.base);

              route = router.resolve(path).route;
            }

            // Set context to app.context
            _context2.next = 7;
            return Object(__WEBPACK_IMPORTED_MODULE_16__utils__["m" /* setContext */])(app, {
              route: route,
              next: next,
              error: app.nuxt.error.bind(app),

              payload: ssrContext ? ssrContext.payload : undefined,
              req: ssrContext ? ssrContext.req : undefined,
              res: ssrContext ? ssrContext.res : undefined,
              beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined
            });

          case 7:
            inject = function inject(key, value) {
              if (!key) throw new Error('inject(key, value) has no key provided');
              if (!value) throw new Error('inject(key, value) has no value provided');
              key = '$' + key;
              // Add into app
              app[key] = value;

              // Check if plugin not already installed
              var installKey = '__nuxt_' + key + '_installed__';
              if (__WEBPACK_IMPORTED_MODULE_7_vue__["default"][installKey]) return;
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"][installKey] = true;
              // Call Vue.use() to install the plugin into vm
              __WEBPACK_IMPORTED_MODULE_7_vue__["default"].use(function () {
                if (!__WEBPACK_IMPORTED_MODULE_7_vue__["default"].prototype.hasOwnProperty(key)) {
                  __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_define_property___default()(__WEBPACK_IMPORTED_MODULE_7_vue__["default"].prototype, key, {
                    get: function get() {
                      return this.$root.$options[key];
                    }
                  });
                }
              });
            };

            // Plugin execution


            // If server-side, wait for async component to be resolved first


            if (true) {
              _context2.next = 11;
              break;
            }

            _context2.next = 11;
            return new __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
              router.push(ssrContext.url, resolve, function () {
                // navigated to a different route in router guard
                var unregister = router.afterEach(function () {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(to, from, next) {
                    return __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            ssrContext.url = to.fullPath;
                            _context.next = 3;
                            return Object(__WEBPACK_IMPORTED_MODULE_16__utils__["h" /* getRouteData */])(to);

                          case 3:
                            app.context.route = _context.sent;

                            app.context.params = to.params || {};
                            app.context.query = to.query || {};
                            unregister();
                            resolve();

                          case 8:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, _this);
                  }));

                  return function (_x2, _x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              });
            });

          case 11:
            return _context2.abrupt('return', {
              app: app,
              router: router

            });

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createApp(_x) {
    return _ref.apply(this, arguments);
  };
}();













/* Plugins */

// Component: <no-ssr>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_10__components_no_ssr_js__["a" /* default */]);

// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_11__components_nuxt_child_js__["a" /* default */]);

// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_12__components_nuxt_link_js__["a" /* default */]);

// Component: <nuxt>`
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_14__components_nuxt_js__["a" /* default */]);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_7_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

var defaultTransition = { "name": "page", "mode": "out-in", "appear": false, "appearClass": "appear", "appearActiveClass": "appear-active", "appearToClass": "appear-to" };



/***/ }),

/***/ "./.nuxt/middleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_get_iterator__ = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_get_iterator__);


var files = __webpack_require__("./middleware ^\\.\\/(?!-)[^.]+\\.(js)$");
var filenames = files.keys();

function getModule(filename) {
  var file = files(filename);
  return file.default ? file.default : file;
}
var middleware = {};

// Generate the middleware
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_get_iterator___default()(filenames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var filename = _step.value;

    var name = filename.replace(/^\.\//, '').replace(/\.(js)$/, '');
    middleware[name] = getModule(filename);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (middleware);

/***/ }),

/***/ "./.nuxt/router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");




__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["default"]);

var _529140f0 = function _529140f0() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./pages/index.vue")).then(function (m) {
    return m.default || m;
  });
};

if (true) {
  window.history.scrollRestoration = 'manual';
}
var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  var position = false;

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 };
  } else if (to.matched.some(function (r) {
    return r.components.default.options.scrollToTop;
  })) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 };
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  }

  return new __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a(function (resolve) {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', function () {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        var hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
};

function createRouter() {
  return new __WEBPACK_IMPORTED_MODULE_2_vue_router__["default"]({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior: scrollBehavior,
    routes: [{
      path: "/",
      component: _529140f0,
      name: "index"
    }],

    fallback: false
  });
}

/***/ }),

/***/ "./.nuxt/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyAsyncData;
/* harmony export (immutable) */ __webpack_exports__["l"] = sanitizeComponent;
/* harmony export (immutable) */ __webpack_exports__["e"] = getMatchedComponents;
/* harmony export (immutable) */ __webpack_exports__["f"] = getMatchedComponentsInstances;
/* harmony export (immutable) */ __webpack_exports__["c"] = flatMapComponents;
/* harmony export (immutable) */ __webpack_exports__["k"] = resolveRouteComponents;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setContext; });
/* harmony export (immutable) */ __webpack_exports__["i"] = middlewareSeries;
/* harmony export (immutable) */ __webpack_exports__["j"] = promisify;
/* harmony export (immutable) */ __webpack_exports__["d"] = getLocation;
/* unused harmony export urlJoin */
/* harmony export (immutable) */ __webpack_exports__["b"] = compile;
/* harmony export (immutable) */ __webpack_exports__["g"] = getQueryDiff;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify__ = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__ = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys__ = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");









var noopData = function noopData() {
  return {};
};

// window.onNuxtReady(() => console.log('Ready')) hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (true) {
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

function applyAsyncData(Component, asyncData) {
  var ComponentData = Component.options.data || noopData;
  // Prevent calling this method for each request on SSR context
  if (!asyncData && Component.options.hasAsyncData) {
    return;
  }
  Component.options.hasAsyncData = true;
  Component.options.data = function () {
    var data = ComponentData.call(this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return __WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends___default()({}, data, asyncData);
  };
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}

function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = __WEBPACK_IMPORTED_MODULE_7_vue__["default"].extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // For debugging purpose
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}

function getMatchedComponents(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return [].concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return [].concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      matches && matches.push(index);
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function resolveRouteComponents(route) {
  var _this = this;

  return __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.all(flatMapComponents(route, function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(Component, _, match, key) {
      return __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              return _context.abrupt('return', match.components[key] = sanitizeComponent(Component));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x3, _x4, _x5, _x6) {
      return _ref.apply(this, arguments);
    };
  }()));
}

var getRouteData = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(route) {
    return __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return resolveRouteComponents(route);

          case 2:
            return _context2.abrupt('return', __WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends___default()({}, route, {
              meta: getMatchedComponents(route).map(function (Component) {
                return Component.options.meta || {};
              })
            }));

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getRouteData(_x7) {
    return _ref2.apply(this, arguments);
  };
}();

var setContext = function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_3__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(app, context) {
    var route;
    return __WEBPACK_IMPORTED_MODULE_2__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            route = context.to ? context.to : context.route;
            // If context not defined, create it

            if (app.context) {
              _context3.next = 13;
              break;
            }

            _context3.t0 = false;
            _context3.t1 = app;
            _context3.t2 = context.payload;
            _context3.t3 = context.error;
            _context3.t4 = {};
            app.context = {
              get isServer() {
                console.warn('context.isServer has been deprecated, please use process.server instead.');
                return false;
              },
              get isClient() {
                console.warn('context.isClient has been deprecated, please use process.client instead.');
                return true;
              },
              isStatic: _context3.t0,
              isDev: true,
              isHMR: false,
              app: _context3.t1,
              payload: _context3.t2,
              error: _context3.t3,
              base: '/',
              env: _context3.t4
            };

            if (context.req) app.context.req = context.req;
            if (context.res) app.context.res = context.res;
            app.context.redirect = function (status, path, query) {
              if (!status) return;
              app.context._redirected = true; // Used in middleware
              // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
              var pathType = typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof___default()(path);
              if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
                query = path || {};
                path = status;
                pathType = typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof___default()(path);
                status = 302;
              }
              if (pathType === 'object') {
                path = app.router.resolve(path).href;
              }
              // "/absolute/route", "./relative/route" or "../relative/route"
              if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                app.context.next({
                  path: path,
                  query: query,
                  status: status
                });
              } else {
                path = formatUrl(path, query);
                if (false) {
                  app.context.next({
                    path: path,
                    status: status
                  });
                }
                if (true) {
                  // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
                  window.location.replace(path);

                  // Throw a redirect error
                  throw new Error('ERR_REDIRECT');
                }
              }
            };
            if (false) app.context.beforeNuxtRender = function (fn) {
              return context.beforeRenderFns.push(fn);
            };
            if (true) app.context.nuxtState = window.__NUXT__;

          case 13:
            // Dynamic keys
            app.context.next = context.next;
            app.context._redirected = false;
            app.context._errored = false;
            app.context.isHMR = !!context.isHMR;

            if (!context.route) {
              _context3.next = 21;
              break;
            }

            _context3.next = 20;
            return getRouteData(context.route);

          case 20:
            app.context.route = _context3.sent;

          case 21:
            app.context.params = app.context.route.params || {};
            app.context.query = app.context.route.query || {};

            if (!context.from) {
              _context3.next = 27;
              break;
            }

            _context3.next = 26;
            return getRouteData(context.from);

          case 26:
            app.context.from = _context3.sent;

          case 27:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function setContext(_x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.resolve();
  }
  return promisify(promises[0], appContext).then(function () {
    return middlewareSeries(promises.slice(1), appContext);
  });
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!promise || !(promise instanceof __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a) && typeof promise.then !== 'function') {
    promise = __WEBPACK_IMPORTED_MODULE_4__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base, mode) {
  var path = window.location.pathname;
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

function getQueryDiff(toQuery, fromQuery) {
  var diff = {};
  var queries = __WEBPACK_IMPORTED_MODULE_6__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_extends___default()({}, toQuery, fromQuery);
  for (var k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_1__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */
function formatUrl(url, query) {
  var protocol = void 0;
  var index = url.indexOf('://');
  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.indexOf('//') === 0) {
    url = url.substring(2);
  }

  var parts = url.split('/');
  var result = (protocol ? protocol + '://' : '//') + parts.shift();

  var path = parts.filter(Boolean).join('/');
  var hash = void 0;
  parts = path.split('#');
  if (parts.length === 2) {
    path = parts[0];
    hash = parts[1];
  }

  result += path ? '/' + path : '';

  if (query && __WEBPACK_IMPORTED_MODULE_0__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_json_stringify___default()(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }
  result += hash ? '#' + hash : '';

  return result;
}

/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */
function formatQuery(query) {
  return __WEBPACK_IMPORTED_MODULE_5__Users_elrakabawi_Desktop_gits_octopethcom_node_modules_babel_runtime_core_js_object_keys___default()(query).sort().map(function (key) {
    var val = query[key];
    if (val == null) {
      return '';
    }
    if (Array.isArray(val)) {
      return val.slice().map(function (val2) {
        return [key, '=', val2].join('');
      }).join('&');
    }
    return key + '=' + val;
  }).filter(Boolean).join('&');
}

/***/ }),

/***/ "./middleware ^\\.\\/(?!-)[^.]+\\.(js)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./middleware ^\\.\\/(?!-)[^.]+\\.(js)$";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":true,\"presets\":[[\"/Users/elrakabawi/Desktop/gits/octopethcom/node_modules/babel-preset-vue-app/dist/index.common.js\",{\"targets\":{\"ie\":9,\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./.nuxt/components/nuxt-error.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-error',
  props: ['error'],
  head: function head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }]
    };
  },


  // Only on debug mode
  data: function data() {
    return {
      mounted: false
    };
  },
  mounted: function mounted() {
    this.mounted = true;
  },
  created: function created() {
    console.error(this.error);
  },

  watch: {
    error: function error(newErr) {
      if (newErr) {
        console.error(newErr);
      }
    }
  },

  computed: {
    statusCode: function statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message: function message() {
      return this.error.message || 'Error';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"babelrc\":false,\"cacheDirectory\":true,\"presets\":[[\"/Users/elrakabawi/Desktop/gits/octopethcom/node_modules/babel-preset-vue-app/dist/index.common.js\",{\"targets\":{\"ie\":9,\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.runtime.esm.js");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: '#3B8070',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n", "", {"version":3,"sources":["/Users/elrakabawi/Desktop/gits/octopethcom/.nuxt/components/nuxt-loading.vue"],"names":[],"mappings":";AACA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,UAAU;EACV,6CAA6C;EAC7C,qCAAqC;EACrC,WAAW;EACX,0BAA0B;EAC1B,gBAAgB;CACjB","file":"nuxt-loading.vue","sourcesContent":["\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  -webkit-transition: width 0.2s, opacity 0.4s;\n  transition: width 0.2s, opacity 0.4s;\n  opacity: 1;\n  background-color: #efc14e;\n  z-index: 999999;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e3df5b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-error.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.__nuxt-error-page {\n  padding: 16px;\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased; \n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 24px;\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n", "", {"version":3,"sources":["/Users/elrakabawi/Desktop/gits/octopethcom/.nuxt/components/nuxt-error.vue"],"names":[],"mappings":";AACA;EACE,cAAc;EACd,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,+BAA+B;EAC/B,oCAAoC;EACpC,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,UAAU;CACX;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;CACd","file":"nuxt-error.vue","sourcesContent":["\n.__nuxt-error-page {\n  padding: 16px;\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased; \n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 24px;\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41c071cf\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"object\":\"src\",\"embed\":\"src\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "nuxt-progress",
    style: {
      width: _vm.percent + "%",
      height: _vm.height,
      "background-color": _vm.canSuccess ? _vm.color : _vm.failedColor,
      opacity: _vm.show ? 1 : 0
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js")      .rerender("data-v-41c071cf", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74e3df5b\",\"hasScoped\":false,\"transformToRequire\":{\"video\":\"src\",\"source\":\"src\",\"object\":\"src\",\"embed\":\"src\"},\"preserveWhitespace\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./.nuxt/components/nuxt-error.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "__nuxt-error-page" }, [
    _c("div", { staticClass: "error" }, [
      _c(
        "svg",
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "90",
            height: "90",
            fill: "#DBE1EC",
            viewBox: "0 0 48 48"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
            }
          })
        ]
      ),
      _c("div", { staticClass: "title" }, [_vm._v(_vm._s(_vm.message))]),
      _vm.statusCode === 404
        ? _c(
            "p",
            { staticClass: "description" },
            [
              _c(
                "nuxt-link",
                { staticClass: "error-link", attrs: { to: "/" } },
                [_vm._v("Back to the home page")]
              )
            ],
            1
          )
        : _c("p", { staticClass: "description" }, [
            _vm._v(
              "An error occurred while rendering the page. Check developer tools console for details."
            )
          ]),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo" }, [
      _c(
        "a",
        {
          attrs: {
            href: "https://nuxtjs.org",
            target: "_blank",
            rel: "noopener"
          }
        },
        [_vm._v("Nuxt.js")]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__("./node_modules/vue-hot-reload-api/dist/index.js")      .rerender("data-v-74e3df5b", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?{\"sourceMap\":true}!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c104b1cc", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue", function() {
     var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41c071cf\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-loading.vue");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?{\"sourceMap\":true}!./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e3df5b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-error.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e3df5b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-error.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1eadf9e5", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e3df5b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-error.vue", function() {
     var newContent = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true,\"minimize\":false,\"importLoaders\":0,\"alias\":{\"/assets\":\"/Users/elrakabawi/Desktop/gits/octopethcom/assets\",\"/static\":\"/Users/elrakabawi/Desktop/gits/octopethcom/static\"}}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e3df5b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./.nuxt/components/nuxt-error.vue");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?name=client&reload=true&timeout=30000&path=/__webpack_hmr");
module.exports = __webpack_require__("./.nuxt/client.js");


/***/ })

},[0]);
//# sourceMappingURL=app.js.map