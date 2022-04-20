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
  !*** ./src/pageLoadMenu.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
    const content = document.getElementById("content");
    
    const title = document.createElement('h2');
    title.innerText = "MENU SPECIALTIES";
    title.classList.add("menuTitle");

    const item1 = document.createElement("h3")
    item1.innerText = "King Ranch Chicken Casserole";
    const price1 = document.createElement("h3");
    price1.innerText = "$14.99";

    const item2 = document.createElement("h3")
    item2.innerText = "Chicken Cordon Bleu";
    const price2 = document.createElement("h3");
    price2.innerText = "$13.99";

    const item3 = document.createElement("h3")
    item3.innerText = "Kickin Chicken Parmesan";
    const price3 = document.createElement("h3");
    price3.innerText = "$12.99";
    
    const item4 = document.createElement("h3")
    item4.innerText = "Stir-Fried Chicken Salad";
    const price4 = document.createElement("h3");
    price4.innerText = "$11.99";

    const item5 = document.createElement("h3")
    item5.innerText = "Spicy Crispy Chicken Sandwhich";
    const price5 = document.createElement("h3");
    price5.innerText = "$11.99";

    const item6 = document.createElement("h3")
    item6.innerText = "Rotiserie Chicken";
    const price6 = document.createElement("h3");
    price6.innerText = "$20.99";

    const item7 = document.createElement("h3")
    item7.innerText = "Crispy Fried Chicken";
    const price7 = document.createElement("h3");
    price7.innerText = "$14.99";

    const reserveButton = document.createElement("button");
    reserveButton.innerText = "RESERVE NOW";

    content.appendChild(title)
    content.appendChild(item1)
    content.appendChild(price1)
    content.appendChild(item2)
    content.appendChild(price2)
    content.appendChild(item3)
    content.appendChild(price3)
    content.appendChild(item4)
    content.appendChild(price4)
    content.appendChild(item5)
    content.appendChild(price5)
    content.appendChild(item6)
    content.appendChild(price6)
    content.appendChild(item7)
    content.appendChild(price7)
    content.appendChild(reserveButton)
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL3BhZ2VMb2FkTWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiTUVOVSBTUEVDSUFMVElFU1wiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51VGl0bGVcIik7XG5cbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIGl0ZW0xLmlubmVyVGV4dCA9IFwiS2luZyBSYW5jaCBDaGlja2VuIENhc3Nlcm9sZVwiO1xuICAgIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcmljZTEuaW5uZXJUZXh0ID0gXCIkMTQuOTlcIjtcblxuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgaXRlbTIuaW5uZXJUZXh0ID0gXCJDaGlja2VuIENvcmRvbiBCbGV1XCI7XG4gICAgY29uc3QgcHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByaWNlMi5pbm5lclRleHQgPSBcIiQxMy45OVwiO1xuXG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBpdGVtMy5pbm5lclRleHQgPSBcIktpY2tpbiBDaGlja2VuIFBhcm1lc2FuXCI7XG4gICAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByaWNlMy5pbm5lclRleHQgPSBcIiQxMi45OVwiO1xuICAgIFxuICAgIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgaXRlbTQuaW5uZXJUZXh0ID0gXCJTdGlyLUZyaWVkIENoaWNrZW4gU2FsYWRcIjtcbiAgICBjb25zdCBwcmljZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJpY2U0LmlubmVyVGV4dCA9IFwiJDExLjk5XCI7XG5cbiAgICBjb25zdCBpdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIGl0ZW01LmlubmVyVGV4dCA9IFwiU3BpY3kgQ3Jpc3B5IENoaWNrZW4gU2FuZHdoaWNoXCI7XG4gICAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByaWNlNS5pbm5lclRleHQgPSBcIiQxMS45OVwiO1xuXG4gICAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBpdGVtNi5pbm5lclRleHQgPSBcIlJvdGlzZXJpZSBDaGlja2VuXCI7XG4gICAgY29uc3QgcHJpY2U2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByaWNlNi5pbm5lclRleHQgPSBcIiQyMC45OVwiO1xuXG4gICAgY29uc3QgaXRlbTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBpdGVtNy5pbm5lclRleHQgPSBcIkNyaXNweSBGcmllZCBDaGlja2VuXCI7XG4gICAgY29uc3QgcHJpY2U3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByaWNlNy5pbm5lclRleHQgPSBcIiQxNC45OVwiO1xuXG4gICAgY29uc3QgcmVzZXJ2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5pbm5lclRleHQgPSBcIlJFU0VSVkUgTk9XXCI7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTEpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcmljZTEpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtMilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByaWNlMilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0zKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpY2UzKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTQpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcmljZTQpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtNSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByaWNlNSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW02KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpY2U2KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcmljZTcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlQnV0dG9uKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==