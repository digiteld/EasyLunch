import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';

import {DetailsPage} from '../details/details';
import {RecapPage} from '../recap/recap';
import {RestProvider} from "../../providers/rest/rest";
import {Storage} from "@ionic/storage";
import {DetailMenuPage} from "../detail-menu/detail-menu";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

    menuOfDay: any;
    formule:any[];

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
    name: strinyeg;
    desc: string;


    @ViewChild(Content) content: Content;

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider, private storage: Storage) {

        this.mapEntree = new Map();
        this.mapPlat = new Map();
        this.mapDessert = new Map();
        this.entree = this.entree || [];
        this.formule=this.formule || [];

        this.plat = this.plat || [];
        this.dessert = this.dessert || [];
        this.menuOfDay=this.menuOfDay|| {}
        this.choosenEntree = this.choosenEntree || [];
        this.choosenPlat = this.choosenPlat || [];
        this.choosenDessert = this.choosenDessert || [];
        this.choosenId = this.choosenId || [];

        this.total = 0;

        this.img = this.navParams.get('img')
        this.address = this.navParams.get('address')
        this.name = this.navParams.get('name')
        this.desc = this.navParams.get('desc')
        this.storage.get('id_restaurant').then(data => {
                console.log("ID --> " + data)
                this.idResto = data
                this.getMeals(this.idResto);
            },
            error => console.error(error));

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

    openDetailMenu()
    {
        let _entree=[]
        let _plat=[]
        let _dessert=[]

        this.menuOfDay.id_plat.forEach(id =>{
            if(this.mapEntree.has(id))
                _entree.push(this.mapEntree.get(id))
            if(this.mapPlat.has(id))
                _plat.push(this.mapPlat.get(id))
            if(this.mapDessert.has(id))
                _dessert.push(this.mapDessert.get(id))

        })

        this.navCtrl.push(DetailMenuPage, {
            entree:_entree,
            plat:_plat,
            dessert:_dessert,


        })
    }


    openRecap() {
        this.storage.set('idMeals', this.choosenId)
        this.navCtrl.push(RecapPage, {
            entree: this.choosenEntree,
            plat: this.choosenPlat,
            dessert: this.choosenDessert,
            total: this.total,
            img: this.img,
            address: this.address,
            desc: this.desc,
            name: this.name

        });
        console.log("yeeeah this is your recap my friend !");
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
                this.menuOfDay=m
            else
            {
                this.formule.push(m)
                console.log("AAA --> "+JSON.stringify(m))
                console.log(m.name)
                console.log(m.nbmeals)

            }
        })


    }


}
