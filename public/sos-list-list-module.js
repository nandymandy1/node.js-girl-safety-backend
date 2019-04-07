(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sos-list-list-module"],{

/***/ "./src/app/sos/list/list.module.ts":
/*!*****************************************!*\
  !*** ./src/app/sos/list/list.module.ts ***!
  \*****************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/sos/list/list.page.ts");







var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/sos/list/list.page.html":
/*!*****************************************!*\
  !*** ./src/app/sos/list/list.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>SOS List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf=\"sosList.length\">\n    <ion-item *ngFor=\"let sos of sosList\" (click)=\"navigateToMap(sos)\">\n      <ion-avatar>\n        <img src=\"http://localhost:5000{{ sos.user.userImage }}\">\n      </ion-avatar>\n      <ion-label>\n        <small>{{ sos.user.name }}</small>\n        <p>Latitude: {{ sos.lat }}</p>\n        <p>Longitude: {{ sos.lng }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/sos/list/list.page.scss":
/*!*****************************************!*\
  !*** ./src/app/sos/list/list.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nvcy9saXN0L2xpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sos/list/list.page.ts":
/*!***************************************!*\
  !*** ./src/app/sos/list/list.page.ts ***!
  \***************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");





/**
 * GET The list of active SOS's
 */
var ListPage = /** @class */ (function () {
    function ListPage(util, router, navCtrl) {
        this.util = util;
        this.router = router;
        this.navCtrl = navCtrl;
        this.sosList = [];
    }
    ListPage.prototype.ngOnInit = function () {
        this.getSOSList();
    };
    ListPage.prototype.getSOSList = function () {
        var _this = this;
        this.util.getAuthData('users/radar-mode').subscribe(function (res) {
            console.log(res);
            _this.sosList = res.sos;
        });
    };
    ListPage.prototype.navigateToMap = function (sos) {
        var navObj = {
            queryParams: {
                'name': sos.name,
                'lat': sos.lat,
                'lng': sos.lng
            }
        };
        this.router.navigate(['/maps'], navObj);
    };
    ListPage.prototype.goBack = function () {
        this.router.navigate(['/feed']);
    };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/sos/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/sos/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=sos-list-list-module.js.map