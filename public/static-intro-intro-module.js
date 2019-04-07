(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-intro-intro-module"],{

/***/ "./src/app/static/intro/intro.module.ts":
/*!**********************************************!*\
  !*** ./src/app/static/intro/intro.module.ts ***!
  \**********************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/static/intro/intro.page.ts");







var routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]
    }
];
var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());



/***/ }),

/***/ "./src/app/static/intro/intro.page.html":
/*!**********************************************!*\
  !*** ./src/app/static/intro/intro.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Introduction</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"carouselExampleInterval\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\" data-interval=\"10000\">\n        <img src=\"../../../assets/women.jpg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\" data-interval=\"2000\">\n        <img src=\"../../../assets/sos.jpg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../../assets/omw.png\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleInterval\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleInterval\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n  <h3 class=\"display-4 text-center\">\n    Girl's Safety and Security System\n  </h3>\n  <div class=\"container\">\n    <h3><b>INTRODUCTION</b></h3>\n    <p>\n      The project <b>Girl's Safety and Security System</b> is based on total protection of women from crime, threat\n      and provide secure, safe and fearless environment.\n    </p>\n    <p>\n      Today in the current global scenario, the prime question in every girl’s mind, taking into\n      account the ever rising increase of issues on women harassment in recent past, is only about\n      her safety and security. The only thought haunting every girl is when they will be able to\n      move freely on the streets even in odd hours without worrying about their security. This\n      project suggests a new perspective to use technology to protect women. The system\n      resembles a normal cloves which when activated, tracks the location of the victim using GPS\n      (Global Positioning System) and sends emergency messages using GSM (Global System for\n      Mobile communication), to three emergency contacts and the police control room. The\n      system also incorporates a screaming alarm that uses real time clock, Also pressure sensor in\n      the band will indicate whether the band is being damaged or not. In this case a red alert\n      message in a periodic update will be issued that the particular women is under attack.\n    </p>\n    <p>\n      <b>\n        We came up with the Ideas of the Emergencies in the respective so we have provided with the two special features\n        in\n        the application to enable the safety system.\n      </b>\n    </p>\n    <div class=\"card p-3\">\n      <ul>\n        <li>\n          Emergency Mode which is choosed in the scenerio when the girl is actually trapped.\n        </li>\n        <li>\n          Second one is the Radar Mode in which it keeps on sending the GPS location of the user in case where the women\n          feels unsafe.\n        </li>\n        <img src=\"../../../assets/toggle.png\" alt=\"\">\n        <li>\n          We have also integreated the Angular Google Maps to gve the location of the user.\n        </li>\n        <img src=\"../../../assets/maps.png\" alt=\"\">\n        <li>\n          We have also provided the feature of the news feed where the users can post their status and share the ideas.\n          And\n          people can like and comment in the real time.\n        </li>\n        <li>\n          We are also looking into the integration fo the mobile text to the user's contacts.\n        </li>\n      </ul>\n    </div>\n    <h4><b>\n        Why we choose to work on this project topic?\n      </b></h4>\n    <p>\n      Even when the world evolves day by day, sexual abuse against women doesn&#39;t decrease.\n      Instead it increases day by all over the world. Conventional security systems don’t provide\n      much solution to this social problem. Hence to provide a possible solution by using a this\n      project that will be cost effective and easy to use which will reduce the crime rate against\n      women. It can also be used in case of medical emergency of those women. Since this is an era\n      of wearable technology, this band concept can be used in versatile applications as well as\n      future enhancements is much possible in all dimensions of the needy world. I&#39;ve chosen this\n      project because providing a solution to one of the most important social problem will make\n      me happy as well as will make the world more peaceful than today&#39;s world.\n    </p>\n    <p>\n      The world is becoming so much more unsafe for women. Social evils like molestations,\n      dowry, crime against women. Incidents of crime against women have been increasing at an\n      alarming pace in Indian cities, most common incidents being rape, kidnapping, sexual\n      harassment and eve teasing. Security for women is still a major issue. In this age of\n      technology, mobile phone is one gadget almost everyone uses to keep in touch with family\n      and friends. All they need is a device that can be carried around easily and worn whenever\n      the woman feels unsafe. Women safety and security has emerged as a key concern for the\n      country over the recent years. In this project suggests a new perspective to use technology to\n      protect women. The system resembles a smart bell which when activated, tracks the location\n      of the victim using GPS (Global Positioning System) and sends emergency messages using\n      GSM (Global System for Mobile communication), to two emergency contacts and the police\n      control room. The system also incorporates a screaming alarm to call out for help.\n    </p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/static/intro/intro.page.scss":
/*!**********************************************!*\
  !*** ./src/app/static/intro/intro.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9pbnRyby9pbnRyby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/static/intro/intro.page.ts":
/*!********************************************!*\
  !*** ./src/app/static/intro/intro.page.ts ***!
  \********************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var IntroPage = /** @class */ (function () {
    function IntroPage(router) {
        this.router = router;
    }
    IntroPage.prototype.ngOnInit = function () {
    };
    IntroPage.prototype.goBack = function () {
        this.router.navigate(['/feed']);
    };
    IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.page.html */ "./src/app/static/intro/intro.page.html"),
            styles: [__webpack_require__(/*! ./intro.page.scss */ "./src/app/static/intro/intro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IntroPage);
    return IntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=static-intro-intro-module.js.map