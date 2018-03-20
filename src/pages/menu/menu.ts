import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';

import {DetailsPage} from '../details/details';
import {RecapPage} from '../recap/recap';
import {RestProvider} from "../../providers/rest/rest";
import {Storage} from "@ionic/storage";

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
    meals: any;
    entree: any[];
    plat: any[];
    dessert: any[];
    choosenEntree: any[];
    choosenPlat: any[];
    choosenDessert: any[];
    tmpType: any;
    tmpIndex: number;
    total: number;
    choosenId: number[];


    //API

    idResto:number;

    //FOR HEADER RESTO

    img: any;
    address: string;
    name: string;
    desc: string;


    @ViewChild(Content) content: Content;

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider,private storage: Storage) {

        this.entree = this.entree || [];
        this.plat = this.plat || [];
        this.dessert = this.dessert || [];
        this.choosenEntree = this.choosenEntree || [];
        this.choosenPlat = this.choosenPlat || [];
        this.choosenDessert = this.choosenDessert || [];
        this.choosenId = this.choosenId || [];

        this.total = 0;

        this.img=this.navParams.get('img')
        this.address=this.navParams.get('address')
        this.name= this.navParams.get('name')
        this.desc=this.navParams.get('desc')
        this.storage.get('id_restaurant').then(   data =>
        { console.log("ID --> "+data)
                this.idResto=data
            this.getMeals(this.idResto);},
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


    openRecap() {
        this.storage.set('idMeals',this.choosenId)
        this.navCtrl.push(RecapPage, {
            entree: this.choosenEntree,
            plat: this.choosenPlat,
            dessert: this.choosenDessert,
            total: this.total,
            img:this.img,
            address:this.address,
            desc:this.desc,
            name:this.name

        });
        console.log("yeeeah this is your recap my friend !");
    }


    private getMeals(id) {
        this.rest.getMeals(id)

            .subscribe(
                meal => {
                    this.meals = meal;
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
                console.log("ID of meal select --> "+objSrc[this.tmpIndex].id)
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

                    break;
                case 1:
                    this.plat.push(meal)
                    break;
                case 2:
                    this.dessert.push(meal)
                    break;
            }

        })

    }

}
