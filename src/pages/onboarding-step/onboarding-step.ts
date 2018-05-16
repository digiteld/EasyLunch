import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-onboarding-step',
  templateUrl: 'onboarding-step.html',
})





export class OnboardingStepPage {

  steps: any;
  titre: string;
  sousTitre: string;
  buttonText: string;
  index: any;
  img: any;
  bubbleActive: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {



      this.steps= [
          {
          img : 'assets/imgs/onboard2.png',
          titre: 'Choisissez votre restaurant',
          sousTitre: 'Trouvez un restaurant près de votre lieu de travail',
          buttonText: 'Étape suivante',
          bubbleActive: 1
          },
          {
          img : 'assets/imgs/onboard3.png',
          titre: 'Réservez et passez votre commande avant 11h30',
          sousTitre: 'Plat du jour ou à la carte ? Faites votre choix !',
          buttonText: 'Étape suivante',
          bubbleActive: 2
          },
          {
          img : 'assets/imgs/onboard4.png',
          titre: 'Partagez un moment convivial',
          sousTitre: 'Envoyez le code généré pour inviter vos collègues',
          buttonText: 'C\'est parti !',
          bubbleActive: 3
          }
          ];

          this.index = 0;
          this.titre = this.steps[this.index].titre;
          this.sousTitre = this.steps[this.index].sousTitre;
          this.buttonText = this.steps[this.index].buttonText;
          this.img = this.steps[this.index].img;
          this.bubbleActive = this.steps[this.index].bubbleActive;

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingStepPage');
  }

  changeContent(){
      this.index++;
      this.titre = this.steps[this.index].titre;
      this.sousTitre = this.steps[this.index].sousTitre;
      this.buttonText = this.steps[this.index].buttonText;
      this.img = this.steps[this.index].img;
      this.bubbleActive = this.steps[this.index].bubbleActive;
    }


    goStep() {
        if(this.index < 2){
            this.changeContent();
        }else{
            this.goHome();
        }
    }

  goHome() {
    this.navCtrl.popToRoot();
  }

}

