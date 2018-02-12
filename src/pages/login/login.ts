import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {Http, Headers, RequestOptions} from '@angular/http';

import {HomePage} from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const URLOGIN = 'https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/usuario/login';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              private platform: Platform,
              public navParams: NavParams,
              private http: Http) {
    this.platform.ready().then( () =>{
      this.platform.registerBackButtonAction( () =>{
        this.platform.exitApp();
      });
    });


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    public login(user:string, pass:string){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({headers: headers});

        var body = 'username='+user+'&password='+pass;

        this.http.post(URLOGIN,body,options)
            .subscribe(res =>{
                    console.log(res+'    Login correct!!!!');
                    this.navCtrl.setRoot(HomePage);
                },
                error => console.log(error)
            );
    }


pasar(){
  this.navCtrl.setRoot(HomePage);
}

}
