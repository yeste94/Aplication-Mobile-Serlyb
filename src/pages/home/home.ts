import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

import {ViviendaServiceProvider} from '../../providers/vivienda-service/vivienda-service';
import {ListPage} from '../list/list';
import {LoginPage} from '../login/login';

import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  viviendas = [];
  loader:any;

  constructor(public navCtrl: NavController,
              private platform: Platform,
              private _ViviendaServiceProvider: ViviendaServiceProvider,
              public loadingCtrl: LoadingController) {

    //Obtener evento cuando se pulsa atras con el boton de android
    this.platform.ready().then( () =>{
      this.platform.registerBackButtonAction( () =>{
        this.navCtrl.setRoot(LoginPage);
      });
    });



    this.getViviendas();
    this.loader = this.loadingCtrl.create({content: "Cargando..."});
    this.loader.present();
  }

  getViviendas(){
    this._ViviendaServiceProvider.getViviendas()
        .then(value =>{
            let vivie = value.json();

            for(let i = 0; i<vivie.length ; i++){
              this.viviendas.push(vivie[i]);
            }
            this.loader.dismiss();
        });
  }


  verVivienda(ur:number){
    this.navCtrl.setRoot(ListPage, {ur:ur});
  }


longPress(){
  console.log('Mantenido pulsado');
}


}
