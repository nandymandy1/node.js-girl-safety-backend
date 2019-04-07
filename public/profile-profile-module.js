(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{ user.username }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-avatar class=\"profile-pic\" (click)=\"changeImage()\">\n        <img src=\"{{ imagePath }}\">\n      </ion-avatar>\n      <br>\n      <ion-card-title style=\"text-align:center;\">{{ user.username }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-icon name=\"person\"></ion-icon> &nbsp;&nbsp;{{ user.name }}\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"mail\"></ion-icon> &nbsp;&nbsp;{{ user.email }}\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"call\"></ion-icon> &nbsp;&nbsp;{{ user.phone }}\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"calendar\"></ion-icon> &nbsp;&nbsp;{{ user.date | date: 'dd-MM-yyyy'}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"showAddContact()\">\n    <ion-fab-button>\n      <ion-icon name=\"add-circle\" color=\"white\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div *ngIf=\"showFooter\">\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon name=\"contact\"></ion-icon>\n        Name\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"contactName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon name=\"call\"></ion-icon>\n        Phone Number\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"contactNumber\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-button expand=\"block\" fill=\"solid\" size=\"small\" (click)=\"addContact()\">\n      <ion-icon name=\"send\"></ion-icon> Add Contact\n    </ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n  height: 200px;\n  width: 200px;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXJlbmRyYW1hdXJ5YS93ZWJfdHV0b3JpYWxzL0RlZXBhL2Zyb250ZW5kL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXBpYyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/network.service */ "./src/app/services/network.service.ts");





// import { PopoverPage } from '../popover/popover.page';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(popCtrl, util, router) {
        this.popCtrl = popCtrl;
        this.util = util;
        this.router = router;
        this.user = {};
        this.showFooter = false;
        this.imagePath = '';
        this.contactNumber = "";
        this.contactName = "";
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfilePage.prototype.loadProfile = function () {
        var _this = this;
        this.util.getAuthData('users/profile').subscribe(function (res) {
            _this.user = res;
            console.log(_this.user);
            _this.imagePath = "http://localhost:5000" + res.userImage;
        });
    };
    ProfilePage.prototype.goBack = function () {
        this.router.navigate(['/feed']);
    };
    ProfilePage.prototype.showAddContact = function () {
        this.showFooter = !this.showFooter;
    };
    ProfilePage.prototype.addContact = function () {
        var _this = this;
        if (this.contactName != "" && this.contactNumber != "") {
            var contact = {
                name: this.contactName,
                phone: this.contactNumber
            };
            this.util.postAuthData('users/add-contacts', contact).subscribe(function (res) {
                console.log(res);
                if (res.success) {
                    _this.util.toastPresent(res.message, 'success');
                    _this.contactName = "";
                    _this.showFooter = false;
                    _this.contactNumber = "";
                }
                else {
                    _this.util.toastPresent("Unable to save the contact due to some techincal error.", 'danger');
                }
            });
        }
        else {
            this.util.toastPresent("Please Fill in all the credentials.", 'danger');
        }
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map