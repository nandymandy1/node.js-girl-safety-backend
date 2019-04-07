(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feed-feed-module"],{

/***/ "./src/app/feed/feed.module.ts":
/*!*************************************!*\
  !*** ./src/app/feed/feed.module.ts ***!
  \*************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/feed/feed.page.ts");







// import { ModalPageModule } from '../modal/modal.module';
var routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]
    }
];
var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                // ModalPageModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());



/***/ }),

/***/ "./src/app/feed/feed.page.html":
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Feed</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openDrawer()\">\n        <ion-icon name=\"menu\"></ion-icon>\n        <ion-icon name=\"arrow-round-forward\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Enable Radar</ion-label>\n      <ion-toggle [(ngModel)]=\"radar\" (ionChange)=\"radarSystem()\"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Help Me</ion-label>\n      <ion-toggle [(ngModel)]=\"urgent\" (ionChange)=\"urgentCall()\" color=\"danger\"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <ion-card padding>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon name=\"chatbubbles\"></ion-icon>\n        Share your status...\n      </ion-label>\n      <ion-textarea name=\"text\" [(ngModel)]=\"text\"></ion-textarea>\n    </ion-item>\n    <br>\n    <ion-button expand=\"block\" fill=\"solid\" (click)=\"addPost()\">Post</ion-button>\n  </ion-card>\n  <hr>\n  <ion-card *ngFor=\"let post of posts; let i = index\">\n    <!-- <img src=\"assets/img/nin-live.png\" /> -->\n\n    <ion-card-content (click)=\"goToPost(post._id)\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-avatar class=\"feed-user-pic\">\n            <img src=\"{{post.userImage}}\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"9\">\n          <p>\n            {{ post.text }}\n          </p>\n          <small>\n            By {{ post.name }}\n          </small>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n    <ion-row padding>\n      <ion-col>\n        <div *ngIf=\"!likeCheck(post.likes)\" (click)=\"likePost(post._id, i)\">\n          <ion-icon name='thumbs-up'></ion-icon>\n          {{ post.likes.length }} Like\n        </div>\n        <div *ngIf=\"likeCheck(post.likes)\" (click)=\"unlikePost(post._id, i)\">\n          <ion-icon name='thumbs-up' color=\"primary\"></ion-icon>\n          {{ post.likes.length }} Like\n        </div>\n      </ion-col>\n      <ion-col text-center>\n        <div (click)=\"goToPost(post._id)\">\n          <ion-icon name=\"quote\" color=\"primary\"></ion-icon>\n          {{ post.comments.length }} Comment\n        </div>\n      </ion-col>\n      <ion-col text-center *ngIf=\"user_id == post.user\">\n        <div (click)=\"deletePost(post._id, i)\">\n          <ion-icon name=\"trash\" color=\"danger\"></ion-icon>\n          Delete\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/feed/feed.page.scss":
/*!*************************************!*\
  !*** ./src/app/feed/feed.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-user-pic {\n  height: 40px;\n  width: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXJlbmRyYW1hdXJ5YS93ZWJfdHV0b3JpYWxzL0RlZXBhL2Zyb250ZW5kL3NyYy9hcHAvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQtdXNlci1waWMge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/feed/feed.page.ts":
/*!***********************************!*\
  !*** ./src/app/feed/feed.page.ts ***!
  \***********************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");






var FeedPage = /** @class */ (function () {
    function FeedPage(util, navCtrl, modalCtrl, geoCords) {
        this.util = util;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.geoCords = geoCords;
        this.posts = [];
        this.text = "";
        this.urgent = false;
        this.radar = false;
        this.status = 0;
    }
    FeedPage.prototype.ngOnInit = function () {
        this.loadPosts();
    };
    FeedPage.prototype.ionViewWillEnter = function () {
        this.loadPosts();
        // get the user radar status
        this.getRadarStatus();
    };
    FeedPage.prototype.getRadarStatus = function () {
        var _this = this;
        // write the logic for the radar status
        this.util.getAuthData('users/radar-status').subscribe(function (res) {
            console.log(res.active);
            if (res.active != null) {
                if (res.active) {
                    _this.status = 1;
                    _this.radar = res.active;
                }
            }
        });
    };
    // Enable the radar methods
    FeedPage.prototype.radarSystem = function () {
        if (this.status == 1) {
            this.status = this.status + 1;
        }
        else {
            if (this.radar) {
                this.enableRadar();
            }
            else {
                this.disableRadar();
            }
        }
    };
    // Enable the urgent mode
    FeedPage.prototype.urgentCall = function () {
        var _this = this;
        this.geoCords.getCurrentPosition().then(function (res) {
            var data = {
                lat: res.coords.latitude,
                lng: res.coords.longitude
            };
            _this.util.postAuthData('users/urgent-mode', data).subscribe(function (res) {
                _this.util.toastPresent(res.message, 'success');
                console.log(res);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    FeedPage.prototype.loadPosts = function () {
        var _this = this;
        this.user_id = this.util.getuserId();
        this.util.getData('posts').subscribe(function (res) {
            _this.posts = res;
        });
    };
    //like Post
    FeedPage.prototype.likePost = function (id, i) {
        var _this = this;
        this.util.postAuthData("posts/like/" + id, {})
            .subscribe(function (res) {
            _this.posts.splice(i, 1, res);
        });
    };
    //unlike Post
    FeedPage.prototype.unlikePost = function (id, i) {
        var _this = this;
        this.util.postAuthData("posts/unlike/" + id, {})
            .subscribe(function (res) {
            _this.posts.splice(i, 1, res);
        });
    };
    // check if the like is in the likes array of the post
    FeedPage.prototype.likeCheck = function (likes) {
        var user_id = this.util.authUser();
        return likes.some(function (el) {
            return el.user.toString() === user_id;
        });
    };
    // comment Post
    FeedPage.prototype.commentPost = function (id, i, comments) {
        this.presentModal(id, i, comments);
    };
    FeedPage.prototype.presentModal = function (id, i, comments) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__["ModalPage"],
                            componentProps: { value: id, index: i }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.loadPosts();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // Post The Text
    FeedPage.prototype.addPost = function () {
        var _this = this;
        if (this.text != "") {
            // then post the data to the server
            var newPost = {
                text: this.text
            };
            this.util.postAuthData('posts', newPost).subscribe(function (res) {
                _this.posts.unshift(res);
            });
        }
        else {
            // show the error
            this.util.toastPresent('Please enter the post.', 'danger');
        }
    };
    // Navigate to the particular posts page with id 
    FeedPage.prototype.goToPost = function (id) {
        this.navCtrl.navigateForward("/post/" + id);
    };
    FeedPage.prototype.getUsername = function () {
        return this.util.getusername();
    };
    FeedPage.prototype.deletePost = function (id, i) {
        var _this = this;
        this.util.deleteAuthData("posts/" + id).subscribe(function (res) {
            if (res.success) {
                _this.util.toastPresent('Post deleted successfully.', 'success');
                _this.posts = _this.posts.filter(function (post) { return post._id != id; });
            }
        });
    };
    // To Enable the radar system
    FeedPage.prototype.enableRadar = function () {
        var _this = this;
        this.geoCords.getCurrentPosition().then(function (res) {
            var data = {
                lat: res.coords.latitude,
                lng: res.coords.longitude
            };
            _this.util.postAuthData('users/radar-mode-enable', data).subscribe(function (res) {
                _this.util.toastPresent(res.message, 'success');
                console.log(res);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    // To Disable the radar system
    FeedPage.prototype.disableRadar = function () {
        var _this = this;
        if (!this.radar) {
            this.util.postAuthData('users/radar-disable', {}).subscribe(function (res) {
                _this.util.toastPresent('Radar turned off.', 'success');
            });
        }
    };
    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.page.html */ "./src/app/feed/feed.page.html"),
            styles: [__webpack_require__(/*! ./feed.page.scss */ "./src/app/feed/feed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])
    ], FeedPage);
    return FeedPage;
}());



/***/ }),

/***/ "./src/app/modal/modal.page.html":
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Comments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"comments.length\">\n    <ion-item *ngFor=\"let comment of comments; let i = index\">\n      <ion-avatar>\n        <img src=\"http://localhost:5000/{{comment.userImage}}\">\n      </ion-avatar>\n      <ion-label>\n        <small>{{ comment.name.split(' ')[0] }}</small>\n        <p>{{ comment.text }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n<ion-footer padding>\n  <!--Comments-->\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon name=\"chatbubbles\"></ion-icon>\n      Share your views on this...\n    </ion-label>\n    <ion-textarea name=\"text\" rows=\"1\" [(ngModel)]=\"text\"></ion-textarea>\n  </ion-item>\n  <br>\n  <ion-button expand=\"block\" fill=\"solid\" size=\"small\" (click)=\"addComment()\">\n    <ion-icon name=\"send\"></ion-icon> Comment\n  </ion-button>\n\n  <!--Comments-->\n</ion-footer>"

/***/ }),

/***/ "./src/app/modal/modal.page.scss":
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modal/modal.page.ts":
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/network.service */ "./src/app/services/network.service.ts");





var ModalPage = /** @class */ (function () {
    function ModalPage(modalCtrl, router, util) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.util = util;
        this.comments = [];
        this.text = "";
    }
    ModalPage.prototype.ngOnInit = function () {
        if (this.value == undefined) {
            this.router.navigate(['/feed']);
        }
    };
    //comment Post
    ModalPage.prototype.addComment = function () {
        var _this = this;
        if (this.text != "") {
            this.util.postAuthData("posts/comment/" + this.value, { text: this.text })
                .subscribe(function (res) {
                _this.comments = res.comments;
                _this.text = "";
            });
        }
        else {
            this.util.toastPresent('Cannot add blank comment.', 'danger');
        }
    };
    // go back to feed page
    ModalPage.prototype.goBack = function () {
        this.modalCtrl.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalPage.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ModalPage.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalPage.prototype, "comments", void 0);
    ModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.page.html */ "./src/app/modal/modal.page.html"),
            styles: [__webpack_require__(/*! ./modal.page.scss */ "./src/app/modal/modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkProvider"]])
    ], ModalPage);
    return ModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=feed-feed-module.js.map