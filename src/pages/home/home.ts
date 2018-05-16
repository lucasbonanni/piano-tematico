import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavController, IonicPage, Button, Platform } from 'ionic-angular';
import { SoundProvider } from '../../providers/sound/sound';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {


  isRecording: boolean = false;
  soundsNames: Array<string>;

  @ViewChild('imageButton1') imageButton1: ElementRef;
  @ViewChild('imageButton2') imageButton2: ElementRef;
  @ViewChild('imageButton3') imageButton3: ElementRef;
  @ViewChild('imageButton4') imageButton4: ElementRef;
  @ViewChild('imageButton5') imageButton5: ElementRef;
  //buttons Button1
  @ViewChild('Button1') Button1: Button;
  @ViewChild('Button2') Button2: Button;
  @ViewChild('Button3') Button3: Button;
  @ViewChild('Button4') Button4: Button;
  @ViewChild('Button5') Button5: Button;

  constructor(public navCtrl: NavController, private soundSrv: SoundProvider, private platform: Platform) {
    this.soundsNames = this.soundSrv.getmortalKombatSounds();
  }

  ngOnInit(): void {
    // console.log(this.imageButton1.nativeElement.src);
    // const button = this.Button1.getNativeElement();
    // button.name = 'pepe';
    // console.log(button.name);
    // this.InitializeButton1();
    if (this.platform.is('mobile')) {
      this.InitializeButtons();
    }
  }

  InitializeButtons(): any {
    this.InitializeButton1(this.soundsNames[0]);
    this.InitializeButton2(this.soundsNames[1]);
    this.InitializeButton3(this.soundsNames[2]);
    // this.InitializeButton4(this.soundsNames[3]);
    // this.InitializeButton5(this.soundsNames[4]);
  }
  InitializeButton1(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton1.nativeElement.src = path;
    const button = this.Button1.getNativeElement();
    button.name = soundName;
  }

  InitializeButton2(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton2.nativeElement.src = path;
    const button = this.Button2.getNativeElement();
    button.name = soundName;
  }

  InitializeButton3(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton3.nativeElement.src = path;
    const button = this.Button3.getNativeElement();
    button.name = soundName;
  }

  InitializeButton4(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton4.nativeElement.src = path;
    const button = this.Button4.getNativeElement();
    button.name = soundName;
  }

  InitializeButton5(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton5.nativeElement.src = path;
    const button = this.Button5.getNativeElement();
    button.name = soundName;
  }


  getImageSource(soundName: string) {
    return 'assets/imgs/buttons/' + soundName + '.png';
  }

  playButton1Sound() {
    const button = this.Button1.getNativeElement();
    this.soundSrv.playSound(button.name);
  }

  playButton2Sound() {
    const button = this.Button2.getNativeElement();
    this.soundSrv.playSound(button.name);
  }

  playButton3Sound() {
    const button = this.Button3.getNativeElement();
    this.soundSrv.playSound(button.name);
  }

}
