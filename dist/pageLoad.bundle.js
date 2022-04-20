/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/pageLoadHome.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
    
    const descriptionText = "Here at Kickin' Chicken, we prepare all food with a desire to serve our beloved customers with traditional and innovative tastes. We put a spin on our menu. Our chicken is hand-breaded, made to order, and never frozen. A good combination of worldly sides made in-house sauces and unique combinations of drinks will suppress your appetite. Our vision is as simple as our menu: quality, freshness, and tastiness.";
    
    const content = document.getElementById("content");
    
    const title1 = document.createElement("h2");
    title1.innerText = "FAMILY OWNED";
    
    const title2 = document.createElement("h3");
    title2.innerText = "FUSION OF FLAVORS";
    
    const title3 = document.createElement("h2");
    title3.innerText = "FRESHLY MADE";

    const description = document.createElement("p");
    description.innerText = descriptionText;
    description.classList.add("description");

    const reserveButton = document.createElement("button");
    reserveButton.innerText = "RESERVE NOW";

    content.appendChild(title1)
    content.appendChild(title2)
    content.appendChild(title3)
    content.appendChild(description)
    content.appendChild(reserveButton)
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9wYWdlTG9hZEhvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBcIkhlcmUgYXQgS2lja2luJyBDaGlja2VuLCB3ZSBwcmVwYXJlIGFsbCBmb29kIHdpdGggYSBkZXNpcmUgdG8gc2VydmUgb3VyIGJlbG92ZWQgY3VzdG9tZXJzIHdpdGggdHJhZGl0aW9uYWwgYW5kIGlubm92YXRpdmUgdGFzdGVzLiBXZSBwdXQgYSBzcGluIG9uIG91ciBtZW51LiBPdXIgY2hpY2tlbiBpcyBoYW5kLWJyZWFkZWQsIG1hZGUgdG8gb3JkZXIsIGFuZCBuZXZlciBmcm96ZW4uIEEgZ29vZCBjb21iaW5hdGlvbiBvZiB3b3JsZGx5IHNpZGVzIG1hZGUgaW4taG91c2Ugc2F1Y2VzIGFuZCB1bmlxdWUgY29tYmluYXRpb25zIG9mIGRyaW5rcyB3aWxsIHN1cHByZXNzIHlvdXIgYXBwZXRpdGUuIE91ciB2aXNpb24gaXMgYXMgc2ltcGxlIGFzIG91ciBtZW51OiBxdWFsaXR5LCBmcmVzaG5lc3MsIGFuZCB0YXN0aW5lc3MuXCI7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUxLmlubmVyVGV4dCA9IFwiRkFNSUxZIE9XTkVEXCI7XG4gICAgXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRpdGxlMi5pbm5lclRleHQgPSBcIkZVU0lPTiBPRiBGTEFWT1JTXCI7XG4gICAgXG4gICAgY29uc3QgdGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlMy5pbm5lclRleHQgPSBcIkZSRVNITFkgTUFERVwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvblRleHQ7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29uc3QgcmVzZXJ2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5pbm5lclRleHQgPSBcIlJFU0VSVkUgTk9XXCI7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlMSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlMilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlMylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzZXJ2ZUJ1dHRvbilcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==