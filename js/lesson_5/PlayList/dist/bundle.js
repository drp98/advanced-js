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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/media.js":
/*!*********************************!*\
  !*** ./src/components/media.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Media(title, duration) {
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype.play = function () {
  this.isPlaying = true;
};

Media.prototype.stop = function () {
  this.isPlaying = false;
};

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./src/components/movie.js":
/*!*********************************!*\
  !*** ./src/components/movie.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "./src/components/media.js");


function Movie(title, year, duration) {
  this.year = year;
  _media__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, title, duration);
}

Movie.prototype = Object.create(_media__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Movie.prototype.constructor = Movie;

Movie.prototype.toHtml = function () {
  return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n        <div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.year, "</div>\n        <div class=\"col-sm-3\">").concat(this.duration, "</div></div>");
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./src/components/playlist.js":
/*!************************************!*\
  !*** ./src/components/playlist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Playlist() {
  this.songs = [];
  this.currentIndex = 0;
}

Playlist.prototype.add = function (song) {
  this.songs.push(song);
};

Playlist.prototype.play = function () {
  var currentSong = this.songs[this.currentIndex];
  currentSong.play();
};

Playlist.prototype.stop = function () {
  var currentSong = this.songs[this.currentIndex];
  currentSong.stop();
};

Playlist.prototype.next = function () {
  var currentSong = this.songs[this.currentIndex];
  this.stop();
  this.currentIndex++;

  if (this.currentIndex === this.songs.length) {
    this.currentIndex = 0;
  }

  this.play();
};

Playlist.prototype.render = function (list) {
  list.innerHTML = '';
  return this.songs.forEach(function (song) {
    list.innerHTML += song.toHtml();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ }),

/***/ "./src/components/song.js":
/*!********************************!*\
  !*** ./src/components/song.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ "./src/components/media.js");


function Song(title, artist, duration) {
  this.artist = artist;
  _media__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, title, duration);
}

Song.prototype = Object.create(_media__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Song.prototype.constructor = Song;

Song.prototype.play = function () {
  this.isPlaying = true;
};

Song.prototype.stop = function () {
  this.isPlaying = false;
};

Song.prototype.toHtml = function () {
  return "<div class=\"row py-3 ".concat(this.isPlaying ? 'current' : '', "\">\n    <div class=\"col-sm-9\">").concat(this.title, " - ").concat(this.artist, "</div>\n    <div class=\"col-sm-3\">").concat(this.duration, "</div></div>");
};

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/song */ "./src/components/song.js");
/* harmony import */ var _components_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/movie */ "./src/components/movie.js");
/* harmony import */ var _components_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/playlist */ "./src/components/playlist.js");



var playlist = new _components_playlist__WEBPACK_IMPORTED_MODULE_2__["default"]();
var song1 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('Song1', 'Artist1', '1:34');
var song2 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('Song2', 'Artist2', '1:54');
var song3 = new _components_song__WEBPACK_IMPORTED_MODULE_0__["default"]('Song3', 'Artist3', '1:24');
var movie1 = new _components_movie__WEBPACK_IMPORTED_MODULE_1__["default"]('Movie1', 1993, '1:23:33');
playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(movie1);
var list = document.getElementById('list');
playlist.render(list);
var play = document.getElementById('btn-play');
var stop = document.getElementById('btn-stop');
var next = document.getElementById('btn-next');

play.onclick = function () {
  playlist.play();
  playlist.render(list);
};

stop.onclick = function () {
  playlist.stop();
  playlist.render(list);
};

next.onclick = function () {
  playlist.next();
  playlist.render(list);
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW92aWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGxheWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29uZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJNZWRpYSIsInRpdGxlIiwiZHVyYXRpb24iLCJpc1BsYXlpbmciLCJwcm90b3R5cGUiLCJwbGF5Iiwic3RvcCIsIk1vdmllIiwieWVhciIsImNhbGwiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInRvSHRtbCIsIlBsYXlsaXN0Iiwic29uZ3MiLCJjdXJyZW50SW5kZXgiLCJhZGQiLCJzb25nIiwicHVzaCIsImN1cnJlbnRTb25nIiwibmV4dCIsImxlbmd0aCIsInJlbmRlciIsImxpc3QiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiU29uZyIsImFydGlzdCIsInBsYXlsaXN0Iiwic29uZzEiLCJzb25nMiIsInNvbmczIiwibW92aWUxIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uY2xpY2siXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFD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Q0FBQ3ZCLElBQVQ7QUFDQXVCLFVBQVEsQ0FBQ04sTUFBVCxDQUFnQkMsSUFBaEI7QUFDSCxDQUhEOztBQUlBSCxJQUFJLENBQUNlLE9BQUwsR0FBZSxZQUFVO0FBQ3JCUCxVQUFRLENBQUNSLElBQVQ7QUFDQVEsVUFBUSxDQUFDTixNQUFULENBQWdCQyxJQUFoQjtBQUNILENBSEQsQzs7Ozs7Ozs7Ozs7QUNoQ0EsdUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gTWVkaWEodGl0bGUsIGR1cmF0aW9uKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG59XHJcbk1lZGlhLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG59XHJcbk1lZGlhLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWRpYSIsImltcG9ydCBNZWRpYSBmcm9tICcuL21lZGlhJ1xyXG5cclxuZnVuY3Rpb24gTW92aWUodGl0bGUsIHllYXIsIGR1cmF0aW9uKSB7XHJcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xyXG4gICAgTWVkaWEuY2FsbCh0aGlzLCB0aXRsZSwgZHVyYXRpb24pXHJcbn1cclxuXHJcbk1vdmllLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVkaWEucHJvdG90eXBlKVxyXG5Nb3ZpZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNb3ZpZTtcclxuXHJcbk1vdmllLnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInJvdyBweS0zICR7dGhpcy5pc1BsYXlpbmcgPyAnY3VycmVudCc6ICcnfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPiR7dGhpcy50aXRsZX0gLSAke3RoaXMueWVhcn08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj4ke3RoaXMuZHVyYXRpb259PC9kaXY+PC9kaXY+YFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllOyIsImZ1bmN0aW9uIFBsYXlsaXN0KCkge1xyXG4gICAgdGhpcy5zb25ncyA9IFtdO1xyXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xyXG59XHJcblxyXG5QbGF5bGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHNvbmcpIHtcclxuICAgIHRoaXMuc29uZ3MucHVzaChzb25nKTtcclxufVxyXG5cclxuUGxheWxpc3QucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U29uZyA9IHRoaXMuc29uZ3NbdGhpcy5jdXJyZW50SW5kZXhdO1xyXG4gICAgY3VycmVudFNvbmcucGxheSgpO1xyXG59XHJcblxyXG5QbGF5bGlzdC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRTb25nID0gdGhpcy5zb25nc1t0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICBjdXJyZW50U29uZy5zdG9wKCk7XHJcbn1cclxuXHJcblBsYXlsaXN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY3VycmVudFNvbmcgPSB0aGlzLnNvbmdzW3RoaXMuY3VycmVudEluZGV4XTtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgIGlmKHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLnNvbmdzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMucGxheSgpO1xyXG59XHJcblxyXG5QbGF5bGlzdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICByZXR1cm4gdGhpcy5zb25ncy5mb3JFYWNoKHNvbmcgPT4ge1xyXG4gICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IHNvbmcudG9IdG1sKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdCIsImltcG9ydCBNZWRpYSBmcm9tIFwiLi9tZWRpYVwiO1xyXG5cclxuZnVuY3Rpb24gU29uZyh0aXRsZSwgYXJ0aXN0LCBkdXJhdGlvbikge1xyXG4gICAgdGhpcy5hcnRpc3QgPSBhcnRpc3Q7XHJcbiAgICBNZWRpYS5jYWxsKHRoaXMsIHRpdGxlLCBkdXJhdGlvbilcclxufVxyXG5Tb25nLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVkaWEucHJvdG90eXBlKTtcclxuU29uZy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTb25nO1xyXG5cclxuU29uZy5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxufVxyXG5Tb25nLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxufVxyXG5Tb25nLnByb3RvdHlwZS50b0h0bWwgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInJvdyBweS0zICR7dGhpcy5pc1BsYXlpbmcgPyAnY3VycmVudCc6ICcnfVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+JHt0aGlzLnRpdGxlfSAtICR7dGhpcy5hcnRpc3R9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj4ke3RoaXMuZHVyYXRpb259PC9kaXY+PC9kaXY+YFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNvbmdcclxuIiwiaW1wb3J0IFNvbmcgZnJvbSAnLi9jb21wb25lbnRzL3NvbmcnXG5pbXBvcnQgTW92aWUgZnJvbSAnLi9jb21wb25lbnRzL21vdmllJ1xuaW1wb3J0IFBsYXlsaXN0IGZyb20gJy4vY29tcG9uZW50cy9wbGF5bGlzdCdcblxuXG5jb25zdCBwbGF5bGlzdCA9IG5ldyBQbGF5bGlzdCgpO1xuY29uc3Qgc29uZzEgPSBuZXcgU29uZygnU29uZzEnLCdBcnRpc3QxJywnMTozNCcpXG5jb25zdCBzb25nMiA9IG5ldyBTb25nKCdTb25nMicsJ0FydGlzdDInLCcxOjU0JylcbmNvbnN0IHNvbmczID0gbmV3IFNvbmcoJ1NvbmczJywnQXJ0aXN0MycsJzE6MjQnKVxuXG5jb25zdCBtb3ZpZTEgPSBuZXcgTW92aWUoJ01vdmllMScsIDE5OTMsICcxOjIzOjMzJylcblxucGxheWxpc3QuYWRkKHNvbmcxKVxucGxheWxpc3QuYWRkKHNvbmcyKVxucGxheWxpc3QuYWRkKHNvbmczKVxucGxheWxpc3QuYWRkKG1vdmllMSlcblxuXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKVxucGxheWxpc3QucmVuZGVyKGxpc3QpO1xuXG5jb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1wbGF5JylcbmNvbnN0IHN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXN0b3AnKVxuY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tbmV4dCcpXG5wbGF5Lm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgIHBsYXlsaXN0LnBsYXkoKTtcbiAgICBwbGF5bGlzdC5yZW5kZXIobGlzdClcbn1cbnN0b3Aub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgcGxheWxpc3Quc3RvcCgpO1xuICAgIHBsYXlsaXN0LnJlbmRlcihsaXN0KVxufVxubmV4dC5vbmNsaWNrID0gZnVuY3Rpb24oKXtcbiAgICBwbGF5bGlzdC5uZXh0KCk7XG4gICAgcGxheWxpc3QucmVuZGVyKGxpc3QpXG59XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==