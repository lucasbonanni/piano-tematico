import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Loading } from 'ionic-angular';
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
    private alertCtrl: AlertController,
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
      alert(error);
      this.busyLoader.dismissBusyLoader();
    });
  }

  showLoading() {
    // this.loading = this.loadingCtrl.create({ ------------------------------
    //   content: 'Por favor espere...',
    //   dismissOnPageChange: true
    // });
    // this.loading.present();
  }



  showError(text) {
    // this.loading.dismiss();      --------------------------------

    let alert = this.alertCtrl.create({
      title: 'Falló',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }


  public register() {
    this.auth.signUp(this.registerCredentials).then(() => {
      this.nav.setRoot(HomePage);
    }).catch(error => {
      alert(error);
    });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  showRegistration() {
    this.showRegister = true;
  }

  hideRegistration() {
    this.showRegister = false;
  }
}
