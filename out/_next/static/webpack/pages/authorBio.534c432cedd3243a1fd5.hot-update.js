webpackHotUpdate_N_E("pages/authorBio",{

/***/ "./pages/authorBio.js":
/*!****************************!*\
  !*** ./pages/authorBio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthorBio; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbars/AuthNavbar.js */ \"./components/Navbars/AuthNavbar.js\");\n/* harmony import */ var _components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footers/Footer.js */ \"./components/Footers/Footer.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetcher */ \"./utils/fetcher.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/lori/Documents/Niche/UslyWebApp/nextjs-blog/pages/authorBio.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst imageUrl = {\n  url: \"https://niche.ink\"\n};\nfunction AuthorBio() {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  if (!id) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 19\n  }, this);\n  const {\n    data: writer\n  } = Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\"getWriter\", id], (url, writer) => Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(url, {\n    id: writer\n  }));\n  if (!writer) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 23\n  }, this);\n  let imgUrlWriter = `${imageUrl.url}${writer.WriterPic.formats.medium ? writer.WriterPic.formats.medium.url : writer.WriterPic.url}`; //   WriterEmail: \"aricha.noam@gmail.com\"\n  // WriterFacebook: \"https://www.facebook.com/noam.aricha\"\n  // WriterLinkedIn: \"https://www.linkedin.com/in/noamaricha/\"\n  // WriterLongDescription: \"שלום לכםן:)\\n\\nאני נועם אריכא, בן, אח, בן זוג, חבר ואב לשניים. \\nמדריך ומלווה צעירים ביצירת חיים שמחים, מרגשים ומשמעותיים.\\n\\nהחיים הם מסע של התפתחות, למידה ותרגול ביצירת בהירות ומיקוד בהגשמת חיים שאנחנו מייחלים לעצמנו. \\n\\nהתכנים שמושכים אותי הם  מעולמות המיינדפולנס, הפסיכולוגיה החיובית והתעסוקתית, תיאוריות על אושר, מנהיגות והעצמה, לאורך השנים צברתי ניסיון רב בלווי צעירים בשלבי החיים השונים, הכוונה והכשרות מקצועיות, תפקידי ניהול והובלת קבוצות ותהליכים במסגרות מגוונות, תארים אקדמיים בניהול והתמחות במנהיגות חברתית, הכשרות, הדרכה והעצמה.\\n\\nאני מאמין שבכל אחד מאתנו קיים פוטנציאל ייחודי, ושעלינו להביאו לידי ביטוי כדי לחיות חיים מרגשים ומספקים. \\nאני גם מאמין שככל שיהיו יותר אנשים שמגשימים את עצמם בחיים כך יהפוך העולם שלנו למקום טוב יותר עבורנו ועבור הדורות הבאים.\\n\"\n  // WriterName: \"נועם אריכא\"\n  // WriterPhone: \"+13012223168\"\n  // WriterPic: {_id: '5fb9e2ed1054347fe6670ea9', name: '114806375_10158310954377199_987255163248939613_o.jpg', alternativeText: '', caption: '', hash: '114806375_10158310954377199_987255163248939613_o_5e4bee0cd6', …}\n  // WriterShortDescription: \"מדריך ומלווה צעירים להגשמה עצמית בקריירה ובחיים\"\n  // WriterWebsite: \"https://uslyapp.github.io/usly\"\n  // WriterWhatsApp: \"+13012223168\"\n  // WriterYouTube: \"https://www.youtube.com/channel/UCz6vGgW6Nh8QExJW1KX_pgg/featured\"\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      transparent: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"profile-page\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative block h-500-px\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 w-full h-full bg-center bg-cover\",\n          style: {\n            backgroundImage: \"url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            id: \"blackOverlay\",\n            className: \"w-full h-full absolute opacity-50 bg-black\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16\",\n          style: {\n            transform: \"translateZ(0)\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"absolute bottom-0 overflow-hidden\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            preserveAspectRatio: \"none\",\n            version: \"1.1\",\n            viewBox: \"0 0 2560 100\",\n            x: \"0\",\n            y: \"0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polygon\", {\n              className: \"text-blueGray-200 fill-current\",\n              points: \"2560 0 2560 100 0 100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative py-16 bg-blueGray-200\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container mx-auto px-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"px-6\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"flex flex-wrap justify-center mb-24\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"relative\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      alt: writer.WriterName,\n                      src: imgUrlWriter,\n                      className: \"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 86,\n                      columnNumber: 23\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 85,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"text-center mt-24\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                  className: \"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\",\n                  children: writer.WriterName\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\",\n                  children: writer.WriterShortDescription\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 99,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"mt-10 py-10 border-t border-blueGray-200 text-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex flex-wrap justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"w-full lg:w-9/12 px-4\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                      className: \"mb-4 text-lg leading-relaxed text-blueGray-700\",\n                      children: writer.WriterLongDescription\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 106,\n                      columnNumber: 23\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                      href: {\n                        pathname: \"/authors/\"\n                      },\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                        href: \"/authors\",\n                        className: \"font-normal text-lightBlue-500\",\n                        children: \"\\u05D7\\u05D6\\u05E8\\u05D4\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 114,\n                        columnNumber: 25\n                      }, this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 109,\n                      columnNumber: 23\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 105,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 104,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 103,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"flex flex-wrap justify-center m-8\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\",\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    className: \"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\",\n                    type: \"button\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                      className: \"fab fa-twitter\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 130,\n                      columnNumber: 23\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 126,\n                    columnNumber: 21\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    className: \"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\",\n                    type: \"button\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                      className: \"fab fa-facebook-f\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 136,\n                      columnNumber: 23\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 132,\n                    columnNumber: 21\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    className: \"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\",\n                    type: \"button\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                      className: \"fab fa-dribbble\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 142,\n                      columnNumber: 23\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 138,\n                    columnNumber: 21\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 125,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(AuthorBio, \"LNl4qiLE6KHPofE1f0UVDDy1JpU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = AuthorBio;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthorBio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yQmlvLmpzPzYyMjUiXSwibmFtZXMiOlsiaW1hZ2VVcmwiLCJ1cmwiLCJBdXRob3JCaW8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsIndyaXRlciIsInVzZVNXUiIsImZldGNoSGVscGVyIiwiaW1nVXJsV3JpdGVyIiwiV3JpdGVyUGljIiwiZm9ybWF0cyIsIm1lZGl1bSIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zZm9ybSIsIldyaXRlck5hbWUiLCJXcml0ZXJTaG9ydERlc2NyaXB0aW9uIiwiV3JpdGVyTG9uZ0Rlc2NyaXB0aW9uIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUc7QUFDZkMsS0FBRyxFQUFFO0FBRFUsQ0FBakI7QUFHZSxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQ2xDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUF0QjtBQUNBLE1BQUksQ0FBQ0QsRUFBTCxFQUFTLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVULFFBQU07QUFBRUUsUUFBSSxFQUFFQztBQUFSLE1BQW1CQyxtREFBTSxDQUFDLENBQUMsV0FBRCxFQUFjSixFQUFkLENBQUQsRUFBb0IsQ0FBQ0osR0FBRCxFQUFNTyxNQUFOLEtBQ2pERSw4REFBVyxDQUFDVCxHQUFELEVBQU07QUFBRUksTUFBRSxFQUFFRztBQUFOLEdBQU4sQ0FEa0IsQ0FBL0I7QUFJQSxNQUFJLENBQUNBLE1BQUwsRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFYixNQUFJRyxZQUFZLEdBQUksR0FBRVgsUUFBUSxDQUFDQyxHQUFJLEdBQ2pDTyxNQUFNLENBQUNJLFNB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O1VBQ1BFLHFELEVBS1VLLDJDOzs7S0FOSFAsUyIsImZpbGUiOiIuL3BhZ2VzL2F1dGhvckJpby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJzL0F1dGhOYXZiYXIuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IGZldGNoSGVscGVyIGZyb20gXCIuLi91dGlscy9mZXRjaGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGltYWdlVXJsID0ge1xuICB1cmw6IFwiaHR0cHM6Ly9uaWNoZS5pbmtcIixcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JCaW8oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgaWYgKCFpZCkgcmV0dXJuIDxkaXY+PC9kaXY+O1xuXG4gIGNvbnN0IHsgZGF0YTogd3JpdGVyIH0gPSB1c2VTV1IoW1wiZ2V0V3JpdGVyXCIsIGlkXSwgKHVybCwgd3JpdGVyKSA9PlxuICAgIGZldGNoSGVscGVyKHVybCwgeyBpZDogd3JpdGVyIH0pXG4gICk7XG5cbiAgaWYgKCF3cml0ZXIpIHJldHVybiA8ZGl2PjwvZGl2PjtcblxuICBsZXQgaW1nVXJsV3JpdGVyID0gYCR7aW1hZ2VVcmwudXJsfSR7XG4gICAgd3JpdGVyLldyaXRlclBpYy5mb3JtYXRzLm1lZGl1bVxuICAgICAgPyB3cml0ZXIuV3JpdGVyUGljLmZvcm1hdHMubWVkaXVtLnVybFxuICAgICAgOiB3cml0ZXIuV3JpdGVyUGljLnVybFxuICB9YDtcblxuICAvLyAgIFdyaXRlckVtYWlsOiBcImFyaWNoYS5ub2FtQGdtYWlsLmNvbVwiXG4gIC8vIFdyaXRlckZhY2Vib29rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ub2FtLmFyaWNoYVwiXG4gIC8vIFdyaXRlckxpbmtlZEluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ub2FtYXJpY2hhL1wiXG4gIC8vIFdyaXRlckxvbmdEZXNjcmlwdGlvbjogXCLXqdec15XXnSDXnNeb153XnzopXFxuXFxu15DXoNeZINeg15XXotedINeQ16jXmdeb15AsINeR158sINeQ15csINeR158g15bXldeSLCDXl9eR16gg15XXkNeRINec16nXoNeZ15nXnS4gXFxu157Xk9eo15nXmiDXldee15zXldeV15Qg16bXoteZ16jXmdedINeR15nXpteZ16jXqiDXl9eZ15nXnSDXqdee15fXmdedLCDXnteo15LXqdeZ150g15XXntep157XoteV16rXmdeZ150uXFxuXFxu15TXl9eZ15nXnSDXlNedINee16HXoiDXqdecINeU16rXpNeq15fXldeqLCDXnNee15nXk9eUINeV16rXqNeS15XXnCDXkdeZ16bXmdeo16og15HXlNeZ16jXldeqINeV157Xmden15XXkyDXkdeU15LXqdee16og15fXmdeZ150g16nXkNeg15fXoNeVINee15nXmdeX15zXmdedINec16LXptee16DXlS4gXFxuXFxu15TXqteb16DXmdedINep157Xldep15vXmdedINeQ15XXqteZINeU150gINee16LXldec157XldeqINeU157XmdeZ16DXk9ek15XXnNeg16EsINeU16TXodeZ15vXldec15XXkteZ15Qg15TXl9eZ15XXkdeZ16og15XXlNeq16LXodeV16fXqteZ16osINeq15nXkNeV16jXmdeV16og16LXnCDXkNeV16nXqCwg157XoNeU15nXkteV16og15XXlNei16bXnteULCDXnNeQ15XXqNeaINeU16nXoNeZ150g16bXkdeo16rXmSDXoNeZ16HXmdeV158g16jXkSDXkdec15XXldeZINem16LXmdeo15nXnSDXkdep15zXkdeZINeU15fXmdeZ150g15TXqdeV16DXmdedLCDXlNeb15XXldeg15Qg15XXlNeb16nXqNeV16og157Xp9em15XXoteZ15XXqiwg16rXpNen15nXk9eZINeg15nXlNeV15wg15XXlNeV15HXnNeqINen15HXldem15XXqiDXldeq15TXnNeZ15vXmdedINeR157XodeS16jXldeqINee15LXldeV16DXldeqLCDXqteQ16jXmdedINeQ16fXk9ee15nXmdedINeR16DXmdeU15XXnCDXldeU16rXnteX15XXqiDXkdee16DXlNeZ15LXldeqINeX15HXqNeq15nXqiwg15TXm9ep16jXldeqLCDXlNeT16jXm9eUINeV15TXotem157XlC5cXG5cXG7XkNeg15kg157XkNee15nXnyDXqdeR15vXnCDXkNeX15Mg157XkNeq16DXlSDXp9eZ15nXnSDXpNeV15jXoNem15nXkNecINeZ15nXl9eV15PXmSwg15XXqdei15zXmdeg15Ug15zXlNeR15nXkNeVINec15nXk9eZINeR15nXmNeV15kg15vXk9eZINec15fXmdeV16og15fXmdeZ150g157XqNeS16nXmdedINeV157Xodek16fXmdedLiBcXG7XkNeg15kg15LXnSDXnteQ157XmdefINep15vXm9ecINep15nXlNeZ15Ug15nXldeq16gg15DXoNep15nXnSDXqdee15LXqdeZ157XmdedINeQ16og16LXptee150g15HXl9eZ15nXnSDXm9eaINeZ15TXpNeV15og15TXoteV15zXnSDXqdec16DXlSDXnNee16fXldedINeY15XXkSDXmdeV16rXqCDXoteR15XXqNeg15Ug15XXoteR15XXqCDXlNeT15XXqNeV16og15TXkdeQ15nXnS5cXG5cIlxuICAvLyBXcml0ZXJOYW1lOiBcIteg15XXotedINeQ16jXmdeb15BcIlxuICAvLyBXcml0ZXJQaG9uZTogXCIrMTMwMTIyMjMxNjhcIlxuICAvLyBXcml0ZXJQaWM6IHtfaWQ6ICc1ZmI5ZTJlZDEwNTQzNDdmZTY2NzBlYTknLCBuYW1lOiAnMTE0ODA2Mzc1XzEwMTU4MzEwOTU0Mzc3MTk5Xzk4NzI1NTE2MzI0ODkzOTYxM19vLmpwZycsIGFsdGVybmF0aXZlVGV4dDogJycsIGNhcHRpb246ICcnLCBoYXNoOiAnMTE0ODA2Mzc1XzEwMTU4MzEwOTU0Mzc3MTk5Xzk4NzI1NTE2MzI0ODkzOTYxM19vXzVlNGJlZTBjZDYnLCDigKZ9XG4gIC8vIFdyaXRlclNob3J0RGVzY3JpcHRpb246IFwi157Xk9eo15nXmiDXldee15zXldeV15Qg16bXoteZ16jXmdedINec15TXktep157XlCDXotem157XmdeqINeR16fXqNeZ15nXqNeUINeV15HXl9eZ15nXnVwiXG4gIC8vIFdyaXRlcldlYnNpdGU6IFwiaHR0cHM6Ly91c2x5YXBwLmdpdGh1Yi5pby91c2x5XCJcbiAgLy8gV3JpdGVyV2hhdHNBcHA6IFwiKzEzMDEyMjIzMTY4XCJcbiAgLy8gV3JpdGVyWW91VHViZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDejZ2R2dXNk5oOFFFeEpXMUtYX3BnZy9mZWF0dXJlZFwiXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciB0cmFuc3BhcmVudCAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHJvZmlsZS1wYWdlXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIGgtNTAwLXB4XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgdy1mdWxsIGgtZnVsbCBiZy1jZW50ZXIgYmctY292ZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgIFwidXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTMzNjMxNTgxNi0wOTc2NTVkY2ZiZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI3MTAmcT04MCcpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGlkPVwiYmxhY2tPdmVybGF5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSBvcGFjaXR5LTUwIGJnLWJsYWNrXCJcbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWF1dG8gYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGFic29sdXRlIHBvaW50ZXItZXZlbnRzLW5vbmUgb3ZlcmZsb3ctaGlkZGVuIGgtMTZcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2MCAxMDBcIlxuICAgICAgICAgICAgICB4PVwiMFwiXG4gICAgICAgICAgICAgIHk9XCIwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWVHcmF5LTIwMCBmaWxsLWN1cnJlbnRcIlxuICAgICAgICAgICAgICAgIHBvaW50cz1cIjI1NjAgMCAyNTYwIDEwMCAwIDEwMFwiXG4gICAgICAgICAgICAgID48L3BvbHlnb24+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0xNiBiZy1ibHVlR3JheS0yMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy14bCByb3VuZGVkLWxnIC1tdC02NFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIG1iLTI0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTMvMTIgcHgtNCBsZzpvcmRlci0yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17d3JpdGVyLldyaXRlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ1VybFdyaXRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLWZ1bGwgaC1hdXRvIGFsaWduLW1pZGRsZSBib3JkZXItbm9uZSBhYnNvbHV0ZSAtbS0xNiAtbWwtMjAgbGc6LW1sLTE2IG1heC13LTE1MC1weFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMjRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIGxlYWRpbmctbm9ybWFsIG1iLTIgdGV4dC1ibHVlR3JheS03MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICB7d3JpdGVyLldyaXRlck5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctbm9ybWFsIG10LTAgbWItMiB0ZXh0LWJsdWVHcmF5LTQwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt3cml0ZXIuV3JpdGVyU2hvcnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcHktMTAgYm9yZGVyLXQgYm9yZGVyLWJsdWVHcmF5LTIwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTkvMTIgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ibHVlR3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cml0ZXIuV3JpdGVyTG9uZ0Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvYXV0aG9ycy9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hdXRob3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1saWdodEJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg15fXlteo15RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBtLThcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMy8xMiBweC00IGxnOm9yZGVyLTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRCbHVlLTQwMCB0ZXh0LXdoaXRlIHctOCBoLTggcm91bmRlZC1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWxpZ2h0Qmx1ZS02MDAgdGV4dC13aGl0ZSB3LTggaC04IHJvdW5kZWQtZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1waW5rLTUwMCB0ZXh0LXdoaXRlIHctOCBoLTggcm91bmRlZC1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1kcmliYmJsZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/authorBio.js\n");

/***/ })

})