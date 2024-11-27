"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/leaderboard",{

/***/ "./src/pages/leaderboard.tsx":
/*!***********************************!*\
  !*** ./src/pages/leaderboard.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_Authenticated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Authenticated */ \"./src/layouts/Authenticated.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst Leaderboard = ()=>{\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"global\");\n    // Dummy data for global and group tabs\n    const globalUsers = [\n        {\n            id: 1,\n            name: \"Alice\",\n            score: 180\n        },\n        {\n            id: 2,\n            name: \"Bob\",\n            score: 150\n        },\n        {\n            id: 3,\n            name: \"Charlie\",\n            score: 125\n        },\n        {\n            id: 4,\n            name: \"Daisy\",\n            score: 110\n        },\n        {\n            id: 5,\n            name: \"Eve\",\n            score: 105\n        },\n        {\n            id: 6,\n            name: \"Frank\",\n            score: 100\n        },\n        {\n            id: 7,\n            name: \"Grace\",\n            score: 95\n        },\n        {\n            id: 8,\n            name: \"Hank\",\n            score: 90\n        },\n        {\n            id: 9,\n            name: \"Ivy\",\n            score: 85\n        },\n        {\n            id: 10,\n            name: \"Jack\",\n            score: 80\n        }\n    ];\n    const groupUsers = [\n        {\n            id: 1,\n            name: \"Alice\",\n            score: 180\n        },\n        {\n            id: 2,\n            name: \"Bob\",\n            score: 150\n        },\n        {\n            id: 3,\n            name: \"Charlie\",\n            score: 125\n        },\n        {\n            id: 4,\n            name: \"Daisy\",\n            score: 110\n        },\n        {\n            id: 5,\n            name: \"Eve\",\n            score: 105\n        }\n    ];\n    // Get active users based on tab and sort them by score\n    const users = activeTab === \"global\" ? globalUsers : groupUsers;\n    const sortedUsers = [\n        ...users\n    ].sort((a, b)=>b.score - a.score);\n    const topThree = sortedUsers.slice(0, 3); // Top 3 users\n    const others = sortedUsers.slice(3); // Rest of the users\n    // Badge assignment logic\n    const getBadge = (score)=>{\n        if (score >= 150) return \"🏆\"; // Gold Badge\n        if (score >= 125) return \"🥈\"; // Silver Badge\n        if (score >= 100) return \"🥉\"; // Bronze Badge\n        return \"⭐\"; // Star for others\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center bg-purple-50 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center\",\n                children: \"Leaderboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-4 mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 rounded-full \".concat(activeTab === \"global\" ? \"bg-purple-600 text-white\" : \"bg-gray-200\"),\n                        onClick: ()=>setActiveTab(\"global\"),\n                        children: \"Global\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 rounded-full \".concat(activeTab === \"group\" ? \"bg-purple-600 text-white\" : \"bg-gray-200\"),\n                        onClick: ()=>setActiveTab(\"group\"),\n                        children: \"Group\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center mb-8 w-full rounded-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center p-4 m-2 bg-white rounded-lg shadow-lg text-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4 text-2xl\",\n                                children: getBadge(topThree[1].score)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold\",\n                                children: topThree[1].name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-purple-600 text-white py-1 px-4 rounded-full mt-2\",\n                                children: [\n                                    topThree[1].score,\n                                    \" points\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center p-4 m-2 bg-white rounded-lg shadow-lg text-black transform scale-110\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-32 h-32 rounded-full bg-yellow-300 flex items-center justify-center mb-4 text-3xl\",\n                                children: getBadge(topThree[0].score)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-4xl font-extrabold text-purple-700\",\n                                children: topThree[0].name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-purple-600 text-white py-2 px-6 rounded-full mt-2\",\n                                children: [\n                                    topThree[0].score,\n                                    \" points\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center p-4 m-2 bg-white rounded-lg shadow-lg text-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4 text-2xl\",\n                                children: getBadge(topThree[2].score)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold\",\n                                children: topThree[2].name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-purple-600 text-white py-1 px-4 rounded-full mt-2\",\n                                children: [\n                                    topThree[2].score,\n                                    \" points\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6\",\n                children: others.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-lg\",\n                                children: getBadge(user.score)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2 font-bold\",\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-purple-600 text-white py-1 px-4 rounded-full mt-2\",\n                                children: [\n                                    user.score,\n                                    \" points\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, user.id, true, {\n                        fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Leaderboard, \"DVy0JWT6/INgqMO93zvQL6nLLSU=\");\n_c = Leaderboard;\nLeaderboard.getLayout = function getLayout(page) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Authenticated__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: page\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\khan\\\\Downloads\\\\admin-one-react-tailwind-master\\\\admin-one-react-tailwind-master\\\\src\\\\pages\\\\leaderboard.tsx\",\n        lineNumber: 131,\n        columnNumber: 10\n    }, this);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Leaderboard);\nvar _c;\n$RefreshReg$(_c, \"Leaderboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUMvQjtBQUVBLGlFQUFlMUIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxraGFuXFxEb3dubG9hZHNcXGFkbWluLW9uZS1yZWFjdC10YWlsd2luZC1tYXN0ZXJcXGFkbWluLW9uZS1yZWFjdC10YWlsd2luZC1tYXN0ZXJcXHNyY1xccGFnZXNcXGxlYWRlcmJvYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dEF1dGhlbnRpY2F0ZWQgZnJvbSBcIi4uL2xheW91dHMvQXV0aGVudGljYXRlZFwiO1xyXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBVc2VyIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzY29yZTogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBMZWFkZXJib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8XCJnbG9iYWxcIiB8IFwiZ3JvdXBcIj4oXCJnbG9iYWxcIik7XHJcblxyXG4gIC8vIER1bW15IGRhdGEgZm9yIGdsb2JhbCBhbmQgZ3JvdXAgdGFic1xyXG4gIGNvbnN0IGdsb2JhbFVzZXJzOiBVc2VyW10gPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIkFsaWNlXCIsIHNjb3JlOiAxODAgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiQm9iXCIsIHNjb3JlOiAxNTAgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiQ2hhcmxpZVwiLCBzY29yZTogMTI1IH0sXHJcbiAgICB7IGlkOiA0LCBuYW1lOiBcIkRhaXN5XCIsIHNjb3JlOiAxMTAgfSxcclxuICAgIHsgaWQ6IDUsIG5hbWU6IFwiRXZlXCIsIHNjb3JlOiAxMDUgfSxcclxuICAgIHsgaWQ6IDYsIG5hbWU6IFwiRnJhbmtcIiwgc2NvcmU6IDEwMCB9LFxyXG4gICAgeyBpZDogNywgbmFtZTogXCJHcmFjZVwiLCBzY29yZTogOTUgfSxcclxuICAgIHsgaWQ6IDgsIG5hbWU6IFwiSGFua1wiLCBzY29yZTogOTAgfSxcclxuICAgIHsgaWQ6IDksIG5hbWU6IFwiSXZ5XCIsIHNjb3JlOiA4NSB9LFxyXG4gICAgeyBpZDogMTAsIG5hbWU6IFwiSmFja1wiLCBzY29yZTogODAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBncm91cFVzZXJzOiBVc2VyW10gPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIkFsaWNlXCIsIHNjb3JlOiAxODAgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiQm9iXCIsIHNjb3JlOiAxNTAgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwiQ2hhcmxpZVwiLCBzY29yZTogMTI1IH0sXHJcbiAgICB7IGlkOiA0LCBuYW1lOiBcIkRhaXN5XCIsIHNjb3JlOiAxMTAgfSxcclxuICAgIHsgaWQ6IDUsIG5hbWU6IFwiRXZlXCIsIHNjb3JlOiAxMDUgfSxcclxuICBdO1xyXG5cclxuICAvLyBHZXQgYWN0aXZlIHVzZXJzIGJhc2VkIG9uIHRhYiBhbmQgc29ydCB0aGVtIGJ5IHNjb3JlXHJcbiAgY29uc3QgdXNlcnMgPSBhY3RpdmVUYWIgPT09IFwiZ2xvYmFsXCIgPyBnbG9iYWxVc2VycyA6IGdyb3VwVXNlcnM7XHJcbiAgY29uc3Qgc29ydGVkVXNlcnMgPSBbLi4udXNlcnNdLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKTtcclxuICBjb25zdCB0b3BUaHJlZSA9IHNvcnRlZFVzZXJzLnNsaWNlKDAsIDMpOyAvLyBUb3AgMyB1c2Vyc1xyXG4gIGNvbnN0IG90aGVycyA9IHNvcnRlZFVzZXJzLnNsaWNlKDMpOyAvLyBSZXN0IG9mIHRoZSB1c2Vyc1xyXG5cclxuICAvLyBCYWRnZSBhc3NpZ25tZW50IGxvZ2ljXHJcbiAgY29uc3QgZ2V0QmFkZ2UgPSAoc2NvcmU6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAoc2NvcmUgPj0gMTUwKSByZXR1cm4gXCLwn4+GXCI7IC8vIEdvbGQgQmFkZ2VcclxuICAgIGlmIChzY29yZSA+PSAxMjUpIHJldHVybiBcIvCfpYhcIjsgLy8gU2lsdmVyIEJhZGdlXHJcbiAgICBpZiAoc2NvcmUgPj0gMTAwKSByZXR1cm4gXCLwn6WJXCI7IC8vIEJyb256ZSBCYWRnZVxyXG4gICAgcmV0dXJuIFwi4q2QXCI7IC8vIFN0YXIgZm9yIG90aGVyc1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXB1cnBsZS01MCBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIG1heC13LTR4bCBteC1hdXRvXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgbWItOCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIExlYWRlcmJvYXJkXHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICB7LyogVGFiIFN3aXRjaGVyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IG1iLTZcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gXCJnbG9iYWxcIiA/IFwiYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlXCIgOiBcImJnLWdyYXktMjAwXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKFwiZ2xvYmFsXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEdsb2JhbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgYWN0aXZlVGFiID09PSBcImdyb3VwXCIgPyBcImJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZVwiIDogXCJiZy1ncmF5LTIwMFwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYihcImdyb3VwXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEdyb3VwXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIFRvcCBUaHJlZSBVc2VycyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtYi04IHctZnVsbCByb3VuZGVkLWxnIFwiPlxyXG4gICAgICAgIHsvKiAybmQgUGxhY2UgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTQgbS0yIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTI0IHJvdW5kZWQtZnVsbCBiZy1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00IHRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgIHtnZXRCYWRnZSh0b3BUaHJlZVsxXS5zY29yZSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0b3BUaHJlZVsxXS5uYW1lfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHB5LTEgcHgtNCByb3VuZGVkLWZ1bGwgbXQtMlwiPlxyXG4gICAgICAgICAgICB7dG9wVGhyZWVbMV0uc2NvcmV9IHBvaW50c1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiAxc3QgUGxhY2UgKENlbnRlcikgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTQgbS0yIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHRleHQtYmxhY2sgdHJhbnNmb3JtIHNjYWxlLTExMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyIGgtMzIgcm91bmRlZC1mdWxsIGJnLXllbGxvdy0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCB0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgICB7Z2V0QmFkZ2UodG9wVGhyZWVbMF0uc2NvcmUpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXB1cnBsZS03MDBcIj57dG9wVGhyZWVbMF0ubmFtZX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTYgcm91bmRlZC1mdWxsIG10LTJcIj5cclxuICAgICAgICAgICAge3RvcFRocmVlWzBdLnNjb3JlfSBwb2ludHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogM3JkIFBsYWNlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC00IG0tMiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC0yNCByb3VuZGVkLWZ1bGwgYmctZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICB7Z2V0QmFkZ2UodG9wVGhyZWVbMl0uc2NvcmUpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dG9wVGhyZWVbMl0ubmFtZX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBweS0xIHB4LTQgcm91bmRlZC1mdWxsIG10LTJcIj5cclxuICAgICAgICAgICAge3RvcFRocmVlWzJdLnNjb3JlfSBwb2ludHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBPdGhlciBVc2VycyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC02XCI+XHJcbiAgICAgICAge290aGVycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTIwMCBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGJnLWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtbGdcIj5cclxuICAgICAgICAgICAgICB7Z2V0QmFkZ2UodXNlci5zY29yZSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGZvbnQtYm9sZFwiPnt1c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBweS0xIHB4LTQgcm91bmRlZC1mdWxsIG10LTJcIj5cclxuICAgICAgICAgICAgICB7dXNlci5zY29yZX0gcG9pbnRzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkxlYWRlcmJvYXJkLmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlOiBSZWFjdEVsZW1lbnQpIHtcclxuICByZXR1cm4gPExheW91dEF1dGhlbnRpY2F0ZWQ+e3BhZ2V9PC9MYXlvdXRBdXRoZW50aWNhdGVkPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxheW91dEF1dGhlbnRpY2F0ZWQiLCJMZWFkZXJib2FyZCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImdsb2JhbFVzZXJzIiwiaWQiLCJuYW1lIiwic2NvcmUiLCJncm91cFVzZXJzIiwidXNlcnMiLCJzb3J0ZWRVc2VycyIsInNvcnQiLCJhIiwiYiIsInRvcFRocmVlIiwic2xpY2UiLCJvdGhlcnMiLCJnZXRCYWRnZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJtYXAiLCJ1c2VyIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/leaderboard.tsx\n"));

/***/ })

});