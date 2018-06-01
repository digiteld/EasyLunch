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
import { AccountCreaPage } from '../pages/account-crea/account-crea';
import { AccountCreaPageModule } from '../pages/account-crea/account-crea.module';
import { AddCardPage } from '../pages/add-card/add-card';
import { AddCardPageModule } from '../pages/add-card/add-card.module';
import { DetailMenuPage } from "../pages/detail-menu/detail-menu";
import { DetailMenuPageModule } from "../pages/detail-menu/detail-menu.module";
import { OnboardingPage } from "../pages/onboarding/onboarding";
import { OnboardingPageModule } from "../pages/onboarding/onboarding.module";
import { OnboardingStepPage } from "../pages/onboarding-step/onboarding-step";
import { OnboardingStepPageModule } from "../pages/onboarding-step/onboarding-step.module";
import { AboutPage } from "../pages/about/about";
import { AboutPageModule } from "../pages/about/about.module";
import { PassRecoverPage } from "../pages/pass-recover/pass-recover";
import { PassRecoverModule } from "../pages/pass-recover/pass-recover.module";
import { CgPage } from "../pages/cg/cg";
import { CgPageModule } from "../pages/cg/cg.module";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { LoaderProvider } from '../providers/rest/loader';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import {FaqPage} from "../pages/faq/faq";
import {FaqPageModule} from "../pages/faq/faq.module";
import { ConfidentialPolicyPage } from '../pages/confidential-policy/confidential-policy';
import { ConfidentialPolicyPageModule } from '../pages/confidential-policy/confidential-policy.module';
import {InformationPageModule} from "../pages/information/information.module";
import {InformationPage} from "../pages/information/information";

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
    OnboardingPageModule,
    OnboardingStepPageModule,
    AboutPageModule,
    PassRecoverModule,
    CgPageModule,
    FaqPageModule,
    ConfidentialPolicyPageModule,
      InformationPageModule,

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
    AddCardPage,
    DetailMenuPage,
    OnboardingPage,
    OnboardingStepPage,
    AboutPage,
    PassRecoverPage,
    CgPage,
    FaqPage,
    ConfidentialPolicyPage,
      InformationPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AndroidPermissions,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    LoaderProvider

  ]
})

export class AppModule { }
