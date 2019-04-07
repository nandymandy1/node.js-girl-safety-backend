(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");







var routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]
    }
];
var PostPageModule = /** @class */ (function () {
    function PostPageModule() {
    }
    PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
        })
    ], PostPageModule);
    return PostPageModule;
}());



/***/ }),

/***/ "./src/app/post/post.page.html":
/*!*************************************!*\
  !*** ./src/app/post/post.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"post != null\">\n    <ion-card-content>\n      <p>\n        {{ post.text }}\n      </p>\n      <small>\n        By {{ post.name }}\n      </small>\n    </ion-card-content>\n    <ion-row padding>\n      <ion-col>\n        <div *ngIf=\"!likeCheck(post.likes) && post\" (click)=\"likePost(post._id)\">\n          <ion-icon name='thumbs-up'></ion-icon>\n          {{ post.length }} Like\n        </div>\n        <div *ngIf=\"likeCheck(post.likes) && post\" (click)=\"unlikePost(post._id)\">\n          <ion-icon name='thumbs-up' color=\"primary\"></ion-icon>\n          {{ post.likes.length }} Like\n        </div>\n      </ion-col>\n      <ion-col text-center>\n        <div (click)=\"commentPost(post._id)\" *ngIf=\"posts\">\n          <ion-icon name=\"quote\" color=\"primary\"></ion-icon>\n          {{ post.comments.length }} Comment\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card *ngIf=\"post.comments.length\">\n    <ion-item *ngFor=\"let comment of post.comments; let i = index\">\n      <ion-avatar>\n        <img src=\"{{comment.userImage}}\">\n      </ion-avatar>\n      <ion-label>\n        <small>{{ comment.name.split(' ')[0] }}</small>\n        <p>{{ comment.text }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n<ion-footer padding>\n  <!--Comments-->\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon name=\"chatbubbles\"></ion-icon>\n      Share your views on this...\n    </ion-label>\n    <ion-textarea name=\"text\" rows=\"1\" [(ngModel)]=\"text\"></ion-textarea>\n  </ion-item>\n  <br>\n  <ion-button expand=\"block\" fill=\"solid\" size=\"small\" (click)=\"addComment()\">\n    <ion-icon name=\"send\"></ion-icon> Comment\n  </ion-button>\n\n  <!--Comments-->\n</ion-footer>"

/***/ }),

/***/ "./src/app/post/post.page.scss":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/post/post.page.ts":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/network.service */ "./src/app/services/network.service.ts");




var PostPage = /** @class */ (function () {
    function PostPage(route, util, router) {
        this.route = route;
        this.util = util;
        this.router = router;
        this.post = null;
        this.text = "";
        this.id = this.route.snapshot.paramMap.get('id');
        this.loadPost();
    }
    PostPage.prototype.ngOnInit = function () {
    };
    // Check for empty object
    PostPage.prototype.isNotEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return true;
        }
        return false;
    };
    // Fetch the post from the server
    PostPage.prototype.loadPost = function () {
        var _this = this;
        this.util.getAuthData("posts/" + this.id).subscribe(function (res) {
            console.log(res);
            _this.post = res;
        });
    };
    //like Post
    PostPage.prototype.likePost = function (id) {
        var _this = this;
        this.util.postAuthData("posts/like/" + id, {})
            .subscribe(function (res) {
            _this.post = res;
        });
    };
    //unlike Post
    PostPage.prototype.unlikePost = function (id) {
        var _this = this;
        this.util.postAuthData("posts/unlike/" + id, {})
            .subscribe(function (res) {
            _this.post = res;
        });
    };
    // check if the like is in the likes array of the post
    PostPage.prototype.likeCheck = function (likes) {
        var user_id = this.util.authUser();
        return likes.some(function (el) {
            return el.user.toString() === user_id;
        });
    };
    //comment Post
    PostPage.prototype.addComment = function () {
        var _this = this;
        if (this.text != "") {
            this.util.postAuthData("posts/comment/" + this.id, { text: this.text })
                .subscribe(function (res) {
                _this.post = res;
                _this.text = "";
            });
        }
        else {
            this.util.toastPresent('Cannot add blank comment.', 'danger');
        }
    };
    PostPage.prototype.goBack = function () {
        this.router.navigate(['/feed']);
    };
    PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.page.html */ "./src/app/post/post.page.html"),
            styles: [__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostPage);
    return PostPage;
}());



/***/ })

}]);
//# sourceMappingURL=post-post-module.js.map