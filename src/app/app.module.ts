import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { KategoriProvider } from '../providers/kategori/kategori';
import { MainProvider } from '../providers/main/main';
import { MateriProvider } from '../providers/materi/materi';
import { MlearningProvider } from '../providers/mlearning/mlearning';
import { PanduanProvider } from '../providers/panduan/panduan';
import { PengumumanProvider } from '../providers/pengumuman/pengumuman';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    KategoriProvider,
    MainProvider,
    MateriProvider,
    MlearningProvider,
    PanduanProvider,
    PengumumanProvider
  ]
})
export class AppModule {}
