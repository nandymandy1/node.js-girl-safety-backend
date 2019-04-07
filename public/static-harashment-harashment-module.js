(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-harashment-harashment-module"],{

/***/ "./src/app/static/harashment/harashment.module.ts":
/*!********************************************************!*\
  !*** ./src/app/static/harashment/harashment.module.ts ***!
  \********************************************************/
/*! exports provided: HarashmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarashmentPageModule", function() { return HarashmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _harashment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./harashment.page */ "./src/app/static/harashment/harashment.page.ts");







var routes = [
    {
        path: '',
        component: _harashment_page__WEBPACK_IMPORTED_MODULE_6__["HarashmentPage"]
    }
];
var HarashmentPageModule = /** @class */ (function () {
    function HarashmentPageModule() {
    }
    HarashmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_harashment_page__WEBPACK_IMPORTED_MODULE_6__["HarashmentPage"]]
        })
    ], HarashmentPageModule);
    return HarashmentPageModule;
}());



/***/ }),

/***/ "./src/app/static/harashment/harashment.page.html":
/*!********************************************************!*\
  !*** ./src/app/static/harashment/harashment.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Rape Victims</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container mt-3\">\n    <ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\"\n          aria-controls=\"pills-home\" aria-selected=\"true\">Information</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\"\n          aria-controls=\"pills-profile\" aria-selected=\"false\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\"\n          aria-controls=\"pills-contact\" aria-selected=\"false\">Success Story</a>\n      </li>\n    </ul>\n    <div class=\"tab-content\" id=\"pills-tabContent\">\n      <section class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <img class=\"mx-auto\" src=\"../../../assets/quote.png\" alt=\"\">\n          </div>\n          <div class=\"col-12\">\n            If you have been sexually assaulted, whether as an adult or a young person, it is\n            important to remember that it wasn&#39;t your fault. Sexual violence is a crime, no\n            matter who commits it or where it happens. Don&#39;t be afraid to get help\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-12 mt-3\">\n            <div class=\"card\">\n              <img src=\"../../../assets/alice.jpg\" height=\"250px\" class=\"card-img-top\" alt=\"\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Alice Sebold</h5>\n                <p class=\"card-text\">“You save yourself or you remain unsaved.”</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-12 mt-3\">\n            <div class=\"card\">\n              <img src=\"../../../assets/robert.jpg\" height=\"250px\" class=\"card-img-top\" alt=\"\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Robert Uttaro</h5>\n                <p class=\"card-text\">“But no matter how much evil I see, I think it’s important for\n                  everyone to understand that there is much more light than\n                  darkness.”</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-12 mt-3\">\n            <div class=\"card\">\n              <img src=\"../../../assets/ursula.jpg\" height=\"250px\" class=\"card-img-top\" alt=\"...\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Ursula K. Le Guin</h5>\n                <p class=\"card-text\">“The power of the harasser, the abuser, the rapist depends above\n                  all on the silence of women.”</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <section class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n        <h4 class=\"display-4\">ABOUT US...</h4>\n        <h1 class=\"text-primary\">Core Beliefs</h1>\n        <ul class=\"list-group\">\n          <li class=\"mb-1 list-group-item\">\n            <i>We believe that the rape and sexual violence of children and adults is endemic\n              within our society.</i>\n          </li>\n          <li class=\"mb-1 list-group-item\">\n            <i>We challenge society to acknowledge this reality and acknowledge our individual\n              and collective responsibility for it.</i>\n          </li>\n          <li class=\"mb-1 list-group-item\">\n            <i>We believe that rape, sexual violence &amp; abuse of women or girls or men or boys\n              is preventable.</i>\n          </li>\n          <li class=\"mb-1 list-group-item\">\n            <i>We are committed in empowering survivors and their supporters to work through\n              and beyond the experience of abuse.</i>\n          </li>\n        </ul>\n        <h1 class=\"text-primary\">Core Aims</h1>\n        <ul class=\"list-group\">\n          <li class=\"mb-1 list-group-item\">\n            <i>To support and empower survivors of rape, sexual violence,acid attacks and/or\n              childhood sexual abuse</i>\n          </li>\n          <li class=\"mb-1 list-group-item\">\n            <i>Providing a collective voice and peer networking for members.</i>\n          </li>\n          <li class=\"mb-1 list-group-item\">\n            <i>Raising awareness about sexual abuse and/or rape and its effects on survivors,\n              their supporters and society at higher level</i>\n          </li>\n          <li class=\"mb-1 list-group-item\">\n            <i>Informing acknowledgement of, and effective responses to, rape and sexual\n              abuse on a local, regional and national level</i>\n          </li>\n        </ul>\n      </section>\n      <section class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n        <div class=\"row\">\n          <img src=\"../../../assets/story.png\" alt=\"\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p>\n              From putting the perpetrator behind bars to helping victims of commercial sex\n              exploitation and rape, these 5 amazing women have risen from the ashes\n              stronger than ever. Know more about these inspiring women who are a\n              motivation to all of us.They are not “rape victims”, not even just “survivors”, but\n              “winners”, who are an inspiration to us all and who restore our faith in woman\n              power.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 mt-3\">\n            <div class=\"card card-laws\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-2\">\n                  <img src=\"../../../assets/sunita.png\" alt=\"\">\n                  <p class=\"text-primary\">&nbsp;&nbsp;Dr.Sunitha Krishnan</p>\n                </div>\n                <div class=\"col-sm-12 col-md-10 card-body\">\n                  Krishnan was a social worker since childhood. She would teach dance to\n                  mentally challenged children when she herself was just eight years old.\n                  She was gang-raped when she was 12. The horrific incident left her angry,\n                  but instead of lamenting over her fate, she started an anti-trafficking\n                  organization Prajwala which works with the police and other law\n                  enforcement agencies to fight commercial sexual exploitation. Through her\n                  organization, she is actively rescuing and rehabilitating victims of sex-\n                  trafficking into society. Krishnan was also recently awarded the prestigious\n                  2014 Nelson Mandela-Graca Machel Innovation Awards on November 24\n                  at Johannesburg, South Africa. She is the first Indian to receive this\n                  honour. Her inspiring story is a motivation to all of us, especially those who\n                  are still fighting the horrific memories of rape.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card card-laws\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-2\">\n                  <img src=\"../../../assets/jordan.png\" alt=\"\">\n                  <p class=\"text-primary\">&nbsp;&nbsp;Suzette Jordan</p>\n                </div>\n                <div class=\"col-sm-12 col-md-10 card-body\">\n                  Jordan has come a long way from being labeled the “Park Street rape\n                  victim” to “Suzette Jordan, the survivor”. She still remembers the horrifying\n                  night when she was gang-raped in a moving car in Kolkata. A single\n                  mother, instead of empathy she received criticism from the society who\n                  called her “characterless” and also accused her of probably being involved\n                  in prostitution! But one day Jordan thought to put an end to it and revealed\n                  her identity to fight against the blames and the crime. “My children gave\n                  me the strength to fight,” she said in a television show. “I want to instill in\n                  them the feeling of being fearless. I want to show them that even in the\n                  worst situation, being strong is the only way,” she says. Today she is living\n                  a dignified life and demanding the justice which she deserves. She also\n                  went outand supported the family of another college girl who was brutally\n                  raped and murdered.\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card card-laws\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-2\">\n                  <img src=\"../../../assets/sita.png\" alt=\"\">\n                  <p class=\"text-primary\">&nbsp;&nbsp;Sita</p>\n                </div>\n                <div class=\"col-sm-12 col-md-10 card-body\">\n                  The 20-year old construction labourer Sita was kidnapped, gang-raped and\n                  thrown on a railway track to die by a co-worker she had a small fight with.\n                  She became physically disabled and was abandoned by her own mother\n                  because she was no longer of any “use” to her in earning money. Instead\n                  of getting defeated by this harsh reality, Sita not only sent her violators to\n                  jail but also rebuilt her own life from scratch. Wheelchair ridden Sita did not\n                  shy away from filing a complaint against her mother too, who was abetting\n                  the criminals against her daughter. To give a new shape to her life, she\n                  joined a bridge school run by Prayas NGO, and with the help of her\n                  immense passion and will power, she managed to secure admission in\n                  class eight at the government-run Kasturba Gandhi Balika Vidyalaya\n                  (KGBV). Sita is an inspiration to all of us and proves that nothing can beat\n                  a strong willpower.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/static/harashment/harashment.page.scss":
/*!********************************************************!*\
  !*** ./src/app/static/harashment/harashment.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border: solid 3px #ccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXJlbmRyYW1hdXJ5YS93ZWJfdHV0b3JpYWxzL0RlZXBhL2Zyb250ZW5kL3NyYy9hcHAvc3RhdGljL2hhcmFzaG1lbnQvaGFyYXNobWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0YXRpYy9oYXJhc2htZW50L2hhcmFzaG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJvcmRlcjogc29saWQgM3B4ICNjY2M7XG59Il19 */"

/***/ }),

/***/ "./src/app/static/harashment/harashment.page.ts":
/*!******************************************************!*\
  !*** ./src/app/static/harashment/harashment.page.ts ***!
  \******************************************************/
/*! exports provided: HarashmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HarashmentPage", function() { return HarashmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HarashmentPage = /** @class */ (function () {
    function HarashmentPage() {
    }
    HarashmentPage.prototype.ngOnInit = function () {
    };
    HarashmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-harashment',
            template: __webpack_require__(/*! ./harashment.page.html */ "./src/app/static/harashment/harashment.page.html"),
            styles: [__webpack_require__(/*! ./harashment.page.scss */ "./src/app/static/harashment/harashment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HarashmentPage);
    return HarashmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=static-harashment-harashment-module.js.map