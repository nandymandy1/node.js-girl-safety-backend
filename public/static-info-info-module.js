(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static-info-info-module"],{

/***/ "./src/app/static/info/info.module.ts":
/*!********************************************!*\
  !*** ./src/app/static/info/info.module.ts ***!
  \********************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/static/info/info.page.ts");







var routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]
    }
];
var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
        })
    ], InfoPageModule);
    return InfoPageModule;
}());



/***/ }),

/***/ "./src/app/static/info/info.page.html":
/*!********************************************!*\
  !*** ./src/app/static/info/info.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Domestic Voilence</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"container\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"info-tab\" data-toggle=\"tab\" href=\"#info\" role=\"tab\" aria-controls=\"info\"\n          aria-selected=\"true\">Information</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"harassment-tab\" data-toggle=\"tab\" href=\"#harassment\" role=\"tab\"\n          aria-controls=\"harassment\" aria-selected=\"false\">Harassment</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"violence-tab\" data-toggle=\"tab\" href=\"#violence\" role=\"tab\" aria-controls=\"violence\"\n          aria-selected=\"false\">Domestic Violence</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"rights-tab\" data-toggle=\"tab\" href=\"#rights\" role=\"tab\" aria-controls=\"rights\"\n          aria-selected=\"false\">Rights</a>\n      </li>\n    </ul>\n    <br>\n    <div class=\"tab-content\" id=\"myTabContent\">\n      <section class=\"tab-pane fade show active\" id=\"info\" role=\"tabpanel\" aria-labelledby=\"info-tab\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12\">\n            <img src=\"../../../assets/justice.jpg\" alt=\"\">\n          </div>\n          <div class=\"col-md-6 col-sm-12\">\n            <h1 class=\"display-4\">Complaint Box</h1>\n            <p>\n              <span class=\"text-success\">\n                Speak up website\n              </span>\n              for women , here women can register complaints under various heads such as\n              <u>\n                Acid attack, attempt to rape, bigamy, cyber crime, desertion, divorce, maintenance, dowry\n                death, dowry harassment, female infanticide, harassment at workplace, molestation, outraging\n                modesty of women, sexual harassment at workplace, etc.\n              </u>\n              It has an online complaint registration\n              system available on this website.\n              <span class=\"text-danger\">\n                If you don&#39;t speak up for yourself no one will. Speak up, make\n                your voice matter. Never one to shy away from standing up for issues that matter.\n              </span>\n            </p>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-12\">\n            <div class=\"card\">\n              <div class=\"card-header bg-primary text-white\">\n                <b>KNOW YOUR RIGHTS:LAWS THAT PROTECT YOU WOMENS</b>\n              </div>\n              <div class=\"card-body\">\n                Crimes against women occur every minute in India. Women are not safe, whether it is\n                in their houses, public places or at the workplace. Your safety in your hands sounds like a clichéd\n                adage\n                to\n                repeat. Given the number of crimes that are committed against women, it is pertinent that women are\n                aware\n                about the laws that are in place to protect them.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-md-4 col-sm-12 mt-2\">\n            <img src=\"../../../assets/mess.jpg\" height=\"234px\" alt=\"\">\n          </div>\n          <div class=\"col-md-4 col-sm-12 mt-2\">\n            <img src=\"../../../assets/work-place.jpg\" alt=\"\">\n          </div>\n          <div class=\"col-md-4 col-sm-12 mt-2\">\n            <img src=\"../../../assets/meetoo.jpg\" height=\"234px\" alt=\"\">\n          </div>\n        </div>\n      </section>\n      <section class=\"tab-pane fade\" id=\"harassment\" role=\"tabpanel\" aria-labelledby=\"harassment-tab\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12\">\n            <img src=\"../../../assets/harass.jpg\" alt=\"\">\n            <h4 class=\"text-success\">\n              <u>Examples of Harassment</u>\n            </h4>\n            <ul>\n              <li>A colleague repeatedly makes fun of your hijab.</li>\n              <li>A manager regularly makes inappropriate comments about your physical\n                appearance.</li>\n              <li>An employee threatens your safety following a heated discussion.</li>\n              <li>A supervisor rubs your shoulders despite your repeated objections.</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-sm-12\">\n            <h1 class=\"display-4\">What is Harassment?</h1>\n            <p>\n              <span class=\"text-danger\">\n                Harassment\n              </span>\n              is a form of discrimination. It includes any unwanted physical or verbal behaviour that offends\n              or humiliates you. Generally, harassment is a behaviour that persists over time. Serious one-time\n              incidents can also sometimes be considered harassment.\n            </p>\n            <h4 class=\"text-danger\">\n              <u>Harassment Occurs:</u>\n            </h4>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">\n                When someone Makes unwelcome remarks or jokes about your race, religion,\n                sex, age, disability or any other of the grounds of discrimination.\n              </li>\n              <li class=\"list-group-item\">\n                Threatens or intimidates you because of your race, religion, sex, age, disability\n                or any other of the grounds of discrimination.\n              </li>\n              <li class=\"list-group-item\">\n                Makes unwelcome physical contact with you, such as touching, patting, or\n                pinching.\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-12\">\n            <h1>\n              <b>LAWS ON HARASSMENT IN INDIA</b>\n            </h1>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-md-4 col-sm-12 mt-2\">\n            <div class=\"card card-laws\">\n              <h5>Section 354A</h5>\n              <p>\n                Sexual harassment of the nature of unwelcome physical contact and advances or\n                a demand or request for sexual favours or showing pornography.\n              </p>\n              <p class=\"text-danger\">\n                Punishment - Upto 3 years or Fine or Both\n              </p>\n              <a href=\"https://devgan.in/ipc/section/354A/\" target=\"_blank\" class=\"card-link\">More Details...</a>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-12 mt-2\">\n            <div class=\"card card-laws\">\n              <h5>Section 354B</h5>\n              <p>\n                Criminal force to woman with intent to disrobe.\n              </p>\n              <p class=\"text-danger\">\n                Punishment - 3 to 7 years + Fine\n              </p>\n              <a href=\"https://devgan.in/ipc/section/354B/\" target=\"_blank\" class=\"card-link\">More Details...</a>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-12 mt-2\">\n            <div class=\"card card-laws\">\n              <h5>Section 509</h5>\n              <p>\n                Uttering any word or making any gesture intended to insult the modesty of a\n                woman, etc.\n              </p>\n              <p class=\"text-danger\">\n                Punishment - Simple imprisonment for 3 years + Fine\n              </p>\n              <a href=\"https://devgan.in/ipc/section/509/\" target=\"_blank\" class=\"card-link\">More Details...</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <p class=\"mt-3\">Many other laws and details about the harassment</p>\n            <a href=\"https://yourstory.com/2018/03/five-laws-every-woman-must-know/\" target=\"_blank\"\n              class=\"card-link\">Learn about more laws</a>\n          </div>\n        </div>\n      </section>\n      <section class=\"tab-pane fade\" id=\"violence\" role=\"tabpanel\" aria-labelledby=\"violence-tab\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12\">\n            <img src=\"../../../assets/domestic-head.jpg\" height=\"320px\" alt=\"\">\n          </div>\n          <div class=\"col-md-6 col-sm-12\">\n            <h1 class=\"display-4\">Domestic Violence</h1>\n            <p>\n              <span class=\"text-success\">\n                Domestic Violence\n              </span>\n              violence is about one person getting and keeping power and control over another person in an\n              intimate relationship. It is a pattern of behavior in which one intimate partner uses \n              <span class=\"text-danger\"><u>physical violence,\n                  coercion, threats, intimidation, isolation and emotional, sexual, economic, or other forms of abuse to\n                  control and change the behavior of the other partner.</u> </span> The abusive person might be your\n              current or former\n              spouse, live-in lover, dating partner, or some other person with whom you have a relationship. To better\n              understand the ways that an abuser can use power and control over a victim, you can check out what is\n              called the<span class=\"text-primary\"> \"Power and Control Wheel\"</span>.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n             Domestic violence happens to\n            people of all ages, races,\n            ethnicities,\n            socio-economic statuses, and religions. It occurs in both opposite-sex and same-sex relationships. A\n            person&#39;s gender, gender identity, or sexual orientation does not determine whether s/he can be a\n            victim of\n            domestic violence or an abuser. Economic or professional status does not affect whether someone can\n            commit domestic violence or be the victim of domestic violence - abusers and victims can be laborers or\n            college professors, judges or janitors, doctors or orderlies, teachers, truck drivers, homemakers or store\n            clerks. Domestic violence occurs in the poorest neighborhoods, the fanciest mansions and white-picket-\n            fence neighborhoods.\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-12\">\n            <div class=\"card\">\n              <div class=\"card-header bg-primary text-white\">\n                <b>SOME EXAMPLES OF THE DIFFERENT FORMS OF DOMESTIC ABUSE</b>\n              </div>\n              <div class=\"card-body\">\n                <ul>\n                  <li>PHYSICAL ABUSE</li>\n                  <li>SEXUAL ABUSE</li>\n                  <li>ECONOMIC ABUSE</li>\n                  <li>EMOTIONAL ABUSE</li>\n                  <li>PSYCHOLOGICAL ABUSE</li>\n                  <li>SEXUAL COERCION & REPRODUCTIVE</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-12\">\n            <img src=\"../../../assets/charts.png\" width=\"100%\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-md-6 col-sm-12 mt-2\">\n            <img src=\"../../../assets/domestic.png\" alt=\"\">\n          </div>\n          <div class=\"col-md-6 col-sm-12 mt-2\">\n            <img src=\"../../../assets/abuses.png\" alt=\"\">\n          </div>\n        </div>\n      </section>\n      <section class=\"tab-pane fade\" id=\"rights\" role=\"tabpanel\" aria-labelledby=\"rights-tab\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-sm-12\">\n            <img src=\"../../../assets/laws.jpg\" height=\"250px\" width=\"600px\" alt=\"\">\n          </div>\n          <div class=\"col-md-6 col-sm-12\">\n            <h1 class=\"display-4\">Rights</h1>\n            <p>\n              Crimes against women occur every minute in India. Women are not safe, whether\n              it is in their houses, public places or at the workplace. Your safety in your hands\n              sounds like a clichéd adage to repeat. Remember knowledge is power. As a\n              parent, wife, daughter, employee and a woman these are rights set in place to\n              protect you and it is important that you are aware about these.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <h2>\n              <b>10 laws that women should know:\n              </b>\n            </h2>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>The Prohibition of Child Marriage Act, 2006</b>\n              </div>\n              <div class=\"card-body\">\n                According to the International Research Centre for Women, almost 47 percent of\n                girls are married before the age of 18. Currently, India ranks 13 in the world when\n                it comes to child marriages. Since child marriage has been steeped into the Indian\n                culture and tradition since centuries, it has been tough eliminating it. The\n                Prohibition of Child Marriage Act was made effective in 2007. This act defines\n                child marriage as a marriage where the groom or the bride are underage, that is,\n                the bride is under 18 years of age or the boy is younger than 21 years. Parents\n                trying to marry underage girls are subject to action under this law. Since the law\n                makes these marriages illegal, it acts as a major deterrent.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>Special Marriage Act, 1954</b>\n              </div>\n              <div class=\"card-body\">\n                The objectives of this act is to provide – a special form of marriage in certain\n                cases, provide for registration of certain marriages and, to provide for divorce. In\n                a country like India and with the diverse religions and cast, when people from\n                different faiths and caste chose to get married they do it under the Special\n                Marriage Act. It is not applicable to the state of Jammu and Kashmir and also\n                extends to intending spouses who are Indian nationals and living abroad.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>Dowry Prohibition Act, 1961</b>\n              </div>\n              <div class=\"card-body\">\n                According to this act, taking or giving of dowry at the time of the marriage to the\n                bride or the bridegroom and their family is to be penalised. Dowry system, giving\n                and taking of dowry, is a norm in India. Dowry is often asked of the bride and her\n                family by the groom and his family. The system has taken strong roots because\n                women after marriage move in with their spouse and in-laws. Also, over the\n                centuries, the lack for economic independence of women and the taboo towards\n                divorce has resulted in bride burning. When demands for dowry even after\n                marriage are not met by the girl’s families, many women are tortured, beaten and\n                even burnt. It is one of the major challenges that our society is grappling with.\n                Women openly complaining about it has helped to spread the word and\n                encourage other women to take a stand.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>Indian Divorce Act, 1969</b>\n              </div>\n              <div class=\"card-body\">\n                The Indian Divorce Act allows the dissolution of marriage, mutual consent, nullity\n                of marriage, judicial separation and restitution of conjugal rights. Family Courts\n                are established to file, hear, and dispose of such cases.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>Maternity Benefit Act,1861</b>\n              </div>\n              <div class=\"card-body\">\n                CThis act regulates the employment of women and maternity benefits mandated\n                by law. It states that a woman employee who has worked in an organisation for a\n                period of at least 80 days during the 12 months preceding the date of her\n                expected delivery is entitled to receive maternity benefits, which includes\n                maternity leave, nursing breaks, medical allowance, etc.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>Medical Termination of Pregnancy Act,1971</b>\n              </div>\n              <div class=\"card-body\">\n                The Act came into effect into 1972, was amended in 1975 and 2002. The aim of\n                the Act is to reduce the occurrence of illegal abortion and consequent maternal\n                mortality and morbidity. It clearly states the conditions under which a pregnancy\n                can be ended or aborted and specifies the persons qualified to conduct the same.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act,\n                  2013</b>\n              </div>\n              <div class=\"card-body\">\n                To ensure women’s safety at workplace, this Act seeks to protect them from\n                sexual harassment at their place of work. Thirty-six percent of Indian companies\n                and 25 percent among MNC’s are not complaint with the Sexual Harassment Act\n                according to a FICCI-EY November 2015 report. Sexual harassment at workplace\n                also includes – the use of language with sexual overtones, invasion of private\n                space with a male colleague hovering too close for comfort, subtle touches and\n                innuendoes.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>Indecent Representation of Women(Prevention) Act,1986</b>\n              </div>\n              <div class=\"card-body\">\n                This Act prohibits indecent representation of women through advertisement or in\n                publications, writings, paintings, figures or in any other manner.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>National Commission for Women Act, 1990</b>\n              </div>\n              <div class=\"card-body\">\n                The National Commission for Women (NCW) is a statutory body of the\n                Government of India, established in January 1992. Lalitha Kumaramangalam was\n                appointed its Chairperson in 2014. The NCW represents the rights of women in\n                India and provides a voice for their issues and concerns. The National Commission\n                for Women Act aims to improve the status of women and worked for their\n                economic empowerment.\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 mt-3\">\n            <div class=\"card\">\n              <div class=\"card-header bg-secondary text-white\">\n                <b>Equal Remuneration Act, 1976</b>\n              </div>\n              <div class=\"card-body\">\n                This Act prevents discrimination in terms of remuneration. It provides for\n                payment of equal recompense to men and women workers. It is necessary to\n                know these and other laws in place to protect the interests of women. Only if you\n                are aware of your rights can you fight against any injustice meted out to you at\n                home, at the workplace, or in the society.\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/static/info/info.page.scss":
/*!********************************************!*\
  !*** ./src/app/static/info/info.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border-radius: 0px; }\n\n.bg-light-yellow {\n  background: #FCF3CF; }\n\nul.list-group {\n  border-radius: 0px; }\n\nli.list-group-item {\n  border-radius: 0px; }\n\n.card-laws {\n  padding: 20px;\n  height: 260px; }\n\n.card {\n  border: solid 3px #ccc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXJlbmRyYW1hdXJ5YS93ZWJfdHV0b3JpYWxzL0RlZXBhL2Zyb250ZW5kL3NyYy9hcHAvc3RhdGljL2luZm8vaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljL2luZm8vaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uYmctbGlnaHQteWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkNGM0NGO1xufVxuXG51bC5saXN0LWdyb3VwIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbmxpLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uY2FyZC1sYXdzIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMjYwcHg7XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjY2NjO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/static/info/info.page.ts":
/*!******************************************!*\
  !*** ./src/app/static/info/info.page.ts ***!
  \******************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var InfoPage = /** @class */ (function () {
    function InfoPage(router) {
        this.router = router;
    }
    InfoPage.prototype.ngOnInit = function () {
    };
    InfoPage.prototype.goBack = function () {
        this.router.navigate(['/feed']);
    };
    InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.page.html */ "./src/app/static/info/info.page.html"),
            styles: [__webpack_require__(/*! ./info.page.scss */ "./src/app/static/info/info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InfoPage);
    return InfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=static-info-info-module.js.map