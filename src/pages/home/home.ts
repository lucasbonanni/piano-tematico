import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavController, IonicPage, Button } from 'ionic-angular';
import { SoundProvider } from '../../providers/sound/sound';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private isRecording: boolean = false;
  private soundsNames: Array<string> = [];

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

  private buttonText1: string = '';
  private buttonText2: string = '';
  private buttonText3: string = '';
  private buttonText4: string = '';
  private buttonText5: string = '';

  constructor(public navCtrl: NavController, private soundSrv: SoundProvider) {    
  }

  ngOnInit(): void {
      this.soundsNames = this.soundSrv.getCounterStrikeSounds();
      this.InitializeButtons();
  }

  InitializeButtons(): any {
    this.InitializeButton1(this.soundsNames[0]);
    this.InitializeButton2(this.soundsNames[1]);
    this.InitializeButton3(this.soundsNames[2]);
    this.InitializeButton4(this.soundsNames[3]);
    this.InitializeButton5(this.soundsNames[4]);
  }
  InitializeButton1(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton1.nativeElement.src = path;
    const button = this.Button1.getNativeElement();
    button.name = soundName;
    this.buttonText1 = soundName.replace(/\_/g,' ');
  }

  InitializeButton2(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton2.nativeElement.src = path;
    const button = this.Button2.getNativeElement();
    button.name = soundName;
    this.buttonText2 = soundName.replace(/\_/g,' ');
  }

  InitializeButton3(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton3.nativeElement.src = path;
    const button = this.Button3.getNativeElement();
    button.name = soundName;
    this.buttonText3 = soundName.replace(/\_/g,' ');
  }

  InitializeButton4(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton4.nativeElement.src = path;
    const button = this.Button4.getNativeElement();
    button.name = soundName;
    this.buttonText4 = soundName.replace(/\_/g,' ');
  }

  InitializeButton5(soundName: string) {
    const path = this.getImageSource(soundName);
    this.imageButton5.nativeElement.src = path;
    const button = this.Button5.getNativeElement();
    button.name = soundName;
    this.buttonText5 = soundName.replace(/\_/g,' ');
  }


  getImageSource(soundName: string) {
    return 'assets/imgs/buttons/' + soundName + '.png';
  }

  public playButton1Sound() {
    const button = this.Button1.getNativeElement();
    this.playSound(button.name);
  }

  public playButton2Sound() {
    const button = this.Button2.getNativeElement();
    this.playSound(button.name);
  }

  public playButton3Sound() {
    const button = this.Button3.getNativeElement();
    this.playSound(button.name);
  }

  public playButton4Sound() {
    const button = this.Button4.getNativeElement();
    this.playSound(button.name);
  }

  public playButton5Sound() {
    const button = this.Button5.getNativeElement();
    this.playSound(button.name);
  }

  public getMortalKombat(){
    this.soundsNames = this.soundSrv.getMortalKombatSounds();
    this.InitializeButtons();
  }

  public getMarioBros(){
    this.soundsNames = this.soundSrv.getMarioBrossSounds();
    this.InitializeButtons();
  }

  public getCounterStrike(){
    this.soundsNames = this.soundSrv.getCounterStrikeSounds();
    this.InitializeButtons();
  }

  private playSound(name:string){
    this.soundSrv.playSound(name);
    if(this.isRecording){
      this.soundSrv.addToSecuence(name);
    }
  }

  public startRecording(){
    this.soundSrv.clearSecuence();
    this.isRecording = true;
  }

  public playRecording(){
    this.soundSrv.playrecordedSecuence();
  }
}
