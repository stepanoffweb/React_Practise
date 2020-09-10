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


var _jsxFileName = "E:\\MONEYweb\\JOB\\4_myActivity\\0_REPO\\3_React_Practise\\c_next\\pages\\post\\[template].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Post(_ref) {
  var post = _ref.post;
  // const router = useRouter()
  // console.log('router: ', router);
  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_5__["MainLayout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 8
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, post.title, " "), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, post.body), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/posts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Go back to POSTS")));
}
_c = Post;

Post.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var response, post;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('ctx.query.template: ', ctx.query.template);
            _context.next = 3;
            return fetch("http://localhost:4200/posts/".concat(ctx.query.template));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            post = _context.sent;
            return _context.abrupt("return", {
              post: post
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bdGVtcGxhdGVdLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidGVtcGxhdGUiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxPQUFzQjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUNqQztBQUNBO0FBQ0EsU0FDRyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLElBQUksQ0FBQ0MsS0FBVixNQURMLEVBRUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZMLEVBR0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRCxJQUFJLENBQUNFLElBQVQsQ0FITCxFQUlLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBSixDQUpMLENBREg7QUFTQztLQVptQkgsSTs7QUFjeEJBLElBQUksQ0FBQ0ksZUFBTDtBQUFBLCtMQUF1QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLFFBQTlDO0FBRG1CO0FBQUEsbUJBRUlDLEtBQUssdUNBQWdDTCxHQUFHLENBQUNHLEtBQUosQ0FBVUMsUUFBMUMsRUFGVDs7QUFBQTtBQUViRSxvQkFGYTtBQUFBO0FBQUEsbUJBR0FBLFFBQVEsQ0FBQ0MsSUFBVCxFQUhBOztBQUFBO0FBR2JYLGdCQUhhO0FBQUEsNkNBSVo7QUFDSEEsa0JBQUksRUFBSkE7QUFERyxhQUpZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FVSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3RlbXBsYXRlXS43OTYwN2NmMDA0ODE2ZDY1YjUzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQge01haW5MYXlvdXR9IGZyb20gJy4uLy4uL2xheW91dHMvTWFpbkxheW91dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3R9KSB7XHJcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3JvdXRlcjogJywgcm91dGVyKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfSA8L2gxPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cclxuICAgICAgICAgICAgPGg1PjxMaW5rIGhyZWY9XCIvcG9zdHNcIj5HbyBiYWNrIHRvIFBPU1RTPC9MaW5rPjwvaDU+XHJcblxyXG4gICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgICAgKVxyXG4gICAgfVxyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnY3R4LnF1ZXJ5LnRlbXBsYXRlOiAnLCBjdHgucXVlcnkudGVtcGxhdGUpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MjAwL3Bvc3RzLyR7Y3R4LnF1ZXJ5LnRlbXBsYXRlfWApXHJcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3RcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgICAvLyA8aDE+PExpbmsgaHJlZj17Jy8nfT5Qb3N0IHJvdXRlci5xdWVyeS50ZW1wbGF0ZSA9IDwvTGluaz57cm91dGVyLnF1ZXJ5LnRlbXBsYXRlfTwvaDE+XHJcbi8vIHJvdXRlcjogU2VydmVyUm91dGVyIHtcclxuLy8gICAgIHJvdXRlOiAnL3Bvc3QvW3RlbXBsYXRlXScsXHJcbi8vICAgICBwYXRobmFtZTogJy9wb3N0L1t0ZW1wbGF0ZV0nLFxyXG4vLyAgICAgcXVlcnk6IHt9LFxyXG4vLyAgICAgYXNQYXRoOiAnL3Bvc3QvW3RlbXBsYXRlXScsXHJcbi8vICAgICBiYXNlUGF0aDogJycsXHJcbi8vICAgICBldmVudHM6IHVuZGVmaW5lZCxcclxuLy8gICAgIGlzRmFsbGJhY2s6IGZhbHNlXHJcbi8vIH1cclxuLy8g0L7RgtCy0LXRgiDQutC70LjQtdC90YLRgyhXZWJEZXZUb29scykgcm91dGVyOiB7XHJcbi8vICAgICBwYXRobmFtZTogXCIvcG9zdC9bdGVtcGxhdGVdXCIsXHJcbi8vICAgICByb3V0ZTogXCIvcG9zdC9bdGVtcGxhdGVdXCIsXHJcbi8vICAgICBxdWVyeToge1xyXG4vLyAgICAgICAgIOKApn0sXHJcbi8vICAgICBhc1BhdGg6IFwiL3Bvc3QvaWRcIixcclxuLy8gICAgIGNvbXBvbmVudHM6IHtcclxuLy8gICAgICAgICDigKZ9LFxyXG4vLyAgICAg4oCmXHJcbi8vIH1cclxuLy8gYXNQYXRoOiBcIi9wb3N0L2lkXCIgLy8gISEhINC40Lcg0LDQtNGA0LXRgdC90L7QuSDRgdGC0YDQvtC60LgsINCz0LTQtSDQvtGC0YDQuNGB0L7QstCw0L3QsCDRgdGC0YDQsNC90LjRhtCwLi4u0JfQsNGH0LXQvCDQstC+0LfQstGA0LDRidCw0YLRjCDQvNC90LUg0L3QsNCx0YDQsNC90L3Ri9C5INCw0LTRgNC10YE/XHJcbi8vIGJhY2s6IMaSKClcclxuLy8gYmFzZVBhdGg6IFwiXCJcclxuLy8gYmVmb3JlUG9wU3RhdGU6IMaSKClcclxuLy8gY29tcG9uZW50czoge1xyXG4vLyAgICAgICAgIC9wb3N0LyBbdGVtcGxhdGVdOiB7XHJcbi8vICAgICAgICAgICAgIOKApn0sXHJcbi8vICAgICAgICAgL19hcHA6IHvigKZ9fVxyXG4vLyAgICAgICAgIGV2ZW50czoge1xyXG4vLyAgICAgICAgICAgICBvbjogxpIsXHJcbi8vICAgICAgICAgICAgIG9mZjogxpIsXHJcbi8vICAgICAgICAgICAgIGVtaXQ6IMaSXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlzRmFsbGJhY2s6IGZhbHNlXHJcbi8vICAgICAgICAgcGF0aG5hbWU6IFwiL3Bvc3QvW3RlbXBsYXRlXVwiXHJcbi8vICAgICAgICAgcHJlZmV0Y2g6IMaSKClcclxuLy8gICAgICAgICBwdXNoOiDGkigpXHJcbi8vICAgICAgICAgcXVlcnk6IHtcclxuLy8gICAgICAgICAgICAgdGVtcGxhdGU6IFwiaWRcIlxyXG4vLyAgICAgICAgIH0gLy8g0LrQu9GO0YcgLSDQvdCw0LfQstCw0L3QuNC1INGE0LDQudC70LAgIVxyXG4vLyAgICAgICAgIHJlbG9hZDogxpIoKVxyXG4vLyAgICAgICAgIHJlcGxhY2U6IMaSKClcclxuLy8gICAgICAgICByb3V0ZTogXCIvcG9zdC9bdGVtcGxhdGVdXCJcclxuLy8gICAgICAgICBfX3Byb3RvX186IE9iamVjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9