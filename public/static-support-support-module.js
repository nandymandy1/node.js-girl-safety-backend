(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-support-support-module"],{

/***/ "./src/app/static/support/support.module.ts":
/*!**************************************************!*\
  !*** ./src/app/static/support/support.module.ts ***!
  \**************************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/static/support/support.page.ts");







var routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]
    }
];
var SupportPageModule = /** @class */ (function () {
    function SupportPageModule() {
    }
    SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
        })
    ], SupportPageModule);
    return SupportPageModule;
}());



/***/ }),

/***/ "./src/app/static/support/support.page.html":
/*!**************************************************!*\
  !*** ./src/app/static/support/support.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Support Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  You can support the rape victims and rehabilate thier lives by donating small ammount of charity via. demand drafts,\n  cheques, paywallets, NEFT.\n  <br>\n\n  <blockquote class=\"blockquote text-success\">\n    <p>\"Share the joy of satisfaction.\"</p>\n  </blockquote>\n\n  <p><span class=\"text-muted\">Bank Account Number:</span> 688602010000722</p>\n  <p><span class=\"text-muted\">IFSC Code:</span> UBIN0568864</p>\n  OR\n  <p><span class=\"text-muted\">BHIM UPI:</span> +916360535414@ybl</p>\n\n  <p>\n    <span class=\"text-muted\">Contact:</span> +91-6393262860\n  </p>\n  <p>\n    <span class=\"text-muted\">Address:</span> #538KA/1057, Triveni Nagar 3rd, Lucknow\n  </p>\n</ion-content>"

/***/ }),

/***/ "./src/app/static/support/support.page.scss":
/*!**************************************************!*\
  !*** ./src/app/static/support/support.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9zdXBwb3J0L3N1cHBvcnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/static/support/support.page.ts":
/*!************************************************!*\
  !*** ./src/app/static/support/support.page.ts ***!
  \************************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SupportPage = /** @class */ (function () {
    function SupportPage(router) {
        this.router = router;
    }
    SupportPage.prototype.ngOnInit = function () {
    };
    SupportPage.prototype.goBack = function () {
        this.router.navigate(['/feed']);
    };
    SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.page.html */ "./src/app/static/support/support.page.html"),
            styles: [__webpack_require__(/*! ./support.page.scss */ "./src/app/static/support/support.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SupportPage);
    return SupportPage;
}());



/***/ })

}]);
//# sourceMappingURL=static-support-support-module.js.map