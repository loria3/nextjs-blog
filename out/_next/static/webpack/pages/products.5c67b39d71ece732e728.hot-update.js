webpackHotUpdate_N_E("pages/products",{

/***/ "./components/Dropdowns/PagesDropdown.js":
/*!***********************************************!*\
  !*** ./components/Dropdowns/PagesDropdown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ \"./node_modules/@popperjs/core/lib/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/lori/Documents/Niche/UslyWebApp/nextjs-blog/components/Dropdowns/PagesDropdown.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nconst PagesDropdown = () => {\n  _s();\n\n  // dropdown props\n  const [dropdownPopoverShow, setDropdownPopoverShow] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);\n  const btnDropdownRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n  const popoverDropdownRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();\n\n  const openDropdownPopover = () => {\n    Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__[\"createPopper\"])(btnDropdownRef.current, popoverDropdownRef.current, {\n      placement: \"bottom-start\"\n    });\n    setDropdownPopoverShow(true);\n  };\n\n  const closeDropdownPopover = () => {\n    setDropdownPopoverShow(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: \"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\",\n      href: \"#pablo\",\n      ref: btnDropdownRef,\n      onClick: e => {\n        e.preventDefault();\n        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();\n      },\n      children: \"\\u05DC\\u05D9\\u05E0\\u05E7\\u05D9\\u05DD \\u05D0\\u05D7\\u05E8\\u05D9\\u05DD\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      ref: popoverDropdownRef,\n      className: (dropdownPopoverShow ? \"block \" : \"hidden \") + \"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          className: \"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\",\n          children: \"\\xA0\\u05D3\\u05E3 \\u05D4\\u05D1\\u05D9\\u05EA\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/privacy\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#pablo\",\n          className: \"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\",\n          children: \"\\u05E4\\u05E8\\u05D8\\u05D9\\u05D5\\u05EA\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/authors\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#authors\",\n          className: \"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n_s(PagesDropdown, \"53KgDU6y31Eps6IlHPrrUv05sao=\");\n\n_c = PagesDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PagesDropdown);\n\nvar _c;\n\n$RefreshReg$(_c, \"PagesDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bnMvUGFnZXNEcm9wZG93bi5qcz8xYWFhIl0sIm5hbWVzIjpbIlBhZ2VzRHJvcGRvd24iLCJkcm9wZG93blBvcG92ZXJTaG93Iiwic2V0RHJvcGRvd25Qb3BvdmVyU2hvdyIsIlJlYWN0IiwidXNlU3RhdGUiLCJidG5Ecm9wZG93blJlZiIsImNyZWF0ZVJlZiIsInBvcG92ZXJEcm9wZG93blJlZiIsIm9wZW5Ecm9wZG93blBvcG92ZXIiLCJjcmVhdGVQb3BwZXIiLCJjdXJyZW50IiwicGxhY2VtZW50IiwiY2xvc2VEcm9wZG93blBvcG92ZXIiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQUE7O0FBQzFCO0FBQ0EsUUFBTSxDQUFDQyxtQkFBRCxFQUFzQkMsc0JBQXRCLElBQWdEQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF0RDtBQUNBLFFBQU1DLGNBQWMsZ0JBQUdGLDRDQUFLLENBQUNHLFNBQU4sRUFBdkI7QUFDQSxRQUFNQyxrQkFBa0IsZ0JBQUdKLDRDQUFLLENBQUNHLFNBQU4sRUFBM0I7O0FBQ0EsUUFBTUUsbUJBQW1CLEdBQUcsTUFBTTtBQUNoQ0MsdUVBQVksQ0FBQ0osY0FBYyxDQUFDSyxPQUFoQixFQUF5Qkgsa0JBQWtCLENBQUNHLE9BQTVDLEVBQXFEO0FBQy9EQyxlQUFTLEVBQUU7QUFEb0QsS0FBckQsQ0FBWjtBQUdBVCwwQkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0QsR0FMRDs7QUFNQSxRQUFNVSxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDViwwQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFDLDRIQURaO0FBRUUsVUFBSSxFQUFDLFFBRlA7QUFHRSxTQUFHLEVBQUVHLGNBSFA7QUFJRSxhQUFPLEVBQUdRLENBQUQsSUFBTztBQUNkQSxTQUFDLENBQUNDLGNBQUY7QUFDQWIsMkJBQW1CLEdBQUdXLG9CQUFvQixFQUF2QixHQUE0QkosbUJBQW1CLEVBQWxFO0FBQ0QsT0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFO0FBQ0UsU0FBRyxFQUFFRCxrQkFEUDtBQUVFLGVBQVMsRUFDUCxDQUFDTixtQkFBbUIsR0FBRyxRQUFILEdBQWMsU0FBbEMsSUFDQSx3RkFKSjtBQUFBLDhCQU9FLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBQyxHQURQO0FBRUUsbUJBQVMsRUFDUCwrRkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFpQkUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxFQUNQLCtGQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkYsZUE0QkUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxtQkFBUyxFQUNQO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBLGtCQURGO0FBb0RELENBbEVEOztHQUFNRCxhOztLQUFBQSxhO0FBb0VTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJvcGRvd25zL1BhZ2VzRHJvcGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tIFwiQHBvcHBlcmpzL2NvcmVcIjtcblxuY29uc3QgUGFnZXNEcm9wZG93biA9ICgpID0+IHtcbiAgLy8gZHJvcGRvd24gcHJvcHNcbiAgY29uc3QgW2Ryb3Bkb3duUG9wb3ZlclNob3csIHNldERyb3Bkb3duUG9wb3ZlclNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBidG5Ecm9wZG93blJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBjb25zdCBwb3BvdmVyRHJvcGRvd25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgY29uc3Qgb3BlbkRyb3Bkb3duUG9wb3ZlciA9ICgpID0+IHtcbiAgICBjcmVhdGVQb3BwZXIoYnRuRHJvcGRvd25SZWYuY3VycmVudCwgcG9wb3ZlckRyb3Bkb3duUmVmLmN1cnJlbnQsIHtcbiAgICAgIHBsYWNlbWVudDogXCJib3R0b20tc3RhcnRcIixcbiAgICB9KTtcbiAgICBzZXREcm9wZG93blBvcG92ZXJTaG93KHRydWUpO1xuICB9O1xuICBjb25zdCBjbG9zZURyb3Bkb3duUG9wb3ZlciA9ICgpID0+IHtcbiAgICBzZXREcm9wZG93blBvcG92ZXJTaG93KGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPVwibGc6dGV4dC13aGl0ZSBsZzpob3Zlcjp0ZXh0LWJsdWVHcmF5LTIwMCB0ZXh0LWJsdWVHcmF5LTcwMCBweC0zIHB5LTQgbGc6cHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHVwcGVyY2FzZSBmb250LWJvbGRcIlxuICAgICAgICBocmVmPVwiI3BhYmxvXCJcbiAgICAgICAgcmVmPXtidG5Ecm9wZG93blJlZn1cbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZHJvcGRvd25Qb3BvdmVyU2hvdyA/IGNsb3NlRHJvcGRvd25Qb3BvdmVyKCkgOiBvcGVuRHJvcGRvd25Qb3BvdmVyKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgINec15nXoNen15nXnSDXkNeX16jXmdedXG4gICAgICA8L2E+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17cG9wb3ZlckRyb3Bkb3duUmVmfVxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIChkcm9wZG93blBvcG92ZXJTaG93ID8gXCJibG9jayBcIiA6IFwiaGlkZGVuIFwiKSArXG4gICAgICAgICAgXCJiZy13aGl0ZSB0ZXh0LWJhc2Ugei01MCBmbG9hdC1sZWZ0IHB5LTIgbGlzdC1ub25lIHRleHQtbGVmdCByb3VuZGVkIHNoYWRvdy1sZyBtaW4tdy00OFwiXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0ZXh0LXNtIHB5LTIgcHgtNCBmb250LW5vcm1hbCBibG9jayB3LWZ1bGwgd2hpdGVzcGFjZS1ub3dyYXAgYmctdHJhbnNwYXJlbnQgdGV4dC1ibHVlR3JheS03MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIMKg15PXoyDXlNeR15nXqlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3ByaXZhY3lcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cIiNwYWJsb1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg16TXqNeY15nXldeqXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRob3JzXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIjYXV0aG9yc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInRleHQtc20gcHktMiBweC00IGZvbnQtbm9ybWFsIGJsb2NrIHctZnVsbCB3aGl0ZXNwYWNlLW5vd3JhcCBiZy10cmFuc3BhcmVudCB0ZXh0LWJsdWVHcmF5LTcwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlc0Ryb3Bkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dropdowns/PagesDropdown.js\n");

/***/ })

})