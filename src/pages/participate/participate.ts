import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';

import {MenuPage} from '../menu/menu';


@Component({
    selector: 'page-participate',
    templateUrl: 'participate.html'
})

export class ParticipatePage {


    errorMessage: string;
    codeInput: string;
    notExist: boolean

    constructor(public navCtrl: NavController, public rest: RestProvider, private storage: Storage) {
        this.notExist = false;
    }

    ionViewDidLoad() {
        console.log("J'ai charger les page")

    }


    openMenu() {
        this.storage.set('create_booking', false)
        this.rest.getRestaurantWithCode(this.codeInput).subscribe(
            data => {


               try
                {
                  if(data.id) {
                      this.storage.set('id_command', data.id)
                      this.storage.set('id_restaurant', data.restaurant_id)
                      this.navCtrl.push(MenuPage, {
                          participate:true
                      });
                  }
                }
                catch(e)
                {
                    console.log(e)
                    this.notExist=true;

                }

            },
            error => this.errorMessage = <any>error);

        console.log("LE CODE IS --> " + this.codeInput)

        console.log('ton code est validé');
    }

}