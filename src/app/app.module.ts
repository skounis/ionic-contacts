import { ErrorHandler, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ContactStore } from '../stores/contact.store';
import { DataService } from '../services/data.service';
import { EditPage } from '../pages/edit/edit';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    AboutPage,
    EditPage,
    HomePage,
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AboutPage,
    EditPage,
    HomePage,
    MyApp,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ContactStore,
    DataService,
    SplashScreen,
    StatusBar
  ]
})
export class AppModule {}
