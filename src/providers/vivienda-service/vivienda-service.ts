import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

/*
  Generated class for the ViviendaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const viviendasURL = 'https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/viviendas';
const archivoURL = 'https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/archivos';
@Injectable()
export class ViviendaServiceProvider {

  constructor(private http: Http) {
    //console.log('Hello ViviendaServiceProvider Provider');
  }

  getViviendas(){
    return this.http.get(viviendasURL)
        .toPromise()
        .then()
        .catch();
  }

  getVivienda(ur:number){
    return this.http.get(viviendasURL+'/'+ur)
      .toPromise()
      .then()
      .catch();
  }
  //Modifica la vivienda con las datos de fin, termiando y falta_fin
  UpdateVivienda(vivienda:any, fin:boolean, terminado:boolean, falta_fin:string){
    var _fin = fin ? 1 : 0;    
    var _terminado = terminado ? 1 : 0;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });

    var body = 'UR='+vivienda.UR+'&CP='+vivienda.CP+'&Direccion='+vivienda.Direccion+'&Inquilino='+vivienda.Inquilino
        +'&Poblacion='+vivienda.Poblacion+'&Provincia='+vivienda.Provincia+'&Tipologia='+vivienda.Tipologia+'&falta_fin='+falta_fin
        +'&fecha_fin='+vivienda.fecha_fin+'&fecha_ini='+vivienda.fecha_ini+'&fin='+_fin+'num_promocion'+vivienda.num_promocion
        +'&terminado='+_terminado;

    return this.http.post(viviendasURL+'/'+vivienda.UR,body,options)
      .toPromise()
      .then()
      .catch();
  }


  //guarda la foto
  addFoto(base64:string, tipo_archivo:number,id_vivienda:number, id_trabajador:number){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });

    var body = 'base64='+base64+'&tipo_archivo='+tipo_archivo+'&id_vivienda='+id_vivienda+'&id_trabajador='+id_trabajador;

    return this.http.post(archivoURL+'/create',body,options)
      .toPromise()
      .then()
      .catch();
  }

}
