import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';

import {DetailsPage} from '../details/details';
import {RecapPage} from '../recap/recap';
import {RestProvider} from "../../providers/rest/rest";
import {Storage} from "@ionic/storage";
import {DetailMenuPage} from "../detail-menu/detail-menu";



@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class MenuPage {

    @ViewChild(Content) content: Content;
    errorMessage: string;


    //ALL ITEMS
    meals: any;
    menus: any;

    //FORMAT ITEM
    entree: any[];
    plat: any[];
    dessert: any[];
    choosenEntree: any[];
    choosenPlat: any[];
    choosenDessert: any[];

    choosenMenu: any;
    choosenMenuID: any[]
    menuOfDay: any;
    formule: any[];

    tmpType: any;
    tmpIndex: number;
    total: number;
    choosenId: number[];

    mapEntree: any;
    mapPlat: any;
    mapDessert: any;

    jsonChooseMenu: any[];

    //API

    idResto: number;

    //FOR HEADER RESTO

    img: any;
    address: string;
    name: string;
    desc: string;
    city: string;

    //verif schedule and nbPErs
    schedule: boolean;
    nbPers: boolean;
    participate: boolean;

    special: any




    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, private storage: Storage) {


        this.jsonChooseMenu = this.jsonChooseMenu || [];


        this.choosenMenuID = this.choosenMenuID || [];
        this.mapEntree = new Map();
        this.mapPlat = new Map();
        this.mapDessert = new Map();
        this.entree = this.entree || [];
        this.formule = this.formule || [];

        this.plat = this.plat || [];
        this.dessert = this.dessert || [];
        this.menuOfDay = this.menuOfDay || {}
        this.choosenEntree = this.choosenEntree || [];
        this.choosenPlat = this.choosenPlat || [];
        this.choosenDessert = this.choosenDessert || [];
        this.choosenId = this.choosenId || [];


        this.schedule = true;
        this.nbPers = true;
        this.participate = false;

        this.participate = this.navParams.get('participate')


        this.total = 0;

        this.special = this.special || [];

        this.storage.get('id_restaurant').then(data => {
                console.log("ID --> " + data)
                this.idResto = data
                this.getMeals(this.idResto);
                if (navParams.get('participate')) {
                    console.log("JE VIENS DE PARTICIPATE")
                    this.getInfoResto(this.idResto)
                    this.participate = true;
                }
                else {

                    this.img = this.navParams.get('img')
                    this.address = this.navParams.get('address')
                    this.name = this.navParams.get('name')
                    this.desc = this.navParams.get('desc')
                    this.city = this.navParams.get('city')

                }
            },
            error => console.error(error));
        if (!this.participate) {

            this.storage.get('nbPers').then(data => {
                if (data != null)
                    this.nbPers = true
                else
                    this.nbPers = false

                console.log("NBPERS --> " + data)
            }, error => console.error(error))

            this.storage.get('schedule').then(data => {
                if (data != null)
                    this.schedule = true;
                else
                    this.schedule = false;

                console.log("SCHEDULE --> " + data)
            }, error => console.error(error))
        }

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuPage');
    }

    scrollToElement(id)
{
    console.log("JE SCROLL")
    this.content.scrollTo(0, 1000, 0)
}

    ionViewDidEnter() {
        this.content.resize()
    }

    goBack() {
        this.navCtrl.pop();
    }

    scroolToElement(id) {
        console.log(id)

        let menu = document.getElementById("scrool-menudujour");
        let formules = document.getElementById("scrool-formules");
        let entrees = document.getElementById("scrool-entrees");
        let plats = document.getElementById("scrool-plats");
        let desserts = document.getElementById("scrool-desserts");
        let boissons = document.getElementById("scrool-boissons");

        menu.style.borderBottomColor = "#F2F2F2";
        formules.style.borderBottomColor = "#F2F2F2";
        entrees.style.borderBottomColor = "#F2F2F2";
        plats.style.borderBottomColor = "#F2F2F2";
        desserts.style.borderBottomColor = "#F2F2F2";
        boissons.style.borderBottomColor = "#F2F2F2";

        switch(id)
        {
            case "menudujour":
                menu.style.borderBottomColor = "#F9B522";
                break;

            case "formules":
                formules.style.borderBottomColor = "#F9B522";
                break;

            case "entrees":
                entrees.style.borderBottomColor = "#F9B522";
                break;

            case "plats":
                plats.style.borderBottomColor = "#F9B522";
                break;

            case "desserts":
                desserts.style.borderBottomColor = "#F9B522";
                break;

            case "boissons":
                boissons.style.borderBottomColor = "#F9B522";
                break;

        }
        let yOffset = document.getElementById(id).offsetTop;
        /*this.content.scrollTo(0, yOffset + 290, 0)*/
    }

    openDetail(plat, index) {
        if ((this.schedule && this.nbPers) || this.participate) {
            let obj
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
            console.log("AVANT crash --> " + obj[index].name)
            this.navCtrl.push(DetailsPage, {
                meal: obj[index],
                callback: this.callbackChild
            });
            console.log("well done tu as ouvert la page detail");
        }
    }

    openDetailMenu(id, mod) {
        if ((this.schedule && this.nbPers) || this.participate) {
            console.log("ID MEAL --> " + id)
            let _entree = []
            let _plat = []
            let _dessert = []
            let nbMeal
            let name;

            if (mod) {
                nbMeal = this.menuOfDay.nbmeals
                name = this.menuOfDay.name
                this.menuOfDay.id_plat.forEach(id => {
                    if (this.mapEntree.has(id))
                        _entree.push(this.mapEntree.get(id))
                    if (this.mapPlat.has(id))
                        _plat.push(this.mapPlat.get(id))
                    if (this.mapDessert.has(id))
                        _dessert.push(this.mapDessert.get(id))

                })
            }
            else {
                this.formule.map(f => {
                    if (f.id === id) {
                        name = f.name
                        nbMeal = f.nbmeals
                        console.log(JSON.stringify(f))
                        f.id_plat.forEach(idMeal => {
                            if (this.mapEntree.has(idMeal))
                                _entree.push(this.mapEntree.get(idMeal))
                            if (this.mapPlat.has(idMeal))
                                _plat.push(this.mapPlat.get(idMeal))
                            if (this.mapDessert.has(idMeal))
                                _dessert.push(this.mapDessert.get(idMeal))

                        })


                    }
                })
            }

            this.navCtrl.push(DetailMenuPage, {
                name: name,
                entree: _entree,
                plat: _plat,
                dessert: _dessert,
                idMeal: id,
                nbMeal: nbMeal,
                callback: this.callBackMenu


            })
        }
    }


    openRecap() {
        if ((this.schedule && this.nbPers) || this.participate) {
            this.storage.set('idMeals', this.choosenId)
            this.navCtrl.push(RecapPage, {
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
    }


    private getMeals(id) {
        this.rest.getMeals(id)

            .subscribe(
                data => {


                    this.meals = data[0].meal;
                    this.menus = data[0].menu;
                    this.formatData()


                },
                error => this.errorMessage = <any>error);

    }

    private getInfoResto(id) {
        this.rest.getRestaurantWithCode(id).subscribe(data => {


                this.img = data.picture
                this.address = data.address
                this.name = data.name
                this.desc = data.description
                this.city = data.city

            },
            error => this.errorMessage = <any>error)
    }



    private callbackChild = (p, valeur, special) => {

        console.log(p, valeur)

        this.total = (this.total * 100 + p * 100) / 100;
        console.log("toto --> " + this.total)
        if (valeur > 0) {
            let objSrc;
            let objDst;
            switch (this.tmpType) {
                case 0:

                    objSrc = this.entree;
                    objDst = this.choosenEntree;
                    break;
                case 1:
                    objSrc = this.plat;
                    objDst = this.choosenPlat;
                    break;
                case 2:
                    objSrc = this.dessert;
                    objDst = this.choosenDessert;
                    break;

            }

            for (let i = 0; i < valeur; i++) {
                objDst.push(objSrc[this.tmpIndex])
                console.log("ID of meal select --> " + objSrc[this.tmpIndex].id)
                this.choosenId.push(objSrc[this.tmpIndex].id)

                console.log("S --> " + special)
                if (special !== undefined) {
                    this.special.push(objSrc[this.tmpIndex].name + " : " + special)
                }
            }

        }

        console.log("TOTAL --> " + this.total)
    }

    private callBackMenu = (mealID, menuId) => {


        this.storage.set('menuID', menuId)
        this.storage.set('menuMealID', mealID)
        let json;

        this.menus.map(m => {

            if (m.id === menuId) {
                this.choosenMenu = m
                this.total += m.price
            }
        })
        let p = []
        console.log(this.mapEntree)
        console.log(this.mapPlat)
        console.log(this.mapDessert)
        mealID.map(m => {
            let meal = parseInt(m)
            if (this.mapEntree.has(meal)) {
                console.log("I FOUND --> " + m)
                p.push(this.mapEntree.get(meal).name)
            }
            if (this.mapPlat.has(meal)) {
                console.log("I FOUND --> " + m)
                p.push(this.mapPlat.get(meal).name)
            }
            if (this.mapDessert.has(meal)) {
                console.log("I FOUND --> " + m)
                p.push(this.mapDessert.get(meal).name)
            }


        })

        console.log("MEAL ID --> " + mealID)
        console.log("MENU ID --> " + menuId)
        console.log("CHOOSEN MENU" + JSON.stringify(this.choosenMenu))
        console.log("MENUMEALID" + this.choosenMenuID)
        json = {"name": this.choosenMenu['name'], "mealName": p, "price":this.choosenMenu['price']}

        this.jsonChooseMenu.push(json)


    }


    private formatData() {
        this.meals.map(meal => {


            switch (meal.plat) {
                case 0:
                    this.entree.push(meal)
                    this.mapEntree.set(meal.id, meal);

                    break;
                case 1:
                    this.plat.push(meal)
                    this.mapPlat.set(meal.id, meal);
                    break;
                case 2:
                    this.dessert.push(meal)
                    this.mapDessert.set(meal.id, meal);
                    break;
            }

        })

        this.menus.map(m => {
            if (m.mod)
                this.menuOfDay = m
            else {
                this.formule.push(m)
                console.log("AAA --> " + JSON.stringify(m))
                console.log(m.name)
                console.log(m.nbmeals)

            }
        })


    }


}
