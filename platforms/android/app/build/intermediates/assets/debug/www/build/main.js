webpackJsonp([8],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(45);
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
        this.idCommand = null;
        this.create = null;
        this.nbPers = null;
        this.schedule = null;
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    ConfirmPage.prototype.init = function () {
        var _this = this;
        this.storage.get('menuID').then(function (data) {
            _this.menuID = data;
            console.log("DATA --> " + data);
        }, function (error) { return console.error(error); });
        this.storage.get('menuMealID').then(function (data) {
            console.log("DATA --> " + data);
            _this.menuMealID = data;
        }, function (error) { return console.error(error); });
        this.storage.get('total').then(function (data) {
            _this.total = data;
            console.log("DATA --> " + data);
        }, function (error) { return console.error(error); });
        this.storage.get('nbPers').then(function (data) {
            _this.nbPers = data;
            console.log("DATA NBPER --> " + data);
            _this.post();
        }, function (error) { return console.error(error); });
        this.storage.get('schedule').then(function (data) {
            if (data != null)
                _this.schedule = data.replace(':', '');
            console.log("DATA SCHEDULE --> " + data);
            _this.post();
        }, function (error) { return console.error(error); });
        this.post();
        this.storage.get('idMeals').then(function (data) {
            _this.mealId = data;
            console.log("AAA --> " + data);
            _this.post();
        }, function (error) { return console.error(error); });
        this.storage.get('create_booking').then(function (data) {
            _this.create = data;
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
    };
    ConfirmPage.prototype.post = function () {
        if (this.create != null && this.mealId != null) {
            var menu;
            var meal;
            if (this.menuID === null)
                menu = null;
            else
                menu = '{\"' + this.menuID + '\":[' + this.menuMealID + ']}';
            if (this.mealId.length === 0)
                meal = null;
            else
                meal = this.mealId;
            if (this.create) {
                if (this.nbPers != null && this.schedule != null) {
                    this.cleanStorage();
                    console.log("MEAL ID  --> " + this.mealId);
                    var today = new Date();
                    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date + ' ' + time;
                    this.postBooking({
                        master_user_id: 1,
                        restaurant_id: 1,
                        nb_users: this.nbPers,
                        schedule: this.schedule,
                        meal_id: meal,
                        date: dateTime,
                        payment_id: 2,
                        menu: menu,
                        total: this.total
                    });
                }
            }
            else {
                if (this.idCommand != null) {
                    var today = new Date();
                    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date + ' ' + time;
                    console.log("TOTAL --> " + this.total);
                    this.cleanStorage();
                    console.log("AT INSTANT T --> " + this.idCommand);
                    this.postCommand({
                        user_id: 1,
                        meal_id: meal,
                        payment_id: 2,
                        booking_id: this.idCommand,
                        menu: menu,
                        total: this.total,
                        date: dateTime
                    });
                }
            }
        }
    };
    ConfirmPage.prototype.goHome = function () {
        // this.tabRef.select(0)
        console.log(this.navCtrl.length());
        // this.navCtrl.setPages(this.navCtrl[0])
        this.navCtrl.popToRoot();
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
            _this.code = code;
            console.log(_this.code);
        }, function (error) { return _this.errorMessage = error; });
    };
    ConfirmPage.prototype.cleanStorage = function () {
        console.log("CLEAR STORAGE");
        this.storage.remove('menuID');
        this.storage.remove('menuMealID');
        this.storage.remove('total');
        this.storage.remove('nbPers');
        this.storage.remove('schedule');
        this.storage.remove('idMeals');
        this.storage.remove('id_command');
        this.storage.remove('create_booking');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Tabs */])
    ], ConfirmPage.prototype, "tabRef", void 0);
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\confirm\confirm.html"*/'<ion-content>\n\n\n\n  <div class="all">\n\n\n\n      <div class="img-table">\n\n          <ion-img width="100%" height="100%" style="background: transparent !important;" src="../assets/imgs/code-empty.png"></ion-img>\n\n      </div>\n\n\n\n      <div class="padding">\n\n        <div class="text1"> Merci ! </div>\n\n        <div class="text2"> Votre réservation a bien été prise en compte </div>\n\n\n\n          <ng-container *ngIf="create">\n\n            \n\n            <div class="text3"> Partagez ce code avec les personnes qui participeront au repas avec vous </div>\n\n\n\n            <div class="code">\n\n              <!-- <ion-input placeholder="Entrez le code ici" class="text-input" [(ngModel)]= "codeInput" color= "#5E7FB1"></ion-input> -->\n\n              <ion-label>{{code}}</ion-label>\n\n            </div>\n\n\n\n          </ng-container>  \n\n      </div>\n\n\n\n      <div class="item-check" ion-button round (click)="goHome()">\n\n          <img src="../assets/icon/check.svg">\n\n      </div>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_card_add_card__ = __webpack_require__(69);
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
            selector: 'page-account-crea',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\account-crea\account-crea.html"*/'<ion-content padding>\n\n\n\n  <div id="logo"> <img src = "../assets/icon/logo-easylunch.svg"> </div>\n\n\n\n    <img class="compte" src="../assets/icon/compte.svg">\n\n    <img class="envelope" src="../assets/icon/envelope.svg">\n\n    <img class="tel" src="../assets/icon/locked.svg">\n\n    <img class="locked" src="../assets/icon/locked.svg">\n\n    \n\n      <div id="input">\n\n          <ion-item>\n\n            <ion-label color="secondary"  > Prénom et Nom </ion-label>\n\n            <ion-input clearInput></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n              <ion-label color="secondary" > Email </ion-label>\n\n              <ion-input clearInput></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="secondary" > N° de portable </ion-label>\n\n            <ion-input clearInput></ion-input>\n\n        </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label color="secondary" > Mot de passe </ion-label>\n\n            <ion-input clearInput></ion-input>\n\n        </ion-item>\n\n    </div>\n\n      \n\n      <button id="btnco" ion-button round (click)="openAddCard()">Créer mon compte</button>\n\n\n\n      <button id="btnpdc" ion-button round (click)="openLogin()">Déjà un compte ?</button>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\account-crea\account-crea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountCreaPage);
    return AccountCreaPage;
}());

//# sourceMappingURL=account-crea.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailMenuPage; });
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
 * Generated class for the DetailMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailMenuPage = (function () {
    function DetailMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entreeSelect = false;
        this.platSelect = false;
        this.dessertSelect = false;
        this.showButton = false;
        this.mealId = this.mealId || [];
        console.log("AZERTY --> " + this.navParams.get('idMeal'));
    }
    DetailMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailMenuPage');
    };
    DetailMenuPage.prototype.onChangeEntree = function () {
        console.log(this.entree);
        this.entreeSelect = true;
        this.showValidation();
    };
    DetailMenuPage.prototype.onChangePlat = function () {
        console.log(this.plat);
        this.platSelect = true;
        this.showValidation();
    };
    DetailMenuPage.prototype.onChangeDessert = function () {
        console.log(this.dessert);
        this.dessertSelect = true;
        this.showValidation();
    };
    DetailMenuPage.prototype.showValidation = function () {
        if (this.entreeSelect && this.platSelect && this.dessertSelect)
            this.showButton = true;
    };
    DetailMenuPage.prototype.goBackMenu = function () {
        console.log("Je change");
        this.mealId.push(this.entree);
        this.mealId.push(this.plat);
        this.mealId.push(this.dessert);
        var callback = this.navParams.get('callback');
        callback(this.mealId, this.navParams.get('idMeal'));
        this.navCtrl.pop();
    };
    DetailMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-menu',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\detail-menu\detail-menu.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>Menu du jour </ion-title>\n\n    <div class="arrow">\n\n        <button (click)="goBack()"> <img src="../assets/icon/arrow-left-grey.svg"> </button>\n\n      </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n  <p>Entrée</p>\n\n <ion-list radio-group  [(ngModel)]="entree">\n\n\n\n<ng-container *ngFor="let item of navParams.get(\'entree\'); let i = index">\n\n    <ion-card>\n\n   <ion-item>\n\n      <ion-label>{{item.name}}</ion-label>\n\n      <ion-radio (ionSelect)="onChangeEntree()" value={{item.id}}></ion-radio>\n\n    </ion-item>\n\n\n\n\n\n  </ion-card>\n\n\n\n</ng-container>\n\n\n\n </ion-list>\n\n\n\n  <p>Plat</p>\n\n <ion-list radio-group  [(ngModel)]="plat">\n\n\n\n    <ng-container *ngFor="let item of navParams.get(\'plat\')">\n\n      <ion-card>\n\n\n\n  <ion-item>\n\n          <ion-label>{{item.name}}</ion-label>\n\n          <ion-radio (ionSelect)="onChangePlat()" value={{item.id}}></ion-radio>\n\n        </ion-item>\n\n\n\n\n\n\n\n      </ion-card>\n\n\n\n    </ng-container>\n\n\n\n </ion-list>\n\n  <p>Dessert</p>\n\n <ion-list radio-group  [(ngModel)]="dessert">\n\n\n\n    <ng-container *ngFor="let item of navParams.get(\'dessert\')">\n\n      <ion-card>\n\n        <ion-item>\n\n          <ion-label>{{item.name}}</ion-label>\n\n          <ion-radio (ionSelect)="onChangeDessert()" value={{item.id}}></ion-radio>\n\n        </ion-item>\n\n\n\n\n\n      </ion-card>\n\n\n\n    </ng-container>\n\n\n\n </ion-list>\n\n\n\n\n\n  <!-- <br/>\n\n  <br/>\n\n  <br/>\n\n  <br/> -->\n\n  <ng-container *ngIf="showButton">\n\n\n\n    <button (click)="goBackMenu()" >Commander x1 {{navParams.get(\'price\')}}€</button>\n\n\n\n\n\n  </ng-container>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\detail-menu\detail-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailMenuPage);
    return DetailMenuPage;
}());

//# sourceMappingURL=detail-menu.js.map

/***/ }),

/***/ 134:
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


var DetailsPage = (function () {
    // scrollcontentElement: any;
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valeur = 1;
        if (document.querySelector('.tabbar')) {
            this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
            if (document.querySelector('.scroll-content')) {
                // this.scrollcontentElement = document.querySelector('.scroll-content');
            }
        }
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
        console.log(this.navParams.get('meal'));
    };
    DetailsPage.prototype.ionViewWillEnter = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'none';
            // this.scrollcontentElement.style.marginBottom = '1px';
        }
    };
    DetailsPage.prototype.ionViewWillLeave = function () {
        if (this.tabBarElement) {
            this.tabBarElement.style.display = 'flex';
            // this.scrollcontentElement.style.marginBottom = '49px';
        }
    };
    DetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
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
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\details\details.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title [ngSwitch]="navParams.get(\'meal\').plat">\n\n        <ion-title *ngSwitchCase=0>Entrée</ion-title>\n\n        <ion-title *ngSwitchCase=1>Plat</ion-title>\n\n        <ion-title *ngSwitchCase=2>Dessert</ion-title>\n\n    </ion-title>\n\n    <div class="arrow">\n\n      <button (click)="goBack()"> <img src="../assets/icon/arrow-left-white.svg"> </button>\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  \n\n    <div class="name"> {{navParams.get(\'meal\').name}} </div>\n\n\n\n    <div class="description"> {{navParams.get(\'meal\').description}} </div>\n\n    \n\n    <div class="number-picker">\n\n\n\n      <div class="left" (click)="decremente()"> <p> <img src="../assets/icon/remove.svg"> </p> </div>\n\n      <ion-input type="number" class="number" placeholder={{valeur}}></ion-input>\n\n      <div class="right" (click)="incremente()"> <p> <img src="../assets/icon/add.svg"> </p> </div>\n\n\n\n    </div>\n\n\n\n      <ion-card>\n\n          <ion-content> \n\n              Instructions spéciales\n\n            <ion-input type="text" class="text" placeholder="Rentrez ici vos commentaires sur la commande (cuisson de la viande, pas de champignons, etc...)">  </ion-input>\n\n          </ion-content>\n\n      </ion-card>\n\n\n\n    <ion-footer>\n\n\n\n        <div id="commander"> \n\n            <button ion-button round (click)="openMenu()">\n\n                COMMANDER  &nbsp;&nbsp;&nbsp;&nbsp; x{{valeur}} &nbsp;&nbsp;&nbsp;&nbsp; {{valeur*navParams.get(\'meal\').price}} €\n\n            </button>\n\n        </div>\n\n\n\n      </ion-footer>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(70);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        storage.set('entree', navParams.get('entree'));
        storage.set('plat', navParams.get('plat'));
        storage.set('dessert', navParams.get('dessert'));
        storage.set('total', navParams.get('total'));
        this.img = navParams.get('img');
        this.address = navParams.get('address');
        this.name = navParams.get('name');
        this.desc = navParams.get('desc');
        this.entree = false;
        this.plat = false;
        this.dessert = false;
        this.menu = false;
        if (navParams.get('plat').length > 0)
            this.plat = true;
        if (navParams.get('entree').length > 0)
            this.entree = true;
        if (navParams.get('dessert').length > 0)
            this.dessert = true;
        if (navParams.get('menuMeal').length > 0)
            this.menu = true;
        console.log("MENU MEAL SIZE --> " + navParams.get('menuMeal'));
        console.log("MENU --> " + JSON.stringify(navParams.get('menu')));
        this.storage.get('schedule').then(function (data) {
            _this.schedule = data;
            console.log("DATA --> " + data);
        }, function (error) { return console.error(error); });
        this.storage.get('nbPers').then(function (data) {
            _this.nbPers = data;
            console.log("DATA --> " + data);
        }, function (error) { return console.error(error); });
    }
    RecapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecapPage');
    };
    RecapPage.prototype.openLogin = function () {
        console.log("ok commande validé !");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RecapPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RecapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recap',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\recap\recap.html"*/'<ion-content style="background-color: #F4FAFD;">\n\n\n\n    <div id="restau">\n\n        <div id="img">\n\n            <img src={{img}}/>\n\n            <button (click)="goBack()"> <img class="arrow" src="../assets/icon/arrow-left-white.svg"> </button>\n\n        </div>\n\n\n\n\n\n        <div id="cardrestau">\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <h1>{{ name }}</h1>\n\n                    <h2>Restaurant français{{ desc }}</h2>\n\n                    <p>{{ address }}</p>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n\n\n  \n\n\n\n  <div id="repas">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <img class="heure" src="assets/icon/heure2.svg"> <h3> Auj. à {{schedule}} </h3>\n\n                </ion-col>\n\n                \n\n                <ion-col>\n\n                    <img class="cmb" src="assets/icon/combien2.svg"> <h3> {{nbPers}} personnes </h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n       \n\n\n\n\n\n      <ng-container *ngIf="menu">\n\n          <ion-card >\n\n              <ion-card-content>\n\n          <p>{{navParams.get(\'menu\').name}}</p>\n\n\n\n          <ng-container *ngFor="let item of navParams.get(\'menuMeal\');">\n\n\n\n                      <p>{{item}}</p>\n\n\n\n\n\n          </ng-container>\n\n              </ion-card-content>\n\n      </ion-card>\n\n      </ng-container>\n\n\n\n\n\n    <ng-container *ngIf="entree">\n\n   \n\n\n\n    <ng-container *ngFor="let item of navParams.get(\'entree\');">\n\n\n\n      <!--<button ion-button (click)="openDetail()">-->\n\n      <ion-card >\n\n        <ion-card-content>\n\n            <h4>Entrée</h4>\n\n            <div class="choix">\n\n                <h3> {{item.name}} </h3>\n\n                <p> {{item.description}} </p>\n\n            </div>\n\n\n\n            <div class="price">\n\n                {{item.price}}€\n\n            </div>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n\n\n    </ng-container>\n\n\n\n    </ng-container>\n\n<ng-container *ngIf="plat">\n\n\n\n    <ng-container *ngFor="let item of navParams.get(\'plat\');">\n\n      <ion-card >\n\n          <ion-card-content>\n\n                <h4>Plat</h4>\n\n              <div class="choix">\n\n                  <h3> {{item.name}} </h3>\n\n                  <p> {{item.description}} </p>\n\n              </div>\n\n\n\n              <div class="price">\n\n                  {{item.price}}€\n\n              </div>\n\n          </ion-card-content>\n\n\n\n      </ion-card>\n\n    </ng-container>\n\n\n\n\n\n</ng-container>\n\n    <ng-container *ngIf="dessert">\n\n\n\n    <ng-container *ngFor="let item of navParams.get(\'dessert\');">\n\n        <ion-card >\n\n            <ion-card-content>\n\n                    <h4>Dessert</h4>\n\n                <div class="choix">\n\n                    <h3> {{item.name}} </h3>\n\n                    <p> {{item.description}} </p>\n\n                </div>\n\n\n\n                <div class="price">\n\n                    {{item.price}}€\n\n                </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n      </ng-container>\n\n    </ng-container>\n\n\n\n    <div id="payer"> \n\n        <ng-container *ngIf="total!==0">\n\n            <button ion-button round (click)="openLogin()">Payer et Réserver {{navParams.get(\'total\')}}€ </button>\n\n        </ng-container>\n\n    </div>\n\n   \n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\recap\recap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RecapPage);
    return RecapPage;
}());

//# sourceMappingURL=recap.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-crea/account-crea.module": [
		424,
		7
	],
	"../pages/add-card/add-card.module": [
		423,
		6
	],
	"../pages/confirm/confirm.module": [
		426,
		5
	],
	"../pages/detail-menu/detail-menu.module": [
		425,
		4
	],
	"../pages/details/details.module": [
		427,
		3
	],
	"../pages/login/login.module": [
		428,
		2
	],
	"../pages/menu/menu.module": [
		430,
		1
	],
	"../pages/recap/recap.module": [
		429,
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
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__participate_participate__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(257);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__participate_participate__["a" /* ParticipatePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__book_book__["a" /* BookPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  \n\n  <ion-tab [root]="tab1Root" tabTitle="J\'organise" tabIcon="jorganise"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Je participe" tabIcon="je-participe"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Réservations" tabIcon="reservations"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Compte" tabIcon="compte"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(45);
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], {
                        participate: true
                    });
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
            selector: 'page-participate',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\participate\participate.html"*/'<ion-content>\n\n\n\n    <div class="all">\n\n\n\n        <div class="img-table">\n\n            <ion-img width="100%" height="100%" style="background: transparent !important;" src="../assets/imgs/code-empty.png"></ion-img>\n\n        </div>\n\n\n\n    <div class="text"> Je participe à une réservation en cours </div>\n\n\n\n        <ng-container *ngIf="error">\n\n            <ion-img src="../assets/imgs/error.svg"></ion-img>\n\n        </ng-container>\n\n\n\n        <div class="code">\n\n            <ion-input placeholder="Entrez le code ici" class="text-input" [(ngModel)]= "codeInput" color= "#5E7FB1"></ion-input>\n\n        </div>\n\n\n\n\n\n        <div class="item-check" ion-button round (click)="openMenu()">\n\n            <img src="../assets/icon/check.svg">\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\participate\participate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ParticipatePage);
    return ParticipatePage;
}());

//# sourceMappingURL=participate.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(45);
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
    function BookPage(navCtrl, rest) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.tabs = navCtrl.parent;
        this.getBooking();
    }
    BookPage.prototype.ionViewDidEnter = function () {
    };
    BookPage.prototype.getBooking = function () {
        var _this = this;
        this.rest.getCommandWithIdUser(1).subscribe(function (_booking) {
            _this.booking = _booking;
        }, function (error) { return _this.errorMessage = error; });
    };
    BookPage.prototype.openDetail = function (i) {
        console.log("Je suis sensé ouvrir la commande " + i);
        this.booking.find(function (item) {
            return item.id === 2;
        });
    };
    BookPage.prototype.goHome = function () {
        // this.tabRef.select(0)
        console.log(this.navCtrl.length());
        // this.navCtrl.setPages(this.navCtrl[0])
        this.tabs.select(0);
        console.log('FELICITATION !!! Parcours terminé');
    };
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\book\book.html"*/'<ion-content>\n\n  <div class="full">\n\n    <div class="new">\n\n      <h2> Mes réservations en cours </h2>\n\n      \n\n      <p> Vous n\'avez aucune réservation en cours ! </p>\n\n      \n\n        <button ion-button round (click)="goHome()">\n\n            J\'organise une réservation\n\n        </button>\n\n    </div>\n\n\n\n    <div class="old">\n\n      <p> Mes réservations précédentes <p>\n\n    \n\n    <ng-container *ngFor="let item of booking;index as i">\n\n      <ion-card (click)="openDetail(i)">\n\n\n\n          <ion-card-content>\n\n\n\n              <ion-row>\n\n                  <img src={{item.picture}}/>\n\n\n\n                  <ion-card-title>\n\n                      <ion-row>\n\n                          <h2>{{item.name}}</h2>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <!-- <h3>{{item.created_date}} </h3> -->\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <h4> {{item.nb_users}} </h4>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <h4> {{item.price}} </h4>\n\n                      </ion-row>\n\n                  </ion-card-title>\n\n              </ion-row>\n\n\n\n          </ion-card-content>\n\n\n\n        </ion-card>\n\n    </ng-container>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\book\book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(422);
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
            console.log(e);
            _this.allPin.push(marker);
            _this.markerArray.push(marker);
            _this.zoomOnNearestResto();
            if (_this.map)
                _this.map.addLayer(marker);
            else {
                setTimeout(function () {
                    console.log("!!!!!!!!!!! J'ai esquivé ADD LAYER !!!!!!!!!!!!!");
                    _this.map.addLayer(marker);
                }, 500);
            }
        };
        this.cleanStorage();
        this.mapPin = this.mapPin || [];
        this.pinID = this.pinID || [];
        this.markerArray = this.markerArray || [];
        this.NbPers = null;
        this.Schedule = null;
        this.sliding = false;
        this.currentIndex = 0;
        this.allPin = this.allPin || [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        //CHECK AND REQUEST IF NECESSARY PERMISSION FOR POSITION
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
        this.moveMarker(marker);
        console.log("SIZE ARRAY --> " + this.pinID.length);
    };
    HomePage.prototype.openMenu = function (i) {
        console.log("J'ai cliqué sur le --> " + i);
        console.log("NBPERS --> " + this.NbPers);
        console.log("Schedule --> " + this.Schedule);
        var obj = this.restaurant[i];
        console.log("ID cc  --> " + obj);
        this.storage.set('id_restaurant', obj.id);
        this.storage.set('create_booking', true);
        if (this.Schedule != null) {
            console.log("JE SET SCHEDULE " + this.Schedule);
            this.storage.set('schedule', this.Schedule);
        }
        if (this.NbPers != null) {
            console.log("JE SET NBPERS " + this.NbPers);
            var nbpers = this.NbPers.substring(0, this.NbPers.length - 3);
            this.storage.set('nbPers', nbpers);
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {
            img: obj.picture,
            address: obj.address,
            name: obj.name,
            desc: obj.description
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
        var _this = this;
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
            if (i === 0) {
                console.log("JE ZOOM ON FIRST RESTO " + array[i].name);
                _this.markerArray.push(pin);
                _this.zoomOnNearestResto();
            }
            _this.mapPin.push(pin);
        });
    };
    HomePage.prototype.zoomOnNearestResto = function () {
        var _this = this;
        if (this.markerArray.length == 2) {
            console.log(this.markerArray.length);
            setTimeout(function () {
                var group = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.featureGroup(_this.markerArray); //add markers array to featureGroup
                _this.map.fitBounds(group.getBounds(), {
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 20,
                    paddingRight: 20
                });
            }, 1000);
        }
    };
    HomePage.prototype.cleanStorage = function () {
        console.log("CLEAR STORAGE");
        this.storage.remove('menuID');
        this.storage.remove('menuMealID');
        this.storage.remove('total');
        this.storage.remove('nbPers');
        this.storage.remove('schedule');
        this.storage.remove('idMeals');
        this.storage.remove('id_command');
        this.storage.remove('create_booking');
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\home\home.html"*/'<ion-content>\n\n    <div id="map">\n\n\n\n        <!-- <div class="btn"> -->\n\n        <ion-grid>\n\n            <ion-row flex-wrap: nowrap class="z-index">\n\n                <ion-col class="stylecol">\n\n                    <ion-item>\n\n                        <ion-label>Pour combien ?</ion-label>\n\n\n\n                        <ion-datetime pickerFormat="HH"  displayFormat="HH" [(ngModel)]="NbPers"></ion-datetime>\n\n\n\n                    </ion-item>\n\n                </ion-col>\n\n                        <!-- <button class="stylebtn" ion-button full icon-start color="blue" (click)="openNbPers()">\n\n                        <ion-icon name="combien"></ion-icon>\n\n                        <p>Pour combien ?</p></button> -->\n\n                    \n\n                    <!-- <button ion-button color="blue" [@elementState]="state" style="width:100%" (click)="makeInactive()"> Pour combien ? </button> -->\n\n\n\n                <ion-col class="stylecol">\n\n                        <ion-item>\n\n                            <ion-label>A quelle heure ?</ion-label>\n\n                            <ion-datetime pickerFormat="HH/mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" displayFormat="HH:mm" [(ngModel)]="Schedule"></ion-datetime>\n\n                        </ion-item>\n\n                </ion-col>\n\n                <!-- <button class="stylebtn" ion-button full icon-start color="blue" (click)="openSchedule()">\n\n                        <ion-icon name="heure"></ion-icon>\n\n                        <p>A quelle heure ?</p></button> -->\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n    </div>\n\n\n\n    <div id="slides">\n\n\n\n        <ion-grid>\n\n            <ion-row class="z-index">\n\n\n\n                <!-- <ion-col> -->\n\n                <ion-slides slidesPerView="1.5" (ionSlideDidChange)="slideChanged()">\n\n                    <ion-slide *ngFor="let r of restaurant;let i= index">\n\n\n\n                        <ion-card (click)="openMenu(i)">\n\n                            <ion-card-content>\n\n\n\n                                <ion-row>\n\n                                    <img src={{r.picture}}/>\n\n\n\n                                    <ion-card-title>\n\n                                        <ion-row>\n\n                                            <h2>{{r.name}}</h2>\n\n                                        </ion-row>\n\n                                        <ion-row>\n\n                                            <h3>{{r.description}}</h3>\n\n                                        </ion-row>\n\n                                        <ion-row>\n\n                                            <h4>nom de la rue</h4>\n\n                                        </ion-row>\n\n                                        <ion-row>\n\n                                            <h4>code postal + ville</h4>\n\n                                        </ion-row>\n\n                                    </ion-card-title>\n\n                                </ion-row>\n\n\n\n                            </ion-card-content>\n\n                        </ion-card>\n\n\n\n                    </ion-slide>\n\n                </ion-slides>\n\n\n\n            </ion-row>\n\n        </ion-grid>\n\n        \n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\home\home.html"*/,
        })
        ////////        Display Data in view        ////////
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 257:
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\contact\contact.html"*/'<ion-content padding>\n\n\n\n    <h1>Mon compte</h1>\n\n\n\n    <div id="container">\n\n        <div class="card">\n\n            <img src="../assets/icon/pin.png">\n\n            Mes informations\n\n        </div>\n\n\n\n        <div class="card">\n\n            <img src="../assets/icon/pin.png">\n\n            Mon moyen de paiement\n\n        </div>\n\n\n\n        <div class="card">\n\n            <img src="../assets/icon/pin.png">\n\n            FAQ\n\n        </div>\n\n\n\n        <div class="card">\n\n            <img src="../assets/icon/pin.png">\n\n            A propos\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_participate_participate__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_book_book__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_details_details__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_recap_recap__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_confirm_confirm__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_account_crea_account_crea__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_add_card_add_card__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_detail_menu_detail_menu__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_secure_storage__ = __webpack_require__(209);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_recap_recap__["a" /* RecapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_account_crea_account_crea__["a" /* AccountCreaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_card_add_card__["a" /* AddCardPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_detail_menu_detail_menu__["a" /* DetailMenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-card/add-card.module#AddCardPageModule', name: 'AddCardPage', segment: 'add-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account-crea/account-crea.module#AccountCreaPageModule', name: 'AccountCreaPage', segment: 'account-crea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-menu/detail-menu.module#DetailMenuPageModule', name: 'DetailMenuPage', segment: 'detail-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recap/recap.module#RecapPageModule', name: 'RecapPage', segment: 'recap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_participate_participate__["a" /* ParticipatePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_recap_recap__["a" /* RecapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_account_crea_account_crea__["a" /* AccountCreaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_card_add_card__["a" /* AddCardPage */], __WEBPACK_IMPORTED_MODULE_23__pages_detail_menu_detail_menu__["a" /* DetailMenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_secure_storage__["a" /* SecureStorage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(252);
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(297);
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
        this.prod = 'https://easy-lunch-tmp.herokuapp.com';
        this.test = 'http://192.168.1.15:5000';
        this.apiUrl = 'https://easy-lunch.herokuapp.com/api/restaurants';
        this.apiUrlMeal = this.test + '/api/meal?id=';
        this.apiUrlPostBooking = this.test + '/api/booking';
        this.apiUrlPostCommand = this.test + '/api/command';
        this.apiUtlGetSingleResto = this.test + '/api/restaurants/';
        this.apiUrlGetAllBookingUser = this.test + '/api/command?iduser=';
        console.log('Hello RestProvider Provider');
    }
    ////    Function to get the restaurants from the API
    RestProvider.prototype.getRestaurants = function () {
        return this.http.get(this.apiUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
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
    RestProvider.prototype.getCommandWithIdUser = function (arg) {
        var url = this.apiUrlGetAllBookingUser + arg;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_secure_storage__ = __webpack_require__(209);
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
    function AddCardPage(navCtrl, navParams, secureStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.secureStorage = secureStorage;
        this.init();
    }
    AddCardPage.prototype.init = function () {
        this.secureStorage.create('card').then(function (storage) {
            console.log("KEYS --> " + storage.keys());
        });
        this.nbCarteFormat = '1234 5678 9123 4567';
        this.nbExpire = "03/19";
        this.ccv = 963;
        this.nameCard = "Cersei Lannister";
    };
    AddCardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCardPage');
    };
    AddCardPage.prototype.openConfirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_confirm__["a" /* ConfirmPage */]);
        console.log("check point !");
    };
    AddCardPage.prototype.formatCardNumber = function () {
        console.log(this.nbCarte);
        var string = this.nbCarte.toString();
        console.log("NB STRING --> " + string);
        var formatstring = "";
        for (var i = 1; i < string.length + 1; i++) {
            formatstring += string.charAt(i - 1);
            if (i % 4 === 0) {
                formatstring += ' ';
            }
        }
        console.log("FORMAT --> " + formatstring);
        this.nbCarteFormat = formatstring;
    };
    AddCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-card',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\add-card\add-card.html"*/'<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <ion-title> Mon moyen de paiement </ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div id="card">\n\n    <div id="card-number">\n\n        {{nbCarteFormat}}\n\n    </div>\n\n      <div id="card-text-expire">\n\n          EXPIRE A FIN\n\n      </div>\n\n      <div id="card-expire">\n\n          {{nbExpire}}\n\n\n\n      </div>\n\n      <div id="card-text-ccv">\n\n          CCV\n\n      </div>\n\n      <div id="card-ccv">\n\n          {{ccv}}\n\n      </div>\n\n      <div id="card-text-name">\n\n          NOM DU TITULAIRE\n\n      </div>\n\n      <div id="card-name">\n\n          {{nameCard}}\n\n      </div>\n\n  </div>\n\n\n\n  <div id="input">\n\n\n\n    <div id="numero"> \n\n        <h2> Numéro de carte </h2> \n\n        <ion-item>\n\n            <ion-input type="tel" maxlength="16" [(ngModel)]="nbCarte" (ngModelChange)="formatCardNumber()" placeholder="1234 5678 9123 4567"></ion-input>\n\n        </ion-item>\n\n    </div>\n\n\n\n    <div class="flex">\n\n      <div id="date"> \n\n        <h2> Date d\'expiration </h2> \n\n        <ion-item>\n\n            <ion-input type="text" maxlength="5" [(ngModel)]="nbExpire" placeholder="mm/yy"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <div id="CCV"> \n\n        <h2> CCV </h2>\n\n        <ion-item>\n\n            <ion-input type="tel" maxlength="3" [(ngModel)]="ccv" placeholder="963"></ion-input>\n\n        </ion-item> \n\n      </div>\n\n    </div>\n\n    \n\n    <div id="nom"> \n\n      <h2> Nom du titulaire </h2>\n\n      <ion-item>\n\n          <ion-input type="text" [(ngModel)]="nameCard" placeholder="Cersei Lannister"></ion-input>\n\n      </ion-item> \n\n    </div>\n\n  \n\n  </div>\n\n\n\n<button ion-button round (click)="openConfirm()">\n\n    <img src="../assets/icon/check.svg">\n\n</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\add-card\add-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_secure_storage__["a" /* SecureStorage */]])
    ], AddCardPage);
    return AddCardPage;
}());

//# sourceMappingURL=add-card.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_add_card__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_crea_account_crea__ = __webpack_require__(132);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\login\login.html"*/'<ion-content padding>\n\n\n\n  <div id="logo"> <img src = "../assets/icon/logo-easylunch.svg"> </div>\n\n\n\n    <img class="envelope" src="../assets/icon/envelope.svg">\n\n    <img class="locked" src="../assets/icon/locked.svg">\n\n\n\n      <div id="input">\n\n          <ion-item>\n\n            <ion-label color="secondary" floating > Email </ion-label>\n\n            <ion-input clearInput></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n              <ion-label color="secondary" floating> Mot de passe </ion-label>\n\n              <ion-input clearInput></ion-input>\n\n          </ion-item>\n\n    </div>\n\n      \n\n      <button id="btnco" ion-button round (click)="openAddCard()">Me connecter</button>\n\n\n\n      <button id="btnpdc" ion-button round (click)="openCrea()">Pas de compte ?</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recap_recap__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_menu_detail_menu__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        this.callBackMenu = function (mealID, menuId) {
            console.log("MENU ID --> " + menuId);
            console.log("MEALS ID --> " + mealID);
            _this.storage.set('menuID', menuId);
            _this.storage.set('menuMealID', mealID);
            _this.menus.map(function (m) {
                if (m.id === menuId) {
                    _this.choosenMenu = m;
                    _this.total += m.price;
                }
            });
            console.log(_this.mapEntree);
            console.log(_this.mapPlat);
            console.log(_this.mapDessert);
            mealID.map(function (m) {
                console.log("MMMM --> " + m);
                var meal = parseInt(m);
                if (_this.mapEntree.has(meal)) {
                    console.log("I FOUND --> " + m);
                    _this.choosenMenuID.push(_this.mapEntree.get(meal).name);
                }
                if (_this.mapPlat.has(meal)) {
                    console.log("I FOUND --> " + m);
                    _this.choosenMenuID.push(_this.mapPlat.get(meal).name);
                }
                if (_this.mapDessert.has(meal)) {
                    console.log("I FOUND --> " + m);
                    _this.choosenMenuID.push(_this.mapDessert.get(meal).name);
                }
            });
        };
        this.choosenMenuID = this.choosenMenuID || [];
        this.mapEntree = new Map();
        this.mapPlat = new Map();
        this.mapDessert = new Map();
        this.entree = this.entree || [];
        this.formule = this.formule || [];
        this.plat = this.plat || [];
        this.dessert = this.dessert || [];
        this.menuOfDay = this.menuOfDay || {};
        this.choosenEntree = this.choosenEntree || [];
        this.choosenPlat = this.choosenPlat || [];
        this.choosenDessert = this.choosenDessert || [];
        this.choosenId = this.choosenId || [];
        this.schedule = true;
        this.nbPers = true;
        this.participate = false;
        this.total = 0;
        this.storage.get('id_restaurant').then(function (data) {
            console.log("ID --> " + data);
            _this.idResto = data;
            _this.getMeals(_this.idResto);
            if (navParams.get('participate')) {
                console.log("JE VIENS DE PARTICIPATE");
                _this.getInfoResto(_this.idResto);
                _this.participate = true;
            }
            else {
                _this.img = _this.navParams.get('img');
                _this.address = _this.navParams.get('address');
                _this.name = _this.navParams.get('name');
                _this.desc = _this.navParams.get('desc');
            }
        }, function (error) { return console.error(error); });
        this.storage.get('nbPers').then(function (data) {
            if (data != null)
                _this.nbPers = true;
            else
                _this.nbPers = false;
            console.log("NBPERS --> " + data);
        }, function (error) { return console.error(error); });
        this.storage.get('schedule').then(function (data) {
            if (data != null)
                _this.schedule = true;
            else
                _this.schedule = false;
            console.log("SCHEDULE --> " + data);
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
        if ((this.schedule && this.nbPers) || this.participate) {
            var obj = void 0;
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
        }
    };
    MenuPage.prototype.openDetailMenu = function (id) {
        var _this = this;
        if ((this.schedule && this.nbPers) || this.participate) {
            console.log("ID MEAL --> " + id);
            var _entree_1 = [];
            var _plat_1 = [];
            var _dessert_1 = [];
            this.menuOfDay.id_plat.forEach(function (id) {
                if (_this.mapEntree.has(id))
                    _entree_1.push(_this.mapEntree.get(id));
                if (_this.mapPlat.has(id))
                    _plat_1.push(_this.mapPlat.get(id));
                if (_this.mapDessert.has(id))
                    _dessert_1.push(_this.mapDessert.get(id));
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detail_menu_detail_menu__["a" /* DetailMenuPage */], {
                entree: _entree_1,
                plat: _plat_1,
                dessert: _dessert_1,
                idMeal: id,
                callback: this.callBackMenu
            });
        }
    };
    MenuPage.prototype.openRecap = function () {
        if ((this.schedule && this.nbPers) || this.participate) {
            this.storage.set('idMeals', this.choosenId);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recap_recap__["a" /* RecapPage */], {
                entree: this.choosenEntree,
                plat: this.choosenPlat,
                dessert: this.choosenDessert,
                total: this.total,
                menu: this.choosenMenu,
                menuMeal: this.choosenMenuID,
                img: this.img,
                address: this.address,
                desc: this.desc,
                name: this.name
            });
            console.log("yeeeah this is your recap my friend !");
        }
    };
    MenuPage.prototype.getMeals = function (id) {
        var _this = this;
        this.rest.getMeals(id)
            .subscribe(function (data) {
            console.log("ALL --> " + JSON.stringify(data[0]));
            _this.meals = data[0].meal;
            _this.menus = data[0].menu;
            _this.formatData();
        }, function (error) { return _this.errorMessage = error; });
    };
    MenuPage.prototype.getInfoResto = function (id) {
        var _this = this;
        this.rest.getRestaurantWithCode(id).subscribe(function (data) {
            _this.img = data.picture;
            _this.address = data.address;
            _this.name = data.name;
            _this.desc = data.description;
        }, function (error) { return _this.errorMessage = error; });
    };
    MenuPage.prototype.formatData = function () {
        var _this = this;
        this.meals.map(function (meal) {
            switch (meal.plat) {
                case 0:
                    _this.entree.push(meal);
                    _this.mapEntree.set(meal.id, meal);
                    break;
                case 1:
                    _this.plat.push(meal);
                    _this.mapPlat.set(meal.id, meal);
                    break;
                case 2:
                    _this.dessert.push(meal);
                    _this.mapDessert.set(meal.id, meal);
                    break;
            }
        });
        this.menus.map(function (m) {
            if (m.mod)
                _this.menuOfDay = m;
            else {
                _this.formule.push(m);
                console.log("AAA --> " + JSON.stringify(m));
                console.log(m.name);
                console.log(m.nbmeals);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], MenuPage.prototype, "content", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\menu\menu.html"*/'<ion-content style="background-color: #F4FAFD;">\n\n\n\n    <div id="restau">\n\n        <div id="img">\n\n            <img src={{img}}/>\n\n            <button (click)="goBack()"><img class="arrow" src="../assets/icon/arrow-left-white.svg"></button>\n\n        </div>\n\n\n\n\n\n        <div id="cardrestau">\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <h1>{{ name }}</h1>\n\n                    <h2>{{ desc }}</h2>\n\n                    <p>{{ address }}</p>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <!--        Menu scrollable      -->\n\n\n\n    <ion-scroll scollX="true" class="scrollmenu">\n\n        <ion-row flex-wrap: nowrap>\n\n            <ion-col>\n\n                <a href="#Menu du jour">Menu du jour</a>\n\n            </ion-col>\n\n            <ion-col>\n\n                <a href="#Formules">Formules</a>\n\n            </ion-col>\n\n            <ion-col>\n\n                <a href="#Entrées">Entrées</a>\n\n            </ion-col>\n\n            <ion-col>\n\n                <a href="#Plats">Plats</a>\n\n            </ion-col>\n\n            <ion-col>\n\n                <a href="#Desserts">Desserts</a>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-scroll>\n\n\n\n    <!--        ///////////////      -->\n\n\n\n\n\n    <!--        Meal choice      -->\n\n\n\n    <div class="selection">\n\n\n\n\n\n        <!--        Menu du jour      -->\n\n\n\n        <div id="Menu du jour">\n\n             \n\n            <h2><img src="../assets/icon/cloche.svg"> Menu du jour</h2>\n\n        </div>\n\n\n\n        <ng-container>\n\n\n\n            <ion-card (click)="openDetailMenu(menuOfDay.id)">\n\n\n\n                <ion-card-content>\n\n                    <div class="entree">\n\n                        <h3>\n\n                            Entrées\n\n                        </h3>\n\n                        <ng-container *ngFor="let item of menuOfDay.id_plat">\n\n                            <ng-container *ngIf="mapEntree.has(item)">\n\n                                <p>{{mapEntree.get(item).name}}</p>\n\n                            </ng-container>\n\n\n\n                        </ng-container>\n\n                    </div>\n\n                    <div class="plat">\n\n                        <h3>\n\n                            Plat\n\n                        </h3>\n\n                        <ng-container *ngFor="let item of menuOfDay.id_plat">\n\n                            <ng-container *ngIf="mapPlat.has(item)">\n\n                                <p>{{mapPlat.get(item).name}}</p>\n\n                            </ng-container>\n\n\n\n                        </ng-container>\n\n                    </div>\n\n                    <div class="dessert">\n\n                        <h3>\n\n                            Dessert\n\n                        </h3>\n\n                        <ng-container *ngFor="let item of menuOfDay.id_plat">\n\n                            <ng-container *ngIf="mapDessert.has(item)">\n\n                                <p>{{mapDessert.get(item).name}}</p>\n\n                            </ng-container>\n\n\n\n                        </ng-container>\n\n                    </div>\n\n\n\n                    <div class="price">\n\n                        {{menuOfDay.price}}€\n\n                    </div>\n\n                </ion-card-content>\n\n\n\n            </ion-card>\n\n\n\n        </ng-container>\n\n\n\n\n\n        <!--        Formules      -->\n\n\n\n        <div id="Formules">\n\n            <h2>Formules</h2>\n\n        </div>\n\n\n\n        <ng-container *ngFor="let item of formule">\n\n\n\n            <ion-card (click)="openDetailMenu(item.id)">\n\n\n\n                <ion-card-content>\n\n                    <div class="menu">\n\n                        <h3>\n\n                            {{item.name}}\n\n                        </h3>\n\n                        <ng-container *ngIf="item.nbmeals===2">\n\n                            <p>\n\n                                Entrée / Plat ou Plat / Dessert\n\n                            </p>\n\n                        </ng-container>\n\n                        <ng-container *ngIf="item.nbmeals===3">\n\n                            <p>\n\n                                Entrée / Plat / Dessert\n\n                            </p>\n\n                        </ng-container>\n\n                    </div>\n\n\n\n                    <div class="price">\n\n                        {{item.price}}€\n\n                    </div>\n\n\n\n        </ion-card-content>\n\n\n\n        </ion-card>\n\n\n\n        </ng-container>\n\n\n\n\n\n        <!--        Entrées      -->\n\n\n\n\n\n        <div id="repas">\n\n\n\n            <div id="Entrées">\n\n                <h2>Entrées</h2>\n\n            </div>\n\n\n\n            <ng-container *ngFor="let item of entree;index as i">\n\n                <ion-card (click)="openDetail(0,i)">\n\n\n\n                    <ion-card-content>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <p> {{item.description}} </p>\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n\n\n                </ion-card>\n\n\n\n            </ng-container>\n\n\n\n\n\n            <!--       Plats      -->\n\n\n\n            <div id="Plats">\n\n                <h2>Plats</h2>\n\n            </div>\n\n\n\n            <ng-container *ngFor="let item of plat;index as i">\n\n\n\n                <ion-card (click)="openDetail(1,i)">\n\n\n\n                    <ion-card-content>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <p> {{item.description}} </p>\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n\n\n                </ion-card>\n\n\n\n            </ng-container>\n\n\n\n\n\n            <!--        Desserts      -->\n\n\n\n            <div id="Desserts">\n\n                <h2>Desserts</h2>\n\n            </div>\n\n\n\n            <ng-container *ngFor="let item of dessert;index as i">\n\n\n\n                <ion-card (click)="openDetail(2,i)">\n\n\n\n                    <ion-card-content>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <p> {{item.description}} </p>\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n\n\n                </ion-card>\n\n\n\n            </ng-container>\n\n\n\n        </div>\n\n\n\n    </div>\n\n\n\n\n\n    <!--        Total price      -->\n\n\n\n        <div id="confirmer"> \n\n            <ng-container *ngIf="total!==0 && ((schedule && nbPers) || participate)">\n\n                <button ion-button round (click)="openRecap()">Confirmer {{total}}€ </button>\n\n            </ng-container>\n\n        </div>\n\n\n\n\n\n    <ng-container *ngIf="(!schedule && !participate) || (!nbPers && !participate)  ">\n\n    <div id="fixed-warning">\n\n        <div id="fixed-warning-text">\n\n        Pour réserver, vous devez renseigner le nombre de personnes attendu ainsi que l\'heure d\'arrivée\n\n        </div>\n\n    </div>\n\n    </ng-container>\n\n\n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Nicolas\Desktop\Digiteld\Easy Lunch\EasyLunch\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

},[258]);
//# sourceMappingURL=main.js.map