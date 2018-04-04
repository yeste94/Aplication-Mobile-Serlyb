webpackJsonp([0],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelTrabajadorViviendaPageModule", function() { return ModelTrabajadorViviendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_trabajador_vivienda__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModelTrabajadorViviendaPageModule = (function () {
    function ModelTrabajadorViviendaPageModule() {
    }
    ModelTrabajadorViviendaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__model_trabajador_vivienda__["a" /* ModelTrabajadorViviendaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__model_trabajador_vivienda__["a" /* ModelTrabajadorViviendaPage */]),
            ],
        })
    ], ModelTrabajadorViviendaPageModule);
    return ModelTrabajadorViviendaPageModule;
}());

//# sourceMappingURL=model-trabajador-vivienda.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelTrabajadorViviendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_trabajador_service_trabajador_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModelTrabajadorViviendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var ModelTrabajadorViviendaPage = (function () {
    function ModelTrabajadorViviendaPage(navCtrl, navParams, renderer, viewCtrl, _trabajadorServiceProvider, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.viewCtrl = viewCtrl;
        this._trabajadorServiceProvider = _trabajadorServiceProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.trabajadores = [];
        this.trabajadoresSelect = "";
        //Abrir modal
        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
        //Recoger variable
        this.vivienda = navParams.get('vivienda');
        //Traer todos los trabajadores
        this._trabajadorServiceProvider.getTrabajadores()
            .then(function (value) {
            var trab = value.json();
            for (var i = 0; i < trab.length; i++) {
                _this.trabajadores.push(trab[i]);
            }
        });
    }
    ModelTrabajadorViviendaPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ModelTrabajadorViviendaPage');
    };
    ModelTrabajadorViviendaPage.prototype.onSelectChange = function (selectedValue) {
        this.trabajadoresSelect = "";
        //this.trabajadoresSelect = selectedValue;
        console.log(selectedValue);
        for (var i = 0; i < selectedValue.length; i++) {
            this.trabajadoresSelect += selectedValue[i].split(" ")[0] + ",";
        }
        this.trabajadoresSelect = this.trabajadoresSelect.substr(0, this.trabajadoresSelect.length - 1);
        //console.log('Selected', selectedValue);
    };
    ModelTrabajadorViviendaPage.prototype.EnviarLista = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({ content: "Cargando..." });
        this.loader.present();
        this._trabajadorServiceProvider.crearTrabajadorVivienda(this.vivienda, this.date, this.trabajadoresSelect)
            .then(function (value) {
            console.log('Guardado CORRECT!' + value);
            _this.loader.dismiss();
            _this.presentToast('Guardado correctamente');
            _this.viewCtrl.dismiss();
        })
            .catch(function (error) {
            _this.presentToast('Error al guardar');
        });
    };
    ModelTrabajadorViviendaPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ModelTrabajadorViviendaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-model-trabajador-vivienda',template:/*ion-inline-start:"C:\xampp\htdocs\AplicationMobile\src\pages\model-trabajador-vivienda\model-trabajador-vivienda.html"*/'<!--\n  Generated template for the ModelTrabajadorViviendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Añadir trabajdor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<label>Fecha: </label>\n<input [(ngModel)]="date" type="date" name="fecha">\n\n\n<ion-item>\n  <ion-label>Trabajadores</ion-label>\n  <ion-select [(ngModel)]="toppings" multiple="true" (ionChange)="onSelectChange($event)" >\n    <ion-option *ngFor="let t of trabajadores">{{t.id}} {{t.nombre}}</ion-option>\n\n  </ion-select>\n</ion-item>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons end>\n      <button (click)=\'EnviarLista(date.value)\' ion-button icon-right color="royal">\n        Enviar\n        <ion-icon name="send" ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\AplicationMobile\src\pages\model-trabajador-vivienda\model-trabajador-vivienda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_trabajador_service_trabajador_service__["a" /* TrabajadorServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ModelTrabajadorViviendaPage);
    return ModelTrabajadorViviendaPage;
}());

//# sourceMappingURL=model-trabajador-vivienda.js.map

/***/ })

});
//# sourceMappingURL=0.js.map