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
import { MenuPageModule } from '../pages/menu/menu.module';
import { DetailsPage } from '../pages/details/details';
import { DetailsPageModule } from '../pages/details/details.module';
import { RecapPage } from '../pages/recap/recap';
import { RecapPageModule } from '../pages/recap/recap.module';
import { ConfirmPage } from '../pages/confirm/confirm';
import { ConfirmPageModule } from '../pages/confirm/confirm.module';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { AccountCreaPage } from '../pages/account-crea/account-crea';
import { AccountCreaPageModule } from '../pages/account-crea/account-crea.module';
import { AddCardPage } from '../pages/add-card/add-card';
import { AddCardPageModule } from '../pages/add-card/add-card.module';
import {DetailMenuPage} from "../pages/detail-menu/detail-menu";
import {DetailMenuPageModule} from "../pages/detail-menu/detail-menu.module";
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    ParticipatePage,
    BookPage,
    HomePage,
    ContactPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AccountCreaPageModule,
    AddCardPageModule,
    ConfirmPageModule,
    DetailMenuPageModule,
    DetailsPageModule,
    LoginPageModule,
    MenuPageModule,
    RecapPageModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    }),
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
