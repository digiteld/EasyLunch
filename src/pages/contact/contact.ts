import { Component } from '@angular/core';
import {Card, NavController} from 'ionic-angular';

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
        this.navCtrl.push(AddCardPage);
    }
}
