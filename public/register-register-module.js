(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Register\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input name=\"name\" [(ngModel)]=\"name\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input name=\"email\" [(ngModel)]=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input name=\"username\" [(ngModel)]=\"username\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Adhar Card Number</ion-label>\n          <ion-input name=\"adhar\" [(ngModel)]=\"adhar\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Phone Number</ion-label>\n          <ion-input name=\"phone\" [(ngModel)]=\"phone\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" name=\"passwword\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Confirm Password</ion-label>\n          <ion-input type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-textarea name=\"address\" [(ngModel)]=\"address\"></ion-textarea>\n        </ion-item>\n        <br>\n        <ion-button expand=\"block\" fill=\"solid\" (click)=\"registerUser()\">Register</ion-button>\n        <ion-button expand=\"block\" fill=\"solid\" (click)=\"goToLogin()\">Already Have Account</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(util, navCtrl, router) {
        this.util = util;
        this.navCtrl = navCtrl;
        this.router = router;
        this.name = "";
        this.username = "";
        this.password = "";
        this.confirm_password = "";
        this.address = "";
        this.adhar = "";
        this.phone = "";
        this.email = "";
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        if (this.validateUser()) {
            if (this.password == this.confirm_password) {
                // Register the user to the database
                var newUser = {
                    username: this.username,
                    password: this.password,
                    adhar: this.adhar,
                    name: this.name,
                    email: this.email,
                    address: this.address,
                    phone: this.phone
                };
                this.util.postData('users/register', newUser).subscribe(function (res) {
                    if (res.success) {
                        _this.util.toastPresent(res.message, 'success');
                        _this.navCtrl.navigateForward('/home');
                    }
                    else {
                        _this.util.toastPresent('Unable to register the user.', 'danger');
                    }
                });
            }
            else {
                // show alert
                this.util.toastPresent('Passwords do not match.', 'danger');
            }
        }
        else {
            // show alert
            this.util.toastPresent('Please fill in all the details.', 'danger');
        }
    };
    RegisterPage.prototype.validateUser = function () {
        if (this.username != "" &&
            this.password != "" &&
            this.adhar != "" &&
            this.email != "" &&
            this.phone != "" &&
            this.address != "" &&
            this.name != "") {
            return true;
        }
        else {
            return false;
        }
    };
    RegisterPage.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map