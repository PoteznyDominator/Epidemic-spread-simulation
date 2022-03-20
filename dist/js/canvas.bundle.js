/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle */ "./src/js/circle.js");




var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerHeight / 2;
canvas.height = innerHeight / 2; // stores object for canvas

var circles;

function init() {
  circles = [];
  var radius = 10; // values of x and y are specify like this to ensure non of them spawn in canvas border

  var x = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(radius, canvas.width - radius);
  var y = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(radius, canvas.height - radius);
  circles.push(new _circle__WEBPACK_IMPORTED_MODULE_1__["default"](c, x, y, radius, "red"));

  for (var i = 0; i < 30; i++) {
    x = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(radius, canvas.width - radius);
    y = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(radius, canvas.height - radius);

    if (i != 0) {
      for (var j = 0; j < circles.length; j++) {
        // to avoid spawning object inside one of other circles
        if (_utils__WEBPACK_IMPORTED_MODULE_0___default.a.getDistance(x, y, circles[j].x, circles[j].y) - radius * 2 < 0) {
          x = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(radius, canvas.width - radius);
          y = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }

    circles.push(new _circle__WEBPACK_IMPORTED_MODULE_1__["default"](c, x, y, radius, "blue"));
  }
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(function (object) {
    object.update(circles);
  });
}

init();
animate();

/***/ }),

/***/ "./src/js/circle.js":
/*!**************************!*\
  !*** ./src/js/circle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var Circle = /*#__PURE__*/function () {
  function Circle(context, x, y, radius, color) {
    _classCallCheck(this, Circle);

    this.context = context;
    this.x = x;
    this.y = y;
    this.velocity = {
      x: Math.random() * 5 - 2.5,
      y: Math.random() * 5 - 2.5
    };
    this.radius = radius;
    this.color = color;
  }

  _createClass(Circle, [{
    key: "update",
    value: function update(circles) {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      for (var i = 0; i < circles.length; i++) {
        if (this === circles[i]) continue;

        if (_utils__WEBPACK_IMPORTED_MODULE_0___default.a.getDistance(this.x, this.y, circles[i].x, circles[i].y) - 2 * this.radius < 0 && circles[i].color == "red") {
          // console.log("hit")
          // consider adding bounce effect
          this.color = "red";
        }
      } // detect canvas hit


      if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
        this.velocity.x = -this.velocity.x;
      }

      if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
        this.velocity.y = -this.velocity.y;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }]);

  return Circle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getDistance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  getDistance: getDistance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map