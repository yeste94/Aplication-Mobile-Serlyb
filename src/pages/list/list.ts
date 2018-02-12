import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController,Platform } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';

import {ViviendaServiceProvider} from '../../providers/vivienda-service/vivienda-service';
import {Vivienda} from '../../Clases/Vivienda';
import {HomePage} from '../home/home';
import {ModelTrabajadorViviendaPage} from '../model-trabajador-vivienda/model-trabajador-vivienda';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  loader:any;
  respuesta = false;
  ur: number;
  vivienda: any;
  latitud:number;
  longitud:number;

  images_antes = [];
  images_despues = [];



  faltado:string;
  finalizado:boolean;
  terminado:boolean;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _viviendaServiceProvider: ViviendaServiceProvider,
              private camera: Camera,
              private modalCtrl:ModalController,
              private http: Http,
              private platform: Platform,
              public loadingCtrl: LoadingController,
              private toastCtrl: ToastController
              ) {

    this.platform.ready().then( () =>{
      this.platform.registerBackButtonAction( () =>{
        this.navCtrl.setRoot(HomePage);
      });
    });

    this.ur = navParams.get('ur');
      
    this.getVivienda(this.ur);

    this.loader = this.loadingCtrl.create({content: "Cargando..."});
    this.loader.present();

  }

  //Guarda los datosde la vivienda
  enviar(){
    this.loader = this.loadingCtrl.create({content: "Cargando..."});
    this.loader.present();
    
    this._viviendaServiceProvider.UpdateVivienda(this.vivienda, this.finalizado, this.terminado, this.faltado)
      .then(res=>{
       this.presentToast('Guardado bien los datos de la vivienda');
       this.addFotos();
      })
      .catch(error=>{
        console.log(error);
      })
  }

  //Guarda las fotos
   addFotos(){
    //Primero creamos dos variables con los base64 de cada foto separadas por ","       
    let imagenes_antes="";
    let imagenes_despues = "";
    for(var i=0; i<this.images_antes.length; i++){      
      imagenes_antes += this.images_antes[i];
      imagenes_antes += ',';
    }
    imagenes_antes = imagenes_antes.substr(0,imagenes_antes.length-1);
    
    for(var i=0;i<this.images_despues.length;i++){
      this.presentToast(this.images_despues[i]);
      imagenes_despues += this.images_despues[i]+',';
    }
    imagenes_despues = imagenes_despues.substr(0,imagenes_despues.length-1);



    //A continuación guardamos las fotos primero las de antes y luego las de después.
    this._viviendaServiceProvider.addFoto(imagenes_antes, 1, this.ur, 1)
      .then(res=>{
        this.presentToast('Guardado bien las primeras fotos');
        this._viviendaServiceProvider.addFoto(imagenes_despues,2, this.ur, 1)
          .then(res=>{
            console.log('BIEEEN!');
            this.presentToast('Guardo bien las fotos');
            this.loader.dismiss();
          })
          .catch(error=>{
            this.presentToast(error);
            console.log(error);
            this.loader.dismiss();
          })
      })
      .catch(error=>{
        this.presentToast(error);
         console.log(error);
         this.loader.dismiss();
      });
   }


  //Obtiene la latitud y la longitud de la vivienda de la direccion
  getLatitudLongitud(){
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.vivienda.Direccion
      +' '+this.vivienda.Poblacion
      +' '+this.vivienda.Provincia
      +'&key=AIzaSyCZZTQDqErFvxJJMNvDE8ZN3XCAx6Trfj4';
    this.http.get(url)
      .toPromise()
      .then(res =>{
        let respuesta = res.json();
        this.latitud = respuesta.results[0]['geometry']['location'].lat;
        this.longitud = respuesta.results[0]['geometry']['location'].lng;
        console.log('Longitud:'+this.longitud+'Latitud: '+this.latitud);
      }) 
      .catch(error=>{
        console.log('Error al obtener la latitud');
      })     
  }


  getVivienda(ur:number){
    this._viviendaServiceProvider.getVivienda(ur)
      .then(value =>{       
        this.respuesta = true;
        this.vivienda = value.json();
        this.faltado = this.vivienda.faltado;
        this.finalizado = this.vivienda.finalizado;
        this.terminado = this.vivienda.terminado;
        this.loader.dismiss();
        this.getLatitudLongitud();
      });
  }

  getPicture_despues(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(ImageData =>{
        //this.image = `data:image/jpeg;base64,${ImageData}`;
        this.images_despues.push(ImageData);
        //console.log(ImageData);
      })
      .catch(error=>{
        console.log( error );
      })

  }




  getPicture_antes(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(ImageData =>{
        //this.image = `data:image/jpeg;base64,${ImageData}`;
        this.images_antes.push(ImageData);
        //console.log(ImageData);
      })
      .catch(error=>{
        console.log( error );
      })
  }


  addTrabajadorVivienda(){
    let modal = this.modalCtrl.create('ModelTrabajadorViviendaPage', {vivienda: this.vivienda});
    modal.present();
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
