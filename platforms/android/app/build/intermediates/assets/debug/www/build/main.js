webpackJsonp([7],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_card_add_card__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AccountCreaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountCreaPage = (function () {
    function AccountCreaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountCreaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountCreaPage');
    };
    AccountCreaPage.prototype.openLogin = function () {
        console.log("ici tu peux créer ton compte mon ami");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    AccountCreaPage.prototype.openAddCard = function () {
        console.log('ajoutes ta CB');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_card_add_card__["a" /* AddCardPage */]);
    };
    AccountCreaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account-crea',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\account-crea\account-crea.html"*/'<!--\n\n  Generated template for the AccountCreaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>account_crea</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label>Prénom et nom</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label>Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n    \n\n    </ion-list>\n\n    \n\n    <div padding>\n\n        <button ion-button (click)="openAddCard()">Créer mon compte</button>\n\n    </div>\n\n\n\n    <div padding>\n\n        <button ion-button (click)="openLogin()">Déjà un compte ?</button>\n\n    </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\account-crea\account-crea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountCreaPage);
    return AccountCreaPage;
}());

//# sourceMappingURL=account-crea.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = (function () {
    function ConfirmPage(navCtrl, navParams, rest, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.storage = storage;
        this.code = "";
        this.mealId = this.mealId || [];
        this.init();
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    ConfirmPage.prototype.init = function () {
        var _this = this;
        this.storage.get('create_booking').then(function (data) {
            _this.create = data;
            _this.storage.get('idMeals').then(function (data) {
                _this.mealId = data;
                if (!_this.create) {
                    _this.storage.get('id_command').then(function (data) {
                        _this.idCommand = data;
                        _this.post();
                        console.log("BOOKING ID --> " + data);
                    }, function (error) { return console.error(error); });
                }
                else
                    _this.post();
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    };
    ConfirmPage.prototype.post = function () {
        if (this.create) {
            this.postBooking({
                master_user_id: 1,
                restaurant_id: 1,
                nb_users: 1,
                schedule: 1200,
                meal_id: this.mealId,
                payment_id: 2
            });
        }
        else {
            console.log("AT INSTANT T --> " + this.idCommand);
            this.postCommand({
                user_id: 1,
                meal_id: this.mealId,
                payment_id: 2,
                booking_id: this.idCommand
            });
        }
    };
    ConfirmPage.prototype.goHome = function () {
        this.tabRef.select(0);
        // this.navCtrl.push(HomePage);
        console.log('FELICITATION !!! Parcours terminé');
    };
    ConfirmPage.prototype.postCommand = function (arg) {
        var _this = this;
        this.rest.postCommand(arg)
            .subscribe(function (result) {
            console.log("APAPAPAP --> " + result);
        }, function (error) { return _this.errorMessage = error; });
    };
    ConfirmPage.prototype.postBooking = function (arg) {
        var _this = this;
        this.rest.postBooking(arg)
            .subscribe(function (code) {
            // this.code = <string>code;
            console.log(_this.code);
        }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Tabs */])
    ], ConfirmPage.prototype, "tabRef", void 0);
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\confirm\confirm.html"*/'<!--\n\n  Generated template for the ConfirmPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>confirm</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="all">\n\n    <div class="img-table">\n\n      <ion-img width="100%" height="100%" style="background: transparent !important;" src="../assets/imgs/code-empty.png"></ion-img>\n\n    </div>\n\n    <div class="texte-1">\n\n      Merci !\n\n    </div>\n\n    <div class="texte-2">Votre Réservation à été pris en compte</div>\n\n    <ng-container *ngIf="create">\n\n    <div class="texte-3">\n\n     Partagez ce code avec les personnes qui participeront au repas avec vous\n\n    </div>\n\n    <div class="code">\n\n\n\n        <ion-label>{{code}}</ion-label>\n\n\n\n\n\n    </div>\n\n    </ng-container>\n\n    <div class="item-check" ion-button (click)="goHome()">\n\n      <ion-img width="100%" height="100%" style="background: transparent !important;"  src="../assets/icon/check.svg"></ion-img>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valeur = 1;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
        console.log(this.navParams.get('meal'));
    };
    DetailsPage.prototype.incremente = function () {
        this.valeur++;
    };
    DetailsPage.prototype.decremente = function () {
        if (this.valeur != 0)
            this.valeur--;
    };
    DetailsPage.prototype.openMenu = function () {
        var callback = this.navParams.get('callback');
        this.navCtrl.pop();
        var p = this.valeur * this.navParams.get('meal').price;
        callback(p, this.valeur);
        console.log("well play tu as ouvert la page menu");
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\details\details.html"*/'<!--\n\n  Generated template for the DetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-color: #F4FAFD;">\n\n  <div>\n\n{{navParams.get(\'meal\').name}}</div>\n\n\n\n  <div>\n\n{{navParams.get(\'meal\').description}}</div>\n\n  <div class="number-picker">\n\n  <div class="left" (click)="decremente()"></div>\n\n  <ion-input type="number" class="number" placeholder={{valeur}}></ion-input>\n\n  <div class="right" (click)="incremente()"></div>\n\n  </div>\n\n<button ion-button (click)="openMenu()">COMMANDER  &nbsp;&nbsp;&nbsp;&nbsp; x{{valeur}}   &nbsp;&nbsp;&nbsp;&nbsp; {{valeur*navParams.get(\'meal\').price}}€</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RecapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecapPage = (function () {
    function RecapPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        storage.set('entree', navParams.get('entree'));
        storage.set('plat', navParams.get('plat'));
        storage.set('dessert', navParams.get('dessert'));
    }
    RecapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecapPage');
    };
    RecapPage.prototype.openLogin = function () {
        console.log("ok commande validé !");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RecapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recap',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\recap\recap.html"*/'<!--\n\n  Generated template for the RecapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>recap</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding style="background-color: #F4FAFD;">\n\n  <div class="full">\n\n    <p>Entrée</p>\n\n    <ng-container *ngFor="let item of navParams.get(\'entree\');">\n\n\n\n      <!--<button ion-button (click)="openDetail()">-->\n\n      <ion-card >\n\n        <ion-card-header style="color: #5E7FB1;">\n\n          {{item.name}}\n\n\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          {{item.description}}\n\n          <div class="price">\n\n            {{item.price}}€\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n    </ng-container>\n\n\n\n\n\n\n\n    <p>Plat</p>\n\n    <ng-container *ngFor="let item of navParams.get(\'plat\');">\n\n      <ion-card >\n\n        <ion-card-header>\n\n          {{item.name}}\n\n\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          {{item.description}}\n\n          <div class="price">\n\n            {{item.price}}€\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ng-container>\n\n\n\n\n\n    <p>Dessert</p>\n\n\n\n    <ng-container *ngFor="let item of navParams.get(\'dessert\');">\n\n\n\n      <ion-card >\n\n        <ion-card-header>\n\n          {{item.name}}\n\n\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          {{item.description}}\n\n          <div class="price">\n\n            {{item.price}}€\n\n\n\n          </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ng-container>\n\n    <button ion-button (click)="openLogin()">Payer et Réserver {{navParams.get(\'total\')}}€ </button>\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\recap\recap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RecapPage);
    return RecapPage;
}());

//# sourceMappingURL=recap.js.map

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-crea/account-crea.module": [
		421,
		6
	],
	"../pages/add-card/add-card.module": [
		422,
		5
	],
	"../pages/confirm/confirm.module": [
		423,
		4
	],
	"../pages/details/details.module": [
		424,
		3
	],
	"../pages/login/login.module": [
		425,
		2
	],
	"../pages/menu/menu.module": [
		426,
		1
	],
	"../pages/recap/recap.module": [
		427,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__participate_participate__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__participate_participate__["a" /* ParticipatePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__book_book__["a" /* BookPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="J\'organise" tabIcon="jorganise"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Je participe" tabIcon="je-participe"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Réservations" tabIcon="reservations"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Compte" tabIcon="compte"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParticipatePage = (function () {
    function ParticipatePage(navCtrl, rest, storage) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.storage = storage;
        this.notExist = false;
    }
    ParticipatePage.prototype.ionViewDidLoad = function () {
        console.log("J'ai charger les page");
    };
    ParticipatePage.prototype.openMenu = function () {
        var _this = this;
        this.storage.set('create_booking', false);
        this.rest.getRestaurantWithCode(this.codeInput).subscribe(function (data) {
            try {
                if (data.id) {
                    _this.storage.set('id_command', data.id);
                    _this.storage.set('id_restaurant', data.restaurant_id);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
                }
            }
            catch (e) {
                console.log(e);
                _this.notExist = true;
            }
        }, function (error) { return _this.errorMessage = error; });
        console.log("LE CODE IS --> " + this.codeInput);
        console.log('ton code est validé');
    };
    ParticipatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-participate',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\participate\participate.html"*/'\n\n\n\n<ion-content>\n\n    <div class="all">\n\n<div class="img-table">\n\n  <ion-img width="100%" height="100%" style="background: transparent !important;" src="../assets/imgs/code-empty.png"></ion-img>\n\n</div>\n\n<div class="texte">\n\n    Je participe à une réservation en cours\n\n  </div>\n\n        <ng-container *ngIf="error">\n\n            <ion-img src="../assets/imgs/error.svg"></ion-img>\n\n        </ng-container>\n\n        <div class="code">\n\n  <ion-input placeholder="Entrez le code ici" class="text-input" [(ngModel)]="codeInput" color="#5E7FB1"></ion-input>\n\n        </div>\n\n\n\n\n\n        <div class="item-check" ion-button (click)="openMenu()">\n\n  <ion-img width="100%" height="100%" style="background: transparent !important;" src="../assets/icon/check.svg"></ion-img>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\participate\participate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ParticipatePage);
    return ParticipatePage;
}());

//# sourceMappingURL=participate.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookPage = (function () {
    function BookPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\book\book.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Réservation\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-list-header>Follow us on Twitter</ion-list-header>\n\n      <ion-item>\n\n        <ion-icon name="ionic" item-start></ion-icon>\n\n        @ionicframework\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\book\book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { trigger, state, style, transition, animate } from '@angular/animations';


// import { WheelSelector } from '@ionic-native/wheel-selector';
// import { trigger, state, style, transition, animate } from '@angular/animations';
var HomePage = (function () {
    ////    Add variable for holds data
    ////    TEST ANIMATION
    // state = 'opaque';
    function HomePage(navCtrl, rest, storage, androidPermissions) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.storage = storage;
        this.androidPermissions = androidPermissions;
        this.locationfound = function (e) {
            var pulsingIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.divIcon({
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                popupAnchor: [10, 0],
                shadowSize: [0, 0],
                className: 'css-icon',
                html: '<div id="c" <div class="s"></div> </div>'
            });
            var marker = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([e.latitude, e.longitude], { icon: pulsingIcon });
            _this.map.addLayer(marker);
        };
        this.mapPin = this.mapPin || [];
        this.pinID = this.pinID || [];
        this.showNbPers = false;
        this.showSchedule = false;
        this.sliding = false;
        this.currentIndex = 0;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        //CHECK AND REQUEST IF NECESSARY PERMISSION FOR POSITION
        //de la merde
        // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
        //     result => console.log('Has permission?',result.hasPermission),
        //     err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
        // );
        if (!this.map)
            this.loadmap();
        console.log("JE passe bien par IONDIDENTER");
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("JE passe bien par là");
        this.getRestaurants();
    };
    HomePage.prototype.slideChanged = function () {
        console.log("Tu as slidé !");
        this.currentIndex = this.slides.getActiveIndex();
        console.log("Current index is ", this.currentIndex);
        var marker = this.mapPin[this.currentIndex];
        console.log("SIZE SLIDE --> " + this.slides.length());
        // if (this.currentIndex == this.slides.length() - 1)
        //     this.slides.lockSwipeToNext(true)
        // else
        //     this.slides.lockSwipeToNext(false)
        this.moveMarker(marker);
        console.log("SIZE ARRAY --> " + this.pinID.length);
    };
    HomePage.prototype.openMenu = function (i) {
        console.log("J'ai cliqué sur le --> " + i);
        var obj = this.restaurant[i];
        console.log("ID cc  --> " + obj);
        this.storage.set('id_restaurant', obj.id);
        this.storage.set('create_booking', true);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {
            img: obj.picture,
            address: obj.address,
            name: obj.name,
            desc: obj.desc
        });
        console.log("well play tu as ouvert la page menu");
    };
    ////     Create a function for animated pin restaurants when slide is active
    HomePage.prototype.moveMarker = function (pin) {
        var newIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.icon({
            iconUrl: '../assets/icon/pin2.png',
            // iconSize: [38, 95],
            popupAnchor: [0, -15]
        });
        var forkIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.icon({
            iconUrl: '../assets/icon/pin.png',
            // iconSize: [38, 95],
            popupAnchor: [0, -15]
        });
        console.log("FUCKING INDEX --> " + this.slides.getPreviousIndex());
        this.mapPin[this.slides.getPreviousIndex()].setIcon(forkIcon);
        pin.bounce({ duration: 500, height: 100 });
        pin.setIcon(newIcon);
    };
    ////     Function to initialize map   -   we using leaflet with mapbox
    HomePage.prototype.loadmap = function () {
        ////     Create map object and add base map tiles from Leaflet and attribution info to 'map' div
        var _this = this;
        ///  Create custom icon
        // let pulsingIcon = L.divIcon({
        //   iconSize: [30, 30],
        //   iconAnchor: [15, 15],
        //   popupAnchor: [10, 0],
        //   shadowSize: [0, 0],
        //   className: 'css-icon',
        //   html: '<div id="c" <div class="s"></div> </div>'
        // });
        ///
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map("map", { zoomControl: false });
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Frb3UiLCJhIjoiY2pkMXNjamlxMGNvazM0cXF5d2FnazM1MiJ9.7CivBv0jVrL9YJem_YZ1AQ', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 10
        }).on('locationfound', function (e) {
            _this.locationfound(e);
        }).on('locationerror', function (err) {
            alert(err.message);
        });
    };
    ////     Create a function for calling the restaurants from the provider
    HomePage.prototype.getRestaurants = function () {
        var _this = this;
        this.rest.getRestaurants()
            .subscribe(function (restaurant) {
            _this.restaurant = restaurant;
            _this.formatData();
        }, function (error) { return _this.errorMessage = error; });
    };
    ////     Create a function for link pin with slide
    HomePage.prototype.onAddLayer = function (event) {
        this.pinID.push(event.target._leaflet_id);
        console.log("SIZE ARRAY --> " + this.pinID.length);
    };
    HomePage.prototype.openNbPers = function () {
    };
    HomePage.prototype.openSchedule = function () {
    };
    HomePage.prototype.onClickLayer = function (event) {
        console.log("ID RESTO --> " + event.target._leaflet_id);
        // if(this.pinID.indexOf(event.target._leaflet_id)==-1)
        // this.pinID.push(event.target._leaflet_id);
        var index = this.pinID.indexOf(event.target._leaflet_id);
        this.slides.slideTo(index);
        console.log("INDEX --> " + this.pinID.indexOf(event.target._leaflet_id));
    };
    ////    Function to display marker restaurant on the map
    HomePage.prototype.formatData = function () {
        ///  Create custom icon
        var _this = this;
        var forkIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.icon({
            iconUrl: '../assets/icon/pin.png',
            // iconSize: [38, 95],
            popupAnchor: [0, -15]
        });
        var newIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.icon({
            iconUrl: '../assets/icon/pin2.png',
            // iconSize: [38, 95],
            popupAnchor: [0, -15]
        });
        ///   Diplay marker on map
        var array = this.restaurant;
        // for (let i = 0; i < array.length; i++){
        // console.log(i)
        // if (i == 0) {
        //   console.log("toot")
        //   let pin = L.marker([array[i].lat, array[i].lon], { icon: forkIcon, bounceOnAdd: true, bounceOnAddOptions: { duration: 800, height: 200 } })
        //   .on('add', event => {
        //     this.onAddLayer(event, pin);
        //   }).bindPopup(array[i].name).addTo(this.map);
        // pin.on('click', event => {
        //   this.onClickLayer(event)
        // });
        // } else {
        __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(10).subscribe(function (i) {
            if (i > 4) {
                return false;
            }
            var pin = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([array[i].lat, array[i].lon], {
                icon: i == 0 ? newIcon : forkIcon,
                bounceOnAdd: true, bounceOnAddOptions: { duration: 800, height: 200 }
            })
                .on('add', function (event) {
                _this.onAddLayer(event);
            }).addTo(_this.map);
            pin.on('click', function (event) {
                _this.onClickLayer(event);
            });
            _this.mapPin.push(pin);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\home\home.html"*/'<ion-header>\n\n    <!-- <ion-navbar>\n\n\n\n    </ion-navbar> -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div id="map">\n\n\n\n        <!-- <div class="btn"> -->\n\n        <ion-grid>\n\n            <ion-row flex-wrap: nowrap class="z-index">\n\n\n\n                <ion-col class="stylecol">\n\n                    <button class="stylebtn" ion-button full icon-start color="blue" (click)="openNbPers()">\n\n                        <ion-icon name="combien"></ion-icon>\n\n                        <p>Pour combien ?</p></button>\n\n                    <!-- <button ion-button color="blue" [@elementState]="state" style="width:100%" (click)="makeInactive()"> Pour combien ? </button> -->\n\n                </ion-col>\n\n\n\n                <ion-col class="stylecol">\n\n                    <button class="stylebtn" ion-button full icon-start color="blue" (click)="openSchedule()">\n\n                        <ion-icon name="heure"></ion-icon>\n\n                        <p>A quelle heure ?</p></button>\n\n                </ion-col>\n\n\n\n            </ion-row>\n\n        </ion-grid>\n\n        <!-- </div> -->\n\n\n\n\n\n    </div>\n\n\n\n    <div id="slides">\n\n        <ion-grid>\n\n            <ion-row class="z-index">\n\n\n\n                <!-- <ion-col> -->\n\n                <ion-slides slidesPerView="1.5" (ionSlideDidChange)="slideChanged()">\n\n                    <ion-slide *ngFor="let r of restaurant;let i= index">\n\n                        <ion-card (click)="openMenu(i)">\n\n                            <ion-card-content>\n\n                                <ion-row>\n\n                                    <!-- <ion-col col-2> -->\n\n                                    <img src={{r.picture}}/>\n\n                                    <!-- </ion-col> -->\n\n\n\n                                    <!-- <ion-col col-10> -->\n\n                                    <ion-card-title>\n\n                                        <ion-row>\n\n                                            <h2>{{r.name}}</h2>\n\n                                        </ion-row>\n\n                                        <ion-row>\n\n                                            <h3>{{r.description}}</h3>\n\n                                        </ion-row>\n\n                                        <ion-row>\n\n                                            <h4>nom de la rue</h4>\n\n                                        </ion-row>\n\n                                        <ion-row>\n\n                                            <h4>code postal + ville</h4>\n\n                                        </ion-row>\n\n                                    </ion-card-title>\n\n\n\n                                    <!-- </ion-col> -->\n\n                                </ion-row>\n\n\n\n                            </ion-card-content>\n\n                        </ion-card>\n\n\n\n                    </ion-slide>\n\n                </ion-slides>\n\n\n\n                <!-- </ion-col> -->\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\home\home.html"*/,
        })
        ////////        Display Data in view        ////////
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_participate_participate__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_book_book__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_details_details__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_recap_recap__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_confirm_confirm__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_account_crea_account_crea__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_add_card_add_card__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_participate_participate__["a" /* ParticipatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_recap_recap__["a" /* RecapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_account_crea_account_crea__["a" /* AccountCreaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_card_add_card__["a" /* AddCardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account-crea/account-crea.module#AccountCreaPageModule', name: 'AccountCreaPage', segment: 'account-crea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-card/add-card.module#AddCardPageModule', name: 'AddCardPage', segment: 'add-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recap/recap.module#RecapPageModule', name: 'RecapPage', segment: 'recap', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_participate_participate__["a" /* ParticipatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_recap_recap__["a" /* RecapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_account_crea_account_crea__["a" /* AccountCreaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_card_add_card__["a" /* AddCardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    // private apiUrl = 'http://192.168.1.15:5000/api/restaurants?lat=44.880630&lon=-0.687052&meter=100000';
    function RestProvider(http) {
        this.http = http;
        this.prod = "https://easy-lunch-tmp.herokuapp.com";
        this.test = 'http://192.168.1.15:5000';
        this.apiUrl = 'https://easy-lunch.herokuapp.com/api/restaurants';
        this.apiUrlMeal = this.test + '/api/meal?id=';
        this.apiUrlPostBooking = this.test + '/api/booking';
        this.apiUrlPostCommand = this.test + '/api/command';
        this.apiUtlGetSingleResto = this.test + '/api/restaurants/';
        console.log('Hello RestProvider Provider');
    }
    ////    Function to get the restaurants from the API
    RestProvider.prototype.getRestaurants = function () {
        return this.http.get(this.apiUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // private loginUrl = 'https://easy-lunch.herokuapp.com/login';
    // addLogin(username: string, password: string): Observable<{}> {
    //   return this.http.post(this.loginUrl, {username:"j", password:"j"}, {
    //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    //   })
    // }
    RestProvider.prototype.getMeals = function (id) {
        return this.http.get(this.apiUrlMeal + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.postCommand = function (arg) {
        return this.http.post(this.apiUrlPostCommand, arg).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData2), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.postBooking = function (arg) {
        return this.http.post(this.apiUrlPostBooking, arg).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData2), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.getRestaurantWithCode = function (arg) {
        var url = this.apiUtlGetSingleResto + arg;
        console.log("URL --> " + url);
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.extractData2 = function (res) {
        var body = (res.data);
        // Another way, is to explicitly tell TypeScript that we’re not interested in doing strict type checking
        return body;
    };
    RestProvider.prototype.extractData = function (res) {
        var body = res.data;
        // Another way, is to explicitly tell TypeScript that we’re not interested in doing strict type checking
        return body || {};
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_add_card__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_crea_account_crea__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.openAddCard = function () {
        console.log('ajoutes ta CB');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_card_add_card__["a" /* AddCardPage */]);
    };
    LoginPage.prototype.openCrea = function () {
        console.log("ici tu peux te connecter");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_crea_account_crea__["a" /* AccountCreaPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label>Username</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label>Password</ion-label>\n\n          <ion-input type="password"></ion-input>\n\n        </ion-item>\n\n      \n\n      </ion-list>\n\n      \n\n      <div padding>\n\n        <button ion-button (click)="openAddCard()">Se connecter</button>\n\n      </div>\n\n\n\n      <div padding>\n\n        <button ion-button (click)="openCrea()">Pas de compte ?</button>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCardPage = (function () {
    function AddCardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddCardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCardPage');
    };
    AddCardPage.prototype.openConfirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_confirm__["a" /* ConfirmPage */]);
        console.log("check point !");
    };
    AddCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-card',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\add-card\add-card.html"*/'<!--\n\n  Generated template for the AddCardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>add_card</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h2> Mon moyen de paiement </h2>\n\n<p> Card </p>\n\n<p> n° card </p>\n\n<p> info card </p>\n\n<p> name owner card </p>\n\n\n\n<button ion-button round (click)="openConfirm()">Check</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\add-card\add-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddCardPage);
    return AddCardPage;
}());

//# sourceMappingURL=add-card.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recap_recap__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, rest, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.storage = storage;
        this.callbackChild = function (p, valeur) {
            _this.total += p;
            if (valeur > 0) {
                var objSrc = void 0;
                var objDst = void 0;
                switch (_this.tmpType) {
                    case 0:
                        objSrc = _this.entree;
                        objDst = _this.choosenEntree;
                        break;
                    case 1:
                        objSrc = _this.plat;
                        objDst = _this.choosenPlat;
                        break;
                    case 2:
                        objSrc = _this.dessert;
                        objDst = _this.choosenDessert;
                        break;
                }
                for (var i = 0; i < valeur; i++) {
                    objDst.push(objSrc[_this.tmpIndex]);
                    console.log("ID of meal select --> " + objSrc[_this.tmpIndex].id);
                    _this.choosenId.push(objSrc[_this.tmpIndex].id);
                }
            }
            console.log("TOTAL --> " + _this.total);
        };
        this.entree = this.entree || [];
        this.plat = this.plat || [];
        this.dessert = this.dessert || [];
        this.choosenEntree = this.choosenEntree || [];
        this.choosenPlat = this.choosenPlat || [];
        this.choosenDessert = this.choosenDessert || [];
        this.choosenId = this.choosenId || [];
        this.total = 0;
        this.img = this.navParams.get('img');
        this.address = this.navParams.get('address');
        this.name = this.navParams.get('name');
        this.desc = this.navParams.get('desc');
        this.storage.get('id_restaurant').then(function (data) {
            console.log("ID --> " + data);
            _this.idResto = data;
            _this.getMeals(_this.idResto);
        }, function (error) { return console.error(error); });
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.ionViewDidEnter = function () {
        this.content.resize();
    };
    MenuPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    MenuPage.prototype.openDetail = function (plat, index) {
        var obj;
        switch (plat) {
            case 0:
                obj = this.entree;
                break;
            case 1:
                obj = this.plat;
                break;
            case 2:
                obj = this.dessert;
                break;
        }
        this.tmpType = plat;
        this.tmpIndex = index;
        console.log("AVANT crash --> " + obj[index].name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], {
            meal: obj[index],
            callback: this.callbackChild
        });
        console.log("well done tu as ouvert la page detail");
    };
    MenuPage.prototype.openRecap = function () {
        this.storage.set('idMeals', this.choosenId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recap_recap__["a" /* RecapPage */], {
            entree: this.choosenEntree,
            plat: this.choosenPlat,
            dessert: this.choosenDessert,
            total: this.total
        });
        console.log("yeeeah this is your recap my friend !");
    };
    MenuPage.prototype.getMeals = function (id) {
        var _this = this;
        this.rest.getMeals(id)
            .subscribe(function (meal) {
            _this.meals = meal;
            _this.formatData();
        }, function (error) { return _this.errorMessage = error; });
    };
    MenuPage.prototype.formatData = function () {
        var _this = this;
        this.meals.map(function (meal) {
            switch (meal.plat) {
                case 0:
                    _this.entree.push(meal);
                    break;
                case 1:
                    _this.plat.push(meal);
                    break;
                case 2:
                    _this.dessert.push(meal);
                    break;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], MenuPage.prototype, "content", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\menu\menu.html"*/'<ion-content style="background-color: #F4FAFD;">\n\n\n\n    <div id="img">\n\n        <img src={{img}}/>\n\n        <button (click)="goBack()"> fleche </button>\n\n    </div>\n\n\n\n\n\n    <div id="cardrestau">\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <h1>{{ name }}</h1>\n\n                <h2>Restaurant français{{ desc }}</h2>\n\n                <p>{{ address }}</p>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>  \n\n\n\n    <ion-scroll scollX="true">\n\n\n\n        <ion-row flex-wrap: nowrap>\n\n            <ion-col>\n\n                Plat du jour\n\n            </ion-col>\n\n            <ion-col>\n\n                Formules\n\n            </ion-col>\n\n            <ion-col>\n\n                Entrées\n\n            </ion-col>\n\n            <ion-col>\n\n                Plats\n\n            </ion-col>\n\n            <ion-col>\n\n                Desserts\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        </ion-scroll>\n\n\n\n\n\n\n\n        <div class="full">\n\n            <p>Entrée</p>\n\n            <ng-container *ngFor="let item of entree;index as i">\n\n\n\n                <!--<button ion-button (click)="openDetail()">-->\n\n                <ion-card (click)="openDetail(0,i)">\n\n                    <ion-card-header style="color: #5E7FB1;">\n\n                        {{item.name}}\n\n\n\n                    </ion-card-header>\n\n                    <ion-card-content>\n\n                        {{item.description}}\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n\n\n\n\n            </ng-container>\n\n\n\n\n\n\n\n            <p>Plat</p>\n\n            <ng-container *ngFor="let item of plat;index as i">\n\n                <ion-card (click)="openDetail(1,i)">\n\n                    <ion-card-header>\n\n                        {{item.name}}\n\n\n\n                    </ion-card-header>\n\n                    <ion-card-content>\n\n                        {{item.description}}\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ng-container>\n\n\n\n\n\n            <p>Dessert</p>\n\n\n\n            <ng-container *ngFor="let item of dessert;index as i">\n\n\n\n                <ion-card (click)="openDetail(2,i)">\n\n                    <ion-card-header>\n\n                        {{item.name}}\n\n\n\n                    </ion-card-header>\n\n                    <ion-card-content>\n\n                        {{item.description}}\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ng-container>\n\n\n\n        </div>\n\n\n\n\n\n        <ng-container *ngIf="total!==0">\n\n            <button ion-button (click)="openRecap()">Confirmer {{total}}€ </button>\n\n        </ng-container>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

},[256]);
//# sourceMappingURL=main.js.map