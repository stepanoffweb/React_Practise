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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(serverPost),
      post = _useState[0],
      setPost = _useState[1];

  console.log('post: ', post);
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
  }, [post]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bdGVtcGxhdGVdLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJzZXJ2ZXJQb3N0IiwicG9zdCIsInVzZVN0YXRlIiwic2V0UG9zdCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInF1ZXJ5IiwidGVtcGxhdGUiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidGl0bGUiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFiQyxVQUFhLFFBQW5CQyxJQUFtQjs7QUFBQSxrQkFDckJDLHNEQUFRLENBQUNGLFVBQUQsQ0FEYTtBQUFBLE1BQ3RDQyxJQURzQztBQUFBLE1BQ2hDRSxPQURnQzs7QUFFN0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLElBQXRCO0FBQ0EsTUFBTUssTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUg2QyxDQUk3Qzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDUixVQUFMLEVBQWlCO0FBQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUMyQlMsS0FBSyx1Q0FBZ0NILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxRQUE3QyxFQURoQzs7QUFBQTtBQUNVQyx3QkFEVjtBQUFBO0FBQUEsdUJBRXVCQSxRQUFRLENBQUNDLElBQVQsRUFGdkI7O0FBQUE7QUFFVUMsb0JBRlY7QUFHSVgsdUJBQU8sQ0FBQ1csSUFBRCxDQUFQOztBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0g7QUFDSixHQVJRLEVBUU4sQ0FBQ2IsSUFBRCxDQVJNLENBQVQ7O0FBV0EsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxXQUFPLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREcsQ0FBUDtBQUdIOztBQUNELFNBQ0csTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxJQUFJLENBQUNjLEtBQVYsTUFETCxFQUVLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTCxFQUdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWQsSUFBSSxDQUFDZSxJQUFULENBSEwsRUFJSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFlLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWYsQ0FKTCxDQURIO0FBUUg7O0dBOUJ1QmpCLEk7VUFHTFEscUQ7OztLQUhLUixJOztBQWdDeEJBLElBQUksQ0FBQ2tCLGVBQUw7QUFBQSwrTEFBdUIsa0JBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ2RBLEdBQUcsQ0FBQ0MsR0FEVTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FDRTtBQUFDbEIsa0JBQUksRUFBRTtBQUFQLGFBREY7O0FBQUE7QUFBQTtBQUFBLG1CQUdJUSxLQUFLLHVDQUFnQ1MsR0FBRyxDQUFDUixLQUFKLENBQVVDLFFBQTFDLEVBSFQ7O0FBQUE7QUFHYkMsb0JBSGE7QUFBQTtBQUFBLG1CQUlBQSxRQUFRLENBQUNDLElBQVQsRUFKQTs7QUFBQTtBQUliWixnQkFKYTtBQUFBLDhDQUtaO0FBQ0hBLGtCQUFJLEVBQUpBO0FBREcsYUFMWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBV0k7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1t0ZW1wbGF0ZV0uMzcxNDM3ZjQwODY5ZGI1YWQ1MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHtNYWluTGF5b3V0fSBmcm9tICcuLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3Q6IHNlcnZlclBvc3R9KSB7XHJcbiAgICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZShzZXJ2ZXJQb3N0KVxyXG4gICAgY29uc29sZS5sb2coJ3Bvc3Q6ICcsIHBvc3QpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyb3V0ZXI6ICcsIHJvdXRlcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXNlcnZlclBvc3QpIHtcclxuICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MjAwL3Bvc3RzLyR7cm91dGVyLnF1ZXJ5LnRlbXBsYXRlfWApXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0KGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbcG9zdF0pXHJcblxyXG5cclxuICAgIGlmICghcG9zdCkge1xyXG4gICAgICAgIHJldHVybiA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfSA8L2gxPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cclxuICAgICAgICAgICAgPGg1PkdvIGJhY2sgdG8gPExpbmsgaHJlZj1cIi9wb3N0c1wiPiBQT1NUUzwvTGluaz48L2g1PlxyXG4gICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGlmICghY3R4LnJlcSkgcmV0dXJuIHtwb3N0OiBudWxsfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9wb3N0cy8ke2N0eC5xdWVyeS50ZW1wbGF0ZX1gKVxyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3N0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gICAgLy8gPGgxPjxMaW5rIGhyZWY9eycvJ30+UG9zdCByb3V0ZXIucXVlcnkudGVtcGxhdGUgPSA8L0xpbms+e3JvdXRlci5xdWVyeS50ZW1wbGF0ZX08L2gxPlxyXG4vLyByb3V0ZXI6IFNlcnZlclJvdXRlciB7XHJcbi8vICAgICByb3V0ZTogJy9wb3N0L1t0ZW1wbGF0ZV0nLFxyXG4vLyAgICAgcGF0aG5hbWU6ICcvcG9zdC9bdGVtcGxhdGVdJyxcclxuLy8gICAgIHF1ZXJ5OiB7fSxcclxuLy8gICAgIGFzUGF0aDogJy9wb3N0L1t0ZW1wbGF0ZV0nLFxyXG4vLyAgICAgYmFzZVBhdGg6ICcnLFxyXG4vLyAgICAgZXZlbnRzOiB1bmRlZmluZWQsXHJcbi8vICAgICBpc0ZhbGxiYWNrOiBmYWxzZVxyXG4vLyB9XHJcbi8vINC+0YLQstC10YIg0LrQu9C40LXQvdGC0YMoV2ViRGV2VG9vbHMpIHJvdXRlcjoge1xyXG4vLyAgICAgcGF0aG5hbWU6IFwiL3Bvc3QvW3RlbXBsYXRlXVwiLFxyXG4vLyAgICAgcm91dGU6IFwiL3Bvc3QvW3RlbXBsYXRlXVwiLFxyXG4vLyAgICAgcXVlcnk6IHtcclxuLy8gICAgICAgICDigKZ9LFxyXG4vLyAgICAgYXNQYXRoOiBcIi9wb3N0L2lkXCIsXHJcbi8vICAgICBjb21wb25lbnRzOiB7XHJcbi8vICAgICAgICAg4oCmfSxcclxuLy8gICAgIOKAplxyXG4vLyB9XHJcbi8vIGFzUGF0aDogXCIvcG9zdC9pZFwiIC8vICEhISDQuNC3INCw0LTRgNC10YHQvdC+0Lkg0YHRgtGA0L7QutC4LCDQs9C00LUg0L7RgtGA0LjRgdC+0LLQsNC90LAg0YHRgtGA0LDQvdC40YbQsC4uLtCX0LDRh9C10Lwg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0LzQvdC1INC90LDQsdGA0LDQvdC90YvQuSDQsNC00YDQtdGBP1xyXG4vLyBiYWNrOiDGkigpXHJcbi8vIGJhc2VQYXRoOiBcIlwiXHJcbi8vIGJlZm9yZVBvcFN0YXRlOiDGkigpXHJcbi8vIGNvbXBvbmVudHM6IHtcclxuLy8gICAgICAgICAvcG9zdC8gW3RlbXBsYXRlXToge1xyXG4vLyAgICAgICAgICAgICDigKZ9LFxyXG4vLyAgICAgICAgIC9fYXBwOiB74oCmfX1cclxuLy8gICAgICAgICBldmVudHM6IHtcclxuLy8gICAgICAgICAgICAgb246IMaSLFxyXG4vLyAgICAgICAgICAgICBvZmY6IMaSLFxyXG4vLyAgICAgICAgICAgICBlbWl0OiDGklxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpc0ZhbGxiYWNrOiBmYWxzZVxyXG4vLyAgICAgICAgIHBhdGhuYW1lOiBcIi9wb3N0L1t0ZW1wbGF0ZV1cIlxyXG4vLyAgICAgICAgIHByZWZldGNoOiDGkigpXHJcbi8vICAgICAgICAgcHVzaDogxpIoKVxyXG4vLyAgICAgICAgIHF1ZXJ5OiB7XHJcbi8vICAgICAgICAgICAgIHRlbXBsYXRlOiBcImlkXCJcclxuLy8gICAgICAgICB9IC8vINC60LvRjtGHIC0g0L3QsNC30LLQsNC90LjQtSDRhNCw0LnQu9CwICFcclxuLy8gICAgICAgICByZWxvYWQ6IMaSKClcclxuLy8gICAgICAgICByZXBsYWNlOiDGkigpXHJcbi8vICAgICAgICAgcm91dGU6IFwiL3Bvc3QvW3RlbXBsYXRlXVwiXHJcbi8vICAgICAgICAgX19wcm90b19fOiBPYmplY3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==