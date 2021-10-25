webpackHotUpdate_N_E("pages/authorBio",{

/***/ "./pages/authorBio.js":
/*!****************************!*\
  !*** ./pages/authorBio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthorBio; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbars/AuthNavbar.js */ \"./components/Navbars/AuthNavbar.js\");\n/* harmony import */ var _components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footers/Footer.js */ \"./components/Footers/Footer.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetcher */ \"./utils/fetcher.js\");\n\n\n\nvar _jsxFileName = \"/Users/lori/Documents/Niche/UslyWebApp/nextjs-blog/pages/authorBio.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst imageUrl = {\n  url: \"https://niche.ink\"\n};\nfunction AuthorBio() {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  if (!id) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 19\n  }, this);\n  const {\n    data: writer\n  } = Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\"getWriter\", id], (url, writer) => Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(url, {\n    id: writer\n  }));\n  if (!writer) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 23\n  }, this);\n  let imgUrlWriter = `${imageUrl.url}${writer.WriterPic.formats.medium ? writer.WriterPic.formats.medium.url : writer.WriterPic.url}`; //   WriterEmail: \"aricha.noam@gmail.com\"\n  // WriterFacebook: \"https://www.facebook.com/noam.aricha\"\n  // WriterLinkedIn: \"https://www.linkedin.com/in/noamaricha/\"\n  // WriterLongDescription: \"שלום לכםן:)\\n\\nאני נועם אריכא, בן, אח, בן זוג, חבר ואב לשניים. \\nמדריך ומלווה צעירים ביצירת חיים שמחים, מרגשים ומשמעותיים.\\n\\nהחיים הם מסע של התפתחות, למידה ותרגול ביצירת בהירות ומיקוד בהגשמת חיים שאנחנו מייחלים לעצמנו. \\n\\nהתכנים שמושכים אותי הם  מעולמות המיינדפולנס, הפסיכולוגיה החיובית והתעסוקתית, תיאוריות על אושר, מנהיגות והעצמה, לאורך השנים צברתי ניסיון רב בלווי צעירים בשלבי החיים השונים, הכוונה והכשרות מקצועיות, תפקידי ניהול והובלת קבוצות ותהליכים במסגרות מגוונות, תארים אקדמיים בניהול והתמחות במנהיגות חברתית, הכשרות, הדרכה והעצמה.\\n\\nאני מאמין שבכל אחד מאתנו קיים פוטנציאל ייחודי, ושעלינו להביאו לידי ביטוי כדי לחיות חיים מרגשים ומספקים. \\nאני גם מאמין שככל שיהיו יותר אנשים שמגשימים את עצמם בחיים כך יהפוך העולם שלנו למקום טוב יותר עבורנו ועבור הדורות הבאים.\\n\"\n  // WriterName: \"נועם אריכא\"\n  // WriterPhone: \"+13012223168\"\n  // WriterPic: {_id: '5fb9e2ed1054347fe6670ea9', name: '114806375_10158310954377199_987255163248939613_o.jpg', alternativeText: '', caption: '', hash: '114806375_10158310954377199_987255163248939613_o_5e4bee0cd6', …}\n  // WriterShortDescription: \"מדריך ומלווה צעירים להגשמה עצמית בקריירה ובחיים\"\n  // WriterWebsite: \"https://uslyapp.github.io/usly\"\n  // WriterWhatsApp: \"+13012223168\"\n  // WriterYouTube: \"https://www.youtube.com/channel/UCz6vGgW6Nh8QExJW1KX_pgg/featured\"\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      transparent: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"profile-page\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative block h-500-px\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 w-full h-full bg-center bg-cover\",\n          style: {\n            backgroundImage: \"url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            id: \"blackOverlay\",\n            className: \"w-full h-full absolute opacity-50 bg-black\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16\",\n          style: {\n            transform: \"translateZ(0)\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"absolute bottom-0 overflow-hidden\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            preserveAspectRatio: \"none\",\n            version: \"1.1\",\n            viewBox: \"0 0 2560 100\",\n            x: \"0\",\n            y: \"0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polygon\", {\n              className: \"text-blueGray-200 fill-current\",\n              points: \"2560 0 2560 100 0 100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative py-16 bg-blueGray-200\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container mx-auto px-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"px-6\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"flex flex-wrap justify-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"relative  mb-10\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      alt: writer.WriterName,\n                      src: imgUrlWriter,\n                      className: \"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 84,\n                      columnNumber: 23\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 83,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"text-center mt-12\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                  className: \"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\",\n                  children: writer.WriterName\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\",\n                  children: writer.WriterShortDescription\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"mt-10 py-10 border-t border-blueGray-200 text-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex flex-wrap justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"w-full lg:w-9/12 px-4\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                      className: \"mb-4 text-lg leading-relaxed text-blueGray-700\",\n                      children: writer.WriterLongDescription\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 103,\n                      columnNumber: 23\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                      href: \"/authors\",\n                      className: \"font-normal text-lightBlue-500\",\n                      onClick: e => e.preventDefault(),\n                      children: \"\\u05D7\\u05D6\\u05E8\\u05D4\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 106,\n                      columnNumber: 23\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 102,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(AuthorBio, \"LNl4qiLE6KHPofE1f0UVDDy1JpU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = AuthorBio;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthorBio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yQmlvLmpzPzYyMjUiXSwibmFtZXMiOlsiaW1hZ2VVcmwiLCJ1cmwiLCJBdXRob3JCaW8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsIndyaXRlciIsInVzZVNXUiIsImZldGNoSGVscGVyIiwiaW1nVXJsV3JpdGVyIiwiV3JpdGVyUGljIiwiZm9ybWF0cyIsIm1lZGl1bSIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zZm9ybSIsIldyaXRlck5hbWUiLCJXcml0ZXJTaG9ydERlc2NyaXB0aW9uIiwiV3JpdGVyTG9uZ0Rlc2NyaXB0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxRQUFRLEdBQUc7QUFDZkMsS0FBRyxFQUFFO0FBRFUsQ0FBakI7QUFHZSxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQ2xDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUF0QjtBQUNBLE1BQUksQ0FBQ0QsRUFBTCxFQUFTLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVULFFBQU07QUFBRUUsUUFBSSxFQUFFQztBQUFSLE1BQW1CQyxtREFBTSxDQUFDLENBQUMsV0FBRCxFQUFjSixFQUFkLENBQUQsRUFBb0IsQ0FBQ0osR0FBRCxFQUFNTyxNQUFOLEtBQ2pERSw4REFBVyxDQUFDVCxHQUFELEVBQU07QUFBRUksTUFBRSxFQUFFRztBQUFOLEdBQU4sQ0FEa0IsQ0FBL0I7QUFJQSxNQUFJLENBQUNBLE1BQUwsRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFYixNQUFJRyxZQUFZLEdBQUksR0FBRVgsUUFBUSxDQUFDQyxHQUFJLEdBQ2pDTyxNQUFNLENBQUNJ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QyxDQUFDQyxjQUFGLEVBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFnRkUscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhGRjtBQUFBLGtCQURGO0FBb0ZEOztHQWxIdUJuQixTO1VBQ1BFLHFELEVBS1VLLDJDOzs7S0FOSFAsUyIsImZpbGUiOiIuL3BhZ2VzL2F1dGhvckJpby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJzL0F1dGhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IGZldGNoSGVscGVyIGZyb20gXCIuLi91dGlscy9mZXRjaGVyXCI7XG5jb25zdCBpbWFnZVVybCA9IHtcbiAgdXJsOiBcImh0dHBzOi8vbmljaGUuaW5rXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aG9yQmlvKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGlmICghaWQpIHJldHVybiA8ZGl2PjwvZGl2PjtcblxuICBjb25zdCB7IGRhdGE6IHdyaXRlciB9ID0gdXNlU1dSKFtcImdldFdyaXRlclwiLCBpZF0sICh1cmwsIHdyaXRlcikgPT5cbiAgICBmZXRjaEhlbHBlcih1cmwsIHsgaWQ6IHdyaXRlciB9KVxuICApO1xuXG4gIGlmICghd3JpdGVyKSByZXR1cm4gPGRpdj48L2Rpdj47XG5cbiAgbGV0IGltZ1VybFdyaXRlciA9IGAke2ltYWdlVXJsLnVybH0ke1xuICAgIHdyaXRlci5Xcml0ZXJQaWMuZm9ybWF0cy5tZWRpdW1cbiAgICAgID8gd3JpdGVyLldyaXRlclBpYy5mb3JtYXRzLm1lZGl1bS51cmxcbiAgICAgIDogd3JpdGVyLldyaXRlclBpYy51cmxcbiAgfWA7XG5cbiAgLy8gICBXcml0ZXJFbWFpbDogXCJhcmljaGEubm9hbUBnbWFpbC5jb21cIlxuICAvLyBXcml0ZXJGYWNlYm9vazogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbm9hbS5hcmljaGFcIlxuICAvLyBXcml0ZXJMaW5rZWRJbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbm9hbWFyaWNoYS9cIlxuICAvLyBXcml0ZXJMb25nRGVzY3JpcHRpb246IFwi16nXnNeV150g15zXm9ed1586KVxcblxcbteQ16DXmSDXoNeV16LXnSDXkNeo15nXm9eQLCDXkdefLCDXkNeXLCDXkdefINeW15XXkiwg15fXkdeoINeV15DXkSDXnNep16DXmdeZ150uIFxcbtee15PXqNeZ15og15XXntec15XXldeUINem16LXmdeo15nXnSDXkdeZ16bXmdeo16og15fXmdeZ150g16nXnteX15nXnSwg157XqNeS16nXmdedINeV157Xqdee16LXldeq15nXmdedLlxcblxcbteU15fXmdeZ150g15TXnSDXnteh16Ig16nXnCDXlNeq16TXqteX15XXqiwg15zXnteZ15PXlCDXldeq16jXkteV15wg15HXmdem15nXqNeqINeR15TXmdeo15XXqiDXldee15nXp9eV15Mg15HXlNeS16nXnteqINeX15nXmdedINep15DXoNeX16DXlSDXnteZ15nXl9ec15nXnSDXnNei16bXnteg15UuIFxcblxcbteU16rXm9eg15nXnSDXqdee15XXqdeb15nXnSDXkNeV16rXmSDXlNedICDXntei15XXnNee15XXqiDXlNee15nXmdeg15PXpNeV15zXoNehLCDXlNek16HXmdeb15XXnNeV15LXmdeUINeU15fXmdeV15HXmdeqINeV15TXqtei16HXlden16rXmdeqLCDXqteZ15DXldeo15nXldeqINei15wg15DXldep16gsINee16DXlNeZ15LXldeqINeV15TXotem157XlCwg15zXkNeV16jXmiDXlNep16DXmdedINem15HXqNeq15kg16DXmdeh15nXldefINeo15Eg15HXnNeV15XXmSDXptei15nXqNeZ150g15HXqdec15HXmSDXlNeX15nXmdedINeU16nXldeg15nXnSwg15TXm9eV15XXoNeUINeV15TXm9ep16jXldeqINee16fXpteV16LXmdeV16osINeq16TXp9eZ15PXmSDXoNeZ15TXldecINeV15TXldeR15zXqiDXp9eR15XXpteV16og15XXqteU15zXmdeb15nXnSDXkdee16HXkteo15XXqiDXnteS15XXldeg15XXqiwg16rXkNeo15nXnSDXkNen15PXnteZ15nXnSDXkdeg15nXlNeV15wg15XXlNeq157Xl9eV16og15HXnteg15TXmdeS15XXqiDXl9eR16jXqteZ16osINeU15vXqdeo15XXqiwg15TXk9eo15vXlCDXldeU16LXptee15QuXFxuXFxu15DXoNeZINee15DXnteZ158g16nXkdeb15wg15DXl9eTINee15DXqteg15Ug16fXmdeZ150g16TXldeY16DXpteZ15DXnCDXmdeZ15fXldeT15ksINeV16nXotec15nXoNeVINec15TXkdeZ15DXlSDXnNeZ15PXmSDXkdeZ15jXldeZINeb15PXmSDXnNeX15nXldeqINeX15nXmdedINee16jXktep15nXnSDXldee16HXpNen15nXnS4gXFxu15DXoNeZINeS150g157XkNee15nXnyDXqdeb15vXnCDXqdeZ15TXmdeVINeZ15XXqteoINeQ16DXqdeZ150g16nXnteS16nXmdee15nXnSDXkNeqINei16bXntedINeR15fXmdeZ150g15vXmiDXmdeU16TXldeaINeU16LXldec150g16nXnNeg15Ug15zXnten15XXnSDXmNeV15Eg15nXldeq16gg16LXkdeV16jXoNeVINeV16LXkdeV16gg15TXk9eV16jXldeqINeU15HXkNeZ150uXFxuXCJcbiAgLy8gV3JpdGVyTmFtZTogXCLXoNeV16LXnSDXkNeo15nXm9eQXCJcbiAgLy8gV3JpdGVyUGhvbmU6IFwiKzEzMDEyMjIzMTY4XCJcbiAgLy8gV3JpdGVyUGljOiB7X2lkOiAnNWZiOWUyZWQxMDU0MzQ3ZmU2NjcwZWE5JywgbmFtZTogJzExNDgwNjM3NV8xMDE1ODMxMDk1NDM3NzE5OV85ODcyNTUxNjMyNDg5Mzk2MTNfby5qcGcnLCBhbHRlcm5hdGl2ZVRleHQ6ICcnLCBjYXB0aW9uOiAnJywgaGFzaDogJzExNDgwNjM3NV8xMDE1ODMxMDk1NDM3NzE5OV85ODcyNTUxNjMyNDg5Mzk2MTNfb181ZTRiZWUwY2Q2Jywg4oCmfVxuICAvLyBXcml0ZXJTaG9ydERlc2NyaXB0aW9uOiBcItee15PXqNeZ15og15XXntec15XXldeUINem16LXmdeo15nXnSDXnNeU15LXqdee15Qg16LXptee15nXqiDXkden16jXmdeZ16jXlCDXldeR15fXmdeZ151cIlxuICAvLyBXcml0ZXJXZWJzaXRlOiBcImh0dHBzOi8vdXNseWFwcC5naXRodWIuaW8vdXNseVwiXG4gIC8vIFdyaXRlcldoYXRzQXBwOiBcIisxMzAxMjIyMzE2OFwiXG4gIC8vIFdyaXRlcllvdVR1YmU6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ3o2dkdnVzZOaDhRRXhKVzFLWF9wZ2cvZmVhdHVyZWRcIlxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgdHJhbnNwYXJlbnQgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInByb2ZpbGUtcGFnZVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9jayBoLTUwMC1weFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbCBoLWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICBcInVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTkzMzYzMTU4MTYtMDk3NjU1ZGNmYmRhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNzEwJnE9ODAnKVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBpZD1cImJsYWNrT3ZlcmxheVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgb3BhY2l0eS01MCBiZy1ibGFja1wiXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC1hdXRvIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHctZnVsbCBhYnNvbHV0ZSBwb2ludGVyLWV2ZW50cy1ub25lIG92ZXJmbG93LWhpZGRlbiBoLTE2XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVaKDApXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXG4gICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NjAgMTAwXCJcbiAgICAgICAgICAgICAgeD1cIjBcIlxuICAgICAgICAgICAgICB5PVwiMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlR3JheS0yMDAgZmlsbC1jdXJyZW50XCJcbiAgICAgICAgICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIlxuICAgICAgICAgICAgICA+PC9wb2x5Z29uPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMTYgYmctYmx1ZUdyYXktMjAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3cteGwgcm91bmRlZC1sZyAtbXQtNjRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0zLzEyIHB4LTQgbGc6b3JkZXItMiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgIG1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt3cml0ZXIuV3JpdGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nVXJsV3JpdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtZnVsbCBoLWF1dG8gYWxpZ24tbWlkZGxlIGJvcmRlci1ub25lIGFic29sdXRlIC1tLTE2IC1tbC0yMCBsZzotbWwtMTYgbWF4LXctMTUwLXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIGxlYWRpbmctbm9ybWFsIG1iLTIgdGV4dC1ibHVlR3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICB7d3JpdGVyLldyaXRlck5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctbm9ybWFsIG10LTAgbWItMiB0ZXh0LWJsdWVHcmF5LTQwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt3cml0ZXIuV3JpdGVyU2hvcnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcHktMTAgYm9yZGVyLXQgYm9yZGVyLWJsdWVHcmF5LTIwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTkvMTIgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ibHVlR3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cml0ZXIuV3JpdGVyTG9uZ0Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hdXRob3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtbGlnaHRCbHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgINeX15bXqNeUXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/authorBio.js\n");

/***/ })

})