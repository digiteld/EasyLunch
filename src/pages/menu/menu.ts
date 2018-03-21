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

    //API

    idResto: number;

    //FOR HEADER RESTO

    img: any;
    address: string;
    name: string;
    desc: string;

    //verif schedule and nbPErs
    schedule:boolean;
    nbPers:boolean;


    @ViewChild(Content) content: Content;

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, private storage: Storage) {

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
        this.schedule=true;
        this.nbPers=true;


        this.total = 0;



        this.storage.get('id_restaurant').then(data => {
                console.log("ID --> " + data)
                this.idResto = data
                this.getMeals(this.idResto);
                if(navParams.get('participate')) {
                    console.log("JE VIENS DE PARTICIPATE")
                    this.getInfoResto(this.idResto)
                }
                else {

                    this.img = this.navParams.get('img')
                    this.address = this.navParams.get('address')
                    this.name = this.navParams.get('name')
                    this.desc = this.navParams.get('desc')

                }
            },
            error => console.error(error));
        this.storage.get('nbPers').then(data => {
            if(data!=null)
            this.nbPers=true
            else
                this.nbPers=false

            console.log("NBPERS --> "+data)
        }, error => console.error(error))

        this.storage.get('schedule').then(data => {
            if(data!=null)
            this.schedule=true;
            else
                this.schedule=false;

            console.log("SCHEDULE --> "+data)
        }, error => console.error(error))

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuPage');


    }


    ionViewDidEnter() {
        this.content.resize()
    }

    goBack() {
        this.navCtrl.pop();
    }

    openDetail(plat, index) {
        if(this.schedule && this.nbPers) {
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

    openDetailMenu(id) {
        if(this.schedule && this.nbPers) {
            console.log("ID MEAL --> " + id)
            let _entree = []
            let _plat = []
            let _dessert = []

            this.menuOfDay.id_plat.forEach(id => {
                if (this.mapEntree.has(id))
                    _entree.push(this.mapEntree.get(id))
                if (this.mapPlat.has(id))
                    _plat.push(this.mapPlat.get(id))
                if (this.mapDessert.has(id))
                    _dessert.push(this.mapDessert.get(id))

            })

            this.navCtrl.push(DetailMenuPage, {
                entree: _entree,
                plat: _plat,
                dessert: _dessert,
                idMeal: id,
                callback: this.callBackMenu


            })
        }
    }


    openRecap() {
        if(this.schedule && this.nbPers) {
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
                name: this.name

            });
            console.log("yeeeah this is your recap my friend !");
        }
    }


    private getMeals(id) {
        this.rest.getMeals(id)

            .subscribe(
                data => {

                    console.log("ALL --> " + JSON.stringify(data[0]))
                    this.meals = data[0].meal;
                    this.menus = data[0].menu;
                    this.formatData()


                },
                error => this.errorMessage = <any>error);

    }

    private getInfoResto(id)
    {
        this.rest.getRestaurantWithCode(id).subscribe(data => {

                console.log("JSON --> "+JSON.stringify(data))

                this.img = data.picture
                this.address = data.address
                this.name = data.name
                this.desc = data.description

            },
            error => this.errorMessage = <any>error)
    }


    private callbackChild = (p, valeur) => {
        this.total += p;
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
            }
        }

        console.log("TOTAL --> " + this.total)
    }

    private callBackMenu = (mealID, menuId) => {

        console.log("MENU ID --> " + menuId)
        console.log("MEALS ID --> " + mealID)
        this.storage.set('menuID',menuId)
        this.storage.set('menuMealID',mealID)

        this.menus.map(m => {

            if (m.id === menuId) {
                this.choosenMenu = m
                this.total += m.price
            }
        })
        console.log(this.mapEntree)
        console.log(this.mapPlat)
        console.log(this.mapDessert)
        mealID.map(m => {
                console.log("MMMM --> "+m)
            let meal=parseInt(m)
            if (this.mapEntree.has(meal)) {
                console.log("I FOUND --> " + m)
                this.choosenMenuID.push(this.mapEntree.get(meal).name)
            }
            if (this.mapPlat.has(meal)) {
                console.log("I FOUND --> " + m)
                this.choosenMenuID.push(this.mapPlat.get(meal).name)
            }
            if (this.mapDessert.has(meal)) {
                console.log("I FOUND --> " + m)
                this.choosenMenuID.push(this.mapDessert.get(meal).name)
            }


        })

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
