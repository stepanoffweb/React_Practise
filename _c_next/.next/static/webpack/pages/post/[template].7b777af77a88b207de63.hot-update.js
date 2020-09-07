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
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, post));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bdGVtcGxhdGVdLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwidGVtcGxhdGUiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxPQUFzQjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUNqQztBQUNBO0FBQ0EsU0FDRyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlBLElBQUosQ0FETCxDQURIO0FBS0M7S0FSbUJELEk7O0FBVXhCQSxJQUFJLENBQUNFLGVBQUw7QUFBQSwrTEFBdUIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NGLEdBQUcsQ0FBQ0csS0FBSixDQUFVQyxRQUE5QztBQURtQjtBQUFBLG1CQUVJQyxLQUFLLHVDQUFnQ0wsR0FBRyxDQUFDRyxLQUFKLENBQVVDLFFBQTFDLEVBRlQ7O0FBQUE7QUFFYkUsb0JBRmE7QUFBQTtBQUFBLG1CQUdBQSxRQUFRLENBQUNDLElBQVQsRUFIQTs7QUFBQTtBQUdiVCxnQkFIYTtBQUFBLDZDQUlaO0FBQ0hBLGtCQUFJLEVBQUpBO0FBREcsYUFKWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJLENBVUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1t0ZW1wbGF0ZV0uN2I3NzdhZjc3YTg4YjIwN2RlNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHtNYWluTGF5b3V0fSBmcm9tICcuLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0fSkge1xyXG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyb3V0ZXI6ICcsIHJvdXRlcik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgICAgIDxwPntwb3N0fTwvcD5cclxuICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgICAgIClcclxuICAgIH1cclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2N0eC5xdWVyeS50ZW1wbGF0ZTogJywgY3R4LnF1ZXJ5LnRlbXBsYXRlKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9wb3N0cy8ke2N0eC5xdWVyeS50ZW1wbGF0ZX1gKVxyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb3N0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4gICAgLy8gPGgxPjxMaW5rIGhyZWY9eycvJ30+UG9zdCByb3V0ZXIucXVlcnkudGVtcGxhdGUgPSA8L0xpbms+e3JvdXRlci5xdWVyeS50ZW1wbGF0ZX08L2gxPlxyXG4vLyByb3V0ZXI6IFNlcnZlclJvdXRlciB7XHJcbi8vICAgICByb3V0ZTogJy9wb3N0L1t0ZW1wbGF0ZV0nLFxyXG4vLyAgICAgcGF0aG5hbWU6ICcvcG9zdC9bdGVtcGxhdGVdJyxcclxuLy8gICAgIHF1ZXJ5OiB7fSxcclxuLy8gICAgIGFzUGF0aDogJy9wb3N0L1t0ZW1wbGF0ZV0nLFxyXG4vLyAgICAgYmFzZVBhdGg6ICcnLFxyXG4vLyAgICAgZXZlbnRzOiB1bmRlZmluZWQsXHJcbi8vICAgICBpc0ZhbGxiYWNrOiBmYWxzZVxyXG4vLyB9XHJcbi8vINC+0YLQstC10YIg0LrQu9C40LXQvdGC0YMoV2ViRGV2VG9vbHMpIHJvdXRlcjoge1xyXG4vLyAgICAgcGF0aG5hbWU6IFwiL3Bvc3QvW3RlbXBsYXRlXVwiLFxyXG4vLyAgICAgcm91dGU6IFwiL3Bvc3QvW3RlbXBsYXRlXVwiLFxyXG4vLyAgICAgcXVlcnk6IHtcclxuLy8gICAgICAgICDigKZ9LFxyXG4vLyAgICAgYXNQYXRoOiBcIi9wb3N0L2lkXCIsXHJcbi8vICAgICBjb21wb25lbnRzOiB7XHJcbi8vICAgICAgICAg4oCmfSxcclxuLy8gICAgIOKAplxyXG4vLyB9XHJcbi8vIGFzUGF0aDogXCIvcG9zdC9pZFwiIC8vICEhISDQuNC3INCw0LTRgNC10YHQvdC+0Lkg0YHRgtGA0L7QutC4LCDQs9C00LUg0L7RgtGA0LjRgdC+0LLQsNC90LAg0YHRgtGA0LDQvdC40YbQsC4uLtCX0LDRh9C10Lwg0LLQvtC30LLRgNCw0YnQsNGC0Ywg0LzQvdC1INC90LDQsdGA0LDQvdC90YvQuSDQsNC00YDQtdGBP1xyXG4vLyBiYWNrOiDGkigpXHJcbi8vIGJhc2VQYXRoOiBcIlwiXHJcbi8vIGJlZm9yZVBvcFN0YXRlOiDGkigpXHJcbi8vIGNvbXBvbmVudHM6IHtcclxuLy8gICAgICAgICAvcG9zdC8gW3RlbXBsYXRlXToge1xyXG4vLyAgICAgICAgICAgICDigKZ9LFxyXG4vLyAgICAgICAgIC9fYXBwOiB74oCmfX1cclxuLy8gICAgICAgICBldmVudHM6IHtcclxuLy8gICAgICAgICAgICAgb246IMaSLFxyXG4vLyAgICAgICAgICAgICBvZmY6IMaSLFxyXG4vLyAgICAgICAgICAgICBlbWl0OiDGklxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpc0ZhbGxiYWNrOiBmYWxzZVxyXG4vLyAgICAgICAgIHBhdGhuYW1lOiBcIi9wb3N0L1t0ZW1wbGF0ZV1cIlxyXG4vLyAgICAgICAgIHByZWZldGNoOiDGkigpXHJcbi8vICAgICAgICAgcHVzaDogxpIoKVxyXG4vLyAgICAgICAgIHF1ZXJ5OiB7XHJcbi8vICAgICAgICAgICAgIHRlbXBsYXRlOiBcImlkXCJcclxuLy8gICAgICAgICB9IC8vINC60LvRjtGHIC0g0L3QsNC30LLQsNC90LjQtSDRhNCw0LnQu9CwICFcclxuLy8gICAgICAgICByZWxvYWQ6IMaSKClcclxuLy8gICAgICAgICByZXBsYWNlOiDGkigpXHJcbi8vICAgICAgICAgcm91dGU6IFwiL3Bvc3QvW3RlbXBsYXRlXVwiXHJcbi8vICAgICAgICAgX19wcm90b19fOiBPYmplY3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==