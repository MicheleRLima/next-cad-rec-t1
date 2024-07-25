/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_services_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/services/firebaseConfig */ \"./src/services/firebaseConfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_services_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__]);\n_src_services_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\nfunction AuthProvider({ children }) {\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = _src_services_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged((user)=>{\n            setCurrentUser(user);\n            setLoading(false);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const signup = async (info)=>{\n        console.log(\"Context: \", info);\n        setLoading(false);\n        setIsLoggedIn(true);\n        getUserData();\n    };\n    const login = async (info)=>{\n        console.log(\"Context: \", info);\n        setLoading(false);\n        setIsLoggedIn(true);\n    };\n    const value = {\n        currentUser,\n        signup,\n        login,\n        isLoggedIn\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\55419\\\\Desktop\\\\Projetos\\\\Pr\\xe1ticas\\\\Caderno\\\\front\\\\next-cad-rec\\\\context\\\\AuthContext.js\",\n        lineNumber: 44,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQ2pCO0FBRXRELE1BQU1LLDRCQUFjTCxvREFBYUE7QUFFMUIsU0FBU007SUFDZCxPQUFPSixpREFBVUEsQ0FBQ0c7QUFDcEI7QUFFTyxTQUFTRSxhQUFhLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUU3Q0UsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxjQUFjWCw4REFBSUEsQ0FBQ1ksa0JBQWtCLENBQUMsQ0FBQ0M7WUFDM0NQLGVBQWVPO1lBQ2ZMLFdBQVc7UUFDYjtRQUVBLE9BQU8sSUFBTUc7SUFDZixHQUFHLEVBQUU7SUFFTCxNQUFNRyxTQUFTLE9BQU9DO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUMsYUFBYUY7UUFDekJQLFdBQVc7UUFDWEUsY0FBYztRQUNkUTtJQUNGO0lBRUEsTUFBTUMsUUFBUSxPQUFPSjtRQUNuQkMsUUFBUUMsR0FBRyxDQUFDLGFBQWFGO1FBQ3pCUCxXQUFXO1FBQ1hFLGNBQWM7SUFDaEI7SUFFQSxNQUFNVSxRQUFRO1FBQ1pmO1FBQ0FTO1FBQ0FLO1FBQ0FWO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ1IsWUFBWW9CLFFBQVE7UUFBQ0QsT0FBT0E7a0JBQVFoQjs7Ozs7O0FBQzlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FkLXJlYy10MS8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/MTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vc3JjL3NlcnZpY2VzL2ZpcmViYXNlQ29uZmlnJztcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBzZXRDdXJyZW50VXNlcih1c2VyKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNpZ251cCA9IGFzeW5jIChpbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQ29udGV4dDogJywgaW5mbyk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICBnZXRVc2VyRGF0YSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGluZm8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdDb250ZXh0OiAnLCBpbmZvKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IHtcclxuICAgIGN1cnJlbnRVc2VyLFxyXG4gICAgc2lnbnVwLFxyXG4gICAgbG9naW4sXHJcbiAgICBpc0xvZ2dlZEluLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJhdXRoIiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInNpZ251cCIsImluZm8iLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckRhdGEiLCJsb2dpbiIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\55419\\\\Desktop\\\\Projetos\\\\Pr\\xe1ticas\\\\Caderno\\\\front\\\\next-cad-rec\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\55419\\\\Desktop\\\\Projetos\\\\Pr\\xe1ticas\\\\Caderno\\\\front\\\\next-cad-rec\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFFdEI7QUFFL0IsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsOERBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWQtcmVjLXQxLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/services/firebaseConfig.js":
/*!****************************************!*\
  !*** ./src/services/firebaseConfig.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyADJG5iaXqpkwsupcTkqsdNCciUyA8bZFE\",\n    authDomain: \"caderno-receitas.firebaseapp.com\",\n    databaseURL: \"https://caderno-receitas-default-rtdb.firebaseio.com\",\n    projectId: \"caderno-receitas\",\n    storageBucket: \"caderno-receitas.appspot.com\",\n    messagingSenderId: \"882313484536\",\n    appId: \"1:882313484536:web:7cd86d23984546b7cf830d\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmlyZWJhc2VDb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0w7QUFDUTtBQUVoRCxNQUFNRyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxhQUFhO0lBQ2JDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxtQkFBbUI7SUFDbkJDLE9BQU87QUFDVDtBQUVBLE1BQU1DLE1BQU1YLDJEQUFhQSxDQUFDRztBQUMxQixNQUFNUyxPQUFPWCxzREFBT0EsQ0FBQ1U7QUFDckIsTUFBTUUsS0FBS1gsOERBQVdBLENBQUNTO0FBRXZCLGlFQUFlQSxHQUFHQSxFQUFDO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWQtcmVjLXQxLy4vc3JjL3NlcnZpY2VzL2ZpcmViYXNlQ29uZmlnLmpzPzY0ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgZ2V0RGF0YWJhc2UgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSc7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6ICdBSXphU3lBREpHNWlhWHFwa3dzdXBjVGtxc2ROQ2NpVXlBOGJaRkUnLFxyXG4gIGF1dGhEb21haW46ICdjYWRlcm5vLXJlY2VpdGFzLmZpcmViYXNlYXBwLmNvbScsXHJcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL2NhZGVybm8tcmVjZWl0YXMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tJyxcclxuICBwcm9qZWN0SWQ6ICdjYWRlcm5vLXJlY2VpdGFzJyxcclxuICBzdG9yYWdlQnVja2V0OiAnY2FkZXJuby1yZWNlaXRhcy5hcHBzcG90LmNvbScsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICc4ODIzMTM0ODQ1MzYnLFxyXG4gIGFwcElkOiAnMTo4ODIzMTM0ODQ1MzY6d2ViOjdjZDg2ZDIzOTg0NTQ2YjdjZjgzMGQnLFxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoYXBwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcclxuZXhwb3J0IHsgYXV0aCwgZGIgfTtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RGF0YWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiYXV0aCIsImRiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/firebaseConfig.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/database");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();