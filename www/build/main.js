webpackJsonp([2],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		278,
		1
	],
	"../pages/model-trabajador-vivienda/model-trabajador-vivienda.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajadorServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TrabajadorServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UrlTrabajador = "https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/trabajador";
var UrlTrabajadorVivienda = "https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/trabviviendadia";
var TrabajadorServiceProvider = (function () {
    function TrabajadorServiceProvider(http) {
        this.http = http;
        //console.log('Hello TrabajadorServiceProvider Provider');
    }
    TrabajadorServiceProvider.prototype.getTrabajadores = function () {
        return this.http.get(UrlTrabajador)
            .toPromise()
            .then()
            .catch();
    };
    TrabajadorServiceProvider.prototype.crearTrabajadorVivienda = function (id_vivienda, date, trabajadores) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = "vivienda=" + id_vivienda.UR + "&trabajadores=" + trabajadores + "&date=" + date;
        return this.http.post(UrlTrabajadorVivienda + '/createtrabajadorvivienda', body, options)
            .toPromise()
            .then()
            .catch();
    };
    TrabajadorServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TrabajadorServiceProvider);
    return TrabajadorServiceProvider;
}());

//# sourceMappingURL=trabajador-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_vivienda_service_vivienda_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_search_search__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_trabajador_service_trabajador_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { GoogleMaps } from '@ionic-native/google-maps';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_search_search__["a" /* SearchPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/model-trabajador-vivienda/model-trabajador-vivienda.module#ModelTrabajadorViviendaPageModule', name: 'ModelTrabajadorViviendaPage', segment: 'model-trabajador-vivienda', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                //GoogleMaps,
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_vivienda_service_vivienda_service__["a" /* ViviendaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_trabajador_service_trabajador_service__["a" /* TrabajadorServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\AplicationMobile\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n\n  </ion-header>\n\n  <ion-content>\n\n<ion-card text-center class="hide-card">\n    <img src="http://placehold.it/300x200" class="custom-avatar"/>\n    <h2>Usuario</h2>\n    <hr>\n</ion-card>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\AplicationMobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchPipe = (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        return items.filter(function (c) {
            if (c['UR'].toString().indexOf(terms) == -1) {
                return false;
            }
            else {
                return true;
            }
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vivienda_service_vivienda_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, platform, _ViviendaServiceProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this._ViviendaServiceProvider = _ViviendaServiceProvider;
        this.loadingCtrl = loadingCtrl;
        this.viviendas = [];
        //Obtener evento cuando se pulsa atras con el boton de android
        this.platform.ready().then(function () {
            _this.platform.registerBackButtonAction(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            });
        });
        this.getViviendas();
        this.loader = this.loadingCtrl.create({ content: "Cargando..." });
        this.loader.present();
    }
    HomePage.prototype.getViviendas = function () {
        var _this = this;
        this._ViviendaServiceProvider.getViviendas()
            .then(function (value) {
            var vivie = value.json();
            for (var i = 0; i < vivie.length; i++) {
                _this.viviendas.push(vivie[i]);
            }
            _this.loader.dismiss();
        });
    };
    HomePage.prototype.verVivienda = function (ur) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */], { ur: ur });
    };
    HomePage.prototype.longPress = function () {
        console.log('Mantenido pulsado');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\AplicationMobile\src\pages\home\home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vivienda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n  \n  <ion-list inset>\n    <button ion-item *ngFor="let v of viviendas | search : terms" (click)="verVivienda(v.UR)" (press)="longPress()">\n      UR: {{v.UR}}\n    </button> \n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\AplicationMobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_vivienda_service_vivienda_service__["a" /* ViviendaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var URLOGIN = 'https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/usuario/login';
var LoginPage = (function () {
    function LoginPage(navCtrl, platform, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.http = http;
        this.platform.ready().then(function () {
            _this.platform.registerBackButtonAction(function () {
                _this.platform.exitApp();
            });
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user, pass) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = 'username=' + user + '&password=' + pass;
        this.http.post(URLOGIN, body, options)
            .subscribe(function (res) {
            console.log(res + '    Login correct!!!!');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) { return console.log(error); });
    };
    LoginPage.prototype.pasar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\AplicationMobile\src\pages\login\login.html"*/'<ion-header >\n\n</ion-header>\n<ion-content padding>\n\n\n  <ion-list no-lines padding-top>\n    <ion-item>\n      <ion-input #username type="text" placeholder="Username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input #pass type="password" placeholder="Password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button block round color="secondary" (click)=\'login(username.value, pass.value)\'>Login</button>\n\n  <div padding-top>\n    <!--<button ion-button block color="light" clear (click)="signupPage();">Registrarse</button>-->\n    <!--<button ion-button block color="light" clear (click)="forgotPasswordPage();">He olvidado la contraseña</button>-->\n  </div>\n  \n  <img src="data:image/jpeg;base64,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">\n\n\n  <button (click)="pasar()">Pasar</button>\n  \n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\AplicationMobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViviendaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ViviendaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var viviendasURL = 'https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/viviendas';
var archivoURL = 'https://jyeste.000webhostapp.com/ApiSerlyb/ApiSerlyb/public/index.php/api/v1/archivos';
var ViviendaServiceProvider = (function () {
    function ViviendaServiceProvider(http) {
        this.http = http;
        //console.log('Hello ViviendaServiceProvider Provider');
    }
    ViviendaServiceProvider.prototype.getViviendas = function () {
        return this.http.get(viviendasURL)
            .toPromise()
            .then()
            .catch();
    };
    ViviendaServiceProvider.prototype.getVivienda = function (ur) {
        return this.http.get(viviendasURL + '/' + ur)
            .toPromise()
            .then()
            .catch();
    };
    //Modifica la vivienda con las datos de fin, termiando y falta_fin
    ViviendaServiceProvider.prototype.UpdateVivienda = function (vivienda, fin, terminado, falta_fin) {
        var _fin = fin ? 1 : 0;
        var _terminado = terminado ? 1 : 0;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = 'UR=' + vivienda.UR + '&CP=' + vivienda.CP + '&Direccion=' + vivienda.Direccion + '&Inquilino=' + vivienda.Inquilino
            + '&Poblacion=' + vivienda.Poblacion + '&Provincia=' + vivienda.Provincia + '&Tipologia=' + vivienda.Tipologia + '&falta_fin=' + falta_fin
            + '&fecha_fin=' + vivienda.fecha_fin + '&fecha_ini=' + vivienda.fecha_ini + '&fin=' + _fin + 'num_promocion' + vivienda.num_promocion
            + '&terminado=' + _terminado;
        return this.http.post(viviendasURL + '/' + vivienda.UR, body, options)
            .toPromise()
            .then()
            .catch();
    };
    //guarda la foto
    ViviendaServiceProvider.prototype.addFoto = function (base64, tipo_archivo, id_vivienda, id_trabajador) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = 'base64=' + base64 + '&tipo_archivo=' + tipo_archivo + '&id_vivienda=' + id_vivienda + '&id_trabajador=' + id_trabajador;
        return this.http.post(archivoURL + '/create', body, options)
            .toPromise()
            .then()
            .catch();
    };
    ViviendaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ViviendaServiceProvider);
    return ViviendaServiceProvider;
}());

//# sourceMappingURL=vivienda-service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vivienda_service_vivienda_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListPage = (function () {
    function ListPage(navCtrl, navParams, _viviendaServiceProvider, camera, modalCtrl, http, platform, loadingCtrl, toastCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._viviendaServiceProvider = _viviendaServiceProvider;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.respuesta = false;
        this.images_antes = [];
        this.images_despues = [];
        this.platform.ready().then(function () {
            _this.platform.registerBackButtonAction(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            });
        });
        this.ur = navParams.get('ur');
        this.getVivienda(this.ur);
        this.loader = this.loadingCtrl.create({ content: "Cargando..." });
        this.loader.present();
    }
    //Guarda los datosde la vivienda
    ListPage.prototype.enviar = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({ content: "Cargando..." });
        this.loader.present();
        this._viviendaServiceProvider.UpdateVivienda(this.vivienda, this.finalizado, this.terminado, this.faltado)
            .then(function (res) {
            _this.presentToast('Guardado bien los datos de la vivienda');
            _this.addFotos();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    //Guarda las fotos
    ListPage.prototype.addFotos = function () {
        var _this = this;
        //Primero creamos dos variables con los base64 de cada foto separadas por ","       
        var imagenes_antes = "";
        var imagenes_despues = "";
        for (var i = 0; i < this.images_antes.length; i++) {
            imagenes_antes += this.images_antes[i];
            imagenes_antes += ',';
        }
        imagenes_antes = imagenes_antes.substr(0, imagenes_antes.length - 1);
        for (var i = 0; i < this.images_despues.length; i++) {
            this.presentToast(this.images_despues[i]);
            imagenes_despues += this.images_despues[i] + ',';
        }
        imagenes_despues = imagenes_despues.substr(0, imagenes_despues.length - 1);
        //A continuación guardamos las fotos primero las de antes y luego las de después.
        this._viviendaServiceProvider.addFoto(imagenes_antes, 1, this.ur, 1)
            .then(function (res) {
            _this.presentToast('Guardado bien las primeras fotos');
            _this._viviendaServiceProvider.addFoto(imagenes_despues, 2, _this.ur, 1)
                .then(function (res) {
                console.log('BIEEEN!');
                _this.presentToast('Guardo bien las fotos');
                _this.loader.dismiss();
            })
                .catch(function (error) {
                _this.presentToast(error);
                console.log(error);
                _this.loader.dismiss();
            });
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log(error);
            _this.loader.dismiss();
        });
    };
    //Obtiene la latitud y la longitud de la vivienda de la direccion
    ListPage.prototype.getLatitudLongitud = function () {
        var _this = this;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.vivienda.Direccion
            + ' ' + this.vivienda.Poblacion
            + ' ' + this.vivienda.Provincia
            + '&key=AIzaSyCZZTQDqErFvxJJMNvDE8ZN3XCAx6Trfj4';
        this.http.get(url)
            .toPromise()
            .then(function (res) {
            var respuesta = res.json();
            _this.latitud = respuesta.results[0]['geometry']['location'].lat;
            _this.longitud = respuesta.results[0]['geometry']['location'].lng;
            console.log('Longitud:' + _this.longitud + 'Latitud: ' + _this.latitud);
        })
            .catch(function (error) {
            console.log('Error al obtener la latitud');
        });
    };
    ListPage.prototype.getVivienda = function (ur) {
        var _this = this;
        this._viviendaServiceProvider.getVivienda(ur)
            .then(function (value) {
            _this.respuesta = true;
            _this.vivienda = value.json();
            _this.faltado = _this.vivienda.faltado;
            _this.finalizado = _this.vivienda.finalizado;
            _this.terminado = _this.vivienda.terminado;
            _this.loader.dismiss();
            _this.getLatitudLongitud();
        });
    };
    ListPage.prototype.getPicture_despues = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (ImageData) {
            //this.image = `data:image/jpeg;base64,${ImageData}`;
            _this.images_despues.push(ImageData);
            //console.log(ImageData);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ListPage.prototype.getPicture_antes = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (ImageData) {
            //this.image = `data:image/jpeg;base64,${ImageData}`;
            _this.images_antes.push(ImageData);
            //console.log(ImageData);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ListPage.prototype.addTrabajadorVivienda = function () {
        var modal = this.modalCtrl.create('ModelTrabajadorViviendaPage', { vivienda: this.vivienda });
        modal.present();
    };
    ListPage.prototype.presentToast = function (mensaje) {
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
    ListPage.prototype.longPress = function (index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Borrar imagen',
            message: '¿Quieres borrar la imagen?' + index,
            buttons: [
                {
                    text: 'NO',
                    role: 'NO',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'SI',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.images_antes.splice(index, 1);
                    }
                }
            ]
        });
        alert.present();
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\xampp\htdocs\AplicationMobile\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Detalle Vivienda</ion-title>\n\n\n\n<ion-buttons right>\n\n      <button (click)="enviar()" ion-button icon-only><ion-icon name="send"></ion-icon></button>\n\n    </ion-buttons>\n\n\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n	<div *ngIf="respuesta">\n\n\n\n	<ion-card>\n\n  		<ion-card-header>\n\n    		{{vivienda.UR}}\n\n  		</ion-card-header>\n\n  		<ion-card-content>\n\n    		<label>Direción: </label>{{vivienda.Direccion}}<br>\n\n    		<label>Población: </label>{{vivienda.Poblacion}}<br>\n\n    		<label>Provincia: </label>{{vivienda.Provincia}}<br>\n\n  		</ion-card-content>\n\n	</ion-card>\n\n\n\n\n\n<!-- Foto Antes -->\n\n	<ion-card>\n\n		<button  (click)="getPicture_antes()" ion-button round>Añadir Foto Antes</button>\n\n			<!-- <img id="imagen" *ngFor="let i of images_antes" src="data:image/jpg;base64,{{i}}" width="50" height="50"/> -->\n\n\n\n    <ion-grid >\n\n      <ion-row>\n\n        <ion-col col-6 col-md-4 col-xl-3 *ngFor="let i of images_antes; let in = index">\n\n          <div class="image-container" >\n\n            <img (press)="longPress(in)" id="imagen" src="data:image/jpg;base64,{{i}}"/> \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n	</ion-card>\n\n\n\n\n\n\n\n<!-- Foto Después -->\n\n	<ion-card>\n\n		<button  (click)="getPicture_despues()" ion-button round>Añadir Foto Después</button>\n\n		<ion-grid >\n\n      <ion-row>\n\n        <ion-col col-6 col-md-4 col-xl-3 *ngFor="let i of images_despues">\n\n          <div class="image-container" >\n\n            <img id="imagen" src="data:image/jpg;base64,{{i}}"/> \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n	</ion-card>\n\n\n\n\n\n<ion-card>\n\n  		<ion-item>\n\n  			<ion-label>Terminado</ion-label>\n\n  			<ion-checkbox  [(ngModel)]="terminado" color="blue" checked="false"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n  			<ion-label>Finalizado</ion-label>\n\n  			<ion-checkbox [(ngModel)]="finalizado"  color="blue" checked="false"></ion-checkbox>\n\n		</ion-item>\n\n \n\n\n\n</ion-card>\n\n<ion-card>\n\n  		<ion-textarea [(ngModel)]="faltado"  placeholder="faltado...."></ion-textarea>\n\n</ion-card>\n\n\n\n  		<!-- Aqui iriía el mapa -->\n\n<div id="map_canvas"></div>\n\n\n\n</div>\n\n\n\n\n\n<ion-fab right bottom>\n\n	<button ion-fab color="primary" (click)="addTrabajadorVivienda()"><ion-icon name="add"></ion-icon></button>\n\n</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\AplicationMobile\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_vivienda_service_vivienda_service__["a" /* ViviendaServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map