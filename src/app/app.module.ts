import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { ParticipatePage } from '../pages/participate/participate';
import { BookPage } from '../pages/book/book'
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

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

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    ParticipatePage,
    BookPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    DetailsPage,
    RecapPage,
    ConfirmPage,
    LoginPage,
    AccountCreaPage,
    AddCardPage
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
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    DetailsPage,
    RecapPage,
    ConfirmPage,
    LoginPage,
    AccountCreaPage,
    AddCardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
  ]
})
  
export class AppModule { }
