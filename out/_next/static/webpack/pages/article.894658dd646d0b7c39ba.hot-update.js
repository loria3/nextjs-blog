webpackHotUpdate_N_E("pages/article",{

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Article; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbars/AuthNavbar.js */ \"./components/Navbars/AuthNavbar.js\");\n/* harmony import */ var _components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footers/Footer.js */ \"./components/Footers/Footer.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetcher */ \"./utils/fetcher.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/lori/Documents/Niche/UslyWebApp/nextjs-blog/pages/article.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst imageUrl = {\n  url: \"https://niche.ink\"\n};\nfunction Article() {\n  _s();\n\n  var _mainArt$Article$thum, _mainArt$Article$thum2, _mainArt$authors;\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    item\n  } = router.query;\n  if (!item) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 21\n  }, this);\n  const {\n    data: mainArt\n  } = Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(['getOneArticles', item], (url, item) => Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(url, {\n    item: item\n  }));\n  if (!mainArt) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 24\n  }, this);\n  const imgUrl = `${imageUrl.url}${(_mainArt$Article$thum = mainArt.Article.thumbnail) !== null && _mainArt$Article$thum !== void 0 && (_mainArt$Article$thum2 = _mainArt$Article$thum.formats) !== null && _mainArt$Article$thum2 !== void 0 && _mainArt$Article$thum2.medium ? mainArt.Article.thumbnail.formats.medium.url : mainArt.Article.thumbnail.url}`;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      transparent: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"profile-page\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative block h-500-px\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 w-full h-full bg-center bg-cover\",\n          style: {\n            backgroundImage: \"url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            id: \"blackOverlay\",\n            className: \"w-full h-full absolute opacity-50 bg-black\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16\",\n          style: {\n            transform: \"translateZ(0)\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"absolute bottom-0 overflow-hidden\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            preserveAspectRatio: \"none\",\n            version: \"1.1\",\n            viewBox: \"0 0 2560 100\",\n            x: \"0\",\n            y: \"0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polygon\", {\n              className: \"text-blueGray-200 fill-current\",\n              points: \"2560 0 2560 100 0 100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative py-16 bg-blueGray-200\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container mx-auto px-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"px-6\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"flex flex-wrap justify-center mb-24\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"relative\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      alt: mainArt.Header,\n                      src: imgUrl,\n                      className: \"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 min-h-120-px max-h-120-px max-w-120-px min-w-120-px\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 75,\n                      columnNumber: 23\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 74,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"text-center mt-24\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                  className: \"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\",\n                  children: mainArt.Header\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\",\n                  children: `דקות קראיה ${mainArt.Article.minutes}`\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\",\n                  children: (_mainArt$authors = mainArt.authors) === null || _mainArt$authors === void 0 ? void 0 : _mainArt$authors.WriterName\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"mt-10 py-10 border-t border-blueGray-200 text-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex flex-wrap justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"w-full lg:w-9/12 px-4\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                      className: \"mb-4 text-lg leading-relaxed text-blueGray-700\",\n                      children: mainArt.Article.content\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 104,\n                      columnNumber: 23\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                      href: {\n                        pathname: \"/articles/\"\n                      },\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                        href: \"/articles\",\n                        className: \"font-normal text-lightBlue-500\",\n                        children: \"\\u05D7\\u05D6\\u05E8\\u05D4\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 112,\n                        columnNumber: 25\n                      }, this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 107,\n                      columnNumber: 23\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 103,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 101,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Article, \"fjcd8YrJrgYpUgI62GS34znulKA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Article;\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS5qcz8xZWYxIl0sIm5hbWVzIjpbImltYWdlVXJsIiwidXJsIiwiQXJ0aWNsZSIsInJvdXRlciIsInVzZVJvdXRlciIsIml0ZW0iLCJxdWVyeSIsImRhdGEiLCJtYWluQXJ0IiwidXNlU1dSIiwiZmV0Y2hIZWxwZXIiLCJpbWdVcmwiLCJ0aHVtYm5haWwiLCJmb3JtYXRzIiwibWVkaXVtIiwiYmFja2dyb3VuZEltYWdlIiwidHJhbnNmb3JtIiwiSGVhZGVyIiwibWludXRlcyIsImF1dGhvcnMiLCJXcml0ZXJOYW1lIiwiY29udGVudCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLEtBQUcsRUFBRTtBQURVLENBQWpCO0FBR2UsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNoQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFFQztBQUFGLE1BQVdGLE1BQU0sQ0FBQ0csS0FBeEI7QUFDQSxNQUFJLENBQUNELElBQUwsRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFHWixRQUFNO0FBQUNFLFFBQUksRUFBRUM7QUFBUCxNQUFrQkMsbURBQU0sQ0FBQyxDQUFDLGdCQUFELEVBQW1CSixJQUFuQixDQUFELEVBQTJCLENBQUNKLEdBQUQsRUFBTUksSUFBTixLQUN0REssOERBQVcsQ0FBQ1QsR0FBRCxFQUFNO0FBQUNJLFFBQUksRUFBRUE7QUFBUCxHQUFOLENBRGdCLENBQTlCO0FBSUMsTUFBSSxDQUFDRyxPQUFMLEVBQWMsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRWYsUUFBTUcsTUFBTSxHQUFJLEdBQUVYLFFBQVEsQ0FBQ0MsR0FBSSxHQUM1Qix5QkFBQU8sT0FBTyxDQUFDTixPQUFS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QURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFDRSwwQkFBSSxFQUFFO0FBQ0pDLGdDQUFRLEVBQUU7QUFETix1QkFEUjtBQUFBLDZDQUtFO0FBQ0UsNEJBQUksRUFBQyxXQURQO0FBRUUsaUNBQVMsRUFBQyxnQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQStGRSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0ZGO0FBQUEsa0JBREY7QUFtR0Q7O0dBdEh1QnBCLE87VUFDUEUscUQsRUFNUUssMkM7OztLQVBEUCxPIiwiZmlsZSI6Ii4vcGFnZXMvYXJ0aWNsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJzL0F1dGhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IGZldGNoSGVscGVyIGZyb20gXCIuLi91dGlscy9mZXRjaGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGltYWdlVXJsID0ge1xuICB1cmw6IFwiaHR0cHM6Ly9uaWNoZS5pbmtcIixcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGl0ZW0gfSA9IHJvdXRlci5xdWVyeTtcbiAgaWYgKCFpdGVtKSByZXR1cm4gPGRpdj48L2Rpdj47XG5cblxuIGNvbnN0IHtkYXRhOiBtYWluQXJ0fSA9IHVzZVNXUihbJ2dldE9uZUFydGljbGVzJywgaXRlbV0sICh1cmwsIGl0ZW0pID0+XG4gICAgZmV0Y2hIZWxwZXIodXJsLCB7aXRlbTogaXRlbX0pLFxuICApO1xuXG4gIGlmICghbWFpbkFydCkgcmV0dXJuIDxkaXY+PC9kaXY+O1xuXG4gY29uc3QgaW1nVXJsID0gYCR7aW1hZ2VVcmwudXJsfSR7XG4gICAgbWFpbkFydC5BcnRpY2xlLnRodW1ibmFpbD8uZm9ybWF0cz8ubWVkaXVtXG4gICAgICA/IG1haW5BcnQuQXJ0aWNsZS50aHVtYm5haWwuZm9ybWF0cy5tZWRpdW0udXJsXG4gICAgICA6IG1haW5BcnQuQXJ0aWNsZS50aHVtYm5haWwudXJsXG4gIH1gO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgdHJhbnNwYXJlbnQgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInByb2ZpbGUtcGFnZVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9jayBoLTUwMC1weFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbCBoLWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICBcInVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTkzMzYzMTU4MTYtMDk3NjU1ZGNmYmRhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNzEwJnE9ODAnKVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBpZD1cImJsYWNrT3ZlcmxheVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgb3BhY2l0eS01MCBiZy1ibGFja1wiXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC1hdXRvIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHctZnVsbCBhYnNvbHV0ZSBwb2ludGVyLWV2ZW50cy1ub25lIG92ZXJmbG93LWhpZGRlbiBoLTE2XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVaKDApXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NjAgMTAwXCJcbiAgICAgICAgICAgICAgeD1cIjBcIlxuICAgICAgICAgICAgICB5PVwiMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS0yMDAgZmlsbC1jdXJyZW50XCJcbiAgICAgICAgICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIlxuICAgICAgICAgICAgICA+PC9wb2x5Z29uPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMTYgYmctYmx1ZUdyYXktMjAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3cteGwgcm91bmRlZC1sZyAtbXQtNjRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBtYi0yNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0zLzEyIHB4LTQgbGc6b3JkZXItMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e21haW5BcnQuSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWdVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1mdWxsIGgtYXV0byBhbGlnbi1taWRkbGUgYm9yZGVyLW5vbmUgYWJzb2x1dGUgLW0tMTYgLW1sLTIwIGxnOi1tbC0xNiBtaW4taC0xMjAtcHggbWF4LWgtMTIwLXB4IG1heC13LTEyMC1weCBtaW4tdy0xMjAtcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTI0XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCBsZWFkaW5nLW5vcm1hbCBtYi0yIHRleHQtYmx1ZUdyYXktNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge21haW5BcnQuSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLW5vcm1hbCBtdC0wIG1iLTIgdGV4dC1ibHVlR3JheS00MDAgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICB7YNeT16fXldeqINen16jXkNeZ15QgJHttYWluQXJ0LkFydGljbGUubWludXRlc31gfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy1ub3JtYWwgbXQtMCBtYi0yIHRleHQtYmx1ZUdyYXktNDAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAge21haW5BcnQuYXV0aG9ycz8uV3JpdGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLW5vcm1hbCBtdC0wIG1iLTIgdGV4dC1ibHVlR3JheS00MDAgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaGVrZWwtc2lnblwiPjwvaT57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtgJHtwcm9kdWN0SXRlbS5wcm9kdWN0UHJpY2V9YH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcHktMTAgYm9yZGVyLXQgYm9yZGVyLWJsdWVHcmF5LTIwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTkvMTIgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ibHVlR3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAge21haW5BcnQuQXJ0aWNsZS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvYXJ0aWNsZXMvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXJ0aWNsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWxpZ2h0Qmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDXl9eW16jXlFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article.js\n");

/***/ })

})