webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "E:\\MONEYweb\\JOB\\4_myActivity\\0_REPO\\3_React_Practise\\c_next\\pages\\posts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // import { useState, useEffect } from 'react'

function Posts(_ref) {
  var _this = this;

  var posts = _ref.posts;
  // const [posts, setPosts] = useState([])
  // const postsUrl = 'http://localhost:4200/posts'
  // useEffect(() => {
  //     async function getPosts(url) {
  //         const response = await fetch(url)
  //         const posts = await response.json()
  //         setPosts(posts)
  //     }
  //     getPosts(postsUrl)
  // }, [postsUrl])
  return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__["MainLayout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Posts Page"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae nostrum odio tempore nesciunt eaque maiores architecto voluptatum accusantium id velit repellendus possimus harum earum ex, illum modi libero ipsum accusamus natus culpa. Voluptates porro unde suscipit possimus commodi facilis! Magnam modi ad ducimus sint recusandae, deleniti amet molestiae quod."), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "\u0421\u0430\u043C \u043F\u0440\u0435\u0432\u0435\u0434"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "\u042F \u0443\u0441\u0442\u0430\u043B")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/post/1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "\u042F \u043C\u0443\u0445\u043E\u0436\u0443\u043A")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "\u044D\u0442\u043E\u0442 Next \u0442\u0430\u043A\u043E\u0439"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/post/id",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "....."))), posts.map(function (post) {
    return __jsx("div", {
      className: "post",
      key: post.ip,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/post/".concat(post.ip),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 53
      }
    }, post.title))));
  }));
}
_c = Posts;
Posts.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response, posts;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('http://localhost:4200/posts');

        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();

        case 5:
          posts = _context.sent;
          return _context.abrupt("return", {
            posts: posts
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

var _c;

$RefreshReg$(_c, "Posts");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJpcCIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUVlLFNBQVNBLEtBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxLQUFRLFFBQVJBLEtBQVE7QUFDbkM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUFRLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREksRUFFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVYQUZJLEVBR0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0RBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQUosQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBSixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRUFKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFKLENBTEosQ0FISSxFQVVIQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FDWDtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLGtCQUFXRCxJQUFJLENBQUNDLEVBQWhCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlELElBQUksQ0FBQ0UsS0FBVCxDQUFoQyxDQUFKLENBREosQ0FEVztBQUFBLEdBQWQsQ0FWRyxDQUFSO0FBZ0JIO0tBN0J1QkwsSztBQStCeEJBLEtBQUssQ0FBQ00sZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDR0MsS0FBSyxDQUFDLDZCQUFELENBRFI7O0FBQUE7QUFDZEMsa0JBRGM7QUFBQTtBQUFBLGlCQUVBQSxRQUFRLENBQUNDLElBQVQsRUFGQTs7QUFBQTtBQUVkUixlQUZjO0FBQUEsMkNBR2I7QUFBQ0EsaUJBQUssRUFBTEE7QUFBRCxXQUhhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLjNmZTBjMmQ5YTViNDgwMjFiNjg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01haW5MYXlvdXR9IGZyb20gJy4uL2xheW91dHMvTWFpbkxheW91dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cyh7cG9zdHN9KSB7XHJcbiAgICAvLyBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgLy8gY29uc3QgcG9zdHNVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MjAwL3Bvc3RzJ1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHModXJsKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgLy8gICAgICAgICBzZXRQb3N0cyhwb3N0cylcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZ2V0UG9zdHMocG9zdHNVcmwpXHJcbiAgICAvLyB9LCBbcG9zdHNVcmxdKVxyXG5cclxuICAgIHJldHVybiAoPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgPGgxPlBvc3RzIFBhZ2U8L2gxPlxyXG4gICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcnVtIGJlYXRhZSBub3N0cnVtIG9kaW8gdGVtcG9yZSBuZXNjaXVudCBlYXF1ZSBtYWlvcmVzIGFyY2hpdGVjdG8gdm9sdXB0YXR1bSBhY2N1c2FudGl1bSBpZCB2ZWxpdCByZXBlbGxlbmR1cyBwb3NzaW11cyBoYXJ1bSBlYXJ1bSBleCwgaWxsdW0gbW9kaSBsaWJlcm8gaXBzdW0gYWNjdXNhbXVzIG5hdHVzIGN1bHBhLiBWb2x1cHRhdGVzIHBvcnJvIHVuZGUgc3VzY2lwaXQgcG9zc2ltdXMgY29tbW9kaSBmYWNpbGlzISBNYWduYW0gbW9kaSBhZCBkdWNpbXVzIHNpbnQgcmVjdXNhbmRhZSwgZGVsZW5pdGkgYW1ldCBtb2xlc3RpYWUgcXVvZC48L3A+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+0KHQsNC8INC/0YDQtdCy0LXQtDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPtCvINGD0YHRgtCw0Ls8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvcG9zdC8xXCI+0K8g0LzRg9GF0L7QttGD0Lo8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPtGN0YLQvtGCIE5leHQg0YLQsNC60L7QuTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Bvc3QvaWRcIj4uLi4uLjwvTGluaz48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCIga2V5PXtwb3N0LmlwfSA+XHJcbiAgICAgICAgICAgICAgICA8aDI+PExpbmsgaHJlZj17YC9wb3N0LyR7cG9zdC5pcH1gfT48YT57cG9zdC50aXRsZX08L2E+PC9MaW5rPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgIDwvTWFpbkxheW91dD4pXHJcbn1cclxuXHJcblBvc3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9wb3N0cycpXHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgcmV0dXJuIHtwb3N0c31cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9