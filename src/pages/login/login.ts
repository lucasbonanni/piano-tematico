import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  register: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.register = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registrar(){
    this.register = true;
  }

  noRegistrarse(){
    this.register = false;
  }
}
