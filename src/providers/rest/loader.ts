import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';



@Injectable()
export class LoaderProvider {

  constructor(public loadingCtrl: LoadingController) {

  }

  loading: any = this.loadingCtrl.create({
    content: "Veuillez patienter..."
  })

  show() {
  console.log("show");
    this.loading.present();
  }

  hide() {
    console.log("hide");
    this.loading.dismiss();
  }


}