import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {AddCardPage} from "../add-card/add-card";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {


  }
    openAddCard()
    {
        this.navCtrl.push(AddCardPage, {
          param:true
        });
    }
}
