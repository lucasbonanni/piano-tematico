import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Loading, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { BusyLoaderProvider } from '../../providers/busy-loader/busy-loader';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  showRegister: boolean;

  loading: Loading;
  createSuccess = false;
  registerCredentials = { email: '', password: '', password2: '' };

  constructor(
    private nav: NavController,
    private auth: AuthServiceProvider,
    private toastCtrl: ToastController,
    private busyLoader: BusyLoaderProvider) {
    this.showRegister = false;
  }


  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.busyLoader.showBusyLoader();
    this.auth.signInWithEmail(this.registerCredentials).then(allowed => {
      console.log(allowed);
      this.busyLoader.dismissBusyLoader();
      this.nav.setRoot('HomePage');
    }).catch(error => {
      this.showMessage(error);
      this.busyLoader.dismissBusyLoader();
    });
  }


  public register() {
    this.auth.signUp(this.registerCredentials).then(() => {
      this.nav.setRoot(HomePage);
    }).catch(error => {
      this.showMessage(error);
    });
  }


  showRegistration() {
    this.showRegister = true;
  }

  hideRegistration() {
    this.showRegister = false;
  }

  showMessage(text:string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
