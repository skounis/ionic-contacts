webpackJsonp([0],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MASTER_TOKEN; });
var apiUrl = 'https://rest-contacts.herokuapp.com/'; //'http://192.168.1.24:9000/';
var MASTER_TOKEN = 'pKiTGTGlJEXkgjXJbTSI7oTWHsGKGPrB';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 140:
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
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/skounis/Documents/ionic/ionic-contacts/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Ionic Contacts</h1>\n  <p>Play with Ionic, Electron and REST, the RESTful API generator using NodeJS, Express and Mongoose.</p>\n  <ul>\n    <li><a href="https://github.com/skounis/ionic-contacts" target="_blank">https://github.com/skounis/ionic-contacts</a></li>\n    <li><a href="https://github.com/skounis/nodejs-rest-contacts" target="_blank">https://github.com/skounis/nodejs-rest-contacts</a></li>\n  </ul>\n  <h2>Stavros Kounis</h2>\n  <ul>\n    <li><a href="https://skounis.github.io/" target="_blank">skounis.github.io/</a></li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"/Users/skounis/Documents/ionic/ionic-contacts/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ContactStore = /** @class */ (function () {
    function ContactStore(data, toastCtrl) {
        this.data = data;
        this.toastCtrl = toastCtrl;
    }
    /**
     * Load the contacts. Keep a cached varsion.
     */
    ContactStore.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.data.getContacts().then(function (x) { return x; })];
                    case 1:
                        _a.records = _b.sent();
                        this.show('Contact list updated.');
                        console.log(this.records);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Serialize a contact. Create a new record on updated an
     * exiting one based on the given `_id`
     *
     * @param model The contact to be serialized.
     *
     * @return //TODO: describe the return
     */
    ContactStore.prototype.update = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!model.id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.data.updateContact(model)];
                    case 1:
                        response = _a.sent();
                        this.updateLocal(response);
                        this.show('Contact updated.');
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.data.createContact(model)];
                    case 3:
                        response = _a.sent();
                        this.createLocal(response);
                        this.show('Contact created.');
                        _a.label = 4;
                    case 4: return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Delete a contact
     *
     * @param model The contact to be deleted.
     *
     */
    ContactStore.prototype.delete = function (model) {
        var _this = this;
        this.data.deleteContact(model.id).subscribe(function (data) {
            _this.deleteLocal(model);
            _this.show('Contact deleted.');
        });
    };
    //
    // We keep the local/cached records synchronized, so
    // there is no need to additional API call to get back
    // the updated list of records.
    //
    /**
     * Delete the record from the local/cached recordset.
     *
     * @param model The contact to be deleted.
     */
    ContactStore.prototype.deleteLocal = function (model) {
        this.records = this.records.filter(function (x) { return x !== model; });
    };
    /**
     * Update the record in the local/cached recordset
     *
     * @param model The contact to be updated.
     */
    ContactStore.prototype.updateLocal = function (model) {
        var recordToUpdate = this.records.find(function (x) { return x.id === model.id; });
        Object.assign(recordToUpdate, model);
    };
    /**
     * Create a record in the local/cached recordset
     *
     * @param model The just created contact.
     */
    ContactStore.prototype.createLocal = function (model) {
        this.records.push(model);
    };
    ContactStore.prototype.show = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    };
    ContactStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ToastController */]])
    ], ContactStore);
    return ContactStore;
}());

//# sourceMappingURL=contact.store.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    //
    // Contacts
    //
    DataService.prototype.getContacts = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* apiUrl */] + "contacts";
        return this.http.get(url).toPromise();
    };
    /**
     *	Create contact
     *
     * @param contact Contact
     * @return Contact The updated contact
     */
    DataService.prototype.createContact = function (contact) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* apiUrl */] + "contacts";
        return this.http.post(url, contact).toPromise();
    };
    /**
     *	Update contact
     *
     * @param contact Contact
     * @return Contact The updated contact
     */
    DataService.prototype.updateContact = function (contact) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* apiUrl */] + "contacts/" + contact.id;
        return this.http.put(url, contact).toPromise();
    };
    /**
     * Delete contact
     *
     * @param id The ID of the Contact to be deleted
     */
    DataService.prototype.deleteContact = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* apiUrl */] + "contacts/" + id;
        return this.http.delete(url);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_contact__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//
// Model Driven forms
// https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol
// https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
//
var EditPage = /** @class */ (function () {
    function EditPage(navParams, fb, navCtrl) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.record = navParams.get('record') || __WEBPACK_IMPORTED_MODULE_3__models_contact__["a" /* Contact */].instance();
        this.store = navParams.get('store');
    }
    EditPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            firstname: [this.record.firstname],
            lastname: [this.record.lastname, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            email: [this.record.email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]],
            // phones: this.fb.array([
            //   this.initPhones(),
            // ])
            phones: this.fb.array(this.initPhones())
        });
        console.log(this.form);
    };
    EditPage.prototype.initPhones = function () {
        // initialize phones
        var controls = [];
        for (var i = 0; i < this.record.phones.length; i++) {
            controls.push(this.fb.group({
                phoneType: [this.record.phones[i].phoneType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
                phoneNumber: [this.record.phones[i].phoneNumber, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^0\d{2}-\d{7}/gm)]
            }));
        }
        return controls;
    };
    EditPage.prototype.addPhone = function () {
        var control = this.form.controls['phones'];
        // add phone to the list
        var c = this.fb.group({
            phoneType: ['mobile', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^0\d{2}-\d{7}/gm)]
        });
        control.push(c);
    };
    EditPage.prototype.removePhone = function (i) {
        var control = this.form.controls['phones'];
        ;
        control.removeAt(i);
    };
    EditPage.prototype.save = function () {
        console.log('Record:', this.record);
        console.log('Form:', this.form.value);
        var updated = Object.assign(this.record, this.form.value);
        console.log('Updated:', updated);
        this.store.update(updated);
        this.navCtrl.pop();
        // // Toast
        // this.toastService.show();
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit',template:/*ion-inline-start:"/Users/skounis/Documents/ionic/ionic-contacts/src/pages/edit/edit.html"*/'firstname<ion-header>\n	<ion-navbar>\n		<ion-title>{{record.id ? \'Edit\' : \'New\'}} Contact</ion-title>\n		<ion-buttons end>\n			<button ion-button icon-only (click)="save()" [disabled]="!form.valid">\n				<ion-icon name="return-left"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<!-- <form (ngSubmit)="submit()" [formGroup]="form"> -->\n	<form [formGroup]="form">\n		<ion-list>\n			<ion-list-header>\n				Contact\n			</ion-list-header>\n\n			<!-- First Name -->\n			<!-- ========== -->\n			<ion-item [ngClass]="{ invalid: firstnameErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-label stacked>First Name</ion-label>\n				<ion-input type="text" placeholder="Enter the first name" formControlName="firstname"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="firstname" #firstnameErrors="ngxErrors" padding-horizontal>\n				<div [ngxError]="[\'required\']" [when]="[\'touched\']">First name is required</div>\n			</div>\n\n			<!-- Last Name -->\n			<!-- ========== -->\n			<ion-item [ngClass]="{ invalid: lastnameErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-label stacked>Last Name*</ion-label>\n				<ion-input type="text" placeholder="Enter the last name" formControlName="lastname"></ion-input>\n			</ion-item>\n\n			<div ngxErrors="lastname" #lastnameErrors="ngxErrors" padding-horizontal>\n				<div [ngxError]="[\'required\']" [when]="[\'touched\']">Last name is required</div>\n			</div>\n\n			<!-- Email -->\n			<!-- ========== -->\n			<ion-item  [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n				<ion-label stacked>Email*</ion-label>\n				<ion-input type="text" placeholder="Enter the email" formControlName="email"></ion-input>\n			</ion-item>\n\n			<div [ngxErrors]="\'email\'" #emailErrors="ngxErrors" padding-horizontal>\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n			</div>\n		</ion-list>\n\n		<!-- Phones -->\n		<!-- ===== -->\n		<!-- formGroupName="profile" -->\n		<ion-list  formArrayName="phones">\n			<ion-list-header>\n				Phones <span item-end><button ion-button clear (click)="addPhone();">Add</button></span>\n			</ion-list-header>\n			<ng-container *ngFor="let phone of form.controls.phones.controls; let i=index">\n				<div [formGroupName]="i">\n					<ion-item-divider color="light">\n						Phone {{i + 1}}\n						<span item-end><button ion-button clear (click)="removePhone(i);">Remove</button></span>\n					</ion-item-divider>\n					<ion-item>\n						<ion-label stacked>Phone Type</ion-label>\n						<!-- <ion-input type="text" placeholder="Enter phone type" formControlName="phoneType"></ion-input> -->\n						<ion-select formControlName="phoneType">\n							<ion-option value="fixed">\n								Fixed\n							</ion-option>\n							<ion-option value="mobile">\n								Mobile\n							</ion-option>\n						</ion-select>\n					</ion-item>\n\n					<ion-item>\n						<ion-label stacked>Phone Number</ion-label>\n						<ion-input type="text" maxlength="11" placeholder="Enter phone number" formControlName="phoneNumber"></ion-input>\n					</ion-item>\n					<div padding-horizontal>Format: 0AA-BBBBBBB</div>\n				</div>\n			</ng-container>\n		</ion-list>\n\n	</form>\n\n\n	<ion-fab right bottom padding>\n		<button ion-fab (click)="save()" [disabled]="!form.valid"><ion-icon name="return-left"></ion-icon></button>\n	</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/skounis/Documents/ionic/ionic-contacts/src/pages/edit/edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_edit__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_contact_store__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, store) {
        this.navCtrl = navCtrl;
        this.store = store;
        this.cache = null;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.store.load();
        console.log(this.store.records);
    };
    /**
     * Navigate to the Edit screen
     *
     * @param record The contact to be shown/edited
     */
    HomePage.prototype.show = function (record) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__edit_edit__["a" /* EditPage */], { record: record, store: this.store });
    };
    /**
     * Navigate to the Edit screen for creation
     */
    HomePage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__edit_edit__["a" /* EditPage */], { record: null, store: this.store });
    };
    /**
     * Delete a contact
     *
     * @param record The contact to be deleted
     */
    HomePage.prototype.delete = function (record) {
        this.store.delete(record);
    };
    HomePage.prototype.filter = function (event) {
        console.log(event);
        var val = event.target.value;
        console.log(val);
        if (!this.cache) {
            this.cache = this.store.records;
        }
        if (val && val.trim() != '') {
            this.store.records = this.cache.filter(function (item) {
                return (item.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1
                    || item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.store.records = this.cache;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/skounis/Documents/ionic/ionic-contacts/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="filter($event)"></ion-searchbar>\n   <ion-list>\n     <ion-list-header>\n       Contacts\n     </ion-list-header>\n\n     <ion-item-sliding *ngFor="let record of store.records;" #slidingItem>\n       <ion-item (click)="show(record)">\n         <ion-avatar item-start>\n           <img src="http://i.pravatar.cc/64?u={{record.id}}">\n         </ion-avatar>\n         <h2>{{record.lastname}} {{record.firstname}}</h2>\n         <p>{{record.email}}</p>\n       </ion-item>\n       <ion-item-options>\n         <button ion-button color="danger" icon-start (click)="delete(record)">\n           <ion-icon name="Delete"></ion-icon>\n           Delete\n         </button>\n       </ion-item-options>\n     </ion-item-sliding>\n   </ion-list>\n\n   <ion-fab right bottom padding>\n     <button ion-fab (click)="create()"><ion-icon name="add"></ion-icon></button>\n   </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/skounis/Documents/ionic/ionic-contacts/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__stores_contact_store__["a" /* ContactStore */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/skounis/Documents/ionic/ionic-contacts/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/skounis/Documents/ionic/ionic-contacts/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interceptors_auth_interceptor__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_contact_store__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ultimate_ngxerrors__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__ultimate_ngxerrors__["a" /* NgxErrorsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_4__interceptors_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_6__stores_contact_store__["a" /* ContactStore */],
                __WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (req.url.indexOf("" + __WEBPACK_IMPORTED_MODULE_3__config__["b" /* apiUrl */]) < 0) {
            return next.handle(req);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */]()
            .set('Content-Type', 'application/json');
        // Do not add authenication headers
        // 1: During authenication
        // 2. other.
        // var isAuthentication = req.url.indexOf(`/auth/`) > 0;
        var isAuthentication = false;
        if (!isAuthentication) {
            headers = headers.set('Authorization', 'Bearer ' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* MASTER_TOKEN */]);
        }
        var authReq = req.clone({ headers: headers });
        // return next.handle(authReq);
        return next.handle(authReq).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (event) { }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                console.log('HTTP error: ', err);
            }
        }));
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* unused harmony export Phone */
var Contact = /** @class */ (function () {
    function Contact() {
    }
    Contact.instance = function () {
        var c = new Contact();
        c.firstname = '';
        c.lastname = '';
        c.email = '';
        c.phones = [];
        return c;
    };
    return Contact;
}());

var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/skounis/Documents/ionic/ionic-contacts/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/skounis/Documents/ionic/ionic-contacts/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.js.map