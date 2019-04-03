/******/ (function(modules) { // webpackBootstrap
/******/ function hotDisposeChunk(chunkId) {
/******/ delete installedChunks[chunkId];
/******/ }
...
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/index.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/* Estilos globales de la página */\\nbody {\\n  margin: 0;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n/* Barra de navegación superior */\\n.nav {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 20px;\\n}\\n\\n/* Sección principal (hero) con fondo oscuro */\\n.hero {\\n  background-color: #1f2535;\\n  color: white;\\n  padding: 60px 20px;\\n  position: relative;\\n}\\n\\n/* Alineamos la imagen del logo de React en la esquina derecha */\\n.hero .react-logo {\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n  width: 250px;\\n  opacity: 0.1; /* Le damos transparencia para que actúe como fondo */\\n}\\n\\n/* Botón principal */\\n.hero button {\\n  margin-top: 20px;\\n  padding: 10px 20px;\\n  background: white;\\n  border: none;\\n  font-size: 16px;\\n  border-radius: 5px;\\n}\\n\\n/* Sección de características */\\n.features {\\n  display: flex;\\n  justify-content: space-around;\\n  padding: 40px 20px;\\n}\\n\\n/* Cada bloque de característica */\\n.features div {\\n  width: 200px;\\n  text-align: left;\\n}\\n\\n.features img {\\n  width: 100px;\\n}\\n\\n.features h2 {\\n  margin-bottom: 10px;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader");

/***/ }),

... (contenido completo del bundle que pegaste arriba) ...

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-dom'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Estilos generales de la página\n\n// Componente funcional que representa la landing page completa\nvar App = function App() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(\n      \"nav\",\n      { className: \"nav\" },\n      _react2.default.createElement(\"img\", { src: \"images/ironhack-logo.svg\", alt: \"logo Ironhack\" }),\n      _react2.default.createElement(\"img\", { src: \"images/menu-top.svg\", alt: \"icono men\\xFA\" })\n    ),\n    _react2.default.createElement(\n      \"header\",\n      { className: \"hero\" },\n      _react2.default.createElement(\n        \"h1\",\n        null,\n        \"Say hello to ReactJS\"\n      ),\n      _react2.default.createElement(\n        \"p\",\n        null,\n        \"You will learn how to use the most popular frontend library, and become a super Ninja developer.\"\n      ),\n      _react2.default.createElement(\n        \"button\",\n        null,\n        \"Awesome!\"\n      ),\n      _react2.default.createElement(\"img\", { className: \"react-logo\", src: \"images/react-logo.svg\", alt: \"React logo\" })\n    ),\n    _react2.default.createElement(\n      \"section\",\n      { className: \"features\" },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\"img\", { src: \"images/icon1.png\", alt: \"Declarative\" }),\n        _react2.default.createElement(\n          \"h2\",\n          null,\n          \"Declarative\"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          \"React makes it painless to create interactive UIs.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\"img\", { src: \"images/icon2.png\", alt: \"Components\" }),\n        _react2.default.createElement(\n          \"h2\",\n          null,\n          \"Components\"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          \"Build encapsulated components that manage their state.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\"img\", { src: \"images/icon3.png\", alt: \"Single-Way\" }),\n        _react2.default.createElement(\n          \"h2\",\n          null,\n          \"Single-Way\"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          \"A set of immutable values are passed to the components.\"\n        )\n      ),\n      _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\"img\", { src: \"images/icon4.png\", alt: \"JSX\" }),\n        _react2.default.createElement(\n          \"h2\",\n          null,\n          \"JSX\"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          \"Statically-typed designed to run on modern browsers.\"\n        )\n      )\n    )\n  );\n};\n\n/* ... resto del bundle ... */\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
