import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Renderer } from '@angular/core';

import {TrabajadorServiceProvider} from '../../providers/trabajador-service/trabajador-service';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ModelTrabajadorViviendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-model-trabajador-vivienda',
  templateUrl: 'model-trabajador-vivienda.html',
})
export class ModelTrabajadorViviendaPage {

	vivienda:any;
	trabajadores= [];
  trabajadoresSelect = "";
  date:any;
  loader:any;
  constructor(public navCtrl: NavController, 
  			public navParams: NavParams,
  			public renderer: Renderer,
  			public viewCtrl: ViewController,
        public _trabajadorServiceProvider: TrabajadorServiceProvider,
        public loadingCtrl: LoadingController,
        private toastCtrl: ToastController) {

    //Abrir modal
  	this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
    //Recoger variable
    this.vivienda = navParams.get('vivienda');

    //Traer todos los trabajadores
    this._trabajadorServiceProvider.getTrabajadores()
      .then( value =>{
        let trab = value.json();

        for(let i=0; i<trab.length; i++){
          this.trabajadores.push(trab[i]);
        }
      })
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad ModelTrabajadorViviendaPage');
  }

  onSelectChange(selectedValue: any) {
    this.trabajadoresSelect = "";
    //this.trabajadoresSelect = selectedValue;
    console.log(selectedValue);
    for(let i=0; i<selectedValue.length; i++){
      this.trabajadoresSelect += selectedValue[i].split(" ")[0]+",";
    }
    this.trabajadoresSelect = this.trabajadoresSelect.substr(0, this.trabajadoresSelect.length-1);

    //console.log('Selected', selectedValue);
  }

  EnviarLista(){

    this.loader = this.loadingCtrl.create({content: "Cargando..."});
    this.loader.present();

    this._trabajadorServiceProvider.crearTrabajadorVivienda(this.vivienda,this.date,this.trabajadoresSelect)
      .then(value=>{
        console.log('Guardado CORRECT!'+ value );
        this.loader.dismiss();
        this.presentToast('Guardado correctamente');
         this.viewCtrl.dismiss();
      })
      .catch(error=>{
        this.presentToast('Error al guardar');
      })
  }


presentToast(mensaje:string) {
  let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}



}
