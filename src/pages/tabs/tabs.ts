import { Component } from '@angular/core';

import { ParticipatePage } from '../participate/participate';
import { BookPage } from '../book/book';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
  
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ParticipatePage;
  tab3Root = BookPage;
  tab4Root = ContactPage;

  constructor(public navCtrl:NavController) {
    
  }

    public switchTabs(i) {
        this.navCtrl.parent.select(i);
    }


    public getSelected(){

        return this.navCtrl.parent.getSelected()
    }



}
