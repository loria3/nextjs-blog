webpackHotUpdate_N_E("pages/article",{

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbars/AuthNavbar.js */ \"./components/Navbars/AuthNavbar.js\");\n/* harmony import */ var _components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footers/Footer.js */ \"./components/Footers/Footer.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetcher */ \"./utils/fetcher.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/lori/Documents/Niche/UslyWebApp/nextjs-blog/pages/article.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst imageUrl = {\n  url: \"https://niche.ink\"\n};\nfunction Product() {\n  _s();\n\n  var _mainArt$Article$thum, _mainArt$Article$thum2, _mainArt$authors;\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    item\n  } = router.query;\n  if (!item) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 21\n  }, this);\n  const {\n    data: mainArt\n  } = Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(['getOneArticles', item], (url, item) => Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(url, {\n    item: item\n  }));\n  if (!mainArt) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 24\n  }, this);\n  const imgUrl = `${imageUrl.url}${(_mainArt$Article$thum = mainArt.Article.thumbnail) !== null && _mainArt$Article$thum !== void 0 && (_mainArt$Article$thum2 = _mainArt$Article$thum.formats) !== null && _mainArt$Article$thum2 !== void 0 && _mainArt$Article$thum2.medium ? mainArt.Article.thumbnail.formats.medium.url : mainArt.Article.thumbnail.url}`;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      transparent: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"profile-page\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative block h-500-px\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 w-full h-full bg-center bg-cover\",\n          style: {\n            backgroundImage: \"url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            id: \"blackOverlay\",\n            className: \"w-full h-full absolute opacity-50 bg-black\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16\",\n          style: {\n            transform: \"translateZ(0)\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"absolute bottom-0 overflow-hidden\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            preserveAspectRatio: \"none\",\n            version: \"1.1\",\n            viewBox: \"0 0 2560 100\",\n            x: \"0\",\n            y: \"0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polygon\", {\n              className: \"text-blueGray-200 fill-current\",\n              points: \"2560 0 2560 100 0 100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative py-16 bg-blueGray-200\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container mx-auto px-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"px-6\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"flex flex-wrap justify-center mb-24\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"relative\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      alt: mainArt.Header,\n                      src: imgUrl,\n                      className: \"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 min-h-120-px max-h-120-px max-w-120-px min-w-120-px\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 75,\n                      columnNumber: 23\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 74,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"text-center mt-24\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                  className: \"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\",\n                  children: mainArt.Header\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\",\n                  children: `דקות קראיה ${mainArt.Article.minutes}`\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\",\n                  children: (_mainArt$authors = mainArt.authors) === null || _mainArt$authors === void 0 ? void 0 : _mainArt$authors.WriterName\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"mt-10 py-10 border-t border-blueGray-200 text-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex flex-wrap justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"w-full lg:w-9/12 px-4\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                      className: \"mb-4 text-lg leading-relaxed text-blueGray-700\",\n                      children: mainArt.Article.content\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 104,\n                      columnNumber: 23\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                      href: {\n                        pathname: \"/articles/\"\n                      },\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                        href: \"/articles\",\n                        className: \"font-normal text-lightBlue-500\",\n                        children: \"\\u05D7\\u05D6\\u05E8\\u05D4\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 112,\n                        columnNumber: 25\n                      }, this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 107,\n                      columnNumber: 23\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 103,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Product, \"fjcd8YrJrgYpUgI62GS34znulKA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Product;\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS5qcz8xZWYxIl0sIm5hbWVzIjpbImltYWdlVXJsIiwidXJsIiwiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsIml0ZW0iLCJxdWVyeSIsImRhdGEiLCJtYWluQXJ0IiwidXNlU1dSIiwiZmV0Y2hIZWxwZXIiLCJpbWdVcmwiLCJBcnRpY2xlIiwidGh1bWJuYWlsIiwiZm9ybWF0cyIsIm1lZGl1bSIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zZm9ybSIsIkhlYWRlciIsIm1pbnV0ZXMiLCJhdXRob3JzIiwiV3JpdGVyTmFtZSIsImNvbnRlbnQiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNmQyxLQUFHLEVBQUU7QUFEVSxDQUFqQjtBQUdlLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRUM7QUFBRixNQUFXRixNQUFNLENBQUNHLEtBQXhCO0FBQ0EsTUFBSSxDQUFDRCxJQUFMLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR1osUUFBTTtBQUFDRSxRQUFJLEVBQUVDO0FBQVAsTUFBa0JDLG1EQUFNLENBQUMsQ0FBQyxnQkFBRCxFQUFtQkosSUFBbkIsQ0FBRCxFQUEyQixDQUFDSixHQUFELEVBQU1JLElBQU4sS0FDdERLLDhEQUFXLENBQUNULEdBQUQsRUFBTTtBQUFDSSxRQUFJLEVBQUVBO0FBQVAsR0FBTixDQURnQixDQUE5QjtBQUlDLE1BQUksQ0FBQ0csT0FBTCxFQUFjLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVmLFFBQU1HLE1BQU0sR0FBSSxHQUFFWCxRQUFRLENBQUNDLEdBQUksR0FDNUIseUJBQUFPLE9BQU8s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Q0FBZ0JVO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFJRSxxRUFBQyxnREFBRDtBQUNFLDBCQUFJLEVBQUU7QUFDSkMsZ0NBQVEsRUFBRTtBQUROLHVCQURSO0FBQUEsNkNBS0U7QUFDRSw0QkFBSSxFQUFDLFdBRFA7QUFFRSxpQ0FBUyxFQUFDLGdDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBK0ZFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvRkY7QUFBQSxrQkFERjtBQW1HRDs7R0F0SHVCckIsTztVQUNQRSxxRCxFQU1RSywyQzs7O0tBUERQLE8iLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhcnMvQXV0aE5hdmJhci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJzL0Zvb3Rlci5qc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgZmV0Y2hIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL2ZldGNoZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgaW1hZ2VVcmwgPSB7XG4gIHVybDogXCJodHRwczovL25pY2hlLmlua1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgaXRlbSB9ID0gcm91dGVyLnF1ZXJ5O1xuICBpZiAoIWl0ZW0pIHJldHVybiA8ZGl2PjwvZGl2PjtcblxuXG4gY29uc3Qge2RhdGE6IG1haW5BcnR9ID0gdXNlU1dSKFsnZ2V0T25lQXJ0aWNsZXMnLCBpdGVtXSwgKHVybCwgaXRlbSkgPT5cbiAgICBmZXRjaEhlbHBlcih1cmwsIHtpdGVtOiBpdGVtfSksXG4gICk7XG5cbiAgaWYgKCFtYWluQXJ0KSByZXR1cm4gPGRpdj48L2Rpdj47XG5cbiBjb25zdCBpbWdVcmwgPSBgJHtpbWFnZVVybC51cmx9JHtcbiAgICBtYWluQXJ0LkFydGljbGUudGh1bWJuYWlsPy5mb3JtYXRzPy5tZWRpdW1cbiAgICAgID8gbWFpbkFydC5BcnRpY2xlLnRodW1ibmFpbC5mb3JtYXRzLm1lZGl1bS51cmxcbiAgICAgIDogbWFpbkFydC5BcnRpY2xlLnRodW1ibmFpbC51cmxcbiAgfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciB0cmFuc3BhcmVudCAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHJvZmlsZS1wYWdlXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIGgtNTAwLXB4XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgdy1mdWxsIGgtZnVsbCBiZy1jZW50ZXIgYmctY292ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgIFwidXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTMzNjMxNTgxNi0wOTc2NTVkY2ZiZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI3MTAmcT04MCcpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGlkPVwiYmxhY2tPdmVybGF5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSBvcGFjaXR5LTUwIGJnLWJsYWNrXCJcbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWF1dG8gYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGFic29sdXRlIHBvaW50ZXItZXZlbnRzLW5vbmUgb3ZlcmZsb3ctaGlkZGVuIGgtMTZcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2MCAxMDBcIlxuICAgICAgICAgICAgICB4PVwiMFwiXG4gICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTIwMCBmaWxsLWN1cnJlbnRcIlxuICAgICAgICAgICAgICAgIHBvaW50cz1cIjI1NjAgMCAyNTYwIDEwMCAwIDEwMFwiXG4gICAgICAgICAgICAgID48L3BvbHlnb24+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0xNiBiZy1ibHVlR3JheS0yMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy14bCByb3VuZGVkLWxnIC1tdC02NFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIG1iLTI0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTMvMTIgcHgtNCBsZzpvcmRlci0yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bWFpbkFydC5IZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLWZ1bGwgaC1hdXRvIGFsaWduLW1pZGRsZSBib3JkZXItbm9uZSBhYnNvbHV0ZSAtbS0xNiAtbWwtMjAgbGc6LW1sLTE2IG1pbi1oLTEyMC1weCBtYXgtaC0xMjAtcHggbWF4LXctMTIwLXB4IG1pbi13LTEyMC1weFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMjRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIGxlYWRpbmctbm9ybWFsIG1iLTIgdGV4dC1ibHVlR3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICB7bWFpbkFydC5IZWFkZXJ9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctbm9ybWFsIG10LTAgbWItMiB0ZXh0LWJsdWVHcmF5LTQwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtg15PXp9eV16og16fXqNeQ15nXlCAke21haW5BcnQuQXJ0aWNsZS5taW51dGVzfWB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLW5vcm1hbCBtdC0wIG1iLTIgdGV4dC1ibHVlR3JheS00MDAgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bWFpbkFydC5hdXRob3JzPy5Xcml0ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctbm9ybWFsIG10LTAgbWItMiB0ZXh0LWJsdWVHcmF5LTQwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNoZWtlbC1zaWduXCI+PC9pPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAge2Ake3Byb2R1Y3RJdGVtLnByb2R1Y3RQcmljZX1gfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBweS0xMCBib3JkZXItdCBib3JkZXItYmx1ZUdyYXktMjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctOS8xMiBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWJsdWVHcmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICB7bWFpbkFydC5BcnRpY2xlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9hcnRpY2xlcy9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hcnRpY2xlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtbGlnaHRCbHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgINeX15bXqNeUXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/article.js\n");

/***/ })

})