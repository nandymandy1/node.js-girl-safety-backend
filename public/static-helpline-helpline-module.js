(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-helpline-helpline-module"],{

/***/ "./src/app/static/helpline/helpline.module.ts":
/*!****************************************************!*\
  !*** ./src/app/static/helpline/helpline.module.ts ***!
  \****************************************************/
/*! exports provided: HelplinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelplinePageModule", function() { return HelplinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _helpline_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpline.page */ "./src/app/static/helpline/helpline.page.ts");







var routes = [
    {
        path: '',
        component: _helpline_page__WEBPACK_IMPORTED_MODULE_6__["HelplinePage"]
    }
];
var HelplinePageModule = /** @class */ (function () {
    function HelplinePageModule() {
    }
    HelplinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_helpline_page__WEBPACK_IMPORTED_MODULE_6__["HelplinePage"]]
        })
    ], HelplinePageModule);
    return HelplinePageModule;
}());



/***/ }),

/***/ "./src/app/static/helpline/helpline.page.html":
/*!****************************************************!*\
  !*** ./src/app/static/helpline/helpline.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Helpline Numbers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"container\">\n    <p class=\"text-danger\">Toll Free Numbers for emergency help...</p>\n    <p class=\"text-muted\">\n      All women and people who may find themselves in any dangerous situation can refer to the following numbers.\n    </p>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Service Name</th>\n          <th scope=\"col\">Contact Number</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Police</td>\n          <td>100</td>\n        </tr>\n        <tr>\n          <td>Ambulance</td>\n          <td>102</td>\n        </tr>\n        <tr>\n          <td>Fire</td>\n          <td>101</td>\n        </tr>\n        <tr>\n          <td>Medical</td>\n          <td>108</td>\n        </tr>\n        <tr>\n          <td>Women Harassment</td>\n          <td>1090</td>\n        </tr>\n        <tr>\n          <td>Indian Railway Women Harassment</td>\n          <td>1512</td>\n        </tr>\n        <tr>\n          <td>Women Helpline</td>\n          <td>181</td>\n        </tr>\n        <tr>\n          <td>Child Helpline</td>\n          <td>1098</td>\n        </tr>\n        <tr>\n          <td>Any Emergency</td>\n          <td>112</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/static/helpline/helpline.page.scss":
/*!****************************************************!*\
  !*** ./src/app/static/helpline/helpline.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9oZWxwbGluZS9oZWxwbGluZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/static/helpline/helpline.page.ts":
/*!**************************************************!*\
  !*** ./src/app/static/helpline/helpline.page.ts ***!
  \**************************************************/
/*! exports provided: HelplinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelplinePage", function() { return HelplinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelplinePage = /** @class */ (function () {
    function HelplinePage() {
    }
    HelplinePage.prototype.ngOnInit = function () {
    };
    HelplinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-helpline',
            template: __webpack_require__(/*! ./helpline.page.html */ "./src/app/static/helpline/helpline.page.html"),
            styles: [__webpack_require__(/*! ./helpline.page.scss */ "./src/app/static/helpline/helpline.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelplinePage);
    return HelplinePage;
}());



/***/ })

}]);
//# sourceMappingURL=static-helpline-helpline-module.js.map