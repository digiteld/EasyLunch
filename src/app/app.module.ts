import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ParticipatePage } from '../pages/participate/participate';
import { BookPage } from '../pages/book/book';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';

import { MenuPage } from '../pages/menu/menu';
import { DetailsPage } from '../pages/details/details';
import { RecapPage } from '../pages/recap/recap';
import { ConfirmPage } from '../pages/confirm/confirm';
import { LoginPage } from '../pages/login/login';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { AccountCreaPage } from '../pages/account-crea/account-crea';
import { AddCardPage } from '../pages/add-card/add-card';
import {DetailMenuPage} from "../pages/detail-menu/detail-menu";
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    ParticipatePage,
    BookPage,
    HomePage,
    ContactPage,
    TabsPage,
    MenuPage,
    DetailsPage,
    RecapPage,
    ConfirmPage,
    LoginPage,
    AccountCreaPage,
    AddCardPage,
      DetailMenuPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
      IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ParticipatePage,
    BookPage,
    HomePage,
    ContactPage,
    TabsPage,
    MenuPage,
    DetailsPage,
    RecapPage,
    ConfirmPage,
    LoginPage,
    AccountCreaPage,
    AddCardPage,DetailMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AndroidPermissions,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
      
  ]
})
  
export class AppModule { }
