export class Vivienda{
  UR:number;
  num_promocion:number;
  direccion:string;
  poblacion:string;
  provincia:string;
  cod_postal:string;
  tipologia:string;
  inquilino:boolean;
  fecha_ini:Date;
  fecha_fin:Date;
  terminado:boolean;
  fin:boolean;
  falta_fin:string;

  public constructor(UR:number, num_promocion:number,  direccion:string, poblacion:string, provincia:string, cod_postal:string,
                    tipologia:string, inquilino:boolean, fecha_ini:Date, fecha_fin:Date, terminado:boolean, fin:boolean, falta_fin:string){

    this.UR=UR;
    this.num_promocion=num_promocion;
    this.direccion=direccion;
    this.poblacion=poblacion;
    this.provincia=provincia;
    this.cod_postal=cod_postal;
    this.tipologia=tipologia;
    this.inquilino=inquilino;
    this.fecha_fin=fecha_fin;
    this.fecha_ini=fecha_ini;
    this.terminado=terminado;
    this.fin=fin;
    this.falta_fin=falta_fin;
  }



}
