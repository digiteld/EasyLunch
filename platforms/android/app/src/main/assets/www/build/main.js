webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountCreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_card_add_card__ = __webpack_require__(53);
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
            selector: 'page-account-crea',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\account-crea\account-crea.html"*/'<ion-content padding>\n\n\n\n  <div id="logo"> <img src = "assets/icon/logo-easylunch.svg"> </div>\n\n\n\n    <img class="compte" src= "assets/icon/compte.svg">\n\n    <img class="envelope" src= "assets/icon/envelope.svg">\n\n    <img class="tel" src= "assets/icon/phone.svg">\n\n    <img class="locked" src= "assets/icon/password.svg">\n\n    \n\n      <div id="input">\n\n          <ion-item>\n\n            <!-- <ion-label >  </ion-label> -->\n\n            <ion-input type="text" placeholder="Prénom et Nom"  clearInput> </ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n              <ion-input type="email" placeholder="Email" clearInput></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-input type="number" placeholder="Portable" clearInput> </ion-input>\n\n        </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-input type="password" placeholder="Mot de passe" clearInput> </ion-input>\n\n        </ion-item>\n\n    </div>\n\n      \n\n      <button id="btnco" ion-button round (click)="openAddCard()"> Créer mon compte </button>\n\n\n\n      <button id="btnpdc" ion-button round (click)="openLogin()"> Déjà un compte ? </button>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\account-crea\account-crea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountCreaPage);
    return AccountCreaPage;
}());

//# sourceMappingURL=account-crea.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(42);
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
        this.special = null;
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    ConfirmPage.prototype.init = function () {
        var _this = this;
        this.storage.get('special').then(function (data) {
            _this.special = data;
        }, function (error) { return console.error(error); });
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
            var menu = void 0;
            var meal = void 0;
            if (this.menuID === null)
                menu = null;
            else
                menu = '{\"' + this.menuID + '\":[' + this.menuMealID + ']}';
            if (this.mealId.length === 0)
                meal = null;
            else
                meal = this.mealId;
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            if (this.create) {
                if (this.nbPers != null && this.schedule != null) {
                    this.cleanStorage();
                    console.log("MEAL ID  --> " + this.mealId);
                    console.log("!!! JE CREE UNE RESERVATION !!!");
                    this.postBooking({
                        master_user_id: 1,
                        restaurant_id: 1,
                        nb_users: this.nbPers,
                        schedule: this.schedule,
                        meal_id: meal,
                        date: dateTime,
                        payment_id: 2,
                        menu: menu,
                        total: this.total,
                        special: this.special
                    });
                }
            }
            else {
                if (this.idCommand != null) {
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
                        date: dateTime,
                        special: this.special
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
        this.storage.remove('special');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Tabs */])
    ], ConfirmPage.prototype, "tabRef", void 0);
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\confirm\confirm.html"*/'<ion-content>\n\n\n\n  <div class="all">\n\n\n\n      <div class="img-table">\n\n          <ion-img width="100%" height="100%" style="background: transparent !important;" src="/assets/imgs/code-complete.png"></ion-img>\n\n      </div>\n\n\n\n        <div class="pattern">\n\n\n\n          <div class="padding">\n\n\n\n            <div class="text1"> Merci ! </div>\n\n            <div class="text2"> Votre réservation a bien été prise en compte </div>\n\n\n\n              <ng-container *ngIf="create">\n\n                \n\n                <div class="text3"> Partagez ce code avec les personnes qui participeront au repas avec vous </div>\n\n\n\n                <div class="code">\n\n                  <ion-label> {{code}} </ion-label>\n\n                </div>\n\n\n\n              </ng-container>  \n\n\n\n          </div>\n\n\n\n          <div class="item-check" ion-button round (click)="goHome()">\n\n              <img src="/assets/icon/check2.svg">\n\n          </div>\n\n          \n\n        </div>\n\n\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        else if (this.entree && this.platSelect && this.navParams.get('nbMeal') === 2)
            this.showButton = true;
        else if (this.dessert && this.platSelect && this.navParams.get('nbMeal') === 2)
            this.showButton = true;
        else
            this.showButton = false;
    };
    DetailMenuPage.prototype.goBackMenu = function () {
        console.log("NB MEAL --> " + this.navParams.get('nbMeal'));
        console.log("Je change");
        if (this.navParams.get('nbMeal') === 3) {
            this.mealId.push(this.entree);
            this.mealId.push(this.plat);
            this.mealId.push(this.dessert);
        }
        else {
            console.log("JE VAIS BIEN LA");
            this.mealId.push(this.entree);
            this.mealId.push(this.plat);
        }
        var callback = this.navParams.get('callback');
        callback(this.mealId, this.navParams.get('idMeal'));
        this.navCtrl.pop();
    };
    DetailMenuPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DetailMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-menu',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\detail-menu\detail-menu.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>{{navParams.get(\'name\')}} </ion-title>\n\n    <div class="arrow">\n\n        <button (click)="goBack()"> <img src="/assets/icon/arrow-left-grey.svg"> </button>\n\n      </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n  <p>Entrée</p>\n\n <ion-list radio-group  [(ngModel)]="entree">\n\n\n\n<ng-container *ngFor="let item of navParams.get(\'entree\'); let i = index">\n\n    <ion-card>\n\n   <ion-item>\n\n      <ion-label>{{item.name}}</ion-label>\n\n      <ion-radio (ionSelect)="onChangeEntree()" value={{item.id}}></ion-radio>\n\n    </ion-item>\n\n\n\n\n\n  </ion-card>\n\n\n\n</ng-container>\n\n\n\n </ion-list>\n\n\n\n  <p>Plat</p>\n\n <ion-list radio-group  [(ngModel)]="plat">\n\n\n\n    <ng-container *ngFor="let item of navParams.get(\'plat\')">\n\n      <ion-card>\n\n\n\n  <ion-item>\n\n          <ion-label>{{item.name}}</ion-label>\n\n          <ion-radio (ionSelect)="onChangePlat()" value={{item.id}}></ion-radio>\n\n        </ion-item>\n\n\n\n\n\n\n\n      </ion-card>\n\n\n\n    </ng-container>\n\n\n\n </ion-list>\n\n  <p>Dessert</p>\n\n<ng-container *ngIf="navParams.get(\'nbMeal\')===3">\n\n <ion-list radio-group  [(ngModel)]="dessert">\n\n\n\n    <ng-container *ngFor="let item of navParams.get(\'dessert\')">\n\n      <ion-card>\n\n        <ion-item>\n\n          <ion-label>{{item.name}}</ion-label>\n\n          <ion-radio (ionSelect)="onChangeDessert()" value={{item.id}}></ion-radio>\n\n        </ion-item>\n\n\n\n\n\n      </ion-card>\n\n\n\n    </ng-container>\n\n\n\n </ion-list>\n\n</ng-container>\n\n\n\n    <ng-container *ngIf="navParams.get(\'nbMeal\')===2">\n\n        <ion-list radio-group  [(ngModel)]="entree">\n\n\n\n            <ng-container *ngFor="let item of navParams.get(\'dessert\')">\n\n                <ion-card>\n\n                    <ion-item>\n\n                        <ion-label>{{item.name}}</ion-label>\n\n                        <ion-radio (ionSelect)="onChangeDessert()" value={{item.id}}></ion-radio>\n\n                    </ion-item>\n\n\n\n\n\n                </ion-card>\n\n\n\n            </ng-container>\n\n\n\n        </ion-list>\n\n    </ng-container>\n\n\n\n  </ion-content>\n\n\n\n  <ion-footer>\n\n    <ng-container *ngIf="showButton">\n\n\n\n      <div id="commander"> \n\n          <button ion-button round (click)="goBackMenu()"> Commander &nbsp;&nbsp;&nbsp;&nbsp; x1 &nbsp;&nbsp;&nbsp;&nbsp; {{navParams.get(\'price\')}} € </button>\n\n      </div>\n\n      \n\n    </ng-container>\n\n  </ion-footer>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\detail-menu\detail-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailMenuPage);
    return DetailMenuPage;
}());

//# sourceMappingURL=detail-menu.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    // tabBarElement: any;
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valeur = 1;
        // if (document.querySelector('.tabbar')) {
        //   this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        //   if (document.querySelector('.scroll-content')) {
        //   }
        // }
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
        console.log(this.navParams.get('meal'));
    };
    // ionViewWillEnter() {
    //   if (this.tabBarElement) {
    //     this.tabBarElement.style.display = 'none';
    //   }
    // }
    // ionViewWillLeave() {
    //   if (this.tabBarElement) {
    //     this.tabBarElement.style.display = 'flex';
    //   }
    // }
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
        console.log("SPECIAL --> " + this.special);
        this.navCtrl.pop();
        var p = ((this.valeur) * (this.navParams.get('meal').price * 100)) / 100;
        console.log();
        callback(p, this.valeur, this.special);
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\details\details.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton>\n\n    <ion-title [ngSwitch]="navParams.get(\'meal\').plat">\n\n        <ion-title *ngSwitchCase=0>Entrée</ion-title>\n\n        <ion-title *ngSwitchCase=1>Plat</ion-title>\n\n        <ion-title *ngSwitchCase=2>Dessert</ion-title>\n\n    </ion-title>\n\n    <div class="arrow">\n\n      <button (click)="goBack()"> <img src="assets/icon/arrow-left-grey.svg"> </button>\n\n    </div>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  \n\n    <div class="name"> {{navParams.get(\'meal\').name}} </div>\n\n\n\n    <div class="description"> {{navParams.get(\'meal\').description}} </div>\n\n    \n\n    <div class="number-picker">\n\n\n\n      <div class="left" (click)="decremente()"> <p> <img src="assets/icon/remove.svg"> </p> </div>\n\n      <ion-input type="text" class="number" placeholder={{valeur}}></ion-input>\n\n      <div class="right" (click)="incremente()"> <p> <img src="assets/icon/add.svg"> </p> </div>\n\n\n\n    </div>\n\n\n\n      <ion-card>\n\n          <ion-content> \n\n              Instructions spéciales\n\n            <ion-textarea class="size" type="text" placeholder="Rentrez ici vos commentaires sur la commande (cuisson de la viande, pas de champignons, etc...)" [(ngModel)]="special">  </ion-textarea>\n\n          </ion-content>\n\n      </ion-card>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n    <div id="commander"> \n\n        <button ion-button round (click)="openMenu()">\n\n            COMMANDER  &nbsp;&nbsp;&nbsp;&nbsp; x{{valeur}} &nbsp;&nbsp;&nbsp;&nbsp; {{((valeur)*(navParams.get(\'meal\').price*100))/100}} €\n\n        </button>\n\n    </div>\n\n\n\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

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
		191
	],
	"../pages/add-card/add-card.module": [
		210
	],
	"../pages/confirm/confirm.module": [
		211
	],
	"../pages/detail-menu/detail-menu.module": [
		212
	],
	"../pages/details/details.module": [
		213
	],
	"../pages/login/login.module": [
		214
	],
	"../pages/menu/menu.module": [
		215
	],
	"../pages/recap/recap.module": [
		216
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountCreaPageModule", function() { return AccountCreaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_crea__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountCreaPageModule = (function () {
    function AccountCreaPageModule() {
    }
    AccountCreaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_crea__["a" /* AccountCreaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_crea__["a" /* AccountCreaPage */]),
            ],
        })
    ], AccountCreaPageModule);
    return AccountCreaPageModule;
}());

//# sourceMappingURL=account-crea.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCardPageModule = (function () {
    function AddCardPageModule() {
    }
    AddCardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_card__["a" /* AddCardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_card__["a" /* AddCardPage */]),
            ],
        })
    ], AddCardPageModule);
    return AddCardPageModule;
}());

//# sourceMappingURL=add-card.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmPageModule = (function () {
    function ConfirmPageModule() {
    }
    ConfirmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* ConfirmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* ConfirmPage */]),
            ],
        })
    ], ConfirmPageModule);
    return ConfirmPageModule;
}());

//# sourceMappingURL=confirm.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMenuPageModule", function() { return DetailMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_menu__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailMenuPageModule = (function () {
    function DetailMenuPageModule() {
    }
    DetailMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_menu__["a" /* DetailMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_menu__["a" /* DetailMenuPage */]),
            ],
        })
    ], DetailMenuPageModule);
    return DetailMenuPageModule;
}());

//# sourceMappingURL=detail-menu.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecapPageModule", function() { return RecapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recap__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecapPageModule = (function () {
    function RecapPageModule() {
    }
    RecapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recap__["a" /* RecapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recap__["a" /* RecapPage */]),
            ],
        })
    ], RecapPageModule);
    return RecapPageModule;
}());

//# sourceMappingURL=recap.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__participate_participate__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(264);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  \n\n  <ion-tab [root]="tab1Root" tabTitle="J\'organise" tabIcon="jorganise"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Je participe" tabIcon="je-participe"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Réservations" tabIcon="reservations"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Compte" tabIcon="compte"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(66);
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
        this.validate = false;
    }
    ParticipatePage.prototype.ionViewDidLoad = function () {
        console.log("J'ai charger les page");
    };
    ParticipatePage.prototype.openMenu = function () {
        var _this = this;
        this.storage.set('create_booking', false);
        this.rest.getRestaurantWithCode(this.codeInput.toLowerCase()).subscribe(function (data) {
            try {
                console.log("JSON --> " + JSON.stringify(data));
                if (data.id) {
                    _this.storage.set('id_command', data.id);
                    _this.storage.set('id_restaurant', data.restaurant_id);
                    var schedule = data.schedule;
                    schedule = schedule.toString();
                    console.log("SCHEDULE STRING " + schedule);
                    var scheduleFormat = "";
                    for (var y = 0; y < schedule.length; y++) {
                        if (y == 2) {
                            scheduleFormat += 'h';
                        }
                        scheduleFormat += schedule.charAt(y);
                    }
                    console.log("SCHEDuLE FORMATTT --> " + scheduleFormat);
                    _this.storage.set('schedule', scheduleFormat);
                    _this.storage.set('nbPers', data.nb_users);
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
    ParticipatePage.prototype.changeText = function () {
        if (this.codeInput.length === 0) {
            this.validate = false;
        }
        else {
            this.validate = true;
        }
    };
    ParticipatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-participate',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\participate\participate.html"*/'<ion-content>\n\n\n\n    <div class="all">\n\n\n\n        <div class="img-table">\n\n            <ion-img width="100%" height="100%" style="background: transparent !important;" src="/assets/imgs/code-empty.png"></ion-img>\n\n        </div>\n\n\n\n        <div class="pattern">\n\n\n\n            <div class="padding">\n\n            \n\n                <div class="text"> Je participe à une réservation en cours </div>\n\n\n\n                <ng-container *ngIf="notExist">\n\n                    <ion-img src="/assets/imgs/error.svg"></ion-img>\n\n                </ng-container>\n\n\n\n                <div class="code">\n\n                    <ion-input placeholder="Entrez le code ici" class="text-input" (ionChange)="changeText()" [(ngModel)]= "codeInput" color= "#5E7FB1"></ion-input>\n\n                </div>\n\n\n\n                <ng-container *ngIf="validate">\n\n                    <div class="item-check2" ion-button round (click)="openMenu()">\n\n                        <img src="/assets/icon/check3.svg">\n\n                    </div>\n\n                </ng-container>\n\n\n\n                <ng-container *ngIf="!validate">\n\n                    <div class="item-check" ion-button round (click)="openMenu()">\n\n                        <img src="/assets/icon/check.svg">\n\n                    </div>\n\n                </ng-container>\n\n\n\n            </div>\n\n\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\participate\participate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ParticipatePage);
    return ParticipatePage;
}());

//# sourceMappingURL=participate.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recap_recap__ = __webpack_require__(67);
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
        this.mapResto = new Map();
        this.commandeEncour = false;
    }
    BookPage.prototype.ionViewDidEnter = function () {
    };
    BookPage.prototype.getBooking = function () {
        var _this = this;
        this.rest.getCommandWithIdUser(1).subscribe(function (_booking) {
            _this.booking = _booking.booking;
            console.log(JSON.stringify(_this.booking[0]));
            var date = _this.booking[0].created_date;
            console.log(JSON.stringify(_this.booking[0]));
            if (date != null) {
                if (date.substr(0, 4) == (new Date()).getFullYear()) {
                    if (parseInt(date.substr(5, 2)) - 1 == (new Date()).getMonth()) {
                        if (date.substr(8, 2) == (new Date()).getDate()) {
                            _this.commandeEncour = true;
                        }
                    }
                }
            }
            _booking.infoResto.map(function (resto) {
                if (!_this.mapResto.has(resto.id))
                    _this.mapResto.set(resto.id, resto);
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    BookPage.prototype.openDetail = function (i) {
        var obj = this.booking[i];
        var objResto = this.mapResto.get(obj.restaurant_id);
        console.log("APAPAPAPAPAP --> " + JSON.stringify(obj));
        var printCode = false;
        if (i === 0 && this.commandeEncour)
            printCode = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recap_recap__["a" /* RecapPage */], {
            book: true,
            mealId: obj.meal_id,
            menu: obj.menu,
            img: objResto.picture,
            address: objResto.address,
            name: objResto.name,
            desc: objResto.description,
            schedule: obj.schedule,
            nbPers: obj.nb_users,
            restoId: obj.restaurant_id,
            printCode: printCode,
            bookingId: obj.bookingid,
            total: obj.price
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
            selector: 'page-book',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\book\book.html"*/'<ion-content>\n\n  <div class="full">\n\n    <div class="new">\n\n      <h2> Mes réservations en cours </h2>\n\n      <ng-container *ngIf="!commandeEncour">\n\n      <p> Vous n\'avez aucune réservation en cours ! </p>\n\n      \n\n        <button ion-button round (click)="goHome()">\n\n            J\'organise une réservation\n\n        </button>\n\n      </ng-container>\n\n        <ng-container *ngIf="commandeEncour">\n\n            <ion-card (click)="openDetail(0)">\n\n\n\n                <ion-card-content>\n\n\n\n                    <ion-row>\n\n                        <img src={{mapResto.get(booking[0].restaurant_id).picture}}/>\n\n\n\n                        <ion-card-title>\n\n                            <ion-row>\n\n                                <h2>{{booking[0].name}}</h2>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <h3>{{booking[0].created_date}} </h3>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <h4> {{booking[0].nb_users}} </h4>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <h4> {{booking[0].price}} </h4>\n\n                            </ion-row>\n\n                        </ion-card-title>\n\n                    </ion-row>\n\n\n\n                </ion-card-content>\n\n\n\n            </ion-card>\n\n        </ng-container>\n\n    </div>\n\n\n\n    <div class="old">\n\n      <p> Mes réservations précédentes <p>\n\n    \n\n    <ng-container *ngFor="let item of booking;index as i">\n\n        <ng-container *ngIf="!commandeEncour || (commandeEncour && i>0)" >\n\n      <ion-card (click)="openDetail(i)">\n\n\n\n          <ion-card-content>\n\n\n\n              <ion-row>\n\n                  <img src={{mapResto.get(item.restaurant_id).picture}}/>\n\n\n\n                  <ion-card-title>\n\n                      <ion-row>\n\n                          <h2>{{mapResto.get(item.restaurant_id).name}}</h2>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                            <h3>{{booking[0].created_date}} </h3>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <h4> {{item.nb_users}} </h4>\n\n                      </ion-row>\n\n                      <ion-row>\n\n                          <h4> {{item.price}} </h4>\n\n                      </ion-row>\n\n                  </ion-card-title>\n\n              </ion-row>\n\n\n\n          </ion-card-content>\n\n\n\n        </ion-card>\n\n        </ng-container>\n\n    </ng-container>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\book\book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(45);
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
            console.log("POSITION --> " + e);
            _this.positionFound = true;
            _this.latitude = e.latitude;
            _this.longitude = e.longitude;
            _this.initMarker();
        };
        this.cleanStorage();
        this.mapPin = this.mapPin || [];
        this.pinID = this.pinID || [];
        this.markerArray = this.markerArray || [];
        this.NbPers = null;
        this.Schedule = null;
        this.sliding = false;
        this.formatnbPers = "none";
        this.formatSchedule = "none";
        this.mapLoad = false; // HH:mm
        //HH
        this.positionFound = false;
        this.currentIndex = 0;
        this.allPin = this.allPin || [];
        this.mod = false;
        this.scheduleBtText = "A quelle heure ?";
        this.nbPersBtText = "Pour combien ?";
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
            desc: obj.description,
            city: obj.city
        });
        console.log("well play tu as ouvert la page menu");
    };
    ////     Create a function for animated pin restaurants when slide is active
    HomePage.prototype.moveMarker = function (pin) {
        if (pin) {
            var newIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.icon({
                iconUrl: '../assets/icon/pin.svg',
                iconSize: [60, 80],
                popupAnchor: [0, -15]
            });
            var forkIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.icon({
                iconUrl: '../assets/icon/pin.svg',
                iconSize: [37.5, 50],
                popupAnchor: [0, -15]
            });
            console.log("FUCKING INDEX --> " + this.slides.getPreviousIndex());
            this.mapPin[this.slides.getPreviousIndex()].setIcon(forkIcon);
            pin.bounce({ duration: 500, height: 100 });
            pin.setIcon(newIcon);
        }
    };
    ////     Function to initialize map   -   we using leaflet with mapbox
    HomePage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map("map", { zoomControl: false });
        __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Frb3UiLCJhIjoiY2pkMXNjamlxMGNvazM0cXF5d2FnazM1MiJ9.7CivBv0jVrL9YJem_YZ1AQ', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(this.map);
        this.tryLocate();
        this.map.on('locationfound', function (e) {
            _this.locationfound(e);
        }).on('locationerror', function (err) {
            console.log(err.message);
            _this.tryLocate();
        }).on('load', function (e) {
            console.log("MAP LOAD ");
            _this.mapLoad = true;
            _this.initMarker();
        });
    };
    HomePage.prototype.tryLocate = function () {
        this.map.locate({
            maxZoom: 10,
            timeout: 2
        });
    };
    HomePage.prototype.initMarker = function () {
        if (this.positionFound && this.mapLoad) {
            var pulsingIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.divIcon({
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                popupAnchor: [10, 0],
                shadowSize: [0, 0],
                className: 'css-icon',
                html: '<div id="c" <div class="s"></div> </div>'
            });
            var marker = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([this.latitude, this.longitude], { icon: pulsingIcon });
            this.allPin.push(marker);
            this.markerArray.push(marker);
            console.log("position found --> " + this.positionFound);
            console.log("this map --> " + this.map);
            console.log("mapload --> " + this.mapLoad);
            this.map.addLayer(marker);
            this.zoomOnNearestResto();
        }
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
    HomePage.prototype.validateSchedule = function () {
        console.log("SCHEDULE");
        this.scheduleBtText = this.Schedule;
    };
    HomePage.prototype.validateNbPers = function () {
        this.nbPersBtText = this.NbPers;
        console.log("NbPERS");
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
            iconUrl: '../assets/icon/pin.svg',
            iconSize: [37.5, 50],
            popupAnchor: [0, -15]
        });
        var newIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.icon({
            iconUrl: '../assets/icon/pin.svg',
            iconSize: [60, 80],
            popupAnchor: [0, -15]
        });
        ///   Diplay marker on map
        var array = this.restaurant;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(10).subscribe(function (i) {
            if (i > array.length - 1) {
                return false;
            }
            console.log("MOD --> " + i + " --> " + array[i].mod);
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
        this.storage.remove('menuID');
        this.storage.remove('menuMealID');
        this.storage.remove('total');
        this.storage.remove('nbPers');
        this.storage.remove('schedule');
        this.storage.remove('idMeals');
        this.storage.remove('id_command');
        this.storage.remove('create_booking');
        this.storage.remove('special');
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\home\home.html"*/'<ion-content>\n\n    <div id="map">\n\n\n\n        <ion-grid class="btn">\n\n            <ion-row flex-wrap: nowrap class="z-index">\n\n                <ion-col class="stylecol">\n\n                    <button class="stylebtn" ion-button full icon-start (click)="nbpicker.open()">\n\n                        <ion-datetime #nbpicker pickerFormat="HH" hourValues="1,2,3,4,5,6,7,8,9,10,11,12" displayFormat={{formatnbPers}} doneText="Valider"\n\n                            cancelText="Annuler" [(ngModel)]="NbPers" (ionChange)="validateNbPers()" ></ion-datetime>\n\n                        <ion-icon name="combien"></ion-icon>\n\n                        <p>{{nbPersBtText}}</p>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col class="stylecol">\n\n                    <button class="stylebtn" ion-button full icon-start (click)="schedulepicker.open()">\n\n                        <ion-datetime #schedulepicker pickerFormat="HH/mm" hourValues="11, 12, 13, 14" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" displayFormat={{formatSchedule}}\n\n                            doneText="Valider" cancelText="Annuler" (ionChange)="validateSchedule()" [(ngModel)]="Schedule"></ion-datetime>\n\n                        <ion-icon name="heure"></ion-icon>\n\n                        <p>{{scheduleBtText}}</p>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n    </div>\n\n\n\n    <div id="slides">\n\n            <ion-grid>\n\n                <ion-row class="z-index">\n\n\n\n                    <ion-slides slidesPerView="1" (ionSlideDidChange)="slideChanged()">\n\n                        <ion-slide *ngFor="let r of restaurant; let i = index">\n\n                            \n\n                            <ion-card (click)="openMenu(i)">\n\n                                <ng-container *ngIf="r.mod">\n\n                                <div class="badge">\n\n                                    <img src="assets/icon/platdujour.svg">\n\n                                </div>\n\n                                </ng-container>\n\n                                <ion-card-content>\n\n\n\n\n\n                                    <ion-row>\n\n\n\n                                        <img src={{r.picture}}/>\n\n\n\n                                        <ion-card-title>\n\n                                            <ion-row>\n\n                                                <h2>{{r.name}}</h2>\n\n                                            </ion-row>\n\n                                            <ion-row>\n\n                                                <h3>{{r.description}}</h3>\n\n                                            </ion-row>\n\n                                            <ion-row>\n\n                                                <h4>{{r.address}}</h4>\n\n                                            </ion-row>\n\n                                            <ion-row>\n\n                                                <h4>{{r.city}}</h4>\n\n                                            </ion-row>\n\n                                        </ion-card-title>\n\n                                    </ion-row>\n\n\n\n                                </ion-card-content>\n\n                            </ion-card>\n\n\n\n                        </ion-slide>\n\n                    </ion-slides>\n\n\n\n                </ion-row>\n\n            </ion-grid>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\home\home.html"*/,
        })
        ////////        Display Data in view        ////////
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_add_card__ = __webpack_require__(53);
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
    ContactPage.prototype.openAddCard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_card_add_card__["a" /* AddCardPage */], {
            param: true
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\contact\contact.html"*/'<ion-content padding>\n\n\n\n    <h1>Mon compte</h1>\n\n\n\n    <div id="container">\n\n        <div class="card">\n\n            <img src="assets/icon/mes-infos.svg">\n\n            Mes informations\n\n        </div>\n\n\n\n        <div class="card">  <!--(click)="openAddCard()"-->\n\n            <img src="assets/icon/paiement.svg">\n\n            Mon moyen de paiement\n\n        </div>\n\n\n\n        <div class="card">\n\n            <img src="assets/icon/faq.svg">\n\n            FAQ\n\n        </div>\n\n\n\n        <div class="card">\n\n            <img src="assets/icon/a-propos.svg">\n\n            A propos\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(275);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_participate_participate__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_book_book__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_details_details__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_details_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_recap_recap__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_recap_recap_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_confirm_confirm__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_rest_rest__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_account_crea_account_crea__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_account_crea_account_crea_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_add_card_add_card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_add_card_add_card_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_detail_menu_detail_menu__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_detail_menu_detail_menu_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_storage__ = __webpack_require__(45);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_27__pages_account_crea_account_crea_module__["AccountCreaPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_add_card_add_card_module__["AddCardPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirm_confirm_module__["ConfirmPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_detail_menu_detail_menu_module__["DetailMenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_details_details_module__["DetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu_module__["MenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_recap_recap_module__["RecapPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                }, {
                    links: [
                        { loadChildren: '../pages/account-crea/account-crea.module#AccountCreaPageModule', name: 'AccountCreaPage', segment: 'account-crea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-card/add-card.module#AddCardPageModule', name: 'AddCardPage', segment: 'add-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-menu/detail-menu.module#DetailMenuPageModule', name: 'DetailMenuPage', segment: 'detail-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recap/recap.module#RecapPageModule', name: 'RecapPage', segment: 'recap', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_storage__["a" /* IonicStorageModule */].forRoot()
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
                __WEBPACK_IMPORTED_MODULE_14__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_recap_recap__["a" /* RecapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_account_crea_account_crea__["a" /* AccountCreaPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_add_card_add_card__["a" /* AddCardPage */], __WEBPACK_IMPORTED_MODULE_30__pages_detail_menu_detail_menu__["a" /* DetailMenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(304);
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
        this.apiUrl = 'https://easy-lunch-tmp.herokuapp.com/api/restaurants';
        this.apiUrlMeal = this.prod + '/api/meal?id=';
        this.apiUrlPostBooking = this.prod + '/api/booking';
        this.apiUrlPostCommand = this.prod + '/api/command';
        this.apiUtlGetSingleResto = this.prod + '/api/restaurants/';
        this.apiUrlGetAllBookingUser = this.prod + '/api/command?iduser=';
        this.apiUrlGetCodeByBooking = this.prod + '/api/code/';
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
    RestProvider.prototype.getCodeByBookingId = function (arg) {
        var url = this.apiUrlGetCodeByBooking;
        console.log("urL ---> " + url);
        url += arg;
        console.log("urL ---> " + url);
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData2), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
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

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(259);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCardPage = (function () {
    function AddCardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.init();
    }
    AddCardPage.prototype.init = function () {
        this.showValidation = true;
        if (this.navParams.get('param'))
            this.showValidation = false;
        this.nbCarteFormat = "";
        this.nbExpire = "";
        this.nameCard = "";
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
            selector: 'page-add-card',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\add-card\add-card.html"*/'<ion-header>\n\n\n\n  <ion-toolbar>\n\n    <ion-title> Mon moyen de paiement </ion-title>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div id="card">\n\n\n\n    <div id="card-number">\n\n        <div class="card-num">\n\n            {{nbCarteFormat}}\n\n        </div>\n\n    </div>\n\n\n\n    <div id="card-expire">\n\n      <div class="card-text">\n\n          EXPIRE A FIN\n\n      </div>\n\n      <div class="card-nb">\n\n          {{nbExpire}} \n\n      </div>\n\n    </div>\n\n\n\n    <div id="card-ccv">\n\n      <div class="card-text">\n\n          CCV\n\n      </div>\n\n      <div class="card-nb">\n\n          {{ccv}}\n\n      </div>\n\n    </div>\n\n\n\n    <div id="card-name">\n\n      <div class="card-text">\n\n          NOM DU TITULAIRE\n\n      </div>\n\n      <div class="card-nb">\n\n          {{nameCard}}\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <div id="input">\n\n\n\n    <div id="numero"> \n\n        <h2> Numéro de carte </h2> \n\n        <ion-item>\n\n            <ion-input type="tel" maxlength="16" [(ngModel)]="nbCarte" (ngModelChange)="formatCardNumber()" placeholder="1234 5678 9123 4567"></ion-input>\n\n        </ion-item>\n\n    </div>\n\n\n\n    <div class="flex">\n\n        <div id="date"> \n\n            <h2> Date d\'expiration </h2> \n\n            <ion-item>\n\n                <ion-input type="text" maxlength="5" [(ngModel)]="nbExpire" placeholder="03/19"></ion-input>\n\n            </ion-item>\n\n        </div>\n\n\n\n        <div id="CCV"> \n\n            <h2> CCV </h2>\n\n            <ion-item>\n\n                <ion-input type="tel" maxlength="3" [(ngModel)]="ccv" placeholder="963"></ion-input>\n\n            </ion-item> \n\n        </div>\n\n    </div>\n\n    \n\n    <div id="nom"> \n\n      <h2> Nom du titulaire </h2>\n\n      <ion-item>\n\n          <ion-input type="text" [(ngModel)]="nameCard" placeholder="Cersei Lannister"></ion-input>\n\n      </ion-item> \n\n    </div>\n\n  \n\n  </div>\n\n<ng-container *ngIf="showValidation">\n\n<button ion-button round (click)="openConfirm()">\n\n    <img src="/assets/icon/check.svg">\n\n</button>\n\n</ng-container>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\add-card\add-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddCardPage);
    return AddCardPage;
}());

//# sourceMappingURL=add-card.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_add_card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_crea_account_crea__ = __webpack_require__(104);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\login\login.html"*/'<ion-content padding>\n\n\n\n  <div id="logo"> <img src="assets/icon/logo-easylunch.svg"> </div>\n\n\n\n    <img class="envelope" src="assets/icon/envelope.svg">\n\n    <img class="locked" src="assets/icon/password.svg">\n\n\n\n      <div id="input">\n\n          <ion-item>\n\n            <ion-label color="secondary" floating > Email </ion-label>\n\n            <ion-input type="text" clearInput></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n              <ion-label color="secondary" floating> Mot de passe </ion-label>\n\n              <ion-input type="text" clearInput></ion-input>\n\n          </ion-item>\n\n    </div>\n\n      \n\n      <button id="btnco" ion-button round (click)="openAddCard()">Me connecter</button>\n\n\n\n      <button id="btnpdc" ion-button round (click)="openCrea()">Pas de compte ?</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recap_recap__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_menu_detail_menu__ = __webpack_require__(112);
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
        this.callbackChild = function (p, valeur, special) {
            console.log(p, valeur);
            _this.total = (_this.total * 100 + p * 100) / 100;
            console.log("toto --> " + _this.total);
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
                    console.log("S --> " + special);
                    if (special !== undefined) {
                        _this.special.push(objSrc[_this.tmpIndex].name + " : " + special);
                    }
                }
            }
            console.log("TOTAL --> " + _this.total);
        };
        this.callBackMenu = function (mealID, menuId) {
            _this.storage.set('menuID', menuId);
            _this.storage.set('menuMealID', mealID);
            var json;
            _this.menus.map(function (m) {
                if (m.id === menuId) {
                    _this.choosenMenu = m;
                    _this.total += m.price;
                }
            });
            var p = [];
            console.log(_this.mapEntree);
            console.log(_this.mapPlat);
            console.log(_this.mapDessert);
            mealID.map(function (m) {
                var meal = parseInt(m);
                if (_this.mapEntree.has(meal)) {
                    console.log("I FOUND --> " + m);
                    p.push(_this.mapEntree.get(meal).name);
                }
                if (_this.mapPlat.has(meal)) {
                    console.log("I FOUND --> " + m);
                    p.push(_this.mapPlat.get(meal).name);
                }
                if (_this.mapDessert.has(meal)) {
                    console.log("I FOUND --> " + m);
                    p.push(_this.mapDessert.get(meal).name);
                }
            });
            console.log("MEAL ID --> " + mealID);
            console.log("MENU ID --> " + menuId);
            console.log("CHOOSEN MENU" + JSON.stringify(_this.choosenMenu));
            console.log("MENUMEALID" + _this.choosenMenuID);
            json = { "name": _this.choosenMenu['name'], "mealName": p };
            _this.jsonChooseMenu.push(json);
        };
        this.jsonChooseMenu = this.jsonChooseMenu || [];
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
        this.participate = this.navParams.get('participate');
        this.total = 0;
        this.special = this.special || [];
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
                _this.city = _this.navParams.get('city');
            }
        }, function (error) { return console.error(error); });
        if (!this.participate) {
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
    MenuPage.prototype.scroolToElement = function (id) {
        console.log(id);
        var yOffset = document.getElementById(id).offsetTop;
        this.content.scrollTo(0, yOffset + 290, 0);
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
    MenuPage.prototype.openDetailMenu = function (id, mod) {
        var _this = this;
        if ((this.schedule && this.nbPers) || this.participate) {
            console.log("ID MEAL --> " + id);
            var _entree_1 = [];
            var _plat_1 = [];
            var _dessert_1 = [];
            var nbMeal_1;
            var name_1;
            if (mod) {
                nbMeal_1 = this.menuOfDay.nbmeals;
                name_1 = this.menuOfDay.name;
                this.menuOfDay.id_plat.forEach(function (id) {
                    if (_this.mapEntree.has(id))
                        _entree_1.push(_this.mapEntree.get(id));
                    if (_this.mapPlat.has(id))
                        _plat_1.push(_this.mapPlat.get(id));
                    if (_this.mapDessert.has(id))
                        _dessert_1.push(_this.mapDessert.get(id));
                });
            }
            else {
                this.formule.map(function (f) {
                    if (f.id === id) {
                        name_1 = f.name;
                        nbMeal_1 = f.nbmeals;
                        console.log(JSON.stringify(f));
                        f.id_plat.forEach(function (idMeal) {
                            if (_this.mapEntree.has(idMeal))
                                _entree_1.push(_this.mapEntree.get(idMeal));
                            if (_this.mapPlat.has(idMeal))
                                _plat_1.push(_this.mapPlat.get(idMeal));
                            if (_this.mapDessert.has(idMeal))
                                _dessert_1.push(_this.mapDessert.get(idMeal));
                        });
                    }
                });
            }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detail_menu_detail_menu__["a" /* DetailMenuPage */], {
                name: name_1,
                entree: _entree_1,
                plat: _plat_1,
                dessert: _dessert_1,
                idMeal: id,
                nbMeal: nbMeal_1,
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
                name: this.name,
                city: this.city,
                special: this.special,
                jsonChoosen: this.jsonChooseMenu
            });
            console.log("yeeeah this is your recap my friend !");
        }
    };
    MenuPage.prototype.getMeals = function (id) {
        var _this = this;
        this.rest.getMeals(id)
            .subscribe(function (data) {
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
            _this.city = data.city;
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
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\menu\menu.html"*/'<ion-content>\n\n\n\n    <div id="restau">\n\n        <div id="img">\n\n            <img src={{img}}/>\n\n            <button (click)="goBack()"><img class="arrow" src="/assets/icon/arrow-left-white.svg"></button>\n\n        </div>\n\n\n\n\n\n        <div id="cardrestau">\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <h1>{{ name }}</h1>\n\n                    <h2>{{ desc }}</h2>\n\n                    <p>{{ address }}</p>\n\n                    <p class="city">{{ city }}</p>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <!--        Menu scrollable      -->\n\n    <div class="scroll-menu">\n\n        <ion-scroll scrollX="true" style="width:100%; height:40px">\n\n                <div (click)="scroolToElement(\'menudujour\')"> Menu du jour </div>\n\n                <div (click)="scroolToElement(\'formules\')"> Formules </div>\n\n                <div (click)="scroolToElement(\'entrees\')"> Entrées </div>\n\n                <div (click)="scroolToElement(\'plats\')"> Plats </div>\n\n                <div (click)="scroolToElement(\'desserts\')"> Desserts </div>\n\n        </ion-scroll>\n\n    </div>\n\n    <!--        ///////////////      -->\n\n\n\n\n\n    <!--        Meal choice      -->\n\n\n\n    <div class="selection">\n\n\n\n\n\n        <!--        Menu du jour      -->\n\n\n\n        <div id="menudujour">\n\n             \n\n            <h2><img src="/assets/icon/cloche.svg"> Menu du jour</h2>\n\n        </div>\n\n\n\n        <ng-container>\n\n\n\n            <ion-card (click)="openDetailMenu(menuOfDay.id, true)">\n\n\n\n                <ion-card-content>\n\n                    <div class="entree">\n\n                        <h3>\n\n                            Entrée\n\n                        </h3>\n\n                        <ng-container *ngFor="let item of menuOfDay.id_plat">\n\n                            <ng-container *ngIf="mapEntree.has(item)">\n\n                                <p>{{mapEntree.get(item).name}}</p>\n\n                            </ng-container>\n\n\n\n                        </ng-container>\n\n                    </div>\n\n                    <div class="plat">\n\n                        <h3>\n\n                            Plat\n\n                        </h3>\n\n                        <ng-container *ngFor="let item of menuOfDay.id_plat">\n\n                            <ng-container *ngIf="mapPlat.has(item)">\n\n                                <p>{{mapPlat.get(item).name}}</p>\n\n                            </ng-container>\n\n\n\n                        </ng-container>\n\n                    </div>\n\n                    <div class="dessert">\n\n                        <h3>\n\n                            Dessert\n\n                        </h3>\n\n                        <ng-container *ngFor="let item of menuOfDay.id_plat">\n\n                            <ng-container *ngIf="mapDessert.has(item)">\n\n                                <p>{{mapDessert.get(item).name}}</p>\n\n                            </ng-container>\n\n\n\n                        </ng-container>\n\n                    </div>\n\n\n\n                    <div class="price">\n\n                        {{menuOfDay.price}}€\n\n                    </div>\n\n                </ion-card-content>\n\n\n\n            </ion-card>\n\n\n\n        </ng-container>\n\n\n\n\n\n        <!--        Formules      -->\n\n\n\n        <div id="formules">\n\n            <h2>Formules</h2>\n\n        </div>\n\n\n\n        <ng-container *ngFor="let item of formule">\n\n\n\n            <ion-card (click)="openDetailMenu(item.id,false)">\n\n\n\n                <ion-card-content>\n\n                    <div class="menu">\n\n                        <h3>\n\n                            {{item.name}}\n\n                        </h3>\n\n                        <ng-container *ngIf="item.nbmeals===2">\n\n                            <p>\n\n                                Entrée / Plat ou Plat / Dessert\n\n                            </p>\n\n                        </ng-container>\n\n                        <ng-container *ngIf="item.nbmeals===3">\n\n                            <p>\n\n                                Entrée / Plat / Dessert\n\n                            </p>\n\n                        </ng-container>\n\n                    </div>\n\n\n\n                    <div class="price">\n\n                        {{item.price}}€\n\n                    </div>\n\n\n\n        </ion-card-content>\n\n\n\n        </ion-card>\n\n\n\n        </ng-container>\n\n\n\n\n\n        <!--        Entrées      -->\n\n\n\n\n\n        <div id="repas">\n\n\n\n            <div id="entrees">\n\n                <h2>Entrées</h2>\n\n            </div>\n\n\n\n            <ng-container *ngFor="let item of entree;index as i">\n\n                <ion-card (click)="openDetail(0,i)">\n\n\n\n                    <ion-card-content>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <p> {{item.description}} </p>\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n\n\n                </ion-card>\n\n\n\n            </ng-container>\n\n\n\n\n\n            <!--       Plats      -->\n\n\n\n            <div id="plats">\n\n                <h2>Plats</h2>\n\n            </div>\n\n\n\n            <ng-container *ngFor="let item of plat;index as i">\n\n\n\n                <ion-card (click)="openDetail(1,i)">\n\n\n\n                    <ion-card-content>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <p> {{item.description}} </p>\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n\n\n                </ion-card>\n\n\n\n            </ng-container>\n\n\n\n\n\n            <!--        Desserts      -->\n\n\n\n            <div id="desserts">\n\n                <h2>Desserts</h2>\n\n            </div>\n\n\n\n            <ng-container *ngFor="let item of dessert;index as i">\n\n\n\n                <ion-card (click)="openDetail(2,i)">\n\n\n\n                    <ion-card-content>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <p> {{item.description}} </p>\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n\n\n                </ion-card>\n\n\n\n            </ng-container>\n\n\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>\n\n\n\n    <!--        Total price      -->\n\n\n\n<ion-footer>\n\n        <div id="confirmer"> \n\n            <ng-container *ngIf="total !==0 &&(((schedule && nbPers)) || participate)">\n\n                <button ion-button round (click)="openRecap()" class="btOK"> Confirmer  &nbsp;&nbsp;&nbsp;&nbsp; {{total}} € </button>\n\n            </ng-container>\n\n            <ng-container *ngIf="total===0 && ((schedule && nbPers) || participate)">\n\n                <button ion-button round (click)="openRecap()" class="btNotOK" disabled="true"> Confirmer  &nbsp;&nbsp;&nbsp;&nbsp; {{total}} € </button>\n\n            </ng-container>\n\n        </div>\n\n\n\n\n\n    <ng-container *ngIf="(!schedule && !participate) || (!nbPers && !participate)  ">\n\n        <div id="fixed-warning">\n\n            <div id="fixed-warning-text">\n\n                Pour réserver, vous devez renseigner le nombre de personnes attendu ainsi que l\'heure d\'arrivée\n\n            </div>\n\n        </div>\n\n    </ng-container>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecapPage = (function () {
    function RecapPage(navCtrl, navParams, storage, rest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rest = rest;
        this.img = navParams.get('img');
        this.address = navParams.get('address');
        this.name = navParams.get('name');
        this.desc = navParams.get('desc');
        this.city = navParams.get('city');
        this.entreeList = this.entreeList || [];
        this.platList = this.platList || [];
        this.dessertList = this.dessertList || [];
        this.menuList = this.menuList || [];
        this.menuMeal = this.menuMeal || [];
        this.total = 0;
        this.printCode = false;
        if (!navParams.get('book')) {
            this.init();
        }
        else {
            this.platMap = new Map();
            this.printCode = this.navParams.get('printCode');
            this.nbPers = navParams.get('nbPers');
            var scheduleString = (navParams.get('schedule')).toString();
            var scheduleFormat = "";
            for (var i = 0; i < scheduleString.length; i++) {
                if (i == scheduleString.length - 2)
                    scheduleFormat += 'h';
                scheduleFormat += scheduleString.charAt(i);
            }
            this.schedule = scheduleFormat;
            this.getMeals(navParams.get('restoId'));
            if (this.printCode)
                this.getCode();
        }
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
    RecapPage.prototype.init = function () {
        var _this = this;
        this.storage.set('entree', this.navParams.get('entree'));
        this.storage.set('plat', this.navParams.get('plat'));
        this.storage.set('dessert', this.navParams.get('dessert'));
        this.storage.set('total', this.navParams.get('total'));
        this.total = this.navParams.get('total');
        this.entree = false;
        this.plat = false;
        this.dessert = false;
        this.menu = false;
        if (this.navParams.get('plat').length > 0) {
            this.platList = this.navParams.get('plat');
            this.plat = true;
        }
        if (this.navParams.get('entree').length > 0) {
            this.entree = true;
            this.entreeList = this.navParams.get('entree');
        }
        if (this.navParams.get('dessert').length > 0) {
            this.dessertList = this.navParams.get('dessert');
            this.dessert = true;
        }
        if (this.navParams.get('menuMeal').length > 0) {
            this.menuList = this.navParams.get('menuMeal');
            console.log("OOOOO ---> " + JSON.stringify(this.menuList));
            this.nameMenu = this.navParams.get('menu').name;
            this.menu = true;
        }
        if (this.navParams.get('special').length > 0) {
            this.storage.set('special', this.navParams.get('special'));
        }
        this.storage.get('schedule').then(function (data) {
            _this.schedule = data;
            console.log("DATA --> " + data);
        }, function (error) { return console.error(error); });
        this.storage.get('nbPers').then(function (data) {
            _this.nbPers = data;
            console.log("DATA --> " + data);
        }, function (error) { return console.error(error); });
    };
    RecapPage.prototype.getMeals = function (id) {
        var _this = this;
        this.rest.getMeals(id)
            .subscribe(function (data) {
            _this.meals = data[0].meal;
            _this.menus = data[0].menu;
            _this.formatData();
        }, function (error) { return _this.errorMessage = error; });
    };
    RecapPage.prototype.formatData = function () {
        var _this = this;
        this.meals.map(function (m) {
            switch (m.plat) {
                case 0:
                    _this.platMap.set(m.id, m.name);
                    break;
                case 1:
                    _this.platMap.set(m.id, m.name);
                    break;
                case 2:
                    _this.platMap.set(m.id, m.name);
                    break;
            }
        });
        if (this.navParams.get('mealId') != null) {
            this.meals.map(function (m) {
                if (_this.navParams.get('mealId').indexOf(m.id) != -1) {
                    switch (m.plat) {
                        case 0:
                            _this.entreeList.push(m);
                            _this.entree = true;
                            break;
                        case 1:
                            _this.platList.push(m);
                            _this.plat = true;
                            break;
                        case 2:
                            _this.dessertList.push(m);
                            _this.dessert = true;
                            break;
                    }
                }
            });
        }
        if (this.navParams.get('menu') != null) {
            this.menu = true;
            var obj_1 = this.navParams.get('menu');
            var id_1 = Object.keys(obj_1);
            this.menus.map(function (m) {
                if (m.id == id_1) {
                    console.log(JSON.stringify(m));
                    _this.nameMenu = m.name;
                }
            });
            console.log("ID MOTHERFUCKA --> " + id_1);
            var arrayId_1 = [];
            id_1.map(function (i) {
                arrayId_1 = arrayId_1.concat(obj_1[i]);
            });
            arrayId_1.map(function (ID) {
                _this.menuList.push(_this.platMap.get(ID));
                console.log("ID AAA " + ID);
            });
        }
    };
    RecapPage.prototype.getCode = function () {
        var _this = this;
        var arg = this.navParams.get('bookingId').toString() + '?booking=true';
        console.log(arg);
        this.rest.getCodeByBookingId(arg)
            .subscribe(function (data) {
            _this.code = data.name;
        }, function (error) { return _this.errorMessage = error; });
    };
    RecapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recap',template:/*ion-inline-start:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\recap\recap.html"*/'<ion-content>\n\n\n\n    <div id="restau">\n\n        <div id="img">\n\n            <img src={{img}}/>\n\n            <button (click)="goBack()">\n\n                <img class="arrow" src="assets/icon/arrow-left-white.svg"> </button>\n\n        </div>\n\n\n\n\n\n        <div id="cardrestau">\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <h1>{{ name }}</h1>\n\n                    <h2>{{ desc }}</h2>\n\n                    <p>{{ address }}</p>\n\n                    <p class="city">{{ city }}</p>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n    </div>\n\n\n\n\n\n\n\n    <div id="repas">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <img class="heure" src="assets/icon/clock2.svg">\n\n                    <h3> Auj. à {{schedule}} </h3>\n\n                </ion-col>\n\n\n\n                <ion-col>\n\n                    <img class="cmb" src="assets/icon/users2.svg">\n\n                    <h3> {{nbPers}} personnes </h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <ng-container *ngIf="printCode">\n\n\n\n            Le code de réservation à partager :\n\n            <div> \n\n                {{code}} \n\n            </div>\n\n\n\n        </ng-container>\n\n\n\n\n\n        <ng-container *ngIf="navParams.get(\'jsonChoosen\')">\n\n        <ng-container *ngIf="navParams.get(\'jsonChoosen\').length>0">\n\n            <ng-container *ngFor="let menuChoose of navParams.get(\'jsonChoosen\')">\n\n            <ion-card>\n\n                <ion-card-content>\n\n                    <p>{{menuChoose[\'name\']}}</p>\n\n\n\n                    <ng-container *ngFor="let item of menuChoose[\'mealName\']">\n\n\n\n                        <p>{{item}}</p>\n\n\n\n\n\n                    </ng-container>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            </ng-container>\n\n        </ng-container>\n\n        </ng-container>\n\n\n\n\n\n        <ng-container *ngIf="entree">\n\n            <ng-container *ngFor="let item of entreeList;">\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        <h4>Entrée</h4>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <!-- <p> {{item.description}} </p> -->\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n\n\n\n\n            </ng-container>\n\n        </ng-container>\n\n\n\n        <ng-container *ngIf="plat">\n\n\n\n            <ng-container *ngFor="let item of platList;">\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        <h4>Plat</h4>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <!-- <p> {{item.description}} </p> -->\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n\n\n                </ion-card>\n\n            </ng-container>\n\n\n\n\n\n        </ng-container>\n\n\n\n        <ng-container *ngIf="dessert">\n\n            <ng-container *ngFor="let item of dessertList;">\n\n\n\n                <ion-card>\n\n                    <ion-card-content>\n\n                        <h4>Dessert</h4>\n\n                        <div class="choix">\n\n                            <h3> {{item.name}} </h3>\n\n                            <!-- <p> {{item.description}} </p> -->\n\n                        </div>\n\n\n\n                        <div class="price">\n\n                            {{item.price}}€\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n\n\n            </ng-container>\n\n        </ng-container>\n\n    \n\n    </div>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <div id="total">\n\n        <div class="text"> TOTAL </div>\n\n        <div class="total"> {{navParams.get(\'total\')}}€ </div>\n\n    </div>\n\n\n\n    <ng-container *ngIf="total!==0">\n\n        <div id="payer">\n\n            <button ion-button round (click)="openLogin()">Payer et Réserver &nbsp;&nbsp;&nbsp; {{navParams.get(\'total\')}}€ </button>\n\n        </div>\n\n    </ng-container>\n\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\romai\Desktop\Digiteld\Easy-Lunch\EasyLunch\src\pages\recap\recap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], RecapPage);
    return RecapPage;
}());

//# sourceMappingURL=recap.js.map

/***/ })

},[265]);
//# sourceMappingURL=main.js.map