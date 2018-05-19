import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BusyLoaderProvider } from '../providers/busy-loader/busy-loader';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  splash: boolean = true;
  rootPage:any = 'LoginPage';

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private busyLoader:BusyLoaderProvider) {
    this.busyLoader.showBusyLoader();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      setTimeout(() => {
        this.splash = false
        this.busyLoader.dismissBusyLoader();
      }, 3000);
    });
  }
}

