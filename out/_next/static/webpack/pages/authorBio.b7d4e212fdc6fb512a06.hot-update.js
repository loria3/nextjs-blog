webpackHotUpdate_N_E("pages/authorBio",{

/***/ "./pages/authorBio.js":
/*!****************************!*\
  !*** ./pages/authorBio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthorBio; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbars/AuthNavbar.js */ \"./components/Navbars/AuthNavbar.js\");\n/* harmony import */ var _components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footers/Footer.js */ \"./components/Footers/Footer.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetcher */ \"./utils/fetcher.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/lori/Documents/Niche/UslyWebApp/nextjs-blog/pages/authorBio.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst imageUrl = {\n  url: \"https://niche.ink\"\n};\nfunction AuthorBio() {\n  _s();\n\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    id\n  } = router.query;\n  if (!id) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 19\n  }, this);\n  const {\n    data: writer\n  } = Object(swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\"getWriter\", id], (url, writer) => Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(url, {\n    id: writer\n  }));\n  if (!writer) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 23\n  }, this);\n  let imgUrlWriter = `${imageUrl.url}${writer.WriterPic.formats.medium ? writer.WriterPic.formats.medium.url : writer.WriterPic.url}`; //   WriterEmail: \"aricha.noam@gmail.com\"\n  // WriterFacebook: \"https://www.facebook.com/noam.aricha\"\n  // WriterLinkedIn: \"https://www.linkedin.com/in/noamaricha/\"\n  // WriterLongDescription: \"שלום לכםן:)\\n\\nאני נועם אריכא, בן, אח, בן זוג, חבר ואב לשניים. \\nמדריך ומלווה צעירים ביצירת חיים שמחים, מרגשים ומשמעותיים.\\n\\nהחיים הם מסע של התפתחות, למידה ותרגול ביצירת בהירות ומיקוד בהגשמת חיים שאנחנו מייחלים לעצמנו. \\n\\nהתכנים שמושכים אותי הם  מעולמות המיינדפולנס, הפסיכולוגיה החיובית והתעסוקתית, תיאוריות על אושר, מנהיגות והעצמה, לאורך השנים צברתי ניסיון רב בלווי צעירים בשלבי החיים השונים, הכוונה והכשרות מקצועיות, תפקידי ניהול והובלת קבוצות ותהליכים במסגרות מגוונות, תארים אקדמיים בניהול והתמחות במנהיגות חברתית, הכשרות, הדרכה והעצמה.\\n\\nאני מאמין שבכל אחד מאתנו קיים פוטנציאל ייחודי, ושעלינו להביאו לידי ביטוי כדי לחיות חיים מרגשים ומספקים. \\nאני גם מאמין שככל שיהיו יותר אנשים שמגשימים את עצמם בחיים כך יהפוך העולם שלנו למקום טוב יותר עבורנו ועבור הדורות הבאים.\\n\"\n  // WriterName: \"נועם אריכא\"\n  // WriterPhone: \"+13012223168\"\n  // WriterPic: {_id: '5fb9e2ed1054347fe6670ea9', name: '114806375_10158310954377199_987255163248939613_o.jpg', alternativeText: '', caption: '', hash: '114806375_10158310954377199_987255163248939613_o_5e4bee0cd6', …}\n  // WriterShortDescription: \"מדריך ומלווה צעירים להגשמה עצמית בקריירה ובחיים\"\n  // WriterWebsite: \"https://uslyapp.github.io/usly\"\n  // WriterWhatsApp: \"+13012223168\"\n  // WriterYouTube: \"https://www.youtube.com/channel/UCz6vGgW6Nh8QExJW1KX_pgg/featured\"\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbars_AuthNavbar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      transparent: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"profile-page\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative block h-500-px\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 w-full h-full bg-center bg-cover\",\n          style: {\n            backgroundImage: \"url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            id: \"blackOverlay\",\n            className: \"w-full h-full absolute opacity-50 bg-black\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16\",\n          style: {\n            transform: \"translateZ(0)\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"absolute bottom-0 overflow-hidden\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            preserveAspectRatio: \"none\",\n            version: \"1.1\",\n            viewBox: \"0 0 2560 100\",\n            x: \"0\",\n            y: \"0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polygon\", {\n              className: \"text-blueGray-200 fill-current\",\n              points: \"2560 0 2560 100 0 100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"relative py-16 bg-blueGray-200\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container mx-auto px-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"px-6\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"flex flex-wrap justify-center mb-24\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"relative\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                      alt: writer.WriterName,\n                      src: imgUrlWriter,\n                      className: \"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 86,\n                      columnNumber: 23\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 85,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"justify-center mb-8\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  className: \"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\",\n                  type: \"button\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                    className: \"fab fa-twitter\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 99,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  className: \"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\",\n                  type: \"button\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                    className: \"fab fa-facebook-f\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 105,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  className: \"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\",\n                  type: \"button\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                    className: \"fab fa-dribbble\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 111,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 107,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"text-center mt-24\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                  className: \"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\",\n                  children: writer.WriterName\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\",\n                  children: writer.WriterShortDescription\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 118,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"mt-10 py-10 border-t border-blueGray-200 text-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex flex-wrap justify-center\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"w-full lg:w-9/12 px-4\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                      className: \"mb-4 text-lg leading-relaxed text-blueGray-700\",\n                      children: writer.WriterLongDescription\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 125,\n                      columnNumber: 23\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n                      href: {\n                        pathname: \"/authors/\"\n                      },\n                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                        href: \"/authors\",\n                        className: \"font-normal text-lightBlue-500\",\n                        children: \"\\u05D7\\u05D6\\u05E8\\u05D4\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 133,\n                        columnNumber: 25\n                      }, this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 128,\n                      columnNumber: 23\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 124,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 123,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 122,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(AuthorBio, \"LNl4qiLE6KHPofE1f0UVDDy1JpU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = AuthorBio;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthorBio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aG9yQmlvLmpzPzYyMjUiXSwibmFtZXMiOlsiaW1hZ2VVcmwiLCJ1cmwiLCJBdXRob3JCaW8iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsIndyaXRlciIsInVzZVNXUiIsImZldGNoSGVscGVyIiwiaW1nVXJsV3JpdGVyIiwiV3JpdGVyUGljIiwiZm9ybWF0cyIsIm1lZGl1bSIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zZm9ybSIsIldyaXRlck5hbWUiLCJXcml0ZXJTaG9ydERlc2NyaXB0aW9uIiwiV3JpdGVyTG9uZ0Rlc2NyaXB0aW9uIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUc7QUFDZkMsS0FBRyxFQUFFO0FBRFUsQ0FBakI7QUFHZSxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQ2xDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUF0QjtBQUNBLE1BQUksQ0FBQ0QsRUFBTCxFQUFTLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVULFFBQU07QUFBRUUsUUFBSSxFQUFFQztBQUFSLE1BQW1CQyxtREFBTSxDQUFDLENBQUMsV0FBRCxFQUFjSixFQUFkLENBQUQsRUFBb0IsQ0FBQ0osR0FBRCxFQUFNTyxNQUFOLEtBQ2pERSw4REFBVyxDQUFDVCxHQUFELEVBQU07QUFBRUksTUFBRSxFQUFFRztBQUFOLEdBQU4sQ0FEa0IsQ0FBL0I7QUFJQSxNQUFJLENBQUNBLE1BQUwsRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFYixNQUFJRyxZQUFZLEdBQUksR0FBRVgsUUFBUSxDQUFDQyxHQUFJLEdBQ2pDTyxNQUFNLENBQUNJLFNB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhcnMvQXV0aE5hdmJhci5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJzL0Zvb3Rlci5qc1wiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgZmV0Y2hIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL2ZldGNoZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgaW1hZ2VVcmwgPSB7XG4gIHVybDogXCJodHRwczovL25pY2hlLmlua1wiLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvckJpbygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBpZiAoIWlkKSByZXR1cm4gPGRpdj48L2Rpdj47XG5cbiAgY29uc3QgeyBkYXRhOiB3cml0ZXIgfSA9IHVzZVNXUihbXCJnZXRXcml0ZXJcIiwgaWRdLCAodXJsLCB3cml0ZXIpID0+XG4gICAgZmV0Y2hIZWxwZXIodXJsLCB7IGlkOiB3cml0ZXIgfSlcbiAgKTtcblxuICBpZiAoIXdyaXRlcikgcmV0dXJuIDxkaXY+PC9kaXY+O1xuXG4gIGxldCBpbWdVcmxXcml0ZXIgPSBgJHtpbWFnZVVybC51cmx9JHtcbiAgICB3cml0ZXIuV3JpdGVyUGljLmZvcm1hdHMubWVkaXVtXG4gICAgICA/IHdyaXRlci5Xcml0ZXJQaWMuZm9ybWF0cy5tZWRpdW0udXJsXG4gICAgICA6IHdyaXRlci5Xcml0ZXJQaWMudXJsXG4gIH1gO1xuXG4gIC8vICAgV3JpdGVyRW1haWw6IFwiYXJpY2hhLm5vYW1AZ21haWwuY29tXCJcbiAgLy8gV3JpdGVyRmFjZWJvb2s6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL25vYW0uYXJpY2hhXCJcbiAgLy8gV3JpdGVyTGlua2VkSW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25vYW1hcmljaGEvXCJcbiAgLy8gV3JpdGVyTG9uZ0Rlc2NyaXB0aW9uOiBcItep15zXldedINec15vXndefOilcXG5cXG7XkNeg15kg16DXldei150g15DXqNeZ15vXkCwg15HXnywg15DXlywg15HXnyDXlteV15IsINeX15HXqCDXldeQ15Eg15zXqdeg15nXmdedLiBcXG7XnteT16jXmdeaINeV157XnNeV15XXlCDXptei15nXqNeZ150g15HXmdem15nXqNeqINeX15nXmdedINep157Xl9eZ150sINee16jXktep15nXnSDXldee16nXntei15XXqteZ15nXnS5cXG5cXG7XlNeX15nXmdedINeU150g157XodeiINep15wg15TXqtek16rXl9eV16osINec157XmdeT15Qg15XXqteo15LXldecINeR15nXpteZ16jXqiDXkdeU15nXqNeV16og15XXnteZ16fXldeTINeR15TXktep157XqiDXl9eZ15nXnSDXqdeQ16DXl9eg15Ug157XmdeZ15fXnNeZ150g15zXotem157XoNeVLiBcXG5cXG7XlNeq15vXoNeZ150g16nXnteV16nXm9eZ150g15DXldeq15kg15TXnSAg157XoteV15zXnteV16og15TXnteZ15nXoNeT16TXldec16DXoSwg15TXpNeh15nXm9eV15zXldeS15nXlCDXlNeX15nXldeR15nXqiDXldeU16rXoteh15XXp9eq15nXqiwg16rXmdeQ15XXqNeZ15XXqiDXotecINeQ15XXqdeoLCDXnteg15TXmdeS15XXqiDXldeU16LXptee15QsINec15DXldeo15og15TXqdeg15nXnSDXpteR16jXqteZINeg15nXodeZ15XXnyDXqNeRINeR15zXldeV15kg16bXoteZ16jXmdedINeR16nXnNeR15kg15TXl9eZ15nXnSDXlNep15XXoNeZ150sINeU15vXldeV16DXlCDXldeU15vXqdeo15XXqiDXnten16bXldei15nXldeqLCDXqtek16fXmdeT15kg16DXmdeU15XXnCDXldeU15XXkdec16og16fXkdeV16bXldeqINeV16rXlNec15nXm9eZ150g15HXnteh15LXqNeV16og157XkteV15XXoNeV16osINeq15DXqNeZ150g15DXp9eT157XmdeZ150g15HXoNeZ15TXldecINeV15TXqtee15fXldeqINeR157XoNeU15nXkteV16og15fXkdeo16rXmdeqLCDXlNeb16nXqNeV16osINeU15PXqNeb15Qg15XXlNei16bXnteULlxcblxcbteQ16DXmSDXnteQ157XmdefINep15HXm9ecINeQ15fXkyDXnteQ16rXoNeVINen15nXmdedINek15XXmNeg16bXmdeQ15wg15nXmdeX15XXk9eZLCDXldep16LXnNeZ16DXlSDXnNeU15HXmdeQ15Ug15zXmdeT15kg15HXmdeY15XXmSDXm9eT15kg15zXl9eZ15XXqiDXl9eZ15nXnSDXnteo15LXqdeZ150g15XXnteh16TXp9eZ150uIFxcbteQ16DXmSDXktedINee15DXnteZ158g16nXm9eb15wg16nXmdeU15nXlSDXmdeV16rXqCDXkNeg16nXmdedINep157Xktep15nXnteZ150g15DXqiDXotem157XnSDXkdeX15nXmdedINeb15og15nXlNek15XXmiDXlNei15XXnNedINep15zXoNeVINec157Xp9eV150g15jXldeRINeZ15XXqteoINei15HXldeo16DXlSDXldei15HXldeoINeU15PXldeo15XXqiDXlNeR15DXmdedLlxcblwiXG4gIC8vIFdyaXRlck5hbWU6IFwi16DXldei150g15DXqNeZ15vXkFwiXG4gIC8vIFdyaXRlclBob25lOiBcIisxMzAxMjIyMzE2OFwiXG4gIC8vIFdyaXRlclBpYzoge19pZDogJzVmYjllMmVkMTA1NDM0N2ZlNjY3MGVhOScsIG5hbWU6ICcxMTQ4MDYzNzVfMTAxNTgzMTA5NTQzNzcxOTlfOTg3MjU1MTYzMjQ4OTM5NjEzX28uanBnJywgYWx0ZXJuYXRpdmVUZXh0OiAnJywgY2FwdGlvbjogJycsIGhhc2g6ICcxMTQ4MDYzNzVfMTAxNTgzMTA5NTQzNzcxOTlfOTg3MjU1MTYzMjQ4OTM5NjEzX29fNWU0YmVlMGNkNicsIOKApn1cbiAgLy8gV3JpdGVyU2hvcnREZXNjcmlwdGlvbjogXCLXnteT16jXmdeaINeV157XnNeV15XXlCDXptei15nXqNeZ150g15zXlNeS16nXnteUINei16bXnteZ16og15HXp9eo15nXmdeo15Qg15XXkdeX15nXmdedXCJcbiAgLy8gV3JpdGVyV2Vic2l0ZTogXCJodHRwczovL3VzbHlhcHAuZ2l0aHViLmlvL3VzbHlcIlxuICAvLyBXcml0ZXJXaGF0c0FwcDogXCIrMTMwMTIyMjMxNjhcIlxuICAvLyBXcml0ZXJZb3VUdWJlOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUN6NnZHZ1c2Tmg4UUV4SlcxS1hfcGdnL2ZlYXR1cmVkXCJcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIHRyYW5zcGFyZW50IC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJwcm9maWxlLXBhZ2VcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgaC01MDAtcHhcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlclwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk5MzM2MzE1ODE2LTA5NzY1NWRjZmJkYT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjcxMCZxPTgwJylcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgaWQ9XCJibGFja092ZXJsYXlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGFic29sdXRlIG9wYWNpdHktNTAgYmctYmxhY2tcIlxuICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtYXV0byBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCB3LWZ1bGwgYWJzb2x1dGUgcG9pbnRlci1ldmVudHMtbm9uZSBvdmVyZmxvdy1oaWRkZW4gaC0xNlwiXG4gICAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWigwKVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxuICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYwIDEwMFwiXG4gICAgICAgICAgICAgIHg9XCIwXCJcbiAgICAgICAgICAgICAgeT1cIjBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cG9seWdvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZUdyYXktMjAwIGZpbGwtY3VycmVudFwiXG4gICAgICAgICAgICAgICAgcG9pbnRzPVwiMjU2MCAwIDI1NjAgMTAwIDAgMTAwXCJcbiAgICAgICAgICAgICAgPjwvcG9seWdvbj5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTE2IGJnLWJsdWVHcmF5LTIwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LXhsIHJvdW5kZWQtbGcgLW10LTY0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgbWItMjRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMy8xMiBweC00IGxnOm9yZGVyLTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt3cml0ZXIuV3JpdGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nVXJsV3JpdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtZnVsbCBoLWF1dG8gYWxpZ24tbWlkZGxlIGJvcmRlci1ub25lIGFic29sdXRlIC1tLTE2IC1tbC0yMCBsZzotbWwtMTYgbWF4LXctMTUwLXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodEJsdWUtNDAwIHRleHQtd2hpdGUgdy04IGgtOCByb3VuZGVkLWZ1bGwgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTFcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbGlnaHRCbHVlLTYwMCB0ZXh0LXdoaXRlIHctOCBoLTggcm91bmRlZC1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIHRleHQtd2hpdGUgdy04IGgtOCByb3VuZGVkLWZ1bGwgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTFcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWRyaWJiYmxlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yNFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgbGVhZGluZy1ub3JtYWwgbWItMiB0ZXh0LWJsdWVHcmF5LTcwMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHt3cml0ZXIuV3JpdGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy1ub3JtYWwgbXQtMCBtYi0yIHRleHQtYmx1ZUdyYXktNDAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3dyaXRlci5Xcml0ZXJTaG9ydERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBweS0xMCBib3JkZXItdCBib3JkZXItYmx1ZUdyYXktMjAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctOS8xMiBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWJsdWVHcmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3dyaXRlci5Xcml0ZXJMb25nRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9hdXRob3JzL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2F1dGhvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWxpZ2h0Qmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDXl9eW16jXlFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/authorBio.js\n");

/***/ })

})