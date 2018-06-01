import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';

import {MenuPage} from '../menu/menu';
import {TabsPage} from "../tabs/tabs";
import {LoginPage} from "../login/login";


@Component({
    selector: 'page-participate',
    templateUrl: 'participate.html'
})

export class ParticipatePage {


    errorMessage: string;
    codeInput: string;
    notExist: boolean;
    validate:boolean;
    user:any;


    constructor(public navCtrl: NavController, public rest: RestProvider, private storage: Storage, private navParams:NavParams,
                private toastCtrl:ToastController) {
        this.notExist = false;
        this.validate=false;
        this.user=null;

        this.storage.get('user').then(data=>{

            if(data!=null)
            {
                this.user=data
            }


        }, error=>console.log("ERR on get USER IN STORAGE"))



    }

    ionViewDidLoad() {
        console.log("J'ai charger les page")

    }

    ionViewDidEnter() {

        this.storage.get('user').then(data=>{
            if(data!=null)
            {
                this.user=data
            }
            else
            {
                this.user=null
            }

        }, error=>console.log("ERR on get USER IN STORAGE"))

    }


    openMenu() {
        this.storage.set('create_booking', false)
        this.rest.getRestaurantWithCode(this.codeInput.toLowerCase()).subscribe(
            data => {


               try
                {
                    console.log("JSON --> "+JSON.stringify(data))
                    if(data.code===0)
                    {
                        let toast = this.toastCtrl.create({
                            message: 'Oops, trop tard, toutes les commandes de la réservation '+this.codeInput+' ont déjà été effectuées.' ,
                            showCloseButton: true,
                            closeButtonText: "X",
                            dismissOnPageChange: true,
                            position: 'middle'
                        });
                        toast.present();
                    }


                    else if (data.data.id) {
                      this.storage.set('id_command', data.data.id)
                      this.storage.set('id_restaurant', data.data.restaurant_id)
                      let schedule = data.data.schedule
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
                      this.storage.set('nbPers', data.data.nb_users)
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

    goLogin()
    {
        this.navCtrl.push(LoginPage,{returnToBack:true})
    }


}