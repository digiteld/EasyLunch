import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {DetailsPage} from '../details/details';
import {RecapPage} from '../recap/recap';
import {RestProvider} from "../../providers/rest/rest";

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {

        this.entree = this.entree || [];
        this.plat = this.plat || [];
        this.dessert = this.dessert || [];

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MenuPage');
        this.getMeals();


    }

    openDetail() {
        this.navCtrl.push(DetailsPage);
        console.log("well done tu as ouvert la page detail");
    }

    openRecap() {
        this.navCtrl.push(RecapPage);
        console.log("yeeeah this is your recap my friend !");
    }

    private getMeals() {
        this.rest.getMeals()
            .subscribe(
                meal => {
                    this.meals = meal;
                    this.formatData()


                },
                error => this.errorMessage = <any>error);

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

        console.log(this.entree)
        console.log(this.plat)
        console.log(this.dessert)
    }

}
