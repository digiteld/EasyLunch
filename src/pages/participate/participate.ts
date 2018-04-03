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
    validate:boolean


    constructor(public navCtrl: NavController, public rest: RestProvider, private storage: Storage) {
        this.notExist = false;
        this.validate=false;
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
                    console.log("JSON --> "+JSON.stringify(data))
                  if(data.id) {
                      this.storage.set('id_command', data.id)
                      this.storage.set('id_restaurant', data.restaurant_id)
                      let schedule = data.schedule
                      schedule = schedule.toString()
                      console.log("SCHEDULE STRING "+schedule)
                      let scheduleFormat= ""
                      for(let y=0; y<schedule.length; y++)
                      {

                          if(y==2)
                          {
                              scheduleFormat+='h'
                          }
                          scheduleFormat+=schedule.charAt(y)

                      }
                      console.log("SCHEDuLE FORMATTT --> "+scheduleFormat)
                      this.storage.set('schedule', scheduleFormat)
                      this.storage.set('nbPers', data.nb_users)
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

    changeText()
    {
        if(this.codeInput.length===0)
        {
            this.validate=false

        }
        else {

this.validate=true
        }
    }


}