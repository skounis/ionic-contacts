import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { AboutPage } from '../pages/about/about';
import { BrowserModule } from '@angular/platform-browser';
import { ContactPage } from '../pages/contact/contact';
import { ContactStore } from '../stores/contact.store';
import { DataService } from '../services/data.service';
import { DetailsPage } from '../pages/details/details';
import { EditPage } from '../pages/edit/edit';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    AboutPage,
    ContactPage,
    DetailsPage,
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
    ContactPage,
    DetailsPage,
    EditPage,
    HomePage,
    MyApp,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactStore,
    DataService,
    SplashScreen,
    StatusBar
  ]
})
export class AppModule {}
