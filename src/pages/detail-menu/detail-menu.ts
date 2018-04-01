import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-menu',
  templateUrl: 'detail-menu.html',
})
export class DetailMenuPage {

  entree:any;
  plat:any;
  dessert:any;

  entreeSelect:boolean;
  platSelect:boolean;
  dessertSelect:boolean;

  showButton:boolean;

  mealId:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

 this.entreeSelect=false;
 this.platSelect=false;
 this.dessertSelect=false;


 this.showButton=false;

 this.mealId=this.mealId || [];

 console.log("AZERTY --> "+this.navParams.get('idMeal'))

 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailMenuPage');
  }


    onChangeEntree()
  {

    console.log(this.entree)
      this.entreeSelect=true;

      this.showValidation()
  }
  onChangePlat()
  {
      console.log(this.plat)
      this.platSelect=true;
      this.showValidation()
  }
  onChangeDessert()
  {
      console.log(this.dessert)
      this.dessertSelect=true;
      this.showValidation()
  }


  showValidation()
  {
    if(this.entreeSelect && this.platSelect && this.dessertSelect)
      this.showButton=true;
    else if(this.entree && this.platSelect && this.navParams.get('nbMeal')===2)
        this.showButton=true;
    else if(this.dessert && this.platSelect && this.navParams.get('nbMeal')===2)
        this.showButton=true;
    else
        this.showButton=false;
  }

  goBackMenu()
  {
      console.log("Je change")
      this.mealId.push(this.entree)
      this.mealId.push(this.plat)
      this.mealId.push(this.dessert)

      let callback = this.navParams.get('callback');
      callback(this.mealId, this.navParams.get('idMeal'))
    this.navCtrl.pop()

  }


}
