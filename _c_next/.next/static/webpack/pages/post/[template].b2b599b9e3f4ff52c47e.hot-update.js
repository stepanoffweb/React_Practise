webpackHotUpdate_N_E("pages/post/[template]",{

/***/ "./pages/post/[template].js":
/*!**********************************!*\
  !*** ./pages/post/[template].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/MainLayout */ "./layouts/MainLayout.js");



var _jsxFileName = "E:\\MONEYweb\\JOB\\4_myActivity\\0_REPO\\3_React_Practise\\c_next\\pages\\post\\[template].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Post(_ref) {
  _s();

  var serverPost = _ref.post;
  console.log('post: ', post);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(serverPost),
      post = _useState[0],
      setPost = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(); // console.log('router: ', router);

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!serverPost) {
      /*#__PURE__*/
      Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("http://localhost:4200/posts/".concat(router.query.template));

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                data = _context.sent;
                setPost(data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, []);

  if (!post) {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__["MainLayout"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 16
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, "Loading..."));
  }

  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__["MainLayout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 8
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, post.title, " "), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, post.body), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Go back to ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 28
    }
  }, " POSTS")));
}

_s(Post, "k7sF1YLvJL6hkkXaf/jroV70/AU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Post;

Post.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    var response, post;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (ctx.req) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", {
              post: null
            });

          case 2:
            _context2.next = 4;
            return fetch("http://localhost:4200/posts/".concat(ctx.query.template));

          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return response.json();

          case 7:
            post = _context2.sent;
            return _context2.abrupt("return", {
              post: post
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}(); // <h1><Link href={'/'}>Post router.query.template = </Link>{router.query.template}</h1>
// router: ServerRouter {
//     route: '/post/[template]',
//     pathname: '/post/[template]',
//     query: {},
//     asPath: '/post/[template]',
//     basePath: '',
//     events: undefined,
//     isFallback: false
// }
// ответ клиенту(WebDevTools) router: {
//     pathname: "/post/[template]",
//     route: "/post/[template]",
//     query: {
//         …},
//     asPath: "/post/id",
//     components: {
//         …},
//     …
// }
// asPath: "/post/id" // !!! из адресной строки, где отрисована страница...Зачем возвращать мне набранный адрес?
// back: ƒ()
// basePath: ""
// beforePopState: ƒ()
// components: {
//         /post/ [template]: {
//             …},
//         /_app: {…}}
//         events: {
//             on: ƒ,
//             off: ƒ,
//             emit: ƒ
//         }
//         isFallback: false
//         pathname: "/post/[template]"
//         prefetch: ƒ()
//         push: ƒ()
//         query: {
//             template: "id"
//         } // ключ - название файла !
//         reload: ƒ()
//         replace: ƒ()
//         route: "/post/[template]"
//         __proto__: Object


var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bdGVtcGxhdGVdLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJzZXJ2ZXJQb3N0IiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInNldFBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInF1ZXJ5IiwidGVtcGxhdGUiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGl0bGUiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFiQyxVQUFhLFFBQW5CQyxJQUFtQjtBQUM3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsSUFBdEI7O0FBRDZDLGtCQUVyQkcsc0RBQVEsQ0FBQ0osVUFBRCxDQUZhO0FBQUEsTUFFdENDLElBRnNDO0FBQUEsTUFFaENJLE9BRmdDOztBQUc3QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSDZDLENBSTdDOztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNSLFVBQUwsRUFBaUI7QUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQzJCUyxLQUFLLHVDQUFnQ0gsTUFBTSxDQUFDSSxLQUFQLENBQWFDLFFBQTdDLEVBRGhDOztBQUFBO0FBQ1VDLHdCQURWO0FBQUE7QUFBQSx1QkFFdUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZ2Qjs7QUFBQTtBQUVVQyxvQkFGVjtBQUdJVCx1QkFBTyxDQUFDUyxJQUFELENBQVA7O0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLSDtBQUNKLEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBV0EsTUFBSSxDQUFDYixJQUFMLEVBQVc7QUFDUCxXQUFPLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREcsQ0FBUDtBQUdIOztBQUNELFNBQ0csTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxJQUFJLENBQUNjLEtBQVYsTUFETCxFQUVLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTCxFQUdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWQsSUFBSSxDQUFDZSxJQUFULENBSEwsRUFJSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFlLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWYsQ0FKTCxDQURIO0FBUUg7O0dBOUJ1QmpCLEk7VUFHTFEscUQ7OztLQUhLUixJOztBQWdDeEJBLElBQUksQ0FBQ2tCLGVBQUw7QUFBQSwrTEFBdUIsa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ2RBLEdBQUcsQ0FBQ0MsR0FEVTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FDRTtBQUFDbEIsa0JBQUksRUFBRTtBQUFQLGFBREY7O0FBQUE7QUFBQTtBQUFBLG1CQUdJUSxLQUFLLHVDQUFnQ1MsR0FBRyxDQUFDUixLQUFKLENBQVVDLFFBQTFDLEVBSFQ7O0FBQUE7QUFHYkMsb0JBSGE7QUFBQTtBQUFBLG1CQUlBQSxRQUFRLENBQUNDLElBQVQsRUFKQTs7QUFBQTtBQUliWixnQkFKYTtBQUFBLDhDQUtaO0FBQ0hBLGtCQUFJLEVBQUpBO0FBREcsYUFMWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBV0k7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1t0ZW1wbGF0ZV0uYjJiNTk5YjllM2Y0ZmY1MmM0N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHtNYWluTGF5b3V0fSBmcm9tICcuLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3Q6IHNlcnZlclBvc3R9KSB7XHJcbiAgICBjb25zb2xlLmxvZygncG9zdDogJywgcG9zdCk7XHJcbiAgICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZShzZXJ2ZXJQb3N0KVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyb3V0ZXI6ICcsIHJvdXRlcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXNlcnZlclBvc3QpIHtcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MjAwL3Bvc3RzLyR7cm91dGVyLnF1ZXJ5LnRlbXBsYXRlfWApXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0KGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgaWYgKCFwb3N0KSB7XHJcbiAgICAgICAgcmV0dXJuIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9IDwvaDE+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxyXG4gICAgICAgICAgICA8aDU+R28gYmFjayB0byA8TGluayBocmVmPVwiL3Bvc3RzXCI+IFBPU1RTPC9MaW5rPjwvaDU+XHJcbiAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgaWYgKCFjdHgucmVxKSByZXR1cm4ge3Bvc3Q6IG51bGx9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MjAwL3Bvc3RzLyR7Y3R4LnF1ZXJ5LnRlbXBsYXRlfWApXHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3RcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgICAvLyA8aDE+PExpbmsgaHJlZj17Jy8nfT5Qb3N0IHJvdXRlci5xdWVyeS50ZW1wbGF0ZSA9IDwvTGluaz57cm91dGVyLnF1ZXJ5LnRlbXBsYXRlfTwvaDE+XHJcbi8vIHJvdXRlcjogU2VydmVyUm91dGVyIHtcclxuLy8gICAgIHJvdXRlOiAnL3Bvc3QvW3RlbXBsYXRlXScsXHJcbi8vICAgICBwYXRobmFtZTogJy9wb3N0L1t0ZW1wbGF0ZV0nLFxyXG4vLyAgICAgcXVlcnk6IHt9LFxyXG4vLyAgICAgYXNQYXRoOiAnL3Bvc3QvW3RlbXBsYXRlXScsXHJcbi8vICAgICBiYXNlUGF0aDogJycsXHJcbi8vICAgICBldmVudHM6IHVuZGVmaW5lZCxcclxuLy8gICAgIGlzRmFsbGJhY2s6IGZhbHNlXHJcbi8vIH1cclxuLy8g0L7RgtCy0LXRgiDQutC70LjQtdC90YLRgyhXZWJEZXZUb29scykgcm91dGVyOiB7XHJcbi8vICAgICBwYXRobmFtZTogXCIvcG9zdC9bdGVtcGxhdGVdXCIsXHJcbi8vICAgICByb3V0ZTogXCIvcG9zdC9bdGVtcGxhdGVdXCIsXHJcbi8vICAgICBxdWVyeToge1xyXG4vLyAgICAgICAgIOKApn0sXHJcbi8vICAgICBhc1BhdGg6IFwiL3Bvc3QvaWRcIixcclxuLy8gICAgIGNvbXBvbmVudHM6IHtcclxuLy8gICAgICAgICDigKZ9LFxyXG4vLyAgICAg4oCmXHJcbi8vIH1cclxuLy8gYXNQYXRoOiBcIi9wb3N0L2lkXCIgLy8gISEhINC40Lcg0LDQtNGA0LXRgdC90L7QuSDRgdGC0YDQvtC60LgsINCz0LTQtSDQvtGC0YDQuNGB0L7QstCw0L3QsCDRgdGC0YDQsNC90LjRhtCwLi4u0JfQsNGH0LXQvCDQstC+0LfQstGA0LDRidCw0YLRjCDQvNC90LUg0L3QsNCx0YDQsNC90L3Ri9C5INCw0LTRgNC10YE/XHJcbi8vIGJhY2s6IMaSKClcclxuLy8gYmFzZVBhdGg6IFwiXCJcclxuLy8gYmVmb3JlUG9wU3RhdGU6IMaSKClcclxuLy8gY29tcG9uZW50czoge1xyXG4vLyAgICAgICAgIC9wb3N0LyBbdGVtcGxhdGVdOiB7XHJcbi8vICAgICAgICAgICAgIOKApn0sXHJcbi8vICAgICAgICAgL19hcHA6IHvigKZ9fVxyXG4vLyAgICAgICAgIGV2ZW50czoge1xyXG4vLyAgICAgICAgICAgICBvbjogxpIsXHJcbi8vICAgICAgICAgICAgIG9mZjogxpIsXHJcbi8vICAgICAgICAgICAgIGVtaXQ6IMaSXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlzRmFsbGJhY2s6IGZhbHNlXHJcbi8vICAgICAgICAgcGF0aG5hbWU6IFwiL3Bvc3QvW3RlbXBsYXRlXVwiXHJcbi8vICAgICAgICAgcHJlZmV0Y2g6IMaSKClcclxuLy8gICAgICAgICBwdXNoOiDGkigpXHJcbi8vICAgICAgICAgcXVlcnk6IHtcclxuLy8gICAgICAgICAgICAgdGVtcGxhdGU6IFwiaWRcIlxyXG4vLyAgICAgICAgIH0gLy8g0LrQu9GO0YcgLSDQvdCw0LfQstCw0L3QuNC1INGE0LDQudC70LAgIVxyXG4vLyAgICAgICAgIHJlbG9hZDogxpIoKVxyXG4vLyAgICAgICAgIHJlcGxhY2U6IMaSKClcclxuLy8gICAgICAgICByb3V0ZTogXCIvcG9zdC9bdGVtcGxhdGVdXCJcclxuLy8gICAgICAgICBfX3Byb3RvX186IE9iamVjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9