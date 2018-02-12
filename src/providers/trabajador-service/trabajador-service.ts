import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

/*
  Generated class for the TrabajadorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const UrlTrabajador = "https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/trabajador";
const UrlTrabajadorVivienda = "https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/trabviviendadia";

@Injectable()
export class TrabajadorServiceProvider {

  constructor(public http: Http) {
    //console.log('Hello TrabajadorServiceProvider Provider');
  }

  getTrabajadores(){
  	return this.http.get(UrlTrabajador)
  		.toPromise()
  		.then()
  		.catch();
  }


  crearTrabajadorVivienda(id_vivienda:any, date:Date, trabajadores:string){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });

    var body = "vivienda="+id_vivienda.UR+"&trabajadores="+trabajadores+"&date="+date;


    return this.http.post(UrlTrabajadorVivienda+'/createtrabajadorvivienda', body,options)
      .toPromise()
      .then()
      .catch();

  }  

}
